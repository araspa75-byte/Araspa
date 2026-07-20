import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | ARA Spa',
  description: 'Terms of service and booking conditions for ARA Spa.',
};

export default function TermsPage() {
  return (
    <div className="py-24 bg-cream">
      <div className="container mx-auto px-4 max-w-4xl font-sans text-charcoal-light">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8">Terms & Conditions</h1>
        
        <div className="space-y-6 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-heading font-bold text-charcoal mt-8 mb-4">1. Appointments & Reservations</h2>
          <p>
            Advanced booking is highly recommended to ensure your preferred time and service is available. 
            A valid credit card may be required to hold your reservation.
          </p>

          <h2 className="text-2xl font-heading font-bold text-charcoal mt-8 mb-4">2. Cancellation Policy</h2>
          <p>
            We require a minimum of 24 hours notice to cancel or reschedule an appointment without penalty. 
            Cancellations made with less than 24 hours notice will be subject to a 50% charge of the reserved service amount. 
            No-shows will be charged 100% of the reserved service amount.
          </p>

          <h2 className="text-2xl font-heading font-bold text-charcoal mt-8 mb-4">3. Spa Etiquette</h2>
          <p>
            To maintain our peaceful atmosphere, we ask that you silence your mobile devices upon arrival. 
            Please arrive 15 minutes prior to your scheduled appointment time. Late arrivals will result in a 
            shortened treatment time to ensure the next guest is not delayed.
          </p>

          <h2 className="text-2xl font-heading font-bold text-charcoal mt-8 mb-4">4. Health Conditions</h2>
          <p>
            Please advise us of any health conditions, allergies, or injuries that could affect your service 
            when making your reservation. Our therapists will also conduct a brief consultation prior to your treatment.
          </p>
        </div>
      </div>
    </div>
  );
}
