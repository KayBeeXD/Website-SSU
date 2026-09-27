Role: Act as a Principal Front-End Architect and Creative Developer. You are tasked with architecting and engineering an enterprise-grade, immersive, and visually stunning web platform for "Seacom Skills University", inspired by the editorial grandeur and narrative structure of Harvard University (harvard.edu).

Stack Requirements:
- Framework: Next.js (App Router, React 19) or standard React with Vite
- Styling: Tailwind CSS (v3.4+ or v4) with custom theme extensions
- Animation: Framer Motion (or GSAP + ScrollTrigger) & Lenis Scroll for buttery-smooth inertial scrolling
- Icons & UI: Lucide React, Radix UI primitives (for headless accessibility)
- Quality Standards: Strict TypeScript, zero hydration mismatches, 100/100 Lighthouse performance targets, WCAG 2.2 AA compliance.

---

### 1. Design System & Theming Tokens
Implement a robust design token system in Tailwind configurations:
- Backgrounds: 
  - Canvas: `#FAF9F6` (Alabaster Warm White), `#FFFFFF` (Pure Card White)
  - Surface Muted: `#F3F2EE` (Warm Neutral Slate)
  - Glass Surface: `rgba(255, 255, 255, 0.72)` with `backdrop-blur-md`
- Metallics (Gold Palette):
  - Primary Accent: `#D4AF37` (Classic Warm Gold)
  - Dark Gold / Borders: `#B38F26` / `#997517`
  - Subtle Gold Tint: `rgba(212, 175, 55, 0.08)`
  - Gradient: `linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA7C11 100%)`
- Typography & Contrast:
  - Text Primary: `#18181B` (Deep Zinc / Obsidian - strictly avoid raw `#000000`)
  - Text Secondary: `#52525B` (Zinc 600)
  - Text Muted: `#71717A` (Zinc 500)
- Font Families:
  - Display: High-contrast editorial serif (e.g., `Playfair Display` or `Cormorant Garamond`)
  - Body / UI: Clean geometric sans-serif (e.g., `Plus Jakarta Sans` or `Inter`)

---

### 2. Architecture & Component Blueprint
Build modular, decoupled, and highly maintainable components:

1. `Header / StickyNavbar`:
   - Dual-tier header: utility bar (Admissions, Portals, Search) + primary sticky nav.
   - Glassmorphic backdrop blur triggered dynamically on scroll (>50px).
   - Animated SVG brand crest + typography.
   - Fullscreen Command Menu / Search modal (`Cmd+K` pattern) with dynamic category filtering.
   - Mega-menu flyouts for Academics and Research with smooth height/opacity transitions.

2. `HeroCinematic`:
   - Split editorial layout or layered cinematic depth.
   - Fluid typography with split-text character/word mask animations on initial mount.
   - Ambient background video or layered parallax canvas with play/pause accessibility toggle.
   - Interactive "Course & Degree Finder" bar embedded directly into the hero baseline with tabbed filters (e.g., Undergraduate, Postgraduate, Skill Certifications).

3. `StatsTicker`:
   - IntersectionObserver-powered numerical count-up component with dynamic formatting (e.g., `95%`, `120+`, `₹12 LPA`).
   - Subtle gold accent dividers and micro-glow hover animations.

4. `ProgramExplorer`:
   - Grid/carousel hybrid showing schools (Engineering, Allied Health Sciences, Management, Skill & Vocational).
   - Interactive hover cards utilizing 3D perspective tilt (`perspective: 1000px`, `rotateX`, `rotateY`).
   - Drawer or expandable modal for instant course syllabus sneak-peeks without full page reloads.

5. `CampusStoriesFeed`:
   - Masonry layout showcasing editorial research breakthroughs, campus life, and industry placements.
   - Parallax scrolling image wrappers with zoom-on-hover micro-interactions.

6. `Footer`:
   - Tiered editorial layout with audience-targeted navigation paths, live accreditation tickers, newsletter subscription with input state validation, and copyright metadata.

---

### 3. Engineering Rigor & Micro-Interactions
- Smooth Scroll Setup: Initialize Lenis scroll instance with an optimized requestAnimationFrame loop, properly isolated from scroll-jacking issues.
- Scroll Animations: Implement `whileInView` viewport triggers using Framer Motion with `viewport: { once: true, margin: "-100px" }` to prevent jank.
- Interaction States: Every interactive button, link, and card must feature custom active, focus-visible, and hover states with gold underline sweeps or magnetic button offset dynamics.
- Accessibility:
  - All interactive elements must support complete keyboard navigation (`tabIndex`, ARIA roles, `aria-expanded`).
  - Respect `window.matchMedia('(prefers-reduced-motion: reduce)')` across all animation hooks.
  - Strict color contrast validation between text and gold/white surfaces.

---

### 4. Output Deliverables
Provide clean, idiomatic, and executable code:
1. `tailwind.config.js` with all custom color ramps, font definitions, and keyframes.
2. Complete page shell (`app/page.tsx` or `App.tsx`) with dynamic component imports.
3. Fully implemented interactive components:
   - Floating dynamic Navbar with mobile drawer toggle.
   - Hero section with live search and motion typography.
   - Filterable Program Grid with interactive motion cards.

---

### 5. Media & Asset Strategy (Temporary Mock Architecture)
- Do NOT use hardcoded inline image URLs across components.
- Implement a centralized asset dictionary in `src/data/mockMedia.ts` (or equivalent) export typed arrays:
  1. `campusGallery`: High-resolution architectural, library, hands-on lab, and campus drone shots using Unsplash keywords (`university campus`, `modern laboratory`, `architecture`).
  2. `alumniSpotlights`: Diverse professional headshots, convocation pictures, and industry workplace shots (`professional portrait`, `graduation ceremony`, `corporate headshot`) with mock names, degrees, and current roles.
- Image Configuration:
  - Wrap all images inside an abstraction component (e.g., `<AdaptiveImage />`) supporting Next.js `<Image>` with priority hints, blurred placeholder skeletons (`blurDataURL`), and smooth fade-in transitions on load.
  - Structure the file paths so that every remote URL is easily swappable with local paths (e.g., `/images/campus/campus-01.jpg` and `/images/alumni/alumni-01.jpg`) once custom assets are uploaded to the public directory.

Example Data Contract:
```typescript
export interface MediaItem {
  id: string;
  title: string;
  category: 'campus' | 'lab' | 'student-life';
  src: string;
  alt: string;
}

export interface AlumniProfile {
  id: string;
  name: string;
  degree: string;
  batchYear: number;
  company: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

export const campusMedia: MediaItem[] = [
  {
    id: "campus-1",
    title: "Central Academic Hub",
    category: "campus",
    src: "[https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80)",
    alt: "Modern campus academic building"
  },
  {
    id: "campus-2",
    title: "Advanced Skill Labs",
    category: "lab",
    src: "[https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80](https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80)",
    alt: "Students working in advanced technology lab"
  }
];

export const alumniSpotlights: AlumniProfile[] = [
  {
    id: "alumni-1",
    name: "Priya Sharma",
    degree: "B.Tech Computer Science & Engineering",
    batchYear: 2022,
    company: "Tata Consultancy Services",
    role: "Cloud Solutions Architect",
    quote: "The hands-on skill labs gave me a practical foundation that immediately set me apart in my career.",
    avatarUrl: "[https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80](https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80)"
  }
];

Task: Refactor and implement the Global Navigation Bar and Mega-Menu/Dropdown System for Seacom Skills University based on the updated Information Architecture.

### 1. Navigation Data Structure & Routing Map
Create a centralized configuration file (`src/data/navigation.ts` or `components/navigation/navData.ts`) defining typed menu trees with distinct, accessible routing slugs:

```typescript
export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavCategory {
  title: string;
  href?: string;
  type: 'dropdown' | 'cta-dropdown';
  items: NavItem[];
}

export const navigationConfig: NavCategory[] = [
  {
    title: "About",
    type: "dropdown",
    items: [
      { title: "Overview", href: "/about/overview" },
      { title: "Acts & Statutes", href: "/about/acts-and-statutes" },
      { title: "Accreditation & Ranking", href: "/about/accreditation-ranking" },
      { title: "Recognition", href: "/about/recognition" },
      { title: "Annual Reports", href: "/about/annual-reports" },
      { title: "FAQs", href: "/about/faqs" },
      { title: "MoUs & Collaborations", href: "/about/mous" },
      { title: "Campus", href: "/about/campus" },
      { title: "NIRF Reports & Rankings", href: "/about/nirf-reports" }
    ]
  },
  {
    title: "Administration",
    type: "dropdown",
    items: [
      { title: "Chancellor", href: "/administration/chancellor" },
      { title: "Office of the Registrar", href: "/administration/registrar" },
      { title: "Ombudsperson", href: "/administration/ombudsperson" },
      { title: "Chief Vigilance Officer", href: "/administration/cvo" },
      { title: "SSU Officials", href: "/administration/officials" }
    ]
  },
  {
    title: "Academics",
    type: "dropdown",
    items: [
      { title: "Courses Offered", href: "/academics/courses" },
      { title: "PhD Programmes", href: "/academics/phd-programmes" },
      { title: "Internal Quality Assurance Cell (IQAC)", href: "/academics/iqac" },
      { title: "Library", href: "/academics/library" }
    ]
  },
  {
    title: "Student Life",
    type: "dropdown",
    items: [
      { title: "Placement Cell", href: "/student-life/placement-cell" },
      { title: "Internal Complaints Committee (ICC)", href: "/student-life/icc" },
      { title: "Sports Facilities", href: "/student-life/sports" },
      { title: "Health Facilities", href: "/student-life/health" },
      { title: "Anti-Ragging Cell", href: "/student-life/anti-ragging" }
    ]
  },
  {
    title: "Apply Now",
    type: "cta-dropdown",
    items: [
      { title: "Admission Cell", href: "/admissions/cell" },
      { title: "Fees Structure", href: "/admissions/fees-structure" },
      { title: "Online Application Form", href: "/admissions/apply-online" },
      { title: "Refund Policy", href: "/admissions/refund-policy" }
    ]
  }
];
UI/UX & Interaction Specifications
Desktop Behavior:

Hover Triggers: Smooth animated drop-downs with Framer Motion (opacity: 0, y: 8 to opacity: 1, y: 0) and a slight exit delay (150ms debounce) to prevent accidental close on cursor drift.

Submenu Layouts:

For large menus like About (9 items), arrange items in a crisp, multi-column grid or structured 2-column card panel.

Individual links must have subtle gold left-border accents or background highlight (bg-amber-500/10 and text-amber-700) on hover.

"Apply Now" CTA:

High-contrast gold button (bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-zinc-900 font-semibold shadow-md).

Hovering over the button triggers its dedicated dropdown showing Admission Cell, Fees Structure, Online Form, and Refund Policy.

Mobile / Tablet (Drawer Navigation):

Clean hamburger trigger opening a full-height slide-over drawer.

Accordion-style expandable submenus with smooth height interpolation.

Distinctive "Apply Now" high-priority section anchored at the top/bottom of the drawer.

Accessibility & Engineering Polish:

Implement full keyboard navigation (accessible via Tab, ArrowDown, ArrowUp, and Escape).

Use Radix UI Navigation Menu primitives or headless dropdown patterns (aria-expanded, aria-haspopup).

Ensure sticky blur glassmorphism (backdrop-blur-md bg-white/80 border-b border-amber-200/40) remains performant during high-speed scrolling.

Task: Implement an editorial, high-performance Fullscreen Curtain Menu System inspired by Harvard University (harvard.edu) for "Seacom Skills University".

---

### 1. Header Bar UI & Trigger State (Collapsed)
- Fixed / Sticky Top Bar:
  - Left: Seacom Skills University logo & monogram crest with gold accent.
  - Center: Live ticker or highlight announcement (e.g., "• Admissions Open for Academic Year 2026-27").
  - Right:
    - Dedicated interactive "Search" button (`Cmd+K` style trigger).
    - High-contrast "Menu" button with a modern hamburger icon (`fa-bars` or Lucide `Menu`).
    - Dedicated "Apply Now" high-contrast gold pill button.
- Styling:
  - Default: Transparent or frosted glass (`bg-white/80 backdrop-blur-md`).
  - Active Menu State: Clean transition matching the overlay header.

---

### 2. Fullscreen Dropdown Overlay Architecture (Expanded)
- Animation Behavior:
  - On clicking "Menu", a full-viewport curtain drops smoothly from the top of the screen (`y: "-100%"` to `y: "0%"` using Framer Motion or GSAP easing `[0.76, 0, 0.24, 1]`, duration: 0.55s).
  - Background: Deep obsidian/slate canvas (`#0F1117` or rich charcoal `#141416`) with subtle gold hairline borders and ambient gold radial glow.
  - Header within Menu: Top brand lockup persists on the left, with an animated "Close" button (`X` icon with hover rotate effect) on the top-right.

- Main Navigation Column (Left / Center Area):
  - Large, editorial serif typography (`font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 500`).
  - Staggered entrance animation: Each top-level category slides up and fades in with a 40ms stagger delay.
  - Items list:
    1. About
    2. Administration
    3. Academics
    4. Student Life
    5. Admissions
    6. Apply
  - Interaction Model (Dynamic Sub-category Expansion or Side Drawer):
    - Hovering or clicking a primary category smoothly unveils its sub-items on the adjacent right column (or expands inline with smooth height interpolation).
    - Primary link hover state: Shifts color to radiant metallic gold (`#D4AF37`) with a subtle horizontal translate (`x: 12px`).

- Sub-Item Panel (Populates dynamically based on active selection):
  - About: Overview, Acts & Statutes, Accreditation & Ranking, Recognition, Annual Reports, FAQs, MoUs & Collaborations, Campus, NIRF Reports & Rankings.
  - Administration: Chancellor, Office of the Registrar, Ombudsperson, Chief Vigilance Officer, SSU Officials.
  - Academics: Courses Offered, PhD Programmes, IQAC, Library.
  - Student Life: Placement Cell, Internal Complaints Committee (ICC), Sports Facilities, Health Facilities, Anti-Ragging Cell.
  - Admissions: Admission Cell, Fees Structure, Online Application Form, Refund Policy.

- Bottom Utility / Quick Links Bar:
  - Pinned to the bottom of the full-screen curtain with a subtle divider line (`border-t border-zinc-800`).
  - Horizontal list of secondary quick links: `A to Z Index` | `Campus Directory` | `Events Calendar` | `Press & Media` | `Alumni Network` | `Student Portal` | `Emergency Contact`.
  - Typography: Clean geometric sans-serif (`text-xs uppercase tracking-widest text-zinc-400 hover:text-amber-400`).

---

### 3. Technical & Engineering Specifications
- Component Structure:
  - `components/layout/Header.tsx` (Global header + toggle controls)
  - `components/layout/FullscreenNavOverlay.tsx` (Curtain modal + animation orchestrator)
  - `components/layout/NavColumn.tsx` (Staggered list & sub-menu preview)
  - `src/data/navigation.ts` (Typed schema for primary items, sub-links, and quick links)
- Body Scroll Lock:
  - Prevent background page scrolling when the fullscreen overlay is active (`document.body.style.overflow = 'hidden'`).
- Accessibility & Escape Triggers:
  - Pressing `Escape` or clicking the "Close" button smoothly collapses the menu.
  - Fully trap keyboard focus within the open menu using `@radix-ui/react-dialog` or headless focus trap.