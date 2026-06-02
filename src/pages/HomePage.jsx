import useReveal from '../hooks/useReveal';
import './HomePage.css';

const PROOF = [
  { value: 'Grades 7-10', label: 'Support for middle and high school applicants' },
  { value: '4', label: 'Current NCSSM student consultants' },
  { value: '$100+', label: 'Packages start with focused early prep' },
];

const FOCUS = [
  'Essay strategy',
  'Math test prep',
  'Activity positioning',
  'One-on-one coaching',
];

const PROCESS = [
  { title: 'Choose a package', text: 'Pick the support level that matches your grade and timeline.' },
  { title: 'Work with a student consultant', text: 'Get direct help from someone inside NCSSM.' },
  { title: 'Submit a sharper application', text: 'Leave with clearer essays, stronger prep, and a focused story.' },
];

export default function HomePage({ setPage }) {
  useReveal();
  const go = (p) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <div className="page-enter">
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-grid">
            <div>
              <div className="section-label">NCSSM admissions coaching</div>
              <h1 className="home-title">Clear, direct help for your NCSSM application.</h1>
              <p className="home-sub">
                Work with current NCSSM students on essays, math prep, activities, and application strategy.
              </p>
              <div className="home-actions">
                <button className="btn-primary" onClick={() => go('Pricing')}>View Pricing</button>
                <button className="btn-ghost" onClick={() => go('About')}>Book a Session</button>
              </div>
            </div>

            <div className="home-panel" aria-label="Admition overview">
              <div className="home-panel-title">What we sharpen</div>
              {FOCUS.map((item) => (
                <div className="focus-row" key={item}>{item}</div>
              ))}
              <div className="home-panel-note">No generic tutoring playbook. Just the application pieces that matter.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container">
          <div className="proof-grid">
            {PROOF.map((item) => (
              <div className="proof-item" key={item.value}>
                <div className="proof-value">{item.value}</div>
                <div className="proof-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">How it works</div>
          <div className="process-grid">
            {PROCESS.map((step, index) => (
              <div className="process-card" key={step.title}>
                <div className="process-index">{index + 1}</div>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-cta">
        <div className="container">
          <h2>Ready to start?</h2>
          <button className="btn-primary" onClick={() => go('About')}>Contact the Team</button>
        </div>
      </section>
    </div>
  );
}
