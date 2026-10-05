import { gsap } from 'gsap';

export function initAnimations() {
  if (typeof window === 'undefined') return;

  // Hero fade-ins
  gsap.from('.hero-badge', {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out'
  });

  gsap.from('.hero-title', {
    opacity: 0,
    y: 30,
    duration: 1.2,
    delay: 0.4,
    ease: 'power3.out'
  });

  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.7,
    ease: 'power3.out'
  });

  gsap.from('.hero-ctas', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.hero-stats', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1.1,
    ease: 'power3.out'
  });

  // Intersection Observer scroll reveals for smooth, lightweight animation
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.award-card, .timeline-item, .glass-card').forEach((el) => {
    gsap.set(el, { opacity: 0, y: 30 });
    observer.observe(el);
  });
}
