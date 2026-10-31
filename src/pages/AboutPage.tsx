import React from 'react';
import { ShieldCheck, MapPin, Phone, Check } from 'lucide-react';
import { Logo } from '../components/Logo';
import { COMPANY_INFO } from '../data/companyData';

interface AboutPageProps {
  onOpenQuote: () => void;
  onOpenBrandShowcase: () => void;
  onNavigate?: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenQuote,
}) => {
  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] text-[#202522]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E5E4DC] pb-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D66A3A]">
            About The Company • Jacksonville, Florida
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#202522]">
            Small, Family-Owned & Dedicated to Customer Service
          </h1>
          <p className="text-base sm:text-lg text-[#737873] leading-relaxed">
            Personal service, honest advice, and dependable craftsmanship for our neighbors in Jacksonville and Northeast Florida.
          </p>
        </div>
      </section>

      {/* Main Two-Column Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Copy */}
          <div className="lg:col-span-7 space-y-6">
            <blockquote className="border-l-2 border-[#D66A3A] pl-5 py-1 text-lg sm:text-xl font-serif text-[#202522] italic">
              "At Everybody’s Plumbing we pride ourselves with great customer service. We are a small, family owned and operated company here to address all your plumbing needs. From snaking a drain to installing new fixtures in your home or business, we are here to help."
            </blockquote>

            <div className="space-y-4 text-sm text-[#737873] leading-relaxed">
              <p>
                Many homeowners in Jacksonville have experienced the frustration of dealing with large corporate plumbing chains: high-pressure technicians working on commission, inflated estimates for unnecessary repiping, and dispatchers who don't understand the real problem.
              </p>

              <p>
                <strong className="text-[#202522]">Everybody's Plumbing Company</strong> was founded on the opposite principle: approachable, trustworthy neighborhood plumbing. When you call our office, you speak with professionals who treat your home with the same care and respect they would show their own family.
              </p>

              <p>
                Whether you have an emergency drain stoppage at dinner time, a leaking faucet keeping you awake at night, or a complete fixture upgrade for your business, we arrive with practical solutions and upfront communication.
              </p>
            </div>

            {/* Standards of Craft */}
            <div className="pt-4 border-t border-[#E5E4DC] space-y-3">
              <h3 className="text-base font-serif font-bold text-[#202522]">
                Our Guiding Principles
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#737873]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D66A3A] shrink-0 mt-0.5" />
                  <span><strong>No Sales Pressure:</strong> We recommend repairs when repairs make sense, and replacements only when truly necessary.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D66A3A] shrink-0 mt-0.5" />
                  <span><strong>Florida Licensed & Insured:</strong> State Certified Plumbing Contractor CFC 1428104 backed by genuine trade mastery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D66A3A] shrink-0 mt-0.5" />
                  <span><strong>Clean Job Sites:</strong> We respect your home or business, keeping work areas tidy and protecting your flooring.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Visual Brand Seal & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-white border border-[#E5E4DC] rounded-lg text-center space-y-6">
              <div className="flex justify-center">
                <Logo variant="badge" theme="light" showLicense={true} />
              </div>
              <div className="border-t border-[#E5E4DC] pt-5 text-left space-y-3 text-xs text-[#737873]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D66A3A]" />
                  <span>License: <strong className="text-[#202522]">CFC 1428104</strong> (Certified Plumbing Contractor)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#737873]" />
                  <span>Location: <strong className="text-[#202522]">7014 Macbeth Rd, Jacksonville, FL</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#737873]" />
                  <span>Phone: <strong className="text-[#202522]">(904) 237-9164</strong></span>
                </div>
              </div>
            </div>

            {/* Photo highlight */}
            <div className="border border-[#E5E4DC] rounded-lg overflow-hidden bg-white">
              <img
                src="/images/bathroom-fixtures.jpg"
                alt="Clean residential plumbing installation"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-xs text-[#737873]">
                Precision fixture trim-out and residential bathroom plumbing in Jacksonville, FL.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 sm:p-12 bg-white border border-[#E5E4DC] rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-serif text-[#202522]">
              Need a plumber you can trust?
            </h3>
            <p className="text-xs sm:text-sm text-[#737873]">
              Speak directly with our team to discuss your plumbing repair or upcoming fixture project.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-3 rounded bg-[#202522] hover:bg-[#D66A3A] text-white text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (904) 237-9164</span>
            </a>
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-3 rounded border border-[#E5E4DC] text-[#202522] text-xs font-semibold hover:bg-[#F7F6F2] transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
