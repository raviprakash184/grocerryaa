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
  ChevronRight,
  Truck,
  MapPin,
  Car,
  UserCheck,
  Package,
  Gift,
  Image,
  Tag
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
    { 
      id: 'stores', 
      label: 'Stores', 
      icon: Store, 
      hasSubmenu: true,
      submenu: [
        { id: 'stores-list', label: 'Stores List' },
        { id: 'add-stores', label: 'Add Stores' },
        { id: 'eagles-view', label: 'Eagles View' },
      ]
    },
    { 
      id: 'order-management', 
      label: 'Order Management', 
      icon: ShoppingCart, 
      hasSubmenu: true,
      submenu: [
        { id: 'order-dashboard', label: 'Order Dashboard' },
        { id: 'new-order', label: 'New Order' },
        { id: 'processing-orders', label: 'Processing Orders' },
        { id: 'pickup-orders', label: 'Pickup Orders' },
        { id: 'delivered-orders', label: 'Delivered Orders' },
        { id: 'cancelled-orders', label: 'Cancelled Orders' },
        { id: 'failed-orders', label: 'Failed Orders' },
        { id: 'abandon-cart', label: 'Abandon Cart' },
        { id: 'refund-orders', label: 'Refund Orders' },
        { id: 'scheduled-orders', label: 'Scheduled Orders' },
      ]
    },
    { id: 'cuisines', label: 'Cuisines', icon: ChefHat, hasSubmenu: false },
  ];

  const serviceItems = [
    { 
      id: 'service-providers', 
      label: 'Service Providers', 
      icon: Settings, 
      hasSubmenu: true,
      submenu: [
        { id: 'service-booking-management', label: 'Service Booking Management' },
      ]
    },
  ];

  const bookingItems = [
    { 
      id: 'hosts', 
      label: 'Hosts', 
      icon: UserCheck, 
      hasSubmenu: true,
      submenu: []
    },
    { 
      id: 'amenities', 
      label: 'Amenities', 
      icon: Settings, 
      hasSubmenu: true,
      submenu: []
    },
    { 
      id: 'booking-management', 
      label: 'Booking Management', 
      icon: ShoppingCart, 
      hasSubmenu: true,
      submenu: []
    },
  ];

  const transportItems = [
    { 
      id: 'ride-management', 
      label: 'Ride Management', 
      icon: Car, 
      hasSubmenu: true,
      submenu: [
        { id: 'ride-dashboard', label: 'Ride Dashboard' },
        { id: 'new-rides', label: 'New Rides' },
        { id: 'accepted-rides', label: 'Accepted Rides' },
        { id: 'ongoing-rides', label: 'Ongoing Rides' },
        { id: 'completed-rides', label: 'Completed Rides' },
        { id: 'cancelled-rides', label: 'Cancelled Rides' },
        { id: 'failed-rides', label: 'Failed Rides' },
        { id: 'refunded-rides', label: 'Refunded Rides' },
      ]
    },
  ];

  const vehicleItems = [
    { 
      id: 'carrier-types', 
      label: 'Carrier Types', 
      icon: Package, 
      hasSubmenu: true,
      submenu: []
    },
    { 
      id: 'vehicle-types', 
      label: 'Vehicle Types', 
      icon: Truck, 
      hasSubmenu: true,
      submenu: []
    },
    { 
      id: 'vehicles', 
      label: 'Vehicles', 
      icon: Car, 
      hasSubmenu: true,
      submenu: []
    },
  ];

  const deliveryItems = [
    { 
      id: 'driver-management', 
      label: 'Driver Management', 
      icon: UserCheck, 
      hasSubmenu: true,
      submenu: [
        { id: 'driver-list', label: 'Driver List' },
        { id: 'pending-driver-list', label: 'Pending Driver List' },
        { id: 'add-driver', label: 'Add Driver' },
        { id: 'riders-in-map', label: 'Riders In Map' },
      ]
    },
    { 
      id: 'package-type', 
      label: 'Package Type', 
      icon: Package, 
      hasSubmenu: true,
      submenu: []
    },
  ];

  const promotionItems = [
    { 
      id: 'promocodes', 
      label: 'Promocodes', 
      icon: Gift, 
      hasSubmenu: true,
      submenu: []
    },
    { 
      id: 'store-banner', 
      label: 'Store Banner', 
      icon: Image, 
      hasSubmenu: true,
      submenu: []
    },
  ];

  const renderMenuSection = (title: string, items: any[], sectionKey: string) => (
    <div className="pt-6">
      <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
        {title}
      </h3>
      {items.map((item) => (
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
          
          {item.hasSubmenu && expandedItems.includes(item.id) && item.submenu && (
            <div className="ml-4 mt-2 space-y-1">
              {item.submenu.map((subItem: any) => (
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
    </div>
  );

  return (
    <div className="w-64 bg-white h-screen shadow-lg border-r border-gray-200 overflow-y-auto">
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

        {renderMenuSection('STORES & RESTAURANTS', storeItems, 'stores')}
        {renderMenuSection('SERVICES', serviceItems, 'services')}
        {renderMenuSection('BOOKING', bookingItems, 'booking')}
        {renderMenuSection('TRANSPORT', transportItems, 'transport')}
        {renderMenuSection('VEHICLE MANAGEMENT', vehicleItems, 'vehicle')}
        {renderMenuSection('DELIVERY MANAGEMENT', deliveryItems, 'delivery')}
        {renderMenuSection('PROMOTIONS', promotionItems, 'promotions')}
        
        <div className="pt-6">
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            PRODUCT MANAGEMENT
          </h3>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;