import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [page, setPage] = useState('Home');

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <main>
        {page === 'Home'     && <HomePage     setPage={setPage} />}
        {page === 'Services' && <ServicesPage />}
        {page === 'Pricing'  && <PricingPage  setPage={setPage} />}
        {page === 'About'    && <AboutPage />}
      </main>
      <Footer setPage={setPage} />
    </>
  );
}
