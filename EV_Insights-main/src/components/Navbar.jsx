import { useEffect, useState } from 'react';

const LINKS = [
  ['home', 'Home'],
  ['about', 'About'],
  ['dashboard', 'Dashboard'],
  ['story', 'Story'],
  ['features', 'Analytics'],
  ['methodology', 'Methodology'],
  ['tech', 'Technologies'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    LINKS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <svg width="22" height="22" viewBox="0 0 64 64" aria-hidden="true"><path d="M36 6 16 36h13l-4 22 23-32H34z" fill="currentColor" /></svg>
          EV Insights
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav-links" className={open ? 'open' : ''} aria-label="Primary">
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
