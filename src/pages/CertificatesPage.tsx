import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CertificatesSection from '../components/CertificatesSection';

function CertificatesPage() {
  useEffect(() => {
    document.title = 'Certificates | Tarun Gautam';
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <CertificatesSection />
    </motion.div>
  );
}

export default CertificatesPage;