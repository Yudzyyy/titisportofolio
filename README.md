# PortoGravity - NetDevOps Portfolio

A modern, interactive portfolio website showcasing network engineering and DevOps expertise. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

### Pages
- **Home**: Hero section with split-screen design and interactive bento grid
- **About**: Professional profile, certifications, and technical skills
- **Work**: Project showcase with filtering and interactive cards
- **Lab**: Experimental projects and interactive demos

### Interactive Features (TASK 6-8)
- Smooth animations using Framer Motion
- Hover effects and transitions
- Interactive command palette (Cmd+K)
- Real-time status monitoring
- Responsive design with mobile optimization

### API Routes (TASK 10)
- `/api/status` - System status and uptime monitoring
- `/api/projects` - Project listings with filtering
- `/api/skills` - Technical skills and certifications
- `/api/contact` - Contact form submission handler

### Deployment Configuration (TASK 12)
- **Docker**: Multi-stage build with health checks
- **Vercel**: Optimized configuration with security headers
- **CI/CD**: GitHub Actions with automated testing and Lighthouse CI

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: Lucide React Icons
- **Flow Diagrams**: React Flow (@xyflow/react)
- **State Management**: React Context API

## 📦 Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run Lighthouse CI
npm run lighthouse
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm run deploy:vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Docker

```bash
# Build and run
npm run deploy:self-hosted

# Or manually
docker build -t portogravity .
docker run -p 3000:3000 portogravity
```

### Environment Variables

Create a `.env.local` file:

```env
UPTIME_KUMA_URL=https://your-uptime-kuma-instance.com/api/status-page/heartbeat/your-status-page
```

## 📊 Performance Monitoring

Lighthouse CI is configured to run automatically on deployments. Performance thresholds:

- Performance: ≥ 80
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 80

## 🏗️ Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── about/        # About page
│   ├── work/         # Work/projects page
│   ├── lab/          # Lab/experiments page
│   └── api/          # API routes
├── components/       # React components
│   ├── layout/       # Layout components
│   ├── sections/     # Page sections
│   ├── projects/     # Project-specific components
│   └── ui/           # Reusable UI components
├── lib/              # Utilities and constants
├── hooks/            # Custom React hooks
├── context/          # React context providers
└── styles/           # Global styles
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking
- `npm test` - Run tests
- `npm run lighthouse` - Run Lighthouse CI locally

## 🔒 Security

- Security headers configured in `next.config.ts` and `vercel.json`
- Content Security Policy for images
- XSS protection enabled
- HSTS headers configured

## 📄 License

This project is private and proprietary.

## 👤 Author

**Titis Wahyudi Putro**
- Portfolio: [portogravity.vercel.app](https://portogravity.vercel.app)
- GitHub: [@wahyu](https://github.com/wahyu)
