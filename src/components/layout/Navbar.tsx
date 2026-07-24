"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-gold/20 shadow-[0_6px_24px_rgba(0,0,0,0.05)] bg-cream/90 backdrop-blur-xl py-4",
          !isScrolled && "bg-cream/60"
        )}
      >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <img src="/images/Araspa-LOGO.png" alt="ARA Spa Logo" className="h-10 md:h-12 object-contain" />
          <div className="flex flex-col">
            <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-charcoal group-hover:text-gold transition-colors duration-300 leading-none">
              ARA SPA
            </span>
            <span className="text-[10px] uppercase tracking-widest text-charcoal-light font-sans hidden sm:block mt-1">
              Spa & Wellness
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-colors hover:text-gold relative group",
                pathname === link.href ? "text-gold" : "text-charcoal"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300",
                pathname === link.href && "scale-x-100"
              )} />
            </Link>
          ))}
          <Link href="/#booking">
            <Button variant="default" className="rounded-full px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">Book Now</Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle - Hidden on Home page */}
        {!isHomePage && (
          <button
            className="lg:hidden text-charcoal p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        )}
      </div>

      {/* Mobile Nav Links for Home Page (Horizontal Scroll) */}
      {isHomePage && (
        <div className="lg:hidden border-t border-beige/30 bg-white/95 backdrop-blur-md shadow-sm">
          <nav 
            className="flex items-center gap-x-2 px-4 py-2.5 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] uppercase tracking-widest transition-all py-1.5 px-3.5 rounded-full flex-shrink-0",
                  pathname === link.href 
                    ? "text-white bg-charcoal font-semibold shadow-sm" 
                    : "text-charcoal/80 bg-beige/30 font-medium hover:bg-beige/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/#booking" className="flex-shrink-0">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-white bg-gold py-1.5 px-4 rounded-full shadow-sm block">
                Book
              </span>
            </Link>
          </nav>
          <style dangerouslySetInnerHTML={{__html: `
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
          `}} />
        </div>
      )}
    </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-cream flex flex-col overflow-y-auto"
          >
            <div className="p-6 flex justify-end shrink-0 sticky top-0 z-10 bg-cream/80 backdrop-blur-sm">
              <button
                className="text-charcoal p-2 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-start space-y-8 p-8 pb-12 my-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-heading font-medium tracking-wide transition-colors",
                    pathname === link.href ? "text-gold" : "text-charcoal hover:text-gold"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 w-full max-w-xs flex flex-col gap-4">
                <Link href="/#booking" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="default" size="lg" className="w-full text-lg rounded-full shadow-md">
                    Book Appointment
                  </Button>
                </Link>
                <a href="tel:+917788993406">
                  <Button variant="outline" size="lg" className="w-full text-lg rounded-full">
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
