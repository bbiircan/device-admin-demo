import { DeviceStatus, PowerState } from '../types/device';

export const getDeviceIcon = (type: string, status: DeviceStatus) => {
  const iconConfig = {
    light: { 
      onlineColor: 'text-yellow-500', 
      offlineColor: 'text-yellow-300',
      icon: '💡' 
    },
    thermostat: { 
      onlineColor: 'text-blue-500', 
      offlineColor: 'text-blue-300',
      icon: '🌡️'
    },
    camera: { 
      onlineColor: 'text-purple-500', 
      offlineColor: 'text-purple-300',
      icon: '📷'
    },
    lock: { 
      onlineColor: 'text-gray-600', 
      offlineColor: 'text-gray-400',
      icon: '🔒'
    },
    sprinkler: { 
      onlineColor: 'text-green-500', 
      offlineColor: 'text-green-300',
      icon: '💦'
    }
  };

  const config = iconConfig[type as keyof typeof iconConfig] || iconConfig.light;
  const color = status === 'Online' ? config.onlineColor : config.offlineColor;

  return { icon: config.icon, color };
};


export const getStatusColor = (status: DeviceStatus): string => {
  const colorMap: Record<DeviceStatus, string> = {
    Online: 'success',
    Offline: 'failure'
  };
  return colorMap[status];
};

export const getPowerButtonColor = (power: PowerState): string => {
  return power === 'ON' ? 'green' : 'red';
};

export const getDeviceIconColor = (status: string): string => {
  const colorMap: Record<string, string> = {
    Online: 'bg-green-100 dark:bg-green-900',
    Offline: 'bg-red-100 dark:bg-red-900'
  };
  return colorMap[status] || 'bg-gray-100 dark:bg-gray-900';
};

export const getTypeColor = (type: string): string => {
  const colorMap: Record<string, string> = {
    light: 'yellow',
    thermostat: 'blue',
    camera: 'purple',
    lock: 'gray',
    sprinkler: 'green'
  };
  return colorMap[type] || 'gray';
};