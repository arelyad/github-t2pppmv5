import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-athenia-50 py-10 border-t border-athenia-100 text-sm">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <Logo className="h-7 w-auto" />
            </div>
            <p className="text-athenia-300 leading-relaxed max-w-md">
              Transformando empresas a través de soluciones avanzadas de inteligencia artificial, impulsando la innovación y el crecimiento sostenible.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-sm font-semibold text-athenia-400 mb-3">Enlaces</h3>
            <ul className="space-y-2 text-athenia-300">
              <li><a href="#inicio" className="hover:text-athenia-400 transition">Inicio</a></li>
              <li><a href="#soluciones" className="hover:text-athenia-400 transition">Soluciones</a></li>
              <li><a href="#caracteristicas" className="hover:text-athenia-400 transition">Características</a></li>
              <li><a href="#precios" className="hover:text-athenia-400 transition">Precios</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-athenia-400 mb-3">Contacto</h3>
            <ul className="space-y-2 text-athenia-300">
              <li>info@athenai.com</li>
              <li>+34 900 123 456</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-athenia-100 mt-10 pt-6 text-center text-athenia-200 text-xs">
          © {new Date().getFullYear()} AthenAI. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
