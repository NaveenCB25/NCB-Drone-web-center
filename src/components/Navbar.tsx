import React from 'react';
import { Compass, BookOpen, Wrench, Sparkles, FileSpreadsheet } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'theory' | 'builder' | 'realworld';
  setActiveTab: (tab: 'home' | 'theory' | 'builder' | 'realworld') => void;
  placedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, placedCount }) => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(5, 10, 20, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0, 240, 255, 0.18)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.5)'
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0.85rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Brand */}
        <div 
          onClick={() => setActiveTab('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(37, 99, 235, 0.4))',
            border: '1px solid rgba(0, 240, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00f0ff',
            boxShadow: '0 0 15px rgba(0, 240, 255, 0.25)'
          }}>
            <Compass size={24} />
          </div>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.06em'
              }}>
                NCB TECHNOLOGY SOLUTIONS
              </span>
              <span style={{
                fontSize: '0.65rem',
                padding: '2px 6px',
                borderRadius: '4px',
                background: 'rgba(0, 240, 255, 0.15)',
                color: '#00f0ff',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                fontWeight: 700,
                letterSpacing: '0.05em'
              }}>
                v1.0
              </span>
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: '#94a3b8',
              letterSpacing: '0.04em'
            }}>
              Universal Drone Builder &amp; Simulator
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(12, 24, 44, 0.6)',
          padding: '4px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <button
            onClick={() => setActiveTab('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.05em',
              color: activeTab === 'home' ? '#04101e' : '#cbd5e1',
              background: activeTab === 'home' 
                ? 'linear-gradient(135deg, #00f0ff 0%, #38bdf8 100%)' 
                : 'transparent',
              boxShadow: activeTab === 'home' ? '0 0 16px rgba(0, 240, 255, 0.4)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Sparkles size={15} />
            <span>HOME</span>
          </button>

          <button
            onClick={() => setActiveTab('theory')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.05em',
              color: activeTab === 'theory' ? '#04101e' : '#cbd5e1',
              background: activeTab === 'theory' 
                ? 'linear-gradient(135deg, #00f0ff 0%, #38bdf8 100%)' 
                : 'transparent',
              boxShadow: activeTab === 'theory' ? '0 0 16px rgba(0, 240, 255, 0.4)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <BookOpen size={15} />
            <span>THEORY</span>
          </button>

          <button
            onClick={() => setActiveTab('builder')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.05em',
              color: activeTab === 'builder' ? '#04101e' : '#cbd5e1',
              background: activeTab === 'builder' 
                ? 'linear-gradient(135deg, #00f0ff 0%, #38bdf8 100%)' 
                : 'transparent',
              boxShadow: activeTab === 'builder' ? '0 0 16px rgba(0, 240, 255, 0.4)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Wrench size={15} />
            <span>PACKET TRACER CAD</span>
            {placedCount > 0 && (
              <span style={{
                background: activeTab === 'builder' ? '#04101e' : '#00f0ff',
                color: activeTab === 'builder' ? '#00f0ff' : '#04101e',
                fontSize: '0.7rem',
                fontWeight: 800,
                borderRadius: '999px',
                padding: '1px 6px',
                marginLeft: '4px'
              }}>
                {placedCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('realworld')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.05em',
              color: activeTab === 'realworld' ? '#04101e' : '#cbd5e1',
              background: activeTab === 'realworld' 
                ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
                : 'transparent',
              boxShadow: activeTab === 'realworld' ? '0 0 16px rgba(16, 185, 129, 0.4)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <FileSpreadsheet size={15} />
            <span>REAL WORLD BUILD &amp; BOM</span>
          </button>
        </nav>

        {/* Quick status indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.8rem',
          color: '#94a3b8'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(0, 240, 255, 0.08)',
            padding: '5px 12px',
            borderRadius: '999px',
            border: '1px solid rgba(0, 240, 255, 0.25)'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#00f0ff',
              boxShadow: '0 0 8px #00f0ff'
            }} />
            <span style={{ color: '#00f0ff', fontWeight: 600, fontSize: '0.75rem', fontFamily: 'var(--font-display)' }}>
              REAL-WORLD COMPLIANT
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
