(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if ((path === '' || path === 'index.html') && href === 'index.html') link.classList.add('active');
    if (href === path) link.classList.add('active');
  });
})();
