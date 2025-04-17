import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const slides = [
  {
    video: '/video-servicio-1.mp4',
    title: 'Asistentes Virtuales Inteligentes',
    description: 'Chatbots que entienden y responden como humanos, disponibles 24/7 para atender a tus clientes.',
  },
  {
    video: '/video-servicio-2.mp4',
    title: 'CRM con IA Predictiva',
    description: 'Sistema CRM personalizado que aprende de cada interacción y automatiza la gestión de clientes.',
  },
  {
    video: '/video-servicio-3.mp4',
    title: 'Marketing Impulsado por IA',
    description: 'Estrategias inteligentes que adaptan tus campañas en tiempo real para lograr mejores resultados.',
  },
  {
    video: '/video-servicio-4.mp4',
    title: 'Contenido Audiovisual Único',
    description: 'Videos, imágenes y animaciones generadas por IA que reflejan la identidad de tu marca.',
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const duration = 8000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, duration);
  };

  useEffect(() => {
    resetTimeout();
    return () => clearTimeout(timeoutRef.current!);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative bg-gradient-to-b from-[#e3edf5] to-white py-20 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h2
          whileHover={{ scale: 1.02, textShadow: '0 0 10px rgba(64,102,131,0.3)' }}
          className="text-3xl md:text-4xl font-bold text-athenia-400 mb-6 transition-all"
        >
          Nuestros Servicios
        </motion.h2>

        <motion.p
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="text-athenia-300 text-lg mb-10 max-w-xl mx-auto"
        >
          <Typewriter
            words={['Soluciones de IA que transforman tu negocio de manera simple y efectiva']}
            loop={0}
            typeSpeed={40}
            deleteSpeed={0}
            delaySpeed={3000}
          />
        </motion.p>

        {/* Slider */}
        <div className="relative h-[220px] md:h-[280px] lg:h-[320px] rounded-2xl overflow-hidden shadow-xl bg-black transition-all duration-500">
          <motion.button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm shadow-md md:top-1/2 bottom-4 md:bottom-auto"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm shadow-md md:top-1/2 bottom-4 md:bottom-auto"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].video}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-full z-10"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-6 left-6 right-6 text-left z-20"
          >
            <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow-md">
              {slides[current].title}
            </h3>
            <p className="text-white/90 mt-2 text-sm md:text-base drop-shadow">
              {slides[current].description}
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, i) => (
            <div key={i} className="relative w-16 h-1 bg-athenia-100 overflow-hidden rounded-full">
              {i === current && (
                <motion.div
                  className="absolute top-0 left-0 h-full bg-athenia-300"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: duration / 1000, ease: 'linear' }}
                />
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <motion.a
            href="#cta"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#E6EEF4',
              boxShadow: '0 4px 20px rgba(27,42,65,0.2)',
            }}
            transition={{ type: 'spring', stiffness: 220, damping: 12 }}
            className="inline-block px-6 py-3 bg-white text-athenia-400 border border-athenia-300 rounded-full font-medium transition-all shadow-sm hover:shadow-md"
          >
            Explorar soluciones inteligentes
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;

 
