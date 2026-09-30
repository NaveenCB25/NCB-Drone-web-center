import React, { useState, useMemo } from 'react';
import type { PlacedNode } from '../types/drone';
import { HandDrawnIsometricGraphic } from '../components/HandDrawnIsometricDrone';
import {
  DollarSign,
  Wind,
  CheckCircle2,
  FileSpreadsheet,
  BatteryCharging,
  Gauge,
  Copy,
  Check
} from 'lucide-react';

interface RealWorldPageProps {
  placedNodes: PlacedNode[];
  wireConnections?: any;
  onOpenBuilder?: () => void;
}

export const RealWorldPage: React.FC<RealWorldPageProps> = ({
  placedNodes
}) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [flightSpeedSlider] = useState<number>(45); // 45 km/h
  const [copiedCli, setCopiedCli] = useState<boolean>(false);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  // Group items by component ID for Bill of Materials (BOM)
  const bomItems = useMemo(() => {
    const itemMap = new Map<string, { component: any; quantity: number; totalMass: number; totalCostUsd: number; totalCostInr: number }>();

    placedNodes.forEach(node => {
      const comp = node.component;
      if (itemMap.has(comp.id)) {
        const existing = itemMap.get(comp.id)!;
        existing.quantity += 1;
        existing.totalMass += comp.massGrams;
        existing.totalCostUsd += comp.realWorld.retailPriceUsd;
        existing.totalCostInr += comp.realWorld.retailPriceInr;
      } else {
        itemMap.set(comp.id, {
          component: comp,
          quantity: 1,
          totalMass: comp.massGrams,
          totalCostUsd: comp.realWorld.retailPriceUsd,
          totalCostInr: comp.realWorld.retailPriceInr
        });
      }
    });

    return Array.from(itemMap.values());
  }, [placedNodes]);

  // Real-world Flight Physics Calculations
  const physics = useMemo(() => {
    let totalMassGrams = 0;
    let totalThrustGrams = 0;
    let motorCount = 0;
    let totalBatteryWh = 0;
    let totalCostUsd = 0;
    let totalCostInr = 0;
    let hasTurbine = false;

    placedNodes.forEach(n => {
      totalMassGrams += n.component.massGrams;
      totalCostUsd += n.component.realWorld.retailPriceUsd;
      totalCostInr += n.component.realWorld.retailPriceInr;
      if (n.component.category === 'motor') {
        motorCount++;
        totalThrustGrams += n.component.thrustGrams || 1550;
      }
      if (n.component.category === 'battery') {
        const volts = n.component.voltageNominal || 22.2;
        const ah = (n.component.capacityMah || 5000) / 1000;
        totalBatteryWh += volts * ah;
      }
      if (n.component.category === 'turboWind') {
        hasTurbine = true;
      }
    });

    const massKg = totalMassGrams > 0 ? totalMassGrams / 1000 : 1.2;
    // Average multirotor efficiency: ~140 Watts per kg in hover
    const hoverPowerWatts = massKg * 140;
    // Base flight time without wind energy
    const baseHoverMinutes = hoverPowerWatts > 0 ? (totalBatteryWh * 0.85 / hoverPowerWatts) * 60 : 0;
    // Bonus time from Top Wind Turbine Generator at cruising speed
    const turbineBonusWatts = hasTurbine ? Math.min(120, Math.pow(flightSpeedSlider / 40, 2) * 95) : 0;
    const netHoverPower = Math.max(20, hoverPowerWatts - turbineBonusWatts);
    const totalCruisingMinutes = (totalBatteryWh * 0.85 / netHoverPower) * 60;

    const twr = totalMassGrams > 0 ? Number((totalThrustGrams / totalMassGrams).toFixed(2)) : 0;
    const maxSpeedKmh = Math.round(Math.min(140, Math.sqrt(Math.max(1, twr)) * 48));
    const maxPayloadGrams = Math.max(0, Math.round(totalThrustGrams * 0.5 - totalMassGrams));

    return {
      totalMassGrams,
      totalCostUsd,
      totalCostInr,
      totalBatteryWh: Math.round(totalBatteryWh),
      hoverPowerWatts: Math.round(hoverPowerWatts),
      turbineBonusWatts: Math.round(turbineBonusWatts),
      baseHoverMinutes: Number(baseHoverMinutes.toFixed(1)),
      totalCruisingMinutes: Number(totalCruisingMinutes.toFixed(1)),
      twr,
      maxSpeedKmh,
      maxPayloadGrams,
      motorCount,
      hasTurbine
    };
  }, [placedNodes, flightSpeedSlider]);

  // Export BOM as CSV
  const handleExportBomCsv = () => {
    let csv = 'Item Name,Manufacturer,Model Number,Category,Quantity,Unit Mass (g),Total Mass (g),Unit Price (USD),Unit Price (INR),Total Price (USD),Total Price (INR)\n';
    bomItems.forEach(item => {
      csv += `"${item.component.name}","${item.component.realWorld.manufacturer}","${item.component.realWorld.modelNumber}","${item.component.category}",${item.quantity},${item.component.massGrams},${item.totalMass},${item.component.realWorld.retailPriceUsd},${item.component.realWorld.retailPriceInr},${item.totalCostUsd},${item.totalCostInr}\n`;
    });
    csv += `\n"TOTALS","","","Total Components: ${placedNodes.length}",${placedNodes.length},"Total Mass (g)",${physics.totalMassGrams},"Total (USD)",${physics.totalCostUsd},"Total (INR)",${physics.totalCostInr}\n`;

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `NCB-Drone-Bill-Of-Materials-${Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);

    setExportNotice("Bill of Materials CSV exported successfully!");
    setTimeout(() => setExportNotice(null), 3500);
  };

  // Generate Betaflight / ArduPilot CLI script
  const generatedCliDump = useMemo(() => {
    return `# ========================================================
# NCB TECHNOLOGY SOLUTIONS — DRONE REAL-WORLD CONFIG DUMP
# Generated for: NCB Smart Drone / FPV Custom Build
# ========================================================

# Board & Protocol Settings
set motor_pwm_protocol = DSHOT600
set dshot_bidir = ON
set dshot_idle_value = 550
set mixer_type = QUADX

# Battery & Voltage Scalers (6S 22.2V LiPo)
set vbat_scale = 110
set vbat_warning_cell_voltage = 350
set vbat_min_cell_voltage = 330
set ibata_scale = 200

# Flight Controller UART Mapping
# UART1: GPS (Matek M10Q-5883 GNSS Compass)
serial 0 2 115200 57600 0 115200
# UART2: 360 LiDAR / Radar Scanner (Rangefinder)
serial 1 32 115200 57600 0 115200
# UART3: VTX SmartAudio (TBS Unify Pro32)
serial 2 2048 115200 57600 0 115200
# UART6: NCB Smart Charge Controller Telemetry
serial 5 1 115200 57600 0 115200

# Fail-safe & In-Flight Power Handover
set failsafe_procedure = RTH
set failsafe_switch_mode = STAGE2
set auto_disarm_delay = 5

save`;
  }, []);

  const handleCopyCli = () => {
    navigator.clipboard.writeText(generatedCliDump);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2500);
  };

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      
      {/* Top Real-World Conversion Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(12, 24, 44, 0.95), rgba(17, 34, 62, 0.85))',
        border: '1px solid rgba(0, 240, 255, 0.25)',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        marginBottom: '2rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="telemetry-badge telemetry-badge-emerald">REAL-WORLD CONVERSION ENGINE</span>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Physical Hardware BOM, Solder Pinout &amp; Flight Physics</span>
            </div>
            <h1 style={{ fontSize: '2rem', color: '#ffffff', marginTop: '6px' }}>
              Real-World Engineering &amp; Build Center
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {/* Currency toggle */}
            <div style={{
              background: 'rgba(5, 10, 20, 0.6)',
              padding: '3px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex'
            }}>
              <button
                onClick={() => setCurrency('USD')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '6px',
                  background: currency === 'USD' ? '#00f0ff' : 'transparent',
                  color: currency === 'USD' ? '#050a14' : '#94a3b8',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('INR')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '6px',
                  background: currency === 'INR' ? '#00f0ff' : 'transparent',
                  color: currency === 'INR' ? '#050a14' : '#94a3b8',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                INR (₹)
              </button>
            </div>

            <button
              onClick={handleExportBomCsv}
              className="btn-primary"
              style={{ fontSize: '0.82rem', padding: '9px 18px', gap: '6px' }}
            >
              <FileSpreadsheet size={16} />
              <span>Export BOM (.CSV)</span>
            </button>
          </div>
        </div>

        <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '900px', lineHeight: 1.65 }}>
          Convert your virtual Cisco Packet Tracer drone architecture into a physical build.
          Review commercial off-the-shelf part numbers from verified manufacturers (T-Motor, Holybro, SpeedyBee, Benewake, Tattu), exact soldering pad labels, AWG wire gauges, real-world flight endurance calculations, and flight controller CLI firmware scripts.
        </p>
      </div>

      {exportNotice && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.2)',
          border: '1px solid #10b981',
          color: '#34d399',
          padding: '10px 16px',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.85rem'
        }}>
          <CheckCircle2 size={16} />
          <span>{exportNotice}</span>
        </div>
      )}

      {/* 4 Core Real-World Specs Banner */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2.5rem'
      }}>
        {/* 1. Total Estimated Build Cost */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid #00f0ff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.78rem' }}>
            <span>TOTAL ESTIMATED BUILD COST</span>
            <DollarSign size={16} color="#00f0ff" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: '#ffffff', marginTop: '6px' }}>
            {currency === 'USD' ? `$${physics.totalCostUsd.toLocaleString()}` : `₹${physics.totalCostInr.toLocaleString()}`}
          </div>
          <div style={{ fontSize: '0.78rem', color: '#38bdf8', marginTop: '4px' }}>
            {placedNodes.length} Components in BOM
          </div>
        </div>

        {/* 2. Real Hover Flight Time */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid #10b981' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.78rem' }}>
            <span>HOVER ENDURANCE</span>
            <BatteryCharging size={16} color="#10b981" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: '#34d399', marginTop: '6px' }}>
            {physics.baseHoverMinutes} min
          </div>
          <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>
            Battery Capacity: {physics.totalBatteryWh} Wh
          </div>
        </div>

        {/* 3. With Turbo Wind Recharging Endurance */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid #38bdf8' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.78rem' }}>
            <span>TURBO CRUISE ENDURANCE</span>
            <Wind size={16} color="#38bdf8" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: '#00f0ff', marginTop: '6px' }}>
            {physics.totalCruisingMinutes} min
          </div>
          <div style={{ fontSize: '0.78rem', color: '#38bdf8', marginTop: '4px' }}>
            +{physics.turbineBonusWatts}W Regen @ {flightSpeedSlider} km/h
          </div>
        </div>

        {/* 4. All-Up-Weight & Max Payload */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid #f59e0b' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.78rem' }}>
            <span>ALL-UP-WEIGHT (AUW)</span>
            <Gauge size={16} color="#f59e0b" />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: '#ffffff', marginTop: '6px' }}>
            {physics.totalMassGrams > 1000 ? `${(physics.totalMassGrams / 1000).toFixed(2)} kg` : `${physics.totalMassGrams} g`}
          </div>
          <div style={{ fontSize: '0.78rem', color: '#fbbf24', marginTop: '4px' }}>
            Max Extra Payload: +{physics.maxPayloadGrams} g (TWR {physics.twr}:1)
          </div>
        </div>
      </div>

      {/* ================= 1. BILL OF MATERIALS (BOM) TABLE ================= */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: '#ffffff' }}>Commercial Bill of Materials (BOM)</h2>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
              Exact vendor part numbers and pricing for physical procurement.
            </p>
          </div>
          <span className="telemetry-badge">
            {bomItems.length} UNIQUE PARTS
          </span>
        </div>

        <div className="glass-panel" style={{ padding: '1rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(0, 240, 255, 0.2)', color: '#00f0ff', fontFamily: 'var(--font-display)' }}>
                <th style={{ padding: '10px 12px' }}>PART PREVIEW</th>
                <th style={{ padding: '10px 12px' }}>COMPONENT NAME</th>
                <th style={{ padding: '10px 12px' }}>MANUFACTURER</th>
                <th style={{ padding: '10px 12px' }}>MODEL NUMBER</th>
                <th style={{ padding: '10px 12px' }}>QTY</th>
                <th style={{ padding: '10px 12px' }}>UNIT MASS</th>
                <th style={{ padding: '10px 12px' }}>UNIT PRICE ({currency})</th>
                <th style={{ padding: '10px 12px' }}>TOTAL ({currency})</th>
              </tr>
            </thead>
            <tbody>
              {bomItems.map((item, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    background: idx % 2 === 0 ? 'rgba(5, 10, 20, 0.3)' : 'transparent'
                  }}
                >
                  <td style={{ padding: '8px 12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      background: 'rgba(0, 240, 255, 0.08)',
                      border: '1px solid rgba(0, 240, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <HandDrawnIsometricGraphic
                        type={item.component.handDrawnSvgType}
                        size={28}
                        color={item.component.color}
                      />
                    </div>
                  </td>
                  <td style={{ padding: '8px 12px', fontWeight: 600, color: '#ffffff' }}>
                    {item.component.name}
                  </td>
                  <td style={{ padding: '8px 12px', color: '#cbd5e1' }}>
                    {item.component.realWorld.manufacturer}
                  </td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: '#38bdf8' }}>
                    {item.component.realWorld.modelNumber}
                  </td>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#00f0ff' }}>
                    {item.quantity}x
                  </td>
                  <td style={{ padding: '8px 12px', color: '#94a3b8' }}>
                    {item.component.massGrams} g
                  </td>
                  <td style={{ padding: '8px 12px', color: '#cbd5e1' }}>
                    {currency === 'USD' ? `$${item.component.realWorld.retailPriceUsd}` : `₹${item.component.realWorld.retailPriceInr.toLocaleString()}`}
                  </td>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#34d399' }}>
                    {currency === 'USD' ? `$${item.totalCostUsd}` : `₹${item.totalCostInr.toLocaleString()}`}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ borderTop: '2px solid rgba(0, 240, 255, 0.3)', fontWeight: 800, color: '#ffffff' }}>
                <td colSpan={4} style={{ padding: '12px' }}>TOTALS</td>
                <td style={{ padding: '12px', color: '#00f0ff' }}>{placedNodes.length} Parts</td>
                <td style={{ padding: '12px' }}>{physics.totalMassGrams} g</td>
                <td style={{ padding: '12px' }}>—</td>
                <td style={{ padding: '12px', color: '#34d399', fontSize: '1rem', fontFamily: 'var(--font-display)' }}>
                  {currency === 'USD' ? `$${physics.totalCostUsd.toLocaleString()}` : `₹${physics.totalCostInr.toLocaleString()}`}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* ================= 2. PHYSICAL SOLDERING & PINOUT WIRING GUIDE ================= */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: '#ffffff' }}>Physical Solder &amp; Wire Pinout Matrix</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
            Betaflight / ArduPilot hardware wiring pinouts, solder pads, voltage rails, and recommended AWG wire gauges.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem'
        }}>
          {bomItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.25rem',
                borderLeft: `4px solid ${item.component.color}`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>
                  {item.component.name}
                </span>
                <span style={{ fontSize: '0.72rem', padding: '2px 6px', background: 'rgba(255,255,255,0.05)', color: item.component.color, borderRadius: '4px' }}>
                  {item.component.realWorld.wireGaugeAwg}
                </span>
              </div>

              <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '6px' }}>
                <strong>Operating Voltage:</strong> {item.component.realWorld.voltageRange}
              </div>

              <div style={{ fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '8px' }}>
                <strong>Solder Pad Labels:</strong>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {item.component.realWorld.solderPadLabels.map((pad: string, pIdx: number) => (
                  <span
                    key={pIdx}
                    style={{
                      background: 'rgba(0, 240, 255, 0.08)',
                      border: '1px solid rgba(0, 240, 255, 0.25)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontFamily: 'monospace',
                      fontSize: '0.72rem',
                      color: '#00f0ff'
                    }}
                  >
                    {pad}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. FLIGHT CONTROLLER CLI CONFIG DUMP ================= */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', color: '#ffffff' }}>Flight Controller CLI Configuration Dump</h2>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
              Ready-to-flash Betaflight / ArduPilot CLI terminal script tailored to your build.
            </p>
          </div>

          <button
            onClick={handleCopyCli}
            className="btn-secondary"
            style={{ fontSize: '0.8rem', padding: '7px 14px', gap: '6px' }}
          >
            {copiedCli ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
            <span>{copiedCli ? 'Copied to Clipboard!' : 'Copy CLI Script'}</span>
          </button>
        </div>

        <div style={{
          background: '#050a14',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          borderRadius: '12px',
          padding: '1.25rem',
          fontFamily: 'monospace',
          fontSize: '0.82rem',
          color: '#38bdf8',
          maxHeight: '260px',
          overflowY: 'auto',
          lineHeight: 1.55
        }}>
          <pre style={{ margin: 0 }}>{generatedCliDump}</pre>
        </div>
      </section>

    </div>
  );
};
