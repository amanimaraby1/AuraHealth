# 🎨 AuraHealth - Health Data Dashboard

**A design-focused, accessible health data visualization platform**

Built by a UX designer learning to code and implementing designs from Figma into production-ready React applications.

![Status](https://img.shields.io/badge/Status-Design%20Phase-blue) ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react) ![Tailwind](https://img.shields.io/badge/Tailwind-4.1.12-06B6D4?logo=tailwindcss) ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)

---

## 🎯 Project Overview

AuraHealth is a comprehensive health data dashboard designed to transform raw health metrics into **clear, actionable insights**. The project demonstrates a complete design-to-development workflow, prioritizing **usability, accessibility, and visual clarity** in data-heavy interfaces.

### Current Status: 🎨 Design Phase

This project is currently in the **design phase**. The Figma design is finalized and the development environment is fully set up and ready for implementation.

---

## 🖼️ Design Resources

- **Figma Design File:** [View on Figma](https://www.figma.com/community/file/1608569078019745513/health-data-dashboard)
- **Component Library:** Built with shadcn/ui + Radix UI
- **Design System:** Accessible, reusable component patterns

---

## 🛠️ Tech Stack

**Frontend Framework & Build:**
- ⚡ **Vite** (v6.3.5) - Lightning-fast development & build tool
- ⚛️ **React** (v18.3.1) - Component-based UI library
- 🎨 **TypeScript** - Type-safe code development
- 🌊 **Tailwind CSS** (v4.1.12) - Utility-first styling with Vite integration

**UI Components & Libraries:**
- 🧩 **Radix UI** - Accessible, unstyled component primitives
- 🎭 **shadcn/ui** - High-quality React components (MIT licensed)
- 🎯 **MUI (Material-UI)** - Comprehensive component library with icons
- 📊 **Recharts** - Data visualization & charts
- ⌨️ **React Hook Form** - Performant form handling
- 🎪 **Embla Carousel** - Production-ready carousel component
- 🎨 **Lucide React** - Beautiful icon library
- 🎯 **Motion** - Smooth animations & transitions
- 📢 **Sonner** - Toast notifications

**Utilities & Advanced Features:**
- 🗂️ **React Router** (v7.13.0) - Client-side routing
- 🎨 **Class Variance Authority** - Variant pattern management
- 📅 **Date-fns** - Date manipulation utilities
- 🎨 **Tailwind Merge** - Intelligent class merging
- 🌙 **Next Themes** - Dark/Light mode support
- 🗺️ **React Responsive Masonry** - Flexible grid layouts
- 🎛️ **React Resizable Panels** - Draggable panel layouts
- 🖱️ **React DnD** - Drag and drop functionality
- 📑 **React Slick** - Carousel slider component

---

## 📁 Project Structure

```
AuraHealth/
├── src/
│   ├── components/          # Reusable React components
│   │   └── ui/             # UI components from shadcn/ui
│   ├── pages/              # Page-level components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Helper functions & utilities
│   ├── styles/             # Global styles
│   ├── main.tsx            # React entry point
│   └── App.tsx             # Main App component
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.mjs      # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies & scripts
├── ATTRIBUTIONS.md         # Credits & licenses
└── README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **pnpm** (pnpm is recommended for this project)

### Installation

```bash
# Clone the repository
git clone https://github.com/amanimaraby1/AuraHealth.git
cd AuraHealth

# Install dependencies
npm install
# or if using pnpm:
pnpm install
```

### Development

```bash
# Start the development server
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173` with hot module replacement (HMR) enabled.

### Production Build

```bash
# Create optimized production build
npm run build
# or
pnpm build
```

The build output will be in the `dist/` directory, optimized and ready for deployment.

---

## 🎨 Design Philosophy & Features

### Accessibility First ♿
- WCAG 2.1 AA compliance standards
- Semantic HTML structure
- Full keyboard navigation support
- Screen reader friendly markup
- High contrast color schemes
- Accessible form inputs with proper labels

### Responsive Design 📱
- Mobile-first development approach
- Breakpoints for all device sizes (mobile, tablet, desktop, wide screens)
- Touch-friendly interactions
- Optimized performance across all devices
- Flexible layouts using CSS Grid and Flexbox

### Data Visualization 📊
- Clear, intuitive charts powered by Recharts
- Multiple visualization types for different data contexts
- Color-coded metrics for quick scanning
- Real-time data update capability
- Customizable chart components

### Component Library 🧩
- Consistent, reusable components
- Built on Radix UI primitives for reliability
- Styled with Tailwind CSS for consistency
- Easy to maintain and extend
- Component variants for different states and sizes

---

## 🔄 Development Phases

### ✅ Phase 1: Setup (Complete)
- Development environment configured
- Build tools optimized (Vite + React + TypeScript)
- Component libraries integrated (Radix UI, shadcn/ui)
- Styling system in place (Tailwind CSS)

### 🎨 Phase 2: Design Implementation (Current)
- Implement core components from Figma design
- Build dashboard layout and data structures
- Create reusable data visualization components

### 🔄 Phase 3: Functionality (Upcoming)
- Integrate form handling and user interactions
- Implement data management (state management, API integration)
- Create navigation flows

### 🎯 Phase 4: Polish & Testing (Upcoming)
- Implement dark mode and theming
- Performance optimization
- Accessibility audit (manual & automated)
- User testing and iteration

### 🚀 Phase 5: Deployment (Upcoming)
- Production build optimization
- Deploy to hosting platform
- Monitor performance and user feedback

---

## 💡 Why This Tech Stack?

As a UX designer learning to code, I chose this stack specifically because:

| Tool | Why I Chose It |
|------|---|
| **Vite** | Lightning-fast dev server for rapid design iteration |
| **React** | Component-based thinking aligns perfectly with design systems |
| **TypeScript** | Catch errors early, better developer experience |
| **Tailwind CSS** | Design tokens, consistency, perfect for design implementation |
| **Radix UI + shadcn/ui** | Accessible by default, highly customizable, design-system ready |
| **Production libraries** | Professional tooling for portfolio-worthy projects |

---

## 🎓 Learning Goals

Through building AuraHealth, I'm mastering:

- ✅ Translating Figma designs to pixel-perfect React code
- ✅ Building accessible UI components (WCAG compliance)
- ✅ Advanced React patterns (hooks, context, state management)
- ✅ Data visualization techniques
- ✅ Responsive design implementation
- ✅ Performance optimization
- ✅ Component composition and reusability
- ✅ TypeScript for type-safe code
- ✅ Testing accessible components

---

## 📝 Git Workflow

```bash
# Create a new feature branch
git checkout -b feature/component-name

# Make your changes and commit
git add .
git commit -m "Add component-name with [specific feature]"

# Push to GitHub
git push origin feature/component-name

# Create a Pull Request on GitHub
```

---

## 🤝 Design-to-Code Workflow

This project showcases a professional design-to-development workflow:

```
Figma Design
    ↓
Design System Documentation
    ↓
Component Architecture Planning
    ↓
Development Environment Setup ✅
    ↓
Component Implementation 🔄 (Current Phase)
    ↓
Integration & Data Binding
    ↓
User Testing & Iteration
    ↓
Accessibility Audit
    ↓
Performance Optimization
    ↓
Production Deployment
```

---

## 🎯 Design Decisions

### Color System
- Accessible color contrast ratios
- Theme support (light/dark modes)
- Semantic color meanings (success, warning, error, info)

### Typography
- Clear hierarchy for data readability
- Appropriate line heights and spacing
- Responsive font sizing

### Components
- Built with Radix UI primitives for reliability
- Customized with Tailwind CSS
- Designed for consistency across the dashboard

---

## 📄 Attributions & Credits

This project includes components and assets from:

- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components (MIT License)
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Material-UI (MUI)](https://mui.com/)** - Comprehensive component library
- **[Unsplash](https://unsplash.com/)** - Free stock photos (Unsplash License)
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for full details.

---

## 🔧 Configuration Files

### `vite.config.ts`
- React plugin for JSX transformation
- Tailwind CSS Vite plugin for optimal performance
- Path alias for cleaner imports (`@` = `src`)
- SVG and CSV support

### `tailwind.config.js`
- Custom color palette aligned with design
- Theme customization for accessibility
- Component-specific utilities

### `tsconfig.json`
- React JSX support
- Module resolution with path aliases
- Strict type checking

---

## 💬 Design Philosophy

> *"Good design is invisible. Great design is usable. Excellent design is beautifully coded."*

AuraHealth represents the convergence of three disciplines:

1. **User Experience Design** - Research, empathy, usability testing
2. **Visual Design** - Aesthetics, accessibility, visual hierarchy
3. **Frontend Development** - Performance, maintainability, best practices

---

## 🌟 Portfolio Value

This project demonstrates:
- ✨ End-to-end design thinking
- 💻 Modern React development skills
- ♿ Commitment to accessibility standards
- 📱 Professional responsive design
- 🎨 Design system implementation
- ⚡ Production-ready code quality
- 🧩 Component reusability
- 📊 Data visualization expertise

---

## 🔜 Future Enhancements

- [ ] Real-time data integration (API connection)
- [ ] User authentication & profiles
- [ ] Export functionality (PDF, CSV)
- [ ] Advanced filtering & search capabilities
- [ ] Mobile app version
- [ ] Dark/Light theme toggle
- [ ] Multi-language support (i18n)
- [ ] Performance metrics dashboard
- [ ] Unit & integration tests
- [ ] E2E testing

---

## 📖 Resources & Documentation

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Recharts Documentation](https://recharts.org)

---

## 📞 Contact & Social

I'm always excited to discuss design, code, and bridging the gap between the two!

- 💼 **LinkedIn:** [Add your LinkedIn]
- 🐦 **Twitter:** [@YourHandle]
- 🎨 **Figma:** [Add your Figma profile]
- 📧 **Email:** [your.email@example.com]
- 🌐 **Portfolio:** [Coming soon]

---

## 📜 License

This project includes components from shadcn/ui used under the MIT license. See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for details.

---

## 🙏 Thank You

Thank you for checking out AuraHealth! Whether you're a fellow designer learning to code, a developer interested in design systems, or just curious about the project—I'd love to hear your feedback!

**Let's build amazing digital experiences together.** 🚀

---

*Last Updated: February 25, 2026*  
*Status: Active Development (Design Phase)*  
*Repository: [amanimaraby1/AuraHealth](https://github.com/amanimaraby1/AuraHealth)*
