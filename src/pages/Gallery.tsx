import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { GALLERY_DATA } from '../data/siteData';
import { GalleryItem } from '../types';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { ZoomIn, X, ChevronLeft, ChevronRight, MapPin, Eye, MessageCircle } from 'lucide-react';

interface GalleryProps {
  onOpenOrderModal: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenOrderModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Storefront', 'Medicines', 'Health Devices', 'Interior', 'Baby & Care'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setActiveLightboxItem(item);
  };

  const closeLightbox = () => {
    setActiveLightboxItem(null);
  };

  const handleNext = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 pb-20">
      <Breadcrumb currentPage="Store Gallery" />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-emerald-900 to-slate-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800 mb-3">
            Store Visuals & Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
            Sri Janki Pharma Visual Gallery
          </h1>
          <p className="mt-4 text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Take a virtual look inside our medical store at Punch Mohalla, Jehanabad. Explore our cold-chain storage, medicine racks, and diagnostic device displays.
          </p>
        </div>
      </section>

      {/* Gallery Content Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat === 'All' ? 'All Visuals' : cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 cursor-pointer"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-slate-900 shadow-lg backdrop-blur-xs transform scale-90 group-hover:scale-100 transition">
                      <ZoomIn className="h-6 w-6" />
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-950/70 text-white backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Store Location Footer Banner */}
          <div className="mt-16 rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Visit Us in Person at Punch Mohalla
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {BUSINESS_CONFIG.address.full} • Open Monday - Sunday (8:00 AM – 10:00 PM)
                </p>
              </div>
            </div>

            <button
              onClick={onOpenOrderModal}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition shrink-0"
            >
              Order on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Zoom Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Close image zoom"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={activeLightboxItem.imageUrl}
              alt={activeLightboxItem.title}
              className="max-h-[65vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-600 text-white">
                {activeLightboxItem.category}
              </span>
              <h3 className="text-lg font-bold mt-2">{activeLightboxItem.title}</h3>
              <p className="text-xs text-slate-300 mt-1">{activeLightboxItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
