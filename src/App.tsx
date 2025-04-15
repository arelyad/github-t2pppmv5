import React, { Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Solutions from './components/Solutions';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // ✅ Carga del script del chatbot globalmente
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
      <Footer />

      {/* ✅ Chatbot siempre visible */}
      <div className="fixed bottom-1.5 right-2 z-[9999] chatbot-animate scale-[0.75]">
        <elevenlabs-convai agent-id="RSdNio7xDV4EO2kveC06" />
      </div>
    </div>
  );
}

export default App;
