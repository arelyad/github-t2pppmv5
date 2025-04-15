import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Íconos
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

  const items = [
    { icon: iconoChatbot, text: 'Chatbots que atienden a tus clientes 24/7' },
    { icon: iconoCRM, text: 'CRM que aprende de cada interacción' },
    { icon: iconoMarketing, text: 'Marketing Digital con IA' },
    { icon: iconoSoluciones, text: 'Soluciones con Inteligencia Artificial' },
  ];

  return (
    <motion.section
      className="relative bg-white pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Carrusel animado */}
      <div className="overflow-hidden w-full mb-10">
        <div className="flex gap-16 animate-slide-icons whitespace-nowrap items-center justify-center">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-3 min-w-max">
              <img src={item.icon} alt="icono" className="h-6 w-auto" />
              <p className="text-sm text-athenia-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-[1300px] mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        {/* 🎥 Video */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-[420px] aspect-[4/3] mx-auto">
            <video
              src="/VideoAthenIA_Hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* 🧠 Texto */}
        <motion.div
          className="md:col-span-7 flex flex-col justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-athenia-50 p-5 rounded-xl shadow-sm text-center mb-6">
            <p className="text-athenia-400 text-lg md:text-xl">
              En <strong>AthenIA</strong>, llevamos la inteligencia artificial a tu alcance, sin complicaciones.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="border-l-4 border-[#4BA3C7] pl-3">
              <h3 className="font-semibold text-athenia-400 mb-1">Accesibilidad Universal</h3>
              <p className="text-athenia-300/90 text-justify">
                IA para cualquier empresa, sin importar su tamaño o sector.
              </p>
            </div>
            <div className="border-l-4 border-[#355D91] pl-3">
              <h3 className="font-semibold text-athenia-400 mb-1">Simplificación Inteligente</h3>
              <p className="text-athenia-300/90 text-justify">
                Soluciones prácticas y efectivas que puedes aplicar fácilmente.
              </p>
            </div>
            <div className="border-l-4 border-[#2B2D42] pl-3">
              <h3 className="font-semibold text-athenia-400 mb-1">Impacto Real</h3>
              <p className="text-athenia-300/90 text-justify">
                Te guiamos para aprovechar la IA al máximo.
              </p>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 justify-start mt-10">
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
              className="px-6 py-2 border border-athenia-400 text-athenia-400 rounded-full text-sm font-medium hover:bg-athenia-50 transition-colors"
            >
              Más información
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Chatbot ElevenLabs */}
      <div className="fixed bottom-0.5 right-2 z-50 animate-bounce scale-[0.75]">
        <elevenlabs-convai agent-id="RSdNio7xDV4EO2kveC06"></elevenlabs-convai>
      </div>
    </motion.section>
  );
};

export default Hero;
