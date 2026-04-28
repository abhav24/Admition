import useReveal from '../hooks/useReveal';
import './HomePage.css';

const FEATURES = [
  { n: '01', title: 'Created by students, for students', desc: 'Our team are active NCSSM students who recently navigated the same application process. We know what works.' },
  { n: '02', title: 'Structured yet personal', desc: 'Every student gets a tailored plan. We combine proven frameworks with individual story development and strengths.' },
  { n: '03', title: 'Verifiable results', desc: 'Real accepted students. Documented outcomes. We stand behind every service we offer with transparent results.' },
];

const STATS = [
  { num: '100%', label: 'Acceptance rate among coached students' },
  { num: '6',    label: 'Distinct services tailored to your stage' },
  { num: '4',    label: 'Active NCSSM students on your team' },
  { num: '$100', label: 'Starting price for middle school package' },
];

const PROCESS = [
  { n: '01', title: 'Choose Your Tier', desc: 'Select the package that fits your grade level and goals — from async essay edits to full one-on-one coaching.' },
  { n: '02', title: 'Meet Your Consultant', desc: "You're matched with an NCSSM student who navigated the same process and understands what it takes." },
  { n: '03', title: 'Build Your Application', desc: 'We work through your essays, extracurriculars, math prep, and story — iteratively and on your timeline.' },
  { n: '04', title: 'Submit with Confidence', desc: 'Walk into submission day knowing your application is polished, authentic, and positioned to stand out.' },
];

const WHY_ITEMS = [
  "Deep insider knowledge of NCSSM's specific admissions process",
  'Structured, documented approach — not ad-hoc advice',
  'One-on-one time with your dedicated consultant',
  'Math test preparation specific to the NCSSM exam',
  'Essay and extracurricular strategy built around your story',
];

const SERVICES_PREVIEW = [
  { title: 'Essay Consultations',     desc: 'Expert editing and strategy for the NCSSM application essays. We help you find and articulate your authentic story.' },
  { title: 'Math Test Preparation',   desc: 'Targeted prep documents and sessions for the NCSSM entrance math examination.' },
  { title: 'Extracurricular Tailoring', desc: 'Position your activities to align with what NCSSM values most. Quality over quantity, intentionally framed.' },
  { title: 'One-on-One Sessions',     desc: 'Direct time with an NCSSM student consultant, focused entirely on your application.' },
  { title: 'SAT/ACT Tutoring',        desc: 'Flexible hourly tutoring sessions to boost your standardized test scores.' },
  { title: 'Public Webinars',         desc: 'Group sessions covering the NCSSM application landscape, tips, and Q&A with our team.' },
];

const MARQUEE_ITEMS = [
  'Essay Consultations',
  'Math Test Preparation',
  'Extracurricular Tailoring',
  'One-on-One Sessions',
  'SAT/ACT Tutoring',
  'Public Webinars',
  'Story Curation',
];

export default function HomePage({ setPage }) {
  useReveal();
  const go = (p) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-bg-fade" />
        <div className="hero-inner">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Now accepting 2025–26 applications
            </div>
            <div className="hero-eyebrow">NCSSM Admissions Specialists</div>
            <h1 className="hero-headline">
              Your path to <em>NCSSM</em> starts here.
            </h1>
            <p className="hero-sub">
              Personalized coaching, proven strategies, and guidance from students who've been exactly where you are. We know the process — because we lived it.
            </p>
            <div className="hero-actions">
              <button className="btn-primary glow-primary" onClick={() => go('Services')}>
                Explore Services
              </button>
              <button className="btn-ghost" onClick={() => go('Pricing')}>
                View Pricing
              </button>
            </div>
          </div>
          <div className="hero-sidebar">
            {[
              { num: '100%', label: 'Acceptance rate among coached students' },
              { num: '7–10', label: 'Grades we serve — start early, go far' },
              { num: '4',    label: 'Active NCSSM students on your team' },
            ].map((s, i) => (
              <div key={i} className="hero-stat">
                <div className="hero-stat-num">{s.num}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-divider" />
      </section>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[0, 1].map(pass => (
            <span key={pass}>
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={i}>
                  <span className="marquee-item">{item}</span>
                  <span className="marquee-dot" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="features-section">
        <div className="container-wide">
          <div className="section-label reveal">What sets us apart</div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={f.n} className={`feature-item reveal reveal-delay-${i + 1}`}>
                <div className="feature-deco-num">{f.n}</div>
                <div className="feature-num">{f.n}</div>
                <div className="feature-title">{f.title}</div>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat Band */}
      <section className="stat-band">
        <div className="container-wide">
          <div className="stat-band-inner">
            {STATS.map((s, i) => (
              <div key={i} className={`stat-band-item reveal reveal-delay-${i + 1}`}>
                <div className="stat-band-num">{s.num}</div>
                <div className="stat-band-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="container-wide">
          <div className="section-label reveal">How It Works</div>
          <h2 className="section-headline reveal">
            Four steps to your <em style={{ fontStyle: 'italic', color: 'var(--green)' }}>acceptance letter.</em>
          </h2>
          <div className="process-steps">
            {PROCESS.map((step, i) => (
              <div key={i} className={`process-step reveal reveal-delay-${i + 1}`}>
                <div className="process-dot">
                  <span className="process-dot-num">{step.n}</span>
                </div>
                <div className="process-step-title">{step.title}</div>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="quote-section">
        <div className="container">
          <p className="quote-text reveal">
            "The difference between a good application and a great one isn't talent — it's knowing exactly what the reader is looking for."
          </p>
          <div className="quote-attr reveal">The Admition Team — Current NCSSM Students</div>
        </div>
      </section>

      {/* Why us */}
      <section className="why-section">
        <div className="container">
          <div className="why-inner">
            <div>
              <h2 className="why-headline reveal">
                Why <em>Admition</em> outperforms the alternatives.
              </h2>
            </div>
            <div>
              <p className="why-body reveal">
                Existing options — EduAvenues, QuadEducation, or asking a friend who goes to NCSSM — all have serious gaps. Generic tutoring firms don't know NCSSM's unique criteria. Random student referrals give inconsistent, unstructured advice.
              </p>
              <ul className="why-list">
                {WHY_ITEMS.map((item, i) => (
                  <li key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                    <span className="why-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container-wide">
          <div className="services-header">
            <div>
              <div className="section-label reveal">Our Services</div>
              <h2 className="section-headline reveal">
                Everything you need to <em style={{ fontStyle: 'italic', color: 'var(--green)' }}>get in.</em>
              </h2>
            </div>
            <button className="btn-ghost reveal" onClick={() => go('Services')}>
              All Services →
            </button>
          </div>
          <div className="services-grid">
            {SERVICES_PREVIEW.map((s, i) => (
              <div key={i} className={`service-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="service-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="service-card-title">{s.title}</div>
                <p className="service-card-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 className="cta-headline">Ready to start your NCSSM journey?</h2>
              <p className="cta-sub">Applications open annually. Start early — preparation makes the difference.</p>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexShrink: 0 }}>
              <button className="btn-primary glow-primary" onClick={() => go('Pricing')}>
                See Pricing
              </button>
              <button className="btn-ghost" onClick={() => go('About')}>
                Meet the Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
