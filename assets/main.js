import { PROJECTS } from './projects.js';
import { initParticles } from './anims/particles.js';
import { initTilt } from './anims/tilt.js';
import { initMagnetics } from './anims/magnetics.js';
import { initStickyHeader } from './header.js';

document.getElementById('year').textContent = new Date().getFullYear();

const themeBtn = document.getElementById('theme');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(mode){
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  if (themeMeta){
    themeMeta.setAttribute('content', mode === 'dark' ? '#0d0f14' : '#f6f7fb');
  }
}

(function initTheme(){
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light'){
    applyTheme(saved);
  } else {
    const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
})();

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    const next = (cur === 'light') ? 'dark' : 'light';
    applyTheme(next);
    themeBtn.animate([{transform:'scale(1)'},{transform:'scale(0.96)'},{transform:'scale(1)'}], {duration:140, easing:'ease-out'});
  });
}

initParticles(document.getElementById('bg'));

window.addEventListener('pointermove', (e) => {
  document.documentElement.style.setProperty('--gx', (e.clientX/window.innerWidth*100)+"%");
  document.documentElement.style.setProperty('--gy', (e.clientY/window.innerHeight*100)+"%");
});

initTilt('#tiltCard', 18);
initMagnetics('.mag', '.btn');
initStickyHeader();

const rail = document.getElementById('rail');

function projectCardTemplate(p, idx) {
  const linksHtml = p.links.map(l => {
      if (l.label.toLowerCase() === 'lire') {
          return `<button type="button" class="link read-toggle" data-idx="${idx}" aria-controls="details-${idx}" aria-expanded="false">Lire</button>`;
      }
      return `<a class="link" href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`;
  }).join('');

  const thumb = p.img
      ? `<figure class="thumb">
           <img src="${p.img}" alt="${p.title}" loading="lazy" decoding="async" />
         </figure>`
      : '';

  return `
    <article class="work" data-card="${idx}">
      <h3>${p.title}</h3>
      <div class="tags">${p.tags.map(t=>`<span class='tag'>${t}</span>`).join('')}</div>
      <p style="margin:10px 0 0">${p.description}</p>
      <div class="actions">
        ${thumb}
        <div class="links">${linksHtml}</div>
      </div>
      <div class="details" id="details-${idx}">
        <p>${p.details || "..."}</p>
      </div>
    </article>
  `;
}

function renderWorks() {
  if (!rail) return;
  rail.innerHTML = PROJECTS.map((p, i) => projectCardTemplate(p, i)).join('');

  rail.querySelectorAll('.read-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          const idx = btn.getAttribute('data-idx');
          const panel = document.getElementById(`details-${idx}`);
          const isOpen = panel.classList.contains('open');

          rail.querySelectorAll('.details.open').forEach(d => {
              d.classList.remove('open');
              const b = d.closest('.work')?.querySelector('.read-toggle');
              if (b) { b.setAttribute('aria-expanded','false'); b.textContent = 'Lire'; }
          });

          if (!isOpen) {
              panel.classList.add('open');
              btn.setAttribute('aria-expanded','true');
              btn.textContent = 'Fermer';
              panel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          } else {
              panel.classList.remove('open');
              btn.setAttribute('aria-expanded','false');
              btn.textContent = 'Lire';
          }
      });
  });
}
renderWorks();

addEventListener('keydown', (e) => {
  if (!rail) return;
  if (['ArrowRight','k','K'].includes(e.key)) rail.scrollBy({ left: 420, behavior: 'smooth' });
  if (['ArrowLeft','j','J'].includes(e.key)) rail.scrollBy({ left: -420, behavior: 'smooth' });
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
      if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
      }
  });
}, { threshold: .15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
      window.dispatchEvent(new Event('resize'));
  });
}

setTimeout(() => {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
}, 1200);

const navToggle = document.getElementById('navToggle');
const html = document.documentElement;
const primaryNav = document.getElementById('primary-nav');
if (navToggle) navToggle.hidden = false;
function closeNav(){
  html.classList.remove('nav-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}
navToggle?.addEventListener('click', () => {
  const isOpen = html.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
primaryNav?.querySelectorAll('a').forEach(a => { a.addEventListener('click', closeNav); });
addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
addEventListener('click', (e) => {
  if (!html.classList.contains('nav-open')) return;
  const inNav = primaryNav?.contains(e.target);
  const onToggle = navToggle?.contains(e.target);
  if (!inNav && !onToggle) closeNav();
});
