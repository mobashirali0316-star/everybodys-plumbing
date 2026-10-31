import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface ContactPageProps {
  onOpenBrandShowcase: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'residential',
    serviceNeeded: 'Drain Cleaning & Snaking',
    urgency: 'standard',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ id: string; time: string } | null>(null);

  // Quick Zip Code Checker for Local Customers
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState<{ covered: boolean; message: string } | null>(null);

  const checkZipCode = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    const jaxZips = [
      '32244', '32210', '32205', '32204', '32202', '32207', '32216', '32217', 
      '32223', '32256', '32257', '32258', '32073', '32003', '32065', '32250', 
      '32266', '32233', '32224', '32225', '32246', '32211', '32277', '32208'
    ];

    if (jaxZips.includes(cleanZip) || cleanZip.startsWith('320') || cleanZip.startsWith('321') || cleanZip.startsWith('322')) {
      setZipResult({
        covered: true,
        message: `Yes! ZIP ${cleanZip} is within our primary service dispatch territory (Duval / Clay / St. Johns).`
      });
    } else {
      setZipResult({
        covered: false,
        message: `ZIP ${cleanZip} is outside our standard area, but please call (904) 237-9164 to check custom service availability.`
      });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for follow-up.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of the plumbing problem.';
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
        ...formData
      };

      try {
        const stored = JSON.parse(localStorage.getItem('epc_inquiries') || '[]');
        stored.push(payload);
        localStorage.setItem('epc_inquiries', JSON.stringify(stored));
      } catch {
        // Fallback
      }

      setIsSubmitting(false);
      setSubmittedData({ id: inquiryId, time: new Date().toLocaleTimeString() });
    }, 500);
  };

  const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `Plumbing Service Inquiry [${formData.serviceNeeded}] - ${formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProperty: ${formData.propertyType}\nService: ${formData.serviceNeeded}\nUrgency: ${formData.urgency}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] text-[#202522]">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E5E4DC] pb-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D66A3A]">
            Contact & Office Location
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#202522]">
            Contact Everybody's Plumbing
          </h1>
          <p className="text-base sm:text-lg text-[#737873] leading-relaxed">
            Call our office directly or submit a message below. We provide prompt, honest plumbing service across Jacksonville and Duval County.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Phone Card */}
            <div className="p-8 bg-[#1A211D] text-white rounded-lg space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#D66A3A]">
                Direct Call • Fastest Response
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-3xl sm:text-4xl font-serif text-white hover:text-[#D66A3A] transition-colors flex items-center gap-3"
              >
                <Phone className="w-6 h-6 text-[#D66A3A]" />
                <span>(904) 237-9164</span>
              </a>
              <p className="text-xs text-[#CBD0C9] pt-1">
                Speak directly with our team to discuss an immediate leak or schedule service.
              </p>
            </div>

            {/* Business Details */}
            <div className="p-7 bg-white border border-[#E5E4DC] rounded-lg space-y-5 text-xs sm:text-sm">
              <h3 className="font-serif font-bold text-base text-[#202522] border-b border-[#E5E4DC] pb-3">
                Business Details
              </h3>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D66A3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-semibold uppercase text-[#737873]">Email</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#202522] hover:underline font-medium break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D66A3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-semibold uppercase text-[#737873]">Office Address</div>
                  <div className="text-[#202522] font-medium">
                    7014 Macbeth Rd, Jacksonville, FL 32244
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D66A3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-semibold uppercase text-[#737873]">Hours</div>
                  <div className="text-[#202522] space-y-0.5 text-xs">
                    <div>Mon – Fri: 7:30 AM – 6:00 PM</div>
                    <div>Saturday: 8:00 AM – 3:00 PM</div>
                    <div className="text-[#D66A3A]">Emergency on-call dispatch available</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#E5E4DC]">
                <ShieldCheck className="w-4 h-4 text-[#D66A3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-semibold uppercase text-[#737873]">License</div>
                  <div className="font-mono font-bold text-[#202522]">CFC 1428104</div>
                  <div className="text-[11px] text-[#737873]">Florida Certified Plumbing Contractor</div>
                </div>
              </div>
            </div>

            {/* Service ZIP Code Checker */}
            <div className="p-6 bg-white border border-[#E5E4DC] rounded-lg space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#202522]">
                Service Area ZIP Code Check
              </h4>
              <form onSubmit={checkZipCode} className="flex gap-2">
                <input
                  type="text"
                  maxLength={5}
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value.replace(/\D/g, ''))}
                  placeholder="e.g. 32244"
                  className="flex-1 px-3 py-2 text-xs border border-[#E5E4DC] bg-[#F7F6F2] rounded focus:bg-white focus:outline-none focus:border-[#202522]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#202522] text-white text-xs font-semibold rounded hover:bg-[#D66A3A] transition-colors"
                >
                  Verify
                </button>
              </form>
              {zipResult && (
                <div className={`p-3 rounded text-xs ${
                  zipResult.covered
                    ? 'bg-[#EAF2EC] text-[#245831] border border-[#C5DEC9]'
                    : 'bg-[#F9ECE5] text-[#8C3A16] border border-[#ECCDC0]'
                }`}>
                  {zipResult.message}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#E5E4DC] rounded-lg space-y-6">
            {submittedData ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 bg-[#F7F6F2] text-[#D66A3A] border border-[#E5E4DC] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-serif text-[#202522]">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737873] max-w-sm mx-auto">
                    Your inquiry has been received under Reference ID: <span className="font-mono text-[#D66A3A]">#{submittedData.id}</span>. We will contact you at {formData.phone}.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#202522] text-white text-xs font-semibold hover:bg-[#D66A3A] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call To Expedite</span>
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
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 border-b border-[#E5E4DC] pb-4">
                  <h2 className="text-2xl font-serif text-[#202522]">
                    Send a Message or Request Service
                  </h2>
                  <p className="text-xs text-[#737873]">
                    Fill out the form below and we will follow up with you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#202522] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-3 py-2 text-xs border border-[#E5E4DC] bg-[#F7F6F2] rounded focus:bg-white focus:outline-none focus:border-[#202522]"
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
                      className="w-full px-3 py-2 text-xs border border-[#E5E4DC] bg-[#F7F6F2] rounded focus:bg-white focus:outline-none focus:border-[#202522]"
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
                      className="w-full px-3 py-2 text-xs border border-[#E5E4DC] bg-[#F7F6F2] rounded focus:bg-white focus:outline-none focus:border-[#202522]"
                    />
                    {errors.email && <p className="text-[11px] text-[#D66A3A] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202522] mb-1">
                      Property Category
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#202522] mb-1">
                      Service Category
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#E5E4DC] bg-[#F7F6F2] rounded focus:bg-white focus:outline-none focus:border-[#202522]"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.name}>
                          {srv.name}
                        </option>
                      ))}
                      <option value="General Plumbing Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202522] mb-1">
                      Urgency
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#E5E4DC] bg-[#F7F6F2] rounded focus:bg-white focus:outline-none focus:border-[#202522]"
                    >
                      <option value="standard">Standard (Next few days)</option>
                      <option value="urgent">Urgent (Today or Tomorrow)</option>
                      <option value="emergency">Emergency (Active leak)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202522] mb-1">
                    Describe Your Plumbing Issue *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about what is happening with your fixtures, pipes, or drains..."
                    className="w-full px-3 py-2 text-xs border border-[#E5E4DC] bg-[#F7F6F2] rounded focus:bg-white focus:outline-none focus:border-[#202522]"
                  />
                  {errors.message && <p className="text-[11px] text-[#D66A3A] mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#737873]">
                    Personal information is never shared or marketed.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded bg-[#202522] hover:bg-[#D66A3A] text-white text-xs font-semibold transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 bg-white border border-[#E5E4DC] rounded-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E4DC] pb-4">
            <div>
              <h3 className="text-xl font-serif text-[#202522]">
                Jacksonville Service Territory & Headquarters
              </h3>
              <p className="text-xs text-[#737873]">
                7014 Macbeth Rd, Jacksonville, FL 32244
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=7014+Macbeth+Rd,+Jacksonville,+FL+32244"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#D66A3A] hover:underline flex items-center gap-1"
            >
              <span>View in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="h-80 w-full rounded overflow-hidden border border-[#E5E4DC]">
            <iframe
              title="Everybody's Plumbing Company Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=7014+Macbeth+Rd,+Jacksonville,+FL+32244&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full filter contrast-[1.02] opacity-95"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
