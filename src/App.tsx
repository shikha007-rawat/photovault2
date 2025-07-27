import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import PhotographerProfiles from './components/PhotographerProfiles';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = React.useState('home');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      default:
        return (
          <>
            <Hero />
            <PhotoGallery />
            <PhotographerProfiles />
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          {renderContent()}
          {currentView === 'home' && <Footer />}
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;