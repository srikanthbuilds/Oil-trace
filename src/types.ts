export interface Coordinates { lat: number; lon: number }
export interface AISPoint { timestamp: string; coordinates: Coordinates }
export interface DriftPoint { label: string; coordinates: Coordinates; distance: number }
export interface Vessel { id: string; name: string; mmsi: string; imo: string; type: string; coordinates: Coordinates; speed: number; heading: number; lastAis: string; distanceKm: number; timeAffected: string; score: number; status: string; factors: { proximity: number; temporal: number; drift: number; trajectory: number; time: number; anomaly: number }; history: AISPoint[] }
export interface SatelliteScene { satellite: string; timestamp: string; polarization: string; confidence: number; status: string }
export interface EnvironmentalData { windSpeed: number; windDirection: string; currentSpeed: number; currentDirection: string; seaState: string }
export interface Spill { id: string; name: string; coordinates: Coordinates; areaKm2: number; severity: 'Critical'|'High'|'Medium'|'Low'; confidence: number; detectedAt: string; status: string; volume: string; morphology: string; risk: string; wind: EnvironmentalData; drift: DriftPoint[]; vessels: Vessel[] }
export interface AttributionResult { vessel: Vessel; rank: number }
