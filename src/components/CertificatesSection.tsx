import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certificates } from '../data';

const CertificatesSection: React.FC = () => {
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
    <section id="certificates" className="py-20 bg-white dark:bg-secondary-900" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                variants={itemVariants}
                className="card p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-3 mr-4">
                    <Award size={24} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-1">
                      {certificate.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300 mb-2">
                      {certificate.issuer}
                    </p>
                    <div className="flex items-center text-sm text-secondary-500 dark:text-secondary-400 mb-4">
                      <Calendar size={14} className="mr-1" />
                      <span>{certificate.date}</span>
                    </div>
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                    >
                      <span className="mr-1">View Certificate</span>
                      <ExternalLink size={14} />
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

export default CertificatesSection;