import React, { useState } from 'react';
import { Eye, MoreHorizontal } from 'lucide-react';

interface Order {
  id: number;
  orderId: string;
  viewOrder: boolean;
  action: string;
  orderType: 'Delivery' | 'Takeaway';
  deliveryPeople: string;
  store: string;
  address: string;
  customerName: string;
  date: string;
  paymentMode: string;
  total: string;
}

const NewOrder: React.FC = () => {
  const orders: Order[] = [
    {
      id: 1,
      orderId: 'DW1848',
      viewOrder: true,
      action: '',
      orderType: 'Delivery',
      deliveryPeople: '',
      store: 'The Dessert Cafe Food',
      address: 'Road No.1, Harjana, , SO',
      customerName: 'Khadija Khatoon',
      date: '15th August 2025, 3:09:45 am',
      paymentMode: 'COD',
      total: '$ 348.00'
    },
    {
      id: 2,
      orderId: 'DW1844',
      viewOrder: true,
      action: '',
      orderType: 'Delivery',
      deliveryPeople: '',
      store: 'Tominds - Chennai Food',
      address: '2-21, 2-21, Thillakar Nagar, Badaun Garden, Madipakkam, Chennai, Tamil Nadu 600091, India',
      customerName: 'Priya Sharma',
      date: '14th August 2025, 9:15:51 am',
      paymentMode: 'COD',
      total: '$ 9907.18'
    },
    {
      id: 3,
      orderId: 'DW1842',
      viewOrder: true,
      action: '',
      orderType: 'Delivery',
      deliveryPeople: '',
      store: 'Tominds - Chennai Food',
      address: '2-21, 2-21, Thillakar Nagar, Badaun Garden, Madipakkam, Chennai, Tamil Nadu 600091, India',
      customerName: 'Priya Sharma',
      date: '13th August 2025, 1:04:32 pm',
      paymentMode: 'COD',
      total: '$ 9502.27'
    },
    {
      id: 4,
      orderId: 'DW1841',
      viewOrder: true,
      action: '',
      orderType: 'Delivery',
      deliveryPeople: '',
      store: 'Tominds - Chennai Food',
      address: '2-21, 2-21, Thillakar Nagar, Badaun Garden, Madipakkam, Chennai, Tamil Nadu 600091, India',
      customerName: 'Priya Sharma',
      date: '13th August 2025, 1:02:15 pm',
      paymentMode: 'COD',
      total: '$ 9507.42'
    },
    {
      id: 5,
      orderId: 'DW1840',
      viewOrder: true,
      action: '',
      orderType: 'Delivery',
      deliveryPeople: '',
      store: 'Burger Menu Food',
      address: 'Road No.1 Harjana, , SO',
      customerName: 'Khadija Khatoon',
      date: '13th August 2025, 3:32:16 am',
      paymentMode: 'COD',
      total: '$ 394.20'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <span>📊</span>
            <span>Order Management</span>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  View Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery People
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Store
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Mode
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600">📋</span>
                      <span className="font-medium text-gray-900">{order.orderId}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button className="text-gray-600 hover:text-gray-800">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {order.orderType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.deliveryPeople || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                    <div className="truncate">{order.store}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                    <div className="truncate">{order.address}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs">
                        👤
                      </div>
                      <span className="text-sm text-gray-900">{order.customerName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {order.paymentMode}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-gray-600 hover:text-gray-800">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing 1 to 10 of 502 entries
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 text-sm bg-green-600 text-white rounded">
                1
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                4
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                5
              </button>
              <span className="px-2 text-sm text-gray-500">...</span>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                51
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;