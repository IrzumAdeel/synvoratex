import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import useScrollProgress from './hooks/useScrollProgress';
import useSmoothAnchorScroll from './hooks/useSmoothAnchorScroll';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default function App() {
  const { barRef, scrolled } = useScrollProgress();
  const { pathname, hash } = useLocation();
  useSmoothAnchorScroll();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return (
    <>
      <div id="scroll-progress" ref={barRef} />
      <Navbar scrolled={scrolled} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
