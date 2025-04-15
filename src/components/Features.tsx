import React from 'react';
import { motion } from 'framer-motion';

// Íconos SVG personalizados estilo "AI line"
const svgIcons = [
  // Icono 1: Automatización Inteligente
  (
    <svg className="w-8 h-8 text-athenia-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M5 3h14a2 2 0 012 2v10a2 2 0 01-2 2h-6l-4 4v-4H5a2 2 0 01-2-2V5a2 2 0 012-2z"/>
      <circle cx="12" cy="9" r="3"/>
    </svg>
  ),
  // Icono 2: Interacción Eficaz
  (
    <svg className="w-8 h-8 text-athenia-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="6" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  ),
  // Icono 3: Innovación Accesible
  (
    <svg className="w-8 h-8 text-athenia-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 00-6.32 17.65L5 22l2.35-1.32A10 10 0 1012 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  // Icono 4: Escalabilidad sin Límites
  (
    <svg className="w-8 h-8 text-athenia-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M9 18h6m-3 0v3M12 2a7 7 0 00-7 7c0 3.5 2.5 5 3.5 6h7c1-1 3.5-2.5 3.5-6a7 7 0 00-7-7z" />
    </svg>
  ),
];

const Features = () => {
  const features = [
    {
      title: "Automatización Inteligente",
      description:
        "Simplifica tareas repetitivas y optimiza tus procesos con herramientas diseñadas para hacer más en menos tiempo.",
      delay: 0,
    },
    {
      title: "Interacción Eficaz",
      description:
        "Mejora la comunicación con tus clientes mediante soluciones que hacen cada experiencia más fluida y personalizada",
      delay: 0.1,
    },
    {
      title: "Innovación Accesible",
      description:
        "Tecnología avanzada disponible para cualquier tipo de negocio, sin complicaciones ni grandes inversiones.",
      delay: 0.2,
    },
    {
      title: "Escalabilidad sin Límites",
      description:
        "Implementa soluciones que crecen contigo, adaptándose a tus necesidades y objetivos a medida que evolucionas.",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-athenia-400 mb-4">
            Tecnología que impulsa resultados
          </h2>
          <p className="text-lg text-athenia-300 max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones de IA transforman la manera de hacer negocios
          </p>
        </motion.div>

        {/* Lista de features */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="flex items-start gap-5"
            >
              <div className="p-4 bg-athenia-50 rounded-xl shadow-sm">
                {svgIcons[index]}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-athenia-400 mb-1">
                  {feature.title}
                </h3>
                <p className="text-athenia-300 text-sm leading-relaxed text-justify">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center pt-12"
        >
          <a
            href="#demo"
            className="inline-flex items-center text-athenia-300 hover:text-athenia-400 transition-colors font-medium"
          >
            Descubre todas las características
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
