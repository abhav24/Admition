import useReveal from '../hooks/useReveal';
import './PricingPage.css';

const PACKAGES = [
  {
    group: 'Grades 7-8',
    name: 'Middle School',
    price: '$100',
    features: ['4 total sessions', 'Math help', 'Essay help', 'Story curation'],
  },
  {
    group: 'Grades 9-10',
    name: 'Asynchronous',
    price: '$350',
    features: ['5 essay edits', '2 activity reviews', '3 math prep documents'],
  },
  {
    group: 'Grades 9-10',
    name: 'Guided',
    price: '$1,000',
    features: ['4 live sessions', '10 essay edits', '5 activity reviews', '3 math prep documents'],
    featured: true,
  },
  {
    group: 'Grades 9-10',
    name: 'Comprehensive',
    price: '$2,000',
    features: ['8 live sessions', 'Unlimited essay edits', 'Unlimited activity reviews', '3 math prep documents'],
  },
];

const ADD_ONS = [
  { name: 'Extra application session', price: '$25', unit: 'per session' },
  { name: 'SAT/ACT tutoring', price: '$40', unit: 'per hour' },
];

function PricingCard({ pkg, onCta }) {
  return (
    <article className={`pricing-card${pkg.featured ? ' featured' : ''}`}>
      <div className="pricing-group">{pkg.group}</div>
      <h2>{pkg.name}</h2>
      <div className="pricing-price">{pkg.price}</div>
      <ul>
        {pkg.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      <button className={pkg.featured ? 'btn-primary' : 'btn-ghost'} onClick={onCta}>Get Started</button>
    </article>
  );
}

export default function PricingPage({ setPage }) {
  useReveal();
  const goAbout = () => { setPage('About'); window.scrollTo(0, 0); };

  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">Pricing</div>
          <h1 className="page-headline">Simple packages. Clear scope.</h1>
          <p className="page-sub">Choose the level of help you need now. Add live sessions only when you need them.</p>
        </div>
      </section>

      <section className="pricing-section section">
        <div className="container">
          <div className="pricing-grid">
            {PACKAGES.map((pkg) => (
              <PricingCard key={`${pkg.group}-${pkg.name}`} pkg={pkg} onCta={goAbout} />
            ))}
          </div>

          <div className="addon-row">
            {ADD_ONS.map((addon) => (
              <div className="addon-card" key={addon.name}>
                <div>
                  <h2>{addon.name}</h2>
                  <p>{addon.unit}</p>
                </div>
                <strong>{addon.price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
