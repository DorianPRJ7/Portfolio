(function(){
  const url = new URL(location.href);
  if (url.searchParams.get('nointro') === '1') return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ease = 'cubic-bezier(.2,.8,.2,1)';
  const short = 520;

  // ========= Inject minimal CSS (scoped) =========
  const style = document.createElement('style');
  style.textContent = `
    .intro__overlay{
      position:fixed; inset:0; z-index:9999; pointer-events:none;
      display:grid; place-items:center; 
      background: radial-gradient(60% 40% at 50% -10%,
                  color-mix(in oklab, var(--accent, #59f9ff) 12%, transparent), transparent 60%),
                  var(--bg, #0d0f14);
      overflow:hidden;
    }
    .intro__grid{
      position:absolute; inset:0;
      background-image:
        linear-gradient(transparent 95%, rgba(255,255,255,.05) 96%),
        linear-gradient(90deg, transparent 95%, rgba(255,255,255,.05) 96%);
      background-size: 100% 24px, 24px 100%;
      opacity:.12;
      mix-blend-mode: screen;
    }
    html[data-theme="light"] .intro__grid{ opacity:.08 }
    .intro__ring{
      position:absolute; width:min(70vmin,720px); height:min(70vmin,720px); border-radius:50%;
      background: conic-gradient(from 180deg, var(--accent-2, #7b6cff), transparent 40%, var(--accent, #59f9ff));
      filter: blur(14px) saturate(1.3);
      opacity:.65;
    }
    .intro__mask{
      position:relative; display:grid; place-items:center; padding:30px 24px;
    }
    .intro__title{
      font-family: "Space Grotesk", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      font-weight:700; letter-spacing:-.06em;
      line-height:.9;
      text-transform:uppercase;
      text-align:center;
      width:100%;
      font-size: clamp(40px, 12vw, 120px);
      background: linear-gradient(90deg, var(--accent, #59f9ff), #fff);
      -webkit-background-clip:text; background-clip:text; color:transparent;
      text-shadow: 0 0 28px color-mix(in oklab, var(--accent, #59f9ff) 28%, transparent);
      will-change: transform, letter-spacing, filter, opacity;
    }
    .intro__subtitle{
      font:600 clamp(10px, 2.6vw, 16px)/1 "IBM Plex Mono", monospace; color:var(--muted,#9aa3b2);
      letter-spacing:.12em; text-transform:uppercase; opacity:.9; margin-top:12px;
    }
    .intro__wipe{
      position:absolute; inset:auto 0 0 0; height:48%;
      background: linear-gradient(180deg, transparent, rgba(0,0,0,.35) 45%, rgba(0,0,0,.65));
      transform: translateY(100%);
    }
    @media (max-width:680px){ .intro__subtitle{ letter-spacing:.08em } }
  `;
  document.head.appendChild(style);

  // ========= Build overlay =========
  const overlay = document.createElement('div');
  overlay.className = 'intro__overlay';
  overlay.innerHTML = `
    <div class="intro__grid"></div>
    <div class="intro__ring"></div>
    <div class="intro__mask">
      <div class="intro__title">Dorian&nbsp;Pareja</div>
      <div class="intro__subtitle">Portfolio · L3 informatique</div>
    </div>
    <div class="intro__wipe"></div>
  `;
  document.body.appendChild(overlay);

  const grid = overlay.querySelector('.intro__grid');
  const ring = overlay.querySelector('.intro__ring');
  const title = overlay.querySelector('.intro__title');
  const subtitle = overlay.querySelector('.intro__subtitle');
  const wipe = overlay.querySelector('.intro__wipe');

  // ========= Animations =========
  const animations = [];

  // Rotate ring continuously, fade out later
  animations.push(ring.animate(
    [{transform:'rotate(0deg) scale(1.06)'}, {transform:'rotate(360deg) scale(1.06)'}],
    {duration:4200, iterations:1, easing:'linear', fill:'both'}
  ));

  // Title pop-in (blur -> sharp, tighten tracking), slight scale
  animations.push(title.animate(
    [
      {opacity:0, filter:'blur(12px)', letterSpacing:'-0.14em', transform:'translateY(8px) scale(.96)'},
      {opacity:1, filter:'blur(0)',    letterSpacing:'-0.02em', transform:'none'}
    ],
    {duration:820, easing:ease, fill:'both'}
  ));

  // Subtitle slide
  animations.push(subtitle.animate(
    [{opacity:0, transform:'translateY(8px)'},{opacity:.96, transform:'none'}],
    {duration:short, delay:220, easing:ease, fill:'both'}
  ));

  // Grid shimmer (small pulse then fade)
  animations.push(grid.animate(
    [{opacity:.0},{opacity:.12},{opacity:.0}],
    {duration:1300, easing:'ease-in-out', fill:'both'}
  ));

  // Bottom wipe up then down (like a page guard)
  animations.push(wipe.animate(
    [{transform:'translateY(100%)'},{transform:'translateY(0%)'},{transform:'translateY(100%)'}],
    {duration:1000, easing:ease, fill:'both', delay:180}
  ));

  // ========= Underlying content entrance =========
  const logo = document.querySelector('.logo');
  if (logo) logo.animate(
    [{transform:'translateY(-6px) scale(.94)', opacity:0},{transform:'none', opacity:1}],
    {duration:short, easing:ease, fill:'both', delay:120}
  );

  const navEls = Array.from(document.querySelectorAll('.nav-links a, #theme'));
  navEls.forEach((el, i) => {
    el.animate(
      [{transform:'translateY(-6px)', opacity:0},{transform:'none', opacity:1}],
      {duration:short, delay:220 + i*60, easing:ease, fill:'both'}
    );
  });

  const titleHero = document.querySelector('#hero .title');
  const subtitleHero = document.querySelector('#hero .subtitle');
  const ctas = Array.from(document.querySelectorAll('.hero-cta .btn'));

  if (titleHero) titleHero.animate(
    [{letterSpacing:'-0.06em', filter:'blur(6px)', opacity:0},{letterSpacing:'-0.02em', filter:'blur(0)', opacity:1}],
    {duration:700, delay:280, easing:ease, fill:'both'}
  );
  if (subtitleHero) subtitleHero.animate(
    [{transform:'translateY(8px)', opacity:0},{transform:'none', opacity:1}],
    {duration:short, delay:380, easing:ease, fill:'both'}
  );
  ctas.forEach((btn, i) => {
    btn.animate(
      [{transform:'translateY(6px) scale(.98)', opacity:0},{transform:'none', opacity:1}],
      {duration:short, delay:430 + i*70, easing:ease, fill:'both'}
    );
  });

  // ========= Exit overlay =========
  const exit = overlay.animate(
    [{opacity:1},{opacity:0}],
    {duration:520, delay:680, easing:'ease-out', fill:'forwards'}
  );
  exit.addEventListener('finish', () => {
    overlay.remove();
    style.remove();
  });
})();
