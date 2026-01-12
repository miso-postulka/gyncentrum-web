# Gyncentrum Website - Modern Redesign

A modern, sleek redesign of the Gyncentrum ambulance website, maintaining the original pink color palette and content while implementing contemporary UI/UX design principles.

## Features

### Modern Design Elements
- **Clean, minimal layout** with plenty of whitespace
- **Smooth animations** and transitions throughout
- **Card-based design** for content sections
- **Gradient backgrounds** using the original pink color (#FF5EAA)
- **Modern typography** and icon usage (Font Awesome)
- **Fully responsive** design for all devices

### Sections
1. **Hero Section** - Eye-catching introduction with statistics
2. **About Section** - Information about the clinic with feature highlights
3. **Team Section** - Showcase of medical professionals
4. **Services Section** - Grid of available medical services
5. **Office Hours** - Clear display of working hours with call-to-action
6. **Contact Section** - Complete contact information with embedded map
7. **Footer** - Quick links and contact summary

### Interactive Features
- Sticky navigation with active link highlighting
- Mobile-responsive hamburger menu
- Smooth scroll to sections
- Scroll reveal animations for cards
- Animated statistics counter
- Hover effects on cards and buttons
- Interactive map integration

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript** - No frameworks, lightweight and fast
- **Font Awesome** - Icon library

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

## File Structure

```
web/
├── index.html      - Main HTML file
├── styles.css      - CSS styles
├── script.js       - JavaScript functionality
└── README.md       - This file
```

## How to Use

1. Simply open `index.html` in any modern web browser
2. No build process or dependencies required
3. Works offline (except for Font Awesome icons and Google Maps)

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #FF5EAA;
    /* Add your custom colors */
}
```

### Adding Real Images
Replace the placeholder images in `index.html`:
```html
<!-- Current -->
<img src="https://via.placeholder.com/..." alt="...">

<!-- Replace with -->
<img src="path/to/your/image.jpg" alt="...">
```

### Updating Content
Edit the text content directly in `index.html` within the respective section containers.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight (no heavy frameworks)
- Fast loading times
- Optimized animations
- Responsive images

## Contact Information

The website includes the following contact details from the original site:

- **Address:** Digital Park II, blok A, Einsteinova 25, 851 01 Bratislava
- **Phone:** 0948 838 986, 0905 838 986, 0918 605 896
- **Email:** ambulancia@gyncentrum.sk
- **Hours:** Monday-Friday, 7:00-17:00

## Notes

- Placeholder images are used (via placeholder.com) - replace with actual clinic photos
- Google Maps is embedded for the location
- Font Awesome CDN is used for icons (requires internet connection)
- All content is in Slovak language as per the original website
