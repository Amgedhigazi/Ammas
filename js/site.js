(function () {
  'use strict';

  /* ── Active nav link ── */
  var page = location.pathname.split('/').pop() || 'Index.html';
  document.querySelectorAll('nav a').forEach(function (a) {
    if (a.getAttribute('href').split('/').pop() === page) {
      a.classList.add('nav-active');
    }
  });

  /* ── Nav icons (inline SVG, no external dependency) ── */
  var NAV_ICONS = {
    'Index.html':                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
    'Menu.html':                   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M11 9H9V2H7v7H5V2H3v7a4 4 0 003 3.87V22h2v-9.13A4 4 0 0011 9zM16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4z"/></svg>',
    'Service and Event.html':      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
    'Team.html':                   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
    'Contact and reservaion.html': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>'
  };

  document.querySelectorAll('nav a').forEach(function (a) {
    var href = a.getAttribute('href').split('/').pop();
    var svg = NAV_ICONS[href];
    if (svg) {
      var span = document.createElement('span');
      span.className = 'nav-icon';
      span.innerHTML = svg;
      a.insertBefore(span, a.firstChild);
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
