# EV Insights: Electric Vehicle Market Performance & Insights

A static React + Vite website presenting a published Tableau Public dashboard and story about the electric vehicle market. It needs no backend, database, API keys, or paid services, and can be deployed with GitHub Pages and GitHub Actions.

## Features

- Responsive dark theme with mobile menu, active-section highlighting, and keyboard-accessible navigation
- Home, About, Dashboard, Story, Analytics features, Methodology, Technologies, and Footer sections
- Tableau dashboard embed with loading state, timeout hint, and an "open in new tab" button
- Tableau story section driven by configuration
- No fabricated statistics: all numbers live inside the Tableau dashboard

## Technologies

React 18, Vite 5, JavaScript, HTML5, CSS3, Tableau Public, GitHub, and GitHub Pages.

## Run locally

Install Node.js LTS, then run these commands from the project directory:

```sh
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).
Run `npm run build` to create a production build in `dist/`, or `npm run preview`
to preview it locally.

## Configure Tableau

Edit `src/config/tableau.js`:

- `DASHBOARD.publicUrl` and `DASHBOARD.embedUrl` point to the published dashboard. If the embed does not load, copy the link or embed URL from Tableau Public's **Share** menu.
- `STORY.publicUrl` and `STORY.embedUrl` are empty until you publish a story. Add its URLs to show the story embed and button.
- `REPO_URL` controls the GitHub link shown in the footer.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on pushes to
`main`. In the repository, open **Settings > Pages** and set **Build and
deployment > Source** to **GitHub Actions**. Watch deployment progress in the
**Actions** tab. The site URL is
`https://<your-username>.github.io/<repository-name>/`.

Vite uses a relative base path so asset URLs work under a repository subpath.

To push future changes from this checkout:

```sh
git add .
git commit -m "Describe your changes"
git push origin main
```

## Known limitations

- Tableau Public decides whether a view can be embedded. Browsers cannot report cross-origin iframe errors, so the site shows a hint after 12 seconds if loading seems slow rather than detecting failure exactly.
- Story embedding requires the published Story URL.
- The embedded Tableau content is not tested by the build; check it in a browser after deploying.
- The site contains no dataset of its own, so it shows no charts beyond Tableau's.
