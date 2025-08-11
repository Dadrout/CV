// Enhanced Site Controller with robust i18n and performance optimizations
class SiteController {
  constructor() {
    this.currentLanguage = this.getPreferredLanguage();
    this.currentTheme = this.getPreferredTheme();
    this.translations = {};
    this.init();
  }

  // Language Management
  async loadTranslations() {
    try {
      const [enResponse, ruResponse] = await Promise.all([
        fetch('i18n/en.json'),
        fetch('i18n/ru.json')
      ]);
      
      this.translations.en = await enResponse.json();
      this.translations.ru = await ruResponse.json();
    } catch (error) {
      console.warn('Failed to load translations:', error);
      // Fallback to inline translations if JSON files fail
      this.setupFallbackTranslations();
    }
  }

  setupFallbackTranslations() {
    // Fallback translations in case JSON files are not available
    this.translations = {
      en: {
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.projects": "Projects", 
        "nav.contact": "Contact",
        "hero.subtitle": "AI Developer & Founder of WizeTale",
        "hero.description": "Building the future of education through AI-powered storytelling. Transforming complex subjects into engaging video experiences.",
        "hero.stats.years": "Years Experience",
        "hero.stats.projects": "Projects Built",
        "hero.stats.awards": "Awards Won",
        "hero.actions.resume": "📄 Download Resume (PDF)",
        "hero.actions.contact": "Get in Touch",
        "hero.card.wizetale": "AI-powered educational platform",
        "hero.card.fastapi": "Modern backend development",
        "hero.card.ai": "GPT-4, ElevenLabs, Runway",
        "section.about": "About Me",
        "about.text1": "I'm a passionate student developer and founder building innovative solutions at the intersection of AI and education. My journey started with web development and evolved into creating AI-powered platforms that make learning more engaging and accessible.",
        "about.text2": "Currently leading WizeTale — an AI storytelling platform that transforms complex humanities subjects into short, engaging video stories. We're part of the nFactorial Incubator 2025 and have already launched our public demo.",
        "about.highlight.student": "High School Student at Gymnasium No. 1",
        "about.highlight.award": "Runner-Up at nFactorial Incubator Hackathon",
        "about.highlight.focus": "Building AI-powered educational tools",
        "about.skills": "Technical Skills",
        "about.skills.programming": "Programming",
        "about.skills.backend": "Backend & DevOps",
        "about.skills.ai": "AI & Media",
        "about.skills.tools": "Tools & Platforms",
        "section.experience": "Experience & Education",
        "experience.founder.title": "Founder & Lead Developer",
        "experience.founder.description": "Leading development of AI-powered educational platform that converts complex subjects into engaging video stories. Managing full-stack development, AI integration, and product strategy.",
        "experience.backend.title": "Backend Developer",
        "experience.backend.description": "Developed robust backend with JWT authentication, S3 file uploads, Redis caching, Celery tasks, and WebSocket notifications.",
        "experience.student.title": "Student",
        "experience.student.school": "Gymnasium No. 1 named after A. Bokeykhanov",
        "experience.student.description": "High school student with focus on technology and entrepreneurship. Active participant in coding competitions and hackathons.",
        "experience.present": "Present",
        "section.projects": "Featured Projects",
        "project.wizetale.description": "Transforms complex humanities topics into short AI-generated video stories.",
        "project.wizetale.features.ai": "AI Content Generation",
        "project.wizetale.features.video": "Video Production",
        "project.wizetale.features.education": "Educational Focus",
        "project.timecapsule.description": "Robust backend service with authentication, file management, caching, and real-time notifications. Full Docker deployment with CI/CD pipeline.",
        "project.timecapsule.features.auth": "JWT Auth",
        "project.timecapsule.features.files": "File Uploads",
        "project.timecapsule.features.websockets": "WebSockets",
        "section.awards": "Awards & Achievements",
        "award.runnerup": "Runner-Up",
        "award.finalist": "Finalist",
        "award.participant": "Participant",
        "section.contact": "Get In Touch",
        "contact.intro": "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and AI.",
        "contact.linkedin": "Connect professionally",
        "contact.github": "View my projects",
        "contact.website": "Check out WizeTale",
        "footer.built": "Built with ❤️ for the web."
      },
      ru: {
        "nav.about": "Обо мне",
        "nav.experience": "Опыт",
        "nav.projects": "Проекты",
        "nav.contact": "Контакты",
        "hero.subtitle": "AI Разработчик и Основатель WizeTale",
        "hero.description": "Создаю будущее образования через AI-повествование. Превращаю сложные предметы в увлекательные видео-опыты.",
        "hero.stats.years": "Лет Опыта",
        "hero.stats.projects": "Построенных Проектов",
        "hero.stats.awards": "Полученных Наград",
        "hero.actions.resume": "📄 Скачать Резюме (PDF)",
        "hero.actions.contact": "Связаться",
        "hero.card.wizetale": "AI-образовательная платформа",
        "hero.card.fastapi": "Современная backend разработка",
        "hero.card.ai": "GPT-4, ElevenLabs, Runway",
        "section.about": "Обо мне",
        "about.text1": "Я страстный студент-разработчик и основатель, создающий инновационные решения на пересечении AI и образования. Мой путь начался с веб-разработки и эволюционировал в создание AI-платформ, которые делают обучение более увлекательным и доступным.",
        "about.text2": "В настоящее время руковожу WizeTale — платформой AI-повествования, которая превращает сложные гуманитарные предметы в короткие, увлекательные видео-истории. Мы являемся частью nFactorial Incubator 2025 и уже запустили нашу публичную демо-версию.",
        "about.highlight.student": "Старшеклассник в Гимназии №1",
        "about.highlight.award": "Второе место на nFactorial Incubator Hackathon",
        "about.highlight.focus": "Создание AI-образовательных инструментов",
        "about.skills": "Технические Навыки",
        "about.skills.programming": "Программирование",
        "about.skills.backend": "Backend и DevOps",
        "about.skills.ai": "AI и Медиа",
        "about.skills.tools": "Инструменты и Платформы",
        "section.experience": "Опыт и Образование",
        "experience.founder.title": "Основатель и Ведущий Разработчик",
        "experience.founder.description": "Руковожу разработкой AI-образовательной платформы, которая превращает сложные предметы в увлекательные видео-истории. Управляю full-stack разработкой, интеграцией AI и продуктовой стратегией.",
        "experience.backend.title": "Backend Разработчик",
        "experience.backend.description": "Разработал надежный backend с JWT аутентификацией, загрузкой файлов в S3, кэшированием Redis, задачами Celery и WebSocket уведомлениями.",
        "experience.student.title": "Студент",
        "experience.student.school": "Гимназия №1 имени А. Бокейханова",
        "experience.student.description": "Старшеклассник с фокусом на технологии и предпринимательство. Активный участник соревнований по программированию и хакатонов.",
        "experience.present": "Настоящее время",
        "section.projects": "Избранные Проекты",
        "project.wizetale.description": "Превращает сложные гуманитарные темы в короткие AI-генерируемые видео-истории.",
        "project.wizetale.features.ai": "AI Генерация Контента",
        "project.wizetale.features.video": "Видео Производство",
        "project.wizetale.features.education": "Образовательный Фокус",
        "project.timecapsule.description": "Надежный backend сервис с аутентификацией, управлением файлами, кэшированием и уведомлениями в реальном времени. Полное Docker развертывание с CI/CD пайплайном.",
        "project.timecapsule.features.auth": "JWT Аутентификация",
        "project.timecapsule.features.files": "Загрузка Файлов",
        "project.timecapsule.features.websockets": "WebSockets",
        "section.awards": "Награды и Достижения",
        "award.runnerup": "Второе место",
        "award.finalist": "Финалист",
        "award.participant": "Участник",
        "section.contact": "Связаться",
        "contact.intro": "Я всегда открыт для обсуждения новых возможностей, сотрудничества или просто разговора о технологиях и AI.",
        "contact.linkedin": "Профессиональная связь",
        "contact.github": "Посмотреть мои проекты",
        "contact.website": "Посмотреть WizeTale",
        "footer.built": "Создано с ❤️ для веба."
      }
    };
  }

  getPreferredLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'en' || savedLang === 'ru')) {
      return savedLang;
    }
    
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('ru') ? 'ru' : 'en';
  }

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
    this.saveLanguage();
  }

  applyLanguage() {
    // Update HTML lang attribute first
    document.documentElement.lang = this.currentLanguage;
    
    // Apply translations to all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translations[this.currentLanguage]?.[key];
      if (translation) {
        element.textContent = translation;
      }
    });

    // Handle name translation
    const nameElements = document.querySelectorAll('.hero-title');
    nameElements.forEach(element => {
      const translation = this.translations[this.currentLanguage]?.['name.full'];
      if (translation && this.currentLanguage === 'ru') {
        element.textContent = translation;
      } else {
        element.textContent = 'Dias Junussov';
      }
    });
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

  saveLanguage() {
    localStorage.setItem('language', this.currentLanguage);
  }

  // Theme Management
  getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.saveTheme();
  }

  applyTheme() {
    const isDark = this.currentTheme === 'dark';
    const isLight = this.currentTheme === 'light';
    
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', isLight);
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', isLight);
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.classList.toggle('dark', isDark);
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
      const handleScroll = () => {
        this.updateNavbarBackground();
      };
      
      window.addEventListener('scroll', this.throttle(handleScroll, 16));
      handleScroll(); // Initial call
    }
  }
  
  updateNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
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

  // Accessibility: Skip to content
  setupSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // Email copy functionality
  setupEmailCopy() {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
      emailLink.addEventListener('click', (e) => {
        const email = emailLink.href.replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
          this.showNotification('Email copied to clipboard!', 'success');
        }).catch(() => {
          // Fallback for older browsers
          this.showNotification('Email: ' + email, 'info');
        });
      });
    }
  }

  // Notification system
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = document.createElement('span');
    icon.innerHTML = type === 'success' ? '✓' : 'ℹ';
    icon.style.marginRight = '8px';
    
    const text = document.createElement('span');
    text.textContent = message;
    
    notification.appendChild(icon);
    notification.appendChild(text);
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#10b981' : '#3b82f6'};
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: 500;
      z-index: 10000;
      display: flex;
      align-items: center;
      gap: 8px;
      transform: translateX(120%);
      transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(notification);
    
    // Trigger reflow to ensure animation works
    notification.offsetHeight;
    notification.style.transform = 'translateX(0)';
    
    setTimeout(() => {
      notification.style.transform = 'translateX(120%)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Performance: Throttle function
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  // Setup scroll progress indicator
  setupScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', this.throttle(() => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }, 10));
  }

  // Initialize all functionality
  async init() {
    // Set initial language and theme before loading translations
    document.documentElement.lang = this.currentLanguage;
    this.applyTheme();
    this.updateLanguageToggle();
    
    // Load translations
    await this.loadTranslations();
    
    // Apply language after translations are loaded
    this.applyLanguage();
    
    // Setup all functionality
    this.setupLanguageToggle();
    this.setupThemeToggle();
    this.setupSmoothScrolling();
    this.setupNavbarScroll();
    this.setupAnimations();
    this.setupSkipLink();
    this.setupEmailCopy();
    this.setupScrollProgress();
    
    // Add CSS animations
    this.addAnimationStyles();
  }

  addAnimationStyles() {
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
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--accent);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
        transition: top 0.3s;
      }
      
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new SiteController();
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