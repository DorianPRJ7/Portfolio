export function initTilt(selector, maxRotationDeg = 18) {
    const el = document.querySelector(selector);
    if (!el) return;

    el.addEventListener('pointermove', (e) => {
        const b = el.getBoundingClientRect();
        const px = (e.clientX - b.left) / b.width - 0.5;
        const py = (e.clientY - b.top) / b.height - 0.5;
        el.style.transform = `rotateY(${px*maxRotationDeg}deg) rotateX(${-py*maxRotationDeg}deg)`;
    });

    el.addEventListener('pointerleave', () => {
        el.style.transform = '';
    });
}
