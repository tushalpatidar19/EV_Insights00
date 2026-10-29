export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>Electric Vehicle Market Performance &amp; Insights</h1>
          <p className="lead">
            An interactive look at how electric vehicle manufacturers compare on price, battery
            capacity, driving range and country of origin, built on a published Tableau Public dashboard.
          </p>
          <div className="actions">
            <a className="btn primary" href="#dashboard">Explore Dashboard</a>
            <a className="btn ghost" href="#story">Explore Story</a>
          </div>
        </div>
        <svg className="bolt" viewBox="0 0 200 200" role="img" aria-label="Lightning bolt inside a charge ring">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffb74d" />
              <stop offset="1" stopColor="#f57c00" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="86" fill="none" stroke="#2c2c2c" strokeWidth="10" />
          <circle cx="100" cy="100" r="86" fill="none" stroke="url(#g)" strokeWidth="10" strokeLinecap="round" strokeDasharray="420 540" transform="rotate(-90 100 100)" />
          <path d="M112 32 62 110h34l-8 58 52-82h-36z" fill="url(#g)" />
        </svg>
      </div>
    </section>
  );
}
