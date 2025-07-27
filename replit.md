# replit.md

## Overview

This is an Angular 16+ recruitment assignment implementing a responsive worklog summary card component for an ERP system. The application showcases a clean, modular design using Angular standalone components and Tailwind CSS for styling, with features like role-based theming, dark mode support, and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Angular 16+ with standalone components
- **Styling**: Tailwind CSS v4.1.11 with custom configuration
- **Component Strategy**: Single-purpose, reusable components with clear separation of concerns
- **State Management**: Simple component-based state using Angular's built-in reactivity
- **Type Safety**: Full TypeScript implementation with strict mode enabled

### Key Design Decisions
- **Standalone Components**: Chosen for better modularity and reduced bundle size
- **Tailwind CSS Only**: No UI libraries to maintain full control over styling and demonstrate CSS skills
- **Mobile-First Responsive**: Uses Tailwind's responsive breakpoints (sm:, md:, lg:)
- **Accessibility First**: Semantic HTML, ARIA labels, and proper focus management

## Key Components

### 1. WorklogSummaryCardComponent
- **Purpose**: Displays individual work log summaries with user info, hours, and project details
- **Features**: Role-based styling, avatar fallbacks, conditional "View Details" button
- **Inputs**: WorkLogSummary interface with user, project, and permission data

### 2. AppComponent
- **Purpose**: Main application wrapper with demo data and dark mode toggle
- **Features**: Grid layout for cards, dark mode management, empty state handling
- **Demo Data**: Multiple user roles and scenarios for testing

### 3. WorkLogSummary Interface
- **Structure**: Defines user (name, avatar, role), week, hours, project, and permissions
- **Role Types**: 'admin' | 'manager' | 'employee' with distinct visual treatments
- **Validation**: TypeScript strict mode ensures type safety

## Data Flow

1. **Static Demo Data**: AppComponent contains mock WorkLogSummary objects
2. **Component Input**: Data flows down via @Input() to WorklogSummaryCardComponent
3. **Role-Based Rendering**: Component applies conditional styling based on user.role
4. **Avatar Handling**: Graceful fallback from avatarUrl to user initials
5. **Permission-Based UI**: "View Details" button shown only when canViewDetails is true

## External Dependencies

### Core Dependencies
- **@angular/core**: v20.1.3 - Core Angular framework
- **@angular/common**: v20.1.3 - Common Angular directives and pipes
- **tailwindcss**: v4.1.11 - Utility-first CSS framework
- **rxjs**: v7.8.2 - Reactive programming library
- **typescript**: v5.8.3 - Type-safe JavaScript superset

### Development Tools
- **@angular/cli**: v20.1.3 - Angular CLI for development and build
- **@angular-devkit/build-angular**: v20.1.3 - Angular build system

### Font Integration
- **Google Fonts**: Inter font family for clean, modern typography
- **CDN Delivery**: Fonts loaded via Google Fonts CDN for performance

## Deployment Strategy

### Build Configuration
- **Production**: Optimized builds with tree-shaking and minification
- **Development**: Hot reload with source maps for debugging
- **Bundle Size**: Configured with warnings at 500kb, errors at 1mb

### Environment Support
- **Modern Browsers**: ES2022 target for optimal performance
- **TypeScript**: Strict mode with comprehensive type checking
- **Angular Features**: Standalone components, OnPush change detection

### Styling Strategy
- **Tailwind Configuration**: Custom role-based color schemes and animations
- **Dark Mode**: Class-based dark mode with smooth transitions
- **Component Styles**: @apply directives for reusable style patterns
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Performance Optimizations
- **OnPush Change Detection**: Minimizes unnecessary re-renders
- **TrackBy Functions**: Optimizes list rendering performance
- **Lazy Loading**: Prepared for component lazy loading if needed
- **Tree Shaking**: Unused code elimination in production builds