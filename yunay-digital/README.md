# Yunay Digital Services Private Limited - Official Website

A professional software development company website built with Next.js 14, React, and Tailwind CSS. Optimized for search engines and featuring comprehensive service offerings including web development, mobile development, UI/UX design, cloud solutions, and digital marketing.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, React 18, TypeScript, Tailwind CSS
- **SEO Optimized**: Comprehensive metadata, structured data, sitemap, robots.txt
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Performance**: Optimized for Core Web Vitals and fast loading
- **Service Pages**: Dedicated pages for all services with consistent design
- **Cloud Solutions**: Complete cloud services offering (AWS, Azure, Google Cloud)

## 🏗️ Architecture

```
src/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with global SEO
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap generation
│   ├── robots.ts          # SEO robots configuration
│   └── services/          # Service pages
│       ├── web-development/
│       ├── mobile-development/
│       ├── ui-ux-design/
│       ├── cloud-solutions/
│       └── digital-marketing/
├── components/            # Reusable React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ...
└── styles/
    └── globals.css        # Global styles and animations
```

## 🎨 Favicon & Branding

### Favicon Files

The website uses a custom favicon system based on the company logo:

- **`/favicon.svg`** - Main scalable favicon (64x64)
- **`/favicon-16x16.svg`** - Optimized for 16x16 display  
- **`/favicon-32x32.svg`** - Optimized for 32x32 display
- **`/apple-touch-icon.svg`** - iOS home screen icon (180x180)
- **`/site.webmanifest`** - PWA manifest file
- **`/browserconfig.xml`** - Windows tile configuration

### Favicon Features

✅ **SVG-based** - Scalable and crisp at any size
✅ **Brand Colors** - Uses the green-teal-cyan gradient theme
✅ **Network Design** - Reflects the tech/connectivity theme
✅ **Cross-platform** - Supports all major browsers and devices
✅ **PWA Ready** - Includes manifest for progressive web app

### Regenerating Favicons

If you need to update the favicon:

1. **Edit the base SVG**: Modify `/public/favicon.svg`
2. **Update sizes**: Adjust `/public/favicon-16x16.svg` and `/public/favicon-32x32.svg`
3. **Apple Touch Icon**: Update `/public/apple-touch-icon.svg`
4. **Optional ICO**: Generate `/public/favicon.ico` using online tools or ImageMagick:
   ```bash
   # Using ImageMagick (if installed)
   convert favicon.svg -resize 16x16 favicon-16.png
   convert favicon.svg -resize 32x32 favicon-32.png
   convert favicon-16.png favicon-32.png favicon.ico
   ```

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yunaydigital/yunay-digital-website.git
   cd yunay-digital-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 SEO Optimization

### Current SEO Features

✅ **Technical SEO**
- Next.js 14 App Router with automatic metadata optimization
- Structured data (JSON-LD) for all service pages
- Dynamic sitemap generation (`/sitemap.xml`)
- Optimized robots.txt (`/robots.txt`)
- Canonical URLs for all pages
- Open Graph and Twitter Card metadata

✅ **Content SEO**
- Keyword-optimized content for software development services
- Service-specific landing pages with targeted keywords
- Cloud solutions page with comprehensive cloud service keywords
- Professional service descriptions with industry terms

✅ **Performance SEO**
- Core Web Vitals optimization
- Image optimization with Next.js Image component
- Font optimization with Google Fonts
- Minified CSS and JavaScript
- Responsive design for mobile-first indexing

### Key SEO Keywords

**Primary Keywords:**
- Software development company
- Web development services
- Mobile app development
- Cloud solutions
- UI/UX design services
- Digital marketing

**Cloud-Specific Keywords:**
- AWS development
- Azure development
- Google Cloud services
- Cloud migration
- DevOps services
- Cloud infrastructure

**Long-tail Keywords:**
- Best software development company
- Custom software development
- Enterprise cloud solutions
- Professional web development services

### SEO Performance Checklist

- [ ] **Google Search Console** - Verify domain ownership
- [ ] **Cloudflare Analytics** - Built-in analytics via DNS management
- [ ] **Schema Markup** - Validate structured data
- [ ] **Page Speed** - Test Core Web Vitals
- [ ] **Mobile Friendly** - Test mobile optimization
- [ ] **SSL Certificate** - Ensure HTTPS implementation

## 🌐 Services Offered

### 1. Web Development (`/services/web-development`)
- React & Next.js applications
- Responsive web design
- E-commerce platforms
- Custom web solutions

### 2. Mobile Development (`/services/mobile-development`)
- iOS app development
- Android app development
- Cross-platform solutions (React Native, Flutter)
- App Store optimization

### 3. UI/UX Design (`/services/ui-ux-design`)
- User interface design
- User experience optimization
- Prototyping and wireframing
- Design systems

### 4. Cloud Solutions (`/services/cloud-solutions`) ⭐ **NEW**
- AWS development and migration
- Microsoft Azure services
- Google Cloud Platform
- DevOps and CI/CD
- Cloud infrastructure management
- 24/7 monitoring and support

### 5. Digital Marketing (`/services/digital-marketing`)
- SEO and SEM
- Social media marketing
- Content strategy
- Analytics and reporting

## 📊 Analytics & Tracking

The website uses Cloudflare's built-in analytics through DNS management, providing:

- **Cloudflare Analytics** - Privacy-focused, cookie-free analytics
- **Google Search Console** - Search performance and indexing
- **Core Web Vitals** - Performance monitoring via Cloudflare
- **Conversion Tracking** - Lead generation and contact forms

## 🚀 Deployment

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### Vercel Deployment (Recommended)

1. **Connect repository to Vercel**
2. **Configure environment variables**
3. **Deploy automatically on push**

### Custom Domain Setup

1. Configure DNS settings
2. Set up SSL certificate
3. Update metadata base URL in `layout.tsx`

## 🔍 SEO Monitoring

### Tools for SEO Tracking

1. **Google Search Console** - Monitor search performance
2. **Google PageSpeed Insights** - Check Core Web Vitals
3. **GTmetrix** - Performance analysis
4. **Ahrefs/SEMrush** - Keyword ranking tracking
5. **Schema Markup Validator** - Validate structured data

### Regular SEO Tasks

- [ ] Monitor keyword rankings
- [ ] Check for crawl errors
- [ ] Update content regularly
- [ ] Optimize page loading speeds
- [ ] Build quality backlinks
- [ ] Update structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Yunay Digital Services Private Limited**
- Website: [https://yunaydigital.com](https://yunaydigital.com)
- Email: info@yunaydigital.com
- Phone: +91 (XXX) XXX-XXXX

---

Built with ❤️ by [Yunay Digital Services Private Limited](https://yunaydigital.com)
