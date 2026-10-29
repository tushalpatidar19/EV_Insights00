<<<<<<< HEAD
# EV Insights: Electric Vehicle Market Performance & Insights

A static React + Vite website that presents a published Tableau Public dashboard and story about the electric vehicle market. It needs no backend, database, API keys or paid services, and is deployed with GitHub Pages and GitHub Actions only.

## Features
- Responsive dark theme with mobile menu, active-section highlighting and keyboard-accessible navigation
- Home, About, Dashboard, Story, Analytics features, Methodology, Technologies and Footer sections
- Tableau dashboard embed with loading state, timeout hint and "open in new tab" button
- Tableau story section driven by configuration (no invented URL)
- No fabricated statistics: all numbers live inside your Tableau dashboard

## Technologies
React 18, Vite 5, JavaScript, HTML5, CSS3, Tableau Public, GitHub, GitHub Pages.

## Project structure
```
ev-insights/
├── .github/workflows/deploy.yml   GitHub Pages deployment
├── public/favicon.svg
├── src/
│   ├── components/                Navbar, Hero, About, Dashboard, Story,
│   │                              AnalyticsFeatures, Methodology, TechStack,
│   │                              Footer, TableauEmbed
│   ├── config/tableau.js          Dashboard, Story and repository URLs
│   ├── App.jsx  main.jsx  styles.css
├── index.html  package.json  vite.config.js  .gitignore
```

## Run locally (Windows, macOS, Linux)
1. Install Node.js LTS from https://nodejs.org
2. In the project folder run:
```
npm install
npm run dev
```
3. Open the local URL printed in the terminal (usually http://localhost:5173).

Production build: `npm run build` (output in `dist/`), preview it with `npm run preview`.

## Configure Tableau and your repository
Edit `src/config/tableau.js`:
- `DASHBOARD.publicUrl` / `DASHBOARD.embedUrl`: already set to your published dashboard. If the embed does not load, open the dashboard on Tableau Public, choose **Share**, and copy the link or embed URL into `embedUrl`.
- `STORY.publicUrl` / `STORY.embedUrl`: empty on purpose. Paste your published Story URLs; the embed and button then appear automatically.
- `REPO_URL`: set to `https://github.com/<user>/<repo>` to show the footer GitHub link.

## Deploy to GitHub Pages
1. Push this project to the `main` branch of your repository (see below).
2. In the repository open **Settings > Pages**, and under **Build and deployment** set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` runs on every push to `main`: it installs dependencies, builds, and deploys. Watch progress in the **Actions** tab.
4. Your site will be at `https://<your-username>.github.io/<repository-name>/`.

Vite uses `base: './'`, so asset paths are relative and work under any repository name.

### Upload to GitHub
```
git init
git add .
git commit -m "Add EV Insights website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```
If the repository already has files, copy this project in without overwriting unrelated files, or run `git pull origin main --allow-unrelated-histories` first.

## Known limitations
- Tableau Public decides whether a view can be embedded. Browsers cannot report cross-origin iframe errors, so the site shows a hint after 12 seconds if loading seems slow rather than detecting failure exactly.
- Story embedding needs you to supply the published Story URL.
- The embedded Tableau content is not tested by the build; check it in a browser after deploying.
- The site contains no dataset of its own, so it shows no charts beyond Tableau's.
=======
# EV_Insights
>>>>>>> d92e65b73cbe0d1246c8c9771ad0325ee06c8f10
