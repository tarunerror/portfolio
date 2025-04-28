import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FileText } from 'lucide-react';
import { socialLinks } from '../data';

const AboutSection: React.FC = () => {
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
    <section id="about" className="py-20 bg-white dark:bg-secondary-900" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional developer workspace"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-secondary-700 dark:text-secondary-300">
                I am a passionate Software Engineer with a focus on Full-Stack development, Java programming, and creating AI-powered applications. My goal is to build efficient and user-friendly solutions that solve real-world problems.
              </p>
              <p className="text-lg text-secondary-700 dark:text-secondary-300">
                With a strong foundation in Computer Science fundamentals and experience in various programming languages and frameworks, I am constantly learning and expanding my skill set to stay up-to-date with the latest technologies.
              </p>
              <div className="bg-gray-50 dark:bg-secondary-800 p-6 rounded-lg shadow-md space-y-4">
                <h3 className="font-bold text-xl text-primary-600 dark:text-primary-400">Quick Info</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="font-semibold text-secondary-600 dark:text-secondary-400">Location:</span>
                    <span>Punjab, India</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold text-secondary-600 dark:text-secondary-400">Email:</span>
                    <a href={socialLinks.email} className="text-primary-500 hover:text-primary-600">
                      its.tarun01@gmail.com
                    </a>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold text-secondary-600 dark:text-secondary-400">Study:</span>
                    <span>Lovely Professional University</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FileText className="mr-2" size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;