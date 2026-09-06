/**
 * SEACOM SKILLS UNIVERSITY - INTERACTIVE CONTROLLER
 * Enterprise front-end controller handling Harvard-inspired navigation,
 * Command Palette (Cmd+K), Live Course Search across 13 Constituent Schools,
 * 3D Card Tilt, Count-up Stats, Syllabus Drawer, Online Application Form,
 * Institutional Info Disclosures, Global MOUs, and Mobile Slide-over Navigation.
 */

/* Embedded Navigation Configuration */
const navigationConfig = [
  {
    id: "about",
    title: "About",
    type: "dropdown",
    items: [
      { title: "Overview", href: "#about-overview", description: "Learn about SSU's founding vision and 50-acre Santiniketan campus." },
      { title: "Acts & Statutes", href: "#about-statutes", description: "West Bengal Act VI of 2014 & Gazette legislation." },
      { title: "Accreditation & Ranking", href: "#about-accreditation", description: "UGC 2(f) recognition & ASSOCHAM awards." },
      { title: "Recognition", href: "#about-recognition", description: "UGC, PCI, BCI, and AICTE statutory approvals." },
      { title: "Annual Reports", href: "#about-reports", description: "Institutional audits, academic achievements, and growth statistics." },
      { title: "FAQs", href: "#about-faqs", description: "Frequently asked questions regarding admissions & campus life." },
      { title: "MoUs & Collaborations", href: "#mou", description: "Global partnerships with Carleton, George Mason, and Eastern Finland." },
      { title: "Santiniketan Campus", href: "#campus", description: "Explore Bolpur Kendradangal infrastructure & skill labs." },
      { title: "NIRF Reports & Rankings", href: "#about-nirf", description: "National Institutional Ranking Framework disclosures." }
    ]
  },
  {
    id: "administration",
    title: "Administration",
    type: "dropdown",
    items: [
      { title: "Chancellor", href: "#chancellor", description: "Visionary leadership message & institutional direction." },
      { title: "Office of the Registrar", href: "#registrar", description: "Academic administration & official correspondence." },
      { title: "Ombudsperson", href: "#ombudsperson", description: "Grievance redressal mechanism for students and staff." },
      { title: "Chief Vigilance Officer", href: "#cvo", description: "Institutional transparency and compliance officer." },
      { title: "SSU Officials", href: "#officials", description: "Directory of deans, department heads, and officers." }
    ]
  },
  {
    id: "academics",
    title: "Academics",
    type: "dropdown",
    items: [
      { title: "13 Constituent Schools", href: "#academics", description: "Engineering, Pharmacy, Paramedical, Agriculture, Law & more." },
      { title: "Courses Offered (100+)", href: "#programs", description: "Diploma, B.Tech, B.Pharm, B.Sc, M.Tech, MBA & Ph.D." },
      { title: "PhD RET Programmes", href: "#research", description: "Research Entrance Test (RET) notifications & fellowships." },
      { title: "IQAC Cell", href: "#iqac", description: "Internal Quality Assurance Cell guidelines and audits." },
      { title: "Central Library", href: "#library", description: "Digital e-journals, e-books, and physical repository." }
    ]
  },
  {
    id: "student-life",
    title: "Student Life",
    type: "dropdown",
    items: [
      { title: "Placement Cell & Industry MOUs", href: "#alumni", description: "Top corporate recruiters, internships, and packages." },
      { title: "Internal Complaints Committee (ICC)", href: "#icc", description: "Gender sensitization and workplace safety committee." },
      { title: "Sports Facilities", href: "#sports", description: "Athletic grounds, indoor games, and annual sports meet." },
      { title: "Health Facilities", href: "#health", description: "On-campus medical center & round-the-clock ambulance." },
      { title: "Anti-Ragging Cell", href: "#anti-ragging", description: "Zero-tolerance policy, helpline, and UGC compliance." }
    ]
  },
  {
    id: "admissions",
    title: "Admissions",
    type: "dropdown",
    items: [
      { title: "Admission Cell 2026", href: "#admissions", description: "Direct helpline: +91 78905 02451 / 98362 95315" },
      { title: "Fees Structure", href: "#admissions-fees", description: "Transparent fee schedules for 100+ degree programs." },
      { title: "Online Application Form", href: "#apply-online", description: "Submit application form online for RET and UG/PG 2026." },
      { title: "Refund Policy", href: "#admissions-refund", description: "UGC compliant fee refund guidelines." }
    ]
  },
  {
    id: "apply",
    title: "Apply",
    type: "cta-dropdown",
    items: [
      { title: "Online Application Form 2026", href: "#apply-online", description: "Start direct online admission process." },
      { title: "Ph.D. RET Registration", href: "#research", description: "Apply for SSU Research Entrance Test 2025-26." },
      { title: "Download Prospectus", href: "#prospectus", description: "Download official 2026 academic brochure." }
    ]
  }
];

const quickLinks = [
  { title: "A to Z Index", href: "#index-az" },
  { title: "Campus Directory", href: "#directory" },
  { title: "Events Calendar", href: "#events" },
  { title: "Press & Media", href: "#press" },
  { title: "Alumni Network", href: "#alumni" },
  { title: "Student ERP Portal", href: "https://erp.seacomskillsuniversity.ac.in/" },
  { title: "Emergency Contact", href: "#contact" }
];

/* Embedded Site Metadata & Mock Media Configuration */
const siteMetadata = {
  universityName: "Seacom Skills University",
  latinMotto: "Excellentia per Peritiam",
  englishMotto: "Excellence through Skills, Innovation & Inclusive Education",
  established: 2014,
  legislation: "Established under West Bengal Act VI of 2014 (Official Gazette No. 396-Edn(U)/OM-155L/2012)",
  ugcStatus: "Recognized under Section 2(f) of the UGC Act, 1956",
  awards: [
    "Best Private University of the Year - ASSOCHAM",
    "Best University in Holistic Education - News18 & Zee 24 Ghanta",
    "UGC & NAAC Aligned Institutional Development Plan"
  ],
  campusSize: "50-Acre Sprawling Green Campus",
  location: {
    address: "Kendradangal, Bolpur, Santiniketan",
    district: "Birbhum",
    state: "West Bengal",
    pin: "731236",
    country: "India"
  },
  contact: {
    phones: ["+91 78905 02451", "+91 98362 95315", "+91 89810 24702"],
    admissionEmail: "admission@seacomskillsuniversity.org",
    registrarEmail: "registrar@seacomskillsuniversity.org",
    erpUrl: "https://erp.seacomskillsuniversity.ac.in/"
  }
};

const globalCollaborations = [
  {
    id: "mou-1",
    institution: "Carleton University (CICE)",
    country: "Canada",
    focus: "Canada-India Centre for Excellence (CICE) Partnership for Skill Development & International Mobility",
    logoText: "CARLETON UNIVERSITY CANADA"
  },
  {
    id: "mou-2",
    institution: "George Mason University",
    country: "USA",
    focus: "Joint Research Initiatives, Academic Exchange & Technology Transfer",
    logoText: "GEORGE MASON UNIVERSITY USA"
  },
  {
    id: "mou-3",
    institution: "University of Eastern Finland",
    country: "Finland",
    focus: "Center of Excellence in 3D Printing Technology & Advanced Material Research",
    logoText: "UNIVERSITY OF EASTERN FINLAND"
  },
  {
    id: "mou-4",
    institution: "Fayetteville State University",
    country: "USA",
    focus: "Global Business Management & Student Exchange Programs",
    logoText: "FAYETTEVILLE STATE UNIVERSITY"
  },
  {
    id: "mou-5",
    institution: "Near East University & Asia University",
    country: "International",
    focus: "Cross-border Health Sciences, Paramedical & Agricultural Research",
    logoText: "ASIA & NEAR EAST UNIVERSITIES"
  }
];

const statsData = [
  { value: 100, label: "Degree & Skill Courses", suffix: "+", subtitle: "UG, PG, Ph.D. & Micro-credentials" },
  { value: 13, label: "Constituent Schools", suffix: "+", subtitle: "Engineering, Pharmacy, Health, Agriculture" },
  { value: 4000, label: "Active Campus Students", suffix: "+", subtitle: "Across 50-Acre Santiniketan Campus" },
  { value: 50, label: "Awards & Recognitions", suffix: "+", subtitle: "ASSOCHAM, News18 & Zee 24 Ghanta" }
];

const academicSchools = [
  {
    id: "school-eng",
    name: "School of Engineering",
    code: "SOE",
    category: "Engineering & Technology",
    description: "Pioneering industry 4.0 technical education with specialized tracks in Computer Science, Robotics, Mechanical, Civil & Electrical Systems.",
    degrees: ["B.Tech", "M.Tech", "Diploma", "Ph.D."],
    heroImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "btech-cse",
        title: "B.Tech in Computer Science & Engineering (AI & ML)",
        duration: "4 Years",
        level: "Undergraduate",
        eligibility: "10+2 with Physics & Mathematics (Min 45%) + WBJEE / JEE Main",
        highlights: ["NVIDIA Deep Learning Lab", "Cloud Architecture Track", "Guaranteed Internship"],
        curriculum: [
          "Sem 1-2: Engineering Physics, Calculus, Python & Data Structures",
          "Sem 3-4: Object Oriented Systems, Database Engineering, Algorithms",
          "Sem 5-6: Deep Neural Networks, Computer Vision, MLOps Pipelines",
          "Sem 7-8: Capstone Industry Project, Distributed Systems, Internship"
        ]
      },
      {
        id: "btech-mech",
        title: "B.Tech in Robotics & Mechatronics Engineering",
        duration: "4 Years",
        level: "Undergraduate",
        eligibility: "10+2 Science Stream + Entrance Exam",
        highlights: ["KUKA Industrial Robotics Lab", "CAD/CAM Certification", "PLC & Automation"],
        curriculum: [
          "Sem 1-2: Applied Mechanics, Thermodynamics, C Programming",
          "Sem 3-4: Kinematics of Machines, Microcontrollers, Hydraulics",
          "Sem 5-6: Autonomous Mobile Robots, Industrial IoT, Micro-sensors",
          "Sem 7-8: Industry Apprenticeship & Autonomous Systems Thesis"
        ]
      }
    ]
  },
  {
    id: "school-pharmacy",
    name: "School of Pharmacy",
    code: "SOP",
    category: "Pharmacy & Health",
    description: "PCI Recognized pharmacy school with state-of-the-art pharmaceutics labs, pharmacology research suites, and herbal drug testing facilities.",
    degrees: ["B.Pharm", "D.Pharm", "M.Pharm"],
    heroImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "bpharm",
        title: "Bachelor of Pharmacy (B.Pharm)",
        duration: "4 Years",
        level: "Undergraduate",
        eligibility: "10+2 with Physics, Chemistry, Biology/Math (Min 45%)",
        highlights: ["PCI Approved", "Industrial Machine Room", "Clinical Pharmacovigilance"],
        curriculum: [
          "Year 1: Human Anatomy, Pharmaceutical Analysis, Inorganic Chemistry",
          "Year 2: Physical Pharmaceutics, Organic Chemistry, Biochemistry",
          "Year 3: Medicinal Chemistry, Pharmacognosy, Pharmacology",
          "Year 4: Industrial Pharmacy, Novel Drug Delivery Systems, Project"
        ]
      }
    ]
  },
  {
    id: "school-paramedical",
    name: "School of Paramedical and Allied Health Sciences",
    code: "SPAHS",
    category: "Pharmacy & Health",
    description: "Training healthcare champions through modern hospital simulation wards, pathology centers, and clinical rotations.",
    degrees: ["B.Sc", "M.Sc", "Diploma"],
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "bsc-mlt",
        title: "B.Sc in Medical Laboratory Technology (BMLT)",
        duration: "3.5 Years",
        level: "Undergraduate",
        eligibility: "10+2 with PCB (Min 45%)",
        highlights: ["Hospital Clinical Rotations", "Advanced Molecular Pathology", "NABL Lab Training"],
        curriculum: [
          "Year 1: Human Anatomy & Physiology, Clinical Biochemistry",
          "Year 2: Systematic Bacteriology, Diagnostic Hematology",
          "Year 3: Histopathology, Molecular Biology & Immunology",
          "Final 6 Months: Full-time Supervised Hospital Rotations"
        ]
      }
    ]
  },
  {
    id: "school-agriculture",
    name: "School of Agriculture",
    code: "SOA",
    category: "Agriculture & Fishery",
    description: "Sprawling experimental farm lands in Santiniketan for agronomy research, soil testing, horticulture, and organic crop breeding.",
    degrees: ["B.Sc (Hons) Agriculture", "M.Sc Agriculture"],
    heroImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "bsc-agri",
        title: "B.Sc (Hons) in Agriculture",
        duration: "4 Years",
        level: "Undergraduate",
        eligibility: "10+2 with Physics, Chemistry, Biology/Math",
        highlights: ["On-Campus Experimental Farm", "RAWE Program", "Soil Testing Lab"],
        curriculum: [
          "Sem 1-2: Fundamentals of Agronomy, Soil Science, Agricultural Economics",
          "Sem 3-4: Entomology, Plant Pathology, Crop Production Technology",
          "Sem 5-6: Agricultural Biotechnology, Farm Machinery, Seed Technology",
          "Sem 7-8: Rural Agricultural Work Experience (RAWE) & Agro-Industrial Attachment"
        ]
      }
    ]
  },
  {
    id: "school-fishery",
    name: "School of Fishery Sciences",
    code: "SOFS",
    category: "Agriculture & Fishery",
    description: "Specialized aquaculture research station focusing on inland fish breeding, water quality management, and marine biotechnology.",
    degrees: ["B.F.Sc", "Diploma in Aquaculture"],
    heroImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "bfsc",
        title: "Bachelor of Fishery Sciences (B.F.Sc)",
        duration: "4 Years",
        level: "Undergraduate",
        eligibility: "10+2 with PCB (Min 50%)",
        highlights: ["Hatchery Training Ponds", "Fish Processing Lab", "Inland Fishery Rotations"],
        curriculum: [
          "Year 1: Fish Taxonomy, Water Quality Management, Anatomy",
          "Year 2: Freshwater Aquaculture, Fish Nutrition, Pathology",
          "Year 3: Marine Fisheries, Processing Technology, Extension",
          "Year 4: Hands-on Experiential Learning Program in Commercial Fish Farms"
        ]
      }
    ]
  },
  {
    id: "school-law",
    name: "School of Legal Studies",
    code: "SOLS",
    category: "Law & Management",
    description: "BCI recognized legal education featuring an integrated moot court hall, legal aid clinic, and corporate law specialization.",
    degrees: ["BA LL.B (Hons)", "LL.B (3 Year)", "LL.M"],
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "ballb",
        title: "BA LL.B (Integrated Honours)",
        duration: "5 Years",
        level: "Undergraduate",
        eligibility: "10+2 Any Stream (Min 45%)",
        highlights: ["Bar Council Approved", "High Court Internship", "Live Moot Court Practice"],
        curriculum: [
          "Year 1-2: Political Science, Sociology, Constitutional Law, Contract Law",
          "Year 3-4: Criminal Law, Family Law, Corporate Law, Intellectual Property",
          "Year 5: Cyber Law, Environmental Law, Clinical Legal Aid & High Court Internship"
        ]
      }
    ]
  },
  {
    id: "school-mgmt",
    name: "School of Commerce & Management Studies",
    code: "SCMS",
    category: "Law & Management",
    description: "Fostering entrepreneurial leaders, legal strategists, and corporate executives grounded in global ethics.",
    degrees: ["BBA", "MBA", "B.Com (Hons)", "M.Com"],
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "mba-fintech",
        title: "MBA in Financial Technology & Business Analytics",
        duration: "2 Years",
        level: "Postgraduate",
        eligibility: "Bachelor's Degree in any discipline + MAT/CAT/JEMAT",
        highlights: ["Bloomberg Terminal Certification", "Python for Finance", "Corporate Leadership Track"],
        curriculum: [
          "Sem 1: Financial Accounting, Managerial Economics, Organizational Dynamics",
          "Sem 2: Data Analytics with R/Python, Fintech Ecosystems, Corporate Law",
          "Sem 3: Blockchain Applications, Algorithmic Trading, Elective Specialization",
          "Sem 4: Corporate Internship & Master Thesis Presentation"
        ]
      }
    ]
  },
  {
    id: "school-computer-app",
    name: "School of Computer Applications",
    code: "SOCA",
    category: "Engineering & Technology",
    description: "Focused software engineering school offering BCA and MCA programs in Full-stack Development, Cloud Computing, and Cybersecurity.",
    degrees: ["BCA", "MCA"],
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "bca",
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        level: "Undergraduate",
        eligibility: "10+2 with Mathematics/Computer Science/Information Practice",
        highlights: ["React/Node.js Lab", "AWS Cloud Academy", "Git & DevOps Track"],
        curriculum: [
          "Year 1: Programming in C/C++, Computer Fundamentals, Discrete Math",
          "Year 2: Java Programming, Web Technologies, Database Systems",
          "Year 3: Python Full-stack, Mobile App Development, Capstone Live Project"
        ]
      }
    ]
  },
  {
    id: "school-life-sci",
    name: "School of Life Sciences",
    code: "SOLSC",
    category: "Arts & Life Sciences",
    description: "Advanced research in Microbiology, Biotechnology, and Botany with modern gene amplification and culture facilities.",
    degrees: ["B.Sc (Hons)", "M.Sc", "Ph.D."],
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "bsc-biotech",
        title: "B.Sc (Hons) in Biotechnology",
        duration: "3 Years",
        level: "Undergraduate",
        eligibility: "10+2 with Biology & Chemistry",
        highlights: ["PCR & Gel Electrophoresis Suite", "Tissue Culture Lab", "Bioinformatics"],
        curriculum: [
          "Year 1: Cell Biology, Microbiology, Organic Chemistry",
          "Year 2: Genetics, Molecular Biology, Enzymology",
          "Year 3: Recombinant DNA Tech, Immunology, Industrial Biotech Thesis"
        ]
      }
    ]
  },
  {
    id: "school-skill-hotel",
    name: "School of Skill Development & Hotel Management",
    code: "SSDHM",
    category: "Skill Dev & Hotel Mgmt",
    description: "NSDC aligned micro-credential certifications, vocational diplomas, and immediate employment-ready hotel management training.",
    degrees: ["B.Sc Hotel Mgmt", "B.Voc", "D.Voc"],
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "bsc-hm",
        title: "B.Sc in Hospitality & Hotel Administration",
        duration: "3 Years",
        level: "Undergraduate",
        eligibility: "10+2 Any Stream",
        highlights: ["Model Training Kitchen", "Front Office Lab", "5-Star Hotel Internship"],
        curriculum: [
          "Year 1: Food Production Fundamentals, Housekeeping, Food Service",
          "Year 2: Advanced Culinary Arts, Front Office Management, Beverage Science",
          "Year 3: Hotel Financial Management, 6-Month Paid 5-Star Hotel Internship"
        ]
      }
    ]
  },
  {
    id: "school-basic-sci",
    name: "School of Basic & Applied Sciences",
    code: "SOBAS",
    category: "Arts & Life Sciences",
    description: "Fundamental scientific research in Mathematics, Physics, Chemistry, and Environmental Science with analytical instrumentation suites.",
    degrees: ["B.Sc (Hons)", "M.Sc", "Ph.D."],
    heroImage: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "msc-chem",
        title: "M.Sc in Applied Organic & Analytical Chemistry",
        duration: "2 Years",
        level: "Postgraduate",
        eligibility: "B.Sc Chemistry (Hons) with minimum 50% marks",
        highlights: ["NMR & HPLC Spectroscopy", "Green Chemistry Lab", "CSIR-NET Coaching Track"],
        curriculum: [
          "Sem 1: Advanced Organic Reaction Mechanisms, Quantum Chemistry",
          "Sem 2: Analytical Spectroscopy, Separation Techniques",
          "Sem 3: Polymer Chemistry, Synthetic Methodologies",
          "Sem 4: Master Dissertation & Industrial R&D Attachment"
        ]
      }
    ]
  },
  {
    id: "school-humanities",
    name: "School of Humanities & Social Sciences",
    code: "SOHSS",
    category: "Arts & Life Sciences",
    description: "Fostering critical thinking, editorial journalism, literature, and social development in the cultural heartland of Santiniketan.",
    degrees: ["BA (Hons)", "MA", "Ph.D."],
    heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "ma-english",
        title: "MA in English & Comparative Cultural Literature",
        duration: "2 Years",
        level: "Postgraduate",
        eligibility: "BA English (Hons) or Graduation with English literature",
        highlights: ["Tagore & Santiniketan Studies", "Editorial Publishing Track", "Digital Humanities Lab"],
        curriculum: [
          "Sem 1: Classical British Literature, World Dramaturgy",
          "Sem 2: Postcolonial Theory & South Asian Writings",
          "Sem 3: Rabindranath Tagore Studies & Translation Theory",
          "Sem 4: Thesis Dissertation & Publishing Apprenticeship"
        ]
      }
    ]
  },
  {
    id: "school-education",
    name: "School of Education & Vocational Training",
    code: "SOEVT",
    category: "Skill Dev & Hotel Mgmt",
    description: "NCTE aligned teacher training, pedagogical research, and micro-credential vocational skill development for modern educators.",
    degrees: ["B.Ed", "D.El.Ed", "Diploma"],
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    programs: [
      {
        id: "bed-program",
        title: "Bachelor of Education (B.Ed)",
        duration: "2 Years",
        level: "Undergraduate",
        eligibility: "Bachelor's/Master's Degree with minimum 50% aggregate",
        highlights: ["NCTE Recognized", "School Internship Rotations", "Smart Classroom Technology"],
        curriculum: [
          "Year 1: Childhood & Growing Up, Contemporary Education in India, Pedagogy",
          "Year 2: School Internship (16 Weeks), Assessment for Learning, Gender & Society"
        ]
      }
    ]
  }
];

const campusStories = [
  {
    id: "story-1",
    category: "RESEARCH & INNOVATION",
    title: "Seacom University Collaborates with Univ. of Eastern Finland to Establish 3D Printing Tech Center",
    date: "August 24, 2026",
    summary: "A international joint initiative creating a Center of Excellence for 3D bioprinting and advanced additive manufacturing in Santiniketan.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read"
  },
  {
    id: "story-2",
    category: "RURAL COMMUNITY INITIATIVE",
    title: "Seacom Skills University Adopts 5 Neighboring Villages for Rural Skill Development Workshops",
    date: "August 15, 2026",
    summary: "As part of the District Annual Plan, SSU faculties provide free vocational skill training and small entrepreneurship kits to rural youth.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read"
  },
  {
    id: "story-3",
    category: "GLOBAL PARTNERSHIPS",
    title: "Carleton University CICE (Canada) Signs MoU with Seacom for Student Skill Mobility",
    date: "July 28, 2026",
    summary: "Canada-India Centre for Excellence partnership enables international skill certification and exchange programs for Seacom undergraduates.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
    readTime: "3 min read"
  }
];

const alumniSpotlights = [
  {
    id: "alumni-1",
    name: "Priya Sharma",
    degree: "B.Tech Computer Science & Engineering",
    batchYear: 2022,
    company: "Tata Consultancy Services",
    role: "Cloud Solutions Architect",
    package: "₹14.5 LPA",
    quote: "The hands-on robotics and cloud skill labs gave me a practical engineering edge that immediately elevated my industry career.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "alumni-2",
    name: "Anirban Roy",
    degree: "B.Sc Medical Laboratory Technology",
    batchYear: 2021,
    company: "Apollo Hospitals",
    role: "Senior Diagnostic Pathologist",
    package: "₹9.2 LPA",
    quote: "Clinical rotations at leading super-speciality hospitals during my degree gave me zero-latency confidence from day one.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "alumni-3",
    name: "Sneha Mukherjee",
    degree: "MBA Financial Technology",
    batchYear: 2023,
    company: "Deloitte India",
    role: "Fintech Risk Advisory Associate",
    package: "₹12.0 LPA",
    quote: "The rigor of Seacom's Bloomberg terminal simulations and industry mentorship was instrumental in landing my corporate placement.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initFullscreenCurtain();
  initNavigation();
  initStickyHeader();
  initCommandPalette();
  initCourseFinder();
  initProgramExplorer();
  initGlobalMOUs();
  initStatsCounter();
  initSyllabusDrawer();
  initApplyModal();
  initInfoModal();
  initStoriesAndAlumni();
  initNewsletterValidation();
  initGlobalLinkRouter();
  initFadeUpAnimations();
});

/* ==========================================================================
   HARVARD-INSPIRED FULLSCREEN CURTAIN MENU CONTROLLER
   ========================================================================== */
function initFullscreenCurtain() {
  const triggerBtn = document.getElementById('curtainMenuTrigger');
  const curtain = document.getElementById('fullscreenCurtain');
  const closeBtn = document.getElementById('curtainCloseBtn');
  const catList = document.getElementById('curtainCatList');
  const subHeader = document.getElementById('curtainSubHeader');
  const subGrid = document.getElementById('curtainSubGrid');
  const quickLinksBox = document.getElementById('curtainQuickLinks');

  if (!curtain || !navigationConfig) return;

  // Render bottom quick links bar
  if (quickLinksBox && quickLinks) {
    quickLinksBox.innerHTML = quickLinks.map(ql => `
      <a href="${ql.href}" class="curtain-quick-link" ${ql.href.startsWith('http') ? 'target="_blank"' : ''}>
        ${ql.title}
      </a>
    `).join('');
  }

  // Render category list
  if (catList) {
    catList.innerHTML = navigationConfig.map((cat, idx) => `
      <li class="curtain-cat-item" style="transition-delay: ${idx * 40}ms;">
        <a class="curtain-cat-link ${idx === 0 ? 'active' : ''}" data-cat-idx="${idx}">
          <span class="num">0${idx + 1}</span>
          <span>${cat.title}</span>
        </a>
      </li>
    `).join('');
  }

  // Helper to render right column sub-items
  function renderSubPanel(catIdx) {
    const cat = navigationConfig[catIdx];
    if (!cat) return;

    if (subHeader) subHeader.textContent = `${cat.title.toUpperCase()} DIRECTORY`;
    if (subGrid) {
      subGrid.innerHTML = cat.items.map(item => `
        <a href="${item.href}" class="curtain-sub-item">
          <span class="curtain-sub-title">${item.title} ➔</span>
          ${item.description ? `<span class="curtain-sub-desc">${item.description}</span>` : ''}
        </a>
      `).join('');

      subGrid.querySelectorAll('.curtain-sub-item').forEach(subLink => {
        subLink.addEventListener('click', () => {
          closeCurtain();
        });
      });
    }

    catList?.querySelectorAll('.curtain-cat-link').forEach((link, idx) => {
      if (idx === catIdx) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  renderSubPanel(0);

  catList?.querySelectorAll('.curtain-cat-link').forEach(link => {
    const idx = parseInt(link.getAttribute('data-cat-idx') || '0', 10);
    link.addEventListener('mouseenter', () => renderSubPanel(idx));
    link.addEventListener('click', (e) => {
      renderSubPanel(idx);
    });
  });

  const openCurtain = () => {
    curtain.classList.add('active');
    document.body.style.overflow = 'hidden';
    triggerBtn?.setAttribute('aria-expanded', 'true');
  };

  const closeCurtain = () => {
    curtain.classList.remove('active');
    document.body.style.overflow = '';
    triggerBtn?.setAttribute('aria-expanded', 'false');
  };

  window.openCurtainMenu = openCurtain;
  window.closeCurtainMenu = closeCurtain;

  triggerBtn?.addEventListener('click', openCurtain);
  closeBtn?.addEventListener('click', closeCurtain);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && curtain.classList.contains('active')) {
      closeCurtain();
    }
  });
}

// Global click delegator for curtain menu triggers
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('#curtainMenuTrigger, .nav-curtain-trigger');
  if (trigger) {
    e.preventDefault();
    if (window.openCurtainMenu) window.openCurtainMenu();
  }
  const close = e.target.closest('#curtainCloseBtn, .curtain-close-btn');
  if (close) {
    e.preventDefault();
    if (window.closeCurtainMenu) window.closeCurtainMenu();
  }
});

/* ==========================================================================
   DESKTOP GLASS NAVIGATION SYSTEM & ACCESSIBILITY
   ========================================================================== */
function initNavigation() {
  const mainNav = document.getElementById('mainNav');
  if (!mainNav || !navigationConfig) return;

  mainNav.innerHTML = navigationConfig.map((cat, catIdx) => {
    const isCta = cat.type === 'cta-dropdown';
    const isWide = cat.items.length > 5;
    const navId = `nav-cat-${catIdx}`;
    const menuId = `menu-cat-${catIdx}`;

    const dropdownItemsHtml = cat.items.map(item => `
      <a href="${item.href}" class="nav-dropdown-item" role="menuitem" tabindex="-1">
        <span class="nav-dropdown-title">${item.title}</span>
        ${item.description ? `<span class="nav-dropdown-desc">${item.description}</span>` : ''}
      </a>
    `).join('');

    return `
      <li class="nav-item ${isCta ? 'nav-item-cta' : ''}" data-cat-index="${catIdx}">
        <a href="${cat.items.length > 0 ? cat.items[0].href : '#'}" class="nav-link" id="${navId}" aria-haspopup="${cat.items.length > 0 ? 'true' : 'false'}" aria-expanded="false" aria-controls="${menuId}">
          ${cat.title} ${cat.items.length > 0 ? '▾' : ''}
        </a>
        ${cat.items.length > 0 ? `
          <div class="nav-dropdown-panel ${isWide ? 'wide' : ''}" id="${menuId}" role="menu" aria-labelledby="${navId}">
            ${dropdownItemsHtml}
          </div>
        ` : ''}
      </li>
    `;
  }).join('');

  setupDesktopHoverDebounce();
  setupKeyboardAccessibility();
  setupMobileDrawer();
}

function setupDesktopHoverDebounce() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    let hideTimer = null;
    const link = item.querySelector('.nav-link');
    const panel = item.querySelector('.nav-dropdown-panel');

    const showMenu = () => {
      if (hideTimer) clearTimeout(hideTimer);
      navItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          other.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.add('is-open');
      link?.setAttribute('aria-expanded', 'true');
    };

    const hideMenu = () => {
      hideTimer = setTimeout(() => {
        item.classList.remove('is-open');
        link?.setAttribute('aria-expanded', 'false');
      }, 150);
    };

    item.addEventListener('mouseenter', showMenu);
    item.addEventListener('mouseleave', hideMenu);
    panel?.addEventListener('mouseenter', showMenu);
    panel?.addEventListener('mouseleave', hideMenu);
  });
}

function setupKeyboardAccessibility() {
  const navMenu = document.getElementById('mainNav');
  if (!navMenu) return;

  navMenu.addEventListener('keydown', (e) => {
    const activeItem = document.activeElement;
    const currentNavItem = activeItem?.closest('.nav-item');
    if (!currentNavItem) return;

    const panel = currentNavItem.querySelector('.nav-dropdown-panel');
    const items = panel ? Array.from(panel.querySelectorAll('.nav-dropdown-item')) : [];
    const triggerLink = currentNavItem.querySelector('.nav-link');

    if (e.key === 'Escape') {
      currentNavItem.classList.remove('is-open');
      triggerLink?.setAttribute('aria-expanded', 'false');
      triggerLink?.focus();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!currentNavItem.classList.contains('is-open')) {
        currentNavItem.classList.add('is-open');
        triggerLink?.setAttribute('aria-expanded', 'true');
      }
      if (activeItem === triggerLink && items.length > 0) {
        items[0].focus();
      } else {
        const currIndex = items.indexOf(activeItem);
        if (currIndex >= 0 && currIndex < items.length - 1) {
          items[currIndex + 1].focus();
        }
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const currIndex = items.indexOf(activeItem);
      if (currIndex > 0) {
        items[currIndex - 1].focus();
      } else if (currIndex === 0) {
        triggerLink?.focus();
      }
    }
  });
}

function setupMobileDrawer() {
  const mobileToggle = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const closeBtn = document.getElementById('mobileDrawerClose');
  const container = document.getElementById('mobileAccordionContainer');

  if (!drawer || !container) return;

  container.innerHTML = navigationConfig.map((cat, idx) => `
    <div class="mobile-accordion-item">
      <button class="mobile-accordion-header" data-index="${idx}">
        <span>${cat.title}</span>
        <span class="arrow">▾</span>
      </button>
      <div class="mobile-accordion-body">
        ${cat.items.map(sub => `
          <a href="${sub.href}" class="mobile-sublink">${sub.title}</a>
        `).join('')}
      </div>
    </div>
  `).join('');

  const openDrawer = () => {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  };

  mobileToggle?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  const headers = container.querySelectorAll('.mobile-accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      container.querySelectorAll('.mobile-accordion-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  container.querySelectorAll('.mobile-sublink').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   STICKY HEADER & GLASS EFFECT
   ========================================================================== */
function initStickyHeader() {
  const navbar = document.querySelector('.sticky-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   COMMAND PALETTE / SEARCH MODAL (CMD+K / CTRL+K)
   ========================================================================== */
function initCommandPalette() {
  const modal = document.getElementById('commandModal');
  const triggerBtns = document.querySelectorAll('.cmd-k-trigger');
  const searchInput = document.getElementById('commandSearchInput');
  const resultsContainer = document.getElementById('commandResults');

  if (!modal) return;

  let selectedIndex = 0;

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput?.focus(), 100);
    renderSearchResults('');
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  triggerBtns.forEach(btn => btn.addEventListener('click', openModal));

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      modal.classList.contains('active') ? closeModal() : openModal();
    }
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  searchInput?.addEventListener('input', (e) => {
    selectedIndex = 0;
    renderSearchResults(e.target.value.toLowerCase().trim());
  });

  searchInput?.addEventListener('keydown', (e) => {
    const items = resultsContainer?.querySelectorAll('.command-item') || [];
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateSelection(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items[selectedIndex]) {
        items[selectedIndex].click();
      }
    }
  });

  function updateSelection(items) {
    items.forEach((item, index) => {
      if (index === selectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  function renderSearchResults(query) {
    if (!resultsContainer) return;
    resultsContainer.innerHTML = '';

    const allPrograms = [];
    academicSchools.forEach(school => {
      school.programs.forEach(prog => {
        allPrograms.push({ programId: prog.id, title: prog.title, type: 'Program', school: school.name, duration: prog.duration });
      });
    });

    const filtered = query === '' 
      ? allPrograms.slice(0, 8) 
      : allPrograms.filter(p => p.title.toLowerCase().includes(query) || p.school.toLowerCase().includes(query));

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">No programs found matching "${query}" across 13 schools</div>`;
      return;
    }

    const groupTitle = document.createElement('div');
    groupTitle.className = 'command-group-title';
    groupTitle.textContent = query === '' ? '13 CONSTITUENT SCHOOLS - POPULAR DEGREES' : `MATCHING PROGRAMS (${filtered.length})`;
    resultsContainer.appendChild(groupTitle);

    filtered.forEach((item, index) => {
      const el = document.createElement('div');
      el.className = `command-item ${index === selectedIndex ? 'selected' : ''}`;
      el.innerHTML = `
        <div>
          <strong style="display: block; color: var(--text-primary); font-size: 0.95rem;">${item.title}</strong>
          <span style="font-size: 0.78rem; color: var(--text-muted);">${item.school} • ${item.duration}</span>
        </div>
        <span style="font-size: 0.72rem; padding: 0.2rem 0.5rem; background: var(--gold-tint); color: var(--gold-dark); border-radius: 4px; font-weight: 700;">${item.type}</span>
      `;
      el.addEventListener('click', () => {
        closeModal();
        const section = document.getElementById('programs');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          openSyllabusForProgram(item.programId);
        }, 400);
      });
      resultsContainer.appendChild(el);
    });
  }
}

/* ==========================================================================
   HERO EMBEDDED COURSE & DEGREE FINDER
   ========================================================================== */
function initCourseFinder() {
  const schoolSelect = document.getElementById('finderSchool');
  const searchInput = document.getElementById('finderSearch');
  const submitBtn = document.getElementById('finderSubmitBtn');
  const levelTabs = document.querySelectorAll('.finder-tab');

  if (schoolSelect) {
    schoolSelect.innerHTML = `<option value="All">All 13 Constituent Schools</option>` +
      academicSchools.map(s => `<option value="${s.id}">${s.name} (${s.code})</option>`).join('');
  }

  let activeLevel = 'All Levels';
  levelTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      levelTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeLevel = tab.getAttribute('data-level') || 'All Levels';
    });
  });

  submitBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const query = searchInput?.value.trim().toLowerCase() || '';
    const selectedSchoolId = schoolSelect?.value || 'All';

    window.filterProgramGrid(query, selectedSchoolId, activeLevel);

    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* ==========================================================================
   PROGRAM EXPLORER (3D CARD TILT & FILTERS)
   ========================================================================== */
function initProgramExplorer() {
  const grid = document.getElementById('programsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid) return;

  function renderPrograms(categoryFilter = 'All', searchQuery = '', schoolIdFilter = 'All', levelFilter = 'All Levels') {
    grid.innerHTML = '';

    let matchCount = 0;

    academicSchools.forEach(school => {
      if (categoryFilter !== 'All' && school.category !== categoryFilter) return;
      if (schoolIdFilter !== 'All' && school.id !== schoolIdFilter) return;

      school.programs.forEach(program => {
        if (levelFilter !== 'All Levels') {
          if (levelFilter === 'Undergraduate' && program.level !== 'Undergraduate') return;
          if (levelFilter === 'Postgraduate' && program.level !== 'Postgraduate') return;
          if (levelFilter === 'Ph.D. RET' && !program.title.includes('Ph.D') && program.level !== 'Ph.D.') return;
        }

        if (searchQuery !== '') {
          const matchTitle = program.title.toLowerCase().includes(searchQuery);
          const matchSchool = school.name.toLowerCase().includes(searchQuery) || school.code.toLowerCase().includes(searchQuery);
          const matchHighlights = program.highlights.some(h => h.toLowerCase().includes(searchQuery));
          if (!matchTitle && !matchSchool && !matchHighlights) return;
        }

        matchCount++;
        const card = document.createElement('article');
        card.className = 'program-card';
        
        card.innerHTML = `
          <div class="program-card-img">
            <img src="${school.heroImage}" alt="${program.title}" loading="lazy" />
            <span class="program-card-badge">${program.level}</span>
          </div>
          <div class="program-card-body">
            <span class="program-school-code">${school.code} • ${school.name}</span>
            <h3 class="program-card-title">${program.title}</h3>
            <p class="program-card-desc">Eligibility: ${program.eligibility}</p>
            <div class="program-highlights-tags">
              ${program.highlights.map(h => `<span class="htag">${h}</span>`).join('')}
            </div>
            <div class="program-card-footer">
              <span class="program-duration">⏱ ${program.duration}</span>
              <button class="syllabus-btn" data-program-id="${program.id}">
                View Syllabus ➔
              </button>
            </div>
          </div>
        `;

        card.addEventListener('mousemove', handleCardTilt);
        card.addEventListener('mouseleave', resetCardTilt);

        grid.appendChild(card);
      });
    });

    if (matchCount === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-gold);">
          <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--gold-dark);">No Degree Programs Found</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.25rem;">Try adjusting your keyword search or school filter.</p>
          <button class="btn-primary" onclick="window.filterProgramGrid('','All','All Levels');">Reset Course Filters ↺</button>
        </div>
      `;
    }

    attachSyllabusListeners();
  }

  window.filterProgramGrid = (searchQuery = '', schoolId = 'All', level = 'All Levels') => {
    filterBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-category="All"]')?.classList.add('active');
    renderPrograms('All', searchQuery, schoolId, level);
  };

  function handleCardTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  }

  function resetCardTilt(e) {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category') || 'All';
      renderPrograms(category);
    });
  });

  renderPrograms();
}

/* ==========================================================================
   GLOBAL MOUs & COLLABORATIONS SHOWCASE
   ========================================================================== */
function initGlobalMOUs() {
  const mouContainer = document.getElementById('mouContainer');
  if (!mouContainer) return;

  mouContainer.innerHTML = globalCollaborations.map(mou => `
    <div class="mou-card">
      <div class="mou-country-badge">${mou.country} PARTNERSHIP</div>
      <h4>${mou.institution}</h4>
      <p>${mou.focus}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   STATS TICKER COUNT-UP ANIMATION
   ========================================================================== */
function initStatsCounter() {
  const container = document.getElementById('statsContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="stats-grid">
      ${statsData.map(stat => `
        <div class="stat-card">
          <div class="stat-number-wrapper">
            ${stat.prefix || ''}<span class="counter-num" data-target="${stat.value}">0</span>${stat.suffix || ''}
          </div>
          <div class="stat-label">${stat.label}</div>
          <div class="stat-subtitle">${stat.subtitle}</div>
        </div>
      `).join('')}
    </div>
  `;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(container);

  function animateCounters() {
    const counters = container.querySelectorAll('.counter-num');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000;
      const start = 0;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = (target - start) / steps;
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target >= 1000 ? target.toLocaleString() : Math.round(target);
          clearInterval(timer);
        } else {
          counter.textContent = Math.round(current);
        }
      }, stepTime);
    });
  }
}

/* ==========================================================================
   SYLLABUS DRAWER MODAL
   ========================================================================== */
function initSyllabusDrawer() {
  const drawer = document.getElementById('syllabusDrawer');
  const closeBtn = document.getElementById('drawerCloseBtn');

  if (!drawer) return;

  const closeDrawer = () => {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeDrawer);
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

function openSyllabusForProgram(programId) {
  const drawer = document.getElementById('syllabusDrawer');
  const content = document.getElementById('drawerBody');
  if (!drawer || !content) return;

  let foundProg = null;
  let foundSchool = null;

  academicSchools.forEach(school => {
    const match = school.programs.find(p => p.id === programId);
    if (match) {
      foundProg = match;
      foundSchool = school;
    }
  });

  if (foundProg && foundSchool) {
    content.innerHTML = `
      <div class="gold-badge" style="margin-bottom: 0.75rem;">${foundSchool.name} (${foundSchool.code})</div>
      <h2 class="font-display" style="font-size: 1.75rem; margin-bottom: 0.5rem;">${foundProg.title}</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Duration: <strong>${foundProg.duration}</strong> | Eligibility: ${foundProg.eligibility}</p>
      
      <h3 style="font-size: 1.1rem; color: var(--gold-dark); margin-bottom: 1rem; border-bottom: 1px solid var(--border-light); padding-bottom: 0.4rem;">
        CURRICULUM ARCHITECTURE & SYLLABUS
      </h3>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        ${foundProg.curriculum.map(c => {
          const colonIdx = c.indexOf(':');
          const title = colonIdx !== -1 ? c.substring(0, colonIdx) : 'Module';
          const desc = colonIdx !== -1 ? c.substring(colonIdx + 1) : c;
          return `
            <li style="background: var(--bg-muted); padding: 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--gold-primary);">
              <strong style="display: block; color: var(--text-primary); margin-bottom: 0.2rem;">${title}</strong>
              <span style="font-size: 0.9rem; color: var(--text-secondary);">${desc}</span>
            </li>
          `;
        }).join('')}
      </ul>

      <div style="background: var(--gold-tint); border: 1px solid var(--border-gold); padding: 1.25rem; border-radius: var(--radius-md); text-align: center;">
        <h4 style="color: var(--gold-dark); margin-bottom: 0.4rem;">Apply for Session 2026-27</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Scholarships & seat allocations open for academic session 2026-27.</p>
        <button class="btn-primary" onclick="document.getElementById('syllabusDrawer').classList.remove('active'); document.body.style.overflow=''; window.openApplyModal('${foundProg.id}');">
          Begin Online Application ➔
        </button>
      </div>
    `;
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function attachSyllabusListeners() {
  const buttons = document.querySelectorAll('.syllabus-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const programId = btn.getAttribute('data-program-id');
      if (programId) openSyllabusForProgram(programId);
    });
  });
}

/* ==========================================================================
   ONLINE ADMISSION APPLICATION MODAL CONTROLLER
   ========================================================================== */
function initApplyModal() {
  const modal = document.getElementById('applyModal');
  const closeBtn = document.getElementById('applyModalCloseBtn');
  const form = document.getElementById('onlineApplyForm');
  const schoolSelect = document.getElementById('applySchoolSelect');
  const programSelect = document.getElementById('applyProgramSelect');
  const feeBox = document.getElementById('feeEstimateBox');
  const feeContent = document.getElementById('feeEstimateContent');
  const feedback = document.getElementById('applyFormFeedback');

  if (!modal) return;

  const openModal = (preselectedProgramId = '') => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    populateSchoolSelect();

    if (preselectedProgramId) {
      academicSchools.forEach(school => {
        const prog = school.programs.find(p => p.id === preselectedProgramId);
        if (prog && schoolSelect && programSelect) {
          schoolSelect.value = school.id;
          updateProgramSelect(school.id);
          programSelect.value = prog.id;
          updateFeeEstimate(prog);
        }
      });
    }
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.openApplyModal = openModal;

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function populateSchoolSelect() {
    if (!schoolSelect) return;
    schoolSelect.innerHTML = `<option value="">Select Constituent School...</option>` +
      academicSchools.map(s => `<option value="${s.id}">${s.name} (${s.code})</option>`).join('');
  }

  schoolSelect?.addEventListener('change', (e) => {
    const schoolId = e.target.value;
    updateProgramSelect(schoolId);
  });

  function updateProgramSelect(schoolId) {
    if (!programSelect) return;
    const school = academicSchools.find(s => s.id === schoolId);
    if (school) {
      programSelect.innerHTML = `<option value="">Select Degree Program...</option>` +
        school.programs.map(p => `<option value="${p.id}">${p.title} (${p.duration})</option>`).join('');
    } else {
      programSelect.innerHTML = `<option value="">Select Degree Program...</option>`;
    }
    if (feeBox) feeBox.style.display = 'none';
  }

  programSelect?.addEventListener('change', (e) => {
    const progId = e.target.value;
    let foundProg = null;
    academicSchools.forEach(s => {
      const match = s.programs.find(p => p.id === progId);
      if (match) foundProg = match;
    });
    if (foundProg) updateFeeEstimate(foundProg);
  });

  function updateFeeEstimate(prog) {
    if (!feeBox || !feeContent) return;
    feeBox.style.display = 'block';
    let baseFee = "₹45,000 / semester";
    if (prog.title.includes('B.Pharm') || prog.title.includes('Computer Science')) baseFee = "₹55,000 / semester";
    if (prog.title.includes('B.Sc (Hons) Agriculture') || prog.title.includes('MBA')) baseFee = "₹50,000 / semester";
    if (prog.title.includes('Ph.D')) baseFee = "₹35,000 / semester";
    feeContent.textContent = `${prog.title}: ${baseFee} (Govt Scholarship Eligible)`;
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (feedback) {
      feedback.style.display = 'block';
      feedback.style.color = '#00ff9d';
      feedback.textContent = '✅ Application Submitted Successfully! Our Admission Officer will contact you within 24 hours.';
    }
    setTimeout(() => {
      if (form) form.reset();
      if (feeBox) feeBox.style.display = 'none';
      if (feedback) feedback.style.display = 'none';
      closeModal();
    }, 2500);
  });
}

/* ==========================================================================
   INSTITUTIONAL DISCLOSURE & GOVERNANCE MODAL CONTROLLER
   ========================================================================== */
function initInfoModal() {
  const modal = document.getElementById('infoModal');
  const closeBtn = document.getElementById('infoModalCloseBtn');
  const titleEl = document.getElementById('infoModalTitle');
  const badgeEl = document.getElementById('infoModalBadge');
  const bodyEl = document.getElementById('infoModalBody');

  if (!modal) return;

  const openModal = (targetKey) => {
    const info = getDisclosureContent(targetKey);
    if (!info) return;

    if (titleEl) titleEl.textContent = info.title;
    if (badgeEl) badgeEl.textContent = info.badge;
    if (bodyEl) bodyEl.innerHTML = info.html;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.openInfoModal = openModal;

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function getDisclosureContent(key) {
    const disclosures = {
      'chancellor': {
        badge: 'UNIVERSITY LEADERSHIP',
        title: "Chancellor's Message",
        html: `
          <h4>Vision for Excellence through Practical Skills</h4>
          <p>Welcome to Seacom Skills University. Our mission in historic Santiniketan is to combine editorial academic rigor with industry-aligned skill laboratories.</p>
          <ul>
            <li><strong>Established:</strong> West Bengal Act VI of 2014 & UGC 2(f) statutory recognition.</li>
            <li><strong>Campus Footprint:</strong> Sprawling 50-acre green campus in Bolpur Kendradangal.</li>
            <li><strong>Global Reach:</strong> International MOUs with Carleton University (Canada), George Mason University (USA), and Univ. of Eastern Finland.</li>
          </ul>
        `
      },
      'registrar': {
        badge: 'OFFICE OF REGISTRAR',
        title: "Academic Administration & Records",
        html: `
          <h4>Official Correspondence & Academic Audits</h4>
          <p>The Registrar's office manages institutional compliance, UGC mandatory disclosures, examination registries, and degree attestations.</p>
          <ul>
            <li><strong>Official Contact:</strong> registrar@seacomskillsuniversity.org</li>
            <li><strong>University ERP:</strong> Integrated Student ERP & Academic Bank of Credits (ABC) portal.</li>
            <li><strong>Office Hours:</strong> Monday – Saturday (9:30 AM – 5:30 PM).</li>
          </ul>
        `
      },
      'nirf': {
        badge: 'STATUTORY DISCLOSURES',
        title: "NIRF & UGC Mandatory Disclosures",
        html: `
          <h4>National Institutional Ranking Framework</h4>
          <p>Seacom Skills University complies fully with UGC guidelines, publishing annual academic audits, research output statistics, and student placement data.</p>
          <ul>
            <li><strong>ASSOCHAM Award:</strong> Best Private University of the Year.</li>
            <li><strong>UGC Section 2(f):</strong> Statutory recognition under UGC Act, 1956.</li>
            <li><strong>Equal Opportunity:</strong> Anti-Ragging Cell & Internal Complaints Committee (ICC).</li>
          </ul>
        `
      },
      'library': {
        badge: 'ACADEMIC RESOURCES',
        title: "Central Library & Digital Repository",
        html: `
          <h4>State-of-the-Art Digital & Physical Knowledge Hub</h4>
          <p>The Central Library houses over 45,000 volumes, international journal subscriptions, and 24/7 digital access to IEEE, ScienceDirect, and DELNET databases.</p>
          <ul>
            <li><strong>e-Learning Portal:</strong> Full access to NPTEL, SWAYAM, and National Digital Library (NDLI).</li>
            <li><strong>Study Quadrangles:</strong> Quiet reading zones with high-speed campus Wi-Fi.</li>
          </ul>
        `
      },
      'sports': {
        badge: 'STUDENT LIFE & ATHLETICS',
        title: "Sports Facilities & Athletic Grounds",
        html: `
          <h4>Holistic Physical Fitness & Competitive Sports</h4>
          <p>SSU features full-size football quadrangles, cricket pitches, basketball courts, and indoor badminton arenas in Santiniketan.</p>
          <ul>
            <li><strong>Annual Sports Meet:</strong> Inter-school tournaments across 13 constituent schools.</li>
            <li><strong>Gymnasium:</strong> Dedicated fitness & wellness center for students and faculty.</li>
          </ul>
        `
      },
      'health': {
        badge: 'CAMPUS WELLNESS',
        title: "Health Facilities & Ambulance Service",
        html: `
          <h4>Round-the-Clock On-Campus Medical Care</h4>
          <p>Featuring an on-campus health clinic with resident medical officers, emergency nursing staff, and a dedicated 24/7 emergency ambulance service.</p>
        `
      },
      'anti-ragging': {
        badge: 'UGC COMPLIANCE',
        title: "Anti-Ragging Cell & Zero Tolerance Policy",
        html: `
          <h4>Strict Campus Safety & Student Welfare</h4>
          <p>Seacom Skills University enforces a strict Zero-Tolerance Anti-Ragging policy in accordance with UGC Regulations and Supreme Court mandates.</p>
          <ul>
            <li><strong>24/7 Helpline:</strong> +91 78905 02451 / 98362 95315</li>
            <li><strong>UGC Portal Link:</strong> www.antiragging.in</li>
          </ul>
        `
      }
    };

    return disclosures[key] || {
      badge: 'INSTITUTIONAL INFORMATION',
      title: 'Seacom Skills University',
      html: `
        <h4>Established under West Bengal Act VI of 2014</h4>
        <p>Located in Bolpur Santiniketan across a 50-acre green campus, offering 100+ degree programs across 13 constituent schools.</p>
      `
    };
  }
}

/* ==========================================================================
   STORIES MASONRY & ALUMNI
   ========================================================================== */
function initStoriesAndAlumni() {
  const storiesContainer = document.getElementById('storiesContainer');
  const alumniContainer = document.getElementById('alumniContainer');

  if (storiesContainer) {
    const lead = campusStories[0];
    const rest = campusStories.slice(1);

    storiesContainer.innerHTML = `
      <div class="story-lead-card">
        <div class="story-lead-img">
          <img src="${lead.image}" alt="${lead.title}" />
        </div>
        <div class="story-lead-content">
          <div class="story-meta">
            <span class="story-category">${lead.category}</span> • <span>${lead.date}</span> • <span>${lead.readTime}</span>
          </div>
          <h3 class="font-display story-lead-title">${lead.title}</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${lead.summary}</p>
          <a href="#mou" class="btn-secondary" style="padding: 0.6rem 1.2rem; font-size: 0.85rem;">Read Full Feature ➔</a>
        </div>
      </div>

      <div class="story-side-list">
        ${rest.map(story => `
          <div class="story-side-card">
            <div class="story-side-img">
              <img src="${story.image}" alt="${story.title}" />
            </div>
            <div>
              <div class="story-meta" style="margin-bottom: 0.3rem;">
                <span class="story-category">${story.category}</span>
              </div>
              <h4 class="font-display" style="font-size: 1.05rem; margin-bottom: 0.3rem; line-height: 1.3;">${story.title}</h4>
              <span style="font-size: 0.78rem; color: var(--text-muted);">${story.date}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (alumniContainer) {
    alumniContainer.innerHTML = alumniSpotlights.map(alumni => `
      <div class="alumni-card">
        <p class="alumni-quote">"${alumni.quote}"</p>
        <div class="alumni-profile">
          <img src="${alumni.avatarUrl}" alt="${alumni.name}" class="alumni-avatar" />
          <div class="alumni-info">
            <h4>${alumni.name}</h4>
            <p>${alumni.degree} ('${alumni.batchYear})</p>
            <p><strong>${alumni.role}</strong> at ${alumni.company}</p>
            <span class="alumni-package-badge">Verified Package: ${alumni.package}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   NEWSLETTER FORM VALIDATION
   ========================================================================== */
function initNewsletterValidation() {
  const form = document.getElementById('newsletterForm');
  const input = document.getElementById('newsletterEmail');
  const feedback = document.getElementById('newsletterFeedback');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input?.value.trim();
    if (email && email.includes('@') && email.includes('.')) {
      if (feedback) {
        feedback.style.display = 'block';
        feedback.style.color = '#00ff9d';
        feedback.textContent = 'Thank you for subscribing to Seacom Skills University Bulletin!';
      }
      if (input) input.value = '';
    } else {
      if (feedback) {
        feedback.style.display = 'block';
        feedback.style.color = '#ff6b6b';
        feedback.textContent = 'Please enter a valid email address.';
      }
    }
  });
}

/* ==========================================================================
   GLOBAL ANCHOR LINK ROUTER
   ========================================================================== */
function initGlobalLinkRouter() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    if (href === '#apply-online' || href === '#admissions' || href === '#apply') {
      e.preventDefault();
      if (window.openApplyModal) window.openApplyModal();
      return;
    }

    const infoKeys = ['chancellor', 'registrar', 'nirf', 'library', 'sports', 'health', 'anti-ragging', 'ombudsperson', 'cvo', 'officials', 'iqac'];
    const matchedKey = infoKeys.find(key => href.includes(key));
    if (matchedKey) {
      e.preventDefault();
      if (window.openInfoModal) window.openInfoModal(matchedKey);
      return;
    }

    const targetSection = document.querySelector(href);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* ==========================================================================
   PREMIUM INTERSECTION OBSERVER FOR FADE-UP CARD ANIMATIONS
   ========================================================================== */
function initFadeUpAnimations() {
  const cardSelectors = [
    '.mou-card',
    '.stat-card',
    '.program-card',
    '.story-lead-card',
    '.story-side-card',
    '.alumni-card',
    '.accreditation-card',
    '.partner-featured-card',
    '.course-finder-bar',
    '.hero-visual-frame'
  ].join(',');

  if (!('IntersectionObserver' in window)) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function observeCards() {
    const cards = document.querySelectorAll(cardSelectors);
    cards.forEach((card) => {
      if (!card.classList.contains('fade-up-card')) {
        card.classList.add('fade-up-card');
      }

      // Calculate staggered entrance delay for sibling cards in the same parent container
      const parent = card.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter(el => 
          el.matches(cardSelectors) || el.classList.contains('fade-up-card')
        );
        const index = siblings.indexOf(card);
        if (index >= 0) {
          card.style.transitionDelay = `${(index % 6) * 90}ms`;
        }
      }

      if (!card.classList.contains('in-view')) {
        observer.observe(card);
      }
    });
  }

  // Initial observation pass
  observeCards();

  // Watch for dynamic DOM additions (e.g. program category filtering, search results)
  const mainTarget = document.getElementById('mainContent') || document.body;
  const mutationObserver = new MutationObserver(() => {
    observeCards();
  });

  mutationObserver.observe(mainTarget, { childList: true, subtree: true });
}
