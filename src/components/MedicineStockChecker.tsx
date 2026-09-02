import React, { useState, useMemo } from 'react';
import { Search, CheckCircle, AlertTriangle, XCircle, FileText, ShoppingBag, Filter, ArrowRight, ShieldCheck } from 'lucide-react';
import medicineStockData from '../data/medicineStock.json';
import { MedicineItem, StockStatus } from '../types';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface MedicineStockCheckerProps {
  onOpenOrderModal?: (medicineName?: string) => void;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onOpenOrderModal,
  compact = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const stockList = medicineStockData as MedicineItem[];

  const categories = useMemo(() => {
    const cats = Array.from(new Set(stockList.map((m) => m.category)));
    return ['All', ...cats];
  }, [stockList]);

  const filteredMedicines = useMemo(() => {
    return stockList.filter((med) => {
      const matchQuery =
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory =
        selectedCategory === 'All' || med.category === selectedCategory;

      const matchStatus =
        selectedStatus === 'All' || med.status === selectedStatus;

      return matchQuery && matchCategory && matchStatus;
    });
  }, [stockList, searchTerm, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: StockStatus) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <XCircle className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
            Out of Stock
          </span>
        );
    }
  };

  const handleWhatsAppInquire = (med: MedicineItem) => {
    const text = `Hello Sri Janki Pharma, I am inquiring about *${med.name}* (${med.brand}). Status shown: ${med.status}. Is this ready for immediate pickup/delivery at Punch Mohalla, Jehanabad?`;
    const url = `https://wa.me/91${BUSINESS_CONFIG.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div id="medicine-stock-checker" className="w-full">
      {/* Search and Filters Header */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Main Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Medicine name, Generic formula, or Brand (e.g., Augmentin, Paracetamol, Omron)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-200 dark:bg-slate-700 rounded-full px-2 py-0.5"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filter Selectors */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <Filter className="h-4 w-4 text-slate-400 shrink-0 hidden sm:inline" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-auto px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    Category: {cat}
                  </option>
                ))}
              </select>
            </div>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full sm:w-auto px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            >
              <option value="All">All Statuses</option>
              <option value="Available">Available Only</option>
              <option value="Limited Stock">Limited Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Results Count & Quick Tags */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>
              Showing <strong className="text-slate-900 dark:text-white">{filteredMedicines.length}</strong> of {stockList.length} catalog medicines
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
              <ShieldCheck className="h-3.5 w-3.5" /> 100% Verified Genuine
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            <span className="text-slate-400">Popular:</span>
            {['Augmentin', 'Dolo 650', 'Omron', 'Insulin', 'Pan 40'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="px-2.5 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition text-[11px]"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Medicines Grid */}
      <div className={`mt-6 grid grid-cols-1 ${compact ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-4 sm:gap-6`}>
        {filteredMedicines.length === 0 ? (
          <div className="col-span-full rounded-2xl bg-white dark:bg-slate-900 p-8 text-center border border-dashed border-slate-300 dark:border-slate-700">
            <Search className="h-10 w-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">
              No exact match found for "{searchTerm}"
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1 mb-4">
              We stock over 4,500+ prescription drugs and surgical supplies at Nichali Rd, Jehanabad. Send us a message on WhatsApp to check unlisted items instantly!
            </p>
            <button
              onClick={() => onOpenOrderModal ? onOpenOrderModal(searchTerm) : handleWhatsAppInquire({ name: searchTerm || 'Custom Medicine' } as MedicineItem)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition"
            >
              <ShoppingBag className="h-4 w-4" />
              Inquire "{searchTerm}" on WhatsApp
            </button>
          </div>
        ) : (
          filteredMedicines.map((med) => (
            <div
              key={med.id}
              className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-md hover:shadow-xl transition-all duration-200 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50"
            >
              <div>
                {/* Top Row: Category & Status */}
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {med.category}
                  </span>
                  {getStatusBadge(med.status)}
                </div>

                {/* Medicine Title & Generic Formula */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {med.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium line-clamp-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Composition:</span> {med.genericName}
                </p>

                {/* Brand & Prescription Badge */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-medium">
                    {med.brand}
                  </span>
                  {med.prescriptionRequired && (
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 font-semibold border border-rose-200 dark:border-rose-900">
                      <FileText className="h-3 w-3" /> Rx Required
                    </span>
                  )}
                </div>

                {/* Pricing & Stock Details */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-400 line-through mr-1.5">
                      MRP ₹{med.mrp.toFixed(2)}
                    </span>
                    <span className="text-lg font-black text-slate-900 dark:text-white">
                      ₹{med.discountPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-right text-[11px] text-slate-500 dark:text-slate-400">
                    <div>Exp: <strong className="text-slate-700 dark:text-slate-300">{med.expiry}</strong></div>
                    <div className="text-[10px] text-slate-400">{med.quantity}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => onOpenOrderModal ? onOpenOrderModal(med.name) : handleWhatsAppInquire(med)}
                  disabled={med.status === 'Out of Stock'}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition ${
                    med.status === 'Out of Stock'
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-600'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow'
                  }`}
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  {med.status === 'Out of Stock' ? 'Unavailable' : 'Order on WhatsApp'}
                </button>
                <button
                  onClick={() => handleWhatsAppInquire(med)}
                  title="Ask Pharmacist on WhatsApp"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
                  aria-label={`Inquire about ${med.name}`}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
