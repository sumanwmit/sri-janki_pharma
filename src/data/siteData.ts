import { ServiceCategory, ReviewItem, FAQItem, GalleryItem, HealthTip } from '../types';

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'prescription-medicines',
    title: '100% Genuine Prescription Medicines',
    shortDesc: 'Complete range of branded allopathic medicines, antibiotics, cardiac, diabetic, and neurological drugs dispensed by licensed pharmacists.',
    fullDesc: 'We stock thousands of authentic pharmaceutical formulations sourced exclusively from authorized company distributors (Cipla, Sun Pharma, Abbott, Dr. Reddy’s, Mankind, Torrent, Alkem). Every prescription is meticulously audited for dosage and potential drug interactions.',
    iconName: 'Pill',
    badge: '100% Authentic',
    features: [
      'Strict batch verification & authenticity guarantee',
      'Temperature-monitored storage for sensitive drugs',
      'Direct pharmacist consultation on dosage & timing',
      'Free digital refill reminders on WhatsApp'
    ],
    popularProducts: ['Augmentin 625 Duo', 'Pan 40', 'Telma 40', 'Glycomet-GP 1', 'Montair-LC']
  },
  {
    id: 'otc-medicines',
    title: 'OTC Health & Pain Relief Essentials',
    shortDesc: 'Immediate relief for fever, headache, indigestion, cough, cold, muscular pain, and allergies without waiting.',
    fullDesc: 'A comprehensive over-the-counter wellness section featuring trusted analgesics, antacids, digestive enzymes, cough syrups, motion sickness tablets, and antiseptic solutions.',
    iconName: 'Sparkles',
    badge: 'Instant Walk-in',
    features: [
      'Top brands: Dolo, Crocin, Digene, Gelusil, Volini, Strepsils',
      'First-aid antiseptic ointments & wound sprays',
      'Digestive tonics & electrolyte replacement salts (ORS)',
      'Eye, ear & nasal decongestant drops'
    ],
    popularProducts: ['Dolo 650', 'Volini Gel', 'Electral ORS', 'Otrivin Nasal Spray', 'Digene Gel']
  },
  {
    id: 'health-devices',
    title: 'Medical Devices & Home Health Monitors',
    shortDesc: 'Hospital-grade digital BP monitors, glucometers, nebulizers, pulse oximeters, and infrared thermometers.',
    fullDesc: 'Empower your family with accurate diagnostic monitors from certified global medical tech leaders (Omron, Accu-Chek, Dr. Morepen, OneTouch). Includes full manufacturer warranties and free in-store calibration guidance.',
    iconName: 'Activity',
    badge: 'Warranty Guaranteed',
    features: [
      'Digital Upper-Arm Blood Pressure Monitors',
      'Blood Sugar Test Meters & sterile lancet strips',
      'Compressor Nebulizers for asthma & pediatric care',
      'Fingertip Pulse Oximeters & Digital Weighing Scales'
    ],
    popularProducts: ['Omron HEM 7120', 'Accu-Chek Active Kit', 'Dr. Morepen Nebulizer', 'Digital Thermometers']
  },
  {
    id: 'cold-chain-insulin',
    title: 'Cold-Chain Insulin & Vaccines Storage',
    shortDesc: 'Dedicated medical grade cooling systems maintaining strict 2°C to 8°C temperatures for biologics and injections.',
    fullDesc: 'Sensitive injectable medications, recombinant insulin cartridges, vaccine vials, and eye drops lose efficacy if heat exposed. Sri Janki Pharma operates uninterrupted 24/7 power-backed medical refrigerators ensuring clinical potency.',
    iconName: 'ThermometerSnowflake',
    badge: '2°C - 8°C Monitored',
    features: [
      'Continuous temperature digital logging',
      'Insulin pens, cartridges, and sterile syringes',
      'Insulin cool-pack transport bags for travel',
      'Tetanus, hepatitis, and standard immunization supplies'
    ],
    popularProducts: ['Lantus SoloStar Pen', 'Human Mixtard 30/70', 'Novorapid Flexpen', 'Humalog Pen']
  },
  {
    id: 'baby-mother-care',
    title: 'Baby Care & Mother Wellness',
    shortDesc: 'Gentle infant nutrition, feeding bottles, diapers, dermatologist-tested baby lotions, and prenatal supplements.',
    fullDesc: 'Complete maternal and neonatal wellness corner stocked with safe, hypoallergenic products from leading brands like Sebamed, Pampers, Himalaya Baby, Johnson’s, and Nestlé.',
    iconName: 'Baby',
    badge: 'Dermatologist Safe',
    features: [
      'Infant formulas & Stage 1-4 baby cereals',
      'Super-absorbent diaper pants & fragrance-free wipes',
      'Tear-free shampoos, soothing massage oils, rash creams',
      'Lactation supplements and post-natal tonics'
    ],
    popularProducts: ['Sebamed Baby Wash', 'Pampers Premium Care', 'Lactogen / Nan Pro', 'Himalaya Baby Lotion']
  },
  {
    id: 'supplements-vitamins',
    title: 'Nutritional Supplements & Immunity',
    shortDesc: 'Premium multivitamin complexes, calcium, Vitamin D3, protein powders, iron tonics, and herbal immunity boosters.',
    fullDesc: 'Targeted nutritional formulations for growing children, active adults, senior citizens, and convalescent patients recovering from illness.',
    iconName: 'HeartPulse',
    badge: 'Vitality Boost',
    features: [
      'High-potency Calcium + Vitamin D3 for bone strength',
      'Omega-3 fish oil and antioxidant capsules',
      'Specialized diabetic & geriatric protein supplements',
      'Ayurvedic immunity churnas (Chyawanprash, Ashwagandha)'
    ],
    popularProducts: ['Shelcal 500', 'Becadexamin Softgel', 'Protinex Original', 'Revital H', 'Zincovit']
  },
  {
    id: 'surgical-home-care',
    title: 'Surgical Supplies & Home Care Aid',
    shortDesc: 'Sterile surgical dressings, disposable gloves, adult diapers, urine bags, walkers, and orthopaedic supports.',
    fullDesc: 'Essential hospital and post-operative home recovery supplies. Ideal for bedridden patients, joint support, and eldercare.',
    iconName: 'Stethoscope',
    badge: 'Hospital Grade',
    features: [
      'Crepe bandages, micropore tapes & sterile surgical cotton',
      'Lumbar belts, knee braces, cervical collars & wrist binders',
      'Adult incontinence pull-ups & bed underpads',
      'Walking sticks, walker frames & commode chairs on order'
    ],
    popularProducts: ['Hansaplast Bandage Pack', 'Flamingo Lumbar Belt', 'Friends Adult Diapers', 'Nitrile Gloves']
  },
  {
    id: 'whatsapp-home-delivery',
    title: 'Express Doorstep Delivery in Jehanabad',
    shortDesc: 'Order medicines on WhatsApp with prescription photo. Fast, discreet doorstep delivery across Jehanabad town.',
    fullDesc: 'No need to stand in long queues or leave sick family members at home. Just send your prescription on WhatsApp (9304640268) and receive your medicines safely packed at your doorstep.',
    iconName: 'Truck',
    badge: 'Same-Day Fast',
    features: [
      'Easy photo prescription upload on WhatsApp',
      'Clear invoice itemization with batch & expiry details',
      'Flexible payment: Cash on Delivery or UPI / QR code',
      'Free delivery on monthly maintenance medicine orders'
    ],
    popularProducts: ['Monthly Diabetes Care Pack', 'Hypertension Refill Box', 'Senior Citizen Care Bundle']
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rajesh Kumar Verma',
    location: 'Punch Mohalla, Jehanabad',
    rating: 5,
    date: '14 August 2026',
    comment: 'Best pharmacy in Jehanabad. My father requires regular insulin and cardiac medicines every month. Sri Janki Pharma always has genuine stock stored in proper refrigerators, and their prices are very fair.',
    verifiedPurchase: true
  },
  {
    id: 'rev-2',
    author: 'Sunita Devi',
    location: 'Court Area, Jehanabad',
    rating: 5,
    date: '28 July 2026',
    comment: 'Very supportive staff and polite behavior. I sent my doctor’s prescription on WhatsApp and received all medicines within an hour. The pharmacist explained the dosage clearly.',
    verifiedPurchase: true
  },
  {
    id: 'rev-3',
    author: 'Dr. Amit Sinha',
    location: 'Hospital Road, Jehanabad',
    rating: 5,
    date: '02 June 2026',
    comment: 'Reliable medicine store with authentic formulations from top pharma companies. I often advise my patients to get their post-op and surgical supplies here.',
    verifiedPurchase: true
  },
  {
    id: 'rev-4',
    author: 'Prakash Sharma',
    location: 'Station Road, Jehanabad',
    rating: 5,
    date: '19 May 2026',
    comment: 'Purchased an Omron BP monitor and diabetic test strips. They demonstrated how to use the device patiently and gave the manufacturer warranty card. Highly recommended!',
    verifiedPurchase: true
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'How can I order medicines on WhatsApp from Sri Janki Pharma?',
    answer: 'Ordering is very simple: take a clear photo of your doctor’s prescription and send it to our official WhatsApp number 9304640268 along with your delivery address. Our certified pharmacist will verify the items, calculate the bill, and confirm your delivery.',
    category: 'Orders'
  },
  {
    question: 'Do you require a doctor’s prescription for all medicines?',
    answer: 'Prescriptions are legally required for Schedule H and Schedule X prescription medicines (such as antibiotics, blood pressure, diabetes, cardiac, and psychotropic drugs). General OTC products like pain balms, multivitamins, antiseptic creams, and baby care items do not require a prescription.',
    category: 'Prescriptions'
  },
  {
    question: 'How do you ensure the authenticity and quality of your medicines?',
    answer: 'We procure 100% of our stock directly from authorized, licensed pharmaceutical company distributors. We never deal with unverified middlemen. All medications feature traceable batch numbers, manufactured dates, and holograms.',
    category: 'General'
  },
  {
    question: 'What are your store hours in Jehanabad?',
    answer: 'Our physical store at Nichali Rd, Punch Mohalla, Jehanabad is open Monday through Sunday from 8:00 AM to 10:00 PM. For emergency night medicine requirements, you can reach our on-call number at 9304640268.',
    category: 'General'
  },
  {
    question: 'What payment methods do you accept for home delivery?',
    answer: 'We accept Cash on Delivery (COD) as well as all digital UPI payments including PhonePe, Google Pay, Paytm, BHIM, and QR code scan upon delivery.',
    category: 'Delivery'
  },
  {
    question: 'How do you store sensitive medicines like Insulin and Injections?',
    answer: 'We have dedicated industrial-grade medical refrigerators equipped with 24/7 backup power and calibrated digital thermometers maintaining strict 2°C to 8°C cold-chain conditions at all times.',
    category: 'Prescriptions'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sri Janki Pharma Storefront & Reception',
    category: 'Storefront',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80',
    description: 'Clean, illuminated storefront located at Nichali Rd, Punch Mohalla, Jehanabad, welcoming patients with organized dispensing counters.'
  },
  {
    id: 'gal-2',
    title: 'Organized Prescription Medicine Racks',
    category: 'Medicines',
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80',
    description: 'Alphabetically organized allopathic medicine inventory for zero-error and swift prescription dispensing.'
  },
  {
    id: 'gal-3',
    title: 'Medical Diagnostic & Monitoring Devices',
    category: 'Health Devices',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    description: 'Display of digital BP monitors, glucometer test kits, pulse oximeters, and ultrasonic nebulizers.'
  },
  {
    id: 'gal-4',
    title: 'Temperature Controlled Cold-Chain Refrigerator',
    category: 'Interior',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
    description: 'Dedicated 2°C–8°C pharmaceutical refrigerator ensuring vaccine and insulin therapeutic potency.'
  },
  {
    id: 'gal-5',
    title: 'Baby Care & Pediatric Nutrition Counter',
    category: 'Baby & Care',
    imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1000&q=80',
    description: 'Comprehensive infant care section with hypoallergenic baby washes, diapers, wipes, and nutrition.'
  },
  {
    id: 'gal-6',
    title: 'Licensed Pharmacist Dispensing Desk',
    category: 'Interior',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63c2921a1158?auto=format&fit=crop&w=1000&q=80',
    description: 'Qualified pharmacist consulting with patients on dosage regimens and preventative healthcare tips.'
  }
];

export const HEALTH_TIPS_DATA: HealthTip[] = [
  {
    id: 'tip-1',
    title: '5 Crucial Rules for Storing Medicines Safely at Home',
    category: 'Medicine Safety',
    readTime: '3 min read',
    date: 'August 2026',
    summary: 'Direct sunlight, moisture, and bathroom heat can degrade active drug potency. Learn optimal storage protocols.',
    content: 'Always store tablets and capsules in a cool, dry place away from direct sunlight. Never store medicines in bathroom cabinets where humidity causes chemical decomposition. Keep insulin and specific eye drops strictly between 2°C and 8°C in your refrigerator (do not freeze).',
    author: 'Sri Janki Pharma Chief Pharmacist',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tip-2',
    title: 'Managing Blood Pressure: Best Practices for Home BP Monitors',
    category: 'Heart Health',
    readTime: '4 min read',
    date: 'July 2026',
    summary: 'How to sit, position the arm cuff, and avoid false spikes when measuring your blood pressure with a digital machine.',
    content: 'Rest quietly for 5 minutes before taking a reading. Avoid caffeine, exercise, and smoking for 30 minutes prior. Place the cuff on bare skin 1 inch above your elbow crease, keeping your arm rested at heart level.',
    author: 'Medical Consultation Desk',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tip-3',
    title: 'Understanding Diabetes: Fasting vs Post-Prandial Sugar Goals',
    category: 'Diabetic Care',
    readTime: '4 min read',
    date: 'June 2026',
    summary: 'A quick guide to monitoring blood glucose levels, avoiding hypoglycemia, and adhering to insulin schedules.',
    content: 'Fasting blood glucose is measured after 8-10 hours of overnight fasting (ideal target: 70-100 mg/dL). Post-prandial is tested exactly 2 hours after the start of a meal (target: <140 mg/dL for non-diabetics, <180 mg/dL for diabetics).',
    author: 'Sri Janki Pharma Healthcare Team',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
  }
];
