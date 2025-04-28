import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Calendar, Github, ExternalLink, Code2, Sparkles, Rocket } from 'lucide-react';
import { projects } from '../data';

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes('ai')) return <Sparkles className="w-5 h-5" />;
    if (title.toLowerCase().includes('chat')) return <Code2 className="w-5 h-5" />;
    return <Rocket className="w-5 h-5" />;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-secondary-900/60" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        {getProjectIcon(project.title)}
                      </div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center text-sm text-secondary-500 dark:text-secondary-400">
                      <Calendar size={14} className="mr-1" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-medium rounded-full 
                          bg-gradient-to-r from-primary-100 to-blue-100 
                          dark:from-primary-900/30 dark:to-blue-900/30 
                          text-primary-700 dark:text-primary-300
                          border border-primary-200 dark:border-primary-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg
                        bg-gradient-to-r from-primary-500 to-blue-500 
                        hover:from-primary-600 hover:to-blue-600
                        dark:from-primary-600 dark:to-blue-600
                        dark:hover:from-primary-500 dark:hover:to-blue-500
                        text-white shadow-md hover:shadow-lg
                        transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;