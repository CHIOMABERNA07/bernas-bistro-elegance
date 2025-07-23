import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in-up">
          Berna's <span className="text-golden">Bistro</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 fade-in-up stagger-1">
          A Taste of Elegance
        </p>
        
        <p className="text-lg md:text-xl font-body mb-12 max-w-2xl mx-auto opacity-90 fade-in-up stagger-2">
          Experience culinary artistry in an atmosphere of refined luxury. 
          Where every dish tells a story and every moment becomes a memory.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up stagger-3">
          <Button 
            size="lg" 
            className="btn-golden text-lg px-8 py-4 font-semibold"
            onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Table
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4 font-semibold transition-all duration-300"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Menu
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;