import React from 'react';
import { Share, PlusSquare, X, Smartphone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ios-install-title"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              <Smartphone className="h-6 w-6" />
            </div>
            <div>
              <h3 id="ios-install-title" className="text-lg font-bold text-slate-900 dark:text-white">
                Install on iPhone / iPad
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Add {BUSINESS_CONFIG.businessName} to your home screen
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
            aria-label="Close installation guide"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
              1
            </div>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              Tap the <span className="font-semibold text-slate-900 dark:text-white inline-flex items-center gap-1 mx-1 px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700"><Share className="h-3.5 w-3.5" /> Share</span> icon at the bottom of Safari.
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
              2
            </div>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              Scroll down the menu and select <span className="font-semibold text-slate-900 dark:text-white inline-flex items-center gap-1 mx-1 px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700"><PlusSquare className="h-3.5 w-3.5" /> Add to Home Screen</span>.
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
              3
            </div>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              Tap <span className="font-bold text-emerald-600 dark:text-emerald-400">Add</span> in top-right corner to access instant prescription orders from your home screen.
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition active:scale-[0.99]"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
