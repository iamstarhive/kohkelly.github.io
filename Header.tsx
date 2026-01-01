
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ENTITY_NAME, PERSONAL_NAME } from './constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isGalleryPage = location.pathname === '/gallery';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profile', href: '#about', isHash: true },
    { name: 'Expertise', href: '#expertise', isHash: true },
    { name: 'Experience', href: '#experience', isHash: true },
    { name: 'Palette', href: '#art', isHash: true },
    { name: 'Gallery', href: '/gallery', isHash: false },
    { name: 'Contact', href: '#contact', isHash: true },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm py-4 border-b border-gray-50' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 group">
          <span className="text-xl font-bold tracking-tight text-[#004e7a] font-serif italic">{PERSONAL_NAME}</span>
          <span className="hidden lg:block w-px h-4 bg-gray-200"></span>
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-400">{ENTITY_NAME}</span>
        </Link>
        <nav className="hidden lg:flex space-x-12">
          {navLinks.map((link) => (
            link.isHash ? (
              <a 
                key={link.name} 
                href={isGalleryPage ? `/${link.href}` : link.href}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-[#004e7a] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#004e7a] transition-all group-hover:w-full"></span>
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-[#004e7a] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#004e7a] transition-all group-hover:w-full"></span>
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Header;
