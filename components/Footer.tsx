import React from 'react';
import { CONTACT_INFO } from '../constants';
import { CreditCard, Banknote } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-honra-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
               <div className="w-8 h-8 bg-honra-red rounded-full flex items-center justify-center text-white font-heading font-bold text-lg border border-white">
                 H
               </div>
               <span className="font-heading font-bold text-2xl tracking-wider text-white">HONRA</span>
            </div>
            <p className="text-gray-500 text-sm">
              Qualidade e tradição para os guerreiros do tatame.
              <br/>Fornecedor CheckMat Brasil.
            </p>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h4 className="font-heading font-bold text-lg mb-4 text-honra-red">NAVEGAÇÃO</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Payment Methods Status */}
          <div className="text-center md:text-left">
            <h4 className="font-heading font-bold text-lg mb-4 text-honra-red">PAGAMENTO</h4>
            <p className="text-gray-400 text-xs mb-3">Formas de pagamento (Em breve)</p>
            <div className="flex justify-center md:justify-start gap-3 opacity-50 grayscale hover:grayscale-0 transition-all">
               <div className="bg-white p-2 rounded flex items-center justify-center w-12 h-8" title="Cartão de Crédito">
                 <CreditCard className="text-black w-6 h-6" />
               </div>
               <div className="bg-white p-2 rounded flex items-center justify-center w-12 h-8" title="PIX">
                 <span className="text-black font-bold text-[10px]">PIX</span>
               </div>
               <div className="bg-white p-2 rounded flex items-center justify-center w-12 h-8" title="Boleto">
                 <Banknote className="text-black w-6 h-6" />
               </div>
            </div>
            <p className="text-[10px] text-yellow-500 mt-2">* Sistema em implementação</p>
          </div>

          {/* Contact Small */}
          <div className="text-center md:text-right">
             <h4 className="font-heading font-bold text-lg mb-4 text-honra-red">ATENDIMENTO</h4>
             <p className="text-gray-400 text-sm">{CONTACT_INFO.address}</p>
             <p className="text-gray-400 text-sm mt-2">{CONTACT_INFO.whatsapp}</p>
             <div className="mt-4 flex justify-center md:justify-end gap-4">
               <a href={CONTACT_INFO.instagram} className="text-gray-400 hover:text-pink-500 transition-colors">Instagram</a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Kimonos Honra. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;