"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import Link from "next/link";


export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full pt-0 pb-6 md:pb-12 px-4 md:px-8 flex items-center justify-center bg-cream">
      <div className="w-full max-w-[1400px] h-[75vh] min-h-[500px] relative rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] flex items-center justify-center">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-charcoal/50 z-10" />
          {/* Mobile Image */}
          <img
            src="/gallery/spa-interior-8.jpeg"
            alt="ARA Spa - Luxury spa in Jubilee Hills and Madhapur"
            loading="eager"
            className="w-full h-full object-cover object-center md:hidden scale-105 animate-slow-zoom opacity-80"
          />
          {/* Desktop Image */}
          <img
            src="/gallery/spa-interior-1.jpeg"
            alt="ARA Spa - Luxury spa in Jubilee Hills and Madhapur"
            loading="eager"
            className="w-full h-full object-cover object-center hidden md:block scale-105 animate-slow-zoom opacity-80"
          />
        </div>

        {/* Glassmorphism Text Box */}
        <div className="relative z-20 w-[92%] max-w-[750px] p-8 md:p-12 text-center bg-white/10 backdrop-blur-[8px] border border-white/40 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="mb-8 flex justify-center">
              <img src="/images/Araspa-LOGO.png" alt="ARA Spa Logo" className="h-24 md:h-32 object-contain drop-shadow-md" />
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-heading text-charcoal uppercase mb-6 leading-[1.1]">
              The Best Spa in <br />
              Jubilee Hills
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base md:text-lg text-gold font-sans font-medium max-w-xl mx-auto mb-10">
              Conveniently located in Jubilee Hills, ARA Spa is the preferred luxury wellness retreat for residents and corporate professionals across Madhapur and Hitech City.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link href="/#booking" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base px-8 rounded-full shadow-lg hover:shadow-xl transition-all animate-pulse-glow hover:-translate-y-0.5">
                  Book Your Appointment
                </Button>
              </Link>
              <a href="tel:+917788993406" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 rounded-full bg-transparent text-white border-white hover:bg-white hover:text-charcoal transition-all hover:-translate-y-0.5 shadow-lg">
                  Call Now
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
