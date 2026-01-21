import { useState, useEffect } from 'react';
import './Nav.css';

const LINKS = ['Home', 'Services', 'Pricing', 'About'];

export default function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const go = (p) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <button className="nav-logo" onClick={() => go('Home')}>
        Adm<span>i</span>tion
      </button>
      <div className="nav-links">
        {LINKS.map(l => (
          <button
            key={l}
            className={`nav-link ${page === l ? 'active' : ''}`}
            onClick={() => go(l)}
          >
            {l}
          </button>
        ))}
        <button className="nav-cta" onClick={() => go('About')}>
          Book a Session
        </button>
      </div>
    </nav>
  );
}
