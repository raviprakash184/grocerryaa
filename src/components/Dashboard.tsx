import React from 'react';
import StatsCard from './StatsCard';
import Chart from './Chart';
import { 
  Users, 
  Truck, 
  Store, 
  CreditCard, 
  TrendingUp, 
  DollarSign,
  Gift,
  Package
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const statsData = [
    {
      title: 'Total Users',
      value: 1347,
      icon: Users,
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-100'
    },
    {
      title: 'Total Delivery Partners',
      value: 109,
      icon: Truck,
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-100'
    },
    {
      title: 'Total Store',
      value: 516,
      icon: Store,
      iconColor: 'text-orange-600',
      iconBgColor: 'bg-orange-100'
    },
    {
      title: 'Total Earnings',
      value: '303596.86',
      icon: CreditCard,
      iconColor: 'text-blue-600',
      iconBgColor: 'bg-blue-100'
    },
    {
      title: 'Today Earnings',
      value: 0,
      icon: TrendingUp,
      iconColor: 'text-red-600',
      iconBgColor: 'bg-red-100'
    },
    {
      title: 'Total Admin Commission',
      value: '29277.9',
      icon: DollarSign,
      iconColor: 'text-blue-600',
      iconBgColor: 'bg-blue-100'
    },
    {
      title: 'Total Store Commission',
      value: '236993.17',
      icon: Gift,
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-100'
    },
    {
      title: 'Total Delivery Boy Commission',
      value: '8669.49',
      icon: Package,
      iconColor: 'text-red-600',
      iconBgColor: 'bg-red-100'
    }
  ];

  const businessTypeData = [
    { label: 'Food', value: 85, color: '#06b6d4' },
    { label: 'Pharmacy', value: 45, color: '#ef4444' },
    { label: 'Grocery', value: 30, color: '#eab308' }
  ];

  const orderReportData = [
    { label: 'Delivered', value: 90, color: '#eab308' },
    { label: 'Cancelled', value: 75, color: '#ef4444' },
    { label: 'Failed', value: 25, color: '#06b6d4' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconColor={stat.iconColor}
            iconBgColor={stat.iconBgColor}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          title="Completed Orders by Business Type"
          data={businessTypeData}
          type="area"
        />
        <Chart
          title="Order Report"
          data={orderReportData}
          type="area"
        />
      </div>
    </div>
  );
};

export default Dashboard;