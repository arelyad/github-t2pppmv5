import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// ✅ IMPORTACIÓN CORRECTA DE ÍCONOS
import iconoMarketing from '../assets/icono-marketing.jpg';
import iconoSoluciones from '../assets/icono-soluciones.jpg';
import iconoChatbot from '../assets/icono-chatbot.jpg';
import iconoCRM from '../assets/icono-crm.jpg';

const Hero = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative bg-white pt-28 pb-32 md:pt-32 md:pb-40">
      {/* Carrusel de íconos */}
      <div className="-mt-4 mb-6 overflow-hidden w-full">
        <div className="animate-slide-icons flex whitespace-nowrap gap-16 items-center justify-center">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-3 min-w-max transform transition-transform duration-300 hover:scale-110">
                <img src={iconoMarketing} alt="Marketing" className="h-9 w-auto" />
                <p className="text-sm text-athenia-400">Marketing Digital con IA</p>
              </div>
              <div className="flex items-center gap-3 min-w-max transform transition-transform duration-300 hover:scale-110">
                <img src={iconoSoluciones} alt="Soluciones" className="h-9 w-auto" />
                <p className="text-sm text-athenia-400">Soluciones con Inteligencia Artificial</p>
              </div>
              <div className="flex items-center gap-3 min-w-max transform transition-transform duration-300 hover:scale-110">
                <img src={iconoChatbot} alt="Chatbots" className="h-9 w-auto" />
                <p className="text-sm text-athenia-400">Chatbots que atienden a tus clientes 24/7</p>
              </div>
              <div className="flex items-center gap-3 min-w-max transform transition-transform duration-300 hover:scale-110">
                <img src={iconoCRM} alt="CRM" className="h-9 w-auto" />
                <p className="text-sm text-athenia-400">CRM que aprende de cada interacción</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-[1300px] mx-auto px-6 grid md:grid-cols-12 gap-12 items-start mt-10 md:mt-16">
        {/* Video */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-md aspect-[4/3] mx-auto">
            <video
              src="/VideoAthenIA_Hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Texto principal */}
        <motion.div
          className="md:col-span-7 flex flex-col justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="transition-all duration-300 ease-in-out hover:scale-[1.015] mx-auto md:mx-0">
            <p className="text-athenia-400 text-lg md:text-xl text-center mb-6 bg-gradient-to-r from-white to-athenia-50 p-4 rounded-md shadow-sm">
              En <strong>AthenAI</strong>, llevamos la inteligencia artificial a tu alcance, sin complicaciones.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10 text-sm">
            <div className="p-3 border-l-4 border-[#4BA3C7] hover:scale-[1.02] transition-transform duration-300">
              <h3 className="font-semibold text-athenia-400 mb-1">Accesibilidad Universal</h3>
              <p className="text-athenia-300/90 text-justify">
                IA para cualquier empresa, sin importar su tamaño o sector.
              </p>
            </div>
            <div className="p-3 border-l-4 border-[#355D91] hover:scale-[1.02] transition-transform duration-300">
              <h3 className="font-semibold text-athenia-400 mb-1">Simplificación Inteligente</h3>
              <p className="text-athenia-300/90 text-justify">
                Soluciones prácticas y efectivas que puedes aplicar fácilmente.
              </p>
            </div>
            <div className="p-3 border-l-4 border-[#2B2D42] hover:scale-[1.02] transition-transform duration-300">
              <h3 className="font-semibold text-athenia-400 mb-1">Impacto Real</h3>
              <p className="text-athenia-300/90 text-justify">
                Te guiamos para aprovechar la IA al máximo.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-start mt-4">
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 bg-athenia-400 text-white rounded-full text-sm font-medium hover:bg-athenia-300 transition-colors shadow-sm"
            >
              Ver demo
            </motion.a>
            <motion.a
              href="#mas"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 bg-white border border-athenia-400 text-athenia-400 rounded-full text-sm font-medium hover:bg-athenia-50 transition-colors"
            >
              Más información
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
