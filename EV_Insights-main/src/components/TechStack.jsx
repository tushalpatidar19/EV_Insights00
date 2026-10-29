const TECH = ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Tableau Public', 'GitHub', 'GitHub Pages'];

export default function TechStack() {
  return (
    <section id="tech" className="section alt">
      <div className="wrap">
        <h2>Technologies used</h2>
        <ul className="badges">
          {TECH.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}
