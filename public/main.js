// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('main-nav');
const closeBtn = document.querySelector('.nav-close');
function setMenu(open) {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) nav.querySelector('a').focus(); else menuBtn.focus();
}
menuBtn?.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
closeBtn?.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) setMenu(false); });

// Forms: client-side validation, demo submission (no backend)
document.querySelectorAll('form[data-demo]').forEach(form => {
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let firstBad = null;
    form.querySelectorAll('[required]').forEach(el => {
      const bad = !el.value.trim() || !el.checkValidity();
      el.setAttribute('aria-invalid', String(bad));
      if (bad && !firstBad) firstBad = el;
    });
    if (firstBad) { status.className = 'form-status'; status.textContent = ''; firstBad.focus(); return; }
    const btn = form.querySelector('button[type="submit"]');
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = 'Sending…';
    setTimeout(() => {
      btn.disabled = false; btn.textContent = label;
      status.className = 'form-status ok';
      status.textContent = form.dataset.demo;
      form.reset();
    }, 800);
  });
  form.addEventListener('input', e => {
    if (e.target.getAttribute('aria-invalid') === 'true' && e.target.checkValidity() && e.target.value.trim()) e.target.setAttribute('aria-invalid', 'false');
  });
});

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
