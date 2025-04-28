import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

function HomePage() {
  useEffect(() => {
    document.title = 'Tarun Gautam | Software Engineer';
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-animation').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.section-animation').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}

export default HomePage;