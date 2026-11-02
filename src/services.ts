import { satelliteScene, spills } from './data'

export const demoService = {
  getSpills: () => Promise.resolve(spills),
  getSatelliteScene: () => Promise.resolve(satelliteScene),
}
