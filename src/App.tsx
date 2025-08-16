import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import BusinessGroup from './components/BusinessGroup';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleLogin = (credentials: { email: string; password: string }) => {
    // Simple demo authentication
    if (credentials.email === 'admin@delicart.com' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use admin@delicart.com / admin123');
    }
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'business-group':
        return <BusinessGroup />;
      case 'business-group-sort':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Group Sort</h2>
              <p className="text-gray-600">Drag and drop to reorder business groups</p>
            </div>
          </div>
        );
      case 'business-list':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business List</h2>
              <p className="text-gray-600">View and manage all businesses</p>
            </div>
          </div>
        );
      case 'add-business':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Business</h2>
              <p className="text-gray-600">Add new business to the platform</p>
            </div>
          </div>
        );
      case 'sort-business':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sort Business</h2>
              <p className="text-gray-600">Reorder businesses by priority</p>
            </div>
          </div>
        );
      case 'chats':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Chats</h2>
              <p className="text-gray-600">Customer support and messaging</p>
            </div>
          </div>
        );
      case 'stores':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stores</h2>
              <p className="text-gray-600">Manage all registered stores</p>
            </div>
          </div>
        );
      case 'order-management':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Management</h2>
              <p className="text-gray-600">Track and manage all orders</p>
            </div>
          </div>
        );
      case 'cuisines':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cuisines</h2>
              <p className="text-gray-600">Manage cuisine categories</p>
            </div>
          </div>
        );
      case 'service-providers':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Providers</h2>
              <p className="text-gray-600">Manage delivery partners and services</p>
            </div>
          </div>
        );
      case 'stores-list':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stores List</h2>
              <p className="text-gray-600">View all registered stores</p>
            </div>
          </div>
        );
      case 'add-stores':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Stores</h2>
              <p className="text-gray-600">Add new stores to the platform</p>
            </div>
          </div>
        );
      case 'eagles-view':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Eagles View</h2>
              <p className="text-gray-600">Bird's eye view of all store operations</p>
            </div>
          </div>
        );
      case 'order-dashboard':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Dashboard</h2>
              <p className="text-gray-600">Overview of all order activities</p>
            </div>
          </div>
        );
      case 'new-order':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">New Order</h2>
              <p className="text-gray-600">Create and manage new orders</p>
            </div>
          </div>
        );
      case 'processing-orders':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Orders</h2>
              <p className="text-gray-600">Orders currently being processed</p>
            </div>
          </div>
        );
      case 'pickup-orders':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pickup Orders</h2>
              <p className="text-gray-600">Orders ready for pickup</p>
            </div>
          </div>
        );
      case 'delivered-orders':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivered Orders</h2>
              <p className="text-gray-600">Successfully delivered orders</p>
            </div>
          </div>
        );
      case 'cancelled-orders':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancelled Orders</h2>
              <p className="text-gray-600">Orders that were cancelled</p>
            </div>
          </div>
        );
      case 'failed-orders':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed Orders</h2>
              <p className="text-gray-600">Orders that failed to complete</p>
            </div>
          </div>
        );
      case 'abandon-cart':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Abandon Cart</h2>
              <p className="text-gray-600">Carts that were abandoned by customers</p>
            </div>
          </div>
        );
      case 'refund-orders':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Orders</h2>
              <p className="text-gray-600">Orders with refund requests</p>
            </div>
          </div>
        );
      case 'scheduled-orders':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Scheduled Orders</h2>
              <p className="text-gray-600">Orders scheduled for future delivery</p>
            </div>
          </div>
        );
      case 'ride-management':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ride Management</h2>
              <p className="text-gray-600">Manage transportation and ride services</p>
            </div>
          </div>
        );
      case 'ride-dashboard':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ride Dashboard</h2>
              <p className="text-gray-600">Overview of all ride activities</p>
            </div>
          </div>
        );
      case 'new-rides':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">New Rides</h2>
              <p className="text-gray-600">Newly requested rides</p>
            </div>
          </div>
        );
      case 'accepted-rides':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accepted Rides</h2>
              <p className="text-gray-600">Rides accepted by drivers</p>
            </div>
          </div>
        );
      case 'ongoing-rides':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Rides</h2>
              <p className="text-gray-600">Rides currently in progress</p>
            </div>
          </div>
        );
      case 'completed-rides':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Completed Rides</h2>
              <p className="text-gray-600">Successfully completed rides</p>
            </div>
          </div>
        );
      case 'cancelled-rides':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancelled Rides</h2>
              <p className="text-gray-600">Rides that were cancelled</p>
            </div>
          </div>
        );
      case 'failed-rides':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed Rides</h2>
              <p className="text-gray-600">Rides that failed to complete</p>
            </div>
          </div>
        );
      case 'refunded-rides':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refunded Rides</h2>
              <p className="text-gray-600">Rides with refund requests</p>
            </div>
          </div>
        );
      case 'driver-management':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Driver Management</h2>
              <p className="text-gray-600">Manage delivery drivers and partners</p>
            </div>
          </div>
        );
      case 'driver-list':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Driver List</h2>
              <p className="text-gray-600">List of all registered drivers</p>
            </div>
          </div>
        );
      case 'pending-driver-list':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pending Driver List</h2>
              <p className="text-gray-600">Drivers pending approval</p>
            </div>
          </div>
        );
      case 'add-driver':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Driver</h2>
              <p className="text-gray-600">Add new drivers to the platform</p>
            </div>
          </div>
        );
      case 'riders-in-map':
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Riders In Map</h2>
              <p className="text-gray-600">Real-time location of active riders</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;