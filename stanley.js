document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE NAVIGATION TOGGLE
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Close menu when a link is clicked (mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // 2. STICKY HEADER EFFECT
    // Adds a shadow and reduces padding when the user scrolls down
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 1px 6px rgba(0,0,0,0.08)';
        }
    });

    // 3. REVEAL ON SCROLL ANIMATION
    // Elements will fade in and slide up as you scroll down the page
    const revealElements = document.querySelectorAll('.card, .testimonial, .about-grid, .section-title');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'all 0.6s ease-out';
            }
        });
    };

    // Set initial state for reveal animation
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // 4. SMOOTH SCROLLING FOR ALL ANCHOR LINKS
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

    // 5. DYNAMIC YEAR FOR FOOTER
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 6. PROJECT CARD HOVER INTERACTION
    // Adds a subtle scale effect via JS for smoother control if CSS isn't enough
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--primary)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'transparent';
        });
    });
});
