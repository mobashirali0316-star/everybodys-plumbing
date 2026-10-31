import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileCallBar from './components/StickyMobileCallBar';
import QuoteModal from './components/QuoteModal';
import BrandShowcaseModal from './components/BrandShowcaseModal';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about' | 'contact'>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string | undefined>(undefined);
  const [isBrandShowcaseOpen, setIsBrandShowcaseOpen] = useState(false);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'services' || hash === 'about' || hash === 'contact') {
        setCurrentPage(hash as any);
      } else if (hash === 'home' || hash === '') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'services' | 'about' | 'contact') => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceName?: string) => {
    setQuoteService(serviceName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#202522] font-sans pb-16 md:pb-0">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuote={handleOpenQuote}
        onOpenBrandShowcase={() => setIsBrandShowcaseOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
            onOpenBrandShowcase={() => setIsBrandShowcaseOpen(true)}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onOpenQuote={handleOpenQuote}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onOpenQuote={() => handleOpenQuote()}
            onOpenBrandShowcase={() => setIsBrandShowcaseOpen(true)}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onOpenBrandShowcase={() => setIsBrandShowcaseOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuote={handleOpenQuote}
        onOpenBrandShowcase={() => setIsBrandShowcaseOpen(true)}
      />

      {/* Fixed Sticky Call Bar for Mobile devices */}
      <StickyMobileCallBar onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedService={quoteService}
      />

      <BrandShowcaseModal
        isOpen={isBrandShowcaseOpen}
        onClose={() => setIsBrandShowcaseOpen(false)}
      />
    </div>
  );
}

export default App;
