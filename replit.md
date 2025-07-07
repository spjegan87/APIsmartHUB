# APIsmartHUB - AI-Powered API Management Platform

## Overview

APIsmartHUB is a comprehensive Smart AI-based API Management SaaS platform built with modern web technologies. The application provides end-to-end API lifecycle management with enhanced authentication, real-time monitoring, schema validation, and AI-powered insights. The platform serves as a centralized hub for managing APIs, users, billing, documentation, and access controls.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS utility-first framework with custom design system
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme System**: Custom context-based theme provider supporting dark/light/system modes with accessibility features

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API with standardized routes and error handling
- **Session Management**: Express sessions with PostgreSQL store
- **Input Validation**: Zod schema validation for request/response data
- **Database Layer**: Drizzle ORM for type-safe database operations

### Progressive Web App (PWA) Features
- **Service Worker**: Custom service worker for offline capabilities and caching
- **Manifest**: Complete PWA manifest for mobile app-like experience
- **Installation**: Native installation prompts for desktop and mobile
- **Android APK**: Trusted Web Activity (TWA) support for Android app distribution

## Key Components

### Core Modules
1. **Dashboard**: Real-time analytics and monitoring with interactive charts
2. **API Management**: Complete CRUD operations for API endpoints with versioning
3. **Schema Management**: Visual and code-based schema editing with validation
4. **User Management**: Role-based access control with permission management
5. **Billing**: Subscription management with usage tracking and analytics
6. **Documentation**: Auto-generated API docs with interactive examples
7. **Monitoring**: Real-time performance monitoring with alerts
8. **AI Insights**: Machine learning-powered recommendations and analytics

### Authentication & Security
- **Session-based Authentication**: Secure session management with PostgreSQL storage
- **Role-based Access Control**: Granular permissions for different user roles
- **Input Sanitization**: Comprehensive validation using Zod schemas
- **CORS Protection**: Configurable cross-origin resource sharing
- **Session Security**: HTTP-only cookies with secure configuration

### Database Schema
- **Users**: User accounts with roles and permissions
- **APIs**: API endpoint definitions with metadata and schemas
- **API Metrics**: Performance and usage analytics data
- **Subscriptions**: Billing and subscription information
- **Access Controls**: Fine-grained permission management

## Data Flow

### Client-Server Communication
1. **Frontend Requests**: React components use TanStack Query for API calls
2. **Route Handling**: Express routes process requests with middleware chain
3. **Validation**: Zod schemas validate input data at API boundaries
4. **Database Operations**: Drizzle ORM handles type-safe database interactions
5. **Response Processing**: Standardized JSON responses with error handling
6. **Real-time Updates**: Live data synchronization for dashboard metrics

### State Management
- **Server State**: TanStack Query manages API responses with intelligent caching
- **Client State**: React hooks and context for UI state management
- **Form State**: React Hook Form with Zod resolver for validation
- **Theme State**: Context-based theme management with persistence

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***: Headless UI components for accessibility
- **@tanstack/react-query**: Data fetching and caching library
- **chart.js**: Interactive charts and data visualization
- **framer-motion**: Smooth animations and transitions
- **lucide-react**: Modern icon library
- **react-hook-form**: Performant form handling
- **date-fns**: Date manipulation utilities

### Backend Dependencies
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store
- **passport.js**: Authentication middleware
- **zod**: Runtime type checking and validation

### Development Tools
- **TypeScript**: Static type checking across the stack
- **ESBuild**: Fast JavaScript bundling
- **Drizzle Kit**: Database migration management
- **Vite**: Development server and build tool

## Deployment Strategy

### Production Environment
- **Database**: PostgreSQL (Neon serverless recommended)
- **Hosting**: Vercel, Netlify, or similar platform
- **Environment Variables**: DATABASE_URL for database connection
- **Build Process**: Vite production build with asset optimization

### Development Setup
1. Install dependencies: `npm install`
2. Configure database: Set DATABASE_URL environment variable
3. Run migrations: `npm run db:push`
4. Start development: `npm run dev`
5. Build production: `npm run build`

### Mobile App Distribution
- **Android**: TWA (Trusted Web Activity) for Play Store distribution
- **PWA**: Direct installation from web browser
- **Manifest**: Configured for optimal mobile experience

## Changelog

Changelog:
- July 07, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.