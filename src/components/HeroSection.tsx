import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { socialLinks } from '../data';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-secondary-900/60 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-primary-100 dark:bg-primary-900/20 w-1/3 h-1/3 rounded-bl-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 bg-primary-100 dark:bg-primary-900/20 w-1/4 h-1/4 rounded-tr-full opacity-50"></div>
      </div>
      
      <div className="section-container z-10 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 text-transparent bg-clip-text">
              Tarun Gautam
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-secondary-700 dark:text-secondary-200">
              Software Engineer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Passionate Software Engineer skilled in Full Stack Development, Java, and AI-powered applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
            <a
              href={socialLinks.email}
              className="btn btn-outline"
            >
              <Mail size={20} className="mr-2" />
              Email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <Link
              to="about"
              smooth={true}
              duration={800}
              className="inline-flex items-center justify-center cursor-pointer text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300"
            >
              <span className="mr-2">Explore my work</span>
              <ArrowDown className="animate-bounce" size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;