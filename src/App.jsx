import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, MapPin, School, Code, Briefcase } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import InternshipsSection from './components/InternshipsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';



const PortfolioWebsite = () => {
  const [email, setEmail] = useState('');



  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <ProjectsSection/>
      <InternshipsSection />
      {/*<ContactSection />*/}
      <Footer />
      
    </div>
  );
};

export default PortfolioWebsite;