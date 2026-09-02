import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react';

interface ContactProps {
  onOpenOrderModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenOrderModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Medicine Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      // Create prefilled WhatsApp message from the contact form
      const msg = `*New Contact / Inquiry from Sri Janki Pharma Website:*\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}📋 *Subject:* ${formData.subject}\n💬 *Message:* ${formData.message || 'No additional text'}`;
      const url = `https://wa.me/91${BUSINESS_CONFIG.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
      setIsSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 pb-20">
      <Breadcrumb currentPage="Contact Us & Store Location" />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-emerald-900 to-slate-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800 mb-3">
            Reach Out to Our Pharmacist
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
            Contact Sri Janki Pharma
          </h1>
          <p className="mt-4 text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Have questions about medicine availability, doctor prescriptions, dosage instructions, or doorstep delivery in Jehanabad? We are here to assist you daily.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Business Info & Quick Action Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Store Contact Details
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Visit us in person or reach out via WhatsApp and Phone for prompt assistance.
                </p>
              </div>

              {/* Address Card */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Store Address</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {BUSINESS_CONFIG.address.full}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Landmark: {BUSINESS_CONFIG.address.landmark}
                  </p>
                  <a
                    href={BUSINESS_CONFIG.googleMaps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Phone & WhatsApp</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Store & Emergency Prescription Line:</p>
                  <a
                    href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 block mt-1"
                  >
                    {BUSINESS_CONFIG.contact.phoneDisplay}
                  </a>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition"
                    >
                      <Phone className="h-3.5 w-3.5" /> Call Now
                    </a>
                    <button
                      onClick={onOpenOrderModal}
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Working Hours</h3>
                  <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex justify-between gap-6">
                      <span>Mon – Sun:</span>
                      <strong className="text-slate-900 dark:text-white">{BUSINESS_CONFIG.hours.weekdays}</strong>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span>Urgent Night Calls:</span>
                      <strong className="text-emerald-600 dark:text-emerald-400">24/7 on call</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form & Map */}
            <div className="lg:col-span-7 space-y-8">
              {/* Contact Form Card */}
              <div className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-md border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Send a Direct Message / Inquiry
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
                  Fill out the form below. Our dispensing team will review and reply via WhatsApp or Phone.
                </p>

                {isSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 text-center">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-300">
                      Inquiry Forwarded via WhatsApp
                    </h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-1">
                      Our registered pharmacist will review your request shortly. You can also call us directly at {BUSINESS_CONFIG.contact.phoneDisplay}.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Your Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g., Rajesh Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Inquiry Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                        >
                          <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                          <option value="Prescription Refill Order">Prescription Refill Order</option>
                          <option value="Medical Device / BP Monitor Inquiry">Medical Device / BP Monitor Inquiry</option>
                          <option value="Insulin / Cold Chain Availability">Insulin / Cold Chain Availability</option>
                          <option value="Home Delivery in Jehanabad">Home Delivery in Jehanabad</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Message / Medicine Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="List medicine names, strength (mg), quantities, or ask your question..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition active:scale-98"
                      >
                        <Send className="h-4 w-4" />
                        <span>Send via WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={onOpenOrderModal}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm transition"
                      >
                        Upload Prescription Photo
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Embedded Google Map Section */}
              <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Jehanabad Store Location Map
                    </span>
                  </div>
                  <a
                    href={BUSINESS_CONFIG.googleMaps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Get GPS Directions</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="w-full h-72 sm:h-80 bg-slate-100 dark:bg-slate-800">
                  <iframe
                    title="Sri Janki Pharma Google Map Location"
                    src={BUSINESS_CONFIG.googleMaps.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
