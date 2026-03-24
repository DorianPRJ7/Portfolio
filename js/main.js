import { UNIVERSITY_PROJECTS, PERSONNAL_PROJECTS } from '../data/projects.js';
import { CURRENT_PROJECTS } from '../data/current.js';
import { SKILLS } from '../data/skills.js';
import { PROFILE } from '../data/profile.js';
import { EDUCATION } from '../data/education.js';
import { CONTACT } from '../data/contact.js';
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
    applyTheme('light');
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

const railUniversityProjects = document.getElementById('railUniversityProjects');
const railPersonnalProjects = document.getElementById('railPersonnalProjects');

const CATEGORY_ORDER = [
  "D&eacute;veloppement Web",
  "D&eacute;veloppement Logiciel",
  "Algorithmique & IA",
  "Bases de donn&eacute;es"
];

const LINK_ICONS = {
  'github': 'icon-github'
};

function projectCardTemplate(p, idx) {
  const linksHtml = p.links.map(l => {
    if (l.label.toLowerCase() === 'lire') {
      return `<button type="button" class="link read-toggle" data-idx="${idx}" aria-controls="details-${idx}" aria-expanded="false" aria-label="Lire"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><use href="#icon-points"></use></svg></button>`;
    }
    const icon = l.icon || LINK_ICONS[l.label.toLowerCase()];
    if (icon) {
      return `<a class="link" href="${l.href}" target="_blank" rel="noopener noreferrer" aria-label="${l.label}"><svg width="20" height="20" role="img" viewBox="0 0 24 24" fill="currentColor"><use href="#${icon}"></use></svg></a>`;
    }
    return `<a class="link" href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`;
  }).join('');

  const thumb = p.img
      ? `<figure class="thumb">
           <img src="${p.img}" alt="${p.title}" loading="lazy" decoding="async" class="thumb-img" data-idx="${idx}" />
           <dialog id="dialogImage-${idx}">
              <img src="${p.img}" width="500" alt="${p.title}" />
              <br />
              <button class="close-dialog">Fermer</button>
          </dialog>
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

function registerReadToggles(rail) {
  rail.querySelectorAll('.read-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = btn.getAttribute('data-idx');
      const panel = document.getElementById(`details-${idx}`);
      const isOpen = panel.classList.contains('open');

      rail.querySelectorAll('.details.open').forEach(d => {
        d.classList.remove('open');
        const b = d.closest('.work')?.querySelector('.read-toggle');
        if (b) { b.setAttribute('aria-expanded','false'); b.querySelector('use').setAttribute('href','#icon-points'); }
      });

      if (!isOpen) {
        panel.classList.add('open');
        btn.setAttribute('aria-expanded','true');
        btn.querySelector('use').setAttribute('href','#icon-chevron-top');
        panel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        panel.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
        btn.querySelector('use').setAttribute('href','#icon-points');
      }
    });
  });
}

function renderWorks(typeOfWorks) {
  let projects, container, prefix;
  if (typeOfWorks === "university") {
    if (!railUniversityProjects) return;
    container = railUniversityProjects;
    projects = UNIVERSITY_PROJECTS;
    prefix = 'u';
  } else if (typeOfWorks === "personnal") {
    if (!railPersonnalProjects) return;
    container = railPersonnalProjects;
    projects = PERSONNAL_PROJECTS;
    prefix = 'p';
  } else {
    return;
  }

  container.innerHTML = '';
  const hasCategories = projects.some(p => p.category);

  if (!hasCategories) {
    const rail = document.createElement('div');
    rail.className = 'rail';
    rail.innerHTML = projects.map((p, i) => projectCardTemplate(p, `${prefix}${i}`)).join('');
    container.appendChild(rail);
    registerReadToggles(rail);
    return;
  }

  const grouped = {};
  projects.forEach((p, i) => {
    const cat = p.category || "Autres";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push({ project: p, idx: `${prefix}${i}` });
  });

  const orderedCats = CATEGORY_ORDER.filter(c => grouped[c]);
  Object.keys(grouped).forEach(c => { if (!orderedCats.includes(c)) orderedCats.push(c); });

  orderedCats.forEach(cat => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'category-group';

    const label = document.createElement('h3');
    label.className = 'category-label';
    label.innerHTML = cat;

    const rail = document.createElement('div');
    rail.className = 'rail';
    rail.innerHTML = grouped[cat].map(({ project, idx }) => projectCardTemplate(project, idx)).join('');

    groupDiv.appendChild(label);
    groupDiv.appendChild(rail);
    container.appendChild(groupDiv);
    registerReadToggles(rail);
  });
}

renderWorks("university");
renderWorks("personnal");

// ── Render hero subtitle ──────────────────────────────────────────────────────
(function renderHeroSubtitle() {
  const el = document.getElementById('heroSubtitle');
  if (el) el.innerHTML = PROFILE.heroSubtitle;
})();

// ── Render "En ce moment" card ────────────────────────────────────────────────
(function renderCurrentProjects() {
  const container = document.getElementById('currentProjectsList');
  if (!container) return;
  container.innerHTML = CURRENT_PROJECTS.map((p, i) => {
    const cls = i === CURRENT_PROJECTS.length - 1 ? 'card-tilde-content-last' : 'card-tilde-content';
    return `<p class="${cls}"><a href="${p.href}">${p.description}<br/><span style="font:600 12px/1 'IBM Plex Mono',monospace;color:var(--accent)">${p.tags.join(' ')}</span></a></p>`;
  }).join('');
})();

// ── Render marquee skills ─────────────────────────────────────────────────────
(function renderMarquee() {
  const viewport = document.getElementById('marqueeViewport');
  if (!viewport) return;
  const pills = SKILLS.map(s => `<span class="pill">${s}</span>`).join('');
  const track = `<div class="marquee-track">${pills}</div>`;
  viewport.innerHTML = track + `<div class="marquee-track" aria-hidden="true">${pills}</div>`;
})();

// ── Render description ────────────────────────────────────────────────────────
(function renderDescription() {
  const panel = document.getElementById('descriptionPanel');
  if (panel) panel.innerHTML = `<p class="p-description">${PROFILE.description}</p>`;
})();

// ── Render parcours ───────────────────────────────────────────────────────────
(function renderEducation() {
  const panel = document.getElementById('educationPanel');
  if (!panel) return;
  panel.innerHTML = EDUCATION.map((e, i) => {
    const projectsHtml = e.projects.length
      ? `<strong><em>Applications des concepts&nbsp;: </em></strong><br/><span style="display:block;padding-left:3%">${e.projects.join(', ')}</span>`
      : '';
    const hr = i < EDUCATION.length - 1 ? '<hr />' : '';
    return `<p><strong>${e.title}</strong> - ${e.institution} (${e.period})<br/><span style="color:var(--muted)"><strong><em>Concepts et Comp&eacute;tences&nbsp;: </em></strong><br/><span style="display:block;padding-left:3%">${e.concepts.join(', ')}</span>${projectsHtml}</span></p>${hr}`;
  }).join('');
})();

// ── Render contact ────────────────────────────────────────────────────────────
(function renderContact() {
  const panel = document.getElementById('contactPanel');
  if (!panel) return;
  const contactsHtml = CONTACT.contacts.map(c =>
    `<li><strong>${c.label}&nbsp;:</strong> <a href="${c.href}">${c.display}</a></li>`
  ).join('');
  const socialsHtml = CONTACT.socials.map(s =>
    `<a class="social" target="_blank" href="${s.href}" aria-label="${s.label}" rel="noopener noreferrer"><svg width="30" height="30" role="img" viewBox="${s.viewBox}" fill="currentColor"><use href="#${s.icon}"></use></svg></a>`
  ).join('');
  panel.innerHTML = `<p>${CONTACT.intro}</p><div class="contact-blocks"><div class="contact-col"><h3>Mes informations de contact&nbsp;:</h3><ul class="contact-list">${contactsHtml}</ul></div><div class="contact-col"><h3>Mes r&eacute;seaux&nbsp;:</h3><div class="socials">${socialsHtml}</div></div></div>`;
})();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("thumb-img")) {
    const idx = e.target.dataset.idx;
    const dialog = document.getElementById(`dialogImage-${idx}`);
    if (dialog) dialog.showModal();
  }

  if (e.target.classList.contains("close-dialog")) {
    const dialog = e.target.closest("dialog");
    if (dialog) dialog.close();
  }
});

/*addEventListener('keydown', (e) => {
  if (!rail) return;
  if (['ArrowRight','k','K'].includes(e.key)) rail.scrollBy({ left: 420, behavior: 'smooth' });
  if (['ArrowLeft','j','J'].includes(e.key)) rail.scrollBy({ left: -420, behavior: 'smooth' });
});*/

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