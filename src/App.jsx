import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, MapPin, School, Code } from 'lucide-react';

const projects = [
  {
    title: "Bisine",
    description: "A full-stack e-commerce platform built with React and Node.js",
    tech: ["React", "Node.js", "PostgreSQL", "Express"],
    image: "https://res.cloudinary.com/ddkpclbs2/image/upload/v1729953784/Screenshot_2024-10-26_201123_w5tir9.png",
    link: "https://bisinevite.vercel.app/"
  },
  {
    title: "Conference Website",
    description: "Built an website for an international conference conducted by VIT",
    tech: ["React", "Tailwind CSS"],
    image: "https://res.cloudinary.com/ddkpclbs2/image/upload/v1729953865/Screenshot_2024-10-26_201404_yun0kb.png",
    link: "https://icrtac.org"
  },
  {
    title: "Better Clone",
    description: "Cloned better.com for fun...",
    tech: ["React", "Tailwindcss", "Next js"],
    image: "https://res.cloudinary.com/ddkpclbs2/image/upload/v1729953918/Screenshot_2024-10-26_201453_hpoaft.png",
    link: "https://better-next.vercel.app/"
  },
  {
    title: "DreamFarm",
    description: "AI farming app built for Indian Farmers...",
    tech: ["Flutter", "Django", "Next js", "Fast API", "Machine Learning"],
    image: "https://camo.githubusercontent.com/82a3c9e81425cb0446abf390ef5f842572552574faa049c4084f2e9ac64e33b1/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6474306c7461796c6a2f696d6167652f75706c6f61642f76313732383130313939332f53637265656e73686f745f313732383130313833305f79717a7969702e706e67",
    link: "https://github.com/aswin-codes/IntelGenAI"
  }
];

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-800">Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900">Home</button>
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
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4E03AQF0eEhZh34WTg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1715776891425?e=1735171200&v=beta&t=uS0-S7XA7oAzH4dDmPvQrkzHCLntpFEzzSjFzkslWDE" 
              alt="Profile" 
              className="rounded-full w-32 h-32 object-cover border-4 border-indigo-500"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Aswin Raaj
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-6">
            Full Stack Developer
          </h2>

          {/* Personal Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-2">
              <School className="text-indigo-600" size={20} />
              <span className="text-gray-700">Vellore Institute of Technology, Chennai</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-2">
              <MapPin className="text-indigo-600" size={20} />
              <span className="text-gray-700">Chennai, Tamil Nadu</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-2">
              <Code className="text-indigo-600" size={20} />
              <span className="text-gray-700">Full Stack Development</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A passionate developer specializing in building beautiful and functional web applications 
            with modern technologies. Currently pursuing Computer Science at VIT.
          </p>

          {/* Skills Section */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {["JavaScript", "React", "Node.js", "Python", "Flutter", "Next.js", "MongoDB", "PostgreSQL"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/aswin-codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/aswin-raaj/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div onClick={() => window.open(project.link)} key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Contact</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:aswinraaj.ps@gmail.com" className="hover:text-gray-900">
              <Mail size={20} />
            </a>
            <a href="https://github.com/aswin-codes" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aswin-raaj/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              <Linkedin size={20} />
            </a>
          </div>
          <p>© 2024 Your Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;