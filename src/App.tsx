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