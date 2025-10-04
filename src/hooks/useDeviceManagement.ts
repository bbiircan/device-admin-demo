import { useState, useMemo } from 'react';
import { Device, FilterType, StatusStats } from '../types/device';
import { MOCK_DEVICES } from '../constants/mockDevices';

export const useDeviceManagement = () => {
  const [devices, setDevices] = useState<Device[]>(MOCK_DEVICES);
  const [filter, setFilter] = useState<FilterType>('All');

  const filteredDevices = useMemo(() => 
    filter === 'All' ? devices : devices.filter(device => device.status === filter),
    [devices, filter]
  );

  const statusStats = useMemo((): StatusStats => ({
    Online: devices.filter(d => d.status === 'Online').length,
    Offline: devices.filter(d => d.status === 'Offline').length,
    Total: devices.length
  }), [devices]);

  const toggleDevicePower = (id: number) => {
    setDevices(devices.map(device => 
      device.id === id 
        ? { 
            ...device, 
            power: device.power === 'ON' ? 'OFF' : 'ON',
            status: device.power === 'ON' ? 'Offline' : 'Online'
          } 
        : device
    ));
  };

  return {
    devices: filteredDevices,
    statusStats,
    filter,
    setFilter,
    toggleDevicePower
  };
};