import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Wind, Zap, Radio, Layers, Box } from 'lucide-react';

interface HomePageProps {
  onStartBuilding: () => void;
  onExploreTheory: () => void;
  onOpenRealWorld: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStartBuilding, onExploreTheory, onOpenRealWorld }) => {
  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '2.5rem 1rem 3.5rem',
        position: 'relative'
      }}>
        {/* Glow backdrop */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '560px',
          height: '260px',
          background: 'radial-gradient(ellipse, rgba(0, 240, 255, 0.2) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 80%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '999px',
            background: 'rgba(0, 240, 255, 0.08)',
            border: '1px solid rgba(0, 240, 255, 0.35)',
            color: '#00f0ff',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            letterSpacing: '0.08em',
            marginBottom: '1.5rem',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.25)'
          }}>
            <ShieldCheck size={18} />
            <span>NCB TECHNOLOGY SOLUTIONS — INNOVATION FOR A SUSTAINABLE FUTURE</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 25%, #38bdf8 65%, #00f0ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.03em'
          }}>
            Smart Drone with Automatic Top Charging System
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#38bdf8',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            marginBottom: '1.5rem',
            letterSpacing: '0.04em'
          }}>
            Continuous Flight Using Wind Energy | Radar System | Smart Navigation | Packet Tracer CAD
          </p>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
            color: '#cbd5e1',
            maxWidth: '840px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7
          }}>
            A next-generation software-based drone design and simulation workspace.
            Construct virtual multirotors in an interactive <strong>Cisco Packet Tracer styled schematic canvas</strong>,
            wire brushless motors, ESCs, and flight controllers, and simulate the revolutionary <strong>Top Wind Turbine Generator</strong> for automatic in-flight battery recharging.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={onStartBuilding}
              className="btn-primary"
              style={{ fontSize: '1.02rem', padding: '13px 30px' }}
            >
              <span>Launch Packet Tracer Builder</span>
              <ArrowRight size={20} />
            </button>

            <button
              onClick={onOpenRealWorld}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.02rem',
                padding: '13px 28px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
                cursor: 'pointer'
              }}
            >
              <Zap size={18} />
              <span>Real-World Build &amp; BOM</span>
            </button>

            <button
              onClick={onExploreTheory}
              className="btn-secondary"
              style={{ fontSize: '1.02rem', padding: '13px 26px' }}
            >
              <BookOpen size={18} />
              <span>Explore Theory</span>
            </button>
          </div>

          {/* Notice Badge */}
          <div style={{
            marginTop: '2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            color: '#94a3b8',
            background: 'rgba(15, 29, 54, 0.6)',
            padding: '8px 20px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <span style={{ color: '#00f0ff' }}>●</span>
            <span>Virtual / Software Edition: Cisco Packet Tracer inspired schematic &amp; simulation dashboard.</span>
          </div>
        </div>
      </section>

      {/* 5 Core Feature Pillars matching Image 3 Banner */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
        marginTop: '1.5rem',
        marginBottom: '3rem'
      }}>
        <div className="glass-panel glass-panel-hover" style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'rgba(0, 240, 255, 0.15)',
            color: '#00f0ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px'
          }}>
            <Wind size={22} />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>
            Wind Energy
          </div>
          <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>
            Top vertical turbine harvests air flow in flight
          </div>
        </div>

        <div className="glass-panel glass-panel-hover" style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'rgba(16, 185, 129, 0.15)',
            color: '#34d399',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px'
          }}>
            <Zap size={22} />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>
            Auto Charging
          </div>
          <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>
            Secondary battery replenishes while flying
          </div>
        </div>

        <div className="glass-panel glass-panel-hover" style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'rgba(244, 63, 94, 0.15)',
            color: '#f43f5e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px'
          }}>
            <Radio size={22} />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>
            Radar Detection
          </div>
          <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>
            360° obstacle scanning and surrounding safety
          </div>
        </div>

        <div className="glass-panel glass-panel-hover" style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'rgba(59, 130, 246, 0.15)',
            color: '#38bdf8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px'
          }}>
            <Layers size={22} />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>
            Exploded CAD
          </div>
          <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>
            Isometric schematic parts and wiring links
          </div>
        </div>

        <div className="glass-panel glass-panel-hover" style={{ padding: '1.25rem', textAlign: 'center' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: 'rgba(234, 179, 8, 0.15)',
            color: '#facc15',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px'
          }}>
            <Box size={22} />
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#ffffff', fontSize: '0.92rem' }}>
            Medical Rescue
          </div>
          <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>
            Bottom emergency cargo pod with AED &amp; serum
          </div>
        </div>
      </section>

      {/* HOW NCB TECHNOLOGY WORKS: Visual 5-Step Process Bar */}
      <section style={{
        padding: '2rem',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(12, 24, 44, 0.95), rgba(17, 34, 62, 0.8))',
        border: '1px solid rgba(0, 240, 255, 0.25)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div>
            <span className="telemetry-badge" style={{ marginBottom: '0.4rem' }}>SYSTEM WORKFLOW (IMAGE 3)</span>
            <h2 style={{ fontSize: '1.5rem', color: '#ffffff' }}>How NCB Technology Works</h2>
          </div>
          <button
            onClick={onStartBuilding}
            className="btn-secondary"
            style={{ fontSize: '0.85rem', padding: '8px 16px' }}
          >
            <span>Test In Simulator</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px'
        }}>
          {[
            {
              step: '1',
              title: 'Wind Energy Generation',
              desc: 'Top vertical wind turbine generates electricity from air flow.',
              color: '#00f0ff'
            },
            {
              step: '2',
              title: 'Charge Controller',
              desc: 'Regulates the generated power and charges the additional battery.',
              color: '#10b981'
            },
            {
              step: '3',
              title: 'Additional Battery Charging',
              desc: 'Additional battery gets charged automatically while flying.',
              color: '#38bdf8'
            },
            {
              step: '4',
              title: 'Continuous Flight',
              desc: 'Main battery powers the drone, allowing continuous extended flight.',
              color: '#f43f5e'
            },
            {
              step: '5',
              title: 'Radar System',
              desc: '360° detection of obstacles, safe navigation and monitoring.',
              color: '#a855f7'
            }
          ].map((item) => (
            <div
              key={item.step}
              style={{
                background: 'rgba(5, 10, 20, 0.6)',
                padding: '1.25rem',
                borderRadius: '10px',
                border: `1px solid ${item.color}35`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'inline-block',
                  background: `${item.color}20`,
                  color: item.color,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  marginBottom: '8px'
                }}>
                  STEP 0{item.step}
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  color: '#ffffff',
                  marginBottom: '6px'
                }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        marginTop: '4rem',
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#64748b',
        fontSize: '0.85rem'
      }}>
        <div style={{ fontFamily: 'var(--font-display)', color: '#cbd5e1', fontWeight: 600, marginBottom: '4px' }}>
          NCB Technology Solutions – Universal Drone Builder &amp; Simulator
        </div>
        <div>Cisco Packet Tracer style UAV Architecture &amp; Top Wind Turbine Charging System.</div>
      </footer>
    </div>
  );
};
