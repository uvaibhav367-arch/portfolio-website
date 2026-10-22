# Portfolio Website

A responsive single-page portfolio built with React (Vite), CSS and a working contact form.

## Highlights

- Component-based React architecture with reusable sections
- Smooth-scroll navigation with active-section highlighting
- Scroll-reveal animations via `IntersectionObserver`
- Dark / light theme toggle with `localStorage` persistence
- Fully responsive layout (mobile nav drawer, fluid grids)
- Contact form backed by EmailJS, with a `mailto:` fallback when no keys are configured

## Tech stack

React 19 · Vite · CSS3 (custom properties) · EmailJS API

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |

## Contact form setup

The form posts directly to the EmailJS REST API. Create a service and template at
[emailjs.com](https://www.emailjs.com/), then copy `.env.example` to `.env` and fill in:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these are not set, the form falls back to opening the visitor's mail client with the message
pre-filled, so the contact channel never breaks.

## Editing content

All resume content, project details and social links live in one file:
`src/data/profile.js`. Update `LINKS` and the exported collections there — every section reads from
it, so no component edits are needed.

## Deployment

Built and deployed on Vercel. Any static host works too:

```bash
npm run build
```

Upload the generated `dist/` folder.
