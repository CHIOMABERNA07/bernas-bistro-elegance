import React from 'react';
import Navigation from '@/components/Navigation';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';

const Menu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default Menu;