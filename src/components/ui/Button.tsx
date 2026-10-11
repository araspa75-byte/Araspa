import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gold text-white hover:bg-gold-dark shadow-sm hover:shadow-luxury-gold hover:-translate-y-0.5",
        luxury:
          "bg-espresso text-ivory border border-gold/30 hover:border-gold hover:bg-charcoal hover:-translate-y-0.5 shadow-luxury",
        outline:
          "border border-espresso/30 text-espresso hover:border-espresso hover:bg-espresso hover:text-ivory hover:-translate-y-0.5",
        outlineGold:
          "border border-gold text-gold hover:bg-gold hover:text-white hover:-translate-y-0.5",
        ghost:
          "text-espresso hover:bg-linen/60 hover:text-espresso hover:-translate-y-0.5",
        link: "text-gold underline-offset-4 hover:underline",
        secondary:
          "bg-linen text-espresso hover:bg-taupe/20 hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-full",
        sm: "h-9 px-4 text-xs rounded-full",
        lg: "h-13 px-8 py-3.5 text-base rounded-full",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants, cn };
