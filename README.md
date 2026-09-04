# Synvora

Synvora is a React website for a global textile sourcing and manufacturing network. It includes company information, services, product categories, industries, network coverage, leadership content, and a contact page.

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Oxlint

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reloading. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Check the project with Oxlint. |

## Routes

- `/` - Home page
- `/contact` - Contact page

## Project Structure

```text
src/
├── components/   Reusable page and UI components
├── data/         Site content and configuration data
├── hooks/        Custom React hooks
├── pages/        Route-level pages
└── utils/        Shared utilities and motion helpers
public/
└── fabrics/      Public image assets
```

## Production Build

Build the site and preview it locally with:

```bash
npm run build
npm run preview
```

Made with ❤️
