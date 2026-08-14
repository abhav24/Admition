import { useState, useEffect } from 'react';
import './Nav.css';

const LINKS = ['Home', 'Services', 'Pricing', 'About'];

export default function Nav({ page, navigate, bookSession }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <button className="nav-logo" onClick={() => navigate('Home')}>
        Adm<span>i</span>tion
      </button>
      <div className="nav-links">
        {LINKS.map(l => (
          <button
            key={l}
            className={`nav-link ${page === l ? 'active' : ''}`}
            onClick={() => navigate(l)}
          >
            {l}
          </button>
        ))}
        <button className="nav-cta" onClick={bookSession}>
          Book a Session
        </button>
      </div>
    </nav>
  );
}
