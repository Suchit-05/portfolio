// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Optional: Scroll reveal effect (simple fade-in)
  const sections = document.querySelectorAll('.section');
  
  const revealSection = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  };
  
  const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15,
  });
  
  sections.forEach(section => {
    section.classList.add('hidden');
    sectionObserver.observe(section);
  });
  