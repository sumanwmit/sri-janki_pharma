import React, { useState } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'nav' | 'hero' | 'drawer' | 'compact';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'nav',
}) => {
  const { isInstallable, isInstalled, isIOS, installOutcome, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  // If already installed and running in standalone, don't show the button
  if (isInstalled || installOutcome === 'accepted') {
    if (variant === 'nav' || variant === 'compact') return null;
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 rounded-lg border border-emerald-200 dark:border-emerald-800">
        <CheckCircle2 className="h-3.5 w-3.5" />
        <span>App Installed</span>
      </div>
    );
  }

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }

    if (isInstallable) {
      setIsInstalling(true);
      try {
        await install();
      } finally {
        setIsInstalling(false);
      }
    } else {
      // Fallback for browsers that don't support beforeinstallprompt yet
      setShowIOSGuide(true);
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return 'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 transition active:scale-98';
      case 'drawer':
        return 'flex w-full items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition active:scale-98 shadow-sm';
      case 'compact':
        return 'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-300 transition';
      case 'nav':
      default:
        return 'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition active:scale-95';
    }
  };

  return (
    <>
      <button
        id="pwa-install-btn"
        onClick={handleInstallClick}
        disabled={isInstalling}
        className={`${getVariantStyles()} ${className}`}
        aria-label="Add Sri Janki Pharma App to Home Screen"
        title="Add to Home Screen for fast mobile access"
      >
        <span className="text-sm">📲</span>
        <span>{isInstalling ? 'Installing...' : 'Add to Home'}</span>
        {!isIOS && <Download className="h-3.5 w-3.5 opacity-90 ml-0.5 hidden sm:inline" />}
      </button>

      <IOSInstallGuide
        isOpen={showIOSGuide}
        onClose={() => setShowIOSGuide(false)}
      />
    </>
  );
};
