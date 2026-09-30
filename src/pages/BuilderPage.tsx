import React, { useState, useRef, useMemo } from 'react';
import type { DroneComponentDefinition, PlacedNode, WireConnection } from '../types/drone';
import {
  COMPONENT_CATALOG,
  CATALOG_BY_GROUP,
  GROUP_ORDER,
  GROUP_COLORS,
  GROUP_ICONS,
  PRESET_CONFIGURATIONS
} from '../data/componentsCatalog';
import droneViewsImg from '../assets/drone-views.jpg';
import ncbLogoImg from '../assets/ncb-logo.png';

interface BuilderPageProps {
  placedNodes: PlacedNode[];
  setPlacedNodes: React.Dispatch<React.SetStateAction<PlacedNode[]>>;
  wireConnections: WireConnection[];
  setWireConnections: React.Dispatch<React.SetStateAction<WireConnection[]>>;
}

// ─── SVG Drone Icon per component ────────────────────────────────────────────
function ComponentIcon({ comp, size = 40 }: { comp: DroneComponentDefinition; size?: number }) {
  const c = comp.iconColor;
  const s = size;
  switch (comp.category) {
    case 'frame':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <line x1="20" y1="5"  x2="5"  y2="20" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="5"  x2="35" y2="20" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="35" x2="5"  y2="20" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="35" x2="35" y2="20" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="20" cy="20" r="4" fill={c} opacity="0.8"/>
          <circle cx="5"  cy="20" r="3.5" stroke={c} strokeWidth="1.5" fill="none"/>
          <circle cx="35" cy="20" r="3.5" stroke={c} strokeWidth="1.5" fill="none"/>
          <circle cx="20" cy="5"  r="3.5" stroke={c} strokeWidth="1.5" fill="none"/>
          <circle cx="20" cy="35" r="3.5" stroke={c} strokeWidth="1.5" fill="none"/>
        </svg>
      );
    case 'motor':
    case 'ductedFan':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="12" stroke={c} strokeWidth="2"/>
          <circle cx="20" cy="20" r="5" fill={c} opacity="0.8"/>
          <line x1="20" y1="8" x2="20" y2="4" stroke={c} strokeWidth="2"/>
          <line x1="20" y1="32" x2="20" y2="36" stroke={c} strokeWidth="2"/>
          <line x1="8" y1="20" x2="4" y2="20" stroke={c} strokeWidth="2"/>
          <line x1="32" y1="20" x2="36" y2="20" stroke={c} strokeWidth="2"/>
        </svg>
      );
    case 'propeller':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <ellipse cx="20" cy="10" rx="5" ry="9" fill={c} opacity="0.7" transform="rotate(0 20 20)"/>
          <ellipse cx="20" cy="10" rx="5" ry="9" fill={c} opacity="0.7" transform="rotate(120 20 20)"/>
          <ellipse cx="20" cy="10" rx="5" ry="9" fill={c} opacity="0.7" transform="rotate(240 20 20)"/>
          <circle cx="20" cy="20" r="3" fill={c}/>
        </svg>
      );
    case 'esc':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <rect x="7" y="12" width="26" height="16" rx="3" stroke={c} strokeWidth="2" fill="none"/>
          <line x1="13" y1="12" x2="13" y2="28" stroke={c} strokeWidth="1.5" opacity="0.5"/>
          <line x1="20" y1="12" x2="20" y2="28" stroke={c} strokeWidth="1.5" opacity="0.5"/>
          <line x1="27" y1="12" x2="27" y2="28" stroke={c} strokeWidth="1.5" opacity="0.5"/>
          <text x="20" y="23" textAnchor="middle" fill={c} fontSize="7" fontFamily="monospace">ESC</text>
        </svg>
      );
    case 'battery':
    case 'auxBattery':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <rect x="6" y="13" width="28" height="14" rx="2" stroke={c} strokeWidth="2" fill="none"/>
          <rect x="34" y="17" width="3" height="6" rx="1" fill={c} opacity="0.7"/>
          <rect x="9" y="16" width="6" height="8" rx="1" fill={c} opacity="0.6"/>
          <rect x="17" y="16" width="6" height="8" rx="1" fill={c} opacity="0.4"/>
          <rect x="25" y="16" width="6" height="8" rx="1" fill={c} opacity="0.2"/>
        </svg>
      );
    case 'powerDistribution':
    case 'voltageRegulator':
    case 'chargingModule':
    case 'chargeController':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <rect x="8" y="8" width="24" height="24" rx="3" stroke={c} strokeWidth="2" fill="none"/>
          <circle cx="14" cy="14" r="2.5" fill={c} opacity="0.8"/>
          <circle cx="26" cy="14" r="2.5" fill={c} opacity="0.8"/>
          <circle cx="14" cy="26" r="2.5" fill={c} opacity="0.8"/>
          <circle cx="26" cy="26" r="2.5" fill={c} opacity="0.8"/>
          <line x1="14" y1="14" x2="26" y2="26" stroke={c} strokeWidth="1.5" opacity="0.5"/>
          <line x1="26" y1="14" x2="14" y2="26" stroke={c} strokeWidth="1.5" opacity="0.5"/>
        </svg>
      );
    case 'turboWind':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="10" stroke={c} strokeWidth="2" fill="none"/>
          <ellipse cx="20" cy="10" rx="4" ry="8" fill={c} opacity="0.6" transform="rotate(0 20 20)"/>
          <ellipse cx="20" cy="10" rx="4" ry="8" fill={c} opacity="0.6" transform="rotate(72 20 20)"/>
          <ellipse cx="20" cy="10" rx="4" ry="8" fill={c} opacity="0.6" transform="rotate(144 20 20)"/>
          <ellipse cx="20" cy="10" rx="4" ry="8" fill={c} opacity="0.6" transform="rotate(216 20 20)"/>
          <ellipse cx="20" cy="10" rx="4" ry="8" fill={c} opacity="0.6" transform="rotate(288 20 20)"/>
          <circle cx="20" cy="20" r="3.5" fill={c}/>
          <line x1="20" y1="30" x2="20" y2="36" stroke={c} strokeWidth="2"/>
        </svg>
      );
    case 'flightController':
    case 'imu':
    case 'gyroscope':
    case 'accelerometer':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <rect x="9" y="9" width="22" height="22" rx="3" stroke={c} strokeWidth="2" fill="none"/>
          <rect x="14" y="14" width="12" height="12" rx="2" fill={c} opacity="0.25"/>
          <circle cx="20" cy="20" r="3" fill={c}/>
          <line x1="9" y1="14" x2="5" y2="14" stroke={c} strokeWidth="1.5"/>
          <line x1="9" y1="20" x2="5" y2="20" stroke={c} strokeWidth="1.5"/>
          <line x1="9" y1="26" x2="5" y2="26" stroke={c} strokeWidth="1.5"/>
          <line x1="31" y1="14" x2="35" y2="14" stroke={c} strokeWidth="1.5"/>
          <line x1="31" y1="20" x2="35" y2="20" stroke={c} strokeWidth="1.5"/>
          <line x1="31" y1="26" x2="35" y2="26" stroke={c} strokeWidth="1.5"/>
        </svg>
      );
    case 'gps':
    case 'compass':
    case 'altimeter':
    case 'barometer':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <polygon points="20,4 24,16 36,16 26,24 30,36 20,28 10,36 14,24 4,16 16,16" stroke={c} strokeWidth="1.5" fill={c} opacity="0.3"/>
          <circle cx="20" cy="20" r="4" fill={c}/>
        </svg>
      );
    case 'radar':
    case 'lidar':
    case 'ultrasonic':
    case 'obstacleSensor':
    case 'airflowSensor':
    case 'tempSensor':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="3" fill={c}/>
          <path d="M10 30 A14 14 0 0 1 30 30" stroke={c} strokeWidth="2" fill="none" opacity="0.9"/>
          <path d="M6 34  A20 20 0 0 1 34 34" stroke={c} strokeWidth="1.5" fill="none" opacity="0.5"/>
          <line x1="20" y1="20" x2="32" y2="10" stroke={c} strokeWidth="1.5" opacity="0.8"/>
        </svg>
      );
    case 'camera':
    case 'thermalCamera':
    case 'fpvCamera':
    case 'cameraPayload':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <rect x="6" y="12" width="28" height="20" rx="3" stroke={c} strokeWidth="2" fill="none"/>
          <circle cx="20" cy="22" r="6" stroke={c} strokeWidth="2" fill="none"/>
          <circle cx="20" cy="22" r="2.5" fill={c} opacity="0.8"/>
          <rect x="14" y="8" width="8" height="6" rx="1.5" fill={c} opacity="0.7"/>
          <circle cx="30" cy="16" r="2" fill={c} opacity="0.6"/>
        </svg>
      );
    case 'radioController':
    case 'telemetry':
    case 'wifi':
    case 'bluetooth':
    case 'vtx':
    case 'receiver':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <path d="M8 28 Q14 12 20 10 Q26 12 32 28" stroke={c} strokeWidth="2" fill="none"/>
          <path d="M12 28 Q16 18 20 16 Q24 18 28 28" stroke={c} strokeWidth="1.5" fill="none" opacity="0.7"/>
          <line x1="20" y1="10" x2="20" y2="36" stroke={c} strokeWidth="2"/>
          <circle cx="20" cy="36" r="2.5" fill={c}/>
        </svg>
      );
    case 'payload':
    case 'deliveryBox':
    case 'customPayload':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <rect x="8" y="14" width="24" height="20" rx="2" stroke={c} strokeWidth="2" fill="none"/>
          <polygon points="8,14 20,6 32,14" stroke={c} strokeWidth="2" fill="none"/>
          <line x1="8" y1="14" x2="32" y2="14" stroke={c} strokeWidth="1.5"/>
          <line x1="16" y1="20" x2="24" y2="20" stroke={c} strokeWidth="1.5" opacity="0.5"/>
          <line x1="20" y1="16" x2="20" y2="34" stroke={c} strokeWidth="1" opacity="0.3"/>
        </svg>
      );
    case 'landingGear':
    case 'skid':
    case 'casingPayload':
    case 'motorMount':
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <line x1="20" y1="10" x2="20" y2="28" stroke={c} strokeWidth="2.5"/>
          <line x1="20" y1="28" x2="10" y2="36" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="28" x2="30" y2="36" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="8" y1="36" x2="32" y2="36" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        </svg>
      );
    default:
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <rect x="8" y="8" width="24" height="24" rx="4" stroke={c} strokeWidth="2" fill={c} fillOpacity="0.15"/>
          <text x="20" y="24" textAnchor="middle" fill={c} fontSize="11" fontFamily="monospace" fontWeight="bold">
            {comp.details.isometricSymbol.slice(0, 4)}
          </text>
        </svg>
      );
  }
}

// ─── 3D Preview Drone Image ───────────────────────────────────────────────────

function Drone3DPreview({ selectedComp }: { selectedComp: DroneComponentDefinition | null }) {
  return (
    <div style={{
      width: '100%', height: '220px',
      position: 'relative', overflow: 'hidden',
      background: '#040c18',
      borderRadius: '0 0 4px 4px'
    }}>
      {/* Animated border glow */}
      <div style={{
        position: 'absolute', inset: 0,
        border: `1px solid ${selectedComp ? selectedComp.iconColor + '60' : 'rgba(0,240,255,0.25)'}`,
        borderRadius: '0 0 4px 4px',
        pointerEvents: 'none',
        zIndex: 3,
        boxShadow: `inset 0 0 18px ${selectedComp ? selectedComp.iconColor + '20' : 'rgba(0,240,255,0.08)'}`
      }}/>

      {/* Drone views image */}
      <img
        src={droneViewsImg}
        alt="NCB Drone Multi-View"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          opacity: 0.93,
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Dark gradient overlay at top and bottom */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(4,12,24,0.55) 0%, rgba(4,12,24,0.05) 30%, rgba(4,12,24,0.05) 70%, rgba(4,12,24,0.6) 100%)',
        pointerEvents: 'none',
        zIndex: 1
      }}/>

      {/* NCB Logo watermark – top left */}
      <div style={{
        position: 'absolute',
        top: '6px',
        left: '7px',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        background: 'rgba(4,12,24,0.72)',
        backdropFilter: 'blur(6px)',
        borderRadius: '5px',
        padding: '3px 7px 3px 4px',
        border: '1px solid rgba(0,240,255,0.25)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
      }}>
        <img
          src={ncbLogoImg}
          alt="NCB Technology"
          style={{ height: '26px', width: 'auto', objectFit: 'contain' }}
        />
      </div>

      {/* Selected component label */}
      {selectedComp && (
        <div style={{
          position: 'absolute',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          background: `${selectedComp.iconColor}22`,
          border: `1px solid ${selectedComp.iconColor}60`,
          borderRadius: '4px',
          padding: '2px 10px',
          fontSize: '9px',
          fontWeight: 700,
          color: selectedComp.iconColor,
          letterSpacing: '0.08em',
          backdropFilter: 'blur(4px)',
          whiteSpace: 'nowrap'
        }}>
          ▶ {selectedComp.name.toUpperCase()}
        </div>
      )}

      {/* "LIVE VIEW" badge */}
      <div style={{
        position: 'absolute',
        top: '6px',
        right: '7px',
        zIndex: 2,
        background: 'rgba(0,240,255,0.12)',
        border: '1px solid rgba(0,240,255,0.35)',
        borderRadius: '3px',
        padding: '2px 7px',
        fontSize: '8px',
        fontWeight: 800,
        color: '#00f0ff',
        letterSpacing: '0.1em'
      }}>
        NCB DRONE
      </div>
    </div>
  );
}

// ─── Canvas Node ──────────────────────────────────────────────────────────────
function CanvasNode({
  node, selected, onSelect, onDragStart
}: {
  node: PlacedNode;
  selected: boolean;
  onSelect: () => void;
  onDragStart: (e: React.MouseEvent) => void;
}) {
  const c = node.component.iconColor;
  return (
    <g
      transform={`translate(${node.x}, ${node.y})`}
      style={{ cursor: 'grab' }}
      onMouseDown={(e) => { e.stopPropagation(); onSelect(); onDragStart(e); }}
    >
      {/* Selection ring */}
      {selected && (
        <rect x="-32" y="-32" width="64" height="64" rx="6" fill="none"
          stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.9"/>
      )}
      {/* Node background */}
      <rect x="-28" y="-28" width="56" height="56" rx="5"
        fill="#0a1628" stroke={c} strokeWidth={selected ? 1.5 : 1} opacity="0.95"/>
      {/* Icon SVG (reuse ComponentIcon via foreignObject) */}
      <foreignObject x="-18" y="-18" width="36" height="36">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px' }}>
          <ComponentIcon comp={node.component} size={34}/>
        </div>
      </foreignObject>
      {/* Label */}
      <text y="34" textAnchor="middle" fill="#94a3b8" fontSize="9"
        fontFamily="'Inter', sans-serif" fontWeight="500">
        {(node.label || node.component.name).length > 12
          ? (node.label || node.component.name).slice(0, 12) + '…'
          : (node.label || node.component.name)}
      </text>
      {/* Status dot */}
      <circle cx="22" cy="-22" r="4"
        fill={node.status === 'operational' ? '#10b981' : node.status === 'warning' ? '#f59e0b' : '#64748b'}/>
    </g>
  );
}

// ─── Main BuilderPage ─────────────────────────────────────────────────────────
export const BuilderPage: React.FC<BuilderPageProps> = ({
  placedNodes, setPlacedNodes, wireConnections, setWireConnections
}) => {
  const [search, setSearch] = useState('');
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState<'select' | 'wire' | 'delete'>('select');
  const [wireSource, setWireSource] = useState<string | null>(null);
  const [isSimRunning, setIsSimRunning] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0, px: 0, py: 0 });
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const canvasRef = useRef<SVGSVGElement>(null);
  const [dragOverCanvas, setDragOverCanvas] = useState(false);
  const [exportMsg, setExportMsg] = useState('');

  // Computed stats
  const stats = useMemo(() => {
    const totalMass = placedNodes.reduce((s, n) => s + n.component.massGrams, 0);
    const totalThrust = placedNodes.reduce((s, n) => s + (n.component.thrustGrams || 0), 0);
    const battery = placedNodes.find(n => n.component.category === 'battery');
    const batPct = battery ? 100 : 0;
    const motorCount = placedNodes.filter(n => n.component.category === 'motor').length;
    const hasFC = placedNodes.some(n => n.component.category === 'flightController');
    const hasFrame = placedNodes.some(n => n.component.category === 'frame');
    const estFlight = battery && motorCount > 0 && totalThrust > 0
      ? Math.round((battery.component.capacityMah || 5000) / 1000 * 0.85 * 60 / (totalMass / 1000 + 0.3))
      : 0;
    const status = hasFrame && hasFC && battery && motorCount >= 4 ? 'Ready' : 'Building';
    return { totalMass, totalThrust, batPct, estFlight, status, hasFC, hasFrame };
  }, [placedNodes]);

  // Selected node & component
  const selectedNode = placedNodes.find(n => n.instanceId === selectedNodeId) ?? null;
  const selectedComp = selectedNode?.component ?? null;

  // Filtered catalog
  const filteredCatalog = useMemo(() => {
    if (!search.trim()) return CATALOG_BY_GROUP;
    const q = search.toLowerCase();
    const result: Record<string, DroneComponentDefinition[]> = {};
    for (const grp of GROUP_ORDER) {
      const filtered = (CATALOG_BY_GROUP[grp] || []).filter(c =>
        c.name.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q)
      );
      if (filtered.length) result[grp] = filtered;
    }
    return result;
  }, [search]);

  const toggleGroup = (grp: string) => {
    setCollapsedGroups(prev => {
      const next = new Set(prev);
      next.has(grp) ? next.delete(grp) : next.add(grp);
      return next;
    });
  };

  // Drop on canvas from sidebar
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); setDragOverCanvas(true);
  };
  const handleDragLeave = () => setDragOverCanvas(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOverCanvas(false);
    const compId = e.dataTransfer.getData('componentId');
    const def = COMPONENT_CATALOG.find(c => c.id === compId);
    if (!def || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - pan.x) / zoom;
    const y = (e.clientY - rect.top  - pan.y) / zoom;
    const node: PlacedNode = {
      instanceId: `node-${Date.now()}`,
      componentId: def.id,
      component: def,
      x, y, rotation: 0,
      label: def.name,
      status: 'operational'
    };
    setPlacedNodes(prev => [...prev, node]);
    setSelectedNodeId(node.instanceId);
  };

  // Node drag on canvas
  const handleNodeMouseDown = (nodeId: string, e: React.MouseEvent) => {
    if (activeTool === 'delete') {
      setPlacedNodes(prev => prev.filter(n => n.instanceId !== nodeId));
      setWireConnections(prev => prev.filter(w => w.sourceNodeId !== nodeId && w.targetNodeId !== nodeId));
      return;
    }
    if (activeTool === 'wire') {
      if (!wireSource) {
        setWireSource(nodeId);
      } else if (wireSource !== nodeId) {
        const wire: WireConnection = {
          id: `wire-${Date.now()}`,
          sourceNodeId: wireSource,
          sourcePortId: 'out',
          targetNodeId: nodeId,
          targetPortId: 'in',
          type: 'signal',
          color: '#00f0ff',
          status: 'active'
        };
        setWireConnections(prev => [...prev, wire]);
        setWireSource(null);
      }
      return;
    }
    if (!canvasRef.current) return;
    const node = placedNodes.find(n => n.instanceId === nodeId);
    if (!node) return;
    const rect = canvasRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left - node.x * zoom - pan.x,
      y: e.clientY - rect.top  - node.y * zoom - pan.y
    };
    setDraggingNodeId(nodeId);
  };

  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (draggingNodeId && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - pan.x - dragOffset.current.x) / zoom;
      const y = (e.clientY - rect.top  - pan.y - dragOffset.current.y) / zoom;
      setPlacedNodes(prev => prev.map(n => n.instanceId === draggingNodeId ? { ...n, x, y } : n));
    }
    if (isPanning) {
      setPan({
        x: e.clientX - panStart.current.x + panStart.current.px,
        y: e.clientY - panStart.current.y + panStart.current.py
      });
    }
  };
  const handleCanvasMouseUp = () => { setDraggingNodeId(null); setIsPanning(false); };

  const handleCanvasMouseDown = (e: React.MouseEvent) => {
    if (e.target === canvasRef.current || (e.target as Element).tagName === 'svg') {
      setSelectedNodeId(null);
      if (e.button === 1 || (e.button === 0 && e.altKey)) {
        setIsPanning(true);
        panStart.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
      }
    }
  };

  const handleZoom = (delta: number) => {
    setZoom(prev => Math.max(0.3, Math.min(2.5, prev + delta)));
  };

  const clearCanvas = () => {
    setPlacedNodes([]);
    setWireConnections([]);
    setSelectedNodeId(null);
  };

  const loadPreset = () => {
    const preset = PRESET_CONFIGURATIONS.ncbSmartTurboDrone;
    const nodes: PlacedNode[] = preset.nodes.map((item, idx) => {
      const def = COMPONENT_CATALOG.find(c => c.id === item.componentId)!;
      return {
        instanceId: `preset-${idx}-${Date.now()}`,
        componentId: def.id,
        component: def,
        x: item.x, y: item.y,
        rotation: 0,
        label: item.label,
        status: 'operational'
      };
    });
    setPlacedNodes(nodes);
    const wires: WireConnection[] = preset.connections.map((conn, cIdx) => ({
      id: `wire-${cIdx}-${Date.now()}`,
      sourceNodeId: nodes[conn.sourceIdx].instanceId,
      sourcePortId: 'out',
      targetNodeId: nodes[conn.targetIdx].instanceId,
      targetPortId: 'in',
      type: conn.type as any,
      color: conn.color,
      status: 'active'
    }));
    setWireConnections(wires);
    setPan({ x: 0, y: 0 });
    setZoom(1);
  };

  const handleExport = () => {
    const data = JSON.stringify({ nodes: placedNodes, wires: wireConnections }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'ncb-drone-design.json'; a.click();
    URL.revokeObjectURL(url);
    setExportMsg('Saved!');
    setTimeout(() => setExportMsg(''), 2000);
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: 'calc(100vh - 72px)',
      background: '#050d1a',
      fontFamily: "'Inter', sans-serif",
      overflow: 'hidden'
    }}>
      {/* ── Top title bar ── */}
      <div style={{
        height: '32px', minHeight: '32px',
        background: '#071020',
        borderBottom: '1px solid #0d2040',
        display: 'flex', alignItems: 'center',
        padding: '0 16px', gap: '16px',
        fontSize: '11px', color: '#4a7aad',
        letterSpacing: '0.05em'
      }}>
        <span style={{ color: '#00a8ff', fontWeight: 700 }}>2D DESIGN WORKSPACE</span>
        <span>|</span>
        <span>Components: {placedNodes.length}</span>
        <span>|</span>
        <span>Connections: {wireConnections.length}</span>
        {wireSource && (
          <>
            <span>|</span>
            <span style={{ color: '#00f0ff' }}>🔗 Click target node to connect…</span>
          </>
        )}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
          {(['select','wire','delete'] as const).map(t => (
            <button key={t} onClick={() => { setActiveTool(t); setWireSource(null); }} style={{
              padding: '2px 8px', borderRadius: '3px', fontSize: '10px', fontWeight: 600,
              background: activeTool === t ? '#00a8ff' : '#0a1628',
              color: activeTool === t ? '#000' : '#4a7aad',
              border: `1px solid ${activeTool === t ? '#00a8ff' : '#0d2040'}`,
              cursor: 'pointer', textTransform: 'uppercase'
            }}>
              {t === 'select' ? '▶ Select' : t === 'wire' ? '〰 Wire' : '🗑 Delete'}
            </button>
          ))}
          <button onClick={() => handleZoom(0.15)} style={{ padding: '2px 6px', background: '#0a1628', border: '1px solid #0d2040', color: '#4a7aad', borderRadius: '3px', cursor: 'pointer', fontSize: '12px' }}>+</button>
          <button onClick={() => handleZoom(-0.15)} style={{ padding: '2px 6px', background: '#0a1628', border: '1px solid #0d2040', color: '#4a7aad', borderRadius: '3px', cursor: 'pointer', fontSize: '12px' }}>−</button>
          <span style={{ color: '#4a7aad', display: 'flex', alignItems: 'center', fontSize: '11px' }}>{Math.round(zoom * 100)}%</span>
          <button onClick={clearCanvas} style={{ padding: '2px 8px', background: '#0a1628', border: '1px solid #0d2040', color: '#f43f5e', borderRadius: '3px', cursor: 'pointer', fontSize: '10px' }}>CLEAR</button>
          <button onClick={loadPreset} style={{ padding: '2px 8px', background: '#071f40', border: '1px solid #00a8ff', color: '#00a8ff', borderRadius: '3px', cursor: 'pointer', fontSize: '10px', fontWeight: 700 }}>LOAD NCB PRESET</button>
          <button onClick={handleExport} style={{ padding: '2px 8px', background: '#071f40', border: '1px solid #4a7aad', color: '#94a3b8', borderRadius: '3px', cursor: 'pointer', fontSize: '10px' }}>
            {exportMsg || 'SAVE'}
          </button>
        </div>
      </div>

      {/* ── Body row ── */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* ── LEFT: Component Library ── */}
        <div style={{
          width: '252px', minWidth: '252px',
          background: '#060e1c',
          borderRight: '1px solid #0d2040',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Library header */}
          <div style={{
            padding: '8px 10px 6px',
            borderBottom: '1px solid #0d2040',
            background: '#071424'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#2a6aad', letterSpacing: '0.08em', marginBottom: '6px' }}>
              DRONE COMPONENTS
            </div>
            {/* Search */}
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '7px', top: '50%', transform: 'translateY(-50%)', color: '#2a5a8a', fontSize: '12px' }}>🔍</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search components..."
                style={{
                  width: '100%', boxSizing: 'border-box',
                  padding: '4px 6px 4px 24px',
                  background: '#040c18', border: '1px solid #0d2040',
                  color: '#94a3b8', borderRadius: '3px', fontSize: '11px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Groups */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {GROUP_ORDER.map(grp => {
              const items = filteredCatalog[grp] || [];
              if (!items.length && search) return null;
              const grpColor = GROUP_COLORS[grp];
              const collapsed = collapsedGroups.has(grp);
              return (
                <div key={grp}>
                  {/* Group header */}
                  <div
                    onClick={() => toggleGroup(grp)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      padding: '5px 8px',
                      cursor: 'pointer',
                      background: '#040c18',
                      borderBottom: '1px solid #0a1a2e',
                      userSelect: 'none'
                    }}
                  >
                    <span style={{ fontSize: '11px' }}>{GROUP_ICONS[grp]}</span>
                    <span style={{
                      flex: 1, fontSize: '10px', fontWeight: 700,
                      color: grpColor, letterSpacing: '0.07em'
                    }}>{grp}</span>
                    <span style={{ fontSize: '8px', color: '#2a5a8a', transform: collapsed ? 'rotate(-90deg)' : 'none' }}>▼</span>
                  </div>

                  {/* Component grid */}
                  {!collapsed && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, 1fr)',
                      gap: '2px',
                      padding: '4px',
                      background: '#060e1c'
                    }}>
                      {items.map(comp => (
                        <div
                          key={comp.id}
                          draggable
                          onDragStart={e => {
                            e.dataTransfer.setData('componentId', comp.id);
                          }}
                          onClick={() => {
                            // Click to place at center of canvas
                            const cx = 400 + Math.random() * 200 - 100;
                            const cy = 300 + Math.random() * 150 - 75;
                            const node: PlacedNode = {
                              instanceId: `node-${Date.now()}`,
                              componentId: comp.id,
                              component: comp,
                              x: cx, y: cy, rotation: 0,
                              label: comp.name, status: 'operational'
                            };
                            setPlacedNodes(prev => [...prev, node]);
                            setSelectedNodeId(node.instanceId);
                          }}
                          title={comp.name}
                          style={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                            padding: '4px 2px',
                            background: '#071424',
                            border: `1px solid #0d2040`,
                            borderRadius: '4px',
                            cursor: 'grab',
                            transition: 'all 0.12s ease',
                            gap: '2px'
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = comp.iconColor;
                            (e.currentTarget as HTMLElement).style.background = '#0a1f38';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = '#0d2040';
                            (e.currentTarget as HTMLElement).style.background = '#071424';
                          }}
                        >
                          <ComponentIcon comp={comp} size={32}/>
                          <span style={{
                            fontSize: '8px', color: '#4a7aad',
                            textAlign: 'center', lineHeight: 1.2,
                            maxWidth: '40px', wordBreak: 'break-word'
                          }}>
                            {comp.name.split('(')[0].trim()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CENTER: 2D Canvas ── */}
        <div style={{
          flex: 1,
          position: 'relative',
          background: dragOverCanvas ? '#071a30' : '#060e1c',
          overflow: 'hidden',
          cursor: activeTool === 'delete' ? 'crosshair' : activeTool === 'wire' ? 'cell' : 'default',
          transition: 'background 0.15s'
        }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Dotted grid background */}
          <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          >
            <defs>
              <pattern id="grid-dots" x={pan.x % (20 * zoom)} y={pan.y % (20 * zoom)}
                width={20 * zoom} height={20 * zoom} patternUnits="userSpaceOnUse">
                <circle cx="0" cy="0" r="0.8" fill="#0d2040"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-dots)"/>
          </svg>

          {/* Drop hint */}
          {placedNodes.length === 0 && (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              pointerEvents: 'none', gap: '10px'
            }}>
              <div style={{ fontSize: '48px', opacity: 0.15 }}>🚁</div>
              <div style={{ color: '#1a3a60', fontSize: '13px', fontWeight: 600 }}>
                Drag &amp; drop components or click them to place
              </div>
              <div style={{ color: '#0d2040', fontSize: '11px' }}>
                Or use <span style={{ color: '#0050a0' }}>LOAD NCB PRESET</span> to start with the full architecture
              </div>
            </div>
          )}

          {/* SVG canvas */}
          <svg
            ref={canvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            onMouseMove={handleCanvasMouseMove}
            onMouseUp={handleCanvasMouseUp}
            onMouseDown={handleCanvasMouseDown}
          >
            <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
              {/* Wire connections */}
              {wireConnections.map(wire => {
                const src = placedNodes.find(n => n.instanceId === wire.sourceNodeId);
                const tgt = placedNodes.find(n => n.instanceId === wire.targetNodeId);
                if (!src || !tgt) return null;
                const mx = (src.x + tgt.x) / 2;
                return (
                  <g key={wire.id}>
                    <path
                      d={`M ${src.x} ${src.y} C ${mx} ${src.y} ${mx} ${tgt.y} ${tgt.x} ${tgt.y}`}
                      stroke={wire.color} strokeWidth="1.5" fill="none" opacity="0.7"
                      strokeDasharray={wire.type === 'signal' ? '6 3' : undefined}
                    />
                    {/* Flow arrow */}
                    <circle cx={mx} cy={(src.y + tgt.y) / 2} r="3" fill={wire.color} opacity="0.8"/>
                  </g>
                );
              })}

              {/* Nodes */}
              {placedNodes.map(node => (
                <CanvasNode
                  key={node.instanceId}
                  node={node}
                  selected={node.instanceId === selectedNodeId}
                  onSelect={() => setSelectedNodeId(node.instanceId)}
                  onDragStart={e => handleNodeMouseDown(node.instanceId, e)}
                />
              ))}

              {/* Wire source indicator */}
              {wireSource && (() => {
                const src = placedNodes.find(n => n.instanceId === wireSource);
                if (!src) return null;
                return (
                  <circle cx={src.x} cy={src.y} r="36" fill="none"
                    stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7"/>
                );
              })()}
            </g>
          </svg>
        </div>

        {/* ── RIGHT: Properties + 3D Preview ── */}
        <div style={{
          width: '220px', minWidth: '220px',
          background: '#060e1c',
          borderLeft: '1px solid #0d2040',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Properties header */}
          <div style={{
            padding: '7px 10px', fontSize: '11px', fontWeight: 700,
            color: '#2a6aad', letterSpacing: '0.08em',
            borderBottom: '1px solid #0d2040', background: '#071424'
          }}>
            COMPONENT PROPERTIES
          </div>

          {/* Properties content */}
          <div style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>
            {selectedComp ? (
              <>
                {/* Icon */}
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '10px', marginBottom: '10px',
                  background: '#040c18', borderRadius: '6px',
                  border: `1px solid ${selectedComp.iconColor}40`
                }}>
                  <ComponentIcon comp={selectedComp} size={44}/>
                  <div style={{ color: '#94a3b8', fontSize: '10px', fontWeight: 600, marginTop: '6px', textAlign: 'center' }}>
                    {selectedComp.name}
                  </div>
                </div>

                {/* Properties table */}
                {[
                  ['Name',    selectedComp.name],
                  ['Type',    selectedComp.category],
                  ['Mass',    `${selectedComp.massGrams} g`],
                  ['Voltage', selectedComp.voltageNominal ? `${selectedComp.voltageNominal} V` : '–'],
                  ['Power',   selectedComp.powerDrawWatts ? `${selectedComp.powerDrawWatts} W` : selectedComp.powerGenWatts ? `+${selectedComp.powerGenWatts} W` : '–'],
                  ['Status',  selectedNode?.status || '–'],
                  ['Connections', wireConnections.filter(w => w.sourceNodeId === selectedNodeId || w.targetNodeId === selectedNodeId).length.toString()],
                ].map(([label, value]) => (
                  <div key={label} style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '3px 0', borderBottom: '1px solid #0a1628',
                    fontSize: '10px'
                  }}>
                    <span style={{ color: '#2a6aad' }}>{label}</span>
                    <span style={{ color: '#94a3b8', textAlign: 'right', maxWidth: '110px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</span>
                  </div>
                ))}

                {/* Description */}
                <div style={{ marginTop: '10px', fontSize: '10px', color: '#2a6aad', fontWeight: 600, marginBottom: '4px' }}>Description</div>
                <div style={{ fontSize: '10px', color: '#4a7aad', lineHeight: 1.5 }}>
                  {selectedComp.description}
                </div>

                {/* Specs */}
                <div style={{ marginTop: '10px', fontSize: '10px', color: '#2a6aad', fontWeight: 600, marginBottom: '4px' }}>Key Specs</div>
                {selectedComp.details.specs.map(spec => (
                  <div key={spec} style={{ fontSize: '10px', color: '#4a7aad', paddingLeft: '6px', marginBottom: '2px' }}>• {spec}</div>
                ))}

                {/* Real world part */}
                <div style={{ marginTop: '10px', fontSize: '10px', color: '#2a6aad', fontWeight: 600, marginBottom: '4px' }}>Real-World Part</div>
                <div style={{ fontSize: '10px', color: '#4a7aad' }}>{selectedComp.realWorld.modelNumber}</div>
                <div style={{ fontSize: '10px', color: '#2a6aad' }}>{selectedComp.realWorld.manufacturer}</div>
                <div style={{ fontSize: '10px', color: '#10b981', marginTop: '2px' }}>
                  ₹{selectedComp.realWorld.retailPriceInr.toLocaleString()} / ${selectedComp.realWorld.retailPriceUsd}
                </div>

                {/* Delete button */}
                <button
                  onClick={() => {
                    setPlacedNodes(prev => prev.filter(n => n.instanceId !== selectedNodeId));
                    setWireConnections(prev => prev.filter(w => w.sourceNodeId !== selectedNodeId && w.targetNodeId !== selectedNodeId));
                    setSelectedNodeId(null);
                  }}
                  style={{
                    marginTop: '12px', width: '100%',
                    padding: '5px', borderRadius: '4px',
                    background: 'rgba(244,63,94,0.1)', border: '1px solid rgba(244,63,94,0.4)',
                    color: '#f43f5e', fontSize: '10px', fontWeight: 600,
                    cursor: 'pointer', letterSpacing: '0.05em'
                  }}
                >
                  🗑 REMOVE COMPONENT
                </button>
              </>
            ) : (
              <>
                {/* No selection state */}
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '16px 10px 12px', marginBottom: '10px',
                  background: '#040c18', borderRadius: '6px',
                  border: '1px solid #0d2040'
                }}>
                  <div style={{ fontSize: '28px', opacity: 0.4, marginBottom: '6px' }}>📦</div>
                  <div style={{ color: '#2a6aad', fontSize: '10px', textAlign: 'center' }}>No component selected</div>
                  <div style={{ color: '#1a3a60', fontSize: '10px', textAlign: 'center', marginTop: '4px' }}>
                    Select a component from the library or click on a component in the workspace.
                  </div>
                </div>

                {[
                  ['Name', '–'],['Type', '–'],['Mass', '–'],
                  ['Voltage', '–'],['Power', '–'],['Status', '–'],['Connections', '–']
                ].map(([label, value]) => (
                  <div key={label} style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '3px 0', borderBottom: '1px solid #0a1628', fontSize: '10px'
                  }}>
                    <span style={{ color: '#1a3a60' }}>{label}</span>
                    <span style={{ color: '#1a3a60' }}>{value}</span>
                  </div>
                ))}

                <div style={{ marginTop: '10px', fontSize: '10px', color: '#1a3a60', fontWeight: 600, marginBottom: '4px' }}>Description</div>
                <div style={{ fontSize: '10px', color: '#1a3a60', lineHeight: 1.5 }}>
                  Component information will be shown here.
                </div>
              </>
            )}
          </div>

          {/* 3D Preview */}
          <div style={{ borderTop: '1px solid #0d2040' }}>
            <div style={{
              padding: '6px 10px', fontSize: '11px', fontWeight: 700,
              color: '#2a6aad', letterSpacing: '0.08em',
              borderBottom: '1px solid #0d2040', background: '#071424'
            }}>
              3D PREVIEW
            </div>
            <div style={{ background: '#040c18' }}>
              <Drone3DPreview selectedComp={selectedComp}/>
            </div>
            <div style={{ padding: '8px' }}>
              <button style={{
                width: '100%', padding: '8px',
                background: 'linear-gradient(135deg, #0050c8, #0080ff)',
                border: 'none', borderRadius: '4px',
                color: '#fff', fontSize: '11px', fontWeight: 700,
                cursor: 'pointer', letterSpacing: '0.05em',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
              }}>
                🎮 GENERATE 3D
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM: Simulation Control + Realtime Status ── */}
      <div style={{
        height: '52px', minHeight: '52px',
        background: '#040c18',
        borderTop: '1px solid #0d2040',
        display: 'flex', alignItems: 'center',
        padding: '0 12px', gap: '0'
      }}>
        {/* Simulation Control */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '0 16px 0 0',
          borderRight: '1px solid #0d2040',
          minWidth: '280px'
        }}>
          <span style={{ fontSize: '10px', fontWeight: 700, color: '#2a6aad', letterSpacing: '0.07em', marginRight: '4px' }}>
            🎯 SIMULATION CONTROL
          </span>
          <button
            onClick={() => setIsSimRunning(true)}
            style={{
              padding: '5px 14px', borderRadius: '4px', fontSize: '11px', fontWeight: 700,
              background: isSimRunning ? '#10b981' : 'rgba(16,185,129,0.15)',
              border: '1px solid #10b981',
              color: isSimRunning ? '#fff' : '#10b981', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '5px'
            }}
          >
            ▶ Run
          </button>
          <button
            onClick={() => setIsSimRunning(false)}
            style={{
              padding: '5px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 700,
              background: !isSimRunning ? '#f43f5e' : 'rgba(244,63,94,0.15)',
              border: '1px solid #f43f5e',
              color: !isSimRunning ? '#fff' : '#f43f5e', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '5px'
            }}
          >
            ■ Stop
          </button>
          <button
            onClick={() => { setIsSimRunning(false); }}
            style={{
              padding: '5px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 600,
              background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6',
              color: '#3b82f6', cursor: 'pointer'
            }}
          >
            ↺ Reset
          </button>
          <button
            onClick={handleExport}
            style={{
              padding: '5px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 600,
              background: 'rgba(100,116,139,0.15)', border: '1px solid #4a7aad',
              color: '#94a3b8', cursor: 'pointer'
            }}
          >
            {exportMsg || '💾 Save'}
          </button>
        </div>

        {/* Realtime Status */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0',
          flex: 1, paddingLeft: '16px'
        }}>
          <span style={{ fontSize: '10px', fontWeight: 700, color: '#2a6aad', letterSpacing: '0.07em', marginRight: '12px' }}>
            📊 REALTIME STATUS
          </span>

          {[
            { icon: '⚖', label: 'Total Mass', value: `${stats.totalMass.toLocaleString()} g` },
            { icon: '💨', label: 'Total Thrust', value: `${stats.totalThrust.toLocaleString()} g` },
            { icon: '🔋', label: 'Battery', value: `${stats.batPct} %` },
            { icon: '⏱', label: 'Est. Flight Time', value: `${stats.estFlight} min` },
            { icon: '🟢', label: 'Status', value: stats.status, color: stats.status === 'Ready' ? '#10b981' : '#f59e0b' },
          ].map(item => (
            <div key={item.label} style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '0 16px', borderRight: '1px solid #0d2040'
            }}>
              <span style={{ fontSize: '14px' }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '9px', color: '#2a6aad', letterSpacing: '0.05em' }}>{item.label}</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: (item as any).color || '#94a3b8' }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* NCB badge */}
        <div style={{
          padding: '4px 12px',
          background: 'rgba(0,168,255,0.08)',
          border: '1px solid rgba(0,168,255,0.2)',
          borderRadius: '4px',
          fontSize: '10px', fontWeight: 700,
          color: '#0088cc', letterSpacing: '0.05em'
        }}>
          NCB v1.0
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
