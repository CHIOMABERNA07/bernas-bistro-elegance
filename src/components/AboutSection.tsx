import React from 'react';
import chefImage from '@/assets/chef-portrait.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="section-heading text-left mb-8">
                Our <span className="text-golden">Story</span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Founded with a passion for culinary excellence, Berna's Bistro represents 
                  the perfect marriage of traditional techniques and contemporary innovation. 
                  Our journey began with a simple vision: to create an dining experience 
                  that transcends the ordinary.
                </p>
                
                <p>
                  Every dish that leaves our kitchen is a testament to our commitment to 
                  quality, creativity, and the finest ingredients sourced from local artisans 
                  and trusted suppliers worldwide.
                </p>
                
                <p>
                  Led by our award-winning chef, our culinary team crafts each plate with 
                  meticulous attention to detail, ensuring that every visit to Berna's Bistro 
                  is a celebration of flavor, artistry, and hospitality.
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-golden font-heading">15+</div>
                <div className="text-gray-600 font-body">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-golden font-heading">500+</div>
                <div className="text-gray-600 font-body">Signature Dishes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-golden font-heading">10k+</div>
                <div className="text-gray-600 font-body">Happy Guests</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={chefImage} 
                alt="Our Executive Chef"
                className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold font-heading mb-2">Chef Berna</h3>
                <p className="text-lg opacity-90">Executive Chef & Founder</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;