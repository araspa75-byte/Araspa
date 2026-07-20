"use client";

import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
      <div 
        className="fixed inset-0 bg-charcoal-dark/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-cream w-full max-w-lg rounded-xl shadow-2xl border border-beige overflow-hidden transform transition-all">
        <div className="px-6 py-4 border-b border-gold/20 flex justify-between items-center bg-beige">
          <h3 className="text-xl font-heading font-bold text-charcoal">{title}</h3>
          <button 
            onClick={onClose}
            className="text-charcoal-light hover:text-charcoal transition-colors p-1 rounded-md hover:bg-gold/10"
          >
            <X size={20} />
          </button>
        </div>
        <div className="px-6 py-6 font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}
