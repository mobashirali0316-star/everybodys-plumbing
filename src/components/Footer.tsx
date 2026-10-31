import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
  onOpenQuote: (serviceName?: string) => void;
  onOpenBrandShowcase: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: 'home' | 'services' | 'about' | 'contact') => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141A17] text-[#A6ACA5] pt-16 pb-12 border-t border-[#232A26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#232A26]">
          {/* Brand & Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left focus:outline-none"
              aria-label="Everybody's Plumbing Home"
            >
              <Logo variant="horizontal" theme="dark" showLicense={false} />
            </button>
            <p className="text-xs sm:text-sm text-[#A6ACA5] leading-relaxed max-w-sm pt-1">
              Everybody's Plumbing Company, Inc. is a small, family owned and operated plumbing business based in Jacksonville, Florida. Providing honest plumbing service and craftsmanship for residential and commercial customers.
            </p>
            <div className="text-xs text-[#737873]">
              State of Florida Certified Plumbing Contractor <span className="text-[#D66A3A] font-mono font-medium">CFC 1428104</span>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-white transition-colors"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenQuote()}
                  className="text-[#D66A3A] hover:underline"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 4).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="hover:text-white transition-colors text-left"
                  >
                    {srv.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Office & Dispatch
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-white hover:text-[#D66A3A] font-semibold flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D66A3A]" />
                <span>(904) 237-9164</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-[#CBD0C9] hover:text-white flex items-center gap-2 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#737873]" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="text-[#A6ACA5] flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#737873] shrink-0 mt-0.5" />
                <span>7014 Macbeth Rd<br />Jacksonville, FL 32244</span>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D66A3A] hover:underline"
                >
                  <span>Follow us on Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737873]">
          <div>
            © {currentYear} Everybody's Plumbing Company, Inc. All rights reserved.
          </div>
          <div>
            Florida Licensed Plumbing Contractor CFC 1428104
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
