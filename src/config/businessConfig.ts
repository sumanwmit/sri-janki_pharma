export const BUSINESS_CONFIG = {
  businessName: "Sri Janki Pharma",
  shortName: "JankiPharma",
  category: "Pharmacy & Medical Healthcare Store",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  address: {
    street: "Nichali Rd, Punch Mohalla",
    city: "Jehanabad",
    state: "Bihar",
    pincode: "804408",
    country: "India",
    full: "Nichali Rd, Punch Mohalla, Jehanabad, Bihar 804408",
    landmark: "Near Punch Mohalla Chowk, Nichali Road",
  },
  contact: {
    phone: "9304640268",
    phoneDisplay: "+91 9304640268",
    whatsapp: "9304640268",
    whatsappDisplay: "+91 9304640268",
    email: "srijankipharma@gmail.com",
    emergencyPhone: "9304640268",
  },
  hours: {
    weekdays: "8:00 AM – 10:00 PM",
    sunday: "8:00 AM – 10:00 PM",
    emergency: "24/7 on call for urgent prescription medicines",
  },
  googleMaps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.653696879796!2d84.9780000!3d25.2120000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32997c11f71a9%3A0x2dbbe21287c7b808!2sJehanabad%2C%20Bihar%20804408!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Nichali+Rd,+Punch+Mohalla,+Jehanabad,+Bihar+804408",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/919304640268",
  },
  stats: [
    { label: "100% Genuine Medicines", value: "Verified Brands" },
    { label: "Products in Stock", value: "4,500+" },
    { label: "Happy Families Served", value: "15,000+" },
    { label: "Express Home Delivery", value: "Jehanabad Town" },
  ],
  usps: [
    {
      title: "100% Authentic Medicines",
      desc: "Direct procurement from authorized pharmaceutical distributors (Cipla, Sun Pharma, Abbott, Mankind, Dr. Reddy's).",
      icon: "ShieldCheck",
    },
    {
      title: "Quick WhatsApp Prescription Order",
      desc: "Simply snap a photo of your doctor's prescription and send it on WhatsApp for instant doorstep dispatch.",
      icon: "MessageSquareText",
    },
    {
      title: "Certified Pharmacist Consultation",
      desc: "Licensed pharmacists available on-site to explain dosages, interactions, and proper storage guidelines.",
      icon: "UserCheck",
    },
    {
      title: "Temperature-Controlled Storage",
      desc: "Dedicated medical refrigerators maintain 2°C–8°C for insulin, vaccines, eyedrops, and specialized injections.",
      icon: "ThermometerSnowflake",
    },
  ],
  pwa: {
    enabled: true,
    appName: "Sri Janki Pharma",
    shortName: "JankiPharma",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone",
  },
};

export const SITE_CONFIG = BUSINESS_CONFIG;
