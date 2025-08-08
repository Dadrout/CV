# 🚀 Deployment Instructions

This guide will help you deploy your resume website to GitHub Pages and other platforms.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Basic knowledge of Git commands

## 🎯 GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `CV` (or your preferred name)
5. Make it **Public** (required for GitHub Pages)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### Step 2: Upload Your Code

```bash
# Navigate to your project directory
cd /path/to/vercel-resume-site

# Initialize Git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Modern resume website"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/CV.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch (will be created by GitHub Actions)
6. Click "Save"

### Step 4: Configure GitHub Actions

The `.github/workflows/deploy.yml` file is already configured. GitHub Actions will automatically:

1. Build your site when you push to main branch
2. Deploy to GitHub Pages
3. Update the site automatically

## 🌐 Vercel Deployment (Alternative)

### Step 1: Connect to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a static site

### Step 2: Configure Settings

- **Framework Preset**: Other
- **Build Command**: Leave empty (static site)
- **Output Directory**: Leave empty (root directory)
- **Install Command**: Leave empty

### Step 3: Deploy

1. Click "Deploy"
2. Vercel will build and deploy your site
3. You'll get a URL like `https://your-project.vercel.app`

## 🔧 Custom Domain (Optional)

### GitHub Pages

1. In repository Settings → Pages
2. Add your custom domain
3. Update DNS records with your domain provider
4. Enable HTTPS

### Vercel

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records

## 📊 Analytics Setup

### Google Analytics

1. Create Google Analytics account
2. Get your tracking ID (GA_MEASUREMENT_ID)
3. Add to your HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics

1. In Vercel dashboard, go to your project
2. Click "Analytics" tab
3. Enable analytics for your project

## 🔄 Updating Your Site

### Method 1: Direct Push

```bash
# Make your changes
# Then commit and push
git add .
git commit -m "Update: [describe your changes]"
git push origin main
```

### Method 2: GitHub Web Editor

1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click the pencil icon to edit
4. Make your changes
5. Commit directly from GitHub

## 🐛 Troubleshooting

### Common Issues

1. **Site not updating**: Check GitHub Actions tab for build status
2. **Styling issues**: Clear browser cache or check CSS file paths
3. **Images not loading**: Verify file paths and case sensitivity
4. **Domain not working**: Check DNS settings and wait for propagation

### Debug Steps

1. Check GitHub Actions logs
2. Verify file structure matches repository
3. Test locally with `python -m http.server 8000`
4. Check browser console for errors

## 📈 Performance Optimization

### Before Deployment

1. **Optimize Images**: Use WebP format when possible
2. **Minify CSS/JS**: Consider using build tools
3. **Enable Compression**: Configure server settings
4. **Cache Headers**: Already configured in vercel.json

### Monitoring

1. **PageSpeed Insights**: Test your site
2. **Lighthouse**: Run performance audits
3. **WebPageTest**: Detailed performance analysis

## 🔒 Security

### Security Headers

Already configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

### Additional Security

1. **HTTPS**: Automatically enabled on Vercel/GitHub Pages
2. **CSP**: Consider adding Content Security Policy
3. **HSTS**: Enable HTTP Strict Transport Security

## 📱 Mobile Testing

### Test Checklist

- [ ] Responsive design on all screen sizes
- [ ] Touch interactions work properly
- [ ] Loading speed on mobile networks
- [ ] Font sizes are readable
- [ ] Buttons are touch-friendly

## 🎨 Customization

### Branding

1. Update colors in `styles.css` (CSS variables)
2. Change fonts in Google Fonts link
3. Update favicon and meta images
4. Modify content in `index.html`

### Features

1. Add new sections in HTML
2. Create new CSS classes
3. Add JavaScript functionality
4. Update navigation links

## 📞 Support

If you encounter issues:

1. Check GitHub Issues for similar problems
2. Review deployment logs
3. Test locally first
4. Ask for help in relevant communities

---

**Happy Deploying! 🚀**

Your modern resume website is now ready to impress potential employers and collaborators. 