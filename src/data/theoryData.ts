import type { DroneTypeInfo, WorkingStep } from '../types/drone';

export interface ComponentTheory {
  id: string;
  name: string;
  category: string;
  symbol: string;
  tagline: string;
  description: string;
  engineeringRole: string;
  keySpecs: string[];
  handDrawnSvgType: string;
}

export const DRONE_OVERVIEW = {
  title: "NCB Technology: Universal Drone Builder & Turbo Energy Simulator",
  definition:
    "An advanced software-based UAV engineering platform designed to model multirotor aerodynamics, exploded physical assembly, and next-generation renewable in-flight recharging via the NCB Top Wind Turbine Generator.",
  corePrinciples: [
    {
      title: "Exploded Blueprint Architecture (Cisco Packet Tracer Paradigm)",
      desc: "Assemble frames, brushless motors, ESC power distribution boards, and avionics flight controllers with live wiring interconnects, logical data packet flow, and telemetry monitoring."
    },
    {
      title: "NCB Top Wind Turbine In-Flight Recharging",
      desc: "Integrates a top-mounted vertical-axis aerofoil turbine that converts ambient headwind and rotor downwash into continuous electrical power, charging a dedicated auxiliary battery automatically while airborne."
    },
    {
      title: "360° LiDAR & Radar Collision Avoidance",
      desc: "High-frequency pulsed laser and multi-beam radar dome scanning 360 degrees around the airframe to provide real-time spatial mapping and fail-safe return-to-home."
    }
  ]
};

export const NCB_TURBO_WORKING_PIPELINE: WorkingStep[] = [
  {
    step: 1,
    title: "Wind Energy Generation",
    role: "Top Vertical Turbine",
    badge: "Ram Air / Downwash",
    details: "The top-mounted vertical wind turbine catches oncoming flight airflow and blade downwash, spinning a lightweight 3-phase neodymium dynamo generator."
  },
  {
    step: 2,
    title: "Charge Controller",
    role: "MPPT Power Rectification",
    badge: "Smart Voltage Reg",
    details: "The intelligent electronic charge controller rectifies fluctuating AC power into regulated DC voltage tuned specifically to the auxiliary battery chemistry."
  },
  {
    step: 3,
    title: "Additional Battery Charging",
    role: "Secondary Storage",
    badge: "In-Flight Recharge",
    details: "The generated wind power charges the secondary blue LiPo pack continuously during cruising, preventing battery depletion and extending mission endurance."
  },
  {
    step: 4,
    title: "Continuous Flight",
    role: "Active Power Handover",
    badge: "Zero-Downtime Flight",
    details: "The main green battery supplies high-discharge amps to the 4-in-1 ESC and brushless motors. When low, power automatically switches to the newly charged battery."
  },
  {
    step: 5,
    title: "Radar & Vision System",
    role: "360° Safety Envelope",
    badge: "Surrounding Scan",
    details: "An omnidirectional radar dome and 4K stabilized camera continuously survey the surroundings, maintaining waypoint altitude and preventing obstacle collisions."
  }
];

export const BASIC_WORKING_PIPELINE: WorkingStep[] = [
  {
    step: 1,
    title: "Battery",
    role: "Direct Current Power Source",
    badge: "DC Energy (LiPo)",
    details: "High-discharge Lithium Polymer (LiPo) cells supply heavy continuous direct current (DC) voltage to the primary power distribution board."
  },
  {
    step: 2,
    title: "ESC (Speed Controller)",
    role: "3-Phase AC Modulation",
    badge: "PWM / DShot Control",
    details: "Electronic Speed Controllers convert DC into high-speed three-phase alternating pulses based on throttle commands from the Flight Controller."
  },
  {
    step: 3,
    title: "Brushless Motor",
    role: "Electromechanical Torque",
    badge: "RPM Generation",
    details: "Neodymium magnet outrunner motors rotate electromagnetically at high KV speeds with virtually zero friction wear."
  },
  {
    step: 4,
    title: "Propeller",
    role: "Airfoil Aerodynamics",
    badge: "Air Mass Acceleration",
    details: "Specially pitched CW (Clockwise) and CCW (Counter-Clockwise) blades bite into ambient air, accelerating airflow downward."
  },
  {
    step: 5,
    title: "Thrust",
    role: "Newton's Third Law",
    badge: "Opposing Upward Force",
    details: "For every action, there is an equal and opposite reaction. High-velocity downward mass flow generates reactive vertical and directional thrust."
  },
  {
    step: 6,
    title: "Drone Movement",
    role: "Kinematic Flight Dynamics",
    badge: "Pitch / Roll / Yaw / Altitude",
    details: "Coordinated variation of motor thrust vector angles and throttle produces translation, rotation, and stabilized aerial maneuvering."
  }
];

export const FLIGHT_CONTROLLER_DEEPDIVE = {
  title: "The Flight Controller: Drone Brain & Equilibrium",
  summary:
    "The Flight Controller (FC) is the central real-time microprocessor of the drone. It continuously processes high-frequency sensor readings and calculates instantaneous motor speed corrections to guarantee stability and fulfill pilot commands.",
  coreFunctions: [
    {
      heading: "Sensor Fusion & State Estimation",
      text: "The FC reads gyroscopes and accelerometers at 1kHz - 8kHz rates, calculating current attitude angles (pitch, roll, and yaw) via Kalman filtering algorithms."
    },
    {
      heading: "PID Feedback Loop Correction",
      text: "Proportional-Integral-Derivative (PID) algorithms evaluate error margins between the desired pilot stick position and current physical orientation hundreds of times every second."
    },
    {
      heading: "ESC Telemetry & Motor Signal Output",
      text: "The FC sends ultra-fast digital signals (e.g. DShot300/600) to each individual ESC, varying motor RPM independently to execute turns, climbs, and emergency failsafes."
    },
    {
      heading: "Radar & GPS Navigation Automation",
      text: "When paired with 360° Radar and GNSS modules, the FC autonomously executes Obstacle Avoidance, Position Hold, Return-To-Home (RTH), and automated 3D survey routes."
    }
  ]
};

export const DRONE_COMPONENTS_THEORY: ComponentTheory[] = [
  {
    id: "turboWind",
    name: "Top Wind Turbine Generator",
    category: "NCB Turbo Energy",
    symbol: "TURBO",
    tagline: "In-flight wind power harvesting dynamo",
    description:
      "A vertical-axis aerofoil wind turbine mounted atop the central fuselage hub. Captures forward flight wind and rotor downwash velocity to generate electrical current for in-flight battery recharging.",
    engineeringRole: "Transforms aerodynamic airflow into continuous electrical wattage, extending UAV operational flight times.",
    keySpecs: ["Power Output: 80W - 140W", "Vertical NACA Aerofoil Vanes", "Integrated 3-phase AC dynamo"],
    handDrawnSvgType: "turbo-wind-turbine"
  },
  {
    id: "chargeController",
    name: "Smart Charge Controller",
    category: "NCB Turbo Energy",
    symbol: "CHG",
    tagline: "Dynamic MPPT power management and charging circuit",
    description:
      "A high-efficiency micro-electronic power conditioning unit. Rectifies AC output from the turbine, optimizes Maximum Power Point Tracking (MPPT), and regulates current into the auxiliary battery.",
    engineeringRole: "Safely charges the secondary LiPo battery during flight without stressing the avionics or main motor power lines.",
    keySpecs: ["MPPT Efficiency: 98.4%", "Dual-channel battery manager", "Active thermal and over-voltage safeguards"],
    handDrawnSvgType: "charge-controller"
  },
  {
    id: "batteryMain",
    name: "Main Battery (Running)",
    category: "Power Source",
    symbol: "BAT-1",
    tagline: "Primary high-discharge propulsion reservoir",
    description:
      "A 6S Lithium-Polymer (LiPo) pack engineered for extreme continuous and burst current discharge, directly driving the 4-in-1 ESC and brushless propulsion motors.",
    engineeringRole: "Supplies instantaneous amperage for aggressive climb, heavy payload lift, and rapid throttle responses.",
    keySpecs: ["Configuration: 6S 22.2V 5000mAh", "Discharge: 100C Continuous", "Connector: Heavy-Duty XT60"],
    handDrawnSvgType: "battery-main"
  },
  {
    id: "batteryTurbo",
    name: "Additional Battery (Charging)",
    category: "Power Source",
    symbol: "BAT-2",
    tagline: "Secondary battery replenished automatically in flight",
    description:
      "A dedicated secondary LiPo pack connected to the Smart Charge Controller. Continuously absorbs electrical energy produced by the Top Wind Turbine Generator.",
    engineeringRole: "Provides auxiliary power reserve and failover backup, enabling extended range and emergency rescue missions.",
    keySpecs: ["Configuration: 6S 22.2V 5000mAh", "Smart charge balancer", "Automatic failover circuit"],
    handDrawnSvgType: "battery-turbo"
  },
  {
    id: "radar",
    name: "360° Radar & LiDAR System",
    category: "Sensors & Perception",
    symbol: "RADAR",
    tagline: "Omnidirectional obstacle detection and terrain mapping",
    description:
      "A top-mounted rotating pulse radar and LiDAR scanner capable of 360-degree real-time spatial awareness, detecting buildings, powerlines, trees, and other aircraft in real time.",
    engineeringRole: "Feeds real-time proximity vectors to the flight controller for autonomous collision avoidance and GPS-denied navigation.",
    keySpecs: ["360° Horizontal Field of View", "Detection Range: up to 60m", "High-frequency update loop"],
    handDrawnSvgType: "radar-lidar"
  },
  {
    id: "frame",
    name: "Drone Frame (Chassis & Standoffs)",
    category: "Structural Core",
    symbol: "FRM",
    tagline: "Rigid 3K carbon fiber skeleton with brass standoffs",
    description:
      "Constructed from high-tensile carbon fiber with 5mm arms, base chassis plate, top equipment deck, and M3 brass pillars to insulate electronics from mechanical vibration.",
    engineeringRole: "Absorbs torque stress, distributes center of gravity (CG), and provides modular mounting for propulsion and avionics.",
    keySpecs: ["3K Twill Woven Carbon", "5mm Chamfered Arms", "M3 Brass Standoff Pillars"],
    handDrawnSvgType: "frame-carbon"
  },
  {
    id: "motor",
    name: "Brushless Motor (Outrunner)",
    category: "Propulsion",
    symbol: "MTR",
    tagline: "High-torque blue anodized electromagnetic motors",
    description:
      "Precision brushless motors featuring high-grade copper windings, balanced bell rotors, and neodymium N52H magnets for maximum thrust-per-watt efficiency.",
    engineeringRole: "Spins aerodynamic propellers at speeds exceeding 15,000–30,000 RPM to generate vertical downwash thrust.",
    keySpecs: ["Stator: 2207 / 2814", "KV Rating: 2450KV / 1100KV", "Titanium Alloy Hollow Shaft"],
    handDrawnSvgType: "motor-brushless"
  },
  {
    id: "propeller",
    name: "3-Blade Aerodynamic Propeller",
    category: "Aerodynamics",
    symbol: "PRP",
    tagline: "High-efficiency glass-polycarbonate airfoils",
    description:
      "Engineered tri-blade airfoils with optimized pitch distribution. Arranged in pairs of Clockwise (CW) and Counter-Clockwise (CCW) rotation to neutralize angular momentum.",
    engineeringRole: "Accelerates ambient air downward to create vertical reactive lift that overcomes gross aircraft weight.",
    keySpecs: ["Blade Count: 3-Blade Tri-Prop", "Material: Impact Polycarbonate", "Hub: M5 Self-Locking"],
    handDrawnSvgType: "propeller-3blade"
  },
  {
    id: "esc",
    name: "4-in-1 Electronic Speed Controller (ESC)",
    category: "Power Conversion",
    symbol: "ESC",
    tagline: "55A Quad MOSFET motor phase switching unit",
    description:
      "High-current switching circuit converting DC battery voltage into ultra-fast 3-phase AC pulses directed to each motor according to flight controller commands.",
    engineeringRole: "Translates flight controller DShot commands into microsecond-accurate motor commutation.",
    keySpecs: ["Continuous: 55A x 4 Channels", "Protocol: DShot300/600/1200", "Low-ESR Filter Capacitors"],
    handDrawnSvgType: "esc-4in1"
  },
  {
    id: "flightController",
    name: "Flight Controller (FC)",
    category: "Avionics Brain",
    symbol: "FC",
    tagline: "32-bit ARM microprocessor running PID stabilization",
    description:
      "Advanced microprocessor featuring 6-axis gyroscope, accelerometer, barometer, and onboard blackbox logger running real-time navigation algorithms.",
    engineeringRole: "Processes sensor readings and modulates motor speeds thousands of times per second to ensure stable hovering and agile flight.",
    keySpecs: ["ARM STM32 MCU", "Dual High-Rate Gyro", "Hardware OSD & Telemetry Ports"],
    handDrawnSvgType: "flight-controller"
  },
  {
    id: "camera",
    name: "FPV & HD Gimbal Camera",
    category: "Optics & Vision",
    symbol: "CAM",
    tagline: "Ultra-wide optical sensor for piloting & surveillance",
    description:
      "Features high-dynamic-range image sensor with motorized tilt gimbal providing real-time visual streaming to the pilot and ground control station.",
    engineeringRole: "Delivers low-latency video feed for piloting and visual environmental inspection.",
    keySpecs: ["Resolution: 4K 60fps HDR", "Field of View: 160°", "Ultra-low latency digital feed"],
    handDrawnSvgType: "camera-gimbal"
  },
  {
    id: "payload",
    name: "Emergency Medical & Cargo Pod",
    category: "Mission Equipment",
    symbol: "PLD",
    tagline: "Thermo-regulated rescue container with first-aid kits",
    description:
      "A quick-release bottom cargo bay compartment engineered for medical rescue missions, holding automated external defibrillators (AED), plasma vials, and emergency medication.",
    engineeringRole: "Delivers critical medical supplies to inaccessible disaster zones rapidly bypassing road traffic.",
    keySpecs: ["Payload Capacity: up to 3.5kg", "Active Thermo-Insulation", "Servo-actuated latch mechanism"],
    handDrawnSvgType: "payload-medical"
  }
];

export const DRONE_TYPES_LIST: DroneTypeInfo[] = [
  {
    id: "smart-turbo-quad",
    name: "NCB Smart Drone (Top Turbine Hybrid)",
    category: "NCB Renewable Hybrid",
    rotorCount: "4 Rotors + 1 Top Wind Turbine",
    description:
      "The flagship NCB Technology platform combining standard 4-rotor multirotor agility with the revolutionary top-mounted vertical wind turbine generator and dual-battery smart charging system.",
    keyAdvantages: [
      "Continuous in-flight auxiliary battery charging",
      "Integrated 360° radar & LiDAR collision avoidance",
      "Automatic failover power switching between dual LiPo packs",
      "Compatible with modular emergency medical rescue pods"
    ],
    typicalUse: "Long-endurance surveillance, disaster medical supply drop, remote perimeter security, and renewable UAV research.",
    thrustPattern: "4-point vertical thrust field paired with central top vertical wind energy harvesting.",
    iconName: "Wind",
    hasTurboSupport: true
  },
  {
    id: "quadcopter",
    name: "Quadcopter (4 Rotors)",
    category: "Multirotor",
    rotorCount: 4,
    description:
      "The standard 4-motor layout configured in an X geometry (2 spinning CW, 2 spinning CCW). Features simple mechanical construction, high acrobatic agility, and cost-effective maintenance.",
    keyAdvantages: ["Minimal moving parts", "High agility and acrobatic capabilities", "Compact footprint", "Widely available parts"],
    typicalUse: "Consumer photography, FPV racing, visual inspection, and general drone training.",
    thrustPattern: "Symmetric 4-point counter-balancing thrust vectors.",
    iconName: "Compass"
  },
  {
    id: "hexacopter",
    name: "Hexacopter (6 Rotors)",
    category: "Multirotor",
    rotorCount: 6,
    description:
      "Features 6 arms and motors spaced equally at 60 degrees. Offers greater lifting capacity, improved stability in strong wind gusts, and built-in hardware motor redundancy.",
    keyAdvantages: ["Single-motor failure safe landing", "Higher payload capacity", "Greater wind resistance", "Smooth flight dynamics"],
    typicalUse: "Professional cinematography, industrial surveying, LiDAR scanning, and heavy sensor rigs.",
    thrustPattern: "Radial 6-arm distributed thrust field with motor redundancy.",
    iconName: "Shield"
  },
  {
    id: "octocopter",
    name: "Octocopter (8 Rotors)",
    category: "Multirotor",
    rotorCount: 8,
    description:
      "An 8-rotor heavy-lift platform designed for mission-critical operations where maximum thrust and fail-safe redundancy are mandatory. Can safely sustain multiple motor failures without crashing.",
    keyAdvantages: ["Multi-motor failure tolerance", "Massive payload capabilities (up to 20kg+)", "Ultra-stable hovering platform", "Industrial duty cycles"],
    typicalUse: "Heavy Hollywood movie cameras, power-line inspection, agricultural spraying, and high-altitude sensing.",
    thrustPattern: "High-density 8-point thrust array providing maximum stability.",
    iconName: "Cpu"
  },
  {
    id: "vtol",
    name: "VTOL (Vertical Take-Off & Landing)",
    category: "Hybrid",
    rotorCount: "Hybrid (Multirotor + Pusher/Tilt)",
    description:
      "A hybrid aircraft combining multirotor vertical takeoff/landing with fixed-wing aerodynamic forward flight. It hovers up like a copter, then transitions to wing-borne cruising at high speeds.",
    keyAdvantages: ["No runway or catapult needed", "10x longer flight range than pure multirotors", "High cruising speeds", "Efficient battery utilization"],
    typicalUse: "Long-range pipeline inspections, coastal surveillance, border patrol, and large-scale mapping.",
    thrustPattern: "Vertical quad lift transition into horizontal pusher/propeller cruise.",
    iconName: "Plane"
  },
  {
    id: "emergency-medical",
    name: "Emergency & Medical Drone",
    category: "First Responder",
    rotorCount: "4 - 6 (Rapid Deploy)",
    description:
      "Rapid-deployment UAV equipped with temperature-regulated biological coolers, AED defibrillators, emergency communications relays, and high-intensity strobe spotlights.",
    keyAdvantages: ["Ultra-fast response time bypassing traffic", "Active temperature regulation for blood/organs", "Search & rescue thermal imaging", "Life-saving payload delivery"],
    typicalUse: "Defibrillator drops for cardiac arrest, antivenom & vaccine delivery to remote villages, disaster zone survivor tracking.",
    thrustPattern: "High-speed multirotor or VTOL rapid-transit configuration.",
    iconName: "Zap"
  }
];
