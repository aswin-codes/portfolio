
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="heading-xl text-center">Experience & Education</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="heading-md mb-6">Work Experience</h3>
            
            <div className="space-y-8">
              <div className="timeline-item">
                <div>
                  <h4 className="text-xl font-semibold">App Developer Intern</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-brand">Paynav</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-muted-foreground">Bangalore, India</span>
                  </div>
                  
                  <ul className="list-disc list-outside ml-5 space-y-2 text-sm">
                    <li>Developed and maintained RESTful APIs for a production-level fintech application using Node.js and TypeScript.</li>
                    <li>Implemented database models and queries using PostgreSQL and Sequelize ORM for efficient data management.</li>
                    <li>Collaborated in an agile environment with cross-functional teams to optimize application performance and scalability.</li>
                    <li>Integrated secure payment gateways and implemented robust authentication protocols to ensure data security.</li>
                  </ul>
                  
                  <div className="mt-3 flex flex-wrap">
                    <Badge variant="outline" className="mr-1 mb-1">Node.js</Badge>
                    <Badge variant="outline" className="mr-1 mb-1">TypeScript</Badge>
                    <Badge variant="outline" className="mr-1 mb-1">PostgreSQL</Badge>
                    <Badge variant="outline" className="mr-1 mb-1">Sequelize ORM</Badge>
                    <Badge variant="outline" className="mr-1 mb-1">REST APIs</Badge>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div>
                  <h4 className="text-xl font-semibold">App Developer Intern</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-brand">Cehpoint</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-muted-foreground">West Bengal, India</span>
                  </div>
                  
                  <ul className="list-disc list-outside ml-5 space-y-2 text-sm">
                    <li>Built backend services for social media and e-commerce applications using Node.js and Express.</li>
                    <li>Designed and implemented RESTful APIs to support front-end functionality and third-party integrations.</li>
                    <li>Created and optimized database schemas for efficient data storage and retrieval.</li>
                    <li>Used Flutter to develop user friendly frontend for Social media and an ecommerce app.</li>
                  </ul>
                  
                  <div className="mt-3 flex flex-wrap">
                    <Badge variant="outline" className="mr-1 mb-1">Node.js</Badge>
                    <Badge variant="outline" className="mr-1 mb-1">Express.js</Badge>
                    <Badge variant="outline" className="mr-1 mb-1">Flutter</Badge>
                    <Badge variant="outline" className="mr-1 mb-1">REST APIs</Badge>
                    <Badge variant="outline" className="mr-1 mb-1">Database Design</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="heading-md mb-6">Education</h3>
            
            <Card className="card-hover">
              <CardHeader>
                <h4 className="text-xl font-semibold">B.Tech in Computer Science</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-brand">Vellore Institute of Technology</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-muted-foreground">GPA: 9.03/10</span>
                </div>
              </CardHeader>
              <CardContent>
                <h5 className="text-lg font-medium mb-2">Relevant Coursework:</h5>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                  <li>Data Structures & Algorithms</li>
                  <li>Database Management Systems</li>
                  <li>SQL Fundamentals</li>
                  <li>Computer Architecture</li>
                  <li>Machine Learning</li>
                </ul>
                
                <h5 className="text-lg font-medium mt-6 mb-2">Additional Training:</h5>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                  <li>Advanced backend development patterns and NestJS framework</li>
                  <li>Database migrations and schema changes in production environments</li>
                  <li>Automated testing and CI/CD pipelines</li>
                  <li>Agile methodologies and team collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
