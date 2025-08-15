import React from 'react';
import { Bell, Search, Moon, User, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 text-yellow-500">⭐</div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-3 bg-red-500 relative">
              <div className="absolute inset-0 bg-blue-600" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}></div>
              <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0 50%)' }}></div>
            </div>
            <span className="text-sm text-gray-600">English</span>
          </div>

          {/* Dark Mode Toggle */}
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Moon className="w-5 h-5" />
          </button>

          {/* Search */}
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                203
              </span>
            </button>
          </div>

          {/* Admin Profile */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">Admin</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;