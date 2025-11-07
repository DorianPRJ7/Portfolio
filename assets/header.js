export function initStickyHeader() {
  const html = document.documentElement;
  const header = document.querySelector('header');
  if (!header) return;

  const sectionEls = [...document.querySelectorAll('main section[id]')];
  const linkMap = new Map();
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
      const id = a.getAttribute('href').slice(1);
      if (id) linkMap.set(id, a);
  });

  const getHeaderH = () => parseInt(getComputedStyle(html).getPropertyValue('--header-h')) || 64;
  const getSafeTop = () => {
      const v = getComputedStyle(html).getPropertyValue('--safe-top').trim();
      return parseInt(v) || 0;
  };
  const OFFSET = () => getHeaderH() + getSafeTop() + 8;
  const PREACT = 140;

  const setHeaderVars = () => {
      const h = Math.ceil(header.getBoundingClientRect().height);
      html.style.setProperty('--header-h', h + 'px');
  };

  let sectionTops = [];
  function computeSectionTops() {
      sectionTops = sectionEls.map(sec => ({
          id: sec.id,
          top: Math.floor(sec.getBoundingClientRect().top + window.scrollY)
      })).sort((a, b) => a.top - b.top);
  }

  function setCurrent(id) {
      linkMap.forEach(a => a.classList.remove('current'));
      const link = linkMap.get(id);
      if (link) link.classList.add('current');
      try { history.replaceState(null, '', '#' + id); } catch {}
  }

  function updateActiveFromScroll() {
      if (window.scrollY <= 2) {
          if (linkMap.has('hero')) setCurrent('hero');
          return;
      }
      const offset = OFFSET();
      const y = window.scrollY + offset + PREACT;

      const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= Math.floor(document.documentElement.scrollHeight) - 2;
      if (atBottom) {
          const last = sectionTops[sectionTops.length - 1];
          if (last) setCurrent(last.id);
          return;
      }
      let active = sectionTops[0]?.id || 'hero';
      for (let i = 0; i < sectionTops.length; i++) {
          if (sectionTops[i].top <= y) active = sectionTops[i].id;
          else break;
      }
      setCurrent(active);
  }

  setHeaderVars();
  computeSectionTops();
  updateActiveFromScroll();

  const recalcSoon = () => setTimeout(() => {
      setHeaderVars();
      computeSectionTops();
      updateActiveFromScroll();
  }, 60);

  addEventListener('resize', recalcSoon, { passive: true });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) recalcSoon(); });
  addEventListener('load', () => { computeSectionTops(); updateActiveFromScroll(); });
  setTimeout(() => { computeSectionTops(); updateActiveFromScroll(); }, 300);
  setTimeout(() => { computeSectionTops(); updateActiveFromScroll(); }, 1000);

  let ticking = false;
  addEventListener('scroll', () => {
      if (!ticking) {
          requestAnimationFrame(() => {
              updateActiveFromScroll();
              ticking = false;
          });
          ticking = true;
      }
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
          const id = a.getAttribute('href').slice(1);
          const target = document.getElementById(id);
          if (!target) return;
          e.preventDefault();
          const y = target.getBoundingClientRect().top + window.scrollY - OFFSET();
          window.scrollTo({ top: y, behavior: 'smooth' });
      });
  });
}
