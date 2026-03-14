// ==========================================
// CARD EXPANSION - FUNCIONA UNA A LA VEZ
// ==========================================

function toggleCard(button) {
    console.log('Click detectado en botón');
    
    // Obtener la tarjeta actual
    const currentCard = button.closest('.card-item');
    const currentDetails = currentCard.querySelector('.card-details');
    
    if (!currentDetails) {
        console.error('No se encontró card-details');
        return;
    }
    
    // Verificar si ya está abierta
    const isAlreadyOpen = currentDetails.classList.contains('active');
    
    if (isAlreadyOpen) {
        // Si está abierta, cerrarla
        currentDetails.classList.remove('active');
        button.classList.remove('active');
        button.innerHTML = '<i class="fas fa-chevron-down"></i> Ver más detalles';
        console.log('Tarjeta cerrada');
    } else {
        // Si está cerrada, cerrar TODAS primero luego abrir esta
        document.querySelectorAll('.card-item').forEach(card => {
            const details = card.querySelector('.card-details');
            const btn = card.querySelector('.btn-expand');
            
            if (details) {
                details.classList.remove('active');
            }
            if (btn) {
                btn.classList.remove('active');
                btn.innerHTML = '<i class="fas fa-chevron-down"></i> Ver más detalles';
            }
        });
        
        // Ahora abrir esta tarjeta
        currentDetails.classList.add('active');
        button.classList.add('active');
        button.innerHTML = '<i class="fas fa-chevron-down"></i> Ver menos detalles';
        console.log('Tarjeta abierta');
    }
}

// ==========================================
// NAVIGATION
// ==========================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// CARD APPLICATION
// ==========================================

function applyCard(cardType) {
    console.log(`Applying for ${cardType} card`);
    
    // Scroll to contact form
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
        const navbarHeight = navbar.offsetHeight || 70;
        const targetPosition = contactSection.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Pre-select the card in the form
        setTimeout(() => {
            const select = document.querySelector('.contact-form select');
            if (select) {
                select.value = cardType;
                select.style.borderColor = '#D4AF37';
                select.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.3)';
                select.focus();
                
                setTimeout(() => {
                    select.style.borderColor = '';
                    select.style.boxShadow = '';
                }, 2000);
            }
        }, 800);
    }
}

// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Show success message (you can customize this)
        alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
        
        // Reset form
        contactForm.reset();
    });
}

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animations
document.querySelectorAll('.card-item, .benefit-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ==========================================
// CARD HOVER EFFECTS
// ==========================================

document.querySelectorAll('.card-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==========================================
// INITIALIZE ON LOAD
// ==========================================

window.addEventListener('load', () => {
    // Add loaded class to body for any CSS transitions
    document.body.classList.add('loaded');
    
    console.log('Aurum Bank website loaded successfully');
});
