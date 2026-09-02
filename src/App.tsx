import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useGlobalTracker } from './hooks/useTracking';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OfflineIndicator } from './components/OfflineIndicator';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { IOSInstallGuide } from './components/IOSInstallGuide';

// 6 Strict Separate Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

// Scroll to top upon page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Global App Shell containing tracking, modals, and route routing
function AppShell() {
  // Initialize WMIT Global Tracker
  useGlobalTracker();

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedMedicineForOrder, setSelectedMedicineForOrder] = useState<string | undefined>(undefined);
  const [iosGuideOpen, setIosGuideOpen] = useState(false);

  const handleOpenOrderModal = (medicineName?: string) => {
    setSelectedMedicineForOrder(medicineName);
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    setSelectedMedicineForOrder(undefined);
  };

  const handleSelectMedicineFromSearch = (medicineName: string) => {
    setSelectedMedicineForOrder(medicineName);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-['Plus_Jakarta_Sans'] transition-colors duration-200">
      <ScrollToTop />
      
      {/* Offline Status Alert Banner */}
      <OfflineIndicator />

      {/* Sticky Top Header Navigation */}
      <Navbar
        onOpenOrderModal={() => handleOpenOrderModal()}
        onOpenSearchModal={() => setSearchModalOpen(true)}
      />

      {/* Main Routed Content Area */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenOrderModal={handleOpenOrderModal} />} />
          <Route path="/about" element={<About onOpenOrderModal={() => handleOpenOrderModal()} />} />
          <Route path="/services" element={<Services onOpenOrderModal={handleOpenOrderModal} />} />
          <Route path="/gallery" element={<Gallery onOpenOrderModal={() => handleOpenOrderModal()} />} />
          <Route path="/contact" element={<Contact onOpenOrderModal={() => handleOpenOrderModal()} />} />
          <Route path="/login" element={<Login />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Persistent Footer with WMIT popup trigger & business info */}
      <Footer />

      {/* Persistent Floating Quick Actions (WhatsApp, Call, Back to top) */}
      <FloatingActions onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Prescription & Medicine WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={orderModalOpen}
        onClose={handleCloseOrderModal}
        prefilledMedicine={selectedMedicineForOrder}
      />

      {/* Global Quick Search Modal */}
      <QuickSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectMedicine={handleSelectMedicineFromSearch}
      />

      {/* iOS PWA Installation Step-by-Step Guide Modal */}
      <IOSInstallGuide
        isOpen={iosGuideOpen}
        onClose={() => setIosGuideOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppShell />
      </Router>
    </ThemeProvider>
  );
}
