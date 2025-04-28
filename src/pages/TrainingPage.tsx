import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TrainingSection from '../components/TrainingSection';

function TrainingPage() {
  useEffect(() => {
    document.title = 'Training | Tarun Gautam';
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <TrainingSection />
    </motion.div>
  );
}

export default TrainingPage;