# Gyncentrum Website - Astro Version

A modern, high-performance redesign of the Gyncentrum ambulance website built with Astro. This version maintains the original pink color palette and content while leveraging Astro's static site generation for optimal performance.

## Why Astro?

Astro was chosen for this project because:

✅ **Zero JavaScript by Default** - Ships only HTML and CSS for faster page loads
✅ **Perfect for Content Sites** - Ideal for marketing and informational websites
✅ **100/100 Lighthouse Scores** - Optimized for performance out of the box
✅ **Component-Based** - Easy to maintain and update
✅ **SEO Friendly** - Static HTML is perfect for search engines
✅ **Island Architecture** - Add interactivity only where needed

## Features

### Performance Benefits
- **Static Site Generation (SSG)** - Pre-rendered HTML for instant loading
- **Minimal JavaScript** - Only interactive elements use JS
- **Optimized Assets** - Automatic CSS and HTML minification
- **Fast Navigation** - No framework overhead

### Modern Design Elements
- Clean, minimal layout with plenty of whitespace
- Smooth animations and transitions
- Card-based design for content sections
- Gradient backgrounds using the original pink color (#FF5EAA)
- Modern typography and icon usage (Font Awesome)
- Fully responsive design for all devices

### Interactive Features
- Sticky navigation with active link highlighting
- Mobile-responsive hamburger menu
- Smooth scroll to sections
- Scroll reveal animations for cards
- Animated statistics counter
- Interactive map integration

## Project Structure

```
web/
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Team.astro
│   │   ├── Services.astro
│   │   ├── Hours.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro    # Main layout wrapper
│   ├── pages/
│   │   └── index.astro     # Homepage (routes automatically)
│   └── styles/
│       └── global.css      # Global styles
├── public/                 # Static assets (images, fonts, etc.)
├── astro.config.mjs       # Astro configuration
├── package.json
└── tsconfig.json
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### 3. Build for Production

```bash
npm run build
```

This generates static files in the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build static site for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Customization

### Changing Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
    --primary-color: #FF5EAA;
    --primary-dark: #e54896;
    --primary-light: #ff7bb9;
    /* ... */
}
```

### Adding Real Images

1. Place images in the `public/` directory
2. Update image paths in components:

```astro
<!-- Before -->
<img src="https://via.placeholder.com/..." alt="..." />

<!-- After -->
<img src="/images/your-image.jpg" alt="..." />
```

### Updating Content

Content is stored directly in Astro components. Edit the respective `.astro` file in `src/components/` to update:

- **Header** - Navigation items
- **Hero** - Main headline and stats
- **About** - Clinic information
- **Team** - Staff members
- **Services** - Medical services offered
- **Hours** - Office hours
- **Contact** - Contact information
- **Footer** - Footer content

### Adding New Pages

Create a new file in `src/pages/`:

```astro
---
// src/pages/about.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="About Us">
  <h1>About Page</h1>
</Layout>
```

This automatically creates a route at `/about`.

## Deployment

Astro sites can be deployed to many platforms:

### Netlify
```bash
npm run build
# Deploy the dist/ folder
```

### Vercel
```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

### Traditional Hosting
Build the site and upload the `dist/` folder to your web server.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

Expected Lighthouse scores:
- **Performance:** 95-100
- **Accessibility:** 95-100
- **Best Practices:** 95-100
- **SEO:** 95-100

## Color Palette

```css
Primary Pink: #FF5EAA
Primary Dark: #e54896
Primary Light: #ff7bb9
Text Color: #1a1a1a
Text Light: #666666
Gray: #59585b
Background: #ffffff
Background Light: #f8f9fa
```

## Contact Information

- **Address:** Digital Park II, blok A, Einsteinova 25, 851 01 Bratislava
- **Phone:** 0948 838 986, 0905 838 986, 0918 605 896
- **Email:** ambulancia@gyncentrum.sk
- **Hours:** Monday-Friday, 7:00-17:00

## Technical Details

- **Framework:** Astro 4.x
- **Styling:** CSS3 with CSS Variables
- **Icons:** Font Awesome 6.0
- **Maps:** Google Maps Embed
- **Build Output:** Static HTML/CSS/JS

## Comparison: Vanilla vs Astro

| Feature | Vanilla HTML | Astro |
|---------|--------------|-------|
| Component reuse | ❌ Manual | ✅ Automatic |
| Build optimization | ❌ Manual | ✅ Automatic |
| Code organization | ⚠️ Basic | ✅ Advanced |
| Development speed | ⚠️ Slower | ✅ Faster |
| Maintenance | ⚠️ Harder | ✅ Easier |
| Performance | ✅ Good | ✅ Excellent |
| Bundle size | ✅ Small | ✅ Smaller |

## Notes

- All content is in Slovak language as per the original website
- Placeholder images are used - replace with actual clinic photos
- Font Awesome CDN requires internet connection
- Google Maps integration included

## License

This project is a redesign of the Gyncentrum website for demonstration purposes.
