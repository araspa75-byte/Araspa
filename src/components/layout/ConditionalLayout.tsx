"use client";

import { usePathname } from 'next/navigation';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTAs } from "@/components/layout/FloatingCTAs";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isAdminRoute = pathname.startsWith('/admin') || 
                       pathname.startsWith('/appointments-view') || 
                       pathname.startsWith('/login');

  if (isAdminRoute) {
    return (
      <main className="flex-grow">
        {children}
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[88px] md:pt-[104px]">
        {children}
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}
