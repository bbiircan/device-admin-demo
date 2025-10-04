import { Device } from '../types/device';

export const MOCK_DEVICES: Device[] = [
  { id: 1, name: 'Living Room Lights', status: 'Online', power: 'ON', type: 'light' },
  { id: 2, name: 'Living Thermostat', status: 'Online', power: 'ON', type: 'thermostat' },
  { id: 3, name: 'Smart Thermostat', status: 'Online', power: 'ON', type: 'thermostat' },
  { id: 4, name: 'Security Camera', status: 'Online', power: 'ON', type: 'camera' },
  { id: 5, name: 'Smart Lock', status: 'Online', power: 'ON', type: 'lock' },
  { id: 6, name: 'Smart Lock', status: 'Online', power: 'ON', type: 'lock' },
  { id: 7, name: 'Outdoor Sprinklers', status: 'Offline', power: 'ON', type: 'sprinkler' },
  { id: 8, name: 'Garage Lights', status: 'Offline', power: 'OFF', type: 'light' }
];

export const DEVICE_TYPES = {
  LIGHT: 'light',
  THERMOSTAT: 'thermostat', 
  CAMERA: 'camera',
  LOCK: 'lock',
  SPRINKLER: 'sprinkler'
} as const;