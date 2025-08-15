import React, { useState } from 'react';
import { 
  Home, 
  BarChart3, 
  Users, 
  List, 
  Plus, 
  ArrowUpDown, 
  MessageCircle, 
  Store, 
  ShoppingCart, 
  ChefHat, 
  Settings,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['business-setup']);

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, hasSubmenu: false },
    { 
      id: 'business-setup', 
      label: 'Business Setup', 
      icon: BarChart3, 
      hasSubmenu: true,
      submenu: [
        { id: 'business-group', label: 'Business Group', icon: Users },
        { id: 'business-group-sort', label: 'Business Group Sort', icon: ArrowUpDown },
        { id: 'business-list', label: 'Business List', icon: List },
        { id: 'add-business', label: 'Add Business', icon: Plus },
        { id: 'sort-business', label: 'Sort Business', icon: ArrowUpDown },
      ]
    },
    { id: 'chats', label: 'Chats', icon: MessageCircle, hasSubmenu: false },
  ];

  const storeItems = [
    { id: 'stores', label: 'Stores', icon: Store },
    { id: 'order-management', label: 'Order Management', icon: ShoppingCart },
    { id: 'cuisines', label: 'Cuisines', icon: ChefHat },
  ];

  const serviceItems = [
    { id: 'service-providers', label: 'Service Providers', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-black rounded-full relative">
              <div className="absolute top-1 left-1 w-1 h-1 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          <span className="text-2xl font-bold text-green-600">Delicart</span>
        </div>
      </div>

      <nav className="px-4 space-y-2">
        {menuItems.map((item) => (
          <div key={item.id}>
            <div
              className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                activeItem === item.id ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => {
                if (item.hasSubmenu) {
                  toggleExpanded(item.id);
                } else {
                  onItemClick(item.id);
                }
              }}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.hasSubmenu && (
                expandedItems.includes(item.id) ? 
                  <ChevronDown className="w-4 h-4" /> : 
                  <ChevronRight className="w-4 h-4" />
              )}
            </div>
            
            {item.hasSubmenu && expandedItems.includes(item.id) && (
              <div className="ml-4 mt-2 space-y-1">
                {item.submenu?.map((subItem) => (
                  <div
                    key={subItem.id}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                      activeItem === subItem.id ? 'bg-green-50 text-green-600' : 'text-gray-500 hover:bg-gray-50'
                    }`}
                    onClick={() => onItemClick(subItem.id)}
                  >
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <span className="text-sm">{subItem.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="pt-6">
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            STORES & RESTAURANTS
          </h3>
          {storeItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                activeItem === item.id ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => onItemClick(item.id)}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            SERVICES
          </h3>
          {serviceItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                activeItem === item.id ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => onItemClick(item.id)}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;