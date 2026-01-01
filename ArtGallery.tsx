import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ImageModal from './ImageModal';
import { ARTWORKS, ENTITY_NAME, PERSONAL_NAME } from './constants';
import { Artwork } from './types';

const ArtGallery: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedArtwork) return;
    const currentIndex = ARTWORKS.findIndex(a => a.id === selectedArtwork.id);
    if (direction === 'prev' && currentIndex > 0) {
      setSelectedArtwork(ARTWORKS[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < ARTWORKS.length - 1) {
      setSelectedArtwork(ARTWORKS[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Image Modal */}
      <ImageModal
        artwork={selectedArtwork}
        allArtworks={ARTWORKS}
        onClose={() => setSelectedArtwork(null)}
        onNavigate={handleNavigate}
      />
      
      {/* Gallery Hero Section */}
      <section className="pt-60 pb-20 px-8 bg-[#fcfdfe]">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-[#004e7a] hover:text-[#003a5c] mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Main Page
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#004e7a] block mb-10">
            Complete Collection
          </span>
          <h1 className="text-7xl font-normal text-gray-900 italic font-serif leading-tight mb-12">
            Full Gallery
          </h1>
          <p className="text-xl text-gray-500 max-w-4xl font-light leading-relaxed">
            Explore the complete collection of artworks. Each piece represents a moment of creative exploration and perspective.
          </p>
        </div>
      </section>

      {/* Full Gallery Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ARTWORKS.map((artwork) => (
              <div 
                key={artwork.id} 
                className="group bg-[#fcfdfe] border border-gray-50 rounded-[3rem] overflow-hidden hover:shadow-2xl hover:border-[#004e7a]/10 transition-all"
              >
                {/* Artwork Image */}
                <div 
                  className="relative w-full h-80 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <img
                    src={artwork.imagePath}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Click to View Indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-4">
                      <svg className="w-8 h-8 text-[#004e7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  {/* Featured Badge */}
                  {artwork.featured && (
                    <div className="absolute top-4 right-4 bg-[#004e7a] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider z-10">
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Title and License */}
                <div className="p-8">
                  <h3 className="text-xl font-serif italic text-gray-900 mb-2 group-hover:text-[#004e7a] transition-colors">
                    {artwork.title}
                  </h3>
                  {artwork.year && (
                    <p className="text-sm text-gray-500 mb-2">{artwork.year}</p>
                  )}
                  {artwork.description && (
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {artwork.description}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 font-light">
                    {artwork.license}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-32 px-8 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
            {/* Left Side - Company Info */}
            <div className="max-w-md">
              <a href="#" className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mb-8 group">
                <span className="text-4xl font-bold tracking-tight text-[#004e7a] font-serif italic">{PERSONAL_NAME}</span>
                <span className="hidden lg:block w-px h-6 bg-gray-200"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">{ENTITY_NAME.toUpperCase()}</span>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed font-light italic mb-6">
                {ENTITY_NAME} empowers nonprofits and public interest organisations with strategic program management, legal insight, and operational excellence.
              </p>
            </div>

            {/* Right Side - Licensing */}
            <div className="flex flex-col lg:items-end max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300 mb-8">
                © {new Date().getFullYear()} {PERSONAL_NAME} | {ENTITY_NAME}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed lg:text-right">
                All artworks are licensed under{' '}
                <a 
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#004e7a] hover:underline font-medium"
                >
                  CC BY-NC-SA 4.0
                </a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArtGallery;
