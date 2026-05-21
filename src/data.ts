import { Product, Category, Benefit, PricingPlan } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'jamb',
    name: 'JAMB Examination Chronicles',
    codeName: 'CLASS: I',
    description: 'Precision entry assessment archives designed to test collegiate-caliber logic, grammar, and calculation. Fully updated for physical local practice.',
    periodOrigin: 'Chartered 1978'
  },
  {
    id: 'waec',
    name: 'WAEC Regional Syllabus Scrolls',
    codeName: 'CLASS: II',
    description: 'Multi-national collegiate entrance examinations for the West African Coast. Compiled test papers bound in pristine canvas cases with detailed key charts.',
    periodOrigin: 'West African Decree'
  },
  {
    id: 'neco',
    name: 'NECO Sovereign Ledgers',
    codeName: 'CLASS: III',
    description: 'National Educational Council testing syllabi. Beautifully printed reference queries on high-grade rag paper designed to challenge high-tier master scholars.',
    periodOrigin: 'National Registry 1999'
  },
  {
    id: 'offline-ai',
    name: 'SphereLearn Mechanical AI Tutors',
    codeName: 'CLASS: IV',
    description: 'Electromechanical intelligence engines designed by SphereLearn. Delivers deep cognitive study guidance offline, with complete security and zero telegraph network dependency.',
    periodOrigin: 'Patent Registry 2026'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'jamb-pack',
    name: 'The JAMB Master Study Ledger',
    category: 'jamb',
    image: '/src/assets/images/jamb_ledger_1779314329800.png',
    description: 'An exhaustive master volume housing fifteen complete years of JAMB examinations (2010-2025). Includes high-fidelity printed past papers, handwritten master keys, and step-by-step resolution steps for all mathematical and logical boards.',
    specification: [
      'Comprehensive keys spanning years 2010 to 2025',
      'Over 1000+ meticulously labeled practice questions',
      'Detailed study margins for ink note entry',
      'Officially approved SphereLearn study layout structure'
    ],
    heritage: 'Faithfully reconstructed by elder academic scribes to provide modern West African candidates with high-durability physical study materials that emulate the official boards.'
  },
  {
    id: 'waec-scroll',
    name: 'The WAEC Regional Reference Scroll',
    category: 'waec',
    image: '/src/assets/images/waec_scroll_1779314348373.png',
    description: 'A beautiful rolled container housing the official syllabus guidelines and examination papers of the West African Examinations Council. Curated specifically to unlock rapid comprehension of mathematics, sciences, and classical history.',
    specification: [
      'Authentic regional evaluation boards coverage',
      'Includes 92% accurate syllabus prediction guides',
      'Sealed in moisture-proof oiled parchment wrap',
      'Fitted with solid lead weights for bench study'
    ],
    heritage: 'Designed in homage to the early colonial academic boards, ensuring each scroll holds pristine, easily legible lithograph columns of past WAEC queries.'
  },
  {
    id: 'neco-ledger',
    name: 'The NECO Sovereign Assessment Book',
    category: 'neco',
    image: '/src/assets/images/neco_ledger_1779314365746.png',
    description: 'Bound in rich tanned binder calfskin, this volume covers the dense sovereign syllabus parameters of the National Examinations Council. Contains randomized study quiz maps and interactive grading scales.',
    specification: [
      'Complete national syllabus coverage briefs',
      'Integrated "Study Rand" randomized quiz matrices',
      'Equipped with a brass marker clip dialer',
      'Acid-free ledger material prevents ink feathering'
    ],
    heritage: 'Commissioned to withstand extreme classroom attrition, our NECO manuals are hand-sewn with strong hemp thread and certified via ink-stamp approval.'
  },
  {
    id: 'offline-ai-engine',
    name: 'The SphereLearn Mechanical AI Tutor',
    category: 'offline-ai',
    image: '/src/assets/images/offline_ai_engine_1779314387884.png',
    description: 'A revolutionary standalone calculating machine calibrated with local cognitive AI rules. Delivers instant, intelligent answers to complex exam questions, detailed academic explanations, and study hints—all completely offline, without any telegraph wire or network latency.',
    specification: [
      'Proprietary offline cognitive learning logic',
      'Instant explanations to WAEC & JAMB queries',
      '100% private data core—no telegraph tap leak',
      'Gears calibrated for 12,000 hourly responses'
    ],
    heritage: 'Representing SphereLearn\'s pinnacle of engineering, this mechanical brain acts as a personal Professor AI who resides on your desktop, requiring no electrical line or cloud subscription.'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Offline AI (fflie ai)',
    mercantileSeal: '100% OFF-WIRE',
    description: 'No telegraph wires, no unstable radio nets. Study in any remote location or train wagon with lightning-fast cognitive answers provided directly by our offline mechanical AI engines.'
  },
  {
    title: 'Privacy-First Learning',
    mercantileSeal: 'LOGGED LOCAL',
    description: 'Your academic scores, notes, and study logs stay firmly under your lock and key on your physical desk. No external tracking logs, no cloud storage dependency.'
  },
  {
    title: 'Study Rand Quiz system',
    mercantileSeal: 'DIAL RAND',
    description: 'Equipped with randomized clockwork gears, our guides allow you to generate unique, balanced question lists to discover blind spots in syllabus comprehension.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'The Squire Entry Permit',
    badge: 'Perfect for exploring Examply',
    priceShillings: '0 Shillings/mo',
    priceNigeria: '₦0.00/month',
    features: [
      'Access to sample practice papers',
      'Basic subject sector browsing',
      'Limited mechanical tutor inquiries',
      'Standard mobile ledger entry'
    ]
  },
  {
    id: 'professional',
    name: 'The Fellow Scribe License',
    badge: 'Ideal for serious exam prep',
    priceShillings: '9 Shillings / mo',
    priceNigeria: '₦9.99/month',
    features: [
      'All Starter access privileges',
      'Full catalog past papers (2010-2025)',
      'Unlimited mechanical AI tutor queries',
      'Offline physical data packaging option',
      'Access to Study Rand systems'
    ],
    isPopular: true
  },
  {
    id: 'premium',
    name: 'The Master Scholar Patent',
    badge: 'Complete exam mastery',
    priceShillings: '19 Shillings / mo',
    priceNigeria: '₦19.99/month',
    features: [
      'All Professional access privileges',
      'Advanced high-octane AI calculations',
      'Personalized custom daily charts',
      'Priority postal service consultation',
      'Specialist academic dispatch briefs'
    ]
  }
];
