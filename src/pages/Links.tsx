import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const LinksPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const profile = {
    name: "Aswin Raaj P S",
    photo: "/profile.png", // Using the same profile image from your portfolio
    title: "Full Stack Developer",
    college: "VIT Chennai",
    location: "Chennai, India"
  };
  
  const links = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/aswin-raaj', icon: 'fab fa-linkedin', color: '#3B82F6' },
    { name: 'GitHub', url: 'https://github.com/aswin-codes', icon: 'fab fa-github', color: '#3B82F6' },
    { name: 'Portfolio', url: 'https://aswincode.vercel.app', icon: 'fas fa-globe', color: '#3B82F6' },
    { name: 'Instagram', url: 'https://instagram.com/aswin.code', icon: 'fab fa-instagram', color: '#3B82F6' },
    { name: 'Prepy App', url: 'https://play.google.com/store/apps/details?id=com.prepy.Prepy', icon: 'fab fa-google-play', color: '#3B82F6' },
    { name: 'Intervane ( Upcoming Project )', url: 'https://intervane.vercel.app', icon: 'fas fa-rocket', color: '#3B82F6' },
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    gsap.fromTo(
      '.profile-card',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    
    gsap.fromTo(
      '.links-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
    
    gsap.fromTo(
      '.link-item',
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', delay: 0.4 }
    );
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden py-4 px-3 sm:px-6 bg-background flex items-center justify-center relative">
      {/* Background elements matching your portfolio */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-4xl mx-auto z-10">
        <div className="flex flex-col gap-6">
          {/* Profile Card */}
          <div className="profile-card w-full bg-card/50 backdrop-blur-md rounded-xl shadow-lg border border-border">
            <div className="flex flex-col sm:flex-row items-center p-6">
              {/* Photo */}
              <div className="relative mb-4 sm:mb-0 sm:mr-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand to-brand-light/70">
                  <div className="absolute inset-1 bg-card rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      className="w-full h-full object-cover rounded-full"
                      onLoad={() => setIsLoaded(true)}
                    />
                  </div>
                </div>
              </div>
              
              {/* Details */}
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold">{profile.name}</h1>
                <p className="text-lg text-muted-foreground mt-1">{profile.title}</p>
                <div className="flex items-center justify-center sm:justify-start mt-2 text-muted-foreground">
                  <span className="flex items-center">
                    <i className="fas fa-university mr-2"></i>
                    {profile.college}
                  </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start mt-1 text-muted-foreground">
                  <span className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Card */}
          <div className="links-card w-full bg-card/50 backdrop-blur-md rounded-xl shadow-lg border border-border p-5">
            <h2 className="text-xl font-bold mb-4">Connect with Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-item flex items-center p-3 rounded-lg transition-all duration-300 hover:shadow-md group bg-background/50 hover:bg-background border border-border"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-transform group-hover:scale-110 bg-brand text-white">
                    <i className={`${link.icon} text-lg`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold block">{link.name}</span>
                    <span className="text-xs text-muted-foreground truncate block">
                      {link.url.replace('https://', '')}
                    </span>
                  </div>
                  <div className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
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