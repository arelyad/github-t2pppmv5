import React from 'react';
import logo from '../assets/LogoAthenIA.png'; // ✔️ Nuevo nombre sin espacios

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      src={logo}
      alt="AthenIA logo"
      className={className || 'h-14 w-auto max-w-[200px] object-contain'} // Ajuste de tamaño por defecto
    />
  );
};

export default Logo;
