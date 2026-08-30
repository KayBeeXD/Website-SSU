/**
 * SEACOM SKILLS UNIVERSITY - INTERACTIVE CONTROLLER
 * Enterprise front-end controller handling Harvard-inspired navigation,
 * Command Palette (Cmd+K), Live Course Search across 13 Constituent Schools,
 * 3D Card Tilt, Count-up Stats, Syllabus Drawer, Online Application Form,
 * Institutional Info Disclosures, Global MOUs, and Mobile Slide-over Navigation.
 */

import { academicSchools, alumniSpotlights, campusStories, globalCollaborations, siteMetadata, statsData } from './src/data/mockMedia.js';
import { navigationConfig, quickLinks } from './src/data/navigation.js';

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
