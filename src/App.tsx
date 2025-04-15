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
    <div className="bg-white overflow-x-hidden relative">
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

      {/* ✅ Asegura que el chatbot quede al frente y fuera del flujo principal */}
      <div className="chatbot-animate fixed bottom-2 right-2 z-[9999] scale-[0.75]">
        <elevenlabs-convai agent-id="RSdNio7xDV4EO2kveC06" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
