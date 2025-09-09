import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-brand mb-2">Aswin Raaj P S</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
            <div className="mb-6 md:mb-0 space-y-4">
              <h4 className="font-semibold text-foreground">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-brand transition-colors">About</a>
                </li>
                <li>
                  <a href="#experience" className="text-muted-foreground hover:text-brand transition-colors">Experience</a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-brand transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-brand transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-brand transition-colors">Contact</a>
                </li>
                <li>
                  <a href="/links" className="text-muted-foreground hover:text-brand transition-colors">
                    All Links
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect</h4>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/aswin-codes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-brand transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/aswin-raaj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-brand transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:aswinraaj.ps@gmail.com" 
                  aria-label="Email"
                  className="text-muted-foreground hover:text-brand transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Aswin Raaj P S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
