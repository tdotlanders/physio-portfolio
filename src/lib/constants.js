// Site content and configuration
export const siteConfig = {
  name: "Beatriz Nogueira",
  title: "Physiotherapist",
  tagline: "Evidence-based physiotherapy focused on your recovery, mobility, and long-term wellness.",
  email: "contact@beatriznogueira.com",
  phone: "+351 XXX XXX XXX",
  whatsapp: "+351XXXXXXXXX",
  address: "Rua da Saúde, 123\nLisbon, Portugal",
  social: {
    instagram: "#",
    linkedin: "#",
    facebook: "#",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Appointments", href: "/appointments" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    id: 1,
    title: "Orthopedic Rehabilitation",
    description: "Post-surgery recovery, joint pain management, and mobility restoration for a complete return to daily activities.",
    icon: "bone",
  },
  {
    id: 2,
    title: "Sports Physiotherapy",
    description: "Injury prevention, performance optimization, and evidence-based return-to-sport protocols for athletes.",
    icon: "activity",
  },
  {
    id: 3,
    title: "Postural Correction",
    description: "Ergonomic assessment, spinal alignment, and chronic pain management for improved quality of life.",
    icon: "spine",
  },
  {
    id: 4,
    title: "Manual Therapy",
    description: "Hands-on techniques combining mobilization and soft tissue work for pain relief and improved function.",
    icon: "hands",
  },
];

export const credentials = [
  {
    year: "2023",
    title: "Certified Sports Rehabilitation Specialist",
    institution: "Portuguese Sports Medicine Association",
    type: "certification",
  },
  {
    year: "2021",
    title: "Advanced Manual Therapy Certification",
    institution: "European Institute of Physical Therapy",
    type: "certification",
  },
  {
    year: "2019",
    title: "Postural Assessment & Correction",
    institution: "Lisbon Academy of Rehabilitation",
    type: "certification",
  },
  {
    year: "2016",
    title: "Master's in Physiotherapy",
    institution: "University of Lisbon",
    type: "degree",
  },
  {
    year: "2014",
    title: "Bachelor's in Physiotherapy",
    institution: "University of Lisbon",
    type: "degree",
  },
];

export const aboutContent = {
  intro: "With over 8 years of experience in physiotherapy, I believe in treating the whole person—not just the symptoms.",
  bio: [
    "My approach combines the latest evidence-based techniques with genuine care for each patient's unique journey to recovery. I understand that every injury, every ache, and every goal is personal.",
    "Whether you're recovering from surgery, managing chronic pain, rehabilitating a sports injury, or simply looking to improve your posture and mobility, I'm here to guide you every step of the way.",
    "I pride myself on creating a calm, supportive environment where healing can truly happen. Together, we'll develop a personalized treatment plan that fits your lifestyle and gets you back to doing what you love.",
  ],
  specializations: [
    "Orthopedic Rehabilitation",
    "Sports Injury Recovery",
    "Postural Correction",
    "Manual Therapy",
    "Pre/Post-Operative Care",
    "Chronic Pain Management",
  ],
};

export const portfolioImages = [
  {
    id: 1,
    src: "/images/portfolio/rehab-session-1.jpg",
    alt: "Physical therapy rehabilitation session",
    category: "Rehabilitation",
  },
  {
    id: 2,
    src: "/images/portfolio/sports-therapy.jpg",
    alt: "Sports physiotherapy treatment",
    category: "Sports Therapy",
  },
  {
    id: 3,
    src: "/images/portfolio/clinical-assessment.jpg",
    alt: "Clinical posture assessment",
    category: "Assessment",
  },
  {
    id: 4,
    src: "/images/portfolio/manual-therapy.jpg",
    alt: "Manual therapy technique",
    category: "Manual Therapy",
  },
  {
    id: 5,
    src: "/images/portfolio/exercise-guidance.jpg",
    alt: "Exercise guidance and correction",
    category: "Exercise Therapy",
  },
  {
    id: 6,
    src: "/images/portfolio/clinic-space.jpg",
    alt: "Modern physiotherapy clinic space",
    category: "Clinic",
  },
];

export const appointmentInfo = {
  title: "Schedule Your Appointment",
  description: "Take the first step towards recovery. Book a consultation and let's discuss how I can help you achieve your health goals.",
  bookingUrl: "#", // Replace with actual Zappy URL when available
  sessions: [
    {
      type: "Initial Consultation",
      duration: "60 minutes",
      description: "Comprehensive assessment and personalized treatment plan",
    },
    {
      type: "Follow-up Session",
      duration: "45 minutes",
      description: "Treatment session with progress evaluation",
    },
    {
      type: "Online Consultation",
      duration: "30 minutes",
      description: "Virtual session for guidance and exercise review",
    },
  ],
  location: {
    inPerson: true,
    online: true,
    address: "Rua da Saúde, 123, Lisbon, Portugal",
  },
};
