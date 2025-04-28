import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import EducationSection from '../components/EducationSection';

function EducationPage() {
  useEffect(() => {
    document.title = 'Education | Tarun Gautam';
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <EducationSection />
    </motion.div>
  );
}

export default EducationPage;