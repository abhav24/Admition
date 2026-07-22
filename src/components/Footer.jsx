import './Footer.css';

export default function Footer({ setPage }) {
  const go = (p) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Adm<span>i</span>tion</div>
            <div className="footer-tagline">
              NCSSM admissions coaching from current NCSSM students.
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
        </div>
        <div className="footer-bottom">
          <span>© 2026 Admition. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
