const STEPS = [
  ['Data collection', 'Gather an EV dataset from a documented source.'],
  ['Data preparation', 'Clean missing values, duplicates and inconsistent formats.'],
  ['Exploratory analysis', 'Profile distributions and relationships between fields.'],
  ['Data visualization', 'Choose chart types that suit each question.'],
  ['Dashboard development', 'Combine charts and filters into an interactive Tableau dashboard.'],
  ['Story creation', 'Sequence key views into a guided Tableau story.'],
  ['Web integration', 'Embed the dashboard and story in this React website.'],
  ['Testing and documentation', 'Check responsiveness and embeds, then document the project.'],
];

export default function Methodology() {
  return (
    <section id="methodology" className="section">
      <div className="wrap">
        <h2>Methodology</h2>
        <p className="muted">The general workflow this project follows, from raw data to a published website.</p>
        <ol className="steps">
          {STEPS.map(([t, d]) => (
            <li key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
