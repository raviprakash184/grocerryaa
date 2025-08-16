import React, { useState } from 'react';
import { Search, Eye, Edit, Trash2, MoreHorizontal } from 'lucide-react';

interface Store {
  id: number;
  name: string;
  directLogin: boolean;
  businessName: string;
  email: string;
  address: string;
  contact: string;
  ratings: number;
  status: 'Active' | 'Inactive';
  openStatus: 'Accepting Orders' | 'Not Accepting Orders';
  createdOn: string;
}

const StoreList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const stores: Store[] = [
    {
      id: 1,
      name: 'Queens Restaurant(copy)',
      directLogin: true,
      businessName: 'Food',
      email: '••••••••••',
      address: '••••••••••',
      contact: '••••••••••',
      ratings: 0,
      status: 'Inactive',
      openStatus: 'Not Accepting Orders',
      createdOn: 'July 14, 2025 1:04pm'
    },
    {
      id: 2,
      name: 'w25',
      directLogin: true,
      businessName: 'Grocery',
      email: '••••••••••',
      address: '410 Oak Haven st',
      contact: '••••••••••',
      ratings: 0,
      status: 'Inactive',
      openStatus: 'Not Accepting Orders',
      createdOn: 'July 10, 2025 10:54pm'
    },
    {
      id: 3,
      name: 'Fresh Basket',
      directLogin: true,
      businessName: 'Grocery',
      email: '••••••••••',
      address: 'Velachery, Chennai, Tamil Nadu, India',
      contact: '••••••••••',
      ratings: 0,
      status: 'Active',
      openStatus: 'Not Accepting Orders',
      createdOn: 'July 2, 2025 1:43pm'
    },
    {
      id: 4,
      name: 'Quible Lounge',
      directLogin: true,
      businessName: 'Food',
      email: '••••••••••',
      address: 'Vennestraat 147, 3600 Genk, Belgium',
      contact: '••••••••••',
      ratings: 0,
      status: 'Active',
      openStatus: 'Accepting Orders',
      createdOn: 'April 10, 2025 12:36pm'
    },
    {
      id: 5,
      name: 'Hafid food',
      directLogin: true,
      businessName: 'Food',
      email: '••••••••••',
      address: 'Casablanca, Morocco',
      contact: '••••••••••',
      ratings: 0,
      status: 'Active',
      openStatus: 'Not Accepting Orders',
      createdOn: 'March 5, 2025 7:46pm'
    }
  ];

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.businessName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === '' || store.openStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <span>🏪</span>
                <span>Store List</span>
                <span>›</span>
                <span className="text-gray-900">Store</span>
              </nav>
              <h1 className="text-2xl font-bold text-gray-900">Store List</h1>
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
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Filter</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Open Status</option>
                <option value="Accepting Orders">Accepting Orders</option>
                <option value="Not Accepting Orders">Not Accepting Orders</option>
              </select>
            </div>
          </div>
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
                  Direct Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Business Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ratings
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Open Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created On
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStores.map((store) => (
                <tr key={store.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {store.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{store.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="text-blue-600">👤</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {store.businessName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {store.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                    {store.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {store.contact}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5).split('').map((star, i) => (
                        <span key={i} className="text-gray-300">{star}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      store.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {store.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      store.openStatus === 'Accepting Orders' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {store.openStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {store.createdOn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 p-1">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800 p-1">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 p-1">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
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

export default StoreList;