import React from 'react';
import { X, Heart, Download, User, Eye, Calendar, Tag } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

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

interface PhotoModalProps {
  photo: Photo;
  onClose: () => void;
  onLike: (photoId: string) => void;
  onDownload: (photo: Photo) => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose, onLike, onDownload }) => {
  const { user } = useAuth();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 transition-colors backdrop-blur-sm"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
            <img
              src={photo.url}
              alt={photo.title}
              className="max-w-full max-h-[60vh] lg:max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Details */}
          <div className="w-full lg:w-96 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {photo.title}
                </h2>
              </div>

              {/* Photographer */}
              <div className="flex items-center space-x-3">
                <img
                  src={photo.photographer.avatar}
                  alt={photo.photographer.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {photo.photographer.name}
                  </h3>
                  <button className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline">
                    View Profile
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4" />
                  <span>{photo.likes} likes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="h-4 w-4" />
                  <span>{photo.downloads} downloads</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>2.3k views</span>
                </div>
              </div>

              {/* Actions */}
              {user && (
                <div className="flex space-x-3">
                  <button
                    onClick={() => onLike(photo.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                      photo.isLiked
                        ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${photo.isLiked ? 'fill-current' : ''}`} />
                    <span>{photo.isLiked ? 'Liked' : 'Like'}</span>
                  </button>
                  <button
                    onClick={() => onDownload(photo)}
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              )}

              {/* Hire Button */}
              <button 
                onClick={() => {
                  // This would open hire modal for the photographer
                  console.log('Hire photographer:', photo.photographer.name);
                }}
                className="w-full py-3 px-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
              >
                Hire {photo.photographer.name}
              </button>

              {/* Tags */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {photo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Info */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Image Details</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Resolution:</span>
                    <span>{photo.width} × {photo.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Uploaded:</span>
                    <span>Jan 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>License:</span>
                    <span>Free for commercial use</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;