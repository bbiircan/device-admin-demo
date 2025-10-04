import React from 'react';
import { Card, Badge, Button } from 'flowbite-react';
import { Device } from '../types/device';
import { getStatusColor, getPowerButtonColor, getDeviceIcon } from '../utils/deviceUtils';

interface DeviceListProps {
  devices: Device[];
  onTogglePower: (id: number) => void;
}

const DeviceList: React.FC<DeviceListProps> = ({ devices, onTogglePower }) => {
  if (devices.length === 0) {
    return (
      <Card>
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          No devices found with the selected filter.
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {devices.map((device) => (
          <DeviceListItem
            key={device.id}
            device={device}
            onTogglePower={onTogglePower}
          />
        ))}
      </div>
    </Card>
  );
};

const DeviceListItem: React.FC<{ device: Device; onTogglePower: (id: number) => void }> = ({
  device,
  onTogglePower
}) => {
  const { icon, color } = getDeviceIcon(device.type, device.status);

  return (
    <div className="p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
      <div className="flex items-center space-x-4">
        <DeviceIcon 
          icon={icon} 
          color={color} 
        />
        <div className="flex flex-col">
            <h3 className="font-medium text-gray-900 dark:text-white">{device.name}</h3>
          <Badge color={getStatusColor(device.status)} className="mt-1 inline-block w-fit">
            {device.status}
          </Badge>
        </div>
      </div>
      
      <DeviceControls
        device={device}
        onTogglePower={onTogglePower}
      />
    </div>
  );
};

const DeviceIcon: React.FC<{ 
  icon: string;
  color: string;
}> = ({ icon, color }) => (
  <div className="flex-shrink-0">
    <div className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center bg-white dark:bg-gray-800">
      <span className={`text-xl ${color}`}>
        {icon}
      </span>
    </div>
  </div>
);

const DeviceControls: React.FC<{ device: Device; onTogglePower: (id: number) => void }> = ({
  device,
  onTogglePower
}) => (
  <div className="flex items-center">
    <Button
      color={getPowerButtonColor(device.power)}
      size="sm"
      onClick={() => onTogglePower(device.id)}
    >
      {device.power}
    </Button>
  </div>
);

export default DeviceList;