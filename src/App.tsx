import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { TheoryPage } from './pages/TheoryPage';
import { BuilderPage } from './pages/BuilderPage';
import { RealWorldPage } from './pages/RealWorldPage';
import type { PlacedNode, WireConnection } from './types/drone';
import { COMPONENT_CATALOG, PRESET_CONFIGURATIONS } from './data/componentsCatalog';

export function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'theory' | 'builder' | 'realworld'>('home');

  // Pre-populate with NCB Smart Turbo Drone preset so it opens right up with the architecture from Image 3
  const [placedNodes, setPlacedNodes] = useState<PlacedNode[]>(() => {
    const preset = PRESET_CONFIGURATIONS.ncbSmartTurboDrone;
    return preset.nodes.map((item, idx) => {
      const def = COMPONENT_CATALOG.find(c => c.id === item.componentId)!;
      return {
        instanceId: `preset-node-${idx}`,
        componentId: def.id,
        component: def,
        x: item.x,
        y: item.y,
        rotation: 0,
        label: item.label,
        status: 'operational'
      };
    });
  });

  const [wireConnections, setWireConnections] = useState<WireConnection[]>(() => {
    const preset = PRESET_CONFIGURATIONS.ncbSmartTurboDrone;
    return preset.connections.map((conn, cIdx) => ({
      id: `wire-${cIdx}`,
      sourceNodeId: `preset-node-${conn.sourceIdx}`,
      sourcePortId: 'out',
      targetNodeId: `preset-node-${conn.targetIdx}`,
      targetPortId: 'in',
      type: conn.type as any,
      color: conn.color,
      status: 'active'
    }));
  });

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        placedCount={placedNodes.length}
      />

      <main style={{ flex: 1 }}>
        {activeTab === 'home' && (
          <HomePage
            onStartBuilding={() => setActiveTab('builder')}
            onExploreTheory={() => setActiveTab('theory')}
            onOpenRealWorld={() => setActiveTab('realworld')}
          />
        )}

        {activeTab === 'theory' && <TheoryPage />}

        {activeTab === 'builder' && (
          <BuilderPage
            placedNodes={placedNodes}
            setPlacedNodes={setPlacedNodes}
            wireConnections={wireConnections}
            setWireConnections={setWireConnections}
          />
        )}

        {activeTab === 'realworld' && (
          <RealWorldPage
            placedNodes={placedNodes}
            wireConnections={wireConnections}
            onOpenBuilder={() => setActiveTab('builder')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
