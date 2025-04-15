import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef(null);
  const duration = 7000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, duration);
  };

  useEffect(() => {
    resetTimeout();
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goToSlide = (index, dir) => {
    setDirection(dir);
    setCurrent(index);
  };

  const nextSlide = () => goToSlide((current + 1) % slides.length, 1);
  const prevSlide = () => goToSlide((current - 1 + slides.length) % slides.length, -1);

  const variants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      transformOrigin: 'center left',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    exit: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      transformOrigin: 'center right',
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <section className="relative bg-gradient-to-b from-[#e3edf5] to-white py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-athenia-400 mb-6">Nuestros Servicios</h2>
        <p className="text-athenia-300 text-lg mb-10 max-w-xl mx-auto">
          Soluciones de IA que transforman tu negocio de manera simple y efectiva
        </p>

        <div className="relative h-[300px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl bg-black perspective-1000">

          {/* 🔄 Flecha Izquierda (SVG animada) */}
          <motion.button
            onClick={prevSlide}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* 🔄 Flecha Derecha (SVG animada) */}
          <motion.button
            onClick={nextSlide}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* 🎥 Slide principal */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slides[current].video}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              className="absolute top-0 left-0 w-full h-full z-0"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
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

          {/* 📝 Texto del slide */}
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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

        {/* ⏳ Barras de progreso */}
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, i) => (
            <div
              key={i}
              className="relative w-16 h-1 bg-athenia-100 overflow-hidden rounded-full"
            >
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
      </div>
    </section>
  );
};

export default Services;
