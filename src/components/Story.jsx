import TableauEmbed from './TableauEmbed.jsx';
import { STORY } from '../config/tableau.js';

const THEMES = [
  ['Market growth', 'Look for how vehicle counts or sales change over time and between regions.'],
  ['Manufacturer comparison', 'Compare manufacturers on volume, pricing and range to see who leads on which measure.'],
  ['Battery technology', 'Relate battery capacity and type to driving range and price.'],
  ['Pricing', 'Check how price varies by manufacturer and whether higher prices coincide with longer range.'],
  ['Driving range', 'Compare range across vehicles, and consider efficiency alongside raw range.'],
];

export default function Story() {
  const ready = Boolean(STORY.embedUrl);
  return (
    <section id="story" className="section">
      <div className="wrap">
        <div className="head">
          <div>
            <h2>Tableau story</h2>
            <p className="muted">A guided, step-by-step walk through the EV market analysis.</p>
          </div>
          {STORY.publicUrl && (
            <a className="btn primary" href={STORY.publicUrl} target="_blank" rel="noopener noreferrer">
              Open Story in new tab
            </a>
          )}
        </div>

        {ready ? (
          <TableauEmbed
            title="EV Market Insights story"
            embedUrl={STORY.embedUrl}
            publicUrl={STORY.publicUrl || STORY.embedUrl}
            height={STORY.height}
          />
        ) : (
          <div className="notice" role="note">
            <strong>Story not configured yet.</strong> Paste your published Story URLs into{' '}
            <code>src/config/tableau.js</code> (<code>STORY.publicUrl</code> and <code>STORY.embedUrl</code>) and
            the embed and button will appear here.
          </div>
        )}

        <h3 className="sub">Themes to look for</h3>
        <p className="muted">
          These are general reading prompts, not verified findings. Confirm any conclusion against the
          dashboard and story above.
        </p>
        <div className="grid three">
          {THEMES.map(([t, d]) => (
            <article className="card" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
