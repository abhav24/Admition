import { useRef, useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [page, setPage] = useState('Home');
  const [bookingScrollRequest, setBookingScrollRequest] = useState(0);
  const skipNextTopScroll = useRef(false);

  const navigate = (nextPage) => {
    skipNextTopScroll.current = false;
    setPage(nextPage);
    window.scrollTo(0, 0);
  };

  const bookSession = () => {
    skipNextTopScroll.current = true;
    setPage('About');
    setBookingScrollRequest((request) => request + 1);
  };

  useEffect(() => {
    if (skipNextTopScroll.current && page === 'About') {
      skipNextTopScroll.current = false;
      return;
    }

    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Nav page={page} navigate={navigate} bookSession={bookSession} />
      <main>
        {page === 'Home'     && <HomePage     navigate={navigate} bookSession={bookSession} />}
        {page === 'Services' && <ServicesPage />}
        {page === 'Pricing'  && <PricingPage  bookSession={bookSession} />}
        {page === 'About'    && <AboutPage bookingScrollRequest={bookingScrollRequest} />}
      </main>
      <Footer navigate={navigate} />
    </>
  );
}
