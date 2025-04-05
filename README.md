
# WinDeck - AI-powered Proposal Generator

WinDeck helps freelancers and agencies create persuasive proposal decks in minutes — powered by AI. This is a marketing website and waitlist MVP for the WinDeck product.

## Features

- Modern SaaS marketing website
- Responsive design using Tailwind CSS
- SEO optimized with meta tags and sitemap
- Blog system with markdown content
- Waitlist form integration with Tally.so
- React Router for navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/windeck.git
cd windeck
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website should now be running at http://localhost:5173/

## Project Structure

```
/
├── public/             # Static assets
│   ├── assets/         # Images and SVGs
│   ├── robots.txt      # For search engines
│   └── sitemap.xml     # XML sitemap
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── data/           # Data files (blog posts, etc.)
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Entry point
└── README.md
```

## Deployment with Cloudflare Pages

To deploy this website with Cloudflare Pages:

1. Push your code to a GitHub repository
2. Log in to Cloudflare Pages
3. Create a new project and connect your GitHub repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node.js version: 16 (or higher)
5. Deploy!

## Customization

- Tailwind CSS: Edit `tailwind.config.js` to modify the theme
- Content: Update the content in `/src/pages/` and `/src/data/` directories
- Assets: Replace placeholder images in `/public/assets/` with your own

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Helmet (for SEO)
- Lucide Icons

## License

This project is licensed under the MIT License.
