
export enum Page {
  Home = 'Home',
  QA = 'Q&A',
  Shop = 'Shop',
  News = 'News',
  More = 'More',
  Contact = 'Contact Us',
  Youth = 'Youth Connect',
  Diaspora = 'Diaspora Network',
  About = 'About Us',
  Vision = 'Our Vision',
  Mission = 'Our Mission',
  Analytics = 'Analytics',
  Calendar = 'Calendar',
  Widgets = 'Widgets',
  Backend = 'Backend Management',
  Podcast = 'Podcast',
  Blog = 'Blog',
  Donation = 'Donate',
  Subscription = 'Subscribe',
  ThankYou = 'Thank You',
  ArticleDetail = 'Article Detail'
}

export interface HeaderContent {
  title: string;
  subtitle: string;
  tagline: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isPlaceholder?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

export interface PodcastEpisode {
    id: number;
    title: string;
    duration: string;
    imageUrl: string;
}

export interface BlogPost {
    id: number;
    title: string;
    author: string;
    date: string;
    imageUrl: string;
}

export interface CalendarEvent {
    id: number;
    date: string; // Storing as string for simplicity, e.g., '2024-10-26'
    time: string;
    title: string;
    description: string;
    category: string;
}

export interface ContactInfo {
    address: string;
    email: string;
    phone: string;
}

export interface DonationOption {
    id: number;
    amount: number;
}

export interface SubscriptionTier {
    id: number;
    title: string;
    price: number;
    period: 'month' | 'year';
    features: string; // Comma-separated features
    isPopular?: boolean;
}

export interface DonationPageContent {
    title: string;
    description: string;
    imageUrl: string | null;
}

export interface ThankYouContent {
    title: string;
    message: string;
}

export interface DiasporaPageContent {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string | null;
}

export interface YouthConnectPageContent {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string | null;
}

export interface AboutUsPageContent {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string | null;
}

export interface VisionPageContent {
    title: string;
    subtitle: string;
    quote: string;
    description: string;
    imageUrl: string | null;
}

export interface YorubaHero {
    name: string;
    bio: string;
    imageUrl: string | null;
}

export interface AnalyticsData {
    totalListeners24h: string;
    listenersChange: string;
    storeSalesMonth: string;
    salesChange: string;
    listenerTrends: string; // Comma-separated numbers
    topLocations: string; // Semicolon-separated pairs, e.g., "Lagos:45;London:25"
    topProducts: string; // Semicolon-separated pairs, e.g., "Radio:1500;T-Shirt:800"
}

export interface TraditionalQAItem {
  id: number;
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: number;
  sender: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

export interface HomePageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  yorubaPeopleTitle: string;
  yorubaPeopleContent: string;
  yorubaPeopleButtonText: string;
  testimonialsTitle: string;
  exploreTitle: string;
  exploreCard1Title: string;
  exploreCard1Content: string;
  exploreCard1ButtonText: string;
  exploreCard2Title: string;
  exploreCard2Content: string;
  exploreCard2ButtonText: string;
}

export interface NowPlaying {
  songTitle: string;
  artistName: string;
}