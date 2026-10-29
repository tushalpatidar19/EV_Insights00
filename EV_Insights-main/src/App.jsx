import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Dashboard from './components/Dashboard.jsx';
import Story from './components/Story.jsx';
import AnalyticsFeatures from './components/AnalyticsFeatures.jsx';
import Methodology from './components/Methodology.jsx';
import TechStack from './components/TechStack.jsx';
import Footer from './components/Footer.jsx';

const kpis = [
  { label: 'MFRS', value: '200', color: '#dff1e2' },
  { label: 'EV', value: '17,980', color: '#e1effa' },
  { label: 'SALES', value: '1.55B', color: '#fff0c9' },
  { label: 'RATING', value: '4.09/5', color: '#e0f2ed' },
  { label: 'AVG R.', value: '324.5km', color: '#eee7f8' },
  { label: 'BATT.', value: '78.2kWh', color: '#eaf5d9' },
];

function KPICards() {
  return (
    <section className="kpi-section" aria-label="EV market key performance indicators">
      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <article
            className="kpi-card"
            key={kpi.label}
            style={{ backgroundColor: kpi.color }}
          >
            <div className="kpi-content">
              <span className="kpi-label">{kpi.label}</span>
              <span className="kpi-separator">·</span>
              <strong className="kpi-value">{kpi.value}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <KPICards />
        <Dashboard />
        <Story />
        <AnalyticsFeatures />
        <Methodology />
        <TechStack />
      </main>

      <Footer />
    </>
  );
}