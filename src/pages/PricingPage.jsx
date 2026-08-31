import useReveal from '../hooks/useReveal';
import './PricingPage.css';

const PACKAGES = [
  {
    group: 'Grades 7-8',
    name: 'Middle School',
    features: ['4 total sessions', 'Math help', 'Essay help', 'Story curation'],
  },
  {
    group: 'Grades 9-10',
    name: 'Asynchronous',
    features: ['5 essay edits', '2 activity reviews', '3 math prep documents'],
  },
  {
    group: 'Grades 9-10',
    name: 'Guided',
    features: ['4 live sessions', '10 essay edits', '5 activity reviews', '3 math prep documents'],
    featured: true,
  },
  {
    group: 'Grades 9-10',
    name: 'Comprehensive',
    features: ['8 live sessions', 'Unlimited essay edits', 'Unlimited activity reviews', '3 math prep documents'],
  },
];

const ADD_ONS = [
  { name: 'Extra application session', unit: 'per session' },
  { name: 'SAT/ACT tutoring', unit: 'per hour' },
];

function PricingCard({ pkg, onCta }) {
  return (
    <article className={`pricing-card${pkg.featured ? ' featured' : ''}`}>
      <div className="pricing-group">{pkg.group}</div>
      <h2>{pkg.name}</h2>
      <div className="pricing-inquiry">Pricing by inquiry</div>
      <ul>
        {pkg.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      <button className={pkg.featured ? 'btn-primary' : 'btn-ghost'} onClick={onCta}>Get in Touch</button>
    </article>
  );
}

export default function PricingPage({ bookSession }) {
  useReveal();

  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">Pricing</div>
          <h1 className="page-headline">Tailored to your needs.</h1>
          <p className="page-sub">Every student's path is different. Reach out and we'll put together the right plan for your goals and timeline.</p>
        </div>
      </section>

      <section className="pricing-section section">
        <div className="container">
          <div className="pricing-grid">
            {PACKAGES.map((pkg) => (
              <PricingCard key={`${pkg.group}-${pkg.name}`} pkg={pkg} onCta={bookSession} />
            ))}
          </div>

          <div className="addon-row">
            {ADD_ONS.map((addon) => (
              <div className="addon-card" key={addon.name}>
                <div>
                  <h2>{addon.name}</h2>
                  <p>{addon.unit}</p>
                </div>
                <button className="btn-ghost" onClick={bookSession}>Inquire</button>
              </div>
            ))}
          </div>

          <div className="pricing-cta-strip">
            <p>Not sure which package fits? We'll help you figure it out.</p>
            <button className="btn-primary" onClick={bookSession}>Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}
