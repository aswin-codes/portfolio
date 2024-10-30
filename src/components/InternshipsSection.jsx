import React from 'react'
import {internships} from '../data/internships'

const InternshipsSection = () => {
  return (
    <section id="internships" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {internships.map((internship, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-102 transition-transform duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{internship.position}</h3>
                    <p className="text-lg text-indigo-600">{internship.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{internship.duration}</p>
                    <p className="text-gray-500 text-sm">{internship.type}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{internship.description}</p>
                <div className="flex flex-wrap gap-2">
                  {internship.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default InternshipsSection