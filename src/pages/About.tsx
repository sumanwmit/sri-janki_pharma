import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Eye, Target, Clock, CheckCircle2, UserCheck, ThermometerSnowflake, Building2, Phone, MessageCircle } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { REVIEWS_DATA } from '../data/siteData';

interface AboutProps {
  onOpenOrderModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenOrderModal }) => {
  const timelineMilestones = [
    {
      year: 'Inception',
      title: 'Foundation in Punch Mohalla',
      desc: 'Established with the foundational principle of stocking only 100% genuine, authorized allopathic and Ayurvedic medicines in Jehanabad, Bihar.'
    },
    {
      year: 'Growth',
      title: 'Expansion of Medical Devices & Surgical Care',
      desc: 'Introduced home healthcare diagnostic equipment (Omron BP monitors, Accu-Chek glucometers, nebulizers) and hospital surgical supplies.'
    },
    {
      year: 'Standardization',
      title: 'Medical Cold-Chain Infrastructure',
      desc: 'Commissioned specialized pharmaceutical cooling units with 24/7 power backup for insulin and sensitive biologics storage.'
    },
    {
      year: 'Present Day',
      title: 'Digital WhatsApp Ordering & Home Delivery',
      desc: 'Launched instant WhatsApp prescription processing, serving thousands of families across Jehanabad with fast doorstep deliveries.'
    }
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 pb-20">
      <Breadcrumb currentPage="About Us" />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-emerald-900 to-slate-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800 mb-3">
            Our Healthcare Heritage
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
            About {BUSINESS_CONFIG.businessName}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Your trusted neighborhood pharmacy in Punch Mohalla, Jehanabad, committed to genuine medicines, patient care, and pharmaceutical excellence.
          </p>
        </div>
      </section>

      {/* 1. Business Story & Heritage */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                The Heritage Story
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-['Outfit']">
                Rooted in Integrity, Dedicated to Jehanabad’s Health
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Located at <strong>Nichali Rd, Punch Mohalla, Jehanabad</strong>, Sri Janki Pharma was built with a singular conviction: when it comes to life-saving medicines, there is zero compromise on quality and authenticity.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                In an era where counterfeit and sub-standard formulations pose serious health hazards, we maintain strict sourcing covenants directly with licensed distributors of India's leading pharmaceutical innovators—including Cipla, Sun Pharma, Abbott, GlaxoSmithKline, Alkem, Mankind, and Torrent.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Every tablet, vial, and diagnostic monitor that passes through our counter is verified for batch numbers, authentic hologram seals, and expiration safety.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80"
                  alt="Organized Medicine Racks at Sri Janki Pharma"
                  className="w-full h-48 sm:h-60 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 translate-y-6">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
                  alt="Temperature Monitored Storage"
                  className="w-full h-48 sm:h-60 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission, Vision & Core Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-sm border border-slate-200 dark:border-slate-800 relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit'] mb-3">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To guarantee 100% authentic medicine availability, compassionate pharmacist consultation, and swift healthcare support to every family in Jehanabad at fair, accessible pricing.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-sm border border-slate-200 dark:border-slate-800 relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit'] mb-3">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be recognized as the foremost standard of pharmaceutical trust and ethical healthcare dispensing across Bihar, integrating modern digital access with personalized community care.
              </p>
            </div>

            {/* Values */}
            <div className="rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-sm border border-slate-200 dark:border-slate-800 relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 mb-6">
                <HeartHandshake className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit'] mb-3">
                Core Values
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Absolute Medicine Authenticity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Strict Cold-Chain Discipline</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Patient-First Empathy & Ethics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Owner / Chief Pharmacist Message */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-800/60 p-8 sm:p-12 border border-emerald-200/80 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold text-2xl shadow-lg">
                <UserCheck className="h-10 w-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
                  Pharmacist Leadership Note
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-['Outfit'] mt-1">
                  "A Prescription is a Sacred Trust"
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "When a doctor writes a prescription in Jehanabad, the patient counts on that medicine working exactly as formulated. As licensed pharmacists, our duty goes beyond mere billing—we inspect the potency, verify the dosage, ensure safe storage, and guide you on proper food-drug timing. Sri Janki Pharma remains steadfastly dedicated to your family's lifelong wellness."
                </p>
                <div className="mt-4 pt-3 border-t border-emerald-200 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Chief Registered Pharmacist
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Sri Janki Pharma, Jehanabad (Bihar)
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-600 text-white">
                    Licensed & Registered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Business Journey & Milestones Timeline */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Growth & Milestones
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-['Outfit']">
              Our Journey in Jehanabad
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-500/40 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
            {timelineMilestones.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold ring-4 ring-white dark:ring-slate-900">
                  {idx + 1}
                </div>
                <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-xs border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Store Overview & Facilities */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Store Infrastructure
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-['Outfit']">
              Modern Facilities & Storage Safety
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <ThermometerSnowflake className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Active Cold-Chain Storage
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Dedicated temperature-monitored refrigerators maintaining 2°C to 8°C for insulin, monoclonal antibodies, eye drops, and vaccines with uninterrupted backup generators.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <Building2 className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Categorized Inventory
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Over 4,500+ items organized systematically by therapeutic category and generic name, ensuring swift order packing and zero drug-dispensing errors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Authorized Direct Sourcing
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                100% of our stock is procured directly from licensed pharma company stockists with official invoices and verifiable batch certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-emerald-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black font-['Outfit']">Have a Prescription to Fill?</h2>
          <p className="mt-2 text-sm text-emerald-100">
            Send it on WhatsApp for instant confirmation and local doorstep dispatch in Jehanabad.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={onOpenOrderModal}
              className="px-6 py-3 rounded-xl bg-white text-emerald-900 font-bold text-sm shadow-md hover:bg-emerald-50 transition"
            >
              Order on WhatsApp
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phone}`}
              className="px-6 py-3 rounded-xl bg-emerald-950 text-white font-bold text-sm border border-emerald-500/50"
            >
              Call {BUSINESS_CONFIG.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
