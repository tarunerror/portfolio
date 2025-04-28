import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { BookOpen, MapPin } from 'lucide-react';
import { education } from '../data';

const EducationSection: React.FC = () => {
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
    <section id="education" className="py-20 bg-gray-50 dark:bg-secondary-900/60" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Education
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="card overflow-visible relative pl-8 p-6"
              >
                <div className="absolute left-0 top-0 h-full w-2 bg-primary-500 dark:bg-primary-600"></div>
                <div className="absolute -left-3 top-6 w-8 h-8 rounded-full bg-primary-500 dark:bg-primary-600 flex items-center justify-center text-white">
                  <BookOpen size={20} />
                </div>
                
                <div className="mb-2">
                  <h3 className="text-xl font-bold">{item.institution}</h3>
                  <p className="text-primary-600 dark:text-primary-400">{item.degree}</p>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-1">{item.period}</p>
                </div>
                
                <div className="mt-4 text-secondary-700 dark:text-secondary-300">
                  <p>{item.details}</p>
                </div>
                
                {index === 0 && (
                  <div className="mt-3 flex items-center text-secondary-500 dark:text-secondary-400">
                    <MapPin size={16} className="mr-1" />
                    <span>Punjab, India</span>
                  </div>
                )}
                
                {index === 1 && (
                  <div className="mt-3 flex items-center text-secondary-500 dark:text-secondary-400">
                    <MapPin size={16} className="mr-1" />
                    <span>Sadabad, Uttar Pradesh</span>
                  </div>
                )}
                
                {index === 2 && (
                  <div className="mt-3 flex items-center text-secondary-500 dark:text-secondary-400">
                    <MapPin size={16} className="mr-1" />
                    <span>Sadabad, Uttar Pradesh</span>
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

export default EducationSection;