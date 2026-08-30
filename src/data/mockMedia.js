/**
 * Centralized Asset & Official Content Data Dictionary for Seacom Skills University
 * Official Website Data Integrated + Harvard Editorial Aesthetics
 */

export const siteMetadata = {
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

export const globalCollaborations = [
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

export const statsData = [
  { value: 100, label: "Degree & Skill Courses", suffix: "+", subtitle: "UG, PG, Ph.D. & Micro-credentials" },
  { value: 13, label: "Constituent Schools", suffix: "+", subtitle: "Engineering, Pharmacy, Health, Agriculture" },
  { value: 4000, label: "Active Campus Students", suffix: "+", subtitle: "Across 50-Acre Santiniketan Campus" },
  { value: 50, label: "Awards & Recognitions", suffix: "+", subtitle: "ASSOCHAM, News18 & Zee 24 Ghanta" }
];

export const academicSchools = [
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

export const campusStories = [
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

export const alumniSpotlights = [
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
