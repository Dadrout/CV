// Language and Theme Toggle Functionality
class SiteController {
  constructor() {
    this.currentLanguage = 'en';
    this.currentTheme = this.getPreferredTheme();
    this.init();
  }

  // Language Management
  setupLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
      languageToggle.addEventListener('click', () => {
        this.toggleLanguage();
      });
    }
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ru' : 'en';
    this.applyLanguage();
    this.updateLanguageToggle();
  }

  applyLanguage() {
    const elements = document.querySelectorAll('[data-en], [data-ru]');
    elements.forEach(element => {
      const text = element.getAttribute(`data-${this.currentLanguage}`);
      if (text) {
        element.textContent = text;
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLanguage;
  }

  updateLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
      if (this.currentLanguage === 'ru') {
        languageToggle.classList.add('active');
      } else {
        languageToggle.classList.remove('active');
      }
    }
  }

  // Theme Management
  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
  }

  getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.saveTheme();
  }

  applyTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      if (this.currentTheme === 'dark') {
        themeToggle.classList.add('dark');
        document.documentElement.classList.add('dark');
      } else {
        themeToggle.classList.remove('dark');
        document.documentElement.classList.remove('dark');
      }
    }
  }

  saveTheme() {
    localStorage.setItem('theme', this.currentTheme);
  }

  // Smooth Scrolling for Navigation Links
  setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Navbar Background on Scroll
  setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.style.background = 'rgba(255, 255, 255, 0.98)';
          if (this.currentTheme === 'dark') {
            navbar.style.background = 'rgba(14, 17, 22, 0.98)';
          }
        } else {
          navbar.style.background = 'rgba(255, 255, 255, 0.95)';
          if (this.currentTheme === 'dark') {
            navbar.style.background = 'rgba(14, 17, 22, 0.95)';
          }
        }
      });
    }
  }

  // Intersection Observer for Animations
  setupAnimations() {
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

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.section, .project-card, .award-card, .contact-card');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // Initialize all functionality
  init() {
    this.setupLanguageToggle();
    this.setupThemeToggle();
    this.setupSmoothScrolling();
    this.setupNavbarScroll();
    this.setupAnimations();
    this.applyTheme();
    this.applyLanguage();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new SiteController();
});

// Handle theme changes from system preferences
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const controller = new SiteController();
  if (!localStorage.getItem('theme')) {
    controller.currentTheme = e.matches ? 'dark' : 'light';
    controller.applyTheme();
  }
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-title .gradient-text');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 150);
  }
});

// Parallax effect for floating cards
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.floating-card');
  const scrolled = window.pageYOffset;
  
  cards.forEach((card, index) => {
    const speed = 0.5 + (index * 0.1);
    const yPos = -(scrolled * speed);
    card.style.transform = `translateY(${yPos}px)`;
  });
});

// Add hover effects to skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px) scale(1.05)';
  });
  
  tag.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add click to copy email functionality
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
  emailLink.addEventListener('click', (e) => {
    const email = emailLink.href.replace('mailto:', '');
    navigator.clipboard.writeText(email).then(() => {
      // Show a temporary tooltip
      const tooltip = document.createElement('div');
      tooltip.textContent = 'Email copied!';
      tooltip.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
      `;
      document.body.appendChild(tooltip);
      
      setTimeout(() => {
        tooltip.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => tooltip.remove(), 300);
      }, 2000);
    });
  });
}

// Add CSS for tooltip animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(135deg, var(--gradient-1), var(--gradient-2));
  z-index: 1001;
  transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = scrolled + '%';
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close any open modals or return to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Add touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartY - touchEndY;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe up - could trigger theme toggle
      const themeToggle = document.getElementById('theme-toggle');
      if (themeToggle) {
        themeToggle.click();
      }
    }
  }
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
  // Scroll-based animations and effects
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler); 