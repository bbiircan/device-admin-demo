import React from 'react';
import { Card } from 'flowbite-react';
import { StatusStats } from '../types/device';

interface StatusCardsProps {
  stats: StatusStats;
}

const StatusCards: React.FC<StatusCardsProps> = ({ stats }) => {
  const cardConfig = [
    { 
      label: 'Online', 
      value: stats.Online, 
      bgColor: 'bg-green-100 dark:bg-green-900', 
      textColor: 'text-green-600 dark:text-green-300',
      description: 'Connected devices'
    },
    { 
      label: 'Offline', 
      value: stats.Offline, 
      bgColor: 'bg-red-100 dark:bg-red-900', 
      textColor: 'text-red-600 dark:text-red-300',
      description: 'Disconnected devices'
    },
    { 
      label: 'Total', 
      value: stats.Total, 
      bgColor: 'bg-gray-100 dark:bg-gray-700', 
      textColor: 'text-gray-600 dark:text-gray-300',
      description: 'All devices'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {cardConfig.map(({ label, value, bgColor, textColor, description }) => (
        <Card key={label} className="hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center">
            <div className={`rounded-full ${bgColor} p-3 mr-4`}>
              <span className={`font-bold ${textColor}`}>{value}</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{label}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatusCards;