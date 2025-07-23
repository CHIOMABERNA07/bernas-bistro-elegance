import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">
          Get in <span className="text-golden">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-golden rounded-full">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-black mb-2">Location</h3>
                  <p className="text-gray-700">
                    123 Culinary Avenue<br />
                    Downtown District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-golden rounded-full">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-black mb-2">Phone</h3>
                  <p className="text-gray-700">
                    Reservations: <a href="tel:+1234567890" className="text-golden hover:underline">(123) 456-7890</a><br />
                    General Inquiries: <a href="tel:+1234567891" className="text-golden hover:underline">(123) 456-7891</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-golden rounded-full">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-black mb-2">Email</h3>
                  <p className="text-gray-700">
                    Reservations: <a href="mailto:reservations@bernasbistro.com" className="text-golden hover:underline">reservations@bernasbistro.com</a><br />
                    Events: <a href="mailto:events@bernasbistro.com" className="text-golden hover:underline">events@bernasbistro.com</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-golden rounded-full">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-black mb-2">Hours</h3>
                  <div className="text-gray-700 space-y-1">
                    <p><span className="font-semibold">Tuesday - Thursday:</span> 5:00 PM - 10:00 PM</p>
                    <p><span className="font-semibold">Friday - Saturday:</span> 5:00 PM - 11:00 PM</p>
                    <p><span className="font-semibold">Sunday:</span> 5:00 PM - 9:00 PM</p>
                    <p><span className="font-semibold">Monday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <div className="text-center">
              <h3 className="text-2xl font-bold font-heading text-black mb-6">Follow Us</h3>
              <div className="flex justify-center gap-6">
                <a href="#" className="p-3 bg-black rounded-full text-white hover:bg-golden hover:text-black transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-black rounded-full text-white hover:bg-golden hover:text-black transition-colors duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-black rounded-full text-white hover:bg-golden hover:text-black transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Berna's Bistro Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;