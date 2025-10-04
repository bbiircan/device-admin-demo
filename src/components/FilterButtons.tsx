import React from 'react';
import { Button } from 'flowbite-react';
import { FilterType } from '../types/device';

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, onFilterChange }) => {
  const filters: { key: FilterType; color: string; label: string; description: string }[] = [
    { key: 'All', color: 'gray', label: 'All Devices', description: 'Show all' },
    { key: 'Online', color: 'green', label: 'Online', description: 'Connected' },
    { key: 'Offline', color: 'red', label: 'Offline', description: 'Disconnected' }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ key, color, label, description }) => (
        <Button
          key={key}
          color={color}
          size="sm"
          onClick={() => onFilterChange(key)}
          className="flex flex-col items-center h-16 px-4"
        >
          <span className="font-semibold">{label}</span>
          <span className="text-xs opacity-75">{description}</span>
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;