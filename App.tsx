
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ImageModal from './ImageModal';
import { EXPERTISE, FREELANCER_BIO, EXPERIENCE_SECTIONS, ENTITY_NAME, PERSONAL_NAME, ARTWORKS } from './constants';
import { ExperienceSection, Artwork } from './types';

// Experience Accordion Component
const ExperienceAccordion: React.FC<{ section: ExperienceSection }> = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-10 flex items-center justify-between hover:bg-[#f9fbff] transition-all group"
      >
        <div className="flex items-center gap-8">
          <div className="text-[#004e7a] group-hover:scale-110 transition-transform">
            {section.icon}
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-serif italic text-gray-900 mb-2 group-hover:text-[#004e7a] transition-colors">
              {section.category}
            </h3>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-600 font-medium">{section.role}</span>
              {section.location && (
                <>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-400 font-light">{section.location}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={`text-[#004e7a] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-10 pb-10 pt-4 border-t border-gray-50">
          {/* Period Display */}
          <div className="mb-8 pb-6 border-b border-gray-100">
            <span className="text-sm font-medium text-[#004e7a]">
              {section.period}
            </span>
          </div>
          
          <div className="space-y-10">
            {section.subsections.map((subsection, idx) => (
              <div key={idx} className="pl-6 border-l-2 border-[#004e7a]/20">
                <h4 className="text-xl font-serif italic text-[#004e7a] mb-4">
                  {subsection.title}
                </h4>
                <ul className="space-y-3">
                  {subsection.achievements.map((achievement, achIdx) => (
                    <li key={achIdx} className="flex items-start gap-4">
                      <span className="text-[#004e7a] mt-2 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 leading-relaxed font-light">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const featuredArtworks = ARTWORKS.filter(artwork => artwork.featured);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedArtwork) return;
    const currentIndex = featuredArtworks.findIndex(a => a.id === selectedArtwork.id);
    if (direction === 'prev' && currentIndex > 0) {
      setSelectedArtwork(featuredArtworks[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < featuredArtworks.length - 1) {
      setSelectedArtwork(featuredArtworks[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Image Modal */}
      <ImageModal
        artwork={selectedArtwork}
        allArtworks={featuredArtworks}
        onClose={() => setSelectedArtwork(null)}
        onNavigate={handleNavigate}
      />
      
      {/* HERO SECTION */}
      <section className="pt-60 pb-40 px-8 bg-[#fcfdfe] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/5 h-full bg-[#f9fbff] -z-10 translate-x-1/4 skew-x-12 border-l border-gray-50"></div>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#004e7a] mb-12 block">
              Where legal precision meets seamless program execution
            </span>
            <h1 className="text-7xl md:text-9xl font-normal text-[#004e7a] leading-tight italic font-serif mb-12">
              Collaborate with purpose. <br />
              <span className="text-gray-200 not-italic">Deliver with clarity.</span>
            </h1>
            <div className="space-y-8 text-gray-500 leading-relaxed text-xl font-light mb-8">
              <p>
                Collaboration requires more than just intent. It requires a framework. 
              </p>
              <p>
                Kohlab Consulting blends a background in law with a deep expertise in regional program management to align stakeholders and clarify delivery. We provide the structural stability that allows social missions to scale safely and effectively.
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <a href="#contact" className="px-14 py-6 bg-[#004e7a] text-white text-[10px] font-bold uppercase tracking-[0.5em] rounded-2xl hover:bg-[#003a5c] hover:shadow-2xl transition-all">
                Initiate Engagement
              </a>
              <a href="#expertise" className="px-14 py-6 border border-gray-200 text-gray-400 text-[10px] font-bold uppercase tracking-[0.5em] rounded-2xl hover:border-[#004e7a] hover:text-[#004e7a] transition-all">
                Areas of Impact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / PROFILE */}
      <section id="about" className="py-40 px-8 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#004e7a] block mb-10">Lead Practitioner Profile</span>
            <h2 className="text-6xl font-normal text-gray-900 mb-12 italic font-serif leading-tight">Expertise Applied Through <br />Collaborative Practice.</h2>
            <div className="space-y-10 text-gray-500 leading-relaxed text-xl font-light">
              <div className="space-y-8">
  <FREELANCER_BIO />
</div>
              <div className="p-10 border-l-2 border-[#004e7a]/10 bg-[#f9fbff] rounded-r-[2rem]">
                <p className="italic text-[#004e7a] font-serif text-2xl leading-snug">
                  "Meaningful work moves forward when people, processes, and purpose are aligned."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <a 
                  href="https://www.linkedin.com/in/kelly-koh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-medium text-[#004e7a] hover:text-[#003a5c] transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section id="expertise" className="py-40 px-8 bg-[#004e7a] text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#a5c6d9] block mb-10">Areas of Impact</span>
            <h2 className="text-7xl font-normal italic font-serif">Strategic Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERTISE.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/5 p-16 hover:bg-white hover:text-gray-900 transition-all duration-700 flex flex-col group h-full"
              >
                <div className="text-[#a5c6d9] group-hover:text-[#004e7a] mb-12 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif italic mb-8">{item.title}</h3>
                <p className="text-white/50 group-hover:text-gray-500 text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* EXPERIENCE SECTION - ACCORDION */}
<section id="experience" className="py-40 px-8 bg-[#fcfdfe] scroll-mt-24">
  <div className="max-w-7xl mx-auto">
    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#004e7a] block mb-10">
      Strategic Track Record
    </span>
    <h2 className="text-6xl font-normal text-gray-900 italic font-serif leading-tight mb-20">
      Professional Experience
    </h2>

    <div className="space-y-8">
      {EXPERIENCE_SECTIONS.map((section, sectionIdx) => (
        <ExperienceAccordion key={sectionIdx} section={section} />
      ))}
    </div>
  </div>
</section>


      {/* ART GALLERY SECTION */}
      <section id="art" className="py-40 px-8 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#004e7a] block mb-10">The Creative Perspective</span>
            <h2 className="text-7xl font-normal text-gray-900 italic font-serif leading-tight mb-12">Perspective & Palette</h2>
            <p className="text-xl text-gray-500 max-w-4xl font-light leading-relaxed">
              Managing complex programs requires a sharp eye for detail. Painting requires a broad view of the canvas. These casual works are a reflection of my creative process and my time spent exploring different perspectives outside of the office.
            </p>
          </div>

          {/* Art Gallery Grid - Featured Artworks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {ARTWORKS.filter(artwork => artwork.featured).map((artwork) => (
              <div key={artwork.id} className="group bg-[#fcfdfe] border border-gray-50 rounded-[3rem] overflow-hidden hover:shadow-2xl hover:border-[#004e7a]/10 transition-all">
                {/* Artwork Image */}
                <div 
                  className="relative w-full h-96 overflow-hidden cursor-pointer"
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
                </div>
                {/* Title and License */}
                <div className="p-10">
                  <h3 className="text-2xl font-serif italic text-gray-900 mb-3 group-hover:text-[#004e7a] transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light">
                    {artwork.license}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Gallery Button */}
          {ARTWORKS.length > ARTWORKS.filter(a => a.featured).length && (
            <div className="flex justify-center mt-16">
              <Link 
                to="/gallery" 
                className="px-14 py-6 border-2 border-[#004e7a] text-[#004e7a] text-[10px] font-bold uppercase tracking-[0.5em] rounded-2xl hover:bg-[#004e7a] hover:text-white transition-all duration-300"
              >
                View Full Gallery
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-40 px-8 bg-[#f8fafc] scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#004e7a] block mb-12">Engagement</span>
          <h2 className="text-8xl font-normal text-gray-900 italic font-serif leading-[1.1] mb-12">Let's Connect.</h2>
          <p className="text-gray-500 text-2xl font-light mb-24 leading-relaxed">
            We welcome thoughtful inquiries about potential collaboration opportunities. Whether you're looking for program management expertise, operational guidance, or strategic advisory support, feel free to connect.
          </p>
          
          <div 
            onClick={() => {
              const reversed = 'moc.liamnotorp@yllekhok'.split('').reverse().join('');
              window.location.href = `mailto:${reversed}`;
            }}        
            className="flex items-center justify-center gap-10 group cursor-pointer">
            <div className="w-24 h-24 rounded-[2rem] border border-gray-200 flex items-center justify-center group-hover:bg-[#004e7a] group-hover:text-white transition-all duration-500 shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-gray-300 font-bold mb-2">Primary Inquiry</p>
              <span className="text-2xl font-light text-gray-800" style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}>moc.liamnotorp@yllekhok</span>
            </div>
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
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">KOHLAB CONSULTING</span>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed font-light italic mb-6">
                Kohlab Consulting empowers nonprofits and public interest organisations with strategic program management, legal insight, and operational excellence.
              </p>
              <div className="space-y-2 text-xs text-gray-400">
                <p>KvK number: 99181649</p>
                <p>VAT ID (Btw-identificatienummer): NL005376048B17</p>
              </div>
            </div>

            {/* Right Side - Licensing */}
            <div className="flex flex-col lg:items-end max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300 mb-8">
                © {new Date().getFullYear()} Kelly Koh | Kohlab Consulting
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-12 lg:text-right">
                Except where otherwise noted, the content on this website is licensed under a{' '}
                <a 
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#004e7a] hover:underline font-medium"
                >
                  Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
                </a>.
              </p>

              {/* Why Kohlab is an Open Practice */}
              <div className="bg-[#f9fbff] border border-gray-100 rounded-[2rem] p-12">
                <h3 className="text-lg font-serif italic text-[#004e7a] mb-6">
                  Why Kohlab is an Open Practice
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  At Kohlab Consulting, collaboration is more than a name — it is a commitment to the global mission-driven community. We believe that the research and creative insights developed here have the most value when they are accessible. By licensing this site under Creative Commons, we invite practitioners and organizations to adapt and build upon these resources for non-commercial use. We only ask that you attribute the work to Kohlab and continue the cycle of openness by sharing your own adaptations under the same terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
