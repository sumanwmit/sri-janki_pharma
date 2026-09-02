import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pill, Phone, MapPin, Clock, Mail, MessageCircle, ShieldCheck, Heart, ChevronRight, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);

  // === STEP 11: MANDATORY GLOBAL TRACKER HOOK INTEGRATION ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') as string);
    }
    if (!cid) return;
    let visitorId =
      localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId =
      sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, '').split('/').pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init',
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    };
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change',
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], {
          type: 'application/json',
        });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    };
    sendInitPayload();
    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };
    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach((evt) =>
      document.addEventListener(evt, resetIdleTimer, { passive: true })
    );
    resetIdleTimer(); // Initialize idle timer
    // ====================================
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach((evt) =>
        document.removeEventListener(evt, resetIdleTimer)
      );
      clearTimeout(idleTimer);
    };
  }, []);
  // =========================================================

  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Business Information */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
                <Pill className="h-5 w-5 -rotate-45" />
              </div>
              <span className="text-xl font-black text-white font-['Outfit']">
                {BUSINESS_CONFIG.businessName}
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {BUSINESS_CONFIG.tagline}. Serving the Jehanabad community with 100% genuine medicines, surgical supplies, and temperature-controlled healthcare essentials.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/80 rounded-xl p-2.5">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>Certified Retail Pharmacy License & Quality Assured</span>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2.5">
              Quick Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Sri Janki Pharma', path: '/about' },
                { name: 'Healthcare Services', path: '/services' },
                { name: 'Store Gallery', path: '/gallery' },
                { name: 'Contact & Directions', path: '/contact' },
                { name: 'Account Login', path: '/login' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-500" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Working Hours & Emergency */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2.5">
              Store Hours & Delivery
            </h3>
            <div className="mt-4 space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Monday – Sunday:</div>
                  <div className="text-slate-400">{BUSINESS_CONFIG.hours.weekdays}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Emergency On-Call:</div>
                  <div className="text-slate-400">{BUSINESS_CONFIG.hours.emergency}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">WhatsApp Delivery:</div>
                  <div className="text-slate-400">Available across Jehanabad Town</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2.5">
              Store Address & Map
            </h3>
            <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.contact.phone}`} className="hover:text-emerald-400 transition font-medium">
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.contact.email}`} className="hover:text-emerald-400 transition">
                  {BUSINESS_CONFIG.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-semibold border border-slate-700 transition"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="h-3 w-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Policy Modals Links */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4 flex-wrap">
            <button onClick={() => setShowPrivacyModal(true)} className="hover:text-slate-300 transition">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setShowTermsModal(true)} className="hover:text-slate-300 transition">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => setShowDisclaimerModal(true)} className="hover:text-slate-300 transition">
              Medical Disclaimer
            </button>
          </div>

          <div className="text-slate-400">
            Licensed retail chemist serving Jehanabad, Bihar 804408
          </div>
        </div>

        {/* MANDATORY COPYRIGHT & WMIT POPUP TRIGGER (STEP 12 PRESERVED EXACTLY) */}
        <div className="mt-6 pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. All rights reserved.
          </p>

          {/* EXACT REQUIRED FOOTER POPUP TRIGGER */}
          <div>
            <a 
              href="https://webmakerit.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="wmit-popup-trigger text-slate-400 hover:text-emerald-400 underline underline-offset-4 decoration-slate-700 transition font-medium"
            >
              Developed by WMIT
            </a>
          </div>

          <p className="text-[11px] text-slate-500">
            100% Genuine Medicines • Fast Delivery in Jehanabad
          </p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-6 border border-slate-800 text-slate-300 text-xs sm:text-sm">
            <h3 className="text-lg font-bold text-white mb-2">Privacy Policy</h3>
            <p className="leading-relaxed mb-3">
              Sri Janki Pharma values your health data confidentiality. Information provided during prescription orders or WhatsApp consultations is used exclusively for order fulfillment and dispensing verification in accordance with Indian pharmacy guidelines.
            </p>
            <button onClick={() => setShowPrivacyModal(false)} className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-6 border border-slate-800 text-slate-300 text-xs sm:text-sm">
            <h3 className="text-lg font-bold text-white mb-2">Terms & Conditions</h3>
            <p className="leading-relaxed mb-3">
              Prescription medications are subject to physical or digital prescription verification by a registered pharmacist. Prices and stock availability are subject to daily pharmaceutical distributor updates.
            </p>
            <button onClick={() => setShowTermsModal(false)} className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Disclaimer Modal */}
      {showDisclaimerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-6 border border-slate-800 text-slate-300 text-xs sm:text-sm">
            <h3 className="text-lg font-bold text-white mb-2">Medical Disclaimer</h3>
            <p className="leading-relaxed mb-3">
              Content provided on this website is for informational purposes and does not substitute professional medical advice, diagnosis, or treatment. Always consult your doctor before taking new medications.
            </p>
            <button onClick={() => setShowDisclaimerModal(false)} className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold">
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
export default Footer;
