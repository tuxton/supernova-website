/* Minimal theme JS for Shopify theme interactivity
   - Mobile navbar toggle
   - FAQ accordion behavior
   - Smooth anchor scrolling for in-page links
 */
(function () {
  'use strict';

  // Mobile navbar toggle: expects an element with data-toggle="mobile-nav" and target #mobile-nav
  function setupMobileNav() {
    const toggles = document.querySelectorAll('[data-toggle="mobile-nav"]');
    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.querySelector('#mobile-nav');
        if (!target) return;
        target.classList.toggle('hidden');
        btn.classList.toggle('is-open');
      });
    });
  }

  // FAQ accordion: finds .sn-faq__item and toggles .is-open on click of .sn-faq__question
  function setupFAQAccordion() {
    const items = document.querySelectorAll('.sn-faq__item');
    items.forEach(item => {
      const btn = item.querySelector('.sn-faq__question');
      const panel = item.querySelector('.sn-faq__answer');
      if (!btn || !panel) return;
      btn.addEventListener('click', () => {
        const open = item.classList.toggle('is-open');
        if (open) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        } else {
          panel.style.maxHeight = null;
          btn.setAttribute('aria-expanded', 'false');
        }
      });
      // initialize closed
      panel.style.overflow = 'hidden';
      panel.style.maxHeight = null;
    });
  }

  // Smooth scroll for same-page anchors
  function setupSmoothScroll() {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupMobileNav();
    setupFAQAccordion();
    setupSmoothScroll();
  });
})();
/**
 * Ser Supernova — Theme JavaScript
 */
(function () {
  'use strict';

  /* --- Navbar scroll behavior --- */
  var navbar = document.querySelector('.sn-navbar');
  if (navbar) {
    function handleScroll() {
      if (window.scrollY > 50) {
        navbar.classList.remove('sn-navbar--transparent');
        navbar.classList.add('sn-navbar--scrolled');
      } else {
        navbar.classList.remove('sn-navbar--scrolled');
        navbar.classList.add('sn-navbar--transparent');
      }
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }

  /* --- Mobile menu toggle --- */
  var toggle = document.querySelector('.sn-navbar__toggle');
  var mobile = document.querySelector('.sn-navbar__mobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      mobile.classList.toggle('is-open');
      var isOpen = mobile.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.querySelector('.sn-toggle-open').style.display = isOpen ? 'none' : 'block';
      toggle.querySelector('.sn-toggle-close').style.display = isOpen ? 'block' : 'none';
    });

    // Close mobile menu on link click
    var mobileLinks = mobile.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobile.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('.sn-toggle-open').style.display = 'block';
        toggle.querySelector('.sn-toggle-close').style.display = 'none';
      });
    });
  }

  /* --- FAQ accordion --- */
  var faqItems = document.querySelectorAll('.sn-faq__item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.sn-faq__question');
    if (question) {
      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        // Close all others
        faqItems.forEach(function (other) {
          other.classList.remove('is-open');
        });
        // Toggle current
        if (!isOpen) {
          item.classList.add('is-open');
        }
      });
    }
  });
})();
