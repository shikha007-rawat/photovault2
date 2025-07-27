import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Camera, Upload, User, Settings, BarChart3, Heart, 
  Download, Star, Users, Image, MessageSquare, Award,
  TrendingUp, Calendar, Filter
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Please sign in to access your dashboard
          </h2>
        </div>
      </div>
    );
  }

  const renderPhotographerDashboard = () => (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Photos</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">156</p>
              <p className="text-sm text-green-600 dark:text-green-400">+12 this month</p>
            </div>
            <Camera className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Likes</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">2,847</p>
              <p className="text-sm text-green-600 dark:text-green-400">+234 this week</p>
            </div>
            <Heart className="h-12 w-12 text-red-500" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Downloads</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">1,234</p>
              <p className="text-sm text-green-600 dark:text-green-400">+89 this week</p>
            </div>
            <Download className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Hire Requests</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">23</p>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">5 pending</p>
            </div>
            <MessageSquare className="h-12 w-12 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'New photo uploaded', detail: 'Mountain Sunrise', time: '2 hours ago', icon: Upload },
            { action: 'Hire request received', detail: 'Wedding Photography', time: '5 hours ago', icon: MessageSquare },
            { action: 'Photo liked by 15 users', detail: 'Ocean Waves', time: '1 day ago', icon: Heart },
            { action: 'New follower', detail: 'Sarah Johnson', time: '2 days ago', icon: Users },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <activity.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <div className="flex-1">
                <p className="text-gray-900 dark:text-white font-medium">{activity.action}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{activity.detail}</p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUserDashboard = () => (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Liked Photos</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">47</p>
            </div>
            <Heart className="h-12 w-12 text-red-500" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Downloads</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">23</p>
            </div>
            <Download className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Following</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
            </div>
            <Users className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>
      </div>

      {/* Liked Photos */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recently Liked</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
              <img
                src={`https://images.pexels.com/photos/${417074 + i}/pexels-photo-${417074 + i}.jpeg?auto=compress&cs=tinysrgb&w=300`}
                alt={`Liked photo ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="space-y-8">
      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Users</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">2,847</p>
            </div>
            <Users className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Photographers</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">456</p>
            </div>
            <Camera className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Photos</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">12,456</p>
            </div>
            <Image className="h-12 w-12 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Downloads</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">89,234</p>
            </div>
            <Download className="h-12 w-12 text-red-500" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Revenue</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">$34.2k</p>
            </div>
            <TrendingUp className="h-12 w-12 text-yellow-600 dark:text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Content Management */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Content Management</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Pending Photo Reviews</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">23 photos waiting for approval</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Review
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">User Reports</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">5 reports need attention</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Review
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Photographer Applications</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">12 applications pending</p>
            </div>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'photos', label: user?.role === 'photographer' ? 'My Photos' : 'Liked Photos', icon: Image },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (user.role === 'admin') {
    tabs.splice(1, 0, { id: 'users', label: 'Users', icon: Users });
    tabs.splice(2, 0, { id: 'content', label: 'Content', icon: Filter });
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full object-cover" />
            ) : (
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back, {user.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 capitalize">
                {user.role} Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <>
            {user.role === 'photographer' && renderPhotographerDashboard()}
            {user.role === 'user' && renderUserDashboard()}
            {user.role === 'admin' && renderAdminDashboard()}
          </>
        )}
        
        {activeTab === 'photos' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {user.role === 'photographer' ? 'My Photos' : 'Liked Photos'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                  <img
                    src={`https://images.pexels.com/photos/${417074 + i}/pexels-photo-${417074 + i}.jpeg?auto=compress&cs=tinysrgb&w=300`}
                    alt={`Photo ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Account Settings</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  value={user.name}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              {user.role === 'photographer' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tell us about your photography style and experience..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="City, State"
                    />
                  </div>
                </>
              )}
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;