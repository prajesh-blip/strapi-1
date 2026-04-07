# RWA Next App

Next.js App Router scaffold for the careers-style RWA landing page derived from the provided PDF, now set up as a JSX/JavaScript project.

## Start

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Structure

- `app/page.jsx`: landing page composition
- `app/globals.css`: page styling
- `lib/site-content.js`: CMS-friendly data shape for hero, logos, portfolio, thesis, jobs, and footer

## CMS integration notes

- Replace `getLandingPageData()` with a fetch to your CMS.
- Keep `jobs.items` as the primary feed for job cards.
- The page sections are already separated into data-driven blocks so editorial content can move out of code incrementally.
