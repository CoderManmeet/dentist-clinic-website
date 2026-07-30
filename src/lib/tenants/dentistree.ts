import { TenantConfig } from "./types";

export const dentistree: TenantConfig = {
  slug: "dentistree",

  hero: {
    heading: "Confident smiles,",
    highlight: "for every generation.",
    subtext: "Multi-speciality dental care in Sector 22B, Chandigarh — from your child's first visit to complete smile transformations.",
  },

  clinic: {
    name: "DENTISTREE",
    phone: "+91 9876601854",
    phoneDisplay: "+91 9876601854",
  
    whatsapp: "919876601854", // your number, no + or spaces
  
    email: "hello@dentistree.com",
    address: "H, no 1854, Himalaya Marg, Sector 22B, Sector 22, Chandigarh, 160022",
    hours: {
      weekday: "9:00 AM – 7:00 PM",
      saturday: "9:00 AM – 5:00 PM",
      sunday: "Closed",
    },
    googleRating: 5.0,
    googleReviewCount: 995,
    yearsExperience: 14, // placeholder — confirm actual years in practice
    patientsTreated: "12,000+", // placeholder — confirm actual patient count
    emergencyAvailable: true,
  },
  theme: {
    primary: "#0B5E3B",      // emerald green
    primaryDark: "#08472C",
    secondary: "#1A1A1A",
    accent: "#C9A227",       // gold
    success: "#4CAF7D",
    background: "#FFFFFF",   // white per GMB brief
    surface: "#FBFAF7",
    text: "#14181C",
    textMuted: "#6B7280",
    border: "#E7E2DA",
  },
  navLinks: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Smile Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  whyChooseUs: [
    { icon: "Baby", title: "Kids Dentistry", desc: "Gentle, friendly care that keeps young patients at ease — a signature strength of our practice." },
    { icon: "Grid2x2", title: "Braces & Aligners", desc: "One of our most trusted specialties, from traditional braces to invisible aligners." },
    { icon: "Users", title: "Professional Staff", desc: "A team frequently praised by patients for warmth and professionalism." },
    { icon: "Heart", title: "Pain-Free Treatment", desc: "Modern anesthesia and gentle technique built around your comfort." },
    { icon: "Sparkles", title: "Clean, Modern Clinic", desc: "A spotless, well-maintained environment patients consistently highlight." },
    { icon: "Star", title: "5.0★ on Google", desc: "995+ reviews — one of the highest-rated dental practices in Chandigarh." },
  ],
  trustBadges: [
    { icon: "Star", label: "5.0★ Google (995+ Reviews)" },
    { icon: "BadgeCheck", label: "Multi-Speciality Clinic" },
    { icon: "BadgeCheck", label: "Family & Kids Friendly" },
    { icon: "Sparkles", label: "Smile Designing Experts" },
    { icon: "ShieldCheck", label: "Sedation Dentistry Available" },
  ],
  services: [
    { icon: "Anchor", title: "Dental Implants", desc: "Permanent, natural-feeling replacements for missing teeth." },
    { icon: "ScanLine", title: "Invisible Aligners", desc: "Straighten teeth discreetly, without traditional metal braces." },
    { icon: "Grid2x2", title: "Braces", desc: "Traditional and modern orthodontics for a confident smile." },
    { icon: "Baby", title: "Kids Dentistry", desc: "Gentle, friendly dental care designed around children." },
    { icon: "Syringe", title: "Root Canal", desc: "Pain-free treatment to save and restore damaged teeth." },
    { icon: "Stethoscope", title: "Wisdom Tooth Removal", desc: "Safe, expert extraction procedures." },
    { icon: "Smile", title: "Smile Designing", desc: "Custom smile makeovers tailored to your face and goals." },
    { icon: "Sparkles", title: "Veneers", desc: "Transform your smile with premium, natural-looking veneers." },
    { icon: "Sun", title: "Teeth Whitening", desc: "Brighter, whiter teeth in a single visit." },
    { icon: "ShieldCheck", title: "Crowns & Bridges", desc: "Restore function and aesthetics to damaged or missing teeth." },
    { icon: "Heart", title: "Full Mouth Rehabilitation", desc: "Comprehensive restoration for complex, multi-tooth cases." },
    { icon: "Zap", title: "Sedation Dentistry", desc: "Comfortable, anxiety-free treatment for nervous patients." },
  ],
  // PLACEHOLDER — GMB profile didn't include doctor names/bios. Need real info before launch.
  dentists: [
    { name: "Dr. Siddharth Mahajan", specialty: "Pedodontist", experience: "[Years]", bio: "[Bio needed]", image: "/images/dentist-1.jpeg" },
    { name: "Dr. Isha Mahajan", specialty: "Braces Specialist", experience: "[Years]", bio: "[Bio needed]", image: "/images/dentist-2.jpeg" },
    { name: "Dr. [Name Needed]", specialty: "Pediatric Dentistry", experience: "[Years]", bio: "[Bio needed]", image: "/images/dentist-3.jpeg" },
  ],
  galleryImages: [
    { src: "/images/gallery-1.jpeg", alt: "Modern clinic reception area", span: "col-span-2 row-span-2" },
    { src: "/images/gallery-2.jpeg", alt: "Treatment room with dental chair", span: "" },
    { src: "/images/gallery-3.jpeg", alt: "Before and after smile transformation", span: "" },
    { src: "/images/gallery-5.jpeg", alt: "Friendly clinic staff", span: "col-span-2" },
    { src: "/images/gallery-4.jpeg", alt: "Comfortable patient waiting room", span: "" },
  ],
  // PLACEHOLDER — replace with real pulled Google reviews (you have 995 to pull from)
  testimonials: [
    { name: "Aanchal", rating: 5, text: "I recently got two of my wisdom teeth removed at DENTISTREE, and my experience was excellent from start to finish. The entire team of doctors was extremely kind, supportive, and cooperative throughout the treatment process.", image: "/images/patient-1.jpeg" },
    { name: "Riya", rating: 5, text: "I also had my tooth extraction done by Dr. Siddharth Mahajan, and it was completely painless. Highly recommend Dentistree Clinic, Chandigarh for painless treatment and amazing results!", image: "/images/patient-2.jpeg" },
    { name: "Chetan", rating: 5, text: "I’m really satisfied with my experience and would highly recommend them to anyone looking for quality dental care.", image: "/images/patient-3.jpeg" },
  ],
  faqs: [
    { question: "Will the treatment hurt?", answer: "We use modern anesthesia and a gentle approach for every procedure, including sedation dentistry for anxious patients. Most patients find our treatments far more comfortable than expected." },
    { question: "Do you treat children?", answer: "Yes — kids dentistry is one of our specialties. Our team is trained to make young patients comfortable from their very first visit." },
    { question: "What orthodontic options do you offer?", answer: "We offer both traditional braces and invisible aligners, so you can choose the option that best fits your lifestyle and treatment needs." },
    { question: "Do you handle complex, full-mouth cases?", answer: "Yes — we offer full mouth rehabilitation for patients needing comprehensive, multi-tooth restoration." },
    { question: "Is sedation dentistry available for anxious patients?", answer: "Yes, we offer sedation dentistry to help patients with dental anxiety get treatment comfortably and stress-free." },
  ],
  values: [
    { icon: "Heart", title: "Patient First", desc: "Every decision starts with what's best for your comfort and health." },
    { icon: "ShieldCheck", title: "Honest Care", desc: "No unnecessary treatments — just clear, transparent recommendations." },
    { icon: "Sparkles", title: "Modern Standards", desc: "Continually investing in the latest techniques and equipment." },
    { icon: "Users", title: "Genuine Warmth", desc: "A team our patients describe as professional and friendly, visit after visit." },
  ],
  emergencyScenarios: [
    "Severe or persistent toothache",
    "Knocked-out or broken tooth",
    "Swelling in the face or gums",
    "Uncontrolled bleeding after an injury",
    "Lost filling or crown causing pain",
    "Broken braces wire causing discomfort",
  ],
  emergencySteps: [
    { title: "Call immediately", desc: "Reach our emergency line — we keep same-day slots open for urgent cases." },
    { title: "Manage the pain", desc: "Rinse with warm salt water and use a cold compress on swelling until you arrive." },
    { title: "Save any broken pieces", desc: "If a tooth is knocked out or broken, keep the pieces in milk or saliva." },
    { title: "Come straight in", desc: "We'll see you the same day — no need to wait for a scheduled slot." },
  ],
  timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
};