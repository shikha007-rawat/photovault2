import React, { useState, useEffect } from 'react';
import { Heart, Download, Eye, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import PhotoModal from './PhotoModal';

interface Photo {
  id: string;
  url: string;
  title: string;
  photographer: {
    id: string;
    name: string;
    avatar: string;
  };
  tags: string[];
  likes: number;
  downloads: number;
  isLiked: boolean;
  width: number;
  height: number;
}

// Mock photo data with varying heights for masonry effect
const generateMockPhotos = (startId: number = 1, count: number = 6): Photo[] => [
  {
    id: startId.toString(),
    url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Mountain Sunrise',
    photographer: { id: '1', name: 'John Mitchell', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100' },
    tags: ['landscape', 'nature', 'sunrise'],
    likes: 342,
    downloads: 89,
    isLiked: false,
    width: 600,
    height: 800
  },
  {
    id: (startId + 1).toString(),
    url: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Urban Architecture',
    photographer: { id: '2', name: 'Sarah Chen', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' },
    tags: ['architecture', 'urban', 'modern'],
    likes: 256,
    downloads: 67,
    isLiked: true,
    width: 600,
    height: 400
  },
  {
    id: (startId + 2).toString(),
    url: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Ocean Waves',
    photographer: { id: '3', name: 'Mike Johnson', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' },
    tags: ['ocean', 'waves', 'seascape'],
    likes: 489,
    downloads: 123,
    isLiked: false,
    width: 600,
    height: 900
  },
  {
    id: (startId + 3).toString(),
    url: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Forest Path',
    photographer: { id: '1', name: 'John Mitchell', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100' },
    tags: ['forest', 'nature', 'path'],
    likes: 298,
    downloads: 76,
    isLiked: false,
    width: 600,
    height: 450
  },
  {
    id: (startId + 4).toString(),
    url: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'City Lights',
    photographer: { id: '4', name: 'Emma Davis', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
    tags: ['city', 'night', 'lights'],
    likes: 567,
    downloads: 189,
    isLiked: true,
    width: 600,
    height: 600
  },
  {
    id: (startId + 5).toString(),
    url: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Desert Landscape',
    photographer: { id: '5', name: 'Alex Rodriguez', avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100' },
    tags: ['desert', 'landscape', 'minimal'],
    likes: 234,
    downloads: 56,
    isLiked: false,
    width: 600,
    height: 750
  }
].slice(0, count);

// Additional photo URLs for variety
const additionalPhotoUrls = [
  'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=600'
];

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>(generateMockPhotos(1, 6));
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadCount, setLoadCount] = useState(1);
  const { user } = useAuth();

  const handleLike = (photoId: string) => {
    if (!user) return;
    
    setPhotos(prev => prev.map(photo => 
      photo.id === photoId 
        ? { 
            ...photo, 
            isLiked: !photo.isLiked,
            likes: photo.isLiked ? photo.likes - 1 : photo.likes + 1
          }
        : photo
    ));
  };

  const handleDownload = (photo: Photo) => {
    if (!user) return;
    
    // Simulate download
    setPhotos(prev => prev.map(p => 
      p.id === photo.id 
        ? { ...p, downloads: p.downloads + 1 }
        : p
    ));
    
    // In a real app, this would trigger an actual download
    console.log(`Downloading ${photo.title}`);
  };

  const loadMorePhotos = async () => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newPhotos = Array.from({ length: 6 }, (_, index) => {
      const photoIndex = (loadCount * 6) + index;
      const urlIndex = photoIndex % additionalPhotoUrls.length;
      const photographerIndex = photoIndex % 5;
      const photographers = [
        { id: '1', name: 'John Mitchell', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { id: '2', name: 'Sarah Chen', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { id: '3', name: 'Mike Johnson', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { id: '4', name: 'Emma Davis', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { id: '5', name: 'Alex Rodriguez', avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ];
      
      const titles = [
        'Sunset Dreams', 'Urban Vibes', 'Nature\'s Beauty', 'City Nights', 'Mountain Views',
        'Ocean Breeze', 'Forest Magic', 'Street Art', 'Golden Hour', 'Misty Morning'
      ];
      
      const tagSets = [
        ['landscape', 'sunset', 'nature'],
        ['urban', 'street', 'city'],
        ['nature', 'wildlife', 'green'],
        ['night', 'lights', 'urban'],
        ['mountain', 'adventure', 'hiking']
      ];
      
      return {
        id: (photos.length + index + 1).toString(),
        url: additionalPhotoUrls[urlIndex],
        title: titles[photoIndex % titles.length],
        photographer: photographers[photographerIndex],
        tags: tagSets[photographerIndex],
        likes: Math.floor(Math.random() * 500) + 50,
        downloads: Math.floor(Math.random() * 200) + 20,
        isLiked: false,
        width: 600,
        height: [400, 600, 800, 450, 750][Math.floor(Math.random() * 5)]
      };
    });
    
    setPhotos(prev => [...prev, ...newPhotos]);
    setLoadCount(prev => prev + 1);
    setLoading(false);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Photography
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover stunning visuals from our community of talented photographers
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">{photo.title}</h3>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <img
                          src={photo.photographer.avatar}
                          alt={photo.photographer.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-white/90 text-sm">{photo.photographer.name}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(photo.id);
                    }}
                    className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                      photo.isLiked 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${photo.isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(photo);
                    }}
                    className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-md transition-all duration-300"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Photo Info */}
              <div className="p-4">
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{photo.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{photo.downloads}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {photo.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button
            onClick={loadMorePhotos}
            disabled={loading}
            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Loading...</span>
              </>
            ) : (
              <>
                <Camera className="h-5 w-5" />
                <span>Load More Photos</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onLike={handleLike}
          onDownload={handleDownload}
        />
      )}
    </section>
  );
};

export default PhotoGallery;