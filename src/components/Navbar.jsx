import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false); // Close mobile menu if open
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 64; // Height of your navigation bar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }; 

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-gray-800">aswin.code</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex space-x-8">
                            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900">Home</button>
                            <button onClick={() => scrollToSection('internships')} className="text-gray-600 hover:text-gray-900">Experience</button>
                            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900">Projects</button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900">Contact</button>
                        </div>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900">Home</button>
                        <button onClick={() => scrollToSection('internships')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900">Experience</button>
                        <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900">Projects</button>
                        <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900">Contact</button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar