import React, { useState, useMemo } from 'react';
import { Search, X, Pill, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import medicineStockData from '../data/medicineStock.json';
import { MedicineItem } from '../types';
import { useNavigate } from 'react-router-dom';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedicine: (medicineName: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMedicine,
}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const stock = medicineStockData as MedicineItem[];

  const results = useMemo(() => {
    if (!query.trim()) return stock.slice(0, 6);
    return stock
      .filter(
        (m) =>
          m.name.toLowerCase().includes(query.toLowerCase()) ||
          m.genericName.toLowerCase().includes(query.toLowerCase()) ||
          m.brand.toLowerCase().includes(query.toLowerCase()) ||
          m.category.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 8);
  }, [query, stock]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/70 p-4 pt-16 sm:pt-24 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <Search className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Quick search medicines, devices, baby care, or brands..."
            className="flex-1 bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden text-sm sm:text-base font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4 divide-y divide-slate-100 dark:divide-slate-800">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5 flex items-center justify-between">
            <span>{query ? 'Matching Inventory' : 'Popular Essentials'}</span>
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" /> 100% Genuine
            </span>
          </div>

          {results.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500">
              <p>No exact product found matching "{query}".</p>
              <button
                onClick={() => {
                  onClose();
                  onSelectMedicine(query);
                }}
                className="mt-3 inline-flex items-center gap-1 text-emerald-600 font-semibold text-xs hover:underline"
              >
                Inquire availability of "{query}" on WhatsApp <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onClose();
                  onSelectMedicine(item.name);
                }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 cursor-pointer transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                    <Pill className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {item.brand} • {item.genericName}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0 ml-3">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    ₹{item.discountPrice.toFixed(2)}
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    item.status === 'Available' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
                    item.status === 'Limited Stock' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Link to Services / Stock Checker */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500">Need a specialized drug or custom surgical item?</span>
          <button
            onClick={() => {
              onClose();
              navigate('/services');
            }}
            className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1"
          >
            View Full Services & Stock Checker <ExternalLink className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
