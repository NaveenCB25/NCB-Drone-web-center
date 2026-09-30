import React from 'react';

interface ComponentGraphicProps {
  type: string;
  color?: string;
  size?: number;
  isSimulating?: boolean;
  turbineRpm?: number;
  motorRpm?: number;
}

export const HandDrawnIsometricGraphic: React.FC<ComponentGraphicProps> = ({
  type,
  color = '#00f0ff',
  size = 64,
  isSimulating = false,
  turbineRpm = 1200,
  motorRpm = 4500
}) => {
  switch (type) {
    // 1. NCB Top Wind Turbine Generator
    case 'turbo-wind-turbine':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Hub Cylinder */}
          <ellipse cx="50" cy="80" rx="38" ry="12" fill="#0c182c" stroke="#00f0ff" strokeWidth="2.5" />
          <path d="M12 80 V55 C12 45 88 45 88 55 V80" fill="#11223e" stroke="#00f0ff" strokeWidth="2" />
          
          {/* Vertical Turbine Aerofoil Blades */}
          <g style={{
            transformOrigin: '50px 45px',
            animation: isSimulating ? `spin ${Math.max(0.4, 2000 / (turbineRpm || 1000))}s linear infinite` : 'none'
          }}>
            {/* Top Cowling */}
            <ellipse cx="50" cy="22" rx="34" ry="10" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="50" cy="22" r="8" fill="#00f0ff" />
            
            {/* Vanes / Aerofoils */}
            <path d="M22 24 C18 40 18 60 22 76" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
            <path d="M36 28 C32 44 32 64 36 78" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
            <path d="M50 30 C50 48 50 68 50 80" stroke="#00f0ff" strokeWidth="4" strokeLinecap="round" />
            <path d="M64 28 C68 44 68 64 64 78" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
            <path d="M78 24 C82 40 82 60 78 76" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* Wind Flow Streamlines (Isometric arrows) */}
          <path d="M30 6 L50 16 L70 6" stroke="#00f0ff" strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round" />
          <path d="M40 2 L50 10 L60 2" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" strokeLinecap="round" />
        </svg>
      );

    // 2. Charge Controller
    case 'charge-controller':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* PCB Base */}
          <rect x="15" y="20" width="70" height="60" rx="8" fill="#0b2416" stroke="#10b981" strokeWidth="2.5" />
          {/* Microcontroller core */}
          <rect x="35" y="35" width="30" height="30" rx="4" fill="#041208" stroke="#34d399" strokeWidth="2" />
          {/* Traces */}
          <path d="M22 30 H35 M22 50 H35 M22 70 H35" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          <path d="M65 35 H78 M65 50 H78 M65 65 H78" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
          {/* LED Status Dots */}
          <circle cx="42" cy="45" r="3" fill="#10b981" />
          <circle cx="58" cy="45" r="3" fill="#38bdf8" />
          <text x="50" y="58" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">AUTO</text>
        </svg>
      );

    // 3. Main Running Battery (Green LiPo)
    case 'battery-main':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* LiPo Isometric Block */}
          <path d="M20 40 L60 20 L85 35 L45 55 Z" fill="#10b981" stroke="#34d399" strokeWidth="2.5" />
          <path d="M20 40 L45 55 V80 L20 65 Z" fill="#059669" stroke="#34d399" strokeWidth="2.5" />
          <path d="M45 55 L85 35 V60 L45 80 Z" fill="#047857" stroke="#34d399" strokeWidth="2.5" />
          {/* XT60 Connector & Wire */}
          <path d="M72 26 L88 18" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
          <path d="M76 28 L92 20" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
          <rect x="88" y="14" width="8" height="8" rx="2" fill="#eab308" />
          {/* Label */}
          <text x="52" y="70" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace">MAIN 6S</text>
        </svg>
      );

    // 4. Secondary Wind-Charged Battery (Blue LiPo)
    case 'battery-turbo':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* LiPo Block Blue */}
          <path d="M20 40 L60 20 L85 35 L45 55 Z" fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
          <path d="M20 40 L45 55 V80 L20 65 Z" fill="#0369a1" stroke="#38bdf8" strokeWidth="2.5" />
          <path d="M45 55 L85 35 V60 L45 80 Z" fill="#075985" stroke="#38bdf8" strokeWidth="2.5" />
          {/* XT60 Connector & Wire */}
          <path d="M72 26 L88 18" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
          <path d="M76 28 L92 20" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
          <rect x="88" y="14" width="8" height="8" rx="2" fill="#eab308" />
          {/* Charge Lightning Bolt */}
          <path d="M50 58 L56 66 H52 L54 74 L46 68 H50 Z" fill="#00f0ff" stroke="#ffffff" strokeWidth="1" />
          <text x="65" y="72" fill="#00f0ff" fontSize="8" fontWeight="bold" fontFamily="monospace">CHG</text>
        </svg>
      );

    // 5. 360° Radar / LiDAR Obstacle Scanner
    case 'radar-lidar':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Turret Base */}
          <ellipse cx="50" cy="70" rx="35" ry="12" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          {/* LiDAR Head */}
          <ellipse cx="50" cy="45" rx="32" ry="14" fill="#0f172a" stroke="#00f0ff" strokeWidth="2.5" />
          <path d="M18 45 V65 C18 75 82 75 82 65 V45" fill="#1e293b" stroke="#00f0ff" strokeWidth="2" />
          {/* Optical Glass Ring */}
          <ellipse cx="50" cy="42" rx="26" ry="9" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
          <ellipse cx="50" cy="38" rx="16" ry="6" fill="#0284c7" />
          {/* 360 Scan Beam Sweep */}
          <path d="M50 38 L25 15" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="3 3" />
          <path d="M50 38 L75 15" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="3 3" />
          <path d="M25 15 C35 8 65 8 75 15" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      );

    // 6. Brushless Motor (Isometric Anodized Blue Bell)
    case 'motor-brushless':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Motor Stator Base */}
          <ellipse cx="50" cy="75" rx="28" ry="10" fill="#334155" stroke="#64748b" strokeWidth="2" />
          {/* Copper Windings visible */}
          <rect x="26" y="55" width="48" height="15" fill="#b45309" stroke="#d97706" strokeWidth="1.5" />
          {/* Rotor Bell Body */}
          <ellipse cx="50" cy="45" rx="30" ry="12" fill="#0284c7" stroke="#00f0ff" strokeWidth="2.5" />
          <path d="M20 45 V62 C20 70 80 70 80 62 V45" fill="#0369a1" stroke="#00f0ff" strokeWidth="2" />
          {/* Shaft M5 */}
          <rect x="47" y="15" width="6" height="30" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          {/* Rotor Cooling Vents */}
          <line x1="32" y1="44" x2="42" y2="47" stroke="#ffffff" strokeWidth="2" />
          <line x1="58" y1="47" x2="68" y2="44" stroke="#ffffff" strokeWidth="2" />
        </svg>
      );

    // 7. 3-Blade Propeller
    case 'propeller-3blade':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{
            transformOrigin: '50px 50px',
            animation: isSimulating ? `spin ${Math.max(0.1, 1000 / (motorRpm || 3000))}s linear infinite` : 'none'
          }}>
          {/* Central Hub */}
          <circle cx="50" cy="50" r="10" fill="#0f172a" stroke="#00f0ff" strokeWidth="2" />
          <circle cx="50" cy="50" r="4" fill="#64748b" />
          {/* 3 Blades */}
          <path d="M50 40 C42 25 35 10 50 5 C60 10 58 28 50 40 Z" fill="#10b981" stroke="#34d399" strokeWidth="1.5" />
          <path d="M42 56 C28 62 10 75 14 86 C24 88 38 72 42 56 Z" fill="#10b981" stroke="#34d399" strokeWidth="1.5" />
          <path d="M58 56 C72 62 90 75 86 86 C76 88 62 72 58 56 Z" fill="#10b981" stroke="#34d399" strokeWidth="1.5" />
        </svg>
      );

    // 8. Flight Controller (FC)
    case 'flight-controller':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* PCB */}
          <rect x="15" y="15" width="70" height="70" rx="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2.5" />
          {/* Mounting holes with grommets */}
          <circle cx="23" cy="23" r="4" fill="#000000" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="77" cy="23" r="4" fill="#000000" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="23" cy="77" r="4" fill="#000000" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="77" cy="77" r="4" fill="#000000" stroke="#f59e0b" strokeWidth="1.5" />
          {/* MCU ARM Chip */}
          <rect x="35" y="35" width="30" height="30" rx="3" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
          <text x="50" y="53" fill="#c084fc" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">STM32</text>
          {/* Solder Pads on edges */}
          <rect x="30" y="15" width="6" height="5" fill="#f59e0b" />
          <rect x="42" y="15" width="6" height="5" fill="#f59e0b" />
          <rect x="54" y="15" width="6" height="5" fill="#f59e0b" />
          <rect x="66" y="15" width="6" height="5" fill="#f59e0b" />
          <rect x="30" y="80" width="6" height="5" fill="#f59e0b" />
          <rect x="42" y="80" width="6" height="5" fill="#f59e0b" />
          <rect x="54" y="80" width="6" height="5" fill="#f59e0b" />
          <rect x="66" y="80" width="6" height="5" fill="#f59e0b" />
        </svg>
      );

    // 9. 4-in-1 ESC
    case 'esc-4in1':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="16" width="68" height="68" rx="6" fill="#2e1065" stroke="#ec4899" strokeWidth="2.5" />
          {/* 4 MOSFET clusters */}
          <rect x="24" y="24" width="18" height="18" fill="#18181b" stroke="#f472b6" strokeWidth="1" />
          <rect x="58" y="24" width="18" height="18" fill="#18181b" stroke="#f472b6" strokeWidth="1" />
          <rect x="24" y="58" width="18" height="18" fill="#18181b" stroke="#f472b6" strokeWidth="1" />
          <rect x="58" y="58" width="18" height="18" fill="#18181b" stroke="#f472b6" strokeWidth="1" />
          {/* Main Power Pads (+ / -) */}
          <circle cx="50" cy="22" r="4" fill="#f59e0b" />
          <circle cx="50" cy="78" r="4" fill="#f59e0b" />
          <text x="50" y="53" fill="#ec4899" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">55A ESC</text>
        </svg>
      );

    // 10. Frame (Carbon Fiber X-Chassis)
    case 'frame-carbon':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Arms */}
          <path d="M12 12 L40 40 L60 40 L88 12 L82 8 L50 35 L18 8 Z" fill="#334155" stroke="#00f0ff" strokeWidth="1.5" />
          <path d="M12 88 L40 60 L60 60 L88 88 L82 92 L50 65 L18 92 Z" fill="#334155" stroke="#00f0ff" strokeWidth="1.5" />
          {/* Central Top Plate */}
          <rect x="35" y="25" width="30" height="50" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          {/* Standoffs (Gold Pillars) */}
          <circle cx="40" cy="32" r="3" fill="#eab308" />
          <circle cx="60" cy="32" r="3" fill="#eab308" />
          <circle cx="40" cy="68" r="3" fill="#eab308" />
          <circle cx="60" cy="68" r="3" fill="#eab308" />
          {/* Motor mount holes at arm tips */}
          <circle cx="15" cy="15" r="4" fill="#000000" stroke="#00f0ff" strokeWidth="1.5" />
          <circle cx="85" cy="15" r="4" fill="#000000" stroke="#00f0ff" strokeWidth="1.5" />
          <circle cx="15" cy="85" r="4" fill="#000000" stroke="#00f0ff" strokeWidth="1.5" />
          <circle cx="85" cy="85" r="4" fill="#000000" stroke="#00f0ff" strokeWidth="1.5" />
        </svg>
      );

    // 11. HD / FPV Gimbal Camera
    case 'camera-gimbal':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gimbal Arm */}
          <path d="M50 15 V35 H65" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
          {/* Camera Housing */}
          <rect x="25" y="35" width="50" height="40" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="2.5" />
          {/* Optical Lens */}
          <circle cx="50" cy="55" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="50" cy="55" r="8" fill="#0284c7" />
          <circle cx="47" cy="52" r="3" fill="#ffffff" />
        </svg>
      );

    // 12. Medical Emergency Capsule Pod
    case 'payload-medical':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pod Case */}
          <rect x="15" y="25" width="70" height="52" rx="10" fill="#ffffff" stroke="#e11d48" strokeWidth="3" />
          {/* Latch Clamps */}
          <rect x="12" y="44" width="6" height="14" fill="#e11d48" />
          <rect x="82" y="44" width="6" height="14" fill="#e11d48" />
          {/* Red Cross */}
          <rect x="44" y="36" width="12" height="30" fill="#e11d48" />
          <rect x="35" y="45" width="30" height="12" fill="#e11d48" />
        </svg>
      );

    // 13. GPS Module
    case 'gps-module':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ceramic Patch Antenna Disc */}
          <rect x="25" y="25" width="50" height="50" rx="8" fill="#d97706" stroke="#fbbf24" strokeWidth="2" />
          <rect x="35" y="35" width="30" height="30" rx="4" fill="#78350f" />
          <circle cx="50" cy="50" r="3" fill="#fef08a" />
          {/* Compass Rings */}
          <circle cx="50" cy="50" r="18" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      );

    // 14. VTX Video Transmitter & Antenna
    case 'vtx-antenna':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* VTX Shield Box */}
          <rect x="20" y="40" width="45" height="45" rx="6" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
          {/* Antenna stem & cloverleaf */}
          <path d="M42 40 V18" stroke="#3b82f6" strokeWidth="3" />
          <circle cx="42" cy="14" r="8" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="2" />
          {/* Heat sink fins */}
          <line x1="28" y1="52" x2="57" y2="52" stroke="#93c5fd" strokeWidth="2" />
          <line x1="28" y1="62" x2="57" y2="62" stroke="#93c5fd" strokeWidth="2" />
          <line x1="28" y1="72" x2="57" y2="72" stroke="#93c5fd" strokeWidth="2" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" fill="#0f172a" stroke={color} strokeWidth="2" />
          <circle cx="50" cy="50" r="8" fill={color} />
        </svg>
      );
  }
};
