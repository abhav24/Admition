import useReveal from '../hooks/useReveal';
import './ServicesPage.css';

const SERVICES = [
  {
    title: 'Essay review',
    line: 'Sharper structure, clearer voice, and final polish.',
    items: ['Strategy session', 'Written edits', 'Final proofread'],
  },
  {
    title: 'Math prep',
    line: 'Focused practice for the NCSSM math entrance exam.',
    items: ['Prep documents', 'Problem review', 'Reasoning practice'],
  },
  {
    title: 'Activity strategy',
    line: 'A stronger activities list built around depth and fit.',
    items: ['Activity review', 'Description edits', 'Positioning advice'],
  },
  {
    title: 'One-on-one coaching',
    line: 'Direct application help from a current NCSSM student.',
    items: ['Live sessions', 'Action steps', 'Flexible topics'],
  },
  {
    title: 'SAT/ACT tutoring',
    line: 'Hourly test support for broader academic preparation.',
    items: ['Diagnostics', 'Custom plan', 'Hourly tutoring'],
  },
  {
    title: 'Webinars',
    line: 'Group sessions for families who want the admissions overview.',
    items: ['Live Q&A', 'Topic sessions', 'Replay access'],
  },
];

export default function ServicesPage() {
  useReveal();

  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">Services</div>
          <h1 className="page-headline">Pick the help your application actually needs.</h1>
          <p className="page-sub">Every service is practical, specific, and tied to one part of the NCSSM application.</p>
        </div>
      </section>

      <section className="services-list section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((service) => (
              <article className="service-card" key={service.title}>
                <h2>{service.title}</h2>
                <p>{service.line}</p>
                <ul>
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
