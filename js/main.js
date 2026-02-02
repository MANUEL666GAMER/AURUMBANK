// ==========================================
// NAVIGATION FUNCTIONALITY
// ==========================================

class Navigation {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.navToggle = document.getElementById('navToggle');
    this.navMenu = document.getElementById('navMenu');
    this.navLinks = document.querySelectorAll('.nav-menu a');
    
    this.init();
  }
  
  init() {
    // Mobile menu toggle
    this.navToggle?.addEventListener('click', () => this.toggleMobileMenu());
    
    // Close mobile menu when clicking a link
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });
    
    // Sticky navigation on scroll
    window.addEventListener('scroll', () => this.handleScroll());
    
    // Smooth scroll for anchor links
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.smoothScroll(e));
    });
  }
  
  toggleMobileMenu() {
    this.navMenu?.classList.toggle('active');
    this.animateToggleIcon();
  }
  
  closeMobileMenu() {
    this.navMenu?.classList.remove('active');
  }
  
  animateToggleIcon() {
    const spans = this.navToggle?.querySelectorAll('span');
    if (!spans) return;
    
    if (this.navMenu?.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(10px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  }
  
  handleScroll() {
    if (window.scrollY > 100) {
      this.navbar?.classList.add('scrolled');
    } else {
      this.navbar?.classList.remove('scrolled');
    }
  }
  
  smoothScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };
    
    this.init();
  }
  
  init() {
    this.observeElements();
  }
  
  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Optional: unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, this.observerOptions);
    
    // Elements to observe
    const elements = document.querySelectorAll(`
      .about-content,
      .about-stats,
      .card-item,
      .benefit-card,
      .comparison-table,
      .cta-content,
      .contact-grid
    `);
    
    elements.forEach(el => {
      observer.observe(el);
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
  }
}

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// ==========================================
// CARD APPLICATION FUNCTIONALITY
// ==========================================

function applyCard(cardType) {
  const cardNames = {
    vita: 'Aurum Vita',
    fides: 'Aurum Fides',
    legatum: 'Aurum Legatum'
  };
  
  const cardName = cardNames[cardType] || 'Aurum';
  
  // Show confirmation message
  showNotification(
    `¡Genial! Estás a punto de solicitar la tarjeta ${cardName}. Un asesor se pondrá en contacto contigo pronto.`,
    'success'
  );
  
  // Scroll to contact form
  setTimeout(() => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Pre-select the card in the form
      const selectElement = document.querySelector('.contact-form select');
      if (selectElement) {
        selectElement.value = cardType;
        selectElement.focus();
      }
    }
  }, 1000);
}

// ==========================================
// FORM HANDLING
// ==========================================

class FormHandler {
  constructor() {
    this.contactForm = document.getElementById('contactForm');
    this.init();
  }
  
  init() {
    this.contactForm?.addEventListener('submit', (e) => this.handleSubmit(e));
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn?.textContent;
    if (submitBtn) {
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
    }
    
    // Simulate API call
    await this.simulateFormSubmission(data);
    
    // Reset form
    e.target.reset();
    
    // Restore button
    if (submitBtn && originalText) {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
    
    // Show success message
    showNotification(
      '¡Gracias por tu interés! Nos pondremos en contacto contigo en las próximas 24 horas.',
      'success'
    );
  }
  
  simulateFormSubmission(data) {
    return new Promise((resolve) => {
      console.log('Form data:', data);
      setTimeout(resolve, 1500);
    });
  }
}

// ==========================================
// NOTIFICATION SYSTEM
// ==========================================

function showNotification(message, type = 'info') {
  // Remove existing notification if any
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add styles
  Object.assign(notification.style, {
    position: 'fixed',
    top: '100px',
    right: '20px',
    backgroundColor: type === 'success' ? '#D4AF37' : '#2C3E6B',
    color: type === 'success' ? '#1A1A2E' : '#FFFFFF',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    zIndex: '10000',
    maxWidth: '400px',
    fontFamily: "'Lato', sans-serif",
    fontSize: '0.9375rem',
    fontWeight: '500',
    animation: 'slideInRight 0.3s ease-out',
    cursor: 'pointer'
  });
  
  // Add animation keyframes
  if (!document.querySelector('#notification-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'notification-styles';
    styleSheet.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styleSheet);
  }
  
  // Append to body
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  const removeNotification = () => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  };
  
  notification.addEventListener('click', removeNotification);
  setTimeout(removeNotification, 5000);
}

// ==========================================
// CARD HOVER EFFECTS
// ==========================================

class CardEffects {
  constructor() {
    this.cards = document.querySelectorAll('.card-item');
    this.init();
  }
  
  init() {
    this.cards.forEach(card => {
      card.addEventListener('mouseenter', () => this.handleMouseEnter(card));
      card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
      card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
    });
  }
  
  handleMouseEnter(card) {
    const cardImage = card.querySelector('.card-image');
    if (cardImage) {
      cardImage.style.transition = 'transform 0.1s ease-out';
    }
  }
  
  handleMouseLeave(card) {
    const cardImage = card.querySelector('.card-image');
    if (cardImage) {
      cardImage.style.transform = '';
      cardImage.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    }
  }
  
  handleMouseMove(e, card) {
    const cardImage = card.querySelector('.card-image');
    if (!cardImage) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardImage.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.05, 1.05, 1.05)
    `;
  }
}

// ==========================================
// COUNTER ANIMATION
// ==========================================

class CounterAnimation {
  constructor() {
    this.counters = document.querySelectorAll('.stat-number');
    this.init();
  }
  
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    this.counters.forEach(counter => observer.observe(counter));
  }
  
  animateCounter(element) {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const isPlus = target.includes('+');
    const number = parseInt(target.replace(/[^0-9]/g, ''));
    
    if (isNaN(number)) return;
    
    const duration = 2000;
    const steps = 60;
    const stepValue = number / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= number) {
        current = number;
        clearInterval(timer);
      }
      
      let display = Math.floor(current);
      if (isPercentage) display += '%';
      if (isPlus) display += '+';
      if (target.includes('K')) display += 'K';
      
      element.textContent = display;
    }, stepDuration);
  }
}

// ==========================================
// PARALLAX EFFECT
// ==========================================

class ParallaxEffect {
  constructor() {
    this.elements = document.querySelectorAll('.hero-background');
    this.init();
  }
  
  init() {
    window.addEventListener('scroll', () => this.handleScroll());
  }
  
  handleScroll() {
    const scrolled = window.pageYOffset;
    this.elements.forEach(element => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }
}

// ==========================================
// INITIALIZE ALL MODULES
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  new Navigation();
  new ScrollAnimations();
  new FormHandler();
  new CardEffects();
  new CounterAnimation();
  new ParallaxEffect();
  
  // Add smooth reveal on page load
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in';
    document.body.style.opacity = '1';
  }, 100);
  
  console.log('🏦 Aurum Bank website initialized successfully');
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Format currency
function formatCurrency(amount, currency = 'MXN') {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

// Validate email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Validate phone
function isValidPhone(phone) {
  const re = /^[\d\s\-\+\(\)]+$/;
  return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}