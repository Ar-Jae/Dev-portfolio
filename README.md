# 🚀 Developer Portfolio

A modern, responsive, and interactive developer portfolio built with **React** and **Tailwind CSS**. This site highlights a chronological journey of your projects, showcases current work, and includes interactive previews, tech filters, testimonials, and a resume placeholder.

## ✨ Features

- Chronologically ordered project showcase
- Screenshots of projects
- Live preview + GitHub repo buttons
- Filter by technology (e.g. React, Node.js)
- Current work highlight at the top
- Experience timeline showing tech progression
- Download Resume (placeholder)

# Developer Portfolio

Modern, modular React developer portfolio built with Vite, framer-motion, and custom CSS. Features:

- ⚡ Modern React + Vite setup
- 🎨 Custom CSS for theme and layout
- 🖼️ Dynamic project showcase with full-screen card layout
- �️ Admin dashboard for adding projects via GitHub URL
- 🌙 Dark mode support
- 📱 Mobile responsive
- 📝 Automated change logging
- 🖼️ Cover image fallback: `/assets/cover.jpg` is used as the main image for all projects, with per-project image as backup

## Folder Structure

```
src/
  components/  # Reusable components
  pages/       # Page components
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
