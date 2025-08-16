import React from 'react';

const OrderDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Today Orders',
      value: '0',
      color: 'bg-orange-100',
      textColor: 'text-orange-600',
      icon: '📊'
    },
    {
      title: 'Today Completed Orders',
      value: '0',
      color: 'bg-green-100',
      textColor: 'text-green-600',
      icon: '✅'
    },
    {
      title: 'Today Cancelled Orders',
      value: '0',
      color: 'bg-red-100',
      textColor: 'text-red-600',
      icon: '❌'
    },
    {
      title: 'Today Processing Orders',
      value: '0',
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      icon: '⏳'
    }
  ];

  const orderStats = [
    { label: 'Today Orders', value: '0' },
    { label: 'New Orders', value: '0' },
    { label: 'Processing Orders', value: '0' },
    { label: 'Cancelled Orders', value: '0' }
  ];

  const deliveryStats = [
    { label: 'Delivered Orders', value: '0%' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} rounded-xl p-6 border border-gray-100`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.title}
                </div>
              </div>
              <div className="text-3xl">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today Orders Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Today Orders</h3>
          <div className="text-center">
            <div className="text-6xl font-bold text-gray-900 mb-4">0</div>
            <div className="space-y-4">
              {orderStats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-600">{stat.label}</span>
                  <span className="font-semibold text-gray-900">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Orders</h3>
          <div className="text-center py-12">
            <div className="text-gray-400 text-4xl mb-4">📋</div>
            <p className="text-gray-500">No recent orders</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">0%</div>
            <div className="text-sm text-gray-600">Delivered Orders</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">0</div>
            <div className="text-sm text-gray-600">New Orders</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">0</div>
            <div className="text-sm text-gray-600">Processing Orders</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">0</div>
            <div className="text-sm text-gray-600">Cancelled Orders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;