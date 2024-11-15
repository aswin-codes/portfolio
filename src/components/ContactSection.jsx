import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission goes here
    console.log('Submitted email:', email);
    console.log('Submitted message:', message);
    // Reset form fields
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-teal-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-200 mb-8 text-center animate-pulse">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="bg-gray-800 shadow-2xl rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-teal-500 focus:ring-teal-500 bg-gray-700 text-gray-300"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-teal-500 focus:ring-teal-500 bg-gray-700 text-gray-300"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-700 to-cyan-700 text-gray-200 py-3 px-4 rounded-md hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-300 animate-pulse"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center space-x-6 mt-8 text-gray-500">
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
      </div>
    </section>
  );
};

export default ContactSection;