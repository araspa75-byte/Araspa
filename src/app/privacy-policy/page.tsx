import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ARA Spa',
  description: 'Privacy policy and data protection guidelines for ARA Spa.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-24 bg-cream">
      <div className="container mx-auto px-4 max-w-4xl font-sans text-charcoal-light">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-heading font-bold text-charcoal mt-8 mb-4">1. Introduction</h2>
          <p>
            ARA Spa & Wellness ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights.
          </p>

          <h2 className="text-2xl font-heading font-bold text-charcoal mt-8 mb-4">2. The Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-charcoal mt-8 mb-4">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking an appointment).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <p className="mt-12 text-sm">
            For more information, please contact us at Araspa75@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
