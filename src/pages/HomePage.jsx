import useReveal from '../hooks/useReveal';
import './HomePage.css';

const PROOF = [
  { value: 'NCSSM + College', label: 'Coaching for selective school applications' },
  { value: 'Ivy & Top 20', label: 'Where our consultants were admitted' },
  { value: 'Competitive', label: 'Transparent, inquiry-based pricing' },
];

const FOCUS = [
  'Essay strategy',
  'College application coaching',
  'Activity positioning',
  'One-on-one coaching',
];

const PROCESS = [
  { title: 'Choose a package', text: 'Pick the support level that matches your grade and timeline.' },
  { title: 'Work with a top admit', text: 'Get direct help from someone who just went through the process at a top university.' },
  { title: 'Submit a sharper application', text: 'Leave with clearer essays, stronger prep, and a focused story.' },
];

export default function HomePage({ navigate, bookSession }) {
  useReveal();

  return (
    <div className="page-enter">
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-grid">
            <div>
              <div className="section-label">College & NCSSM admissions coaching</div>
              <h1 className="home-title">Get coached by students who got in.</h1>
              <p className="home-sub">
                Work with Ivy League and top university admits on essays, college applications, NCSSM, and everything in between.
              </p>
              <div className="home-actions">
                <button className="btn-primary" onClick={() => navigate('Pricing')}>View Pricing</button>
                <button className="btn-ghost" onClick={bookSession}>Book a Session</button>
              </div>
            </div>

            <div className="home-panel" aria-label="Admition overview">
              <div className="home-panel-title">What we sharpen</div>
              {FOCUS.map((item) => (
                <div className="focus-row" key={item}>{item}</div>
              ))}
              <div className="home-panel-note">No generic tutoring playbook. Real experience from students who just went through it.</div>
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
          <button className="btn-primary" onClick={bookSession}>Contact the Team</button>
        </div>
      </section>
    </div>
  );
}
