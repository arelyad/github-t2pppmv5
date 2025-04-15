import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-athenia-400 mb-4">Contáctanos</h2>
          <p className="text-athenia-300 text-lg max-w-2xl mx-auto">
            ¿Tienes dudas o quieres descubrir cómo la IA puede ayudarte?<br />
            Estamos aquí para apoyarte en cada paso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-athenia-50"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-athenia-300 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="w-full border border-athenia-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-athenia-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-athenia-300 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-athenia-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-athenia-300"
                />
              </div>

              <div>
                <label htmlFor="pais" className="block text-sm font-semibold text-athenia-300 mb-1">
                  País
                </label>
                <select
                  id="pais"
                  className="w-full border border-athenia-100 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-athenia-300"
                >
                  <option value="">Selecciona tu país</option>
                  <option value="mx">México</option>
                  <option value="co">Colombia</option>
                  <option value="ar">Argentina</option>
                  <option value="cl">Chile</option>
                  <option value="es">España</option>
                  <option value="es">Italia</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-athenia-300 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="w-full border border-athenia-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-athenia-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-athenia-400 text-white font-semibold py-3 rounded-md hover:bg-athenia-300 transition-all"
              >
                Enviar mensaje
              </button>
            </form>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-athenia-300 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-athenia-400">Teléfono</h3>
                <p className="text-athenia-200 mt-1">+52 (55) 1234 5678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-athenia-300 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-athenia-400">Correo</h3>
                <p className="text-athenia-200 mt-1">contacto@athenai.ai</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-athenia-300 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-athenia-400">Ubicación</h3>
                <p className="text-athenia-200 mt-1">
                  Oficinas virtuales en CDMX<br />Atención global
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;