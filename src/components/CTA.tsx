import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-athenia-300 to-athenia-200 text-white py-24 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Comienza tu transformación digital hoy
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium mb-6 flex flex-col md:flex-row justify-center items-center gap-2"
        >
          <span className="text-white/90">
            No necesitas saber de IA para&nbsp;
          </span>
          <span
            className="inline-block border-b-2 border-white px-4 py-1 rounded-lg font-semibold text-white bg-white/10"
            style={{
              textShadow: '0 0 8px rgba(255, 255, 255, 0.6)', // ✨ GLOW effect
            }}
          >
            <Typewriter
              options={{
                strings: [
                  'transformarte.',
                  'comenzar.',
                  'avanzar.',
                  'impulsar tu negocio.',
                  'crecer sin límites.',
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 45,
              }}
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <span className="font-semibold text-white">Nosotros te guiamos paso a paso</span> para que descubras cómo la inteligencia artificial puede impulsar tu negocio con facilidad y seguridad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#demo"
            className="bg-white text-athenia-400 font-semibold px-6 py-3 rounded-full text-sm shadow-md hover:bg-gray-100 transition-colors"
          >
            Solicitar demo
          </a>
          <a
            href="#contacto"
            className="border border-white text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white hover:text-athenia-400 transition-colors"
          >
            ¡Contáctanos!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
