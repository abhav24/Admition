import './Footer.css';

export default function Footer({ navigate }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Adm<span>i</span>tion</div>
            <div className="footer-tagline">
              College & NCSSM admissions coaching from Ivy League and top university admits.
            </div>
          </div>
          <div>
            <div className="footer-col-title">Pages</div>
            <ul className="footer-links">
              {['Home', 'Services', 'Pricing', 'About'].map(p => (
                <li key={p}><button onClick={() => navigate(p)}>{p}</button></li>
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
