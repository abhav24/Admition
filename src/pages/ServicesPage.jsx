import useReveal from '../hooks/useReveal';
import './ServicesPage.css';

const SERVICES = [
  {
    tag: 'Core Service',
    title: 'Essay Consultations',
    body: 'Your personal statement and short essays are the centerpiece of your NCSSM application. Our consultants provide deep, iterative feedback that preserves your voice while sharpening clarity, narrative arc, and intellectual curiosity.',
    items: ['Initial essay strategy session', 'Multiple rounds of written feedback', 'Voice preservation approach', 'Final polish and proofreading'],
  },
  {
    tag: 'Core Service',
    title: 'Math Test Preparation',
    body: "NCSSM's math entrance exam tests problem-solving ability and mathematical maturity beyond the standard curriculum. Our prep documents and sessions are tailored specifically to this exam format.",
    items: ['3 comprehensive preparation documents included in most tiers', 'Problem-set-based approach', 'Focus on mathematical reasoning and proof', 'Aligned to actual NCSSM exam difficulty'],
  },
  {
    tag: 'Core Service',
    title: 'Extracurricular Tailoring',
    body: "NCSSM doesn't want a laundry list. Admissions readers look for depth, leadership, and intellectual curiosity. We help you curate, frame, and articulate your activities in a way that resonates.",
    items: ['Activity list review and prioritization', 'Description rewriting and polishing', 'Gap identification and suggestions', 'Leadership narrative development'],
  },
  {
    tag: 'Core Service',
    title: 'One-on-One Sessions',
    body: 'Direct, focused time with your NCSSM student consultant. Sessions cover anything you need — from initial strategy to essay review to mock interviews and final application walkthrough.',
    items: ['Flexible scheduling around your calendar', 'Session summaries and action items provided', 'Available as standalone or within a tier', '$25/hour for additional sessions'],
  },
  {
    tag: 'Supplemental',
    title: 'SAT/ACT Tutoring',
    body: "While NCSSM doesn't require SAT/ACT scores, strong standardized test performance strengthens your broader academic profile and college readiness. Our tutoring targets your weak areas efficiently.",
    items: ['Diagnostic assessment to identify weak points', 'Customized study plan per student', '$40 per hour session', 'Flexible scheduling, virtual or hybrid'],
  },
  {
    tag: 'Supplemental',
    title: 'Public Webinars',
    body: 'Group sessions open to all prospective applicants. Topics include NCSSM admissions overview, essay tips, math prep strategies, and live Q&A with our consultant team.',
    items: ['Live webinars hosted periodically', 'Recorded replays provided', 'Q&A with NCSSM students', 'Free or low-cost access'],
  },
];

export default function ServicesPage() {
  useReveal();
  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">Our Services</div>
          <h1 className="page-headline reveal">
            Comprehensive support for every stage of your <em>application.</em>
          </h1>
          <p className="page-sub reveal">
            From essay strategy to math prep, we cover every dimension of the NCSSM application — structured, personalized, and proven.
          </p>
        </div>
      </section>

      <div className="services-full">
        <div className="container">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-row reveal">
              <div className="service-row-label">
                <div className="service-row-tag">{s.tag}</div>
                <div>{s.title}</div>
              </div>
              <div>
                <p className="service-row-content">{s.body}</p>
                <ul className="service-list">
                  {s.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
