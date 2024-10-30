import React, { useEffect, useState } from 'react';
import HyperText from './ui/hyper-text';
import { Github, Linkedin, School, MapPin, Code } from 'lucide-react';
import { VelocityScroll } from './ui/scroll-based-velocity';



const HeroSection = () => {



    return (
        <section id="home" className="pt-32 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <div className="flex items-center justify-center mb-4">
                    <img
                        src="https://res.cloudinary.com/ddkpclbs2/image/upload/v1729954939/images_isvutm.jpg"
                        alt="Profile"
                        className="rounded-full w-32 h-32 object-cover border-4 border-indigo-500"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                    Aswin Raaj
                </h1>

                <VelocityScroll text=" Full Stack App  Web AI Developer" className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-6" />

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
                        {["JavaScript", "React", "Node.js", "Express JS", "Python", "Flutter", "Next.js", "PostgreSQL"].map((skill, index) => (
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
    );
};

export default HeroSection;
