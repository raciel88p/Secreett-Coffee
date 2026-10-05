import { gsap } from 'gsap';

export function initAnimations() {
  if (typeof window === 'undefined') return;

  // Header and Hero reveals
  gsap.from('header', {
    opacity: 0,
    y: -20,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Intersection Observer scroll reveals for smooth, lightweight animation
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out'
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('section > div').forEach((el) => {
    gsap.set(el, { opacity: 0, y: 20 });
    observer.observe(el);
  });
}
