
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

// Animated counter hook
const useCounter = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const step = Math.max(1, Math.floor((end - start) / (duration / 16)));
    
    const updateCount = () => {
      countRef.current = Math.min(countRef.current + step, end);
      setCount(countRef.current);
      
      if (countRef.current < end) {
        timerRef.current = window.requestAnimationFrame(updateCount);
      }
    };

    const startCounting = () => {
      countRef.current = start;
      setCount(start);
      timerRef.current = window.requestAnimationFrame(updateCount);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(document.getElementById('stats-container') as Element);

    return () => {
      if (timerRef.current) {
        window.cancelAnimationFrame(timerRef.current);
      }
      observer.disconnect();
    };
  }, [end, start, duration]);

  return count;
};

const About = () => {
  const experienceYears = useCounter(3);
  const projectsCompleted = useCounter(10);
  const codeLineCount = useCounter(500000);
  
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="heading-xl text-center">About Me</h2>
        
        <div className="max-w-3xl mx-auto text-lg mb-12">
          <p className="mb-4">
            I am a versatile full-stack developer with balanced expertise in both frontend and backend technologies. 
            Proficient in Node.js, TypeScript, and PostgreSQL for backend development while equally skilled with 
            React.js and modern frontend frameworks.
          </p>
          <p>
            Experienced in developing end-to-end solutions for AI-integrated platforms and fintech applications. 
            Passionate about clean code, agile practices, and taking ownership of features from design through 
            implementation to production.
          </p>
        </div>

        {/* Stats Counter Section */}
        <div id="stats-container" className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-brand mb-2">{experienceYears}+</span>
            <span className="text-muted-foreground text-center">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-brand mb-2">{projectsCompleted}+</span>
            <span className="text-muted-foreground text-center">Projects Completed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-brand mb-2">{codeLineCount.toLocaleString()}+</span>
            <span className="text-muted-foreground text-center">Lines of Code</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="card-hover transform transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                      <GraduationCap className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      B.Tech in Computer Science at Vellore Institute of Technology with 9.03/10 GPA
                    </p>
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Vellore Institute of Technology</h4>
                <p className="text-sm">
                  Relevant coursework: Data Structures & Algorithms, Database Management Systems, 
                  SQL Fundamentals, Computer Architecture, Machine Learning
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="card-hover transform transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>
                    <p className="text-muted-foreground">
                      Internships at Paynav and Cehpoint, developing production-level applications
                    </p>
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Professional Experience</h4>
                <p className="text-sm">
                  Built production-level applications using Node.js, TypeScript, and PostgreSQL. 
                  Implemented RESTful APIs and secure payment integrations.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="card-hover transform transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Projects</h3>
                    <p className="text-muted-foreground">
                      Award-winning AI applications and professional websites for real-world clients
                    </p>
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Notable Projects</h4>
                <p className="text-sm">
                  Created AI-powered applications like Prepy and Dreamfarm, and developed 
                  full-stack solutions for international conferences.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

export default About;
