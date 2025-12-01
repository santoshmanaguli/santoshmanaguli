# Santosh Managuli - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design inspired by Apple, Google, and Cred
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js
- 🎭 Smooth animations with Framer Motion
- ♿ Accessible and SEO-friendly

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with shadcn/ui patterns
- **Animations:** Framer Motion
- **Theme:** next-themes for dark mode

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd santoshmanaguli
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel (Recommended for Frontend)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Railway (For Backend - if needed)

1. Create a new project on [Railway](https://railway.app)
2. Connect your repository
3. Configure environment variables
4. Deploy

## Project Structure

```
santoshmanaguli/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── sections/        # Page sections
│   ├── ui/              # Reusable UI components
│   ├── navigation.tsx   # Navigation bar
│   ├── footer.tsx       # Footer component
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Customization

Update the following files to customize the portfolio:

- `components/sections/hero.tsx` - Hero section content
- `components/sections/about.tsx` - About section
- `components/sections/experience.tsx` - Work experience
- `components/sections/skills.tsx` - Technical skills
- `components/sections/education.tsx` - Education details
- `components/sections/contact.tsx` - Contact information

## License

This project is private and personal.
