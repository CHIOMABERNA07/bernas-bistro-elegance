import React from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;