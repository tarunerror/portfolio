import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { socialLinks } from '../data';

const ContactSection: React.FC = () => {
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

  const contactMethods = [
    {
      id: 'email',
      label: 'Email',
      value: 'its.tarun01@gmail.com',
      link: socialLinks.email,
      icon: <Mail size={24} className="text-primary-500 dark:text-primary-400" />,
    },
    {
      id: 'phone',
      label: 'Phone',
      value: socialLinks.phone,
      link: `tel:${socialLinks.phone}`,
      icon: <Phone size={24} className="text-primary-500 dark:text-primary-400" />,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/tarunerror',
      link: socialLinks.linkedin,
      icon: <Linkedin size={24} className="text-primary-500 dark:text-primary-400" />,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/tarunerror',
      link: socialLinks.github,
      icon: <Github size={24} className="text-primary-500 dark:text-primary-400" />,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-secondary-900" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Get In Touch
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-12"
          >
            Feel free to contact me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method) => (
              <motion.a
                key={method.id}
                href={method.link}
                target={method.id === 'email' || method.id === 'phone' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                variants={itemVariants}
                className="card p-6 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-4 mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                  {method.label}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 break-words">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <a
              href={socialLinks.email}
              className="btn btn-primary inline-flex items-center"
            >
              <Mail size={20} className="mr-2" />
              Send Me a Message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;