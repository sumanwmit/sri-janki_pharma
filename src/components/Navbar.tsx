import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Sun, Moon, Search, Pill, ShieldCheck, Clock, MapPin, UserCheck, LogIn } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { useTheme } from '../context/ThemeContext';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenSearchModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrderModal,
  onOpenSearchModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page switch
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open Daily: {BUSINESS_CONFIG.hours.weekdays}
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-emerald-400" />
              {BUSINESS_CONFIG.address.street}, {BUSINESS_CONFIG.address.city}
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-[11px] sm:text-xs">
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phone}`}
              className="flex items-center gap-1 text-slate-200 hover:text-emerald-400 font-medium transition"
            >
              <Phone className="h-3 w-3 text-emerald-400" />
              <span>Emergency / Call: {BUSINESS_CONFIG.contact.phoneDisplay}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-300 font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" /> 100% Genuine Medicines
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-2.5'
            : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition">
                <Pill className="h-6 w-6 transform -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 dark:text-white font-['Outfit'] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {BUSINESS_CONFIG.businessName}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 tracking-wide uppercase">
                  Pharmacy • Jehanabad (Bihar)
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-xl text-sm font-semibold transition ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                        : 'text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Utilities */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Quick Search Button */}
              <button
                onClick={onOpenSearchModal}
                className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition flex items-center gap-2 text-xs font-medium"
                aria-label="Search medicines"
                title="Search medicines and health devices"
              >
                <Search className="h-4 w-4" />
                <span className="hidden xl:inline text-slate-400">Search medicine...</span>
              </button>

              {/* PWA Install Button ("📲 Add to Home") */}
              <div className="hidden sm:block">
                <PWAInstallButton variant="nav" />
              </div>

              {/* Dark / Light Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition"
                aria-label="Toggle theme mode"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
              </button>

              {/* WhatsApp Order Button */}
              <button
                onClick={onOpenOrderModal}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Order</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <PWAInstallButton variant="drawer" />

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md transition"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Medicine Order
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition"
              >
                <Phone className="h-4 w-4" />
                Call Now: {BUSINESS_CONFIG.contact.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
