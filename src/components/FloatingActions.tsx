import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, ShoppingBag } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const text = `Hello ${BUSINESS_CONFIG.businessName}, I would like to inquire about medicines / place an order.`;
    const url = `https://wa.me/91${BUSINESS_CONFIG.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating Action Cluster on Bottom Right */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition active:scale-95 animate-in fade-in zoom-in duration-200"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${BUSINESS_CONFIG.contact.phone}`}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition active:scale-95 group"
          aria-label={`Call Sri Janki Pharma at ${BUSINESS_CONFIG.contact.phoneDisplay}`}
          title="Direct Call to Pharmacist"
        >
          <Phone className="h-5 w-5 group-hover:animate-wiggle" />
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 hover:bg-emerald-600 transition active:scale-95 group"
          aria-label="Chat on WhatsApp"
          title="Instant WhatsApp Order & Medicine Inquiries"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white text-[9px] font-bold text-white items-center justify-center">1</span>
          </span>
          <MessageCircle className="h-7 w-7" />
        </button>
      </div>

      {/* Sticky Bottom Mobile Bar for Quick Order */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <a
          href={`tel:${BUSINESS_CONFIG.contact.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition"
        >
          <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span>Call Store</span>
        </a>

        <button
          onClick={onOpenOrderModal}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition active:scale-98"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Order on WA</span>
        </button>
      </div>
    </>
  );
};
