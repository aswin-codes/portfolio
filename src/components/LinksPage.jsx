import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const LinksPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const profile = {
    name: "Aswin Raaj P S",
    photo: "./picofme.png", // Replace with your actual photo URL
    title: "Software Developer",
    college: "VIT Chennai",
    location: "Chennai, India"
  };
  
  const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aswin-raaj/', icon: 'fab fa-linkedin', color: '#0077B5' },
    { name: 'Instagram', url: 'https://www.instagram.com/aswin.code/', icon: 'fab fa-instagram', color: '#E1306C' },
    { name: 'GitHub', url: 'https://github.com/aswin-codes/', icon: 'fab fa-github', color: '#000000' },
    { name: 'Portfolio', url: 'https://aswincode.vercel.app', icon: 'fas fa-globe', color: '#2DD4BF' },
    { name: 'Play Store (Prepy)', url: 'https://play.google.com/store/apps/details?id=com.prepy.Prepy', icon: 'fab fa-google-play', color: '#00C853' },
    { name: 'Intervane (Upcoming)', url: 'https://intervane.vercel.app', icon: 'fas fa-rocket', color: '#FF6B6B' },
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // GSAP animation for the profile card
    gsap.fromTo(
      '.profile-card',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    
    // GSAP animation for the links card
    gsap.fromTo(
      '.links-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
    
    // GSAP animation for each link item
    gsap.fromTo(
      '.link-item',
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', delay: 0.4 }
    );
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden py-4 px-3 sm:px-6 bg-gradient-to-br from-cyan-400 via-sky-200 to-white flex items-center justify-center">
      {/* Gradient orbs/blobs in background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-cyan-300 opacity-30 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 rounded-full bg-sky-300 opacity-30 blur-3xl"></div>
        <div className="absolute top-2/3 left-1/2 w-1/4 h-1/4 rounded-full bg-white opacity-40 blur-3xl"></div>
      </div>
      
      <div className="container max-w-4xl mx-auto z-10">
        <div className="flex flex-col gap-6">
          {/* Profile Card - Always on top */}
          <div className="profile-card w-full bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-6 border border-white/50">
            <div className="flex flex-row items-center">
              {/* Photo */}
              <div className="relative mr-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 blur opacity-80 transform scale-110"></div>
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-full border-2 border-white/50 shadow-lg">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    onLoad={() => setIsLoaded(true)}
                  />
                </div>
              </div>
              
              {/* Details */}
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{profile.name}</h1>
                <p className="text-lg text-gray-700 font-medium mt-1">{profile.title}</p>
                <div className="flex items-center mt-2 text-gray-600">
                  <i className="fas fa-university mr-2"></i>
                  <span>{profile.college}</span>
                </div>
                <div className="flex items-center mt-1 text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Card - Always below profile */}
          <div className="links-card w-full bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-5 border border-white/50">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Connect with Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-item flex items-center p-3 rounded-lg transition-all duration-300 hover:shadow-lg group bg-white/50 hover:bg-white/70 border border-white/50"
                >
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-transform group-hover:scale-110 shadow-md"
                    style={{ background: `linear-gradient(135deg, ${link.color}, ${link.color}99)` }}
                  >
                    <i className={`${link.icon} text-lg text-white`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-gray-800 font-semibold block">{link.name}</span>
                    <span className="text-xs text-gray-600 truncate block">{link.url.replace('https://', '')}</span>
                  </div>
                  <div className="ml-auto text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;