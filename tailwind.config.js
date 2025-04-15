/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        athenia: {
          50: '#E6EEF4',  // Fondo sutil claro
          100: '#D2DFEB', // Azul más suave
          200: '#7D98B2', // Azul medio
          300: '#406683', // Azul intenso
          400: '#1B2A41', // Azul oscuro (titulares)
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // ✅ Se usa por defecto en toda la UI
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Opcional: mejora visual de formularios
  ],
};
