import React from 'react';
import Navigation from '@/components/Navigation';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Gallery;