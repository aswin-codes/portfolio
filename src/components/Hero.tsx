import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Words to be typed
  const words = ['Full Stack Developer','Flutter devloper', 'Node.js Expert', 'React Developer', 'TypeScript Enthusiast'];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const type = () => {
      if (isDeleting) {
        // Delete a character
        setTypedText(currentWord.substring(0, typedText.length - 1));
        setTypingSpeed(50);
      } else {
        // Type a character
        setTypedText(currentWord.substring(0, typedText.length + 1));
        setTypingSpeed(150);
      }

      // If word is complete, start deleting after a pause
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } 
      // If deletion is complete, move to next word
      else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(500); // Pause before typing next word
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentWordIndex, isDeleting, words, typingSpeed]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Hi, I'm </span>
              <span className="text-brand animate-fade-in">Aswin Raaj P S</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 animate-fade-in h-14" style={{ animationDelay: "0.2s" }}>
              <span className="border-r-4 border-brand pr-1">{typedText}</span>
            </h2>
            
            <p className="text-lg mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Versatile developer with expertise in Node.js, React.js, TypeScript, and PostgreSQL. 
              Building responsive applications with clean code and optimal performance.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button asChild size="lg" className="relative overflow-hidden group">
                <a href="#contact" className="flex items-center">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span className="absolute inset-0 bg-brand-light/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="relative overflow-hidden group">
                <a href="#projects" className="flex items-center">
                  View my work
                  <span className="absolute inset-0 bg-brand/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </a>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <a 
                href="https://github.com/aswin-codes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-brand transition-colors relative group"
              >
                GitHub
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="https://linkedin.com/in/aswin-raaj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-brand transition-colors relative group"
              >
                LinkedIn
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="/links" 
                className="text-foreground hover:text-brand transition-colors relative group"
              >
                Links
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-brand to-brand-light/70 animate-bounce-slow">
                <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/profile.png" 
                    alt="Aswin Raaj P S"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
