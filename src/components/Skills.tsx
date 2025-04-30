
import React, { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skillCategories = [
    {
      id: 'frontend',
      label: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
      ]
    },
    {
      id: 'backend',
      label: 'Backend',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express.js', level: 90 },
        { name: 'NestJS', level: 75 },
        { name: 'REST API Design', level: 92 },
        { name: 'TypeScript', level: 85 },
      ]
    },
    {
      id: 'database',
      label: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'SQL', level: 88 },
        { name: 'Sequelize ORM', level: 85 },
        { name: 'Database Design', level: 85 },
        { name: 'Data Modeling', level: 80 },
      ]
    },
    {
      id: 'tools',
      label: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Flutter', level: 82 },
        { name: 'CI/CD', level: 78 },
        { name: 'Agile Methods', level: 85 },
        { name: 'Testing', level: 75 },
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="heading-xl text-center">Skills & Expertise</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          My technical toolkit spans full-stack development, with specialized knowledge in 
          Node.js, TypeScript, React.js, and database technologies.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {category.skills.map((skill) => (
                    <motion.div key={skill.name} className="space-y-2" variants={itemVariants}>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={0} className="h-2 bg-secondary" />
                        <motion.div 
                          className="absolute left-0 top-0 h-2 rounded-full bg-brand"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="heading-md text-center mb-8">Technology Stack</h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              "Node.js", "Express.js", "NestJS", "TypeScript", 
              "JavaScript", "React.js", "PostgreSQL", "Sequelize",
              "REST APIs", "Flutter", "HTML", "CSS", 
              "Tailwind CSS", "Git", "CI/CD", "Testing"
            ].map((tech) => (
              <motion.div 
                key={tech}
                variants={itemVariants}
                className={`flex items-center justify-center py-3 px-4 bg-secondary rounded-lg font-medium text-center transition-all duration-300 ${hoveredSkill === tech ? 'bg-brand/20 scale-105' : ''}`}
                onMouseEnter={() => setHoveredSkill(tech)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                  backgroundColor: "rgba(59, 130, 246, 0.1)"
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
