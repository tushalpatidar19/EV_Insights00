import { REPO_URL } from '../config/tableau.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div>
          <strong>EV Insights</strong>
          <p className="muted">Electric Vehicle Market Performance &amp; Insights</p>
          <p className="muted small">&copy; {new Date().getFullYear()} EV Insights. College project.</p>
        </div>
        <div className="foot-links">
          {REPO_URL && (
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">GitHub repository</a>
          )}
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
