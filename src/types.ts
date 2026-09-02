export type StockStatus = 'Available' | 'Limited Stock' | 'Out of Stock';

export interface MedicineItem {
  id: string;
  name: string;
  genericName: string;
  brand: string;
  category: 'Prescription' | 'OTC' | 'Health Devices' | 'Supplements' | 'Baby Care' | 'Personal Care' | 'Surgical';
  mrp: number;
  discountPrice: number;
  quantity: string;
  expiry: string;
  status: StockStatus;
  prescriptionRequired: boolean;
  dosageForm: string; // Tablet, Syrup, Injection, Cream, Device
  description: string;
  image?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  badge?: string;
  popularProducts: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Orders' | 'Prescriptions' | 'Delivery' | 'General';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Storefront' | 'Interior' | 'Medicines' | 'Health Devices' | 'Baby & Care';
  imageUrl: string;
  description: string;
  dimensions?: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string;
  author: string;
  image: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  medicineName: string;
  quantity?: string;
  hasPrescription: 'Yes' | 'No';
  prescriptionFileName?: string;
  preferredTime: string;
  message?: string;
}
