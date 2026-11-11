/* Akari Studios — página "En construcción" */

// Año actual en el pie de página
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Parallax sutil del fondo al mover el puntero
// (se desactiva si el usuario prefiere reducir el movimiento)
const bg = document.querySelector('.bg');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (bg && !prefersReducedMotion.matches) {
  let frame = null;

  window.addEventListener('pointermove', (event) => {
    if (frame !== null) return;

    frame = requestAnimationFrame(() => {
      const dx = (event.clientX / window.innerWidth - 0.5) * 16;
      const dy = (event.clientY / window.innerHeight - 0.5) * 16;

      bg.style.transform = `scale(1.06) translate(${-dx}px, ${-dy}px)`;
      frame = null;
    });
  });
}
