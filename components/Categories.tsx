import React from 'react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-honra-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-honra-black mb-4">
            NOSSAS <span className="text-honra-red">CATEGORIAS</span>
          </h2>
          <div className="w-24 h-1 bg-honra-red mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Desenvolvemos equipamentos específicos para cada arte marcial, respeitando a tradição e inovando na tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <div 
              key={category.id} 
              className="group relative h-96 overflow-hidden rounded-lg shadow-xl cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-honra-black via-honra-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-heading font-bold text-white mb-2">{category.label}</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {category.description}
                </p>
                <span className="inline-block text-honra-red text-sm font-bold uppercase tracking-widest border-b border-honra-red pb-1">
                  Explorar
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;