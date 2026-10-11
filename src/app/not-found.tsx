import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-28 bg-ivory px-4 text-center">
      <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-2">
        Error 404
      </span>
      <h1 className="text-7xl md:text-8xl font-heading font-medium text-espresso mb-4">
        Page Not Found
      </h1>
      <p className="text-charcoal-light font-sans max-w-md mx-auto mb-8 leading-relaxed">
        The sanctuary page you are looking for has been moved or does not exist.
      </p>
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="luxury" size="lg" className="text-xs uppercase tracking-widest px-8">
            Return to Sanctuary Home
          </Button>
        </Link>
        <Link href="/services">
          <Button variant="outline" size="lg" className="text-xs uppercase tracking-widest px-6">
            View Treatments
          </Button>
        </Link>
      </div>
    </div>
  );
}
