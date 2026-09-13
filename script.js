const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const gallery = document.querySelector('.gallery-slider');
if (gallery) {
  const slides = [...gallery.querySelectorAll('.gallery-slide')];
  const counter = gallery.querySelector('.gallery-counter');
  let current = 0;
  // Prepare two photos in each direction, including wraparound at the ends.
  const preparedImages = new WeakSet();
  function warmNeighbors() {
    [0, 1, -1, 2, -2].forEach(offset => {
      const i = (current + offset + slides.length) % slides.length;
      const img = slides[i].querySelector('img');
      img.loading = 'eager';
      if (preparedImages.has(img)) return;
      preparedImages.add(img);
      // Decode hidden photos ahead of time as well as downloading them.
      if (typeof img.decode === 'function') {
        img.decode().catch(() => { preparedImages.delete(img); });
      }
    });
  }
  let galleryNearby = false;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    counter.textContent = `${current + 1} / ${slides.length}`;
    if (galleryNearby) warmNeighbors();
  }
  gallery.querySelector('.gallery-prev').addEventListener('click', () => show(current - 1));
  gallery.querySelector('.gallery-next').addEventListener('click', () => show(current + 1));
  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  const viewport = gallery.querySelector('.gallery-viewport');
  let start = null;
  viewport.addEventListener('touchstart', event => {
    start = event.touches.length === 1 ? {x: event.touches[0].clientX, y: event.touches[0].clientY} : null;
  }, {passive: true});
  viewport.addEventListener('touchend', event => {
    if (!start) return;
    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1));
    start = null;
  }, {passive: true});
  viewport.addEventListener('touchcancel', () => { start = null; });
  show(0);
  const galleryLoader = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      galleryNearby = true;
      warmNeighbors();
      galleryLoader.disconnect();
    }
  }, {rootMargin: '1000px'});
  galleryLoader.observe(gallery);
}
