document.addEventListener('DOMContentLoaded', () => {
  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();

  const menuBtn = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) mainNav.style.display = '';
    });
  }

  const form = document.getElementById('subscribeForm');
  const msg = document.getElementById('formMessage');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = form.querySelector('input').value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.style.color = 'yellow';
        msg.textContent = 'Por favor ingresa un correo válido.';
        return;
      }
      msg.style.color = '#00ffae';
      msg.textContent = '¡Gracias por suscribirte!';
      form.reset();
    });
  }

  // Permitir sonido en el video al hacer interacción
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    document.addEventListener('click', () => {
      heroVideo.muted = false;
      heroVideo.play();
    });
  }
});
