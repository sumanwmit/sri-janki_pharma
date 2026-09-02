import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SERVICES_DATA } from '../data/siteData';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Pill, Sparkles, Activity, ThermometerSnowflake, Baby, HeartPulse, Stethoscope, Truck, Check, MessageCircle, Phone, ArrowRight, ShieldCheck, Search } from 'lucide-react';

interface ServicesProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return <Pill className="h-6 w-6" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6" />;
      case 'Activity':
        return <Activity className="h-6 w-6" />;
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake className="h-6 w-6" />;
      case 'Baby':
        return <Baby className="h-6 w-6" />;
      case 'HeartPulse':
        return <HeartPulse className="h-6 w-6" />;
      case 'Stethoscope':
        return <Stethoscope className="h-6 w-6" />;
      case 'Truck':
      default:
        return <Truck className="h-6 w-6" />;
    }
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 pb-20">
      <Breadcrumb currentPage="Services & Medicine Catalog" />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-emerald-900 via-slate-900 to-slate-950 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800 mb-3">
            Pharmaceutical & Medical Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
            Our Healthcare Services & Medicine Catalog
          </h1>
          <p className="mt-4 text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            From critical allopathic prescription dispensing to home diagnostic equipment and express doorstep delivery across Jehanabad.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#stock-checker-section"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-1.5"
            >
              <Search className="h-4 w-4" />
              <span>Jump to Medicine Stock Checker</span>
            </a>
            <button
              onClick={() => onOpenOrderModal()}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold text-xs sm:text-sm border border-slate-700 transition flex items-center gap-1.5"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Prescription Order</span>
            </button>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER SECTION */}
      <section id="stock-checker-section" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Exclusive Interactive Tool
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-['Outfit']">
              Live Medicine Availability & Stock Checker
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Search real-time inventory at our Punch Mohalla store. Check prices, MRP discounts, expiry dates, and order directly on WhatsApp.
            </p>
          </div>

          {/* Integrated MedicineStockChecker Component */}
          <MedicineStockChecker onOpenOrderModal={onOpenOrderModal} />
        </div>
      </section>

      {/* Complete Category-Wise Services */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Full Range of Offerings
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-['Outfit']">
              Category-Wise Healthcare Services
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Each service is backed by verified authenticity, proper medical storage protocols, and pharmacist guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 shadow-xs">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Features Bullet Points */}
                  <div className="mt-5 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Key Highlights:
                    </h4>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Popular Products Chips */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Popular Items in this Category:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.popularProducts.map((p, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Card CTA */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenOrderModal(service.title)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition active:scale-98"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Inquire / Order Category</span>
                  </button>

                  <a
                    href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
                    title="Call Pharmacist"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prescription Refill Assistance Banner */}
      <section className="py-12 bg-gradient-to-r from-slate-900 to-emerald-950 text-white border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit']">
              Chronic Condition Monthly Medicine Plan
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Are you or an elderly family member managing Diabetes, Hypertension, or Thyroid? Get hassle-free scheduled monthly refill deliveries in Jehanabad.
            </p>
          </div>
          <button
            onClick={() => onOpenOrderModal('Monthly Refill Subscription Plan')}
            className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl transition active:scale-95 shrink-0"
          >
            Setup WhatsApp Refill Plan
          </button>
        </div>
      </section>
    </div>
  );
};
