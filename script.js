// Smooth scrolling for navigation links
// Smooth scrolling for navigation links
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

// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 85, 48, 0.95)';
    } else {
        header.style.background = 'linear-gradient(135deg, #2c5530, #4a7c59)';
    }
});

// Intersection Observer for animations
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

// Add moment/memory capture section
const momentText = "Moment merupakan suatu kejadian dalam sebuah waktu yang tidak akan terulang lagi, mari kita abadikan moment terbaik anda di desa wisata nagrog bersama kami.";

// Add interactive elements
document.addEventListener('DOMContentLoaded', function() {
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
});

// Tujuan Program JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer untuk animasi saat scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
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
        observer.observe(tujuanSection);
        
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
        
        // Mouse enter effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
            
            // Animasi icon
            const icon = this.querySelector('.tujuan-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.boxShadow = '0 15px 40px rgba(74, 124, 89, 0.4)';
            }
            
            // Animasi judul
            const title = this.querySelector('h3');
            if (title) {
                title.style.color = '#4a7c59';
            }
        });
        
        // Mouse leave effect
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
            
            // Reset icon
            const icon = this.querySelector('.tujuan-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.boxShadow = '0 10px 30px rgba(74, 124, 89, 0.3)';
            }
            
            // Reset judul
            const title = this.querySelector('h3');
            if (title) {
                title.style.color = '#2c5530';
            }
        });
        
        // Click effect dengan ripple
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

    // Fungsi untuk smooth scroll ke section
    function smoothScrollToTujuan() {
        const tujuanLink = document.querySelector('a[href="#tujuan"]');
        if (tujuanLink) {
            tujuanLink.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector('#tujuan');
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }

    // Counter animation untuk highlight section
    function animateCounter() {
        const highlight = document.querySelector('.tujuan-highlight');
        if (highlight) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Tambahkan efek typewriter untuk teks
                        const text = entry.target.querySelector('p');
                        if (text) {
                            const originalText = text.textContent;
                            text.textContent = '';
                            let i = 0;
                            
                            function typeWriter() {
                                if (i < originalText.length) {
                                    text.textContent += originalText.charAt(i);
                                    i++;
                                    setTimeout(typeWriter, 30);
                                }
                            }
                            
                            setTimeout(typeWriter, 500);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(highlight);
        }
    }

    // Inisialisasi fungsi (parallax effect dihapus)
    smoothScrollToTujuan();
    animateCounter();
    
    // Tambahkan CSS untuk ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
        
        .tujuan-card {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Loading animation untuk kartu
    function loadingAnimation() {
        const cards = document.querySelectorAll('.tujuan-card');
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

// Fungsi utility untuk performance optimization
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

// Optimasi scroll listener
const optimizedScrollHandler = debounce(() => {
    // Scroll handling code here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// JavaScript untuk Section Desa Nagrog
document.addEventListener('DOMContentLoaded', function() {
    
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
            
            // Animasi icon
            const icon = this.querySelector('.info-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) translateY(0)';
            this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
            
            // Reset icon
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
            
            // Animasi icon
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
            
            // Reset icon
            const icon = this.querySelector('.destination-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Animasi counter untuk statistik (jika ada)
    function animateStats() {
        const statsElements = document.querySelectorAll('[data-stat]');
        statsElements.forEach(stat => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = parseInt(entry.target.dataset.stat);
                        const element = entry.target;
                        let current = 0;
                        const increment = target / 100;
                        const timer = setInterval(() => {
                            current += increment;
                            element.textContent = Math.floor(current);
                            if (current >= target) {
                                element.textContent = target;
                                clearInterval(timer);
                            }
                        }, 20);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(stat);
        });
    }

    // Parallax effect untuk background
    function addParallaxEffect() {
        const nagrogSection = document.querySelector('.desa-nagrog');
        if (nagrogSection) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const sectionTop = nagrogSection.offsetTop;
                const sectionHeight = nagrogSection.offsetHeight;
                
                if (scrolled >= sectionTop - window.innerHeight && scrolled <= sectionTop + sectionHeight) {
                    const parallaxElements = nagrogSection.querySelectorAll('.desa-nagrog::before');
                    parallaxElements.forEach(element => {
                        const speed = 0.5;
                        const yPos = -(scrolled - sectionTop) * speed;
                        element.style.transform = `translateY(${yPos}px)`;
                    });
                }
            });
        }
    }

    // Typewriter effect untuk highlight text
    function typewriterEffect() {
        const highlight = document.querySelector('.desa-nagrog-highlight');
        if (highlight) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const text = entry.target.querySelector('p');
                        if (text) {
                            const originalText = text.textContent;
                            text.textContent = '';
                            let i = 0;
                            
                            function typeWriter() {
                                if (i < originalText.length) {
                                    text.textContent += originalText.charAt(i);
                                    i++;
                                    setTimeout(typeWriter, 30);
                                }
                            }
                            
                            setTimeout(typeWriter, 1000);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.7 });
            
            observer.observe(highlight);
        }
    }

    // Smooth scroll untuk navigation ke section nagrog
    function smoothScrollToNagrog() {
        const nagrogLink = document.querySelector('a[href="#desa-nagrog"]');
        if (nagrogLink) {
            nagrogLink.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector('#desa-nagrog');
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }

    // Click effect dengan ripple untuk cards
    function addRippleEffect() {
        const cards = document.querySelectorAll('.info-card, .destination-item');
        cards.forEach(card => {
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
    }

    // Intersection Observer untuk destinations grid
    function animateDestinationsGrid() {
        const destinationItems = document.querySelectorAll('.destination-item');
        destinationItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.style.opacity = '1';
                                entry.target.style.transform = 'translateY(0)';
                                entry.target.style.transition = 'all 0.5s ease';
                            }, index * 100);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                
                observer.observe(item);
            }, 1000);
        });
    }

    // Inisialisasi semua fungsi
    animateStats();
    addParallaxEffect();
    typewriterEffect();
    smoothScrollToNagrog();
    addRippleEffect();
    animateDestinationsGrid();
    
    // Loading animation untuk seluruh section
    function loadingAnimation() {
        const elements = document.querySelectorAll('.desa-nagrog .info-card, .desa-nagrog .desa-nagrog-destinations, .desa-nagrog .desa-nagrog-highlight');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    // Trigger loading animation setelah DOM loaded
    setTimeout(loadingAnimation, 100);
});

// Tambahkan CSS untuk ripple effect
const nagrogStyle = document.createElement('style');
nagrogStyle.textContent = `
    @keyframes ripple {
        0% {
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
    
    .info-card, .destination-item {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(nagrogStyle);