import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Solutions from './components/Solutions';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Suspense fallback={<div>Cargando...</div>}>
          <Hero />
          <Services />
          <Features />
          <Solutions />
          <CTA />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;