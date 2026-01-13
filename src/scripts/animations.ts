import { animate, inView, stagger } from '@motionone/dom';

// Initialize animations when DOM is loaded
function initAnimations() {
  // Hero text animation
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroCta = document.querySelector('.hero-cta');
  
  if (heroTitle) {
    animate(heroTitle, 
      { opacity: [0, 1], y: [30, 0] }, 
      { duration: 0.8, delay: 0.2 }
    );
  }
  
  if (heroSubtitle) {
    animate(heroSubtitle, 
      { opacity: [0, 1], y: [30, 0] }, 
      { duration: 0.8, delay: 0.4 }
    );
  }
  
  if (heroCta) {
    animate(heroCta, 
      { opacity: [0, 1], y: [30, 0] }, 
      { duration: 0.8, delay: 0.6 }
    );
  }

  // Section reveal animations
  const sections = document.querySelectorAll<HTMLElement>('.animate-section');
  sections.forEach((section) => {
    inView(section, () => {
      animate(section, 
        { opacity: [0, 1], y: [40, 0] }, 
        { duration: 0.8 }
      );
    }, { margin: '-100px' });
  });

  // Card stagger animations
  const cardGroups = document.querySelectorAll<HTMLElement>('.animate-cards');
  cardGroups.forEach((group) => {
    const cards = group.querySelectorAll<HTMLElement>('.card');
    inView(group, () => {
      animate(cards, 
        { opacity: [0, 1], y: [30, 0] }, 
        { duration: 0.6, delay: stagger(0.1) }
      );
    }, { margin: '-50px' });
  });

  // Button hover effects
  const buttons = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-secondary');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      animate(button, { scale: 1.05 }, { duration: 0.2 });
    });
    
    button.addEventListener('mouseleave', () => {
      animate(button, { scale: 1 }, { duration: 0.2 });
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector<HTMLElement>('.navbar');
  if (navbar) {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
      
      lastScrollY = currentScrollY;
    });
  }

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector<HTMLElement>('.mobile-menu-button');
  const mobileMenu = document.querySelector<HTMLElement>('.mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      
      if (isOpen) {
        animate(mobileMenu, { opacity: [1, 0], y: [0, -20] }, { duration: 0.3 });
        setTimeout(() => {
          mobileMenu.classList.remove('open');
        }, 300);
      } else {
        mobileMenu.classList.add('open');
        animate(mobileMenu, { opacity: [0, 1], y: [-20, 0] }, { duration: 0.3 });
      }
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}