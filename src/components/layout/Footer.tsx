import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal-fixed text-cream-fixed pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl font-bold tracking-wider text-gold">
                ARA SPA
              </span>
            </Link>
            <p className="text-cream-fixed/70 font-sans leading-relaxed">
              Experience the best massage center in Madhapur/Jubilee Hills. Luxury couple packages. Deep tissue, traditional Thai massage, and Swedish stress relief with certified therapists. Open 7 days.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream-fixed/10 flex items-center justify-center hover:bg-gold transition-colors duration-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream-fixed/10 flex items-center justify-center hover:bg-gold transition-colors duration-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream-fixed/10 flex items-center justify-center hover:bg-gold transition-colors duration-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-medium mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 font-sans text-cream-fixed/70">
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
              <li><Link href="/packages" className="hover:text-gold transition-colors">Wellness Packages</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-heading font-medium mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 font-sans text-cream-fixed/70">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-gold" />
                <span>metro piller no 1677, Ara spa, 2nd floor, unit no 212, Aditya Enclave<br/>Madhapur/Jubilee Hills, Hyderabad, Telangana 500033<br/><span className="text-cream-fixed/50 text-xs">Serving Madhapur/Jubilee Hills</span></span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-gold" />
                <a href="tel:+917788993406" className="hover:text-gold transition-colors">+91 77889 93406</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-gold" />
                <a href="mailto:Araspa75@gmail.com" className="hover:text-gold transition-colors">Araspa75@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-heading font-medium mb-6 text-white">Working Hours</h4>
            <ul className="space-y-4 font-sans text-cream-fixed/70">
              <li className="flex items-center justify-between border-b border-cream-fixed/10 pb-2">
                <span className="flex items-center"><Clock size={16} className="mr-2 text-gold"/> Open all 7 days</span>
                <span>9:30 AM - 10:00 PM</span>
              </li>
              <li className="flex items-center justify-between pb-2">
                <span className="flex items-center text-cream-fixed/50">Open all days including public holidays</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-fixed/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cream-fixed/50 font-sans">
          <p>&copy; {new Date().getFullYear()} ARA Spa & Wellness. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
