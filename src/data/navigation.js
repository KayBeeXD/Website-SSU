/**
 * SEACOM SKILLS UNIVERSITY - CENTRALIZED NAVIGATION & FULLSCREEN CURTAIN CONFIG
 * Defines the Information Architecture and Quick Links for the Harvard-Inspired Fullscreen Menu
 */

export const navigationConfig = [
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

export const quickLinks = [
  { title: "A to Z Index", href: "#index-az" },
  { title: "Campus Directory", href: "#directory" },
  { title: "Events Calendar", href: "#events" },
  { title: "Press & Media", href: "#press" },
  { title: "Alumni Network", href: "#alumni" },
  { title: "Student ERP Portal", href: "https://erp.seacomskillsuniversity.ac.in/" },
  { title: "Emergency Contact", href: "#contact" }
];
