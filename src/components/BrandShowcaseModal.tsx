import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Logo } from './Logo';

interface BrandShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandShowcaseModal: React.FC<BrandShowcaseModalProps> = ({ isOpen, onClose }) => {
  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark'>('light');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#1A211D]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-2xl border border-[#E5E4DC] overflow-hidden z-10 max-h-[92vh] flex flex-col text-[#202522]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E4DC] bg-[#F7F6F2]">
          <div>
            <h2 className="text-lg font-serif font-medium text-[#202522]">
              Identity Preservation & Vector Modernization
            </h2>
            <p className="text-xs text-[#737873]">
              Comparing the legacy raster mark with the refined architectural SVG seal
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-[#737873] hover:text-[#202522] hover:bg-[#EAE8E0] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="p-4 bg-[#F7F6F2] rounded border border-[#E5E4DC] text-xs text-[#737873] leading-relaxed">
            <strong className="text-[#202522]">Heritage Principle: </strong>
            We preserved every recognizable element of the original brand identity: the circular seal format, the outdoor sillcock faucet, the falling water drop, and the angled pipe wrench. We corrected distorted kerning, refined the mechanical silhouettes, and engineered an infinitely scalable SVG component.
          </div>

          {/* Before vs After */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Original */}
            <div className="p-6 rounded border border-[#E5E4DC] bg-[#F7F6F2] flex flex-col items-center text-center">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#737873] mb-4">
                Original Supplied Bitmap
              </span>
              <div className="w-40 h-40 my-auto flex items-center justify-center p-3 bg-white rounded border border-[#E5E4DC]">
                <img
                  src="/images/original-logo.png"
                  alt="Original Everybody's Plumbing Logo"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="mt-4 text-[11px] text-[#737873] space-y-1 text-left w-full">
                <div>• 140×160px low-resolution raster file</div>
                <div>• Jagged edges on faucet spout & wrench</div>
                <div>• Uneven letterform spacing along curve</div>
              </div>
            </div>

            {/* Refined */}
            <div className="p-6 rounded border-2 border-[#D66A3A]/40 bg-white flex flex-col items-center text-center">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D66A3A] font-semibold mb-4">
                Refined Vector Seal (Scalable SVG)
              </span>
              <div className="w-40 h-40 my-auto flex items-center justify-center">
                <Logo variant="badge" theme={previewTheme} showLicense={false} />
              </div>
              <div className="mt-4 text-[11px] text-[#202522] space-y-1 text-left w-full">
                <div className="flex items-center gap-1.5 text-[#245831]">
                  <Check className="w-3.5 h-3.5" /> <span>Crisp on 4K, Retina, & mobile screens</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#245831]">
                  <Check className="w-3.5 h-3.5" /> <span>Mathematically aligned curved lettering</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#245831]">
                  <Check className="w-3.5 h-3.5" /> <span>Engineered faucet, wrench, & copper drop</span>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Inspector */}
          <div className="p-5 bg-[#F7F6F2] rounded border border-[#E5E4DC] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#202522]">
                Inspect Horizontal Navbar Lockup
              </span>
              <div className="flex items-center gap-1 text-xs">
                <button
                  type="button"
                  onClick={() => setPreviewTheme('light')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    previewTheme === 'light' ? 'bg-[#202522] text-white' : 'text-[#737873] hover:text-[#202522]'
                  }`}
                >
                  Light Surface
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewTheme('dark')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    previewTheme === 'dark' ? 'bg-[#202522] text-white' : 'text-[#737873] hover:text-[#202522]'
                  }`}
                >
                  Dark Surface
                </button>
              </div>
            </div>

            <div className={`p-6 rounded border transition-colors flex items-center justify-center ${
              previewTheme === 'dark' ? 'bg-[#1A211D] border-[#2A342E]' : 'bg-white border-[#E5E4DC]'
            }`}>
              <Logo variant="horizontal" theme={previewTheme} showLicense={true} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#E5E4DC] bg-[#F7F6F2] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[#202522] hover:bg-[#D66A3A] text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandShowcaseModal;
