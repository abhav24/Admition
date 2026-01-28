import useReveal from '../hooks/useReveal';
import './PricingPage.css';

const HS_TIERS = [
  {
    name: 'Tier 1 — Asynchronous',
    price: '$350',
    period: 'One-time package',
    features: ['Fully asynchronous support', '5 Essay Edits', '2 Extracurricular Reviews', '3 Math Prep Documents'],
    featured: false,
  },
  {
    name: 'Tier 2 — Guided',
    price: '$1,000',
    period: 'One-time package',
    features: ['4 One-on-One Sessions', '10 Essay Edits', '5 Extracurricular Reviews', '3 Math Prep Documents', '$25/hour additional sessions'],
    featured: true,
  },
  {
    name: 'Tier 3 — Comprehensive',
    price: '$2,000',
    period: 'One-time package',
    features: ['8 One-on-One Sessions', 'Unlimited Essay Edits', 'Unlimited Extracurricular Reviews', '3 Math Prep Documents', '$25/hour additional sessions'],
    featured: false,
  },
];

function PricingCard({ tier, onCta }) {
  return (
    <div className={`pricing-card${tier.featured ? ' featured' : ''}`}>
      {tier.featured && <div className="pricing-popular">Most Popular</div>}
      <div className="pricing-card-name">{tier.name}</div>
      <div className="pricing-price">{tier.price}</div>
      <div className="pricing-period">{tier.period}</div>
      <ul className="pricing-features">
        {tier.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <button className="pricing-cta-btn" onClick={onCta}>Get Started</button>
    </div>
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
          <h1 className="page-headline reveal">Transparent pricing, <em>real results.</em></h1>
          <p className="page-sub reveal">
            Flexible tiers designed for every stage of the journey — from middle school through high school application season.
          </p>
        </div>
      </section>

      <div className="pricing-section">
        <div className="container">

          {/* Middle School */}
          <div className="pricing-tier-label reveal">
            <span className="tier-badge">Grades 7–8</span>
            Middle School Package
          </div>
          <div className="pricing-grid ms-grid reveal">
            <div className="pricing-card">
              <div className="pricing-card-name">Core Package</div>
              <div className="pricing-price">$100</div>
              <div className="pricing-period">One-time package</div>
              <ul className="pricing-features">
                <li>2 Math One-on-One Sessions</li>
                <li>1 Essay Help Session</li>
                <li>1 Story Curation Session</li>
                <li>4 Sessions Total</li>
                <li>$25 per additional session</li>
              </ul>
              <button className="pricing-cta-btn" onClick={goAbout}>Get Started</button>
            </div>
            <div className="pricing-card addon-card">
              <div className="addon-label">Additional Sessions</div>
              <div className="addon-price">$25</div>
              <div className="addon-period">per session</div>
            </div>
          </div>
          <div className="pricing-note reveal">
            <strong>Continuing discount:</strong> Students who continue into high school tiers receive $150 off Tier 2 or $300 off Tier 3.
          </div>

          {/* High School */}
          <div className="pricing-tier-label reveal" style={{ marginTop: '64px' }}>
            <span className="tier-badge">Grades 9–10</span>
            High School Packages
          </div>
          <div className="pricing-grid hs-grid reveal">
            {HS_TIERS.map((tier, i) => (
              <PricingCard key={i} tier={tier} onCta={goAbout} />
            ))}
          </div>

          {/* SAT/ACT */}
          <div style={{ marginTop: '64px' }}>
            <div className="pricing-tier-label reveal">
              <span className="tier-badge">Add-On</span>
              SAT / ACT Tutoring
            </div>
            <div className="pricing-grid sat-grid reveal">
              <div className="pricing-card">
                <div className="pricing-card-name">Tutoring Sessions</div>
                <div className="pricing-price">$40</div>
                <div className="pricing-period">per hour</div>
                <ul className="pricing-features">
                  <li>Flexible scheduling</li>
                  <li>Virtual sessions</li>
                  <li>Customized per student</li>
                  <li>Diagnostic assessment included</li>
                </ul>
                <button className="pricing-cta-btn" onClick={goAbout}>Book a Session</button>
              </div>
            </div>
          </div>

          <div className="pricing-note reveal" style={{ marginTop: '32px' }}>
            <strong>Note:</strong> All services are delivered by current NCSSM students with verified admissions experience. Pricing reflects the depth of support provided and is competitive with any existing alternative.
          </div>
        </div>
      </div>
    </div>
  );
}
