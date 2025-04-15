import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-athenia-50/80 backdrop-blur-md border-b border-athenia-100/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-20"> {/* 🔽 Reducido de h-24 a h-20 */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            {/* ✅ Logo conservado sin cambios */}
            <Logo className="h-12 max-w-[220px] w-auto object-contain" />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['Inicio', 'Sobre Nosotros', 'Servicios'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                whileHover={{ scale: 1.05 }}
                className="text-athenia-300 hover:text-athenia-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2.5 bg-athenia-300 text-white rounded-full hover:bg-athenia-400 transition-all shadow-lg hover:shadow-athenia-300/20"
            >
              Contacto
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
