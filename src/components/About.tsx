import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#312783] mb-6">Sobre AthenAI</h2>
            <p className="text-lg text-gray-600 mb-6">
              En AthenAI, nos dedicamos a transformar el panorama empresarial a través de soluciones 
              de inteligencia artificial innovadoras y accesibles. Nuestro compromiso es hacer que la 
              IA sea comprensible y útil para todas las empresas, independientemente de su tamaño.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Con años de experiencia en el campo de la IA y un equipo de expertos apasionados, 
              ofrecemos soluciones que no solo mejoran la eficiencia operativa, sino que también 
              impulsan el crecimiento sostenible de su negocio.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#E62E39] mb-2">100+</h3>
                <p className="text-gray-600">Clientes Satisfechos</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#E62E39] mb-2">50+</h3>
                <p className="text-gray-600">Proyectos Exitosos</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#E62E39] mb-2">95%</h3>
                <p className="text-gray-600">Tasa de Retención</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                alt="Equipo AthenAI"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;