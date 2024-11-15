import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="mailto:aswinraaj.ps@gmail.com" className="hover:text-gray-300">
            <Mail size={20} />
          </a>
          <a href="https://github.com/aswin-codes" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aswin-raaj/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Linkedin size={20} />
          </a>
        </div>
        <p className="animate-pulse">© 2024 Your Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;