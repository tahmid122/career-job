# Career Job 💼

A modern, full-featured job portal built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. This application helps users explore job opportunities, filter positions, bookmark favorites, and manage their job search journey with an intuitive user interface.

## 🚀 Live: https://career-job-portal.vercel.app/

## 🌟 Features

- **Job Listings**: Browse and explore job opportunities with detailed information
- **Advanced Filtering**: Filter jobs by type (Full-time, Internship, Contract, Part-time), category, and location
- **Job Details**: View comprehensive job descriptions including responsibilities, requirements, and salary information
- **Bookmarking System**: Save favorite jobs for later reference
- **Responsive Design**: Beautiful, mobile-first UI using Tailwind CSS
- **Modern Stack**: Built with Next.js App Router, React 19, and TypeScript for type safety

## 🛠️ Tech Stack

### Frontend Framework

- **Next.js 16.1.1** - React framework with built-in routing and optimization
- **React 19.2.3** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling & UI Components

- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn** - Unstyled, accessible component primitives
  - React Dropdown Menu
  - React Select
  - React Slot
- **Lucide React** - Beautiful SVG icons
- **React Icons** - Comprehensive icon library
- **class-variance-authority** - Type-safe CSS class composition
- **clsx** - Utility for constructing className strings

### Animations & Effects

- **Motion 12.23** - Smooth animations and transitions
- **ldrs** - Skeleton loaders and loading indicators
- **tw-animate-css** - Tailwind CSS animations

### Notifications & UX

- **react-hot-toast** - Toast notifications for user feedback

### Development Tools

- **ESLint** - Code quality and style checking
- **TypeScript** - Static type checking

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── bookmarks/         # Bookmarked jobs page
│   ├── jobs/              # Jobs listing page
│   │   └── [id]/          # Individual job details page
│   ├── sign-in/           # Sign in page
│   ├── sign-up/           # Sign up page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Banner.tsx         # Banner component
│   ├── BookmarksCard.tsx  # Bookmarked job card
│   ├── JobCard.tsx        # Job listing card
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── Home/              # Home page components
│   ├── Jobs/              # Jobs page components (filters)
│   ├── JobDetails/        # Job details page components
│   └── ui/                # UI component library (buttons, selects, menus)
├── types/                 # TypeScript type definitions
│   └── job.ts            # Job interface definition
├── lib/                   # Utility functions
│   └── utils.ts          # Helper utilities
└── images/               # Image assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd career-job
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎯 Core Data Types

### Job Interface

Jobs in this application follow this structure:

```typescript
interface JobType {
  id: number;
  title: string;
  company: string;
  category: string;
  logo: string;
  location: string;
  tags: string[];
  experience: number; // Years of experience required
  skills: string[];
  deadline: string; // Application deadline
  type: "Internship" | "Full time" | "Contract" | "Part time";
  responsibilities: string[];
  requirements: string[];
  salary?: string; // Optional salary info
}
```

## 🎨 Design & UX

- **Modern UI**: Clean, professional design with smooth animations
- **Accessible Components**: Built with Radix UI primitives for accessibility
- **Toast Notifications**: User-friendly feedback for actions (bookmarking, authentication, etc.)
- **Loading States**: Elegant skeleton loaders for better UX
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 📦 Key Components

| Component       | Purpose                     |
| --------------- | --------------------------- |
| `Navbar`        | Navigation and user menu    |
| `Banner`        | Hero section on home page   |
| `JobCard`       | Individual job listing card |
| `BookmarksCard` | Bookmarked job display      |
| `Filter`        | Job filtering interface     |
| `SearchBox`     | Job search functionality    |

## 🌐 API Integration

The application is configured to fetch images from `i.ibb.co.com` for job logos and company images.

## 📄 License

This project is private and not licensed for external use.

## 👨‍💻 Author

Created with ❤️ Tahmid Alam
