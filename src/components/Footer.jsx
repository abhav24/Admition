import './Footer.css';

const SERVICES = [
  'Essay Consultations',
  'Math Test Preparation',
  'Extracurricular Tailoring',
  'One-on-One Sessions',
  'SAT/ACT Tutoring',
  'Public Webinars',
];

export default function Footer({ setPage }) {
  const go = (p) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Adm<span>i</span>tion</div>
            <div className="footer-tagline">
              Competitive admissions via personalized consultation. Built by NCSSM students, for NCSSM applicants.
            </div>
          </div>
          <div>
            <div className="footer-col-title">Pages</div>
            <ul className="footer-links">
              {['Home', 'Services', 'Pricing', 'About'].map(p => (
                <li key={p}><button onClick={() => go(p)}>{p}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              {SERVICES.map(s => (
                <li key={s}><span>{s}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Admition. All rights reserved.</span>
          <span className="footer-ncssm-badge">NCSSM Student Operated</span>
        </div>
      </div>
    </footer>
  );
}
