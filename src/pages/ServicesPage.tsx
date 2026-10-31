import React, { useState } from 'react';
import { 
  Phone, 
  Check, 
  Search,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface ServicesPageProps {
  onOpenQuote: (serviceName?: string) => void;
  onNavigate?: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'drain', label: 'Drain Services' },
    { id: 'repairs', label: 'Plumbing Repairs' },
    { id: 'installations', label: 'Installations' },
    { id: 'water-systems', label: 'Water Systems' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.commonProblems.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-20 bg-[#F7F6F2] text-[#202522]">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E5E4DC] pb-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D66A3A]">
            Services & Capabilities • FL Lic. CFC 1428104
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#202522]">
            Plumbing Services
          </h1>
          <p className="text-base sm:text-lg text-[#737873] leading-relaxed">
            Professional plumbing repairs, drain clearing, fixture replacements, and maintenance for residential and commercial properties in Jacksonville.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E5E4DC]">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-[#202522] text-[#F7F6F2]'
                      : 'bg-white border border-[#E5E4DC] text-[#737873] hover:text-[#202522]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#737873] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded border border-[#E5E4DC] bg-white text-[#202522] focus:outline-none focus:border-[#202522]"
            />
          </div>
        </div>
      </section>

      {/* Services List (Editorial Asymmetric Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="space-y-8">
          {filteredServices.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-[#E5E4DC] rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image side */}
                <div className={`lg:col-span-5 h-64 lg:h-auto overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content side */}
                <div className={`lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-xs font-mono font-medium text-[#D66A3A] uppercase tracking-wider">
                        {service.categoryLabel}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-serif text-[#202522]">
                        {service.name}
                      </h2>
                    </div>

                    <p className="text-sm text-[#737873] leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1.5 text-xs text-[#737873]">
                        <span className="font-semibold text-[#202522] block">Common Issues Addressed:</span>
                        {service.commonProblems.map((prob, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-[#D66A3A]">•</span>
                            <span>{prob}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1.5 text-xs text-[#737873]">
                        <span className="font-semibold text-[#202522] block">Service Provided:</span>
                        {service.solutionsProvided.map((sol, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#D66A3A] shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E5E4DC] flex items-center justify-between">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-xs font-bold text-[#202522] hover:text-[#D66A3A] flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D66A3A]" />
                      <span>(904) 237-9164</span>
                    </a>

                    <button
                      onClick={() => onOpenQuote(service.name)}
                      className="px-4 py-2 rounded bg-[#202522] hover:bg-[#D66A3A] text-white text-xs font-semibold transition-colors flex items-center gap-1"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Strip */}
        <div className="p-8 bg-white border border-[#E5E4DC] rounded-lg text-center space-y-4">
          <h3 className="text-xl font-serif text-[#202522]">
            Need a specific plumbing service not listed above?
          </h3>
          <p className="text-xs sm:text-sm text-[#737873] max-w-lg mx-auto">
            Give us a call directly to describe what you need. As a small, family-owned business, we provide personal recommendations.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#202522] hover:bg-[#D66A3A] text-white text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (904) 237-9164</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
