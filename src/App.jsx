import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Pipeline from './components/home/Pipeline';
import QueryPortal from './components/home/QueryPortal';
import Vault from './components/home/Vault';
import Footer from './components/layout/Footer';

export default function VariomexApp() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-medical-50 text-medical-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Pipeline />
      <QueryPortal />
      <Vault />
      <Footer />
    </div>
  );
}