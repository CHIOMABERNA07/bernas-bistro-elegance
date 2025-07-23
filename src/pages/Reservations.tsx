import React from 'react';
import Navigation from '@/components/Navigation';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';

const Reservations = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ReservationSection />
      <Footer />
    </div>
  );
};

export default Reservations;