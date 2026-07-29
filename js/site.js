(function () {
  'use strict';

  /* ── Active nav link ── */
  var page = location.pathname.split('/').pop() || 'Index.html';
  document.querySelectorAll('nav a').forEach(function (a) {
    if (a.getAttribute('href').split('/').pop() === page) {
      a.classList.add('nav-active');
    }
  });

  /* ── Hamburger menu ── */
  var header = document.querySelector('header');
  if (header) {
    var nav = header.querySelector('nav');
    var toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.innerHTML = '&#9776;';
    header.appendChild(toggle);

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.innerHTML = isOpen ? '&times;' : '&#9776;';
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.innerHTML = '&#9776;';
        toggle.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  /* ── Auto lazy-load images (skip header logo and hero) ── */
  document.querySelectorAll('img').forEach(function (img) {
    if (!img.closest('header') && !img.closest('.topimg')) {
      img.setAttribute('loading', 'lazy');
    }
  });

  /* ── Scroll reveal ── */
  if (!('IntersectionObserver' in window)) return;

  var elements = Array.from(document.querySelectorAll(
    '.col, .category-strip article, .Muzamel, section.container > article'
  ));

  if (!elements.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('sr-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(function (el, i) {
    el.classList.add('sr');
    el.style.transitionDelay = (i % 5) * 0.1 + 's';
    observer.observe(el);
  });

})();
