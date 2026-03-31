// Simple SPA router
const pages = document.querySelectorAll('.page');
const allLinks = document.querySelectorAll('[data-page]');

function navigate(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

allLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.getAttribute('data-page');
    if (page) navigate(page);
  });
});

// Footer links
document.querySelectorAll('.footer-col a[data-page]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    navigate(a.getAttribute('data-page'));
  });
});

// Default to home
navigate('home');
