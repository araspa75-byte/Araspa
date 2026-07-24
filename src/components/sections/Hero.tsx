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
    <section className="relative w-full pt-28 pb-12 px-4 md:px-8 flex items-center justify-center bg-cream min-h-[90vh]">
      <div className="w-full max-w-[1400px] h-[75vh] min-h-[500px] relative rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] flex items-center justify-center">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-charcoal/50 z-10" />
          <img
            src="/images/Proactive-Therapeutic-Care.png"
            alt="ARA Spa - Luxury spa in Jubilee Hills and Madhapur"
            loading="eager"
            className="w-full h-full object-cover object-center scale-105 animate-slow-zoom opacity-80"
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
            <motion.div variants={itemVariants} className="inline-block bg-white/95 text-charcoal font-bold tracking-[2.5px] uppercase rounded-full px-6 py-2.5 text-xs mb-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-black/5">
              Premium Wellness Retreat
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg leading-[1.1]">
              The Best Spa in <br />
              <span className="italic font-light">Jubilee Hills.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base md:text-lg text-cream/95 font-sans max-w-xl mx-auto mb-10 drop-shadow-md">
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

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2 opacity-80 font-medium">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/80 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
