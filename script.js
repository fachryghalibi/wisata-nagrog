document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    function toggleMenu() {
        const navMenu = document.querySelector('.nav-menu');
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuOverlay = document.querySelector('.menu-overlay');
        const isActive = navMenu.classList.toggle('active');
        
        // Toggle ARIA attribute
        mobileMenu.setAttribute('aria-expanded', isActive);
        
        // Toggle ikon hamburger/tutup
        mobileMenu.innerHTML = isActive ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        
        // Toggle overlay
        menuOverlay.classList.toggle('active');
        
        // Nonaktifkan scroll saat menu terbuka
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    // Tambahkan event listener untuk tombol mobile menu
    document.querySelector('.mobile-menu').addEventListener('click', toggleMenu);

    // Tutup menu saat overlay diklik
    document.querySelector('.menu-overlay').addEventListener('click', toggleMenu);

    // Tutup menu saat link diklik
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Smooth scrolling untuk navigation links
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

    // Header background change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(44, 85, 48, 0.95)';
        } else {
            header.style.background = 'linear-gradient(135deg, #2c5530, #4a7c59)';
        }
    });

    // Intersection Observer untuk animasi saat scroll
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

    // Observe service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Tujuan Program JavaScript
    // Intersection Observer untuk animasi saat scroll
    const tujuanObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Fungsi untuk animasi header
    function animateHeader() {
        const header = document.querySelector('.tujuan-header');
        if (header) {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }
    }

    // Fungsi untuk animasi kartu dengan delay
    function animateCards() {
        const cards = document.querySelectorAll('.tujuan-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }, index * 200);
        });
    }

    // Fungsi untuk animasi highlight section
    function animateHighlight() {
        const highlight = document.querySelector('.tujuan-highlight');
        if (highlight) {
            setTimeout(() => {
                highlight.style.opacity = '1';
                highlight.style.transform = 'translateY(0)';
                highlight.style.transition = 'all 0.8s ease';
            }, 300);
        }
    }

    // Observer untuk section tujuan program
    const tujuanSection = document.querySelector('.tujuan-program');
    if (tujuanSection) {
        tujuanObserver.observe(tujuanSection);
        
        // Event listener untuk animasi ketika section terlihat
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateHeader();
                    setTimeout(animateCards, 300);
                    setTimeout(animateHighlight, 1000);
                }
            });
        }, { threshold: 0.2 });
        
        sectionObserver.observe(tujuanSection);
    }

    // Hover effects untuk kartu
    const tujuanCards = document.querySelectorAll('.tujuan-card');
    tujuanCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
            
            const icon = this.querySelector('.tujuan-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.boxShadow = '0 15px 40px rgba(74, 124, 89, 0.4)';
            }
            
            const title = this.querySelector('h3');
            if (title) {
                title.style.color = '#4a7c59';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
            
            const icon = this.querySelector('.tujuan-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.boxShadow = '0 10px 30px rgba(74, 124, 89, 0.3)';
            }
            
            const title = this.querySelector('h3');
            if (title) {
                title.style.color = '#2c5530';
            }
        });
        
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.position = 'absolute';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(74, 124, 89, 0.3)';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // JavaScript untuk Section Desa Nagrog
    // Intersection Observer untuk animasi saat scroll
    const nagrogObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const nagrogObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, nagrogObserverOptions);

    // Fungsi untuk animasi header
    function animateNagrogHeader() {
        const header = document.querySelector('.desa-nagrog-header');
        if (header) {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
            header.style.transition = 'all 0.8s ease';
        }
    }

    // Fungsi untuk animasi info cards
    function animateInfoCards() {
        const cards = document.querySelectorAll('.info-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateX(0)';
                card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }, index * 200);
        });
    }

    // Fungsi untuk animasi destinations section
    function animateDestinations() {
        const destinations = document.querySelector('.desa-nagrog-destinations');
        if (destinations) {
            setTimeout(() => {
                destinations.style.opacity = '1';
                destinations.style.transform = 'translateX(0)';
                destinations.style.transition = 'all 0.8s ease';
            }, 400);
        }
    }

    // Fungsi untuk animasi highlight section
    function animateNagrogHighlight() {
        const highlight = document.querySelector('.desa-nagrog-highlight');
        if (highlight) {
            setTimeout(() => {
                highlight.style.opacity = '1';
                highlight.style.transform = 'translateY(0)';
                highlight.style.transition = 'all 0.8s ease';
            }, 600);
        }
    }

    // Observer untuk section desa nagrog
    const nagrogSection = document.querySelector('.desa-nagrog');
    if (nagrogSection) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNagrogHeader();
                    setTimeout(animateInfoCards, 200);
                    setTimeout(animateDestinations, 400);
                    setTimeout(animateNagrogHighlight, 800);
                }
            });
        }, { threshold: 0.1 });
        
        sectionObserver.observe(nagrogSection);
    }

    // Hover effects untuk info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(0) translateY(-10px)';
            this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.12)';
            
            const icon = this.querySelector('.info-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) translateY(0)';
            this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
            
            const icon = this.querySelector('.info-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Hover effects untuk destination items
    const destinationItems = document.querySelectorAll('.destination-item');
    destinationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #4a7c59, #2c5530)';
            this.style.color = 'white';
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(74, 124, 89, 0.3)';
            
            const icon = this.querySelector('.destination-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #f8f9fa, #e9ecef)';
            this.style.color = '';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
            
            const icon = this.querySelector('.destination-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Loading animation untuk kartu saat halaman dimuat
    function loadingAnimation() {
        const cards = document.querySelectorAll('.tujuan-card, .info-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Trigger loading animation saat halaman dimuat
    setTimeout(loadingAnimation, 500);
});