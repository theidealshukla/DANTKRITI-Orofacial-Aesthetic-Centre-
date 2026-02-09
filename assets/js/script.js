// Navigation and Mobile Menu Logic

document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-2');
            navbar.classList.remove('bg-transparent', 'py-4');
        } else {
            navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-2');
            navbar.classList.add('bg-transparent', 'py-4');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        const isClosed = mobileMenu.classList.contains('translate-x-full');
        
        if (isClosed) {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Intersection Observer for Fade-in Animations on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate (e.g., section headers, cards)
    // Adding a specific class dynamically or selecting typical elements
    const animatedElements = document.querySelectorAll('section h2, section p, .bg-white.p-8, .group');
    
    animatedElements.forEach(el => {
        el.classList.add('opacity-0'); // Initially hide
        el.style.animationFillMode = 'forwards';
        observer.observe(el);
    });

    // Correction for the animation class conflict: 
    // The CSS defines .animate-fade-up with animation, but we need to ensure 
    // it triggers only when class is added. 
    // We already do that in the observer callback.
});
