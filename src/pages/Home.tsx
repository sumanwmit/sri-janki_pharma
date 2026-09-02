import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, ShieldCheck, Clock, Award, Truck, CheckCircle2, ChevronRight, Sparkles, ArrowRight, HeartPulse, UserCheck, ThermometerSnowflake, FileText, ShoppingBag, Star, Mail, Check } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SERVICES_DATA, REVIEWS_DATA, FAQS_DATA, HEALTH_TIPS_DATA } from '../data/siteData';
import medicineStockData from '../data/medicineStock.json';
import { MedicineItem } from '../types';

interface HomeProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Take first 6 featured services
  const featuredServices = SERVICES_DATA.slice(0, 6);
  // Take 6 featured products
  const featuredProducts = (medicineStockData as MedicineItem[]).slice(0, 6);
  // Take 3 customer reviews
  const previewReviews = REVIEWS_DATA.slice(0, 3);
  // Take 4 FAQs
  const previewFaqs = FAQS_DATA.slice(0, 4);
  // Take 3 health tips
  const previewTips = HEALTH_TIPS_DATA.slice(0, 3);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-16 sm:py-24 lg:py-28 border-b border-slate-100 dark:border-slate-800">
        {/* Background Decorative Blur Orbs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-400/10 dark:bg-emerald-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold mb-6 border border-emerald-200 dark:border-emerald-800 shadow-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>100% Genuine Medicines • Licensed Chemist in Jehanabad</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white font-['Outfit'] leading-tight sm:leading-none">
                {BUSINESS_CONFIG.businessName}
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                {BUSINESS_CONFIG.tagline}
              </p>

              {/* Description */}
              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices. Conveniently located at Punch Mohalla, Jehanabad, Bihar.
              </p>

              {/* MANDATORY HERO BUTTONS (Call Now, WhatsApp Order, Get Directions) */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                {/* Call Now */}
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/25 transition active:scale-95"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>

                {/* WhatsApp Order */}
                <button
                  onClick={() => onOpenOrderModal()}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition active:scale-95"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Order</span>
                </button>

                {/* Get Directions */}
                <a
                  href={BUSINESS_CONFIG.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base border border-slate-300 dark:border-slate-700 transition"
                >
                  <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Key Assurance Badges */}
              <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                {BUSINESS_CONFIG.stats.map((stat, i) => (
                  <div key={i} className="bg-white/80 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xs">
                    <div className="text-lg sm:text-xl font-black text-emerald-600 dark:text-emerald-400 font-['Outfit']">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
                  alt="Sri Janki Pharma Medical Store Dispensing Counter"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Store Live & Open
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">Punch Mohalla, Nichali Rd</h3>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Jehanabad, Bihar 804408 • Open 8:00 AM – 10:00 PM
                  </p>
                </div>
              </div>

              {/* Floating Prescription Promo Chip */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 max-w-xs flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white font-bold">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    Prescription Refill
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Snap & WhatsApp for 60-min delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63c2921a1158?auto=format&fit=crop&w=800&q=80"
                  alt="Certified Pharmacist Sri Janki Pharma"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white p-4 rounded-2xl shadow-lg text-center">
                <div className="text-2xl font-black font-['Outfit']">100%</div>
                <div className="text-[11px] font-semibold">Genuine Guarantee</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                About Sri Janki Pharma
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                Your Health, Our Sacred Commitment in Jehanabad
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded with the mission to eliminate spurious medications and provide authentic healthcare access to the residents of Punch Mohalla and greater Jehanabad, <strong>Sri Janki Pharma</strong> stands as a benchmark for pharmaceutical integrity.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                We bridge the gap between quality healthcare manufacturers and local families, offering temperature-controlled storage, qualified pharmacist counseling, and compassionate customer service.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Licensed Retail Pharmacists</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>2°C–8°C Cold Chain Insulin</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Doctor Prescription Verification</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition"
                >
                  <span>Read Full Business Story & Mission</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 border-t border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Comprehensive Care
              </span>
              <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                Featured Healthcare Services
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                Explore our core medicine dispensing, health diagnostics, and specialized mother & child care categories.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 font-bold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 shadow-xs hover:border-emerald-500 transition"
            >
              <span>View All Services & Categories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((srv) => (
              <div
                key={srv.id}
                className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-xl transition-all duration-200 border border-slate-200 dark:border-slate-800 flex flex-col justify-between group hover:border-emerald-500/50"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition">
                      <HeartPulse className="h-6 w-6" />
                    </div>
                    {srv.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {srv.shortDesc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                    {srv.features.slice(0, 2).map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenOrderModal(srv.title)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Why Jehanabad Trusts Us
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              The Sri Janki Pharma Difference
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Healthcare isn’t just commerce for us — it is a sacred responsibility to every patient who walks into our store.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_CONFIG.usps.map((usp, index) => (
              <div
                key={index}
                className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md mb-4">
                  {index === 0 && <ShieldCheck className="h-6 w-6" />}
                  {index === 1 && <MessageCircle className="h-6 w-6" />}
                  {index === 2 && <UserCheck className="h-6 w-6" />}
                  {index === 3 && <ThermometerSnowflake className="h-6 w-6" />}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {usp.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS PREVIEW */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Popular in Stock
              </span>
              <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                Featured Medicines & Diagnostic Devices
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Regularly requested prescriptions, health monitors, and daily wellness items in Jehanabad.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition"
            >
              <span>Search Full Inventory Checker</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((med) => (
              <div
                key={med.id}
                className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-lg transition border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 font-semibold text-slate-600 dark:text-slate-400">
                      {med.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {med.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {med.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {med.genericName}
                  </p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-1">
                    {med.brand}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 line-through mr-1">
                      ₹{med.mrp.toFixed(2)}
                    </span>
                    <span className="text-base font-black text-slate-900 dark:text-white">
                      ₹{med.discountPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenOrderModal(med.name)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Local Patient Testimonials
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              What Jehanabad Says About Us
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Verified experiences from families and doctors across Punch Mohalla, Court Area, and Hospital Road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewReviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {rev.author}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      {rev.location}
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded">
                    Verified Patient
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Read more patient testimonials & our healthcare heritage</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Common Inquiries
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Clear answers regarding WhatsApp orders, prescription verification, and home delivery in Jehanabad.
            </p>
          </div>

          <div className="space-y-4">
            {previewFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-xs border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Have another question? Contact our pharmacist</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-4xl font-black font-['Outfit']">
            Need Medicines Delivered Urgently in Jehanabad?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto">
            Send your prescription or medicine list directly to our WhatsApp hotline on <strong>9304640268</strong>. Fast verification and doorstep delivery!
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenOrderModal()}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-sm sm:text-base shadow-xl transition active:scale-95"
            >
              <MessageCircle className="h-5 w-5 text-emerald-600" />
              <span>Order via WhatsApp Now</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.contact.phone}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-950/60 hover:bg-emerald-950 text-white font-bold text-sm sm:text-base border border-emerald-400/40 transition"
            >
              <Phone className="h-5 w-5" />
              <span>Call: {BUSINESS_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Health Awareness
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              Latest Health & Medicine Tips
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Guidance from our pharmaceutical team on safe storage, BP measurement, and diabetic care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewTips.map((tip) => (
              <div
                key={tip.id}
                className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{tip.category}</span>
                      <span>{tip.readTime}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {tip.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 line-clamp-3">
                      {tip.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 flex items-center justify-between">
                    <span>By {tip.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER SECTION */}
      <section className="py-12 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white mb-4">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
            Subscribe for Monthly Medicine Refill Alerts & Health Guides
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Receive seasonal healthcare alerts, medicine storage guidelines, and discount updates in Jehanabad.
          </p>

          {newsletterSubscribed ? (
            <div className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-sm border border-emerald-300">
              <CheckCircle2 className="h-5 w-5" />
              <span>Thank you! You have subscribed to Sri Janki Pharma health updates.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
