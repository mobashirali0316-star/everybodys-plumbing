export interface PlumbingService {
  id: string;
  name: string;
  category: 'drain' | 'repairs' | 'installations' | 'water-systems' | 'commercial';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  commonProblems: string[];
  solutionsProvided: string[];
  image: string;
  badge?: string;
  confirmed: boolean; // Flagged according to instruction: confirmed by business info vs owner review
}

export const COMPANY_INFO = {
  name: "Everybody's Plumbing Company, Inc.",
  shortName: "Everybody's Plumbing",
  tagline: "Reliable Plumbing Solutions. Service You Can Count On.",
  subTagline: "From clogged drains to plumbing installations, Everybody's Plumbing Company is here to help with your residential and commercial plumbing needs.",
  phone: "(904) 237-9164",
  phoneRaw: "+19042379164",
  email: "everybodysplumbing@gmail.com",
  license: "CFC 1428104",
  licenseType: "State of Florida Certified Plumbing Contractor",
  licenseAuthority: "Florida Department of Business and Professional Regulation (DBPR)",
  owner: "Gerald 'Jerry' Ward",
  businessType: "Family-Owned & Operated Plumbing Contractor",
  address: {
    street: "7014 Macbeth Rd",
    city: "Jacksonville",
    state: "FL",
    zip: "32244",
    county: "Duval County",
    country: "US"
  },
  serviceAreas: [
    "Jacksonville",
    "Duval County",
    "Orange Park",
    "Clay County",
    "St. Johns County",
    "Jacksonville Beach",
    "Atlantic Beach",
    "Neptune Beach",
    "Fleming Island",
    "Middleburg"
  ],
  hours: {
    regular: "Monday – Friday: 7:30 AM – 6:00 PM",
    weekend: "Saturday: 8:00 AM – 3:00 PM | Sunday: Emergency On-Call",
    emergency: "24/7 Emergency Dispatch Available for Major Leaks & Backups"
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100046798345210"
  }
};

export const SERVICES_DATA: PlumbingService[] = [
  // Category 1: Drain Services
  {
    id: "drain-cleaning",
    name: "Professional Drain Cleaning & Snaking",
    category: "drain",
    categoryLabel: "Drain Services",
    shortDescription: "Fast, effective clearing of stopped up drains, kitchen sinks, showers, and main sewer branch lines.",
    fullDescription: "Clogged drains can quickly disrupt your entire home or business. At Everybody's Plumbing, we use professional-grade mechanical cable drain snakes and motorized augers to safely remove stubborn blockages caused by grease, soap scum, hair, and debris without damaging your pipes.",
    commonProblems: [
      "Water backing up in kitchen or bathroom sinks",
      "Slow-draining bathtubs and shower pans",
      "Unpleasant sewer odors coming from floor drains",
      "Gurgling sounds when flushing adjacent toilets"
    ],
    solutionsProvided: [
      "Motorized drain snaking for stubborn obstructions",
      "Grease and buildup clearing for kitchen lines",
      "Bathroom trap inspection and foreign object retrieval",
      "Preventative maintenance to keep drains running smoothly"
    ],
    image: "/images/drain-cleaning.jpg",
    badge: "Most Requested",
    confirmed: true // Explicitly on existing website: "From snaking a drain..."
  },
  {
    id: "clogged-drain-removal",
    name: "Emergency Clog Removal",
    category: "drain",
    categoryLabel: "Drain Services",
    shortDescription: "Prompt response for severe clogs and overflowing drains that threaten your property.",
    fullDescription: "When an overflowing sink or backing-up toilet creates a mess, quick professional attention is required. We pinpoint the exact restriction and clear it promptly to restore proper flow and sanitation.",
    commonProblems: [
      "Immediate drain overflow risk",
      "Multiple fixtures backing up simultaneously",
      "Standing water that refuses to drain overnight"
    ],
    solutionsProvided: [
      "Fast troubleshooting of localized and branch clogs",
      "Sanitary extraction and blockage removal",
      "Drain pipe inspection to prevent recurring stops"
    ],
    image: "/images/drain-cleaning.jpg",
    confirmed: true
  },

  // Category 2: Plumbing Repairs
  {
    id: "pipe-leak-repair",
    name: "Pipe Repair & Leak Detection",
    category: "repairs",
    categoryLabel: "Plumbing Repairs",
    shortDescription: "Accurate detection and durable repair of leaking copper, PEX, CPVC, or galvanized water supply lines.",
    fullDescription: "Hidden water leaks can silently drive up your water utility bills and cause structural damage behind drywall or beneath cabinets. We pinpoint the source of pinhole leaks, cracked fittings, or aging joints and perform long-lasting repairs using high-grade plumbing fittings.",
    commonProblems: [
      "Unexplained spike in your municipal water bill",
      "Damp spots, drywall discoloration, or musty smells",
      "Pinhole leaks on copper or plastic water pipes",
      "Low water pressure across home fixtures"
    ],
    solutionsProvided: [
      "Precision leak localization and pipe condition assessment",
      "Sectional pipe replacement with copper or PEX tubing",
      "Pressure testing to ensure complete system integrity",
      "Corrosion-resistant fittings and valve upgrades"
    ],
    image: "/images/pipe-repairs.jpg",
    badge: "Essential Service",
    confirmed: true // Confirmed on live website: "minor leak or major renovation"
  },
  {
    id: "faucet-toilet-repairs",
    name: "Faucet, Toilet & Valve Repairs",
    category: "repairs",
    categoryLabel: "Plumbing Repairs",
    shortDescription: "Fix running toilets, dripping faucets, faulty shutoff valves, and leaking spigots with quality parts.",
    fullDescription: "A continuously running toilet can waste hundreds of gallons of water daily, while a leaking shutoff valve can fail when you need it most. Our skilled plumbers repair and rebuild worn cartridges, flush valves, flappers, and supply angle stops quickly and cleanly.",
    commonProblems: [
      "Toilets that run intermittently or won't stop filling",
      "Faucets dripping day and night, staining sinks",
      "Stuck or corroded emergency shut-off valves under sinks",
      "Loose or leaking outdoor sillcock / hose bibb spigots"
    ],
    solutionsProvided: [
      "Complete toilet tank rebuilds (fill valve, flapper, seals)",
      "Cartridge and O-ring replacement for single and double handle faucets",
      "Quarter-turn ball valve shut-off replacements",
      "Frost-free sillcock spigot rebuilds and replacements"
    ],
    image: "/images/hero-plumbing.jpg",
    confirmed: true
  },

  // Category 3: Installation Services
  {
    id: "fixture-installation",
    name: "Fixture Replacement & Installation",
    category: "installations",
    categoryLabel: "Installation Services",
    shortDescription: "Professional installation of new faucets, kitchen sinks, garbage disposals, toilets, and bathroom fixtures.",
    fullDescription: "Upgrading your kitchen or bathroom? We install customer-supplied fixtures or provide reliable recommendations. Every installation is securely mounted, sealed, and plumbed to Florida building codes for leak-free performance and peace of mind.",
    commonProblems: [
      "Outdated, discolored, or heavily scaled faucets and sinks",
      "Upgrading to water-saving modern dual-flush toilets",
      "Replacing a seized or noisy under-sink garbage disposal",
      "Installing modern undermount or drop-in sinks"
    ],
    solutionsProvided: [
      "Kitchen and bathroom sink fixture mounting and hookups",
      "Modern comfort-height and elongated toilet installations with wax ring seal",
      "Garbage disposal installation and drain connection",
      "Supply line replacement with braided stainless steel hoses"
    ],
    image: "/images/bathroom-fixtures.jpg",
    badge: "Customer Favorite",
    confirmed: true // Confirmed on live website: "installing new fixtures in your home or business"
  },
  {
    id: "plumbing-upgrades",
    name: "Plumbing Renovations & Upgrades",
    category: "installations",
    categoryLabel: "Installation Services",
    shortDescription: "Plumbing rough-ins and trim-outs for kitchen remodels, bathroom renovations, and utility additions.",
    fullDescription: "Whether remodeling a master bath or updating a laundry room, Everybody's Plumbing brings meticulous craftsmanship to your renovation project. We handle drain re-routing, supply lines, and fixture trim-outs.",
    commonProblems: [
      "Remodeling older homes with mismatched or corroded plumbing",
      "Relocating sinks, vanities, or appliances during renovations",
      "Ensuring renovation plumbing complies with Florida plumbing codes"
    ],
    solutionsProvided: [
      "Water and waste line relocations and extensions",
      "Complete rough-in and finish trim-out for remodels",
      "Code-compliant venting and water hammer arrestors",
      "Clear communication with homeowners and general contractors"
    ],
    image: "/images/hero-plumbing.jpg",
    confirmed: true // Confirmed: "whether it's a minor leak or a major renovation"
  },

  // Category 4: Water Systems
  {
    id: "water-heater-services",
    name: "Water Heater Repair & Replacement",
    category: "water-systems",
    categoryLabel: "Water Systems",
    shortDescription: "Reliable service for standard tank and tankless water heaters. Fast troubleshooting for lack of hot water.",
    fullDescription: "No hot water, strange rumbling sounds, or a leaking tank require prompt expert care. We inspect heating elements, thermostats, pressure relief valves, and anode rods, or replace failing units with energy-efficient models.",
    commonProblems: [
      "No hot water or lukewarm water running out too quickly",
      "Water leaking from the base or temperature & pressure (T&P) valve",
      "Rumbling, popping, or banging noises from sediment buildup",
      "Rusty or discolored hot water coming from taps"
    ],
    solutionsProvided: [
      "Electrical element and thermostat replacement for electric water heaters",
      "T&P relief valve testing and replacement",
      "Sediment flush and tank maintenance",
      "Complete water heater replacement and code-compliant installation"
    ],
    image: "/images/water-heater.jpg",
    badge: "High Demand",
    confirmed: true
  },

  // Category 5: Commercial Plumbing
  {
    id: "commercial-plumbing",
    name: "Commercial Plumbing Maintenance & Repairs",
    category: "commercial",
    categoryLabel: "Commercial Plumbing",
    shortDescription: "Dedicated plumbing service for offices, retail stores, restaurants, and light commercial properties in Jacksonville.",
    fullDescription: "Plumbing problems in a commercial facility can bring operations to an immediate halt and affect customer satisfaction. We provide dependable, courteous commercial repairs, drain maintenance, fixture installations, and backflow considerations tailored to local businesses.",
    commonProblems: [
      "High-traffic commercial restroom toilet and urinal stoppages",
      "Breakroom sink leaks and grease buildup in commercial drains",
      "Defective commercial flushometers and sensor faucets",
      "Shut-off valve failures interrupting business hours"
    ],
    solutionsProvided: [
      "Commercial toilet and flushometer valve rebuilds",
      "Routine commercial drain clearing and preventative snaking",
      "Staff breakroom, utility sink, and fixture installations",
      "Prompt scheduled service to minimize business downtime"
    ],
    image: "/images/commercial-plumbing.jpg",
    badge: "Commercial Grade",
    confirmed: true // Confirmed on live website: "in your home or business"
  }
];

export const TRUST_POINTS = [
  {
    title: "Family-Owned & Operated",
    desc: "Personal accountability, honest recommendations, and genuine pride in serving our Jacksonville neighbors.",
    icon: "Users"
  },
  {
    title: "Licensed Florida Contractor",
    desc: "Fully certified by the State of Florida (License CFC 1428104). Work completed to Florida Building Codes.",
    icon: "ShieldCheck"
  },
  {
    title: "Residential & Commercial",
    desc: "Equipped to handle home plumbing emergencies, remodels, and commercial facility maintenance.",
    icon: "Building2"
  },
  {
    title: "Direct Master Communication",
    desc: "Speak directly with experienced plumbing professionals who explain the work before any wrench turns.",
    icon: "PhoneCall"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Contact Our Office",
    description: "Call (904) 237-9164 or submit our quick online request. We respond promptly to understand your plumbing issue.",
    action: "Call (904) 237-9164",
    link: "tel:+19042379164"
  },
  {
    step: "02",
    title: "Discuss Your Needs & Options",
    description: "We review the problem with you, offer upfront honest guidance on repair vs. replacement, and schedule your appointment.",
    action: "Get An Estimate",
    link: "#contact"
  },
  {
    step: "03",
    title: "Quality Service & Clean Finish",
    description: "We arrive on time, treat your property with complete respect, complete the job cleanly, and verify everything flows right.",
    action: "Schedule Service",
    link: "#contact"
  }
];

export const FAQS = [
  {
    q: "Is Everybody's Plumbing Company licensed and insured?",
    a: "Yes. Everybody's Plumbing Company, Inc. is a licensed Certified Plumbing Contractor in the State of Florida, holding License CFC 1428104. We strictly adhere to state and local building codes for both residential and commercial projects."
  },
  {
    q: "What areas in Greater Jacksonville do you serve?",
    a: "We serve Jacksonville, Duval County, and surrounding communities including Orange Park, Clay County, St. Johns County, Jacksonville Beach, Atlantic Beach, Neptune Beach, and Fleming Island."
  },
  {
    q: "Do you offer both residential and commercial plumbing?",
    a: "Yes, we proudly service private residences, apartments, condominiums, as well as light commercial businesses, offices, and retail facilities."
  },
  {
    q: "How can I schedule a plumbing service appointment?",
    a: "The fastest way is to call us directly at (904) 237-9164. You can also fill out our online quote/appointment request form on this website, and our team will follow up promptly."
  },
  {
    q: "Can you install fixtures that I have already purchased?",
    a: "Yes! If you have purchased a new faucet, sink, garbage disposal, or toilet that you love, we can provide professional installation, hook up the water and drain connections, and ensure a leak-free fit."
  }
];
