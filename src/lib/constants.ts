export const clinic = {
  name: "Meridian Dental",
  phone: "+91 98765 43210",
  phoneDisplay: "+91 98765 43210",
  email: "hello@meridiandental.com",
  address: "12 Model Town, Ludhiana, Punjab",
  hours: {
    weekday: "9:00 AM – 7:00 PM",
    saturday: "9:00 AM – 5:00 PM",
    sunday: "Closed",
  },
  googleRating: 4.9,
  googleReviewCount: 340,
  yearsExperience: 14,
  patientsTreated: "12,000+",
  emergencyAvailable: true,
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const whyChooseUs = [
  { icon: "Zap", title: "Same-Day Appointments", desc: "Urgent slots opened daily — no week-long wait for pain relief." },
  { icon: "Heart", title: "Pain-Free Dentistry", desc: "Modern anesthesia and gentle technique, built around your comfort." },
  { icon: "ScanLine", title: "Digital X-Rays", desc: "90% less radiation than film, with instant on-screen results." },
  { icon: "Users", title: "Family Friendly", desc: "From first tooth to golden years, we treat every age with care." },
  { icon: "GraduationCap", title: "Experienced Specialists", desc: "14+ years treating complex cases most clinics refer elsewhere." },
  { icon: "CreditCard", title: "Flexible Payment", desc: "Insurance accepted, plus EMI plans for larger treatments." },
];

export const trustBadges = [
  { icon: "ShieldCheck", label: "Insurance Accepted" },
  { icon: "Siren", label: "Emergency Care" },
  { icon: "BadgeCheck", label: "Certified Dentists" },
  { icon: "Sparkles", label: "Latest Technology" },
  { icon: "Star", label: "4.9★ Google Reviews" },
];

export const services = [
  { icon: "Stethoscope", title: "General Dentistry", desc: "Checkups, fillings, and preventive care for lifelong oral health." },
  { icon: "Sparkles", title: "Cleaning", desc: "Professional scaling and polishing to keep your smile healthy." },
  { icon: "Sun", title: "Whitening", desc: "Safe, dentist-supervised whitening for noticeably brighter teeth." },
  { icon: "Anchor", title: "Implants", desc: "Permanent, natural-feeling replacements for missing teeth." },
  { icon: "Grid2x2", title: "Braces", desc: "Modern orthodontics for a straighter, more confident smile." },
  { icon: "Syringe", title: "Root Canal", desc: "Pain-free treatment to save and restore damaged teeth." },
  { icon: "Smile", title: "Cosmetic Dentistry", desc: "Veneers, bonding, and smile makeovers tailored to you." },
  { icon: "Baby", title: "Children Dentistry", desc: "Gentle, friendly care that keeps young patients at ease." },
  { icon: "Siren", title: "Emergency Care", desc: "Same-day relief for dental pain, trauma, and urgent issues." },
];

export const dentists = [
  {
    name: "Dr. Aditya Kapoor",
    specialty: "Cosmetic & Restorative Dentistry",
    experience: "16 years",
    bio: "Aditya believes a great smile starts with feeling completely at ease in the chair.",
    image: "/images/dentist-1.jpeg",
  },
  {
    name: "Dr. Rohan Mehta",
    specialty: "Oral Surgery & Implants",
    experience: "12 years",
    bio: "Rohan specializes in complex cases most clinics refer elsewhere.",
    image: "/images/dentist-2.jpeg",
  },
  {
    name: "Dr. Steve Morrison",
    specialty: "Pediatric Dentistry",
    experience: "9 years",
    bio: "Steve has a gift for making even the most nervous kids smile.",
    image: "/images/dentist-3.jpeg",
  },
];

export const galleryImages = [
  { src: "/images/gallery-1.jpeg", alt: "Modern clinic reception area", span: "col-span-2 row-span-2" },
  { src: "/images/gallery-2.jpeg", alt: "Treatment room with dental chair", span: "" },
  { src: "/images/gallery-3.jpeg", alt: "Digital X-ray equipment", span: "" },
  { src: "/images/gallery-5.jpeg", alt: "Friendly clinic staff", span: "col-span-2" },

  { src: "/images/gallery-4.jpeg", alt: "Comfortable patient waiting room", span: "" },
  ];



export const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "I've always dreaded the dentist, but this place completely changed that. The team explains everything before doing it — no surprises, no anxiety.",
    image: "/images/patient-1.jpeg",
  },
  {
    name: "Vaani Malhotra",
    rating: 5,
    text: "Got my implant done here after two other clinics turned me away as 'too complex.' Painless, professional, and genuinely caring staff.",
    image: "/images/patient-2.jpeg",
  },
  {
    name: "Neha Kapoor",
    rating: 5,
    text: "Took my 5-year-old for her first cleaning and she asked when we could go back. That tells you everything about how gentle they are with kids.",
    image: "/images/patient-3.jpeg",
  },
];

export const faqs = [
  {
    question: "Will the treatment hurt?",
    answer: "We use modern anesthesia techniques and a gentle approach for every procedure, from routine cleanings to root canals. Most patients describe our treatments as far more comfortable than they expected.",
  },
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we work with most major insurance providers. Bring your insurance details to your first visit and our team will help verify your coverage before treatment.",
  },
  {
    question: "How soon can I get an appointment?",
    answer: "We keep same-day slots open for urgent and emergency cases. For routine visits, we typically can see you within 1-2 days.",
  },
  {
    question: "Is it safe to bring young children?",
    answer: "Absolutely — our pediatric dentist specializes in making young patients comfortable, and our waiting area and treatment approach are designed with kids in mind.",
  },
  {
    question: "What if I have severe dental anxiety?",
    answer: "You're not alone — many of our patients have anxiety about dental visits. We take extra time to explain each step, offer breaks during treatment, and never rush you into anything you're not ready for.",
  },
];



export const footerLinks = {
  services: services.map((s) => ({ label: s.title, href: "/services" })),
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Meet the Team", href: "/team" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/#faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export const treatmentOptions = services.map((s) => s.title);

export const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
];

export const values = [
  { icon: "Heart", title: "Patient First", desc: "Every decision starts with what's best for your comfort and health." },
  { icon: "ShieldCheck", title: "Honest Care", desc: "No unnecessary treatments — just clear, transparent recommendations." },
  { icon: "Sparkles", title: "Modern Standards", desc: "Continually investing in the latest techniques and equipment." },
  { icon: "Users", title: "Genuine Warmth", desc: "A team that remembers your name, not just your chart." },
];

export const emergencyScenarios = [
  "Severe or persistent toothache",
  "Knocked-out or broken tooth",
  "Swelling in the face or gums",
  "Uncontrolled bleeding after an injury",
  "Lost filling or crown causing pain",
  "Broken braces wire causing discomfort",
];

export const emergencySteps = [
  { title: "Call immediately", desc: "Reach our emergency line — we keep same-day slots open for urgent cases." },
  { title: "Manage the pain", desc: "Rinse with warm salt water and use a cold compress on swelling until you arrive." },
  { title: "Save any broken pieces", desc: "If a tooth is knocked out or broken, keep the pieces in milk or saliva." },
  { title: "Come straight in", desc: "We'll see you the same day — no need to wait for a scheduled slot." },
];