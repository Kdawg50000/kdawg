import React, { useState, useCallback, useRef } from 'react';
import FluidCanvas, { type FluidCanvasHandles } from './components/FluidCanvas';
import Controls from './components/Controls';
import type { FluidConfig } from './types';

const App: React.FC = () => {
    const fluidCanvasRef = useRef<FluidCanvasHandles>(null);
    const [config, setConfig] = useState<FluidConfig>({
        DENSITY_DISSIPATION: 0.98,
        VELOCITY_DISSIPATION: 0.99,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        SPLAT_RADIUS: 0.005,
        SPLAT_FORCE: 6000,
        SPLAT_DENSITY: 1.0,
        COLOR_BY_VELOCITY: false,
        MAX_SPEED: 400,
        BLOOM_ENABLED: true,
        BLOOM_THRESHOLD: 0.2,
        BLOOM_INTENSITY: 1.5,
        BLOOM_RADIUS: 1.2,
    });

    const handleReset = useCallback(() => {
        fluidCanvasRef.current?.reset();
    }, []);
    
    const handleRandomSplat = useCallback(() => {
        fluidCanvasRef.current?.randomSplat();
    }, []);

    const handleConfigChange = useCallback((newConfig: Partial<FluidConfig>) => {
        setConfig(prevConfig => ({ ...prevConfig, ...newConfig }));
    }, []);

    return (
        <main className="h-screen w-screen bg-gray-900 text-white overflow-hidden relative">
            <FluidCanvas ref={fluidCanvasRef} config={config} />
            <div className="absolute top-0 left-0 p-4 z-10 w-full h-full pointer-events-none">
                 <div className="flex flex-col h-full">
                    <header className="flex-shrink-0">
                        <h1 className="text-3xl font-bold text-white drop-shadow-lg">Interactive Fluid Simulation</h1>
                        <p className="text-gray-300 drop-shadow-md">Move your mouse or touch the screen to stir the fluid.</p>
                    </header>
                    <div className="flex-grow"></div>
                    <footer className="flex-shrink-0 self-center text-center text-xs text-gray-500 pb-2">
                        <p>Inspired by the Navier-Stokes equations for fluid dynamics.</p>
                    </footer>
                </div>
            </div>
            <Controls 
                config={config} 
                onConfigChange={handleConfigChange} 
                onReset={handleReset}
                onRandomSplat={handleRandomSplat}
            />
        </main>
    );
};

export default App;