# Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and contact information for Amir P. Adam - Embedded Systems & Software Developer.

## 🚀 Features

- **Modern UI/UX**: Built with shadcn-ui components and Tailwind CSS for a beautiful, responsive design
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Responsive Design**: Fully responsive layout that works on all devices
- **Project Showcase**: Display featured projects with images, descriptions, and links
- **Skills Section**: Interactive tech stack visualization
- **Contact Form**: Easy way for visitors to get in touch
- **Dark Mode Ready**: Built with theme support using next-themes

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - High-quality React components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Additional Libraries
- **React Query (TanStack Query)** - Data fetching and caching
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📁 Project Structure

```
portfolio-booster/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media files
│   ├── components/         # React components
│   │   ├── ui/            # shadcn-ui components
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/amirphiladam2/Portfolio.git
cd portfolio-booster
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Updating Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, title, and bio
   - Modify social media links
   - Replace profile image in `src/assets/profile.png`

2. **Projects** (`src/components/Projects.tsx`):
   - Add/remove projects in the `projects` array
   - Update project images in `src/assets/`
   - Modify project links and descriptions

3. **Skills** (`src/components/Skills.tsx`):
   - Update the `skills` array with your technologies
   - Add/remove skill icons

4. **Contact** (`src/components/Contact.tsx`):
   - Update contact information
   - Configure form submission endpoint

### Styling

The project uses Tailwind CSS for styling. Customize colors, fonts, and other design tokens in:
- `tailwind.config.ts` - Tailwind configuration
- `src/index.css` - Global styles and CSS variables

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📱 Sections

### Hero Section
- Introduction and personal branding
- Social media links
- Call-to-action buttons (CV download, YouTube channel)

### Skills Section
- Interactive tech stack display
- Icons and labels for each technology

### Projects Section
- Featured projects with images
- Project descriptions and tags
- Links to project repositories/demos

### Contact Section
- Contact form for inquiries
- Additional contact information

### Footer
- Additional links and information
- Copyright notice

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Amir P. Adam**
- GitHub: [@amirpadam](https://github.com/amirpadam)
- LinkedIn: [amirpadam](https://linkedin.com/in/amirpadam)
- Twitter: [@amirpadam](https://twitter.com/amirpadam)
- Website: [amirp.netlify.app](https://amirp.netlify.app)
- YouTube: [AmirDevStudio](https://youtube.com/@amirdevstudio-1)

## 🙏 Acknowledgments

- [shadcn-ui](https://ui.shadcn.com/) for the amazing component library
- [Vite](https://vitejs.dev/) for the excellent build tool
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

Made with ❤️ by Amir P. Adam
