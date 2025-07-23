import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Reservation Confirmed!",
      description: `Thank you ${formData.name}! Your table for ${formData.guests} on ${formData.date} at ${formData.time} has been reserved.`,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section id="reservations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">
          Make a <span className="text-golden">Reservation</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Reservation Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <Input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                    min="1"
                    max="20"
                    className="w-full"
                    placeholder="Number of guests"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <Input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Special Requests
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                  placeholder="Any special requests, dietary restrictions, or celebration details..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full btn-golden text-lg py-6"
              >
                {isSubmitting ? 'Processing...' : 'Reserve Your Table'}
              </Button>
            </form>
          </Card>

          {/* Reservation Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold font-heading text-black mb-6">
                Reservation <span className="text-golden">Information</span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Experience the pinnacle of fine dining at Berna's Bistro. We recommend 
                  booking in advance to secure your preferred date and time.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">Hours:</span>
                    <span>Tuesday - Sunday, 5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">Dress Code:</span>
                    <span>Smart Casual to Formal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">Cancellation:</span>
                    <span>24 hours notice required</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-black text-white">
              <h4 className="text-xl font-bold font-heading text-golden mb-4">
                Private Events
              </h4>
              <p className="mb-4">
                Host your special occasions in our exclusive private dining rooms. 
                Perfect for corporate events, celebrations, and intimate gatherings.
              </p>
              <Button variant="outline" className="text-golden border-golden hover:bg-golden hover:text-black">
                Learn More
              </Button>
            </Card>

            <Card className="p-6 bg-golden text-black">
              <h4 className="text-xl font-bold font-heading mb-4">
                Chef's Table Experience
              </h4>
              <p className="mb-4">
                Join Chef Berna for an exclusive culinary journey with our 7-course 
                tasting menu, paired with premium wines.
              </p>
              <p className="text-sm font-semibold">
                Available Friday & Saturday | $195 per person
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;