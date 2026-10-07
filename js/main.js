/**
 * SMART SECURE IT Networking & General Contracting Est.
 * Production Front-End Engine: Bilingual, Video Controller, Counters & UI Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  initI18nEngine();
  initHeaderScroll();
  initMobileNav();
  initVideoController();
  initAnimatedCounters();
  initSecurityTabs();
  initManpowerAccordion();
  initServiceModals();
  initContactForm();
  initScrollReveals();
});

/* --------------------------------------------------
   1. BILINGUAL TRANSLATION & RTL ENGINE
   -------------------------------------------------- */
function toArabicIndic(numStr) {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return numStr.toString().replace(/[0-9]/g, d => arabicDigits[d]);
}

function formatNumber(num, isAr) {
  const formatted = num.toLocaleString('en-US');
  return isAr ? toArabicIndic(formatted) : formatted;
}

function initI18nEngine() {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  let currentLang = localStorage.getItem('smart_secure_lang') || 'en';

  applyLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      localStorage.setItem('smart_secure_lang', currentLang);
      applyLanguage(currentLang);
    });
  }
}

function applyLanguage(lang) {
  const isAr = lang === 'ar';
  const dict = (typeof i18nDictionary !== 'undefined' && i18nDictionary[lang]) 
    ? i18nDictionary[lang] 
    : (i18nDictionary ? i18nDictionary.en : {});

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

  // Update text content with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update document title and meta description
  if (dict.site_title) {
    document.title = dict.site_title;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.site_description) {
    metaDesc.setAttribute('content', dict.site_description);
  }

  // Refresh counters display with appropriate digits
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    if (el.dataset.completed === 'true') {
      el.textContent = formatNumber(target, isAr);
    }
  });
}

/* --------------------------------------------------
   2. HEADER SCROLL EFFECT
   -------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------
   3. MOBILE NAVIGATION DRAWER
   -------------------------------------------------- */
function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');
  const navLinks = drawer ? drawer.querySelectorAll('.nav-link, .btn') : [];

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openDrawer);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------
   4. VIDEO PERFORMANCE & INTERSECTION OBSERVER
   -------------------------------------------------- */
function initVideoController() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSaveData = navigator.connection && navigator.connection.saveData;
  const isMobile = window.innerWidth <= 768;

  const videos = document.querySelectorAll('.bg-video');

  if (isReducedMotion || isSaveData || isMobile) {
    videos.forEach(v => {
      v.pause();
      v.removeAttribute('autoplay');
      v.style.display = 'none';
    });
    return;
  }

  if (!('IntersectionObserver' in window)) return;

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.15 });

  videos.forEach(video => {
    videoObserver.observe(video);
  });
}

/* --------------------------------------------------
   5. ANIMATED NUMBERS (REUSABLE COUNT-UP)
   -------------------------------------------------- */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function runCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const isAr = document.documentElement.getAttribute('lang') === 'ar';

    if (isReducedMotion) {
      el.textContent = formatNumber(target, isAr);
      el.dataset.completed = 'true';
      return;
    }

    const duration = 2000;
    const startTime = performance.now();

    function easeOutCubic(x) {
      return 1 - Math.pow(1 - x, 3);
    }

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentVal = Math.round(easedProgress * target);

      const activeAr = document.documentElement.getAttribute('lang') === 'ar';
      el.textContent = formatNumber(currentVal, activeAr);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = formatNumber(target, activeAr);
        el.dataset.completed = 'true';
      }
    }

    requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) {
    counters.forEach(c => runCounter(c));
    return;
  }

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
}

/* --------------------------------------------------
   6. SECURITY SYSTEMS TABS
   -------------------------------------------------- */
function initSecurityTabs() {
  const tabButtons = document.querySelectorAll('.sec-tab-btn');
  const tabPanels = document.querySelectorAll('.sec-tab-content-panel');
  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------
   7. MANPOWER CLASSIFICATIONS ACCORDION
   -------------------------------------------------- */
function initManpowerAccordion() {
  const headers = document.querySelectorAll('.accordion-header-btn');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      if (!item) return;

      const isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      header.setAttribute('aria-expanded', !isOpen);
    });
  });
}

/* --------------------------------------------------
   8. SERVICE DETAILS ACCESSIBLE MODALS
   -------------------------------------------------- */
function initServiceModals() {
  const modal = document.getElementById('service-modal');
  const modalTitle = document.getElementById('modal-service-title');
  const modalBody = document.getElementById('modal-service-body');
  const closeBtn = document.getElementById('modal-close-btn');
  const closeIcon = document.getElementById('modal-close-icon');
  const detailButtons = document.querySelectorAll('.service-details-link');

  if (!modal || !modalTitle || !modalBody) return;

  let previousActiveElement = null;

  function openModal(divisionKey) {
    const lang = document.documentElement.getAttribute('lang') || 'en';
    const dict = i18nDictionary[lang] || i18nDictionary.en;

    const titleKey = `serv_${divisionKey}_title`;
    const fullKey = `serv_${divisionKey}_full`;

    modalTitle.textContent = dict[titleKey] || "Service Division";
    modalBody.textContent = dict[fullKey] || "";

    previousActiveElement = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (closeIcon) closeIcon.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previousActiveElement) {
      previousActiveElement.focus();
    }
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const divisionKey = btn.getAttribute('data-service');
      openModal(divisionKey);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeIcon) closeIcon.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------
   9. CONTACT FORM LOGIC (WHATSAPP & MAILTO PREFILL)
   -------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('rfq-contact-form');
  const statusAlert = document.getElementById('form-status-alert');
  const waBtn = document.getElementById('btn-submit-whatsapp');
  const emailBtn = document.getElementById('btn-submit-email');

  if (!form) return;

  function getFormData() {
    return {
      name: (document.getElementById('form-name')?.value || '').trim(),
      company: (document.getElementById('form-company')?.value || '').trim(),
      phone: (document.getElementById('form-phone')?.value || '').trim(),
      email: (document.getElementById('form-email')?.value || '').trim(),
      service: (document.getElementById('form-service')?.value || '').trim(),
      message: (document.getElementById('form-message')?.value || '').trim()
    };
  }

  function validate(data) {
    const lang = document.documentElement.getAttribute('lang') || 'en';
    const dict = i18nDictionary[lang] || i18nDictionary.en;

    if (!data.name || !data.company || !data.phone || !data.email || !data.service || !data.message) {
      showError(dict.form_err_req || "Please fill in all required fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showError(dict.form_err_email || "Please enter a valid email address.");
      return false;
    }

    if (data.phone.length < 7) {
      showError(dict.form_err_phone || "Please enter a valid phone number.");
      return false;
    }

    hideError();
    return true;
  }

  function showError(msg) {
    if (!statusAlert) return;
    statusAlert.textContent = msg;
    statusAlert.classList.add('error');
    statusAlert.style.display = 'block';
  }

  function hideError() {
    if (!statusAlert) return;
    statusAlert.style.display = 'none';
    statusAlert.classList.remove('error');
  }

  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!validate(data)) return;

      const waText = 
        `*New Inquiry - SMART SECURE IT*\n\n` +
        `*Name:* ${data.name}\n` +
        `*Company:* ${data.company}\n` +
        `*Phone:* ${data.phone}\n` +
        `*Email:* ${data.email}\n` +
        `*Division:* ${data.service}\n\n` +
        `*Project Details:* \n${data.message}`;

      const encoded = encodeURIComponent(waText);
      const waUrl = `https://wa.me/966567513410?text=${encoded}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!validate(data)) return;

      const subject = encodeURIComponent(`Tender Inquiry: ${data.service} - ${data.company}`);
      const body = encodeURIComponent(
        `Full Name: ${data.name}\n` +
        `Company: ${data.company}\n` +
        `Phone: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Service Division: ${data.service}\n\n` +
        `Project Scope & Requirements:\n${data.message}`
      );

      const mailtoUrl = `mailto:info@smartsecureitksa.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    });
  }
}

/* --------------------------------------------------
   10. SCROLL REVEALS
   -------------------------------------------------- */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}
