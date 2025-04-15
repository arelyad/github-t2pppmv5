import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    video: '/video-servicio-1.mp4',
    title: 'Asistentes Virtuales Inteligentes',
    description:
      'Chatbots que entienden y responden como humanos, disponibles 24/7 para atender a tus clientes.',
  },
  {
    video: '/video-servicio-2.mp4',
    title: 'CRM con IA Predictiva',
    description:
      'Sistema CRM personalizado que aprende de cada interacción y automatiza la gestión de clientes.',
  },
  {
    video: '/video-servicio-3.mp4',
    title: 'Marketing Impulsado por IA',
    description:
      'Estrategias inteligentes que adaptan tus campañas en tiempo real para lograr mejores resultados.',
  },
  {
    video: '/video-servicio-4.mp4',
    title: 'Contenido Audiovisual Único',
    description:
      'Videos, imágenes y animaciones generadas por IA que reflejan la identidad de tu marca.',
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 para adelante, -1 para atrás

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section className="relative bg-gradient-to-b from-[#e3edf5] to-white py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-athenia-400 mb-6">
          Nuestros Servicios
        </h2>
        <p className="text-athenia-300 text-lg mb-10 max-w-xl mx-auto">
          Soluciones de IA que transforman tu negocio de manera simple y efectiva
        </p>

        <div className="relative h-[300px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl bg-black">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slides[current].video}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-full z-0"
            >
              <video
                src={slides[current].video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-6 left-6 right-6 text-left z-10"
          >
            <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow-md">
              {slides[current].title}
            </h3>
            <p className="text-white/90 mt-2 text-sm md:text-base drop-shadow">
              {slides[current].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
