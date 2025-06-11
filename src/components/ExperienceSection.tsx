
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Led development of scalable web applications serving 100k+ users. Implemented microservices architecture and mentored junior developers.',
      achievements: [
        'Reduced application load time by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React, Node.js, and MongoDB. Collaborated with design team to implement responsive UIs.',
      achievements: [
        'Built 15+ client projects',
        'Increased client satisfaction by 30%',
        'Implemented payment processing systems'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'WebDesign Agency',
      period: '2019 - 2020',
      description: 'Specialized in creating responsive, accessible web interfaces. Worked closely with UX designers to implement pixel-perfect designs.',
      achievements: [
        'Improved accessibility scores by 50%',
        'Delivered 20+ responsive websites',
        'Reduced development time by 25%'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'CodeAcademy Bootcamp',
      period: '2018 - 2019',
      description: 'Intensive full-stack development training. Built multiple projects using modern web technologies and best practices.',
      achievements: [
        'Completed 500+ hours of coding',
        'Built 10+ portfolio projects',
        'Achieved top 5% graduation rank'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and key achievements in web development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-16 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className={`absolute w-6 h-6 bg-primary rounded-full border-4 border-background top-6 left-5 md:left-1/2 transform md:-translate-x-1/2 ${index % 2 === 0 ? 'md:-translate-x-3' : 'md:translate-x-3'}`} />

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center mb-2">
                      <Briefcase className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm text-primary font-semibold">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <h4 className="text-primary mb-3 font-medium">{exp.company}</h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
