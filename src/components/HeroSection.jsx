import React from 'react';
import { VelocityScroll } from './ui/scroll-based-velocity';
import { Github, Linkedin, MapPin, Code } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-900 to-teal-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://res.cloudinary.com/ddkpclbs2/image/upload/v1729954939/images_isvutm.jpg"
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover border-4 border-teal-500 shadow-2xl"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4 tracking-wide">
          Aswin Raaj
        </h1>

        <VelocityScroll
          text=" Full Stack App  Web AI Developer"
          className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 mb-6"
        />

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
          <a
            href="https://github.com/aswin-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-gray-300 px-4 py-2 rounded-md flex items-center justify-center space-x-2"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aswin-raaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-gray-300 px-4 py-2 rounded-md flex items-center justify-center space-x-2"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <div className="bg-gray-900 hover:bg-gray-800 text-gray-300 px-4 py-2 rounded-md flex items-center justify-center space-x-2">
            <MapPin size={20} />
            <span>Chennai</span>
          </div>
        </div>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          A passionate developer specializing in building beautiful and functional web applications
          with modern technologies. Currently pursuing Computer Science at VIT.
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {['JavaScript', 'React', 'Node.js', 'Express JS', 'Python', 'Flutter', 'Next.js', 'PostgreSQL'].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-teal-700 to-cyan-700 text-gray-200 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;