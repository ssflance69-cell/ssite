/**
 * SMART SECURE IT Networking & General Contracting Est.
 * Production Front-End Engine: Video Controller, Animated Counters, Modals & Form Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  // Clear any legacy language storage
  try {
    localStorage.removeItem('smart_secure_lang');
  } catch (e) {}

  initHeaderScroll();
  initHeaderDropdown();
  initMobileNav();
  initVideoController();
  initBannerVideo();
  initAnimatedCounters();
  initSecurityTabs();
  initManpowerAccordion();
  initServiceModals();
  initContactForm();
  initScrollReveals();
  initWhatsAppPicker();
});

/* --------------------------------------------------
   1. NUMBER FORMATTING
   -------------------------------------------------- */
function formatNumber(num) {
  return num.toLocaleString('en-US');
}

/* --------------------------------------------------
   2. HEADER SCROLL EFFECT & DROPDOWN
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

function initHeaderDropdown() {
  const dropdown = document.getElementById('navServicesDropdown');
  const trigger = document.getElementById('servicesMenuBtn');
  if (!dropdown || !trigger) return;

  // Toggle on click for mobile/keyboard/touch
  trigger.addEventListener('click', (e) => {
    // If user clicked or tapped, toggle active state
    const isOpen = dropdown.classList.contains('active');
    if (!isOpen) {
      dropdown.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
    } else {
      dropdown.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close dropdown when any link inside is clicked
  const links = dropdown.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdown.classList.contains('active')) {
      dropdown.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    }
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
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
    document.documentElement.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (drawer && drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
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
        if (video.paused) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        }
      } else {
        if (!video.paused) {
          video.pause();
        }
      }
    });
  }, { threshold: 0.15 });

  videos.forEach(video => {
    videoObserver.observe(video);
  });
}

/* --------------------------------------------------
   4b. BANNER VIDEO CONTROLLER & ACCESSIBILITY
   -------------------------------------------------- */
function initBannerVideo() {
  const bannerVideo = document.querySelector('.page-title-banner .page-banner-video, .page-banner-video');
  if (!bannerVideo) return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSaveData = Boolean(navigator.connection && navigator.connection.saveData);
  const isNarrowScreen = window.innerWidth <= 640;

  if (isReducedMotion || isSaveData || isNarrowScreen) {
    bannerVideo.pause();
    bannerVideo.removeAttribute('autoplay');
    if (isSaveData || isNarrowScreen) {
      const sources = bannerVideo.querySelectorAll('source');
      sources.forEach(s => s.remove());
      bannerVideo.removeAttribute('src');
      bannerVideo.load();
    }
    return;
  }

  // IntersectionObserver: pause when banner is out of view, resume when visible
  if ('IntersectionObserver' in window) {
    const banner = bannerVideo.closest('.page-title-banner') || bannerVideo;
    const bannerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const playPromise = bannerVideo.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          bannerVideo.pause();
        }
      });
    }, { threshold: 0.1 });
    bannerObserver.observe(banner);
  }
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

    if (isReducedMotion) {
      el.textContent = formatNumber(target);
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

      el.textContent = formatNumber(currentVal);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = formatNumber(target);
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
const serviceDetails = {
  '01': {
    title: "IT & Security Systems",
    body: "Ensure the safety and security of your property with professional CCTV installation and service solutions tailored for residential, commercial, or industrial spaces. We deploy advanced analogue, HD, and IP security systems with built-in artificial intelligence for object and person identification, mega-pixel resolution, 24/7 remote monitoring platforms, and strategic design consultation."
  },
  '02': {
    title: "Access Control & Time Attendance",
    body: "Advanced personnel entry and workforce verification architectures supporting Biometric, Proximity, Short Range, Long Range, PIN Type, and Smart card mechanisms. Complete contactless facial recognition terminals seamlessly synchronized with enterprise payroll and workforce tracking software."
  },
  '03': {
    title: "Heavy Equipment Rental",
    body: "As a unified group, we offer an extensive selection of top-quality machinery across 12 distinct equipment categories. Backed by regular maintenance protocols and experienced certified operators, our fleet supports major industrial and civil infrastructure demands across the Kingdom."
  },
  '04': {
    title: "Manpower Services",
    body: "A full spectrum of qualified manpower solutions tailored for short-term projects and long-term operations. Our roster spans over 40 distinct disciplines including certified 6G welders, crane operators, riggers, HSE officers, and multidisciplinary project engineers."
  },
  '05': {
    title: "Civil & Mechanical Contracting",
    body: "Turnkey mechanical erection services, expansion and revamping of existing facilities, field installation of static and rotating plant machinery, CS/SS/HDPE pipe spooling, certified valve testing, HVAC systems commissioning, and structural concrete foundations."
  },
  '06': {
    title: "Material Trading",
    body: "Direct procurement and wholesale trading of original manufacturer parts, motors, lubricants, pipes, plates, electrical PLC modules, architectural doors, building envelopes, thermal insulation, and complete modular prefabricated buildings."
  },
  '07': {
    title: "Scaffolding, Fabrication & Fencing",
    body: "Design and erection of certified scaffolding for complex industrial plants, roofing, and refurbishments. Comprehensive metal fabrication of carbon steel and stainless steel storage tanks, vessels, heavy steel structures, and high-security chain link, barbed wire, and mesh fencing."
  },
  '08': {
    title: "Utility, Engineering & Environmental Services",
    body: "Design, installation, and preventative maintenance of essential industrial utilities (power distribution, water systems, HVAC). Full environmental compliance consulting, spill mitigation, and workplace safety protocols tailored to Saudi regulatory frameworks."
  }
};

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
    const detail = serviceDetails[divisionKey];
    if (detail) {
      modalTitle.textContent = detail.title;
      modalBody.textContent = detail.body;
    } else {
      modalTitle.textContent = "Service Details";
      modalBody.textContent = "";
    }

    previousActiveElement = document.activeElement;
    modal.style.display = 'flex';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (closeIcon) closeIcon.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.style.display = 'none';
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
    if (!data.name || !data.company || !data.phone || !data.email || !data.service || !data.message) {
      showError("Please fill in all required fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showError("Please enter a valid email address.");
      return false;
    }

    if (data.phone.length < 7) {
      showError("Please enter a valid phone number.");
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

      if (typeof window.openWhatsAppPicker === 'function') {
        window.openWhatsAppPicker(waText, waBtn);
      } else {
        const encoded = encodeURIComponent(waText);
        window.open(`https://wa.me/966567513410?text=${encoded}`, '_blank', 'noopener,noreferrer');
      }
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

      const mailtoUrl = `mailto:mashraf@smartsecureitksa.com?cc=info@smartsecureitksa.com&subject=${subject}&body=${body}`;
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

/* --------------------------------------------------
   11. WHATSAPP NUMBER PICKER (TWO-HOTLINE SELECTOR)
   -------------------------------------------------- */
let currentWhatsAppText = 'Hello Smart Secure IT, I would like to enquire about your services';
let triggerElementBeforePicker = null;

function isWhatsAppUrl(href) {
  if (!href || typeof href !== 'string') return false;
  return (
    href.includes('wa.me/') ||
    href.includes('api.whatsapp.com') ||
    href.startsWith('whatsapp://')
  );
}

function extractWhatsAppText(urlOrText) {
  if (!urlOrText || typeof urlOrText !== 'string') {
    return 'Hello Smart Secure IT, I would like to enquire about your services';
  }
  if (urlOrText.includes('text=')) {
    try {
      const match = urlOrText.match(/[?&]text=([^&]*)/);
      if (match && match[1]) {
        return decodeURIComponent(match[1]);
      }
    } catch (e) {
      // fallback on error
    }
  }
  if (urlOrText.startsWith('http://') || urlOrText.startsWith('https://') || urlOrText.startsWith('whatsapp://')) {
    return 'Hello Smart Secure IT, I would like to enquire about your services';
  }
  return urlOrText.trim() || 'Hello Smart Secure IT, I would like to enquire about your services';
}

window.openWhatsAppPicker = function (prefilledText, triggerEl) {
  currentWhatsAppText = extractWhatsAppText(prefilledText);
  triggerElementBeforePicker = triggerEl || document.activeElement;

  const picker = document.getElementById('wa-picker-modal');
  if (!picker) return;

  picker.style.display = 'flex';
  picker.classList.add('open');
  picker.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const firstOpt = picker.querySelector('.wa-picker-option');
  if (firstOpt) {
    firstOpt.focus();
  }
};

window.closeWhatsAppPicker = function () {
  const picker = document.getElementById('wa-picker-modal');
  if (!picker) return;

  picker.classList.remove('open');
  picker.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    if (!picker.classList.contains('open')) {
      picker.style.display = 'none';
    }
  }, 250);
  document.body.style.overflow = '';

  if (triggerElementBeforePicker && typeof triggerElementBeforePicker.focus === 'function') {
    try {
      triggerElementBeforePicker.focus();
    } catch (err) {}
  }
};

function initWhatsAppPicker() {
  const picker = document.getElementById('wa-picker-modal');
  if (!picker) return;

  const closeBtn = document.getElementById('wa-picker-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.closeWhatsAppPicker();
    });
  }

  picker.addEventListener('click', (e) => {
    if (e.target === picker) {
      window.closeWhatsAppPicker();
    }
  });

  const options = picker.querySelectorAll('.wa-picker-option');
  options.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const num = btn.getAttribute('data-number');
      const textToUse = currentWhatsAppText || 'Hello Smart Secure IT, I would like to enquire about your services';
      const encoded = encodeURIComponent(textToUse);
      const waUrl = `https://wa.me/${num}?text=${encoded}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      window.closeWhatsAppPicker();
    });
  });

  // Capturing click listener on document to intercept ALL WhatsApp links
  document.addEventListener('click', (e) => {
    // Never intercept clicks originating inside our own picker modal
    if (e.target && e.target.closest && e.target.closest('#wa-picker-modal')) {
      return;
    }

    const link = e.target && e.target.closest && e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    if (isWhatsAppUrl(href)) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const text = extractWhatsAppText(href);
      window.openWhatsAppPicker(text, link);
    }
  }, true);

  // Capturing keydown listener for keyboard Enter on focused WhatsApp links
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (picker.classList.contains('open') || picker.style.display === 'flex') {
        window.closeWhatsAppPicker();
      }
      return;
    }

    if (e.key === 'Enter') {
      if (e.target && e.target.closest && e.target.closest('#wa-picker-modal')) {
        return;
      }

      const target = e.target;
      const link = target && target.closest && target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      if (isWhatsAppUrl(href)) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        const text = extractWhatsAppText(href);
        window.openWhatsAppPicker(text, link);
      }
    }
  }, true);
}

