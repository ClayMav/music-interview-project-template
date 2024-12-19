# Music Interview Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Your Mission

1. Start the development server. [Details](#getting-started)
1. Take a look at the data in the [`src/app/api/_data/data.tsx`](src/app/api/_data/data.tsx) file.
1. Open the REST API URLs in your browser to see the data.
    - [`http://localhost:3000/api/albums`](http://localhost:3000/api/albums)
    - [`http://localhost:3000/api/artists`](http://localhost:3000/api/artists)
1. Conceptualize a fun and interactive project to build in the allotted time.
1. Build a reusable hook to fetch data from a REST API.
1. Build your project idea using the hook.

## Constraints

- NPM Packages
  - You may import axios
  - You may import styling libraries for CSS-in-JS (`styled-components`, etc.) Note that Tailwind is already installed.
  - You may not import any data fetching libraries (`react-query`, etc.)
  - You may not import any UI component libraries (`shadcn`, `material-ui`, etc.)
  - Other packages might be allowed, but you must ask first.
- You may not directly import the data from the `src/app/api/_data/data.tsx` file. You can, however, import the types.

## Criteria

- The project must be interactive and fun.
- The project must have clean and easy-to-read code.
- The project must be delivered in the allotted time.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
