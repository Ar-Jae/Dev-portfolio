

# 🚀 Developer Portfolio

A modern, modular, and fully responsive developer portfolio built with **React**, **Vite**, **framer-motion**, and **Tailwind CSS**. This site highlights your projects, experience, and skills, with interactive previews, tech filters, and a dynamic admin dashboard for project management.

## ✨ Features

- Chronological project showcase with screenshots
- Live preview + GitHub repo buttons
- Filter by technology (React, Node.js, etc.)
- Experience timeline showing tech progression
- Download Resume (PDF download)
- Reusable Navbar component on all pages
- About and Experience pages for personal/professional info
- Full-screen card layout for all main sections
- Dynamic project management via Admin Dashboard (add projects by GitHub URL)
- Cover image fallback: `/assets/cover.jpg` used for all projects
- Mobile-optimized and responsive design
- framer-motion for smooth animations
- Tailwind CSS for theme and layout
- Dark mode support


## 🗂️ Folder Structure

```
src/
  components/  # Reusable components (Navbar, ProjectShowcase, TechFilter, ResumeDownload, EditModal, etc.)
  pages/       # Page components (Home, About, Experience, Projects, Contact, AdminDashboard)
  assets/      # Images, icons, etc.
  data/        # Static data (e.g., project info)
  styles/      # Custom styles (if any)
public/       # Public assets
.github/      # GitHub-related files (e.g., workflows)
```


## ⚡ Setup

1. Clone the repo
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Replace images in `src/assets/` or `public/assets/` as needed

## 🚢 Deployment

This project uses Vite for fast builds and Tailwind CSS for styling. To deploy:

1. Build the production bundle:
   ```sh
   npm run build
   ```
2. Preview the production build locally:
   ```sh
   npm run preview
   ```
3. Deploy the contents of the `dist/` folder to your static hosting provider (e.g., Vercel, Netlify, GitHub Pages).

### Example: Deploy to Vercel

- Push your code to GitHub
- Import your repo in Vercel
- Vercel will auto-detect Vite and deploy

### Example: Deploy to Netlify

- Push your code to GitHub
- Import your repo in Netlify
- Set build command: `npm run build`
- Set publish directory: `dist`

For more details, see the Vite and Tailwind CSS documentation.

## 🛠️ Project Management

- Add new projects via the Admin Dashboard by pasting a GitHub repo URL
- Bulk add multiple projects at once
- Edit and delete projects with modals
- Projects use `/assets/cover.jpg` as the main image, with per-project image fallback


## 📝 Logging

- All code changes are tracked in `CHANGELOG.md`


## 🤝 Contributing

Pull requests and suggestions are welcome! Please open an issue or PR for improvements.


## 📄 License

MIT


