import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Pill, Lock, Mail, Phone, Eye, EyeOff, ShieldCheck, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (identifier) {
      setOtpSent(true);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if ((loginMethod === 'phone' && otp) || (loginMethod === 'email' && password)) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 pb-20">
      <Breadcrumb currentPage="Account Login" />

      <section className="py-16 sm:py-24">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-xl border border-slate-200 dark:border-slate-800">
            {/* Header Brand */}
            <div className="text-center mb-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg mb-3">
                <Pill className="h-6 w-6 -rotate-45" />
              </div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white font-['Outfit']">
                Customer & Staff Portal
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Access your saved prescriptions, recurring refill schedules, and digital invoices at {BUSINESS_CONFIG.businessName}.
              </p>
            </div>

            {isLoggedIn ? (
              <div className="text-center py-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto mb-4">
                  <UserCheck className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Welcome to Sri Janki Pharma
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  You are signed in as a verified account holder in Jehanabad.
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Account ID:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">SJP-JHN-8044</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Prescription Status:</span>
                    <span className="font-semibold text-emerald-600">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Store Branch:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Punch Mohalla, Jehanabad</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Link
                    to="/services"
                    className="block w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition"
                  >
                    Check Medicine Stock & Order
                  </Link>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setOtpSent(false);
                    }}
                    className="block w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Method Switcher Tabs */}
                <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 mb-6 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => {
                      setLoginMethod('phone');
                      setOtpSent(false);
                    }}
                    className={`flex-1 py-2 rounded-lg transition ${
                      loginMethod === 'phone'
                        ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    Phone OTP Login
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginMethod('email');
                      setOtpSent(false);
                    }}
                    className={`flex-1 py-2 rounded-lg transition ${
                      loginMethod === 'email'
                        ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    Email / Password
                  </button>
                </div>

                {/* Phone Method */}
                {loginMethod === 'phone' ? (
                  <form onSubmit={otpSent ? handleLogin : handleSendOtp} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <Phone className="h-4 w-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          disabled={otpSent}
                          placeholder="10-digit phone number"
                          value={identifier}
                          onChange={(e) => setIdentifier(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden disabled:opacity-60"
                        />
                      </div>
                    </div>

                    {otpSent ? (
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                            Enter 4-Digit OTP
                          </label>
                          <span className="text-[11px] text-emerald-600 font-medium">
                            Sent to +91 {identifier}
                          </span>
                        </div>
                        <input
                          type="text"
                          required
                          maxLength={4}
                          placeholder="e.g. 1234"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="w-full text-center tracking-widest text-lg font-black px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                        />
                        <button
                          type="submit"
                          className="mt-4 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition active:scale-98"
                        >
                          Verify & Sign In
                        </button>
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition active:scale-98"
                      >
                        Send Instant OTP
                      </button>
                    )}
                  </form>
                ) : (
                  /* Email Method */
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="h-4 w-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={identifier}
                          onChange={(e) => setIdentifier(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="h-4 w-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition active:scale-98"
                    >
                      Sign In to Account
                    </button>
                  </form>
                )}

                {/* Demo Credentials Note */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-[11px] text-slate-400">
                    Need instant prescription refill without login?{' '}
                    <Link to="/services" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                      Use Direct WhatsApp Order
                    </Link>
                  </p>
                </div>
              </>
            )}

            {/* Security Guarantee */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>256-Bit SSL Encrypted Healthcare Portal</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
