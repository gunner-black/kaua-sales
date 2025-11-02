function removerPreloader() {
    const preloader = document.getElementById('preloader-overlay');
    if (preloader) {
        preloader.classList.add('hidden');
        preloader.addEventListener('transitionend', function() {
            preloader.remove();
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const elementosAnimar = document.querySelectorAll('.animate-while-rolling');
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  elementosAnimar.forEach(elemento => {
    observer.observe(elemento);
  });
});