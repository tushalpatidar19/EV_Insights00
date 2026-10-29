import { DASHBOARD } from '../config/tableau.js';

const FEATURES = [
  ['Manufacturer Sales Analysis', 'Compare how manufacturers perform on sales or vehicle volume.'],
  ['EV Pricing Comparison', 'See how prices differ across manufacturers and vehicle types.'],
  ['Country-wise EV Distribution', 'Explore where electric vehicles are made or sold.'],
  ['Battery Capacity Analysis', 'Understand how battery size varies and what it means for range.'],
  ['Driving Range Comparison', 'Compare how far different vehicles travel on a full charge.'],
  ['Manufacturer Distribution', 'View each manufacturer\u2019s share of the vehicles in the data.'],
  ['EV Efficiency Analysis', 'Relate battery capacity to range to judge energy efficiency.'],
];

export default function AnalyticsFeatures() {
  return (
    <section id="features" className="section alt">
      <div className="wrap">
        <h2>Analytics features</h2>
        <p className="muted">
          Each card describes a type of analysis. Open the dashboard to see which are shown and explore them with real data.
        </p>
        <div className="grid three">
          {FEATURES.map(([t, d]) => (
            <article className="card" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
              <a href="#dashboard">View in dashboard</a>
            </article>
          ))}
        </div>
        <p className="muted small">
          Prefer the full Tableau experience?{' '}
          <a href={DASHBOARD.publicUrl} target="_blank" rel="noopener noreferrer">Open it on Tableau Public</a>.
        </p>
      </div>
    </section>
  );
}
