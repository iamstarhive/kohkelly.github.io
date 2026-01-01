import React, { useEffect } from 'react';
import { Artwork } from './types';

interface ImageModalProps {
  artwork: Artwork | null;
  allArtworks: Artwork[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ artwork, allArtworks, onClose, onNavigate }) => {
  useEffect(() => {
    if (!artwork) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [artwork, onClose, onNavigate]);

  if (!artwork) return null;

  const currentIndex = allArtworks.findIndex(a => a.id === artwork.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allArtworks.length - 1;

  return (
    <div 
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white hover:text-[#a5c6d9] transition-colors z-10 group"
        aria-label="Close modal"
      >
        <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('prev');
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:text-[#a5c6d9] transition-colors z-10 group"
          aria-label="Previous artwork"
        >
          <svg className="w-10 h-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next Button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('next');
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:text-[#a5c6d9] transition-colors z-10 group"
          aria-label="Next artwork"
        >
          <svg className="w-10 h-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Modal Content */}
      <div 
        className="max-w-7xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-3xl overflow-hidden shadow-2xl">
          {/* Image */}
          <div className="md:w-2/3 flex items-center justify-center bg-gray-50 p-8">
            <img
              src={artwork.imagePath}
              alt={artwork.title}
              className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
            />
          </div>

          {/* Details */}
          <div className="md:w-1/3 p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-serif italic text-gray-900 mb-4">
              {artwork.title}
            </h2>
            
            {artwork.year && (
              <p className="text-lg text-gray-600 mb-2">{artwork.year}</p>
            )}
            
            {artwork.medium && (
              <p className="text-sm text-gray-500 mb-4 italic">{artwork.medium}</p>
            )}
            
            {artwork.description && (
              <p className="text-gray-700 leading-relaxed mb-6">
                {artwork.description}
              </p>
            )}
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-400 font-light">
                {artwork.license}
              </p>
            </div>

            {/* Counter */}
            <div className="mt-6 text-sm text-gray-400">
              {currentIndex + 1} of {allArtworks.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
