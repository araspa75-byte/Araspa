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
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-charcoal/40 z-10" />
        <img
          src="/images/Proactive-Therapeutic-Care.png"
          alt="ARA Spa - Luxury spa in Jubilee Hills and Madhapur"
          className="w-full h-full object-cover object-center scale-105 animate-slow-zoom opacity-60"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span variants={itemVariants} className="text-gold uppercase tracking-[0.3em] font-sans text-sm md:text-base font-semibold mb-6 block drop-shadow-md">
            Premium Wellness Retreat
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            The Best Spa in <br />
            <span className="italic font-light">Hyderabad.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-cream/90 font-sans max-w-2xl mx-auto mb-10 drop-shadow-md">
            Conveniently located in Jubilee Hills, ARA Spa is the preferred luxury wellness retreat for residents and corporate professionals across Madhapur and Hitech City.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                Book Your Appointment
              </Button>
            </Link>
            <a href="tel:+917788993406">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-charcoal-fixed transition-all">
                Call Now
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2 opacity-70">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>
    </section>
  );
}
