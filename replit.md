# Mikro Innotech Company Website

## Overview

This is a professional company website for Mikro Innotech, an Indian industrial automation company. The site showcases their expertise in laser systems, electric vehicles, pharmaceutical automation, high-speed automation, defence & aerospace, and export solutions. Built as a full-stack TypeScript application with a React frontend and Express backend, featuring a contact form that stores inquiries in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with custom corporate blue theme
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for smooth scroll and page transitions
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL
- **API Design**: Type-safe API routes defined in shared/routes.ts with Zod schemas
- **Session Storage**: connect-pg-simple for PostgreSQL-backed sessions

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # Type-safe API definitions
```

### Key Design Patterns
- **Shared Schema Validation**: Zod schemas defined in shared folder are used on both client and server for consistent validation
- **Type-Safe API Layer**: API routes defined with input/output types that TypeScript enforces across the stack
- **Component Composition**: shadcn/ui pattern of composable, accessible components

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via DATABASE_URL environment variable
- **Drizzle ORM**: Schema defined in shared/schema.ts, migrations in /migrations folder
- **Schema Push**: Run `npm run db:push` to sync schema to database

### Third-Party Services
- None currently integrated (no authentication, payments, or external APIs)

### Static Assets
- `/assets/logo.png`: Company logo
- `/assets/cover.mp4`: Hero video for homepage
- External fonts: Inter from Google Fonts

### Development Tools
- Replit-specific Vite plugins for development (cartographer, dev-banner, runtime-error-modal)