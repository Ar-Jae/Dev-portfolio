
# 🚀 Developer Portfolio

A modern, modular, and fully responsive developer portfolio built with **React**, **Vite**, **framer-motion**, and **custom CSS** (no Tailwind). This site highlights your projects, experience, and skills, with interactive previews, tech filters, and a dynamic admin dashboard for project management.

## ✨ Features

- Chronological project showcase with screenshots
- Live preview + GitHub repo buttons
- Filter by technology (React, Node.js, etc.)
- Experience timeline showing tech progression
- Download Resume (placeholder)
- Reusable Navbar component on all pages
- About and Experience pages for personal/professional info
- Full-screen card layout for all main sections
- Dynamic project management via Admin Dashboard (add projects by GitHub URL)
- Cover image fallback: `/assets/cover.jpg` used for all projects
- Mobile-optimized and responsive design
- framer-motion for smooth animations
- Custom CSS for theme and layout (no Tailwind)
- Dark mode support

## 🗂️ Folder Structure

```
src/
  components/  # Reusable components (Navbar, TechFilter, ResumeDownload, etc.)
  pages/       # Page components (Home, About, Experience, Projects, Contact, AdminDashboard)
  assets/      # Images, icons, etc.
  data/        # Static data (e.g., project info)
  styles/      # Custom styles (homepage.css, etc.)
public/       # Public assets
.github/      # GitHub-related files (e.g., workflows)
```

## ⚡ Setup

1. Clone the repo
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Replace images in `src/assets/` or `public/assets/` as needed

## �️ Project Management

- Add new projects via the Admin Dashboard by pasting a GitHub repo URL
- Projects use `/assets/cover.jpg` as the main image, with per-project image fallback

## 📝 Logging

- All code changes are tracked in `CHANGELOG.md`

## 🤝 Contributing

Pull requests and suggestions are welcome! Please open an issue or PR for improvements.

## 📄 License

MIT


## Folder Structure

```
src/
  components/  # Reusable components (Navbar, ProjectShowcase, etc.)
  pages/       # Page components (Home, About, Experience, Projects, Contact, AdminDashboard)
  assets/      # Images, icons, etc.
  data/        # Static data (e.g., project info)
  styles/      # Custom styles (if any)
public/       # Public assets
.github/      # GitHub-related files (e.g., workflows)
```

## Setup

1. Clone the repo
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Replace images in `src/assets/` or `public/assets/` as needed

## Project Management

- Add new projects via the Admin Dashboard by pasting a GitHub repo URL
- Projects use `/assets/cover.jpg` as the main image, with per-project image fallback

## Logging

- All code changes are tracked in `log.md` via `log-watcher.js`

## License

MIT
