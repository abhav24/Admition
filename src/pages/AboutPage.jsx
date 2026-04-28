import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import './AboutPage.css';

const TEAM = [
  { name: 'Aarush Jugdar', role: 'Math prep' },
  { name: 'Abhav Kunchakuri', role: 'Essay strategy' },
  { name: 'Soham Kela', role: 'Activity strategy' },
  { name: 'Om Shah', role: 'One-on-one coaching' },
];

function initials(name) {
  return name.split(' ').map((word) => word[0]).join('');
}

export default function AboutPage() {
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', grade: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">About</div>
          <h1 className="page-headline">Current NCSSM students, focused on your application.</h1>
          <p className="page-sub">Meet the team, then send a short note to book a first conversation.</p>
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

      <section className="contact-section section">
        <div className="container">
          <div className="contact-inner">
            <div>
              <div className="section-label">Contact</div>
              <h2>Book a first session.</h2>
              <p>Tell us your grade and what kind of help you need. We will reply within 24-48 hours.</p>
              <a className="contact-email" href="mailto:hello@admition.com">hello@admition.com</a>
            </div>

            <form onSubmit={handleSubmit}>
              {sent ? (
                <div className="form-success" role="status">
                  <h3>Message sent.</h3>
                  <p>We will be in touch within 24-48 hours.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full name</label>
                    <input
                      className="form-input"
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      className="form-input"
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="grade">Grade level</label>
                    <select
                      className="form-select"
                      id="grade"
                      value={form.grade}
                      onChange={(event) => setForm({ ...form, grade: event.target.value })}
                      required
                    >
                      <option value="">Select grade</option>
                      <option>Grade 7</option>
                      <option>Grade 8</option>
                      <option>Grade 9</option>
                      <option>Grade 10</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">What do you need help with?</label>
                    <textarea
                      className="form-textarea"
                      id="message"
                      placeholder="Essays, math prep, activities, tutoring, or a package question."
                      value={form.message}
                      onChange={(event) => setForm({ ...form, message: event.target.value })}
                    />
                  </div>
                  <button className="btn-primary" type="submit">Send Message</button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
