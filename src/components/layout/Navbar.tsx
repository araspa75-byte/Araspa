"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

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
        <Link href="/" className="group flex items-center">
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-charcoal group-hover:text-gold transition-colors duration-300">
            ARA SPA
          </span>
          <span className="ml-2 text-xs uppercase tracking-widest text-charcoal-light font-sans hidden sm:block">
            Spa & Wellness
          </span>
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
          <ThemeToggle />
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

      {/* Mobile Wrapped Nav Links for Home Page (Option 2) */}
      {isHomePage && (
        <nav className="lg:hidden flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-3 border-t border-beige/40 bg-cream/95 backdrop-blur-md text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[11px] uppercase tracking-widest font-medium transition-colors py-1 px-2.5 rounded-full border border-beige/60",
                pathname === link.href ? "text-gold bg-gold/15 border-gold font-semibold" : "text-charcoal bg-cream/50"
              )}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/#booking">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-white bg-gold py-1 px-3 rounded-full shadow-sm block">
              Book
            </span>
          </Link>
        </nav>
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
