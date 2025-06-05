# APIsmartHUB - AI-Powered API Management Platform

A comprehensive Smart AI-based API Management SaaS platform built with React and modern web technologies, designed to streamline API lifecycle management with enhanced authentication and comprehensive user management capabilities.

## 🚀 Features

### Core Functionality
- **Dashboard Analytics**: Real-time API performance monitoring and analytics
- **API Schema Management**: Visual and code-based schema editing with validation
- **User Management**: Comprehensive user administration with role-based access control
- **Access Control**: Granular permissions and security management
- **Billing Management**: Subscription and payment tracking with usage analytics
- **Documentation**: Auto-generated API documentation and guides
- **Monitoring**: Real-time API monitoring with alerts and performance insights
- **AI Insights**: AI-powered performance recommendations and analytics

### Technical Features
- **Responsive Design**: Mobile-first design with adaptive layouts
- **Dark Mode**: Complete theme system with accessibility features
- **Authentication**: Secure login with session management
- **Real-time Updates**: Live data synchronization and notifications
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Wouter** - Lightweight routing
- **TanStack Query** - Data fetching and caching
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type-safe backend
- **Drizzle ORM** - Database toolkit
- **Zod** - Schema validation
- **Passport.js** - Authentication middleware

### Development Tools
- **Vite** - Fast build tool and development server
- **ESBuild** - Fast bundling
- **PostCSS** - CSS processing
- **Drizzle Kit** - Database migrations

## 📁 Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # Base UI components
│   │   │   ├── dashboard/  # Dashboard-specific components
│   │   │   └── layout/     # Layout components
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configurations
│   │   └── contexts/       # React contexts
├── server/                 # Backend application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── vite.ts            # Vite configuration
├── shared/                 # Shared code between frontend and backend
│   └── schema.ts          # Database schemas and types
└── attached_assets/       # Project assets and documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd apimanagement-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5000
   - Login credentials:
     - Username: `infinitiapi`
     - Password: `Infi@123`

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=your_database_url
SESSION_SECRET=your_session_secret
```

### Database Setup
The application uses in-memory storage by default for development. To use a PostgreSQL database:

1. Update the `DATABASE_URL` in your environment variables
2. Run database migrations:
   ```bash
   npm run db:migrate
   ```

## 📱 Responsive Design

The application is fully responsive and mobile-friendly:

- **Mobile Navigation**: Hamburger menu with slide-out sidebar
- **Adaptive Layouts**: Grid layouts that adjust to screen size
- **Touch Optimization**: Proper touch targets for mobile devices
- **Responsive Typography**: Scalable text and spacing
- **Mobile-First**: Designed for mobile and enhanced for desktop

## 🎨 Theming

### Available Themes
- **Light Mode**: Clean, professional light theme
- **Dark Mode**: Modern dark theme with proper contrast
- **System**: Automatically follows system preference

### Accessibility Features
- **High Contrast**: Enhanced contrast for better visibility
- **Large Text**: Increased font sizes for accessibility
- **Keyboard Navigation**: Full keyboard accessibility support

## 🔐 Authentication & Security

### Login System
- Secure session-based authentication
- Protected routes with automatic redirects
- Session persistence across browser sessions

### User Roles
- **Administrator**: Full system access
- **User**: Limited access based on permissions
- **Super Admin**: Enhanced administrative capabilities

### Security Features
- Session management with secure storage
- Protected API endpoints
- Role-based access control
- Input validation and sanitization

## 📊 Dashboard Features

### Overview Tab
- Key metrics cards with trend indicators
- API usage charts and analytics
- Recent activity feed
- AI-powered insights panel

### Traffic Monitoring
- Real-time API traffic visualization
- Request/response analytics
- Performance metrics
- Error rate tracking

### User Management
- User listing and management
- Role assignment and permissions
- Activity audit logs
- AI-powered user recommendations

### Security Dashboard
- Access control monitoring
- Credential management
- Security alerts and notifications
- Compliance tracking

## 🔌 API Integration

### External API Testing
The application includes an integrated API testing interface:
- URL: `http://apismarthub.infinitisoftware.com:8000/tryit`
- Accessible via the "Try it demo" button in API Schema management

### API Schema Management
- Visual schema editor with drag-and-drop interface
- Code-based schema editing with syntax highlighting
- Schema validation and error reporting
- Import/export functionality

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Setup
1. Set `NODE_ENV=production`
2. Configure production database
3. Set secure session secrets
4. Configure SSL certificates

### Recommended Deployment Platforms
- **Vercel**: Automatic deployments with Git integration
- **Netlify**: JAMstack deployment with serverless functions
- **Railway**: Full-stack deployment with database
- **Docker**: Containerized deployment

## 🧪 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Husky for pre-commit hooks

## 📈 Performance

### Optimization Features
- Code splitting for faster loading
- Image optimization and lazy loading
- Caching strategies with TanStack Query
- Minimized bundle sizes
- Progressive Web App capabilities

### Monitoring
- Real-time performance metrics
- Error tracking and reporting
- User analytics and insights
- API performance monitoring

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

### Code Standards
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add JSDoc comments for functions
- Maintain responsive design principles

## 📞 Support

### Documentation
- In-app help system
- API documentation auto-generated
- Component library documentation
- User guides and tutorials

### Technical Support
- GitHub Issues for bug reports
- Feature requests via GitHub Discussions
- Community support forums
- Professional support available

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Development Team

APIsmartHUB is built by a dedicated team of professionals at Infiniti Software:

| Name | Role | Specialization |
|------|------|---------------|
| **Thameen Ansari** | Product Development | Frontend & Backend Development |
| **Jegan SP** | Product Development | Full-Stack Development |
| **Nagarajan** | Business & Product | Product Strategy & Business Development |
| **Manivannan** | Infrastructure Support | DevOps & System Administration |
| **Karthick Pulavendhan** | Product Development | Software Engineering |
| **Indira** | Product Development | UI/UX & Frontend Development |

## 🏢 About Infiniti Software

APIsmartHUB is developed by Infiniti Software, specializing in enterprise-grade API management solutions. Our team combines deep technical expertise with business acumen to deliver cutting-edge solutions for modern API management challenges.

### Our Expertise
- Enterprise API Management
- Cloud-Native Applications
- AI-Powered Analytics
- Scalable Infrastructure Solutions
- User Experience Design

---

**Version**: 1.0.0  
**Last Updated**: June 2025  
**Developed by**: Infiniti Software Development Team