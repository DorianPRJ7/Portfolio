import { PROJECTS } from './projects.js';
import { initParticles } from './anims/particles.js';
import { initTilt } from './anims/tilt.js';
import { initMagnetics } from './anims/magnetics.js';
import { initStickyHeader } from './header.js'; // chemin relatif depuis assets/

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Theme toggle (persistant + meta theme-color) =====
const themeBtn = document.getElementById('theme');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(mode){
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    if (themeMeta){
        themeMeta.setAttribute('content', mode === 'light' ? '#f6f7fb' : '#0d0f14');
    }
}

(function initTheme(){
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark'){
        applyTheme(saved);
    } else {
        const prefersLight = matchMedia('(prefers-color-scheme: light)').matches;
        applyTheme(prefersLight ? 'light' : 'dark');
    }
})();

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = (cur === 'dark') ? 'light' : 'dark';
        applyTheme(next);
        // feedback léger
        themeBtn.animate([{transform:'scale(1)'},{transform:'scale(0.96)'},{transform:'scale(1)'}], {duration:140, easing:'ease-out'});
    });
}

// ===== Canvas particles (respect RDM) =====
initParticles(document.getElementById('bg'));

// ===== Glow suit la souris
window.addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--gx', (e.clientX/window.innerWidth*100)+"%");
    document.documentElement.style.setProperty('--gy', (e.clientY/window.innerHeight*100)+"%");
});

// ===== Tilt 3D
initTilt('#tiltCard', 18);

// ===== Boutons magnétiques
initMagnetics('.mag', '.btn');

// ===== Barre de header =====
initStickyHeader();

// ===== Render projets avec “Lire/Fermer”
const rail = document.getElementById('rail');

function projectCardTemplate(p, idx) {
    const linksHtml = p.links.map(l => {
        if (l.label.toLowerCase() === 'lire') {
            return `<button type="button" class="link read-toggle" data-idx="${idx}" aria-controls="details-${idx}" aria-expanded="false">Lire</button>`;
        }
        return `<a class="link" href="${l.href}" target="_blank" rel="noreferrer">${l.label}</a>`;
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
        <div class="links">${linksHtml}</div>
        ${thumb}
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

            // Ferme les autres (accordéon exclusif)
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

// ===== Navigation clavier (→ = k/K, ← = j/J)
addEventListener('keydown', (e) => {
    if (!rail) return;
    if (['ArrowRight','k','K'].includes(e.key)) rail.scrollBy({ left: 420, behavior: 'smooth' });
    if (['ArrowLeft','j','J'].includes(e.key)) rail.scrollBy({ left: -420, behavior: 'smooth' });
});

// ===== Reveal on scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
        if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
        }
    });
}, { threshold: .15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* === STABILISATION MINIMALE ===
   1) Recalcule les métriques (header/sections) quand les polices web sont prêtes,
      pour éviter les décalages de layout/activation trop tardive.
   2) Fallback reveal si jamais l’observer tarde (chargement atypique).
*/
if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
        // Déclenche un recalcul global léger (ton header.js écoute resize)
        window.dispatchEvent(new Event('resize'));
    });
}

// Fallback reveal (au cas où) : montre les éléments si pas encore révélés
setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
}, 1200);