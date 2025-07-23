import React, { useState } from 'react';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-restaurant.jpg';
import diningRoom from '@/assets/dining-room.jpg';
import gourmetDish from '@/assets/gourmet-dish.jpg';
import chefImage from '@/assets/chef-portrait.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: diningRoom,
      alt: 'Elegant Dining Room',
      category: 'ambiance'
    },
    {
      src: gourmetDish,
      alt: 'Signature Gourmet Dish',
      category: 'dishes'
    },
    {
      src: chefImage,
      alt: 'Chef in Action',
      category: 'chef'
    },
    {
      src: heroImage,
      alt: 'Restaurant Interior',
      category: 'ambiance'
    },
    // Duplicate some images for variety
    {
      src: gourmetDish,
      alt: 'Artisanal Plating',
      category: 'dishes'
    },
    {
      src: diningRoom,
      alt: 'Private Dining Area',
      category: 'ambiance'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-white">
          Our <span className="text-golden">Gallery</span>
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold font-heading mb-2">{image.alt}</div>
                  <div className="text-golden uppercase tracking-wider text-sm">
                    {image.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-3xl text-white font-light italic mb-6">
            "An extraordinary culinary journey that engages all the senses. 
            Every detail is perfection."
          </blockquote>
          <cite className="text-golden text-lg font-semibold">
            - James Mitchell, Food & Wine Magazine
          </cite>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-golden transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;