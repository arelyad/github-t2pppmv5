import React from 'react';
import { Brain, Shield, BarChart, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Automatización Inteligente",
      description:
        "Simplifica tareas repetitivas y optimiza tus procesos con herramientas diseñadas para hacer más en menos tiempo.",
      delay: 0,
    },
    {
      icon: Shield,
      title: "Interacción Eficaz",
      description:
        "Mejora la comunicación con tus clientes mediante soluciones que hacen cada experiencia más fluida y personalizada",
      delay: 0.1,
    },
    {
      icon: BarChart,
      title: "Innovación Accesible",
      description:
        "Tecnología avanzada disponible para cualquier tipo de negocio, sin complicaciones ni grandes inversiones.",
      delay: 0.2,
    },
    {
      icon: MessageSquare,
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
                <feature.icon className="w-6 h-6 text-athenia-300" />
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
