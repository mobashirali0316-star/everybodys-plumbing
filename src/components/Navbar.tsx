import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  currentPage: 'home' | 'services' | 'about' | 'contact';
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
  onOpenQuote: (serviceName?: string) => void;
  onOpenBrandShowcase: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleLinkClick = (id: 'home' | 'services' | 'about' | 'contact') => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Very Slim Announcement Strip */}
      <div className="bg-[#1A211D] text-[#CBD0C9] text-[11px] font-medium tracking-wide py-1.5 px-4 border-b border-[#2A342E]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#D66A3A] font-semibold">Florida Lic. {COMPANY_INFO.license}</span>
            <span className="text-white/20 hidden sm:inline">/</span>
            <span className="hidden sm:inline text-white/70">
              Family Owned & Operated • Greater Jacksonville
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              id="top-phone-link"
              className="text-white hover:text-[#D66A3A] transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Phone className="w-3 h-3 text-[#D66A3A]" />
              <span>(904) 237-9164</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Clean, Refined Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F7F6F2]/95 backdrop-blur-md border-b border-[#E5E4DC] py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
            : 'bg-[#F7F6F2] border-b border-[#E5E4DC] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left focus:outline-none"
              aria-label="Everybody's Plumbing Company home"
            >
              <Logo variant="horizontal" theme="light" showLicense={false} />
            </button>

            {/* Center/Right Clean Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-sm font-medium transition-colors relative py-1 ${
                      isActive
                        ? 'text-[#202522] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#D66A3A]'
                        : 'text-[#737873] hover:text-[#202522]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Restrained Actions */}
            <div className="hidden sm:flex items-center gap-5">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-sm font-semibold text-[#202522] hover:text-[#D66A3A] transition-colors"
              >
                (904) 237-9164
              </a>

              <button
                onClick={() => onOpenQuote()}
                id="header-quote-btn"
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#202522] text-[#F7F6F2] text-xs font-semibold hover:bg-[#D66A3A] transition-colors"
              >
                <span>Request Service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-2 rounded-md bg-[#202522] text-white"
                aria-label="Call Everybody's Plumbing"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle-btn"
                className="p-2 text-[#202522] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E5E4DC] bg-[#F7F6F2] px-6 py-6 space-y-4">
            <div className="space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block w-full text-left py-2 text-base font-medium transition-colors ${
                      isActive ? 'text-[#D66A3A] font-semibold' : 'text-[#202522]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#E5E4DC] space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#D66A3A] text-white font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call (904) 237-9164</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-2.5 rounded-md border border-[#202522] text-[#202522] text-xs font-semibold"
              >
                Request an Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
