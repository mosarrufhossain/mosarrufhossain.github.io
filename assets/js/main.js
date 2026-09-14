/* ==========================================================================
   main.js — one-page site. Same ANALYTICS block as the full site (see
   ANALYTICS.md there); dropdown-nav open/close logic is new to this layout.
   ========================================================================== */

var ANALYTICS = {
  provider: 'none',
  cloudflareToken: '',
  goatcounterUrl: '',
  ga4Id: ''
};

(function loadAnalytics() {
  var a = ANALYTICS, s;
  if (a.provider === 'cloudflare' && a.cloudflareToken) {
    s = document.createElement('script');
    s.defer = true;
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', '{"token": "' + a.cloudflareToken + '"}');
    document.head.appendChild(s);
  } else if (a.provider === 'goatcounter' && a.goatcounterUrl) {
    s = document.createElement('script');
    s.async = true;
    s.src = 'https://gc.zgo.at/count.js';
    s.setAttribute('data-goatcounter', a.goatcounterUrl);
    document.head.appendChild(s);
  } else if (a.provider === 'ga4' && a.ga4Id) {
    s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + a.ga4Id;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', a.ga4Id, { anonymize_ip: true });
  }
})();

/* Dropdown nav: same trigger/panel on every screen size */
(function dropdownNav() {
  var btn = document.querySelector('.dropdown-toggle');
  var panel = document.getElementById('site-nav');
  if (!btn || !panel) return;

  function close() {
    panel.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  }
  function open() {
    panel.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    panel.classList.contains('is-open') ? close() : open();
  });
  panel.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') close();
  });
  document.addEventListener('click', function (e) {
    if (!panel.contains(e.target) && e.target !== btn) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { close(); btn.focus(); }
  });
})();

/* Reveal sections on scroll */
(function reveal() {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  items.forEach(function (el) { io.observe(el); });
})();

(function year() {
  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
