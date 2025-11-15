# P1-WebPortal

Public-facing frontend for PeregrineOne's microservices architecture.

## Architecture Overview

This is one component of PeregrineOne's distributed system. As the web portal, it serves as the entry point for new users and provides information about the platform. It's designed to integrate with:

- The main application frontend (`app.peregrineone.ai`)
- Backend API services for business data queries
- Authentication services for user onboarding
- Calendar integration for booking demos

The portal is a stateless React SPA that communicates with other microservices through standard HTTP APIs and redirects users to the appropriate services based on their needs.

## Tech Stack

- React 18 with TypeScript
- Vite for development and building
- Tailwind CSS for styling
- Lucide React for icons

## Getting Started

Clone and install:

```bash
git clone https://github.com/eternal-red/P1-WebPortal.git
cd P1-WebPortal
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview  # to preview the build
```

## Project Layout

The main code lives in `src/` with the landing page in `App.tsx`. There are a few components for the animated query demo, terms of service, and privacy policy. Tailwind config has our custom colors (red accent on white/light gray).

