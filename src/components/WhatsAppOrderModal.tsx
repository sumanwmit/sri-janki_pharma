import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Upload, CheckCircle, FileText, AlertCircle, Clock, MapPin, User } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { WhatsAppOrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = '',
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    phone: '',
    email: '',
    address: 'Punch Mohalla / Jehanabad',
    medicineName: '',
    quantity: '1 Strip / Standard pack',
    hasPrescription: 'Yes',
    prescriptionFileName: '',
    preferredTime: 'As soon as possible (Urgent)',
    message: '',
  });

  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (prefilledMedicine) {
      setFormData((prev) => ({
        ...prev,
        medicineName: prefilledMedicine,
      }));
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.customerName.trim()) {
      errs.customerName = 'Please enter your name';
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.medicineName.trim() && !prescriptionPreview) {
      errs.medicineName = 'Enter medicine name or attach prescription photo';
    }
    if (!formData.address.trim()) {
      errs.address = 'Please provide delivery address in Jehanabad';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        prescriptionFileName: file.name,
        hasPrescription: 'Yes',
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrescriptionPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const messageLines = [
      `*Hello ${BUSINESS_CONFIG.businessName}* 🏥`,
      `*Online Medicine Order Request:*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Customer Name:* ${formData.customerName}`,
      `📞 *Phone Number:* ${formData.phone}`,
      formData.email ? `📧 *Email:* ${formData.email}` : null,
      `📍 *Delivery Address:* ${formData.address}`,
      `💊 *Medicine Required:* ${formData.medicineName}`,
      `📦 *Quantity:* ${formData.quantity || 'Standard pack'}`,
      `📄 *Prescription Available:* ${formData.hasPrescription}${formData.prescriptionFileName ? ` (Attached: ${formData.prescriptionFileName})` : ''}`,
      `⏰ *Preferred Delivery:* ${formData.preferredTime}`,
      formData.message ? `📝 *Notes/Allergies:* ${formData.message}` : null,
      `━━━━━━━━━━━━━━━━━━━━`,
      `_Sent via Sri Janki Pharma Web App_`,
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/91${BUSINESS_CONFIG.contact.whatsapp}?text=${encodeURIComponent(messageLines)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 my-8 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                WhatsApp Medicine Order
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Directly connects to our licensed pharmacist (Jehanabad)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSubmitWhatsApp} className="mt-6 space-y-4">
          {/* Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>
              {errors.customerName && <p className="text-xs text-rose-500 mt-1">{errors.customerName}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                WhatsApp / Mobile No. <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10-digit number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>
              {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Medicine Name & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Medicine Name / Requirements <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Augmentin 625 Duo, Pan 40, Dolo"
                value={formData.medicineName}
                onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
              {errors.medicineName && <p className="text-xs text-rose-500 mt-1">{errors.medicineName}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Quantity
              </label>
              <input
                type="text"
                placeholder="e.g., 2 Strips / 1 Bottle"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address (Jehanabad) <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <textarea
                rows={2}
                required
                placeholder="House No., Street, Landmark, Punch Mohalla / Jehanabad"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>
            {errors.address && <p className="text-xs text-rose-500 mt-1">{errors.address}</p>}
          </div>

          {/* Prescription Upload Card */}
          <div className="rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 p-4 border border-emerald-200 dark:border-emerald-800/80">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">Doctor Prescription</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="hasPrescription"
                    checked={formData.hasPrescription === 'Yes'}
                    onChange={() => setFormData({ ...formData, hasPrescription: 'Yes' })}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="hasPrescription"
                    checked={formData.hasPrescription === 'No'}
                    onChange={() => setFormData({ ...formData, hasPrescription: 'No' })}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>No (OTC only)</span>
                </label>
              </div>
            </div>

            {formData.hasPrescription === 'Yes' && (
              <div className="mt-2">
                <label className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-dashed border-emerald-300 dark:border-emerald-700 hover:border-emerald-500 bg-white/70 dark:bg-slate-800/70 cursor-pointer transition">
                  {prescriptionPreview ? (
                    <div className="flex items-center gap-3 w-full">
                      <img src={prescriptionPreview} alt="Prescription preview" className="h-12 w-12 object-cover rounded-lg border border-emerald-300" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 truncate">
                          {formData.prescriptionFileName || 'Prescription image selected'}
                        </p>
                        <p className="text-[11px] text-slate-500">Tap to change image</p>
                      </div>
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Upload Doctor Prescription Photo
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        JPG, PNG, PDF (You can also send directly on WhatsApp)
                      </p>
                    </div>
                  )}
                  <input type="file" accept="image/*,application/pdf" onChange={handleFileChange} className="hidden" />
                </label>
              </div>
            )}
          </div>

          {/* Delivery Time & Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                >
                  <option value="Urgent (Within 60-90 Mins)">Urgent (Within 60-90 Mins)</option>
                  <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                  <option value="Self Store Pickup">Self Store Pickup (Punch Mohalla)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Special Instructions / Notes
              </label>
              <input
                type="text"
                placeholder="e.g. Call before coming"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition active:scale-98"
            >
              <MessageCircle className="h-5 w-5" />
              Send Order via WhatsApp
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.contact.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 text-center">
            <AlertCircle className="h-3.5 w-3.5 text-emerald-600" />
            <span>Schedule H medicines will be dispensed strictly upon pharmacist prescription check.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
