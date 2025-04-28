import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { skillCategories } from '../data';
import { Brain, Code, Database, Laptop, Users, Wrench } from 'lucide-react';

const SkillsSection: React.FC = () => {
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
        staggerChildren: 0.15,
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

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Languages':
        return <Code className="w-6 h-6" />;
      case 'Frameworks':
        return <Laptop className="w-6 h-6" />;
      case 'Tools/Platforms':
        return <Wrench className="w-6 h-6" />;
      case 'Soft Skills':
        return <Users className="w-6 h-6" />;
      case 'CS Fundamentals':
        return <Brain className="w-6 h-6" />;
      default:
        return <Database className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-secondary-900/60" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Technical Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 text-primary-600 dark:text-primary-400 mr-4">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 text-transparent bg-clip-text">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="group relative overflow-hidden rounded-lg bg-gray-50 dark:bg-secondary-700/50 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 dark:hover:from-primary-900/20 dark:hover:to-blue-900/20 transition-all duration-300"
                    >
                      <div className="p-3 flex items-center justify-between">
                        <span className="font-medium text-secondary-700 dark:text-secondary-200">
                          {skill.name}
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, index) => (
                            <div
                              key={index}
                              className={`w-1.5 h-6 rounded-full transition-all duration-300 transform group-hover:scale-y-110 ${
                                index < skill.proficiency || Math.floor(Math.random() * 2) + 3
                                  ? 'bg-gradient-to-b from-primary-500 to-blue-500 dark:from-primary-400 dark:to-blue-400'
                                  : 'bg-gray-200 dark:bg-secondary-600'
                              }`}
                              style={{
                                transformOrigin: 'bottom',
                                transitionDelay: `${index * 50}ms`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;