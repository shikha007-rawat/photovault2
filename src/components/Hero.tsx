import React from 'react';
import { Camera, Star, Users, Download, ArrowRight } from 'lucide-react';
import JoinPhotographerModal from './JoinPhotographerModal';

const Hero: React.FC = () => {
  const [showJoinModal, setShowJoinModal] = React.useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 transform rotate-12 scale-150 animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 dark:bg-purple-700 rounded-full opacity-30 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 dark:bg-pink-700 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-yellow-300 dark:bg-yellow-700 rounded-full opacity-35 animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-300 dark:bg-green-700 rounded-full opacity-30 animate-pulse"></div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-25 animate-bounce"></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-full opacity-40 animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-rose-200 dark:bg-rose-800 rounded-full opacity-35 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Camera className="h-20 w-20 text-indigo-600 dark:text-indigo-400 mx-auto mb-6 drop-shadow-lg" />
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Photo
            <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent"> Vault</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover breathtaking photography from talented artists around the world. 
            Showcase your work, connect with clients, and build your creative legacy.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <span>Explore Gallery</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setShowJoinModal(true)}
            className="px-8 py-4 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 rounded-full font-semibold text-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Camera className="h-5 w-5" />
            Explore Gallery
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
              <Camera className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Photos</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
              <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">2.5K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Photographers</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
              <Download className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">1M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/30">
              <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">4.9</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {showJoinModal && (
        <JoinPhotographerModal onClose={() => setShowJoinModal(false)} />
      )}
    </>
  );
};

export default Hero;