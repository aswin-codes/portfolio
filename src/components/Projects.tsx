import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  detailedDescription: string[];
  technologies: string[];
  image: string;
  link?: string;
  githubUrl?: string; // Add this line
  buttonText?: string; // Optional button text for download link
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Prepy - AI Study App",
      description: "An AI-powered application for efficient studying and learning.",
      detailedDescription: [
        "Developed a scalable backend using Node.js and TypeScript to handle API requests for AI-powered functionalities.",
        "Implemented robust database design with PostgreSQL for storing user data and study materials efficiently.",
        "Created RESTful APIs for seamless communication between the Flutter frontend and Gemini AI platform.",
        "International Hackathon Win: Recognized for technical excellence at NotJustHack for Prepy."
      ],
      technologies: ["Node.js", "JavaScript", "PostgreSQL", "REST APIs", "Flutter", "Gemini AI", "LLM"],
      image: "/prepy.png",
      link: "https://play.google.com/store/apps/details?id=com.prepy.Prepy",
      buttonText : "Download App"
    },
    {
      id: 2,
      title: "International Conference Website",
      description: "Full-stack website for managing academic conference submissions and registrations.",
      detailedDescription: [
        "Built a full-stack application using React.js for the frontend and Node.js for the backend services.",
        "Developed RESTful APIs to manage conference submissions, registrations, and user authentication.",
        "Implemented database models using PostgreSQL for efficient data management and retrieval.",
        "Ensured responsive design and optimal performance across various devices and browsers."
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "Responsive Design"],
      image: "/icrtac.png",
      link: "https://icrtac.vercel.app"
    },
    {
      id: 3,
      title: "Dreamfarm - AI Farming Solution",
      description: "Intelligent agricultural application leveraging AI to optimize farming practices.",
      detailedDescription: [
        "Architected the backend infrastructure using Node.js, TypeScript, Django, FastAPI and PostgreSQL for an AI farming application.",
        "Designed and implemented RESTful APIs for data exchange between the mobile app and AI models.",
        "Created efficient database schemas and queries for storing and analyzing farming data.",
        "Integrated the Gemini AI platform using well-structured API calls and error handling mechanisms."
      ],
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "REST APIs", "AI Integration", "Mobile App","Flutter", "Django", "FastAPI"],
      image: "/dreamfarm.png",
      githubUrl: "https://github.com/aswin-codes/IntelGenAI"
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="heading-xl text-center">Featured Projects</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A selection of my recent work across different domains, showcasing my skills in 
          full-stack development, AI integration, and database design.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="card-hover overflow-hidden border border-border/50">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-pill">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setSelectedProject(project)}>
                  View Details
                </Button>
                {project.link && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Visit project">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <div className="mb-6">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h4 className="font-semibold mb-2">Project Details:</h4>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm mb-4">
                {selectedProject.detailedDescription.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              
              <h4 className="font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
              
              {selectedProject.link && (
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                     {selectedProject.buttonText? selectedProject.buttonText : "Visit Project"}<ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              )}
              
              {selectedProject.githubUrl && (
                <div className="mt-2">
                  <Button variant="outline" asChild className="w-full">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
