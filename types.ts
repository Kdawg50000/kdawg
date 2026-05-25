export interface FluidConfig {
    DENSITY_DISSIPATION: number;
    VELOCITY_DISSIPATION: number;
    PRESSURE: number;
    PRESSURE_ITERATIONS: number;
    CURL: number;
    SPLAT_RADIUS: number;
    SPLAT_FORCE: number;
    SPLAT_DENSITY: number;
    COLOR_BY_VELOCITY: boolean;
    MAX_SPEED: number;
    BLOOM_ENABLED: boolean;
    BLOOM_THRESHOLD: number;
    BLOOM_INTENSITY: number;
    BLOOM_RADIUS: number;
}