import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import './AboutPage.css';

const TEAM = [
  { name: 'Aarush Jugdar',        role: 'Co-Founder', bio: 'Current NCSSM student with deep expertise in the math examination and application strategy.' },
  { name: 'Abhav Kunchakuri',     role: 'Co-Founder', bio: 'Specializes in essay development and personal narrative, helping students find their authentic voice.' },
  { name: 'Soham Kela',           role: 'Co-Founder', bio: 'Leads extracurricular strategy and academic positioning for prospective NCSSM applicants.' },
  { name: 'Om Shah',              role: 'Co-Founder', bio: 'Focuses on one-on-one consulting and student coaching throughout the application journey.' },
];

function initials(name) {
  return name.split(' ').map(w => w[0]).join('');
}

export default function AboutPage() {
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', grade: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page-enter">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">About Admition</div>
          <h1 className="page-headline reveal">
            Built by students who know <em>exactly</em> what it takes.
          </h1>
        </div>
      </section>

      {/* Mission */}
      <div className="about-mission">
        <div className="container">
          <div className="about-mission-inner">
            <h2 className="about-mission-headline reveal">
              Our mission is simple: <em>level the playing field.</em>
            </h2>
            <div className="about-mission-body reveal">
              <p>
                Getting into NCSSM — North Carolina School of Science and Mathematics — is one of the most competitive academic achievements a middle or high schooler can pursue. Yet most students approach it with little more than generic advice from well-meaning but uninformed sources.
              </p>
              <p>
                We started Admition because we were those students. We navigated the process, got in, and immediately recognized how much better we could have done it — and how much we could help the next generation do the same.
              </p>
              <p>
                Every consultant on our team is a current NCSSM student. We don't just teach preparation strategies. We know the rubrics, the culture, and the specific qualities admissions readers are looking for — because we're living it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <section className="team-section">
        <div className="container-wide">
          <div className="section-label reveal">The Team</div>
          <h2 className="section-headline reveal">
            Four NCSSM students. <em style={{ fontStyle: 'italic', color: 'var(--green)' }}>One shared goal.</em>
          </h2>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div key={i} className={`team-card reveal reveal-delay-${i + 1}`}>
                <div className="team-photo-placeholder">
                  <div className="team-photo-initials">{initials(m.name)}</div>
                  <div className="team-photo-note">headshot</div>
                </div>
                <div className="team-info">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                  <p className="team-bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-inner">
            <div>
              <div className="section-label reveal">Contact Us</div>
              <h2 className="section-headline reveal" style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>
                Start the conversation.
              </h2>
              <p className="reveal" style={{ marginTop: '20px', fontSize: '17px', color: 'var(--charcoal-3)', lineHeight: 1.75 }}>
                Reach out to discuss which tier is right for your student, ask questions about our services, or book your first session.
              </p>
              <div className="contact-email-block reveal">
                <div className="contact-email-label">Email</div>
                <div className="contact-email">hello@admition.com</div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {sent ? (
                <div className="form-success">
                  <div className="form-success-icon">✓</div>
                  <div className="form-success-title">Message sent</div>
                  <p className="form-success-sub">We'll be in touch within 24–48 hours.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input className="form-input" type="text" placeholder="Your name"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" placeholder="your@email.com"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Grade Level</label>
                    <select className="form-select"
                      value={form.grade} onChange={e => setForm({ ...form, grade: e.target.value })}>
                      <option value="">Select grade</option>
                      <option>Grade 7</option>
                      <option>Grade 8</option>
                      <option>Grade 9</option>
                      <option>Grade 10</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea"
                      placeholder="Tell us about your goals and what service you're interested in..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button className="btn-primary" type="submit" style={{ marginTop: '8px' }}>
                    Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
