
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Alex Johnson</h3>
            <p className="text-muted-foreground">Full Stack Web Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <motion.a
              href="https://github.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-primary" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </motion.a>
            
            <motion.a
              href="mailto:alex@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-primary" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 Alex Johnson. All rights reserved. Built with React & Three.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
