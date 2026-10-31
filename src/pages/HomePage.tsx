import React, { useState } from 'react';
import { 
  Phone, 
  ArrowUpRight, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck 
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { COMPANY_INFO, FAQS } from '../data/companyData';

interface HomePageProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
  onOpenQuote: (serviceName?: string) => void;
  onOpenBrandShowcase: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F7F6F2] text-[#202522]">
      {/* 1. HERO SECTION (Sophisticated Split Layout) */}
      <section className="border-b border-[#E5E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Eyebrow, Headline, Description, CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#737873]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D66A3A]" />
                <span>Jacksonville, FL • Family Owned & Operated</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-serif leading-[1.12] tracking-tight text-[#202522]">
                Plumbing problems?{' '}
                <span className="italic font-normal text-[#D66A3A]">
                  Let's get them taken care of.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#737873] leading-relaxed max-w-xl font-sans">
                From clogged drains to plumbing installations, Everybody's Plumbing Company is here to help with your residential and commercial plumbing needs throughout Greater Jacksonville.
              </p>

              {/* Restrained CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  id="hero-call-btn"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#202522] text-[#F7F6F2] text-sm font-semibold hover:bg-[#D66A3A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D66A3A]" />
                  <span>Call (904) 237-9164</span>
                </a>

                <button
                  onClick={() => onOpenQuote()}
                  id="hero-quote-btn"
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-[#202522] text-[#202522] text-sm font-semibold hover:bg-[#EAE8E0] transition-colors"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-4 h-4 text-[#737873]" />
                </button>
              </div>

              {/* License Notice */}
              <div className="pt-2 text-xs text-[#737873] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D66A3A]" />
                <span>State Certified Plumbing Contractor License CFC 1428104</span>
              </div>
            </div>

            {/* Right Column: Clean Architectural Photography */}
            <div className="lg:col-span-6">
              <div className="relative border border-[#E5E4DC] p-2 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] rounded-lg">
                <img
                  src="/images/hero-plumbing.jpg"
                  alt="Professional technician inspecting residential plumbing"
                  className="w-full h-[400px] sm:h-[480px] object-cover rounded"
                />
                <div className="p-3 bg-white border-t border-[#E5E4DC] flex items-center justify-between text-xs text-[#737873]">
                  <span>Residential Kitchen & Under-Sink Plumbing</span>
                  <span className="font-mono text-[11px] text-[#202522]">Duval County, FL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="border-b border-[#E5E4DC] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs sm:text-sm font-medium text-[#202522]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D66A3A]" />
              <span>Family Owned & Operated</span>
            </div>
            <span className="text-[#E5E4DC] hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D66A3A]" />
              <span>Residential & Commercial Plumbing</span>
            </div>
            <span className="text-[#E5E4DC] hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D66A3A]" />
              <span>Licensed Contractor CFC 1428104</span>
            </div>
            <span className="text-[#E5E4DC] hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D66A3A]" />
              <span>Direct Customer Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES (Editorial Asymmetric Layout) */}
      <section className="py-20 border-b border-[#E5E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E4DC]">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#737873]">
                Our Practice Areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#202522]">
                Comprehensive Plumbing Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#202522] hover:text-[#D66A3A] transition-colors self-start md:self-auto"
            >
              <span>Explore All Verified Services</span>
              <ArrowRight className="w-4 h-4 text-[#D66A3A]" />
            </button>
          </div>

          {/* Asymmetric Composition */}
          <div className="space-y-8">
            {/* Feature 1: Wide Showcase for Drain Cleaning */}
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-[#E5E4DC] rounded-lg overflow-hidden">
              <div className="lg:col-span-7 h-72 lg:h-[400px]">
                <img
                  src="/images/drain-cleaning.jpg"
                  alt="Professional drain cleaning and camera inspection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#D66A3A]">
                    Primary Specialization
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#202522]">
                    Drain Cleaning & Mechanical Snaking
                  </h3>
                  <p className="text-sm text-[#737873] leading-relaxed">
                    Fast, effective clearing of stopped up kitchen sinks, bathroom tubs, and main drain branch lines. We use motorized augers to safely remove blockages without harsh pipe-damaging chemicals.
                  </p>
                  <ul className="pt-2 space-y-1.5 text-xs text-[#202522]">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D66A3A]" />
                      <span>Slow drains and standing water cleared</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D66A3A]" />
                      <span>Foreign object and buildup removal</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E5E4DC] flex items-center justify-between">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-xs font-bold text-[#202522] hover:text-[#D66A3A] flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D66A3A]" />
                    <span>Call (904) 237-9164</span>
                  </a>
                  <button
                    onClick={() => onOpenQuote('Drain Cleaning & Snaking')}
                    className="text-xs font-semibold text-[#737873] hover:text-[#202522] underline"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Asymmetric Pair: Water Heaters & Pipe Repairs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card A: Water Heaters */}
              <div className="bg-white border border-[#E5E4DC] rounded-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="h-60 overflow-hidden">
                    <img
                      src="/images/water-heater.jpg"
                      alt="Water heater installation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#D66A3A]">
                      Water Systems
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#202522]">
                      Water Heater Repair & Replacement
                    </h3>
                    <p className="text-sm text-[#737873] leading-relaxed">
                      Troubleshooting heating elements, pressure valves, and thermostat issues on electric and tankless water heaters. Safe code-compliant replacements.
                    </p>
                  </div>
                </div>
                <div className="p-7 pt-0 border-t border-[#E5E4DC]/60 flex items-center justify-between">
                  <button
                    onClick={() => onOpenQuote('Water Heater Repair & Replacement')}
                    className="text-xs font-bold text-[#202522] hover:text-[#D66A3A]"
                  >
                    Inquire About Water Heaters &rarr;
                  </button>
                </div>
              </div>

              {/* Card B: Pipe Repairs & Leak Detection */}
              <div className="bg-white border border-[#E5E4DC] rounded-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="h-60 overflow-hidden">
                    <img
                      src="/images/pipe-repairs.jpg"
                      alt="Plumber diagnosing pipe leaks"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#D66A3A]">
                      Repairs & Diagnostics
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#202522]">
                      Water Pipe Repairs & Leak Detection
                    </h3>
                    <p className="text-sm text-[#737873] leading-relaxed">
                      Accurate localization of pinhole leaks, failing supply valves, running toilets, and dripping faucets. Quality copper and PEX pipe solutions.
                    </p>
                  </div>
                </div>
                <div className="p-7 pt-0 border-t border-[#E5E4DC]/60 flex items-center justify-between">
                  <button
                    onClick={() => onOpenQuote('Pipe Repair & Leak Detection')}
                    className="text-xs font-bold text-[#202522] hover:text-[#D66A3A]"
                  >
                    Inquire About Pipe Repairs &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Row: Fixtures & Commercial Maintenance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fixture Installations */}
              <div className="p-7 bg-white border border-[#E5E4DC] rounded-lg space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#D66A3A]">
                  Installations
                </div>
                <h3 className="text-xl font-serif text-[#202522]">
                  Fixture Replacement & Renovations
                </h3>
                <p className="text-sm text-[#737873] leading-relaxed">
                  Installing new customer-supplied faucets, sinks, comfort-height toilets, garbage disposals, and renovation trim-outs.
                </p>
              </div>

              {/* Commercial Plumbing */}
              <div className="p-7 bg-white border border-[#E5E4DC] rounded-lg space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#D66A3A]">
                  Commercial
                </div>
                <h3 className="text-xl font-serif text-[#202522]">
                  Commercial Plumbing Maintenance
                </h3>
                <p className="text-sm text-[#737873] leading-relaxed">
                  Dependable service for offices, retail stores, restaurants, and light commercial spaces across Jacksonville.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT THE COMPANY (Two-Column Human Composition) */}
      <section className="py-20 border-b border-[#E5E4DC] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Authentic Human-Focused Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#737873]">
                About The Business
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#202522]">
                A Small, Family-Owned Plumbing Company Focused on Customer Service
              </h2>

              <blockquote className="border-l-2 border-[#D66A3A] pl-5 py-1 text-base text-[#202522] italic font-serif">
                "At Everybody’s Plumbing we pride ourselves with great customer service. We are a small, family owned and operated company here to address all your plumbing needs. From snaking a drain to installing new fixtures in your home or business, we are here to help."
              </blockquote>

              <p className="text-sm text-[#737873] leading-relaxed">
                We believe you deserve honest advice, direct communication with your plumber, and reliable repairs without high-pressure sales pitches or mystery fees. We treat every home and commercial property in Duval County with genuine care.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#F7F6F2] rounded border border-[#E5E4DC]">
                  <div className="font-bold text-[#202522]">Gerald Ward</div>
                  <div className="text-[#737873]">Licensed Master Plumber</div>
                </div>
                <div className="p-4 bg-[#F7F6F2] rounded border border-[#E5E4DC]">
                  <div className="font-bold text-[#202522]">CFC 1428104</div>
                  <div className="text-[#737873]">Florida DBPR Certified</div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#202522] hover:text-[#D66A3A] underline"
                >
                  <span>Learn more about our approach</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Brand Seal & Craftsmanship */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md p-8 bg-[#F7F6F2] border border-[#E5E4DC] rounded-lg text-center space-y-6">
                <div className="flex justify-center">
                  <Logo variant="badge" theme="light" showLicense={true} />
                </div>
                <div className="text-xs text-[#737873] space-y-1 border-t border-[#E5E4DC] pt-4">
                  <div className="font-medium text-[#202522]">Everybody's Plumbing Company, Inc.</div>
                  <div>7014 Macbeth Rd, Jacksonville, FL 32244</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (Clean Typography & Simple Details) */}
      <section className="py-20 border-b border-[#E5E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#737873]">
              Standards of Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#202522]">
              Why Work With Everybody's Plumbing
            </h2>
            <p className="text-sm text-[#737873]">
              We take pride in doing honest work at fair prices for our local neighbors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-[#E5E4DC] rounded-lg space-y-3">
              <div className="w-8 h-8 rounded bg-[#F7F6F2] border border-[#E5E4DC] flex items-center justify-center text-xs font-serif font-bold text-[#D66A3A]">
                01
              </div>
              <h3 className="text-lg font-serif text-[#202522]">
                Personal Accountability
              </h3>
              <p className="text-xs sm:text-sm text-[#737873] leading-relaxed">
                As a family-owned business, our reputation is in our name. You speak directly with the tradespeople doing your work.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E4DC] rounded-lg space-y-3">
              <div className="w-8 h-8 rounded bg-[#F7F6F2] border border-[#E5E4DC] flex items-center justify-center text-xs font-serif font-bold text-[#D66A3A]">
                02
              </div>
              <h3 className="text-lg font-serif text-[#202522]">
                Florida State Certified
              </h3>
              <p className="text-xs sm:text-sm text-[#737873] leading-relaxed">
                Holding License CFC 1428104, every repair and installation adheres strictly to the Florida Plumbing Code.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E4DC] rounded-lg space-y-3">
              <div className="w-8 h-8 rounded bg-[#F7F6F2] border border-[#E5E4DC] flex items-center justify-center text-xs font-serif font-bold text-[#D66A3A]">
                03
              </div>
              <h3 className="text-lg font-serif text-[#202522]">
                Straightforward Guidance
              </h3>
              <p className="text-xs sm:text-sm text-[#737873] leading-relaxed">
                No commissioned sales scripts. We explain repair vs. replacement options clearly before any tool touches your plumbing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS (3 Clean Steps) */}
      <section className="py-20 border-b border-[#E5E4DC] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#737873]">
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#202522]">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold text-[#D66A3A]">STEP 01</div>
              <h3 className="text-lg font-serif text-[#202522]">Contact Our Office</h3>
              <p className="text-xs sm:text-sm text-[#737873] leading-relaxed">
                Call (904) 237-9164 or send a brief online inquiry describing what is happening with your fixtures or drain.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold text-[#D66A3A]">STEP 02</div>
              <h3 className="text-lg font-serif text-[#202522]">Discuss Needs & Schedule</h3>
              <p className="text-xs sm:text-sm text-[#737873] leading-relaxed">
                We review your repair or installation requirements, provide honest pricing guidance, and arrange a service visit.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold text-[#D66A3A]">STEP 03</div>
              <h3 className="text-lg font-serif text-[#202522]">Quality Service & Clean Finish</h3>
              <p className="text-xs sm:text-sm text-[#737873] leading-relaxed">
                Our technician completes the work cleanly, tests water pressure and flow, and leaves your property tidy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA (Distinctive Dark Accent Section) */}
      <section className="py-20 bg-[#1A211D] text-[#F7F6F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D66A3A]">
            <span>Direct Scheduling</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white">
            Let's get your plumbing back in order.
          </h2>

          <p className="text-base sm:text-lg text-[#CBD0C9] max-w-2xl mx-auto leading-relaxed">
            Call our Jacksonville office directly to schedule an appointment, or submit a request online. We respond promptly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              id="cta-dark-phone-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-[#D66A3A] hover:bg-[#C0582B] text-white font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(904) 237-9164</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              id="cta-dark-quote-btn"
              type="button"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <span>Request Service Online</span>
              <ArrowUpRight className="w-4 h-4 text-[#D66A3A]" />
            </button>
          </div>

          <div className="pt-4 text-xs text-[#737873]">
            7014 Macbeth Rd, Jacksonville, FL 32244 • Florida License CFC 1428104
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#737873]">
              Common Questions
            </span>
            <h2 className="text-3xl font-serif text-[#202522]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[#E5E4DC] border-y border-[#E5E4DC]">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#202522] focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#D66A3A] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#737873] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="pt-3 text-xs sm:text-sm text-[#737873] leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
