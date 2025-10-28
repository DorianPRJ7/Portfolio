export function initMagnetics(wrapperSelector = '.mag', innerSelector = '.btn') {
  document.querySelectorAll(wrapperSelector).forEach(w => {
      const btn = w.querySelector(innerSelector);
      if (!btn) return;
      w.addEventListener('pointermove', (e) => {
          const b = w.getBoundingClientRect();
          const x = e.clientX - b.left - b.width/2;
          const y = e.clientY - b.top  - b.height/2;
          btn.style.transform = `translate(${x/8}px, ${y/8}px)`;
      });
      w.addEventListener('pointerleave', () => { btn.style.transform = 'translate(0,0)'; });
  });
}
