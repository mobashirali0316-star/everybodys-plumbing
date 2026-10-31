import React, { useState } from 'react';
import { X, CheckCircle, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'residential',
    serviceNeeded: preselectedService || 'Drain Cleaning & Snaking',
    urgency: 'standard',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ id: string; timestamp: string } | null>(null);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for dispatch follow-up.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of the plumbing issue.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const inquiryId = `EPC-${Math.floor(100000 + Math.random() * 900000)}`;
      const payload = {
        id: inquiryId,
        timestamp: new Date().toISOString(),
        ...formData,
      };

      try {
        const existing = JSON.parse(localStorage.getItem('epc_inquiries') || '[]');
        existing.push(payload);
        localStorage.setItem('epc_inquiries', JSON.stringify(existing));
      } catch {
        // storage fallback
      }

      setIsSubmitting(false);
      setSubmittedData({ id: inquiryId, timestamp: new Date().toLocaleTimeString() });
    }, 500);
  };

  const resetAndClose = () => {
    setSubmittedData(null);
    setErrors({});
    onClose();
  };

  const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `Plumbing Service Inquiry [${formData.serviceNeeded}] - ${formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProperty: ${formData.propertyType}\nService: ${formData.serviceNeeded}\nUrgency: ${formData.urgency}\n\nDetails:\n${formData.message}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#1A211D]/80 backdrop-blur-sm transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-lg shadow-xl border border-[#E5E4DC] overflow-hidden z-10 max-h-[92vh] flex flex-col text-[#202522]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E4DC] bg-[#F7F6F2]">
          <div>
            <h2 className="text-lg font-serif font-medium text-[#202522]">
              Request a Service Appointment
            </h2>
            <p className="text-xs text-[#737873]">
              Everybody's Plumbing Company, Inc. • Lic. CFC 1428104
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded text-[#737873] hover:text-[#202522] hover:bg-[#EAE8E0] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submittedData ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-[#F7F6F2] text-[#D66A3A] border border-[#E5E4DC] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-serif text-[#202522]">
                  Request Received
                </h3>
                <p className="text-xs text-[#737873] max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-[#202522]">{formData.name}</span>. Reference ID: <span className="font-mono text-[#D66A3A]">#{submittedData.id}</span>. We will follow up promptly.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#202522] text-white text-xs font-semibold hover:bg-[#D66A3A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call (904) 237-9164</span>
                </a>
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-[#E5E4DC] text-xs font-semibold text-[#202522] hover:bg-[#F7F6F2]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#737873]" />
                  <span>Send Email Copy</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#202522] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3 py-2 rounded text-xs border border-[#E5E4DC] bg-[#F7F6F2] focus:bg-white focus:outline-none focus:border-[#202522]"
                  />
                  {errors.name && <p className="text-[11px] text-[#D66A3A] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202522] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(904) 555-0199"
                    className="w-full px-3 py-2 rounded text-xs border border-[#E5E4DC] bg-[#F7F6F2] focus:bg-white focus:outline-none focus:border-[#202522]"
                  />
                  {errors.phone && <p className="text-[11px] text-[#D66A3A] mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#202522] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 rounded text-xs border border-[#E5E4DC] bg-[#F7F6F2] focus:bg-white focus:outline-none focus:border-[#202522]"
                  />
                  {errors.email && <p className="text-[11px] text-[#D66A3A] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202522] mb-1">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                      className={`py-2 px-3 rounded text-xs font-medium border transition-colors ${
                        formData.propertyType === 'residential'
                          ? 'border-[#202522] bg-[#202522] text-white'
                          : 'border-[#E5E4DC] bg-[#F7F6F2] text-[#737873]'
                      }`}
                    >
                      Residential
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                      className={`py-2 px-3 rounded text-xs font-medium border transition-colors ${
                        formData.propertyType === 'commercial'
                          ? 'border-[#202522] bg-[#202522] text-white'
                          : 'border-[#E5E4DC] bg-[#F7F6F2] text-[#737873]'
                      }`}
                    >
                      Commercial
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202522] mb-1">
                  Service Needed
                </label>
                <select
                  value={formData.serviceNeeded}
                  onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                  className="w-full px-3 py-2 rounded text-xs border border-[#E5E4DC] bg-[#F7F6F2] focus:bg-white focus:outline-none focus:border-[#202522]"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name}
                    </option>
                  ))}
                  <option value="General Plumbing Inquiry">General Plumbing Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202522] mb-1">
                  Describe What Is Happening *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Clogged kitchen sink, replacing master bath faucet, no hot water..."
                  className="w-full px-3 py-2 rounded text-xs border border-[#E5E4DC] bg-[#F7F6F2] focus:bg-white focus:outline-none focus:border-[#202522]"
                />
                {errors.message && <p className="text-[11px] text-[#D66A3A] mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#737873]">
                  Direct call: <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#202522] font-semibold underline">(904) 237-9164</a>
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 rounded bg-[#202522] hover:bg-[#D66A3A] text-white text-xs font-semibold transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
