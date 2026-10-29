import TableauEmbed from './TableauEmbed.jsx';
import { DASHBOARD } from '../config/tableau.js';

export default function Dashboard() {
  return (
    <section id="dashboard" className="section alt">
      <div className="wrap">
        <div className="head">
          <div>
            <h2>Interactive dashboard</h2>
            <p className="muted">
              The published EV Market Insights dashboard from Tableau Public. All figures come from
              the dashboard itself; this website does not recompute or alter them.
            </p>
          </div>
          <a className="btn primary" href={DASHBOARD.publicUrl} target="_blank" rel="noopener noreferrer">
            Open Dashboard in new tab
          </a>
        </div>
        <TableauEmbed
          title="EV Market Insights dashboard"
          embedUrl={DASHBOARD.embedUrl}
          publicUrl={DASHBOARD.publicUrl}
          height={DASHBOARD.height}
        />
      </div>
    </section>
  );
}
