// Initialize Page
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initTypingEffect();
    initCursorGlow();
    initScrollEffects();
    initScrollProgress();
    initThemeToggle();
    initFormSubmission();
    console.log('✨ Math Care Centre Dashboard Initialized!');
});

// 1. PARTICLE ANIMATION
function initParticles() {
    const container = document.getElementById('particleContainer');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animation = `float ${duration}s linear ${delay}s infinite`;

        container.appendChild(particle);
    }
}

// 2. TYPING EFFECT
function initTypingEffect() {
    const typingElement = document.getElementById('typingText');
    const phrases = [
        'Master Mathematics with Expert Guidance',
        'Personalized Coaching for Every Level',
        'From Concepts to Competitions',
        'Your Path to Mathematical Excellence'
    ];

    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (!isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, letterIndex + 1);
            letterIndex++;

            if (letterIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
        } else {
            typingElement.textContent = currentPhrase.substring(0, letterIndex - 1);
            letterIndex--;

            if (letterIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
                return;
            }
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }

    type();
}

// 3. CURSOR GLOW EFFECT
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorGlow.style.left = mouseX - 10 + 'px';
        cursorGlow.style.top = mouseY - 10 + 'px';
        cursorGlow.style.display = 'block';
    });

    document.addEventListener('mouseleave', () => {
        cursorGlow.style.display = 'none';
    });
}

// 4. SCROLL PROGRESS BAR
function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// 5. THEME TOGGLE
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    let isDarkMode = true;

    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.style.backgroundColor = '#000';
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.style.backgroundColor = '#f0f0f0';
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    });
}

// 6. SCROLL REVEAL ANIMATIONS
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

    document.querySelectorAll('.glass-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = `all 0.8s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
}

// 7. TESTIMONIAL CAROUSEL
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextTestimonial() {
    const slides = document.querySelectorAll('.testimonial-slide');
    currentTestimonialIndex = (currentTestimonialIndex + 1) % slides.length;
    showTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
    const slides = document.querySelectorAll('.testimonial-slide');
    currentTestimonialIndex = (currentTestimonialIndex - 1 + slides.length) % slides.length;
    showTestimonial(currentTestimonialIndex);
}

// Auto-rotate testimonials
setInterval(nextTestimonial, 5000);

// 8. FORM SUBMISSION
function initFormSubmission() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you shortly.');
            form.reset();
        });
    }
}

// Console greeting
console.log('%c🎓 Welcome to Math Care Centre Dashboard!', 'font-size: 20px; color: #00d9ff; font-weight: bold; text-shadow: 0 0 10px #00d9ff;');
console.log('%c✨ Expert Mathematics Coaching | Personalized Guidance | Proven Results', 'font-size: 14px; color: #9d4edd;');
console.log('%c📧 Contact: rajesh@mathcarecentre.com | 📞 +91-9876543210', 'font-size: 12px; color: #22d3ee;');