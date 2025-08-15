import React from 'react';

interface ChartProps {
  title: string;
  data: Array<{
    label: string;
    value: number;
    color: string;
  }>;
  type: 'area' | 'bar';
}

const Chart: React.FC<ChartProps> = ({ title, data, type }) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      
      {/* Legend */}
      <div className="flex items-center space-x-6 mb-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Chart Area */}
      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>

        {/* Chart content */}
        <div className="ml-8 h-full relative">
          {type === 'area' ? (
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {data.map((item, index) => {
                const height = (item.value / maxValue) * 180;
                const x = (index * 120) + 40;
                
                return (
                  <g key={index}>
                    <path
                      d={`M ${x} 200 Q ${x + 30} ${200 - height} ${x + 60} 200 Z`}
                      fill={item.color}
                      opacity="0.7"
                    />
                  </g>
                );
              })}
            </svg>
          ) : (
            <div className="flex items-end justify-around h-full space-x-4">
              {data.map((item, index) => {
                const height = (item.value / maxValue) * 100;
                return (
                  <div
                    key={index}
                    className="flex-1 rounded-t-lg transition-all duration-300 hover:opacity-80"
                    style={{ 
                      backgroundColor: item.color, 
                      height: `${height}%`,
                      minHeight: '4px'
                    }}
                  ></div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chart;