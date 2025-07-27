import React from 'react';
import { Star, MapPin, Camera, Heart, Award } from 'lucide-react';
import HireModal from './HireModal';

interface Photographer {
  id: string;
  name: string;
  avatar: string;
  coverImage: string;
  bio: string;
  location: string;
  specialties: string[];
  rating: number;
  reviews: number;
  followers: number;
  totalPhotos: number;
  isVerified: boolean;
  portfolioPreview: string[];
}

const mockPhotographers: Photographer[] = [
  {
    id: '1',
    name: 'John Mitchell',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    coverImage: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Landscape and nature photographer with over 10 years of experience capturing the beauty of the natural world.',
    location: 'San Francisco, CA',
    specialties: ['Landscape', 'Nature', 'Wildlife'],
    rating: 4.8,
    reviews: 127,
    followers: 2340,
    totalPhotos: 456,
    isVerified: true,
    portfolioPreview: [
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=300',
    ]
  },
  {
    id: '2',
    name: 'Sarah Chen',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    coverImage: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Urban and architectural photographer specializing in modern cityscapes and contemporary design.',
    location: 'New York, NY',
    specialties: ['Architecture', 'Urban', 'Street'],
    rating: 4.9,
    reviews: 89,
    followers: 1890,
    totalPhotos: 312,
    isVerified: true,
    portfolioPreview: [
      'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=300',
    ]
  },
  {
    id: '3',
    name: 'Mike Johnson',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    coverImage: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Ocean and seascape photographer passionate about capturing the power and beauty of marine environments.',
    location: 'Miami, FL',
    specialties: ['Seascape', 'Marine', 'Underwater'],
    rating: 4.7,
    reviews: 156,
    followers: 3120,
    totalPhotos: 678,
    isVerified: false,
    portfolioPreview: [
      'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=300',
    ]
  }
];

const PhotographerProfiles: React.FC = () => {
  const [selectedPhotographer, setSelectedPhotographer] = React.useState<Photographer | null>(null);

  return (
    <>
      <section id="photographers" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Photographers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with talented photographers and bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPhotographers.map((photographer) => (
            <div
              key={photographer.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={photographer.coverImage}
                  alt={`${photographer.name} portfolio`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Avatar */}
                <div className="absolute bottom-4 left-4">
                  <div className="relative">
                    <img
                      src={photographer.avatar}
                      alt={photographer.name}
                      className="w-16 h-16 rounded-full border-4 border-white object-cover"
                    />
                    {photographer.isVerified && (
                      <div className="absolute -top-1 -right-1 bg-indigo-600 rounded-full p-1">
                        <Award className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold text-sm">{photographer.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {photographer.name}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {photographer.location}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {photographer.bio}
                  </p>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {photographer.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Portfolio Preview */}
                <div className="mb-4">
                  <div className="grid grid-cols-3 gap-2">
                    {photographer.portfolioPreview.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {photographer.totalPhotos}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Photos</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {(photographer.followers / 1000).toFixed(1)}k
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Followers</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {photographer.reviews}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Reviews</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    View Profile
                  </button>
                  <button 
                    onClick={() => setSelectedPhotographer(photographer)}
                    className="flex-1 py-2 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Photographers
          </button>
        </div>
      </div>
    </section>

      {selectedPhotographer && (
        <HireModal
          photographer={{
            id: selectedPhotographer.id,
            name: selectedPhotographer.name,
            avatar: selectedPhotographer.avatar,
            specialties: selectedPhotographer.specialties,
            location: selectedPhotographer.location
          }}
          onClose={() => setSelectedPhotographer(null)}
        />
      )}
    </>
  );
};

export default PhotographerProfiles;