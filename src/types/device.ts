export type DeviceStatus = 'Online' | 'Offline';
export type PowerState = 'ON' | 'OFF';
export type FilterType = 'All' | DeviceStatus;

export interface Device {
  id: number;
  name: string;
  status: DeviceStatus;
  power: PowerState;
  type: 'light' | 'thermostat' | 'camera' | 'lock' | 'sprinkler';
}

export interface StatusStats {
  Online: number;
  Offline: number;
  Total: number;
}