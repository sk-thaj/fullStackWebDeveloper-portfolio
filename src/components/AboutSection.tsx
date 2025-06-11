
import React from 'react';
import { motion } from 'framer-motion';
import { Code, User } from 'lucide-react';

const AboutSection = () => {
  const techStack = [
    { name: 'React', color: 'text-blue-400' },
    { name: 'Node.js', color: 'text-green-400' },
    { name: 'TypeScript', color: 'text-blue-300' },
    { name: 'MongoDB', color: 'text-green-500' },
    { name: 'PostgreSQL', color: 'text-blue-500' },
    { name: 'AWS', color: 'text-orange-400' },
    { name: 'Docker', color: 'text-blue-600' },
    { name: 'GraphQL', color: 'text-pink-400' }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with 4+ years of experience building scalable web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Full Stack Web Developer with a passion for creating exceptional digital experiences. 
                With expertise in both frontend and backend technologies, I love solving complex problems 
                and turning ideas into reality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <motion.button 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Tech Stack</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-background/50 rounded-lg text-center border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <span className={`font-semibold ${tech.color}`}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
