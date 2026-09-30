export type ComponentCategory =
  // AIRFRAME
  | 'frame'
  // PROPULSION
  | 'motor'
  | 'propeller'
  | 'esc'
  | 'motorMount'
  | 'ductedFan'
  // POWER
  | 'battery'
  | 'auxBattery'
  | 'powerDistribution'
  | 'voltageRegulator'
  | 'chargingModule'
  | 'turboWind'
  | 'chargeController'
  // FLIGHT CONTROL
  | 'flightController'
  | 'imu'
  | 'gyroscope'
  | 'accelerometer'
  // NAVIGATION
  | 'gps'
  | 'compass'
  | 'altimeter'
  | 'barometer'
  // SENSORS
  | 'radar'
  | 'lidar'
  | 'ultrasonic'
  | 'obstacleSensor'
  | 'tempSensor'
  | 'airflowSensor'
  // CAMERA
  | 'camera'
  | 'thermalCamera'
  | 'fpvCamera'
  // COMMUNICATION
  | 'radioController'
  | 'telemetry'
  | 'wifi'
  | 'bluetooth'
  | 'vtx'
  | 'receiver'
  // PAYLOAD
  | 'payload'
  | 'deliveryBox'
  | 'cameraPayload'
  | 'customPayload'
  // LANDING
  | 'landingGear'
  | 'skid'
  | 'casingPayload'
  // LEGACY
  | 'wiring';

export type ComponentGroupKey =
  | 'AIRFRAME'
  | 'PROPULSION'
  | 'POWER'
  | 'FLIGHT CONTROL'
  | 'NAVIGATION'
  | 'SENSORS'
  | 'CAMERA'
  | 'COMMUNICATION'
  | 'PAYLOAD'
  | 'LANDING';

export interface PortDefinition {
  id: string;
  name: string;
  type: 'power' | 'signal' | 'rf' | 'wind' | 'mechanical';
  direction: 'in' | 'out' | 'bi';
  color: string;
}

export interface RealWorldPartInfo {
  manufacturer: string;
  modelNumber: string;
  retailPriceUsd: number;
  retailPriceInr: number;
  datasheetUrl?: string;
  solderPadLabels: string[];
  voltageRange: string;
  wireGaugeAwg: string;
}

export interface DroneComponentDefinition {
  id: string;
  name: string;
  category: ComponentCategory;
  group: ComponentGroupKey;
  description: string;
  handDrawnSvgType: string;
  iconEmoji: string;       // emoji icon for the grid cell
  iconColor: string;       // accent color
  massGrams: number;
  powerDrawWatts?: number;
  powerGenWatts?: number;
  capacityMah?: number;
  thrustGrams?: number;
  voltageNominal?: number;
  color: string;
  tag: string;
  ports?: PortDefinition[];
  realWorld: RealWorldPartInfo;
  details: {
    specs: string[];
    isometricSymbol: string;
    diagramLabel: string;
  };
}

export interface WireConnection {
  id: string;
  sourceNodeId: string;
  sourcePortId: string;
  targetNodeId: string;
  targetPortId: string;
  type: 'power' | 'signal' | 'rf' | 'wind';
  color: string;
  status: 'active' | 'standby' | 'disconnected';
  flowRate?: number;
}

export interface PlacedNode {
  instanceId: string;
  componentId: string;
  component: DroneComponentDefinition;
  x: number;
  y: number;
  rotation: number;
  label?: string;
  status: 'operational' | 'charging' | 'idle' | 'warning';
}

export interface DroneStats {
  totalMassGrams: number;
  motorCount: number;
  propellerCount: number;
  mainBatteryCapacityMah: number;
  backupBatteryCapacityMah: number;
  totalThrustGrams: number;
  thrustToWeightRatio: number;
  windGenWatts: number;
  netPowerBalanceWatts: number;
  hoverTimeMinutes: number;
  maxSpeedKmh: number;
  totalCostUsd: number;
  totalCostInr: number;
  hasFlightController: boolean;
  hasFrame: boolean;
  hasMainBattery: boolean;
  hasTurboWindSystem: boolean;
  hasRadarSystem: boolean;
  status: 'Ready for Flight' | 'Under Construction' | 'Critical Components Missing';
  statusDetails: string[];
}

export interface DroneTypeInfo {
  id: string;
  name: string;
  category: string;
  rotorCount: number | string;
  description: string;
  keyAdvantages: string[];
  typicalUse: string;
  thrustPattern: string;
  iconName: string;
  hasTurboSupport?: boolean;
}

export interface WorkingStep {
  step: number;
  title: string;
  role: string;
  details: string;
  badge: string;
}
