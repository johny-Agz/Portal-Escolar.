document.addEventListener('DOMContentLoaded', () => {
  // Efecto de carga inicial
  gsap.from('header', {duration: 1, y: -100, opacity: 0});
  gsap.from('.main-content', {duration: 1, y: 50, opacity: 0, delay: 0.3});

  // Efecto hover para tarjetas
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {duration: 0.3, scale: 1.05, boxShadow: '0 0 30px #ED1D24'});
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {duration: 0.3, scale: 1, boxShadow: 'none'});
    });
  });
});

// Efecto de partículas (opcional)
const addParticles = () => {
  const container = document.querySelector('body');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    container.appendChild(particle);
  }
}

window.onload = addParticles;
document.addEventListener('DOMContentLoaded', () => {
  // Efecto de carga inicial
  gsap.from('header', {duration: 1, y: -100, opacity: 0});
  gsap.from('.intro-text', {duration: 1, scale: 0.8, opacity: 0, delay: 0.2});
  gsap.from('.main-title', {duration: 1, y: 50, opacity: 0, delay: 0.4});
  gsap.from('.role-selector', {duration: 1, y: 50, opacity: 0, delay: 0.6});

  // ... (el resto del código se mantiene igual) ...
});