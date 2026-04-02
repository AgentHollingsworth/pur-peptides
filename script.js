// ── Page routing ──────────────────────────────────────────
function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) { target.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const page = el.getAttribute('data-page');
    if (page) navigate(page);
  });
});

// ── FAQ accordion ──────────────────────────────────────────
document.addEventListener('click', e => {
  const btn = e.target.closest('.faq-question');
  if (!btn) return;
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  // close all in same list
  item.closest('.faq-list')?.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
});

// ── Catalog sidebar filter ─────────────────────────────────
document.querySelectorAll('.sidebar-link[data-filter]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.sidebar-link[data-filter]').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const filter = link.getAttribute('data-filter');
    document.querySelectorAll('.catalog-card[data-categories]').forEach(card => {
      const cats = card.getAttribute('data-categories').split(',');
      card.style.display = (filter === 'all' || cats.includes(filter)) ? '' : 'none';
    });
  });
});

navigate('home');
