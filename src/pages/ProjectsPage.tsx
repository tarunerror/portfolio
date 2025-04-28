import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';

function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects | Tarun Gautam';
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsSection />
    </motion.div>
  );
}

export default ProjectsPage;