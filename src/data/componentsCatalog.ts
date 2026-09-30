import type { DroneComponentDefinition } from '../types/drone';

export const COMPONENT_CATALOG: DroneComponentDefinition[] = [

  // ─── AIRFRAME ───────────────────────────────────────────────────────────────
  {
    id: 'frame-quadcopter',
    name: 'Quadcopter Frame',
    category: 'frame', group: 'AIRFRAME',
    description: '4-arm X-configuration carbon fiber frame, the most common drone layout.',
    handDrawnSvgType: 'frame-quad', iconEmoji: '✈', iconColor: '#00f0ff',
    massGrams: 120, color: '#00f0ff', tag: 'Airframe',
    realWorld: { manufacturer: 'TBS', modelNumber: 'Source One V5', retailPriceUsd: 45, retailPriceInr: 3780, solderPadLabels: [], voltageRange: 'N/A', wireGaugeAwg: 'M3 screws' },
    details: { specs: ['4 arms, X-config', 'Carbon 3K', 'WB: 250mm'], isometricSymbol: 'FRAME-4', diagramLabel: 'Quadcopter Frame' }
  },
  {
    id: 'frame-hexacopter',
    name: 'Hexacopter Frame',
    category: 'frame', group: 'AIRFRAME',
    description: '6-arm hexagonal frame for extra redundancy and heavy lift missions.',
    handDrawnSvgType: 'frame-hex', iconEmoji: '⬡', iconColor: '#00f0ff',
    massGrams: 210, color: '#00f0ff', tag: 'Airframe',
    realWorld: { manufacturer: 'Tarot', modelNumber: 'T960', retailPriceUsd: 95, retailPriceInr: 7980, solderPadLabels: [], voltageRange: 'N/A', wireGaugeAwg: 'M4 screws' },
    details: { specs: ['6 arms', 'Carbon fiber', 'WB: 960mm'], isometricSymbol: 'FRAME-6', diagramLabel: 'Hexacopter Frame' }
  },
  {
    id: 'frame-octocopter',
    name: 'Octocopter Frame',
    category: 'frame', group: 'AIRFRAME',
    description: '8-motor frame for maximum thrust, redundancy and heavy payload capacity.',
    handDrawnSvgType: 'frame-octo', iconEmoji: '✳', iconColor: '#00f0ff',
    massGrams: 310, color: '#00f0ff', tag: 'Airframe',
    realWorld: { manufacturer: 'DJI', modelNumber: 'S1000+', retailPriceUsd: 280, retailPriceInr: 23520, solderPadLabels: [], voltageRange: 'N/A', wireGaugeAwg: 'M4 screws' },
    details: { specs: ['8 arms', 'Folding design', 'WB: 1000mm'], isometricSymbol: 'FRAME-8', diagramLabel: 'Octocopter Frame' }
  },
  {
    id: 'frame-vtol',
    name: 'VTOL Frame',
    category: 'frame', group: 'AIRFRAME',
    description: 'Vertical take-off and landing hybrid frame combining multirotor and fixed-wing.',
    handDrawnSvgType: 'frame-vtol', iconEmoji: '🛩', iconColor: '#00f0ff',
    massGrams: 450, color: '#00f0ff', tag: 'Airframe',
    realWorld: { manufacturer: 'Penguin', modelNumber: 'BE-VTOL', retailPriceUsd: 420, retailPriceInr: 35280, solderPadLabels: [], voltageRange: 'N/A', wireGaugeAwg: 'M4 screws' },
    details: { specs: ['Hybrid VTOL/FW', 'Fixed wing span: 1.2m', 'Tilt-rotor'], isometricSymbol: 'VTOL', diagramLabel: 'VTOL Frame' }
  },
  {
    id: 'frame-fixed-wing',
    name: 'Fixed-Wing Frame',
    category: 'frame', group: 'AIRFRAME',
    description: 'Traditional airplane-style airframe for long-range, high-efficiency flight.',
    handDrawnSvgType: 'frame-fw', iconEmoji: '🛫', iconColor: '#00f0ff',
    massGrams: 380, color: '#00f0ff', tag: 'Airframe',
    realWorld: { manufacturer: 'Skywalker', modelNumber: 'X8 Flying Wing', retailPriceUsd: 130, retailPriceInr: 10920, solderPadLabels: [], voltageRange: 'N/A', wireGaugeAwg: 'M3 screws' },
    details: { specs: ['Wingspan: 2100mm', 'EPO foam + CF spar', 'Pusher config'], isometricSymbol: 'FW-FRAME', diagramLabel: 'Fixed-Wing Frame' }
  },

  // ─── PROPULSION ─────────────────────────────────────────────────────────────
  {
    id: 'motor-brushless',
    name: 'Brushless Motor',
    category: 'motor', group: 'PROPULSION',
    description: '3-phase BLDC outrunner motor, the primary thrust generator for multirotor drones.',
    handDrawnSvgType: 'motor-bldc', iconEmoji: '⚙', iconColor: '#3b82f6',
    massGrams: 36, thrustGrams: 1550, powerDrawWatts: 210, color: '#3b82f6', tag: 'Propulsion',
    ports: [{ id: 'p_phase', name: '3-Phase Leads', type: 'power', direction: 'in', color: '#38bdf8' }],
    realWorld: { manufacturer: 'T-Motor', modelNumber: 'F60 PRO IV 1950KV', retailPriceUsd: 28, retailPriceInr: 2350, solderPadLabels: ['A', 'B', 'C'], voltageRange: '4S-6S LiPo', wireGaugeAwg: '20 AWG' },
    details: { specs: ['KV: 2450 (acro) / 1100 (payload)', 'Max: 38A burst', 'M5 shaft'], isometricSymbol: 'MTR', diagramLabel: 'Brushless Motor' }
  },
  {
    id: 'prop-3blade',
    name: 'Propeller',
    category: 'propeller', group: 'PROPULSION',
    description: 'Tri-blade polycarbonate propeller generating lift from motor rotation.',
    handDrawnSvgType: 'propeller', iconEmoji: '🌀', iconColor: '#10b981',
    massGrams: 8, thrustGrams: 500, color: '#10b981', tag: 'Aero Blade',
    ports: [{ id: 'p_hub', name: 'Motor Hub', type: 'mechanical', direction: 'in', color: '#10b981' }],
    realWorld: { manufacturer: 'HQProp', modelNumber: 'DP 7X4X3 Tri-Blade', retailPriceUsd: 4, retailPriceInr: 340, solderPadLabels: ['M5 Nut'], voltageRange: 'N/A', wireGaugeAwg: 'M5 Nut Clamp' },
    details: { specs: ['5x4.3x3 / 10x4.5', 'Glass-fiber Polycarbonate', 'CW/CCW pairs'], isometricSymbol: 'PROP', diagramLabel: 'Propeller' }
  },
  {
    id: 'esc-4in1',
    name: 'ESC',
    category: 'esc', group: 'PROPULSION',
    description: '4-in-1 electronic speed controller driving 4 brushless motors with DShot protocol.',
    handDrawnSvgType: 'esc', iconEmoji: '⚡', iconColor: '#ec4899',
    massGrams: 20, powerDrawWatts: 5, color: '#ec4899', tag: 'Motor Drive',
    ports: [
      { id: 'p_bat', name: 'VBat XT60', type: 'power', direction: 'in', color: '#10b981' },
      { id: 'p_dshot', name: 'DShot In', type: 'signal', direction: 'in', color: '#a855f7' },
      { id: 'p_motors', name: '4x Motor Out', type: 'power', direction: 'out', color: '#3b82f6' }
    ],
    realWorld: { manufacturer: 'SpeedyBee', modelNumber: '55A 32-Bit BLHeli_32 4-in-1', retailPriceUsd: 65, retailPriceInr: 5450, solderPadLabels: ['VBAT+', 'GND', 'M1', 'M2', 'M3', 'M4'], voltageRange: '3S-6S', wireGaugeAwg: '12 AWG / 20 AWG' },
    details: { specs: ['55A cont / 65A burst', 'BLHeli_32 DShot1200', '200A current sensor'], isometricSymbol: '4IN1-ESC', diagramLabel: 'ESC' }
  },
  {
    id: 'motor-mount',
    name: 'Motor Mount',
    category: 'motorMount', group: 'PROPULSION',
    description: 'CNC-machined aluminum motor mounting plate with vibration isolation dampeners.',
    handDrawnSvgType: 'motor-mount', iconEmoji: '🔩', iconColor: '#64748b',
    massGrams: 12, color: '#64748b', tag: 'Mechanical',
    realWorld: { manufacturer: 'Generic', modelNumber: 'CNC-MM-3016', retailPriceUsd: 3, retailPriceInr: 252, solderPadLabels: [], voltageRange: 'N/A', wireGaugeAwg: 'M3 screws' },
    details: { specs: ['CNC Aluminum 6061', 'Anti-vibration', '30x16mm pattern'], isometricSymbol: 'MM', diagramLabel: 'Motor Mount' }
  },
  {
    id: 'ducted-fan',
    name: 'Ducted Fan',
    category: 'ductedFan', group: 'PROPULSION',
    description: 'Shrouded fan unit for high-speed, low-noise propulsion in confined spaces.',
    handDrawnSvgType: 'ducted-fan', iconEmoji: '💨', iconColor: '#06b6d4',
    massGrams: 85, thrustGrams: 800, powerDrawWatts: 180, color: '#06b6d4', tag: 'Thrust',
    realWorld: { manufacturer: 'Schubeler', modelNumber: 'DS-51-AXI HDS', retailPriceUsd: 65, retailPriceInr: 5460, solderPadLabels: ['A', 'B', 'C'], voltageRange: '4S-6S', wireGaugeAwg: '18 AWG' },
    details: { specs: ['51mm duct', '6-blade impeller', '~0.85 static efficiency'], isometricSymbol: 'DUCT-FAN', diagramLabel: 'Ducted Fan' }
  },

  // ─── POWER ──────────────────────────────────────────────────────────────────
  {
    id: 'bat-main',
    name: 'Main Battery',
    category: 'battery', group: 'POWER',
    description: 'Primary high-discharge 6S LiPo supplying active drive current to ESC and motors.',
    handDrawnSvgType: 'battery-main', iconEmoji: '🔋', iconColor: '#10b981',
    massGrams: 460, capacityMah: 5000, voltageNominal: 22.2, color: '#10b981', tag: 'Main Power',
    ports: [{ id: 'p_out', name: 'XT60 Out', type: 'power', direction: 'out', color: '#10b981' }],
    realWorld: { manufacturer: 'Tattu', modelNumber: 'R-Line 6S 5000mAh 100C', retailPriceUsd: 110, retailPriceInr: 9200, solderPadLabels: ['XT60+', 'XT60-', 'Balance'], voltageRange: '22.2V Nom', wireGaugeAwg: '10 AWG' },
    details: { specs: ['6S 22.2V 100C', '5000mAh', 'XT60 connector'], isometricSymbol: 'BATT-1', diagramLabel: 'Main Battery' }
  },
  {
    id: 'bat-aux',
    name: 'Auxiliary Battery',
    category: 'auxBattery', group: 'POWER',
    description: 'Secondary backup battery for redundancy, auto-switched when main is depleted.',
    handDrawnSvgType: 'battery-aux', iconEmoji: '🔌', iconColor: '#38bdf8',
    massGrams: 460, capacityMah: 5000, voltageNominal: 22.2, color: '#38bdf8', tag: 'Reserve Power',
    ports: [
      { id: 'p_chg', name: 'Charge In', type: 'power', direction: 'in', color: '#38bdf8' },
      { id: 'p_out', name: 'Backup Out', type: 'power', direction: 'out', color: '#00f0ff' }
    ],
    realWorld: { manufacturer: 'Tattu', modelNumber: 'Smart 6S 5000mAh 75C', retailPriceUsd: 110, retailPriceInr: 9200, solderPadLabels: ['XT60_CHG+', 'XT60_CHG-', 'BAL_1..6'], voltageRange: '22.2V Nom', wireGaugeAwg: '10 AWG' },
    details: { specs: ['6S 22.2V Smart LiPo', 'Auto-failover switch', 'Continuous recharge'], isometricSymbol: 'BATT-2', diagramLabel: 'Auxiliary Battery' }
  },
  {
    id: 'pdb',
    name: 'Power Distribution',
    category: 'powerDistribution', group: 'POWER',
    description: 'Power distribution board supplying regulated voltage rails to all electronics.',
    handDrawnSvgType: 'pdb', iconEmoji: '🔀', iconColor: '#f59e0b',
    massGrams: 18, powerDrawWatts: 1, color: '#f59e0b', tag: 'Power Rail',
    realWorld: { manufacturer: 'Matek', modelNumber: 'HUBOSD8-SE', retailPriceUsd: 18, retailPriceInr: 1512, solderPadLabels: ['VBAT+', 'GND', '5V', '12V', 'CAM', 'VTX'], voltageRange: '3S-6S', wireGaugeAwg: '16 AWG' },
    details: { specs: ['Integrated OSD', '5V/12V BEC', '200A current sense'], isometricSymbol: 'PDB', diagramLabel: 'Power Distribution Board' }
  },
  {
    id: 'voltage-reg',
    name: 'Voltage Regulator',
    category: 'voltageRegulator', group: 'POWER',
    description: 'Buck-boost regulator converting battery voltage to stable 5V / 12V rails.',
    handDrawnSvgType: 'vreg', iconEmoji: '🔧', iconColor: '#a78bfa',
    massGrams: 8, powerDrawWatts: 0.5, color: '#a78bfa', tag: 'Voltage Reg',
    realWorld: { manufacturer: 'Pololu', modelNumber: 'D24V50F5', retailPriceUsd: 12, retailPriceInr: 1008, solderPadLabels: ['VIN', 'GND', 'VOUT', 'EN'], voltageRange: '4.5V-38V → 5V@5A', wireGaugeAwg: '24 AWG' },
    details: { specs: ['5V @ 5A output', 'Efficiency: 95%', 'Short-circuit protected'], isometricSymbol: 'V-REG', diagramLabel: 'Voltage Regulator' }
  },
  {
    id: 'charging-module',
    name: 'Charging Module',
    category: 'chargingModule', group: 'POWER',
    description: 'Smart LiPo balance charger module with temperature-controlled charging profiles.',
    handDrawnSvgType: 'charger', iconEmoji: '🔆', iconColor: '#fbbf24',
    massGrams: 35, powerDrawWatts: 2, color: '#fbbf24', tag: 'Charger',
    realWorld: { manufacturer: 'iSDT', modelNumber: 'Q6 Plus', retailPriceUsd: 45, retailPriceInr: 3780, solderPadLabels: ['DC IN', 'BAL 1-6S', 'XT60'], voltageRange: '7-30V input', wireGaugeAwg: '16 AWG' },
    details: { specs: ['Up to 14A charge', 'Supports 1S-6S LiPo', 'Smart temperature monitor'], isometricSymbol: 'CHARGER', diagramLabel: 'Charging Module' }
  },
  {
    id: 'ncb-turbo-turbine',
    name: 'Wind Turbine Generator',
    category: 'turboWind', group: 'POWER',
    description: 'Vertical-axis aerodynamic wind turbine harvesting ram air into continuous electrical power (NCB Exclusive).',
    handDrawnSvgType: 'turbo-wind-turbine', iconEmoji: '🌬', iconColor: '#00f0ff',
    massGrams: 185, powerGenWatts: 120, color: '#00f0ff', tag: 'Turbo Energy',
    ports: [
      { id: 'p_wind', name: 'Airflow In', type: 'wind', direction: 'in', color: '#38bdf8' },
      { id: 'p_gen', name: '3-Phase AC Out', type: 'power', direction: 'out', color: '#00f0ff' }
    ],
    realWorld: { manufacturer: 'NCB Technology', modelNumber: 'NCB-AERO-GEN-V1', retailPriceUsd: 145, retailPriceInr: 12200, solderPadLabels: ['GEN_U', 'GEN_V', 'GEN_W', 'FG_RPM'], voltageRange: '12V-36V 3-Phase AC', wireGaugeAwg: '18 AWG Silicone' },
    details: { specs: ['80W-140W continuous', 'Cut-in: 3.2 m/s', 'NACA 0018 vanes'], isometricSymbol: 'TURBO-GEN', diagramLabel: 'Wind Turbine Generator' }
  },
  {
    id: 'ncb-charge-controller',
    name: 'Charge Controller',
    category: 'chargeController', group: 'POWER',
    description: 'MPPT smart charge controller rectifying turbine power and regulating battery recharging.',
    handDrawnSvgType: 'charge-controller', iconEmoji: '🧠', iconColor: '#10b981',
    massGrams: 28, powerDrawWatts: 2, color: '#10b981', tag: 'Power Reg',
    ports: [
      { id: 'p_in', name: 'Gen In', type: 'power', direction: 'in', color: '#00f0ff' },
      { id: 'p_out', name: 'Chg Out', type: 'power', direction: 'out', color: '#38bdf8' },
      { id: 'p_tlm', name: 'UART Telemetry', type: 'signal', direction: 'out', color: '#a855f7' }
    ],
    realWorld: { manufacturer: 'NCB Avionics', modelNumber: 'NCB-MPPT-6S-50A', retailPriceUsd: 65, retailPriceInr: 5450, solderPadLabels: ['AC_IN1', 'AC_IN2', 'AC_IN3', 'BAT2+', 'BAT2-', 'TX_TLM', 'GND'], voltageRange: '12V-32V DC Output', wireGaugeAwg: '16 AWG / 28 AWG' },
    details: { specs: ['MPPT 98.4%', 'Buck-Boost 12V-25.2V', 'Overcharge cutoff'], isometricSymbol: 'CHG-CTRL', diagramLabel: 'Charge Controller' }
  },

  // ─── FLIGHT CONTROL ──────────────────────────────────────────────────────────
  {
    id: 'fc-stm32-f7',
    name: 'Flight Controller',
    category: 'flightController', group: 'FLIGHT CONTROL',
    description: '32-bit ARM flight computer with dual IMU, PID stabilization, and OSD.',
    handDrawnSvgType: 'flight-controller', iconEmoji: '🖥', iconColor: '#a855f7',
    massGrams: 12, powerDrawWatts: 3, color: '#a855f7', tag: 'Avionics Brain',
    ports: [
      { id: 'p_pwr', name: '5V VCC In', type: 'power', direction: 'in', color: '#f59e0b' },
      { id: 'p_dshot', name: 'DShot ESC Out', type: 'signal', direction: 'out', color: '#ec4899' },
      { id: 'p_gps', name: 'UART GPS/Compass', type: 'signal', direction: 'in', color: '#fbbf24' },
      { id: 'p_radar', name: 'UART Radar', type: 'signal', direction: 'in', color: '#f43f5e' }
    ],
    realWorld: { manufacturer: 'SpeedyBee', modelNumber: 'F7 V3 STM32F722', retailPriceUsd: 58, retailPriceInr: 4850, solderPadLabels: ['5V', 'GND', 'BAT+', 'S1-S4', 'TX1/RX1', 'TX2/RX2', 'SDA/SCL'], voltageRange: '3S-8S direct', wireGaugeAwg: '28 AWG signal / 24 AWG power' },
    details: { specs: ['STM32F722 216MHz', 'BMI270/ICM42688 dual gyro', 'Built-in OSD'], isometricSymbol: 'FC-BRAIN', diagramLabel: 'Flight Controller' }
  },
  {
    id: 'imu-module',
    name: 'IMU',
    category: 'imu', group: 'FLIGHT CONTROL',
    description: 'Inertial Measurement Unit combining 3-axis accelerometer and gyroscope.',
    handDrawnSvgType: 'imu', iconEmoji: '📡', iconColor: '#6366f1',
    massGrams: 4, powerDrawWatts: 0.3, color: '#6366f1', tag: 'Inertial',
    realWorld: { manufacturer: 'InvenSense', modelNumber: 'ICM-42688-P', retailPriceUsd: 8, retailPriceInr: 672, solderPadLabels: ['SPI_CS', 'SPI_CLK', 'MOSI', 'MISO', 'VDD', 'GND'], voltageRange: '1.7V-3.6V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['6-DoF IMU', '±2000 dps gyro', '±16g accel', 'SPI/I2C'], isometricSymbol: 'IMU', diagramLabel: 'IMU Module' }
  },
  {
    id: 'gyroscope',
    name: 'Gyroscope',
    category: 'gyroscope', group: 'FLIGHT CONTROL',
    description: 'MEMS 3-axis gyroscope measuring angular velocity for attitude control.',
    handDrawnSvgType: 'gyro', iconEmoji: '🔄', iconColor: '#8b5cf6',
    massGrams: 3, powerDrawWatts: 0.2, color: '#8b5cf6', tag: 'Rate Sense',
    realWorld: { manufacturer: 'Bosch', modelNumber: 'BMI270', retailPriceUsd: 5, retailPriceInr: 420, solderPadLabels: ['SDA', 'SCL', 'VDD', 'GND'], voltageRange: '1.71V-3.6V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['±2000 dps', '3-axis rate', 'I2C/SPI', '2kHz ODR'], isometricSymbol: 'GYRO', diagramLabel: 'Gyroscope' }
  },
  {
    id: 'accelerometer',
    name: 'Accelerometer',
    category: 'accelerometer', group: 'FLIGHT CONTROL',
    description: '3-axis MEMS accelerometer detecting linear acceleration for position estimation.',
    handDrawnSvgType: 'accel', iconEmoji: '📈', iconColor: '#7c3aed',
    massGrams: 2, powerDrawWatts: 0.1, color: '#7c3aed', tag: 'Accel Sense',
    realWorld: { manufacturer: 'STMicro', modelNumber: 'LIS3DH', retailPriceUsd: 4, retailPriceInr: 336, solderPadLabels: ['SDA', 'SCL', 'VDD', 'GND', 'INT1'], voltageRange: '1.71V-3.6V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['±2/4/8/16g selectable', '3-axis linear', 'I2C/SPI 5kHz'], isometricSymbol: 'ACCEL', diagramLabel: 'Accelerometer' }
  },

  // ─── NAVIGATION ─────────────────────────────────────────────────────────────
  {
    id: 'gps-module',
    name: 'GPS',
    category: 'gps', group: 'NAVIGATION',
    description: 'Multi-constellation GNSS positioning module with compass for autonomous navigation.',
    handDrawnSvgType: 'gps', iconEmoji: '📍', iconColor: '#eab308',
    massGrams: 16, powerDrawWatts: 2, color: '#eab308', tag: 'Navigation',
    ports: [
      { id: 'p_pwr', name: '5V In', type: 'power', direction: 'in', color: '#f59e0b' },
      { id: 'p_uart', name: 'UART/I2C Out', type: 'signal', direction: 'out', color: '#eab308' }
    ],
    realWorld: { manufacturer: 'Matek', modelNumber: 'M10Q-5883 GNSS', retailPriceUsd: 32, retailPriceInr: 2700, solderPadLabels: ['5V', 'GND', 'TX', 'RX', 'SDA', 'SCL'], voltageRange: '4.5V-5.5V', wireGaugeAwg: '28 AWG shielded' },
    details: { specs: ['GPS/GLONASS/Galileo/BeiDou', '25Hz update', 'Triple-axis compass'], isometricSymbol: 'GPS-NAV', diagramLabel: 'GPS Module' }
  },
  {
    id: 'compass-module',
    name: 'Compass',
    category: 'compass', group: 'NAVIGATION',
    description: 'Digital 3-axis magnetometer providing absolute heading reference.',
    handDrawnSvgType: 'compass', iconEmoji: '🧭', iconColor: '#f59e0b',
    massGrams: 5, powerDrawWatts: 0.2, color: '#f59e0b', tag: 'Heading',
    realWorld: { manufacturer: 'Honeywell', modelNumber: 'HMC5883L', retailPriceUsd: 5, retailPriceInr: 420, solderPadLabels: ['SDA', 'SCL', 'VDD', 'GND', 'DRDY'], voltageRange: '2.16V-3.6V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['±8 Gauss range', '3-axis', 'I2C 400kHz', '160Hz ODR'], isometricSymbol: 'COMPASS', diagramLabel: 'Compass Module' }
  },
  {
    id: 'altimeter',
    name: 'Altimeter',
    category: 'altimeter', group: 'NAVIGATION',
    description: 'Laser/ultrasonic altitude sensor for precise terrain-following and landing control.',
    handDrawnSvgType: 'altimeter', iconEmoji: '📏', iconColor: '#f97316',
    massGrams: 8, powerDrawWatts: 0.5, color: '#f97316', tag: 'Altitude',
    realWorld: { manufacturer: 'Benewake', modelNumber: 'TF-Luna ToF', retailPriceUsd: 20, retailPriceInr: 1680, solderPadLabels: ['5V', 'GND', 'TX', 'RX'], voltageRange: '5V DC', wireGaugeAwg: '28 AWG' },
    details: { specs: ['Range: 0.2–8m', 'Accuracy: ±6cm', 'UART/I2C', '250Hz'], isometricSymbol: 'ALT', diagramLabel: 'Altimeter' }
  },
  {
    id: 'barometer',
    name: 'Barometer',
    category: 'barometer', group: 'NAVIGATION',
    description: 'High-resolution barometric pressure sensor for altitude estimation via air pressure.',
    handDrawnSvgType: 'baro', iconEmoji: '🌡', iconColor: '#fb923c',
    massGrams: 2, powerDrawWatts: 0.1, color: '#fb923c', tag: 'Baro Alt',
    realWorld: { manufacturer: 'Bosch', modelNumber: 'BMP388', retailPriceUsd: 4, retailPriceInr: 336, solderPadLabels: ['SDA', 'SCL', 'VDD', 'GND', 'CSB'], voltageRange: '1.65V-3.6V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['Pressure: 300-1250 hPa', 'Resolution: 0.066Pa', 'SPI/I2C', '200Hz'], isometricSymbol: 'BARO', diagramLabel: 'Barometer' }
  },

  // ─── SENSORS ────────────────────────────────────────────────────────────────
  {
    id: 'radar-360',
    name: 'Radar',
    category: 'radar', group: 'SENSORS',
    description: '360° multi-beam radar detecting obstacles in all directions for collision avoidance.',
    handDrawnSvgType: 'radar', iconEmoji: '📡', iconColor: '#f43f5e',
    massGrams: 75, powerDrawWatts: 6, color: '#f43f5e', tag: 'Radar/Sense',
    ports: [
      { id: 'p_pwr', name: '5V In', type: 'power', direction: 'in', color: '#f59e0b' },
      { id: 'p_data', name: 'UART Map Out', type: 'signal', direction: 'out', color: '#f43f5e' }
    ],
    realWorld: { manufacturer: 'Benewake', modelNumber: 'TF03-100', retailPriceUsd: 180, retailPriceInr: 15120, solderPadLabels: ['5V_VCC', 'GND', 'UART_TX', 'UART_RX'], voltageRange: '5.0V ±0.2V', wireGaugeAwg: '28 AWG twisted' },
    details: { specs: ['360° horizontal, 90° vertical', '60m max range', '20Hz update'], isometricSymbol: 'RADAR-360', diagramLabel: '360° Radar' }
  },
  {
    id: 'lidar-sensor',
    name: 'LiDAR',
    category: 'lidar', group: 'SENSORS',
    description: 'Laser distance scanner generating 3D point clouds for mapping and obstacle detection.',
    handDrawnSvgType: 'lidar', iconEmoji: '🔦', iconColor: '#ef4444',
    massGrams: 90, powerDrawWatts: 8, color: '#ef4444', tag: 'LiDAR 3D',
    realWorld: { manufacturer: 'RPLiDAR', modelNumber: 'S2E 360°', retailPriceUsd: 220, retailPriceInr: 18480, solderPadLabels: ['5V', 'GND', 'TX', 'RX', 'MOTOR_EN'], voltageRange: '5V DC', wireGaugeAwg: '28 AWG' },
    details: { specs: ['32k pts/s', '360° scan', '25m range', 'SLAM-ready'], isometricSymbol: 'LIDAR', diagramLabel: 'LiDAR Scanner' }
  },
  {
    id: 'ultrasonic',
    name: 'Ultrasonic Sensor',
    category: 'ultrasonic', group: 'SENSORS',
    description: 'HC-SR04-style ultrasonic sensor for short-range obstacle detection (2cm–4m).',
    handDrawnSvgType: 'ultrasonic', iconEmoji: '〰', iconColor: '#dc2626',
    massGrams: 8, powerDrawWatts: 0.3, color: '#dc2626', tag: 'Range',
    realWorld: { manufacturer: 'HC-SR04', modelNumber: 'HC-SR04P', retailPriceUsd: 2, retailPriceInr: 168, solderPadLabels: ['VCC', 'TRIG', 'ECHO', 'GND'], voltageRange: '3.3V-5V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['Range: 2cm–4m', '±3mm accuracy', 'TTL trigger/echo', '40kHz'], isometricSymbol: 'US-SNSR', diagramLabel: 'Ultrasonic Sensor' }
  },
  {
    id: 'obstacle-sensor',
    name: 'Obstacle Sensor',
    category: 'obstacleSensor', group: 'SENSORS',
    description: 'IR proximity sensor triggering avoidance maneuvers when objects are detected close.',
    handDrawnSvgType: 'obstacle', iconEmoji: '⚠', iconColor: '#b91c1c',
    massGrams: 5, powerDrawWatts: 0.15, color: '#b91c1c', tag: 'Proximity',
    realWorld: { manufacturer: 'Sharp', modelNumber: 'GP2Y0A21YK0F', retailPriceUsd: 5, retailPriceInr: 420, solderPadLabels: ['VCC', 'GND', 'AOUT'], voltageRange: '4.5V-5.5V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['Range: 10–80cm', 'Analog 0.4V–2.3V out', 'IR beam'], isometricSymbol: 'OBS-SNSR', diagramLabel: 'Obstacle Sensor' }
  },
  {
    id: 'temp-sensor',
    name: 'Temperature Sensor',
    category: 'tempSensor', group: 'SENSORS',
    description: 'Motor and ESC temperature sensor preventing thermal shutdown in high-load flights.',
    handDrawnSvgType: 'temp', iconEmoji: '🌡', iconColor: '#991b1b',
    massGrams: 3, powerDrawWatts: 0.05, color: '#991b1b', tag: 'Thermal',
    realWorld: { manufacturer: 'Dallas', modelNumber: 'DS18B20', retailPriceUsd: 2, retailPriceInr: 168, solderPadLabels: ['VCC', 'DATA', 'GND'], voltageRange: '3.0V-5.5V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['-55°C to +125°C', '±0.5°C accuracy', '1-Wire digital', '12-bit'], isometricSymbol: 'TEMP', diagramLabel: 'Temperature Sensor' }
  },
  {
    id: 'airflow-sensor',
    name: 'Airflow / Wind Sensor',
    category: 'airflowSensor', group: 'SENSORS',
    description: 'Pitot tube + differential pressure sensor measuring airspeed and wind conditions.',
    handDrawnSvgType: 'airflow', iconEmoji: '💨', iconColor: '#7f1d1d',
    massGrams: 12, powerDrawWatts: 0.2, color: '#7f1d1d', tag: 'Wind/Speed',
    realWorld: { manufacturer: 'Matek', modelNumber: 'ASPD-4525DO', retailPriceUsd: 18, retailPriceInr: 1512, solderPadLabels: ['SDA', 'SCL', 'VCC', 'GND'], voltageRange: '3.3V-5V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['Pitot tube + diff pressure', '±100 Pa range', 'I2C', 'Airspeed 0-100 m/s'], isometricSymbol: 'AIRSPD', diagramLabel: 'Airflow Sensor' }
  },

  // ─── CAMERA ─────────────────────────────────────────────────────────────────
  {
    id: 'cam-hd',
    name: 'HD Camera',
    category: 'camera', group: 'CAMERA',
    description: '4K HD stabilized gimbal camera for video, surveillance and autonomous tracking.',
    handDrawnSvgType: 'camera-hd', iconEmoji: '📷', iconColor: '#db2777',
    massGrams: 42, powerDrawWatts: 4, color: '#db2777', tag: 'Vision',
    ports: [
      { id: 'p_pwr', name: '5V In', type: 'power', direction: 'in', color: '#f59e0b' },
      { id: 'p_vid', name: 'Video Out', type: 'signal', direction: 'out', color: '#38bdf8' }
    ],
    realWorld: { manufacturer: 'Caddx', modelNumber: 'Ratel 2 Micro Starlight', retailPriceUsd: 38, retailPriceInr: 3192, solderPadLabels: ['5V_IN', 'GND', 'VIDEO_OUT', 'OSD_CTRL'], voltageRange: '5V-40V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['4K 60fps / 1080p 120fps', '160° FOV', '<14ms latency'], isometricSymbol: 'HD-CAM', diagramLabel: 'HD Camera' }
  },
  {
    id: 'cam-thermal',
    name: 'Thermal Camera',
    category: 'thermalCamera', group: 'CAMERA',
    description: 'Infrared thermal imaging camera for night ops, search and rescue, and heat mapping.',
    handDrawnSvgType: 'camera-thermal', iconEmoji: '🌡', iconColor: '#be185d',
    massGrams: 55, powerDrawWatts: 5, color: '#be185d', tag: 'IR Vision',
    realWorld: { manufacturer: 'FLIR', modelNumber: 'Lepton 3.5', retailPriceUsd: 199, retailPriceInr: 16716, solderPadLabels: ['VDD', 'GND', 'SDA', 'SCL', 'VSYNC', 'HSYNC'], voltageRange: '2.8V-3.1V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['160×120 IR pixels', '57° FOV', '-10°C to 400°C', 'LWIR 8-14µm'], isometricSymbol: 'IR-CAM', diagramLabel: 'Thermal Camera' }
  },
  {
    id: 'cam-fpv',
    name: 'FPV Camera',
    category: 'fpvCamera', group: 'CAMERA',
    description: 'Low-latency analog/digital FPV camera transmitting live cockpit view to pilot goggles.',
    handDrawnSvgType: 'camera-fpv', iconEmoji: '🎥', iconColor: '#9d174d',
    massGrams: 14, powerDrawWatts: 1.5, color: '#9d174d', tag: 'FPV Link',
    realWorld: { manufacturer: 'RunCam', modelNumber: 'Phoenix 2 Nano', retailPriceUsd: 25, retailPriceInr: 2100, solderPadLabels: ['5V', 'GND', 'VIDEO'], voltageRange: '5V-20V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['800TVL NTSC/PAL', '150° FOV', '0.0001 Lux', 'Starlight sensor'], isometricSymbol: 'FPV-CAM', diagramLabel: 'FPV Camera' }
  },

  // ─── COMMUNICATION ──────────────────────────────────────────────────────────
  {
    id: 'radio-controller',
    name: 'Radio Controller',
    category: 'radioController', group: 'COMMUNICATION',
    description: '2.4 GHz RC receiver decoding pilot stick inputs and forwarding commands to FC.',
    handDrawnSvgType: 'radio', iconEmoji: '📻', iconColor: '#2563eb',
    massGrams: 18, powerDrawWatts: 0.5, color: '#2563eb', tag: 'RC Link',
    ports: [{ id: 'p_sbus', name: 'SBUS/CRSF Out', type: 'signal', direction: 'out', color: '#a855f7' }],
    realWorld: { manufacturer: 'ExpressLRS', modelNumber: 'ELRS EP2 2.4GHz', retailPriceUsd: 20, retailPriceInr: 1680, solderPadLabels: ['5V', 'GND', 'UART_TX', 'UART_RX'], voltageRange: '4.5V-5.5V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['ExpressLRS CRSF', '<2ms latency', '2.4GHz or 915MHz', '>20km range'], isometricSymbol: 'RC-RX', diagramLabel: 'Radio Controller Receiver' }
  },
  {
    id: 'telemetry-module',
    name: 'Telemetry Module',
    category: 'telemetry', group: 'COMMUNICATION',
    description: '915 MHz telemetry radio sending real-time flight data to the ground station.',
    handDrawnSvgType: 'telemetry', iconEmoji: '📶', iconColor: '#1d4ed8',
    massGrams: 20, powerDrawWatts: 1, color: '#1d4ed8', tag: 'Telemetry',
    ports: [{ id: 'p_uart', name: 'UART Bi-Dir', type: 'signal', direction: 'bi', color: '#38bdf8' }],
    realWorld: { manufacturer: 'SiK / mRo', modelNumber: 'mRo SiK Telemetry 915MHz 500mW', retailPriceUsd: 30, retailPriceInr: 2520, solderPadLabels: ['5V', 'GND', 'TX', 'RX', 'CTS', 'RTS'], voltageRange: '5V DC', wireGaugeAwg: '28 AWG' },
    details: { specs: ['915MHz / 433MHz', '>2km range', '57600 baud', 'MAVLink'], isometricSymbol: 'TLM', diagramLabel: 'Telemetry Module' }
  },
  {
    id: 'wifi-module',
    name: 'Wi-Fi Module',
    category: 'wifi', group: 'COMMUNICATION',
    description: 'ESP32 Wi-Fi module enabling drone configuration, live OSD, and data upload via 802.11.',
    handDrawnSvgType: 'wifi', iconEmoji: '📡', iconColor: '#1e40af',
    massGrams: 8, powerDrawWatts: 0.8, color: '#1e40af', tag: 'WiFi',
    realWorld: { manufacturer: 'Espressif', modelNumber: 'ESP32-WROOM-32', retailPriceUsd: 4, retailPriceInr: 336, solderPadLabels: ['3.3V', 'GND', 'TX', 'RX', 'EN', 'IO0'], voltageRange: '3.0V-3.6V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['802.11 b/g/n 2.4GHz', 'BLE 4.2', '4MB flash', 'UART/SPI/I2C'], isometricSymbol: 'WIFI', diagramLabel: 'Wi-Fi Module' }
  },
  {
    id: 'bluetooth-module',
    name: 'Bluetooth Module',
    category: 'bluetooth', group: 'COMMUNICATION',
    description: 'Bluetooth 5.0 module for short-range configuration and mobile app connectivity.',
    handDrawnSvgType: 'bluetooth', iconEmoji: '🔵', iconColor: '#1e3a8a',
    massGrams: 5, powerDrawWatts: 0.3, color: '#1e3a8a', tag: 'BT Link',
    realWorld: { manufacturer: 'Nordic', modelNumber: 'nRF52840', retailPriceUsd: 6, retailPriceInr: 504, solderPadLabels: ['3.3V', 'GND', 'TX', 'RX'], voltageRange: '1.7V-5.5V', wireGaugeAwg: '28 AWG' },
    details: { specs: ['BT 5.0 + BLE', '10m range', '2Mbps phy', 'UART bridge'], isometricSymbol: 'BT-MOD', diagramLabel: 'Bluetooth Module' }
  },
  {
    id: 'vtx-transmitter',
    name: 'Communication Module',
    category: 'vtx', group: 'COMMUNICATION',
    description: '5.8 GHz VTX video transmitter sending live FPV footage to ground station / goggles.',
    handDrawnSvgType: 'vtx', iconEmoji: '📺', iconColor: '#3b82f6',
    massGrams: 22, powerDrawWatts: 8, color: '#3b82f6', tag: 'RF Video',
    ports: [
      { id: 'p_vid', name: 'Video In', type: 'signal', direction: 'in', color: '#f43f5e' },
      { id: 'p_rf', name: '5.8GHz RF Out', type: 'rf', direction: 'out', color: '#38bdf8' }
    ],
    realWorld: { manufacturer: 'TBS', modelNumber: 'Unify Pro32 HV 5.8GHz', retailPriceUsd: 49, retailPriceInr: 4116, solderPadLabels: ['7-26V_IN', 'GND', 'VIDEO_IN', 'SMART_AUDIO', '5V_OUT'], voltageRange: '2S-6S (7.4V-26V)', wireGaugeAwg: '26 AWG power / 28 AWG signal' },
    details: { specs: ['25mW-1600mW PitMode', '5.8GHz 48CH', 'RHCP omnidirectional'], isometricSymbol: 'VTX-TX', diagramLabel: 'VTX Transmitter' }
  },

  // ─── PAYLOAD ────────────────────────────────────────────────────────────────
  {
    id: 'payload-medical',
    name: 'Medical Kit',
    category: 'payload', group: 'PAYLOAD',
    description: 'Insulated emergency medical cargo pod with first-aid, AED, and temperature-controlled serums.',
    handDrawnSvgType: 'payload-medical', iconEmoji: '🏥', iconColor: '#e11d48',
    massGrams: 420, color: '#e11d48', tag: 'Rescue',
    ports: [{ id: 'p_servo', name: 'Servo Drop', type: 'signal', direction: 'in', color: '#a855f7' }],
    realWorld: { manufacturer: 'NCB Medical', modelNumber: 'NCB-MED-CARGO-3L', retailPriceUsd: 85, retailPriceInr: 7140, solderPadLabels: ['SERVO_PWM', 'SERVO_5V', 'SERVO_GND', 'THERMO_SENSE'], voltageRange: '5V-6V Servo', wireGaugeAwg: '24 AWG 3-pin JR' },
    details: { specs: ['3.2L internal', 'Up to 3.5kg', 'Aerogel thermal insulation'], isometricSymbol: 'MED-POD', diagramLabel: 'Medical Kit Pod' }
  },
  {
    id: 'payload-delivery',
    name: 'Delivery Box',
    category: 'deliveryBox', group: 'PAYLOAD',
    description: 'Package delivery box with servo-release mechanism for last-mile logistics.',
    handDrawnSvgType: 'payload-box', iconEmoji: '📦', iconColor: '#c2410c',
    massGrams: 350, color: '#c2410c', tag: 'Logistics',
    realWorld: { manufacturer: 'NCB Logistics', modelNumber: 'NCB-DLVR-BOX-2L', retailPriceUsd: 55, retailPriceInr: 4620, solderPadLabels: ['SERVO_PWM', '5V', 'GND'], voltageRange: '5V Servo', wireGaugeAwg: '24 AWG' },
    details: { specs: ['2L volume', 'Quick-release servo latch', 'IP44 weatherproof'], isometricSymbol: 'DLVR-BOX', diagramLabel: 'Delivery Box' }
  },
  {
    id: 'payload-camera',
    name: 'Camera Payload',
    category: 'cameraPayload', group: 'PAYLOAD',
    description: '3-axis gimbal stabilized mapping camera for photogrammetry and surveying.',
    handDrawnSvgType: 'payload-cam', iconEmoji: '🎬', iconColor: '#b45309',
    massGrams: 280, powerDrawWatts: 7, color: '#b45309', tag: 'Survey',
    realWorld: { manufacturer: 'Sony', modelNumber: 'Sony A6000 Payload Mount', retailPriceUsd: 350, retailPriceInr: 29400, solderPadLabels: ['GIMBAL_PWR', 'GIMBAL_SBUS'], voltageRange: '12V Gimbal', wireGaugeAwg: '20 AWG' },
    details: { specs: ['24MP APS-C sensor', '3-axis gimbal', 'PPK/RTK ready'], isometricSymbol: 'CAM-PAYLOAD', diagramLabel: 'Camera Payload' }
  },
  {
    id: 'payload-custom',
    name: 'Custom Payload',
    category: 'customPayload', group: 'PAYLOAD',
    description: 'Universal payload bay accepting custom mission modules up to 2kg.',
    handDrawnSvgType: 'payload-custom', iconEmoji: '🧩', iconColor: '#92400e',
    massGrams: 200, color: '#92400e', tag: 'Custom',
    realWorld: { manufacturer: 'NCB', modelNumber: 'NCB-UNIVERSAL-PAYLOAD', retailPriceUsd: 30, retailPriceInr: 2520, solderPadLabels: ['5V', '12V', 'GND', 'SERVO1', 'SERVO2'], voltageRange: '5V/12V', wireGaugeAwg: '20-24 AWG' },
    details: { specs: ['Universal mount', '2kg capacity', 'Multi-servo control'], isometricSymbol: 'CSTM-PAY', diagramLabel: 'Custom Payload' }
  },

  // ─── LANDING ────────────────────────────────────────────────────────────────
  {
    id: 'landing-gear',
    name: 'Landing Gear',
    category: 'landingGear', group: 'LANDING',
    description: 'Retractable aluminum landing legs providing stable ground support and payload clearance.',
    handDrawnSvgType: 'landing-gear', iconEmoji: '🦿', iconColor: '#475569',
    massGrams: 95, color: '#475569', tag: 'Landing',
    realWorld: { manufacturer: 'DJI', modelNumber: 'Generic Aluminium Landing Gear', retailPriceUsd: 15, retailPriceInr: 1260, solderPadLabels: [], voltageRange: 'N/A', wireGaugeAwg: 'M3 screws' },
    details: { specs: ['Retractable/fixed', 'Aluminum 6061', '8cm ground clearance'], isometricSymbol: 'LAND-GR', diagramLabel: 'Landing Gear' }
  },
  {
    id: 'skid-landing',
    name: 'Skid',
    category: 'skid', group: 'LANDING',
    description: 'Lightweight carbon fiber skid for fixed ground contact on small FPV frames.',
    handDrawnSvgType: 'skid', iconEmoji: '⚓', iconColor: '#334155',
    massGrams: 22, color: '#334155', tag: 'Skid',
    realWorld: { manufacturer: 'Generic', modelNumber: 'CF Skid Set 90mm', retailPriceUsd: 5, retailPriceInr: 420, solderPadLabels: [], voltageRange: 'N/A', wireGaugeAwg: 'M3 screws' },
    details: { specs: ['Carbon fiber', '90mm span', '22g per set'], isometricSymbol: 'SKID', diagramLabel: 'Skid' }
  },
  {
    id: 'casing',
    name: 'Casing Payload',
    category: 'casingPayload', group: 'LANDING',
    description: 'Aerodynamic protective casing enclosing electronics with IP54 weatherproofing.',
    handDrawnSvgType: 'casing', iconEmoji: '🛡', iconColor: '#1e293b',
    massGrams: 65, color: '#1e293b', tag: 'Casing',
    realWorld: { manufacturer: 'NCB', modelNumber: 'NCB-CASING-IP54', retailPriceUsd: 22, retailPriceInr: 1848, solderPadLabels: [], voltageRange: 'N/A', wireGaugeAwg: 'M3 screws' },
    details: { specs: ['IP54 rated', 'PC+ABS compound', 'Drag-optimised'], isometricSymbol: 'CASING', diagramLabel: 'Protective Casing' }
  }
];

// Group catalog by category group
export const CATALOG_BY_GROUP = COMPONENT_CATALOG.reduce((acc, comp) => {
  if (!acc[comp.group]) acc[comp.group] = [];
  acc[comp.group].push(comp);
  return acc;
}, {} as Record<string, DroneComponentDefinition[]>);

export const GROUP_ORDER = [
  'AIRFRAME',
  'PROPULSION',
  'POWER',
  'FLIGHT CONTROL',
  'NAVIGATION',
  'SENSORS',
  'CAMERA',
  'COMMUNICATION',
  'PAYLOAD',
  'LANDING'
] as const;

export const GROUP_COLORS: Record<string, string> = {
  'AIRFRAME':      '#00f0ff',
  'PROPULSION':    '#3b82f6',
  'POWER':         '#10b981',
  'FLIGHT CONTROL':'#a855f7',
  'NAVIGATION':    '#eab308',
  'SENSORS':       '#f43f5e',
  'CAMERA':        '#db2777',
  'COMMUNICATION': '#2563eb',
  'PAYLOAD':       '#e11d48',
  'LANDING':       '#64748b'
};

export const GROUP_ICONS: Record<string, string> = {
  'AIRFRAME':      '✈',
  'PROPULSION':    '⚙',
  'POWER':         '🔋',
  'FLIGHT CONTROL':'🖥',
  'NAVIGATION':    '📍',
  'SENSORS':       '📡',
  'CAMERA':        '📷',
  'COMMUNICATION': '📻',
  'PAYLOAD':       '📦',
  'LANDING':       '🦿'
};

export const PRESET_CONFIGURATIONS = {
  ncbSmartTurboDrone: {
    name: 'NCB Smart Drone (Turbo Wind System)',
    description: 'Complete NCB architecture with Top Wind Turbine Generator, Dual Batteries, Smart Charge Controller, 360° Radar, 4 Motors, FC, ESC, and Camera.',
    nodes: [
      { componentId: 'frame-quadcopter',     x: 480, y: 320, label: 'Quadcopter Frame' },
      { componentId: 'ncb-turbo-turbine',    x: 480, y: 160, label: 'Top Wind Turbine' },
      { componentId: 'ncb-charge-controller',x: 620, y: 220, label: 'Charge Controller' },
      { componentId: 'bat-main',             x: 340, y: 340, label: 'Main Battery' },
      { componentId: 'bat-aux',              x: 620, y: 340, label: 'Auxiliary Battery (Charging)' },
      { componentId: 'radar-360',            x: 650, y: 140, label: '360° Radar' },
      { componentId: 'fc-stm32-f7',          x: 480, y: 320, label: 'Flight Controller' },
      { componentId: 'esc-4in1',             x: 480, y: 400, label: '4-in-1 ESC' },
      { componentId: 'motor-brushless',      x: 260, y: 160, label: 'Motor 1 (FL)' },
      { componentId: 'prop-3blade',          x: 260, y: 155, label: 'Propeller 1' },
      { componentId: 'motor-brushless',      x: 700, y: 160, label: 'Motor 2 (FR)' },
      { componentId: 'prop-3blade',          x: 700, y: 155, label: 'Propeller 2' },
      { componentId: 'motor-brushless',      x: 260, y: 480, label: 'Motor 3 (RL)' },
      { componentId: 'prop-3blade',          x: 260, y: 475, label: 'Propeller 3' },
      { componentId: 'motor-brushless',      x: 700, y: 480, label: 'Motor 4 (RR)' },
      { componentId: 'prop-3blade',          x: 700, y: 475, label: 'Propeller 4' },
      { componentId: 'cam-hd',              x: 480, y: 490, label: 'HD Camera' },
      { componentId: 'vtx-transmitter',     x: 340, y: 220, label: 'VTX Transmitter' },
      { componentId: 'gps-module',          x: 480, y: 70,  label: 'GPS Module' },
      { componentId: 'payload-medical',     x: 480, y: 580, label: 'Medical Pod' }
    ],
    connections: [
      { sourceIdx: 1,  targetIdx: 2,  type: 'power',  color: '#00f0ff' },
      { sourceIdx: 2,  targetIdx: 4,  type: 'power',  color: '#38bdf8' },
      { sourceIdx: 3,  targetIdx: 7,  type: 'power',  color: '#10b981' },
      { sourceIdx: 6,  targetIdx: 7,  type: 'signal', color: '#a855f7' },
      { sourceIdx: 7,  targetIdx: 8,  type: 'power',  color: '#3b82f6' },
      { sourceIdx: 7,  targetIdx: 10, type: 'power',  color: '#3b82f6' },
      { sourceIdx: 7,  targetIdx: 12, type: 'power',  color: '#3b82f6' },
      { sourceIdx: 7,  targetIdx: 14, type: 'power',  color: '#3b82f6' },
      { sourceIdx: 5,  targetIdx: 6,  type: 'signal', color: '#f43f5e' },
      { sourceIdx: 16, targetIdx: 17, type: 'signal', color: '#38bdf8' },
      { sourceIdx: 18, targetIdx: 6,  type: 'signal', color: '#eab308' }
    ]
  }
};
