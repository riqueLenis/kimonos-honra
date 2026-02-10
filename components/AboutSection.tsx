import React from 'react';

import aboutImage from '../assets/jiu/jiu1.jpeg';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-honra-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
             <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-honra-red"></div>
                <img 
                  src={aboutImage}
                  alt="Lutador CheckMat" 
                  className="rounded shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-honra-red"></div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              SOBRE A <span className="text-honra-red">HONRA</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              A Kimonos Honra nasceu com um propósito: entregar armaduras para guerreiros modernos. 
              Localizados em Foz do Iguaçu, somos mais que uma loja de artigos esportivos, somos parceiros 
              da sua evolução no tatame.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Nosso maior orgulho é ser fornecedor da <strong className="text-white">CheckMat Brasil</strong>, 
              uma das maiores e mais respeitadas equipes de Jiu-Jitsu do planeta. Isso atesta nosso 
              compromisso inegociável com a qualidade, durabilidade e design.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-white/5 p-6 rounded border border-white/10 hover:border-honra-red transition-colors">
                 <h4 className="text-xl font-heading font-bold text-honra-red mb-2">Qualidade Premium</h4>
                 <p className="text-sm text-gray-400">Tecidos trançados de alta gramatura e pré-encolhidos.</p>
               </div>
               <div className="bg-white/5 p-6 rounded border border-white/10 hover:border-honra-red transition-colors">
                 <h4 className="text-xl font-heading font-bold text-honra-red mb-2">Personalização</h4>
                 <p className="text-sm text-gray-400">Kimonos exclusivos com patches e bordados da sua equipe.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;