import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Links', href: '/links' }, // Add this line
    { name: 'Contact', href: '#contact' },
  ];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-brand">Aswin Raaj</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => item.href.startsWith('#') ? scrollToSection(item.href) : window.location.href = item.href}
                className="text-foreground hover:text-brand transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com/aswin-codes" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5 hover:text-brand transition-colors" />
              </a>
              <a href="https://linkedin.com/in/aswin-raaj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 hover:text-brand transition-colors" />
              </a>
              <a href="mailto:aswinraaj.ps@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5 hover:text-brand transition-colors" />
              </a>
            </div>
          </nav>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold">Menu</span>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Close">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>
                
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <SheetTrigger asChild key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="text-lg font-medium hover:text-brand transition-colors text-left"
                      >
                        {item.name}
                      </button>
                    </SheetTrigger>
                  ))}
                </nav>
                
                <div className="flex items-center space-x-6 mt-auto mb-8">
                  <a href="https://github.com/aswin-codes" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-6 h-6 hover:text-brand transition-colors" />
                  </a>
                  <a href="https://linkedin.com/in/aswin-raaj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6 hover:text-brand transition-colors" />
                  </a>
                  <a href="mailto:aswinraaj.ps@gmail.com" aria-label="Email">
                    <Mail className="w-6 h-6 hover:text-brand transition-colors" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
