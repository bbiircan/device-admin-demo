import React from 'react';
import { Card } from 'flowbite-react';
import { useDeviceManagement } from '../hooks/useDeviceManagement';
import { FilterType } from '../types/device';
import { useTheme } from '../contexts/ThemeContext';
import StatusCards from './StatusCards';
import FilterButtons from './FilterButtons';
import DeviceList from './DeviceList';

const DeviceManagement: React.FC = () => {
  const {
    devices,
    statusStats,
    filter,
    setFilter,
    toggleDevicePower
  } = useDeviceManagement();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <Header />
        <StatusCards stats={statusStats} />
        <FilterSection currentFilter={filter} onFilterChange={setFilter} />
        <DeviceList devices={devices} onTogglePower={toggleDevicePower} />
        <InformationSection />
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Card className="mb-8">
      <div className="text-center relative">
        <button
          onClick={toggleTheme}
          className="absolute top-0 right-0 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'} 
        </button>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Device Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Monitor and control your smart home devices
        </p>
      </div>
    </Card>
  );
};

const FilterSection: React.FC<{ currentFilter: FilterType; onFilterChange: (filter: FilterType) => void }> = ({
  currentFilter,
  onFilterChange
}) => (
  <Card className="mb-4">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Device Status
      </h2>
      <FilterButtons currentFilter={currentFilter} onFilterChange={onFilterChange} />
    </div>
  </Card>
);

const InformationSection: React.FC = () => (
  <Card className="mt-6">
    <div className="text-sm text-gray-500 dark:text-gray-400">
      <p>• Click the toggle switch or power button to turn devices ON/OFF
      </p>
      <p>• When turned OFF, devices will appear in Offline filter
      </p>
      <p>• Use the filter buttons to view devices by status</p>
    </div>
  </Card>
);

export default DeviceManagement;