import React from 'react';
import { cn } from './Button'; // Reusing cn utility
import { ScrollReveal } from './animations/ScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({ title, subtitle, align = 'center', className }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-4 mb-12', 
      align === 'center' ? 'items-center text-center' : 
      align === 'right' ? 'items-end text-right' : 'items-start text-left',
      className
    )}>
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className={cn(
            "text-lg text-charcoal-light max-w-2xl font-sans",
            align === 'center' ? 'mx-auto' : 
            align === 'right' ? 'ml-auto' : 'mr-auto'
          )}>
            {subtitle}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.3} width="fit-content">
        <div className="w-16 h-1 bg-gold rounded-full" />
      </ScrollReveal>
    </div>
  );
}
