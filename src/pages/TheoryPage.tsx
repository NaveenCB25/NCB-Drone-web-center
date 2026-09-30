import React, { useState } from 'react';
import {
  DRONE_OVERVIEW,
  NCB_TURBO_WORKING_PIPELINE,
  BASIC_WORKING_PIPELINE,
  FLIGHT_CONTROLLER_DEEPDIVE,
  DRONE_COMPONENTS_THEORY,
  DRONE_TYPES_LIST
} from '../data/theoryData';
import { HandDrawnIsometricGraphic } from '../components/HandDrawnIsometricDrone';
import {
  Cpu,
  Layers,
  Zap,
  RotateCw,
  ArrowRight,
  Wind,
  CheckCircle2,
  Sliders,
  Eye,
  Camera,
  Activity,
  Box
} from 'lucide-react';

export const TheoryPage: React.FC = () => {
  const [selectedComponentId, setSelectedComponentId] = useState<string>('turboWind');
  const [activePipelineStep, setActivePipelineStep] = useState<number>(1);
  const [pipelineMode, setPipelineMode] = useState<'turbo' | 'basic'>('turbo');
  const [selectedDroneTypeId, setSelectedDroneTypeId] = useState<string>('smart-turbo-quad');

  const selectedComponent = DRONE_COMPONENTS_THEORY.find(c => c.id === selectedComponentId) || DRONE_COMPONENTS_THEORY[0];
  const activePipelineList = pipelineMode === 'turbo' ? NCB_TURBO_WORKING_PIPELINE : BASIC_WORKING_PIPELINE;
  const activeStep = activePipelineList.find(s => s.step === activePipelineStep) || activePipelineList[0];
  const selectedDroneType = DRONE_TYPES_LIST.find(t => t.id === selectedDroneTypeId) || DRONE_TYPES_LIST[0];

  const getComponentIcon = (id: string) => {
    switch (id) {
      case 'turboWind': return <Wind size={20} color="#00f0ff" />;
      case 'chargeController': return <Cpu size={20} color="#10b981" />;
      case 'batteryMain': return <Zap size={20} color="#10b981" />;
      case 'batteryTurbo': return <Zap size={20} color="#38bdf8" />;
      case 'radar': return <Eye size={20} color="#f43f5e" />;
      case 'frame': return <Layers size={20} />;
      case 'motor': return <RotateCw size={20} />;
      case 'propeller': return <Wind size={20} />;
      case 'esc': return <Cpu size={20} />;
      case 'flightController': return <Activity size={20} />;
      case 'camera': return <Camera size={20} />;
      case 'payload': return <Box size={20} />;
      default: return <Sliders size={20} />;
    }
  };

  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>
      
      {/* 1. NCB TECHNOLOGY HERO & EXPLODED BLUEPRINT INTRO */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(12, 24, 44, 0.95), rgba(15, 30, 56, 0.75))',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          borderRadius: '16px',
          padding: '2.5rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '1rem'
          }}>
            <span className="telemetry-badge">NCB TECHNOLOGY AEROSPACE RESEARCH</span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Universal Drone Elements &amp; Top Turbo Charging System</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1.25rem'
          }}>
            {DRONE_OVERVIEW.title}
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: '#cbd5e1',
            lineHeight: 1.75,
            maxWidth: '950px',
            marginBottom: '2rem'
          }}>
            {DRONE_OVERVIEW.definition}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}>
            {DRONE_OVERVIEW.corePrinciples.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(5, 10, 20, 0.6)',
                  padding: '1.25rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: '#00f0ff',
                  fontSize: '0.95rem',
                  marginBottom: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>0{idx + 1}.</span>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. HOW NCB TECHNOLOGY WORKS: WORKING PRINCIPLE FLOW */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', gap: '8px', marginBottom: '0.75rem' }}>
            <button
              onClick={() => { setPipelineMode('turbo'); setActivePipelineStep(1); }}
              style={{
                padding: '6px 16px',
                borderRadius: '999px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                fontWeight: 700,
                background: pipelineMode === 'turbo' ? '#00f0ff' : 'rgba(255,255,255,0.05)',
                color: pipelineMode === 'turbo' ? '#050a14' : '#cbd5e1',
                border: '1px solid rgba(0,240,255,0.3)',
                cursor: 'pointer'
              }}
            >
              🌀 How NCB Turbo Technology Works (Image 3)
            </button>
            <button
              onClick={() => { setPipelineMode('basic'); setActivePipelineStep(1); }}
              style={{
                padding: '6px 16px',
                borderRadius: '999px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                fontWeight: 700,
                background: pipelineMode === 'basic' ? '#00f0ff' : 'rgba(255,255,255,0.05)',
                color: pipelineMode === 'basic' ? '#050a14' : '#cbd5e1',
                border: '1px solid rgba(0,240,255,0.3)',
                cursor: 'pointer'
              }}
            >
              ⚡ Basic Propulsion Pipeline (Battery → ESC → Thrust)
            </button>
          </div>

          <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.5rem' }}>
            {pipelineMode === 'turbo' 
              ? 'Wind Energy → Charge Controller → Additional Battery → Continuous Flight → Radar'
              : 'Battery → ESC → Motor → Propeller → Thrust → Drone Movement'}
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '750px', margin: '0 auto', fontSize: '0.95rem' }}>
            Click any phase in the sequence below to inspect its electromechanical architecture and power flow.
          </p>
        </div>

        {/* Pipeline Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(170px, 1fr))`,
          gap: '12px',
          marginBottom: '1.5rem'
        }}>
          {activePipelineList.map((step) => {
            const isCurrent = step.step === activePipelineStep;
            return (
              <div
                key={step.step}
                onClick={() => setActivePipelineStep(step.step)}
                style={{
                  cursor: 'pointer',
                  padding: '1.1rem 1rem',
                  borderRadius: '12px',
                  background: isCurrent ? 'rgba(0, 240, 255, 0.14)' : 'rgba(12, 24, 44, 0.7)',
                  border: isCurrent ? '2px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isCurrent ? '0 0 20px rgba(0, 240, 255, 0.3)' : 'none',
                  transition: 'all 0.2s ease',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-display)',
                  color: isCurrent ? '#00f0ff' : '#64748b',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}>
                  PHASE 0{step.step}
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: isCurrent ? '#ffffff' : '#cbd5e1'
                }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '0.74rem', color: isCurrent ? '#38bdf8' : '#94a3b8', marginTop: '4px' }}>
                  {step.role}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div className="glass-panel" style={{ padding: '1.75rem 2rem', borderLeft: '4px solid #00f0ff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{
                background: '#00f0ff',
                color: '#050a14',
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.85rem'
              }}>
                STEP {activeStep.step} OF {activePipelineList.length}
              </span>
              <h3 style={{ fontSize: '1.3rem', color: '#ffffff' }}>
                {activeStep.title} — {activeStep.role}
              </h3>
            </div>
            <span className="telemetry-badge telemetry-badge-emerald">
              {activeStep.badge}
            </span>
          </div>

          <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            {activeStep.details}
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setActivePipelineStep(prev => prev > 1 ? prev - 1 : activePipelineList.length)}
              className="btn-secondary"
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              Previous Phase
            </button>
            <button
              onClick={() => setActivePipelineStep(prev => prev < activePipelineList.length ? prev + 1 : 1)}
              className="btn-primary"
              style={{ fontSize: '0.8rem', padding: '6px 16px' }}
            >
              <span>Next Phase</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. FLIGHT CONTROLLER DEEP-DIVE SPOTLIGHT */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(17, 34, 62, 0.8), rgba(10, 20, 38, 0.95))',
          borderRadius: '16px',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          padding: '2.5rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
            <span className="telemetry-badge">AVIONICS CENTRAL PROCESSING</span>
            <span style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600 }}>The Core Microcontroller</span>
          </div>

          <h2 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '1rem' }}>
            {FLIGHT_CONTROLLER_DEEPDIVE.title}
          </h2>

          <div style={{
            background: 'rgba(0, 240, 255, 0.06)',
            borderLeft: '4px solid #38bdf8',
            padding: '1rem 1.25rem',
            borderRadius: '6px',
            marginBottom: '1.75rem',
            fontSize: '1.05rem',
            color: '#e2e8f0',
            lineHeight: 1.65
          }}>
            <strong>Core Principle:</strong> The flight controller processes sensor information and controls the motors to maintain and change the drone&apos;s movement.
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {FLIGHT_CONTROLLER_DEEPDIVE.summary}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}>
            {FLIGHT_CONTROLLER_DEEPDIVE.coreFunctions.map((fn, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(5, 10, 20, 0.65)',
                  padding: '1.25rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  color: '#38bdf8',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem'
                }}>
                  {fn.heading}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.55 }}>
                  {fn.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPLETE ISOMETRIC DRONE PARTS (Image 1 Exploded Elements & Image 3) */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="telemetry-badge" style={{ marginBottom: '0.5rem' }}>ISOMETRIC HARDWARE ANATOMY</span>
          <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.5rem' }}>
            Drone Elements &amp; Turbo Recharging Subsystems
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '750px', margin: '0 auto', fontSize: '0.95rem' }}>
            Technical exploded view of every mechanical, electronic, and aerodynamic element from the FPV Drone Elements blueprint and the NCB Smart Turbine system.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 350px) 1fr',
          gap: '1.5rem',
          alignItems: 'start'
        }}>
          {/* Component Selector List */}
          <div className="glass-panel" style={{
            padding: '1rem',
            maxHeight: '620px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            {DRONE_COMPONENTS_THEORY.map((comp) => {
              const isSelected = comp.id === selectedComponentId;
              return (
                <div
                  key={comp.id}
                  onClick={() => setSelectedComponentId(comp.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(0, 240, 255, 0.15)' : 'rgba(15, 29, 54, 0.4)',
                    border: isSelected ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{
                    color: isSelected ? '#00f0ff' : '#94a3b8',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {getComponentIcon(comp.id)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-display)',
                      color: isSelected ? '#ffffff' : '#cbd5e1'
                    }}>
                      {comp.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                      {comp.category}
                    </div>
                  </div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-display)',
                    color: isSelected ? '#00f0ff' : '#475569',
                    fontWeight: 700
                  }}>
                    {comp.symbol}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Component Deep Detail Card with Hand-Drawn Isometric Vector */}
          <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '1rem'
            }}>
              <div>
                <span className="telemetry-badge" style={{ marginBottom: '0.5rem' }}>
                  {selectedComponent.category}
                </span>
                <h3 style={{ fontSize: '1.75rem', color: '#ffffff' }}>
                  {selectedComponent.name}
                </h3>
                <div style={{ fontSize: '0.9rem', color: '#38bdf8', marginTop: '2px' }}>
                  {selectedComponent.tagline}
                </div>
              </div>

              {/* Hand Drawn Isometric Component Graphic */}
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '16px',
                background: 'rgba(0, 240, 255, 0.1)',
                border: '1px solid rgba(0, 240, 255, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)'
              }}>
                <HandDrawnIsometricGraphic
                  type={selectedComponent.handDrawnSvgType}
                  size={74}
                  isSimulating={true}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Description &amp; Construction
              </h4>
              <p style={{ color: '#e2e8f0', fontSize: '0.98rem', lineHeight: 1.7 }}>
                {selectedComponent.description}
              </p>
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Aerospace Engineering Function
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {selectedComponent.engineeringRole}
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Key Technical Specifications
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedComponent.keySpecs.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      background: 'rgba(15, 29, 54, 0.8)',
                      border: '1px solid rgba(0, 240, 255, 0.2)',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      color: '#00f0ff'
                    }}
                  >
                    ● {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DRONE TYPES SHOWCASE (Quadcopter, Hexacopter, NCB Smart Drone, Emergency Medical) */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="telemetry-badge" style={{ marginBottom: '0.5rem' }}>AIRFRAME CONFIGURATIONS</span>
          <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.5rem' }}>
            Drone Types &amp; Hybrid Architectures
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '750px', margin: '0 auto', fontSize: '0.95rem' }}>
            Exploration of airframe designs: NCB Smart Turbo Drone, Quadcopter, Hexacopter, Octocopter, VTOL, and Emergency Medical UAVs.
          </p>
        </div>

        {/* Horizontal tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '12px',
          marginBottom: '1.5rem'
        }}>
          {DRONE_TYPES_LIST.map((type) => {
            const isSelected = type.id === selectedDroneTypeId;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedDroneTypeId(type.id)}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-display)',
                  color: isSelected ? '#04101e' : '#cbd5e1',
                  background: isSelected ? 'linear-gradient(135deg, #00f0ff 0%, #38bdf8 100%)' : 'rgba(15, 29, 54, 0.7)',
                  border: isSelected ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? '0 0 16px rgba(0, 240, 255, 0.35)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {type.name.split(' (')[0]}
              </button>
            );
          })}
        </div>

        {/* Selected Drone Type Details */}
        <div className="glass-panel" style={{ padding: '2.25rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1.25rem'
          }}>
            <div>
              <span className="telemetry-badge" style={{ marginBottom: '0.5rem' }}>
                {selectedDroneType.category}
              </span>
              <h3 style={{ fontSize: '1.85rem', color: '#ffffff' }}>
                {selectedDroneType.name}
              </h3>
            </div>
            <div style={{
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              borderRadius: '8px',
              padding: '8px 16px',
              textAlign: 'right'
            }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>ROTOR CONFIGURATION</div>
              <div style={{ fontFamily: 'var(--font-display)', color: '#00f0ff', fontWeight: 800, fontSize: '1.1rem' }}>
                {selectedDroneType.rotorCount}
              </div>
            </div>
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {selectedDroneType.description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              background: 'rgba(5, 10, 20, 0.5)',
              padding: '1.25rem',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <h4 style={{ fontSize: '0.85rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Key Engineering Advantages
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedDroneType.keyAdvantages.map((adv, aIdx) => (
                  <li key={aIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'rgba(5, 10, 20, 0.5)',
              padding: '1.25rem',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <h4 style={{ fontSize: '0.85rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Typical Operational Missions
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                {selectedDroneType.typicalUse}
              </p>

              <h4 style={{ fontSize: '0.85rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                Thrust Dynamic Field
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                {selectedDroneType.thrustPattern}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
