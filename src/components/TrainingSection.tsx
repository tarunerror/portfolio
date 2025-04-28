import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { GraduationCap, ExternalLink } from 'lucide-react';
import { training } from '../data';

const TrainingSection: React.FC = () => {
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

  return (
    <section id="training" className="py-20 bg-white dark:bg-secondary-900" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Professional Training
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {training.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="mb-8 card overflow-visible relative pl-8 p-6"
              >
                <div className="absolute left-0 top-0 h-full w-2 bg-primary-500 dark:bg-primary-600"></div>
                <div className="absolute -left-3 top-6 w-8 h-8 rounded-full bg-primary-500 dark:bg-primary-600 flex items-center justify-center text-white">
                  <GraduationCap size={20} />
                </div>
                
                <div className="mb-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-primary-600 dark:text-primary-400">{item.institution}</p>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-1">{item.period}</p>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-secondary-700 dark:text-secondary-300">Key Highlights:</h4>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {item.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 mt-1.5 mr-2 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
                        <span className="text-secondary-700 dark:text-secondary-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.certificateUrl && (
                  <div className="mt-4">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                    >
                      <span className="mr-1">View Certificate</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;