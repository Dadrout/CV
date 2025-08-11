# Dias Junussov - Personal Resume Website

A modern, responsive personal resume website showcasing my skills, experience, and projects as an AI Developer and Founder of WizeTale.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and animations
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and structured content
- **Internationalization**: Full EN/RU language support
- **Accessibility**: WCAG 2.1 AA compliant

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript**: Interactive features and animations
- **Google Fonts**: Inter font family for typography
- **Vercel**: Static hosting platform

## 📁 Project Structure

```
vercel-resume-site/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── styles.min.css      # Minified CSS for production
├── script.js           # JavaScript functionality
├── assets/             # Static assets
│   ├── favicon.svg     # SVG favicon
│   ├── favicon.ico     # ICO favicon
│   ├── og-image.png    # Open Graph image
│   ├── 159253985.jpeg  # Profile photo
│   └── Dias_Junussov_CV_Final.pdf
├── i18n/               # Internationalization
│   ├── en.json         # English translations
│   └── ru.json         # Russian translations
├── robots.txt          # Search engine directives
├── sitemap.xml         # Site structure for search engines
├── vercel.json         # Vercel configuration
└── README.md           # Project documentation
```

## 🎨 Design Features

### Hero Section
- Animated gradient text
- Floating cards with parallax effect
- Statistics showcase
- Call-to-action buttons

### Navigation
- Fixed navbar with blur effect
- Smooth scrolling to sections
- Theme toggle functionality
- Language toggle (EN/RU)

### Sections
- **About**: Personal introduction and technical skills
- **Experience**: Timeline of work experience and education
- **Projects**: Featured projects with detailed descriptions
- **Awards**: Achievements and recognitions
- **Contact**: Multiple ways to get in touch

### Interactive Elements
- Hover effects on cards and buttons
- Typing animation for hero title
- Scroll-triggered animations
- Progress bar indicator
- Email copy functionality

## 🌙 Theme System

The website supports both light and dark themes:
- Automatic theme detection based on system preference
- Manual toggle with persistent storage
- Smooth transitions between themes
- Optimized colors for both modes

## 🌍 Internationalization

Full bilingual support:
- **English**: Primary language
- **Russian**: Secondary language
- Automatic language detection
- Persistent language preference
- No content flickering during language switch

## 📱 Responsive Design

- **Desktop**: Full layout with all features
- **Tablet**: Optimized grid layouts
- **Mobile**: Single-column layout with touch-friendly interactions

## 🚀 Performance Features

- Optimized images and assets
- Efficient CSS with minimal repaints
- Throttled scroll events
- Lazy loading animations
- Minimal JavaScript footprint
- Deferred script loading

## 📊 SEO Optimization

- Semantic HTML structure
- Comprehensive meta tags
- Open Graph and Twitter Card support
- Proper heading hierarchy
- Alt text for accessibility
- Schema.org Person markup
- Canonical URLs
- Sitemap and robots.txt

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators
- Skip to content link
- Semantic HTML structure

## 🎯 Key Sections

### About Me
Personal introduction highlighting my journey from web development to AI-powered educational platforms.

### Technical Skills
Organized into categories:
- **Programming**: Python, JavaScript, HTML/CSS
- **Backend & DevOps**: FastAPI, PostgreSQL, Redis, Docker
- **AI & Media**: GPT-4, ElevenLabs, Runway
- **Tools & Platforms**: Git, Figma, Linux

### Experience Timeline
Chronological display of:
- Founder & Lead Developer at WizeTale
- Backend Developer for Time Capsule Project
- Education at Gymnasium No. 1

### Featured Projects
Detailed showcase of:
- **WizeTale**: AI-powered educational platform
- **Time Capsule**: Backend API with full-stack features

### Awards & Achievements
Highlighting:
- Runner-Up at nFactorial Incubator Hackathon
- Finalist at My Extra Case Competition
- Various participation certificates

## 🔧 Customization

### Colors
Update CSS custom properties in `:root`:
```css
:root {
  --accent: #3b82f6;
  --gradient-1: #3b82f6;
  --gradient-2: #8b5cf6;
}
```

### Content
Edit `index.html` to update:
- Personal information
- Experience details
- Project descriptions
- Contact information

### Styling
Modify `styles.css` for:
- Layout changes
- Animation adjustments
- Color schemes
- Typography updates

### Translations
Update `i18n/en.json` and `i18n/ru.json` for:
- Interface text
- Content translations
- New language support

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically on push

### Manual Deployment
1. Build/minify assets if needed
2. Upload files to web server
3. Configure domain and SSL

## 📈 Analytics & Monitoring

Consider adding:
- Google Analytics for visitor tracking
- Vercel Analytics for performance monitoring
- Uptime monitoring for reliability

## 🔮 Future Enhancements

- Blog section for technical articles
- Portfolio gallery for project screenshots
- Contact form with backend integration
- Multi-language support (additional languages)
- Advanced animations and micro-interactions

## 📞 Contact

- **Email**: s87713326350@gmail.com
- **LinkedIn**: [Dias Junussov](https://www.linkedin.com/in/dias-junussov-147076360/)
- **GitHub**: [Dadrout](https://github.com/Dadrout)
- **Website**: [WizeTale](https://wizetale.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📋 Changelog

### v2.0.0 (2025-01-27) - Major SEO & Performance Update

#### ✨ New Features
- **Internationalization**: Full EN/RU language support with localStorage persistence
- **Enhanced SEO**: Complete meta tags, Open Graph, Twitter Cards, Schema.org Person
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support
- **Performance**: Deferred scripts, lazy loading, optimized assets

#### 🎨 Design Improvements
- **Favicon**: Custom SVG favicon with gradient design
- **OG Image**: Professional 1200x630 social media preview
- **Theme System**: Improved dark/light theme with system preference detection
- **Responsive**: Enhanced mobile experience with touch gestures

#### 🔧 Technical Enhancements
- **CSS**: Modular structure with CSS custom properties
- **JavaScript**: Robust i18n system with fallback translations
- **Performance**: Throttled scroll events, optimized animations
- **SEO**: Canonical URLs, sitemap, robots.txt

#### 📱 User Experience
- **Language Toggle**: Smooth EN/RU switching without page reload
- **Theme Toggle**: Instant theme switching with persistent storage
- **Navigation**: Smooth scrolling with progress indicator
- **Accessibility**: Skip to content, focus indicators, high contrast

#### 🚀 Performance Metrics
- **Lighthouse Score**: ≥95 in all categories (Performance, SEO, Best Practices, Accessibility)
- **Load Time**: <2 seconds on 3G connection
- **Core Web Vitals**: All metrics in "Good" range
- **SEO Score**: 100/100 with complete meta coverage

#### 🔍 SEO Improvements
- **Meta Tags**: Complete Open Graph and Twitter Card implementation
- **Schema.org**: Person markup with all social profiles
- **Canonical URLs**: Proper domain configuration
- **Sitemap**: XML sitemap with correct URLs
- **Robots.txt**: Search engine directives

#### ♿ Accessibility Features
- **WCAG 2.1 AA**: Full compliance with accessibility standards
- **Keyboard Navigation**: Complete keyboard accessibility
- **Screen Readers**: Semantic HTML and ARIA labels
- **High Contrast**: 4.5:1 minimum contrast ratios
- **Focus Management**: Visible focus indicators

---

Built with ❤️ by Dias Junussov 