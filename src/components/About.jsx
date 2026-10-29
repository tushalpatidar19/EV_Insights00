const POINTS = [
  ['What it analyzes', 'How electric vehicles compare across manufacturers, prices, battery capacity, driving range and the countries where they are made.'],
  ['Why EV analysis matters', 'Buyers, manufacturers and policymakers make decisions about cost, charging and range. Comparing vehicles side by side makes those trade-offs visible.'],
  ['Why visualize the data', 'Charts reveal patterns, outliers and relationships that are hard to spot in a spreadsheet of rows.'],
  ['How you can use it', 'Filter and hover inside the dashboard to compare manufacturers and vehicle attributes, then follow the story for a guided walkthrough.'],
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <h2>About the project</h2>
        <div className="grid two">
          {POINTS.map(([t, d]) => (
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
