export function initParticles(canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const COUNT = reduce ? 0 : 90;
  const MAX_V = 0.3, LINK = 120;

  function getColors() {
      const mode = document.documentElement.getAttribute('data-theme') ||
                   (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      if (mode === 'dark') {
          return { dot: 'rgba(255,255,255,0.9)', line: 'rgba(121,135,255,0.9)', lineAlpha: 0.20, pointAlpha: 0.60 };
      }
      return { dot: 'rgba(96,106,122,0.9)', line: 'rgba(96,106,122,0.9)', lineAlpha: 0.20, pointAlpha: 0.60 };
  }
  let COLORS = getColors();

  const mo = new MutationObserver((muts) => {
      for (const m of muts) {
          if (m.type === 'attributes' && m.attributeName === 'data-theme') {
              COLORS = getColors();
              if (reduce) drawStatic();
              break;
          }
      }
  });
  mo.observe(document.documentElement, { attributes: true });

  function resize() {
      W = canvas.width = innerWidth;
      H = canvas.height = innerHeight;
      if (reduce) drawStatic();
  }
  function rand(a, b) { return Math.random() * (b - a) + a; }
  function init() {
      particles = Array.from({ length: COUNT }, () => ({
          x: rand(0, W), y: rand(0, H),
          vx: rand(-MAX_V, MAX_V), vy: rand(-MAX_V, MAX_V)
      }));
  }

  function drawStatic(){
      const grd = ctx.createLinearGradient(0,0,W,H);
      grd.addColorStop(0, 'rgba(0,0,0,0)');
      grd.addColorStop(1, 'rgba(0,0,0,0.05)');
      ctx.clearRect(0,0,W,H);
      ctx.fillStyle = grd;
      ctx.fillRect(0,0,W,H);
  }

  function step() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = COLORS.dot;
      for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;

          ctx.globalAlpha = COLORS.pointAlpha;
          ctx.fillRect(p.x, p.y, 1.6, 1.6);

          for (let j = i + 1; j < particles.length; j++) {
              const q = particles[j];
              const dx = p.x - q.x, dy = p.y - q.y;
              const d = Math.hypot(dx, dy);
              if (d < LINK) {
                  ctx.globalAlpha = (1 - d / LINK) * COLORS.lineAlpha;
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(q.x, q.y);
                  ctx.strokeStyle = COLORS.line;
                  ctx.lineWidth = 1;
                  ctx.stroke();
              }
          }
      }
      requestAnimationFrame(step);
  }

  addEventListener('resize', resize);
  resize(); 
  if (reduce){
      drawStatic();
      return { destroy(){ mo.disconnect(); } };
  }
  init(); step();

  return { destroy() { mo.disconnect(); } };
}
