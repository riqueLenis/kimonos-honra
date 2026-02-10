import React from 'react';
import { ShieldCheck, ChevronDown } from 'lucide-react';

import heroBg from '../assets/geral/geral1.jpeg';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-honra-black text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 animate-slow-zoom"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-honra-black via-honra-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center mt-16">
        
        {/* CheckMat Partnership Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-honra-red/50 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
          <ShieldCheck className="w-5 h-5 text-honra-red" />
          <span className="text-sm font-semibold tracking-wider text-gray-200">FORNECEDOR CHECKMAT OFICIAL BRASIL</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-white leading-tight animate-fade-in-up delay-100 drop-shadow-xl">
          VISTA A <span className="text-honra-red inline-block">HONRA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
          A referência brasileira em Kimonos personalizados. Qualidade testada nos maiores tatames do mundo. 
          Performance, durabilidade e estilo para Jiu-Jitsu, Karatê, Taekwondo e Hapkido.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <a 
            href="#products" 
            className="px-8 py-4 bg-honra-red text-white font-bold uppercase tracking-widest rounded hover:bg-red-700 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center shadow-[0_0_20px_rgba(208,28,31,0.4)]"
          >
            Ver Coleção
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#categories" className="text-white/50 hover:text-honra-red transition-colors">
          <ChevronDown className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;