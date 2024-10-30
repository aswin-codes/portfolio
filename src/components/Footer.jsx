import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
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
    )
}

export default Footer