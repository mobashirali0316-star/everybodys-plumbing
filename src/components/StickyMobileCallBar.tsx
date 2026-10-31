import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface StickyMobileCallBarProps {
  onOpenQuote: () => void;
}

export const StickyMobileCallBar: React.FC<StickyMobileCallBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-[#1A211D]/95 backdrop-blur-md border-t border-[#2A342E] shadow-lg">
      <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          id="mobile-call-action"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-md bg-[#D66A3A] active:bg-[#BF5729] text-white font-semibold text-xs tracking-wide transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-white" />
          <span>(904) 237-9164</span>
        </a>
        <button
          onClick={onOpenQuote}
          id="mobile-quote-action"
          type="button"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-md border border-white/20 bg-white/10 active:bg-white/20 text-white font-semibold text-xs transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 text-[#D66A3A]" />
          <span>Request Quote</span>
        </button>
      </div>
    </div>
  );
};

export default StickyMobileCallBar;
