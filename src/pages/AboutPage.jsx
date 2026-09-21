import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';
import './AboutPage.css';

const ZCAL_URL = 'https://zcal.co/i/8pOqM5eC?embed=1&embedType=iframe';

const TEAM = [
  { name: 'Aarush Jugdar', role: 'Math prep' },
  { name: 'Abhav Kunchakuri', role: 'Essay strategy' },
  { name: 'Soham Kela', role: 'Activity strategy' },
  { name: 'Om Shah', role: 'One-on-one coaching' },
];

function initials(name) {
  return name.split(' ').map((word) => word[0]).join('');
}

export default function AboutPage({ bookingScrollRequest }) {
  useReveal();
  const bookingRef = useRef(null);

  useEffect(() => {
    if (bookingScrollRequest) {
      const frame = requestAnimationFrame(() => {
        bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(frame);
    }
    return undefined;
  }, [bookingScrollRequest]);


  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">About</div>
          <h1 className="page-headline">Current NCSSM students, focused on your application.</h1>
          <p className="page-sub">Meet the team, then book a free consultation to get started.</p>
        </div>
      </section>

      <section className="team-section section">
        <div className="container">
          <div className="team-grid">
            {TEAM.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-initials" aria-hidden="true">{initials(member.name)}</div>
                <div>
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="book-session" ref={bookingRef} className="contact-section section">
        <div className="container">
          <div className="contact-header">
            <div className="section-label">Book a Session</div>
            <h2>Schedule a free consultation.</h2>
            <p>Pick a time that works for you. We'll talk through your goals and put together the right plan.</p>
          </div>
          <div className="zcal-wrapper">
            <iframe
              src={ZCAL_URL}
              title="Book a free Admition consultation"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
