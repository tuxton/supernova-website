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
