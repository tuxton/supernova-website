# Ser Supernova - Website

A modern landing page for the book "Ser Supernova" by Fedra Duarte. Built with Next.js 16, React 19, and Tailwind CSS 4.

## About the Book

**Ser Supernova: El estallido que te convierte en luz**

Una guía íntima, visceral y luminosa para transformar tu historia en conciencia, y tu dolor en expansión. A journey of personal transformation, self-discovery, and spiritual rebirth.

## Features

- 🎨 **Modern Design** - Beautiful, responsive layout with custom color system using OKLCH
- 📱 **Mobile-First** - Fully responsive across all devices
- ⚡ **Performance Optimized** - Built with Next.js 16 App Router for optimal speed
- 🎯 **Complete Landing Page** - Hero, about, testimonials, FAQ, and more
- 🛍️ **Shopify Integration** - Includes custom Shopify theme files
- 🌙 **Theme Support** - Dark/light mode with next-themes
- 📊 **Analytics** - Integrated with Vercel Analytics
- ♿ **Accessible** - Built with Radix UI primitives

## Tech Stack

- **Framework:** Next.js 16.1
- **UI Library:** React 19.2
- **Styling:** Tailwind CSS 4.2
- **Components:** Radix UI, shadcn/ui
- **Fonts:** DM Sans, Playfair Display
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Animations:** tw-animate-css
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/tuxton/supernova-website.git
cd supernova-website

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Project Structure

```
supernova/
├── app/
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── page.tsx          # Home page with all sections
│   └── globals.css       # Global styles
├── components/
│   ├── sections/         # Page sections
│   │   ├── hero.tsx
│   │   ├── about-book.tsx
│   │   ├── benefits.tsx
│   │   ├── author.tsx
│   │   ├── testimonials.tsx
│   │   ├── bonuses.tsx
│   │   ├── cta.tsx
│   │   ├── index-preview.tsx
│   │   ├── faq.tsx
│   │   ├── closing.tsx
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   └── theme-provider.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/
│   └── images/           # Book cover, author photo, hero image
├── shopify-theme/        # Custom Shopify theme integration
│   ├── assets/
│   ├── config/
│   └── layout/
└── styles/               # Additional styles
```

## Page Sections

1. **Hero** - Eye-catching introduction with book title and CTA
2. **About Book** - What the book is about and who it's for
3. **Benefits** - Key transformations readers will experience
4. **Author** - Biography of Fedra Duarte
5. **Testimonials** - Social proof from readers
6. **Bonuses** - Exclusive content included with purchase
7. **Call to Action** - Primary purchase section
8. **Index Preview** - Table of contents/chapter overview
9. **FAQ** - Common questions answered
10. **Closing** - Final invitation
11. **Footer** - Links and legal info

## Deployment

This project is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel

# Or connect your GitHub repository to Vercel for automatic deployments
```

## Shopify Integration

The `shopify-theme/` directory contains theme files for integrating with Shopify:

- `assets/` - CSS and JavaScript files
- `config/` - Theme settings
- `layout/` - Liquid template files

## Customization

### Colors

The theme uses OKLCH color space for better color perception. Edit colors in `app/globals.css`.

### Content

Update section content by editing the corresponding component files in `components/sections/`.

### Images

Replace images in `public/images/` with your own:
- `hero-supernova.jpg` - Hero background
- `book-cover.png` - Book cover image
- `author-portrait.jpg` - Author photo

## License

Private project. All rights reserved.

## Author

**Fedra Duarte**

Website developed for the book launch of "Ser Supernova".

---

*Built with ❤️ using Next.js and Tailwind CSS*
