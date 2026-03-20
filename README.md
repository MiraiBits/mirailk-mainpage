# MiraiBits — Main Website

The official website for [MiraiBits](https://miraibits.com), built with [Next.js](https://nextjs.org), Tailwind CSS, and TypeScript. It showcases the company's services, portfolio projects, and contact information.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Language**: TypeScript
- **Dark mode**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [lucide-react](https://lucide.dev)

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Deployment

This project is deployed on [Vercel](https://vercel.com). Every push to the default branch triggers an automatic deployment. Vercel auto-detects the Next.js framework via `next.config.ts` and the `next` dependency in `package.json`.

To deploy your own copy:

1. [Import the repository](https://vercel.com/new) in Vercel.
2. Vercel will automatically detect Next.js and configure the build settings.
3. Click **Deploy**.
