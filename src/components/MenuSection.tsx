import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import gourmetDish from '@/assets/gourmet-dish.jpg';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' },
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls with black truffle, parmesan, and herb oil',
        price: '$18',
        featured: true
      },
      {
        name: 'Seared Scallops',
        description: 'Pan-seared scallops with cauliflower purée and pancetta',
        price: '$24'
      },
      {
        name: 'Burrata Caprese',
        description: 'Fresh burrata with heritage tomatoes and basil oil',
        price: '$16'
      },
      {
        name: 'Tuna Tartare',
        description: 'Yellowfin tuna with avocado, citrus, and sesame',
        price: '$22'
      }
    ],
    mains: [
      {
        name: 'Wagyu Beef Tenderloin',
        description: 'Grade A5 wagyu with roasted vegetables and red wine jus',
        price: '$85',
        featured: true
      },
      {
        name: 'Pan-Roasted Halibut',
        description: 'Wild halibut with lemon risotto and seasonal vegetables',
        price: '$38'
      },
      {
        name: 'Duck Confit',
        description: 'Slow-cooked duck leg with cherry gastrique and gratin',
        price: '$42'
      },
      {
        name: 'Lobster Thermidor',
        description: 'Maine lobster with cognac cream sauce and herbs',
        price: '$56'
      }
    ],
    desserts: [
      {
        name: 'Chocolate Soufflé',
        description: 'Dark chocolate soufflé with vanilla bean ice cream',
        price: '$16',
        featured: true
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar',
        price: '$12'
      },
      {
        name: 'Tiramisu',
        description: 'Traditional Italian tiramisu with espresso and mascarpone',
        price: '$14'
      },
      {
        name: 'Lemon Tart',
        description: 'Meyer lemon curd tart with raspberry coulis',
        price: '$13'
      }
    ],
    beverages: [
      {
        name: 'Wine Selection',
        description: 'Curated collection of premium wines from around the world',
        price: '$15-85'
      },
      {
        name: 'Signature Cocktails',
        description: 'Handcrafted cocktails with premium spirits and fresh ingredients',
        price: '$16-22'
      },
      {
        name: 'Artisan Coffee',
        description: 'Single-origin coffee beans roasted to perfection',
        price: '$6-12'
      },
      {
        name: 'Tea Collection',
        description: 'Premium loose-leaf teas from renowned tea gardens',
        price: '$8-15'
      }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">
          Our <span className="text-golden">Menu</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-golden text-black shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <Card 
              key={index} 
              className={`p-6 hover:shadow-xl transition-all duration-300 ${
                item.featured ? 'ring-2 ring-golden/20 bg-golden/5' : 'bg-white'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold font-heading text-black">
                      {item.name}
                    </h3>
                    {item.featured && (
                      <span className="text-xs px-2 py-1 bg-golden text-black rounded-full font-semibold">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="text-2xl font-bold text-golden font-heading ml-4">
                  {item.price}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Dish Image */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <img 
              src={gourmetDish}
              alt="Featured Gourmet Dish"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
          </div>
          <p className="mt-6 text-lg text-gray-600 font-body">
            Our signature dishes are crafted with the finest ingredients and artistic presentation
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;