import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-24 bg-cream px-4 text-center">
      <h1 className="text-8xl font-heading font-bold text-gold mb-6">404</h1>
      <SectionHeading 
        title="Page Not Found" 
        subtitle="The page you are looking for does not exist or has been moved."
      />
      <div className="mt-8">
        <Link href="/">
          <Button size="lg">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
}
