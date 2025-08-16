import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

interface Business {
  id: number;
  name: string;
  image: string;
  layout: string;
  status: 'Active' | 'Inactive';
}

const BusinessList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const businesses: Business[] = [
    {
      id: 1,
      name: 'Food',
      image: '🍔',
      layout: 'Food',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Veg and Fruits',
      image: '🥬',
      layout: 'Ecommerce',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Grocery',
      image: '🛒',
      layout: 'Ecommerce',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Meat & Fish',
      image: '🐟',
      layout: 'Ecommerce',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Pharmacy',
      image: '💊',
      layout: 'Ecommerce',
      status: 'Active'
    }
  ];

  const filteredBusinesses = businesses.filter(business =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <span>🏠</span>
                <span>Business</span>
                <span>›</span>
                <span className="text-gray-900">Business List</span>
              </nav>
              <h1 className="text-2xl font-bold text-gray-900">Business List</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
                />
              </div>
            </div>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Business</span>
          </button>
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
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Layout
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBusinesses.map((business) => (
                <tr key={business.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {business.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{business.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      {business.image}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {business.layout}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {business.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 p-1">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessList;