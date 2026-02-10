import React from 'react';
import { X, Hammer, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface UnderConstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UnderConstructionModal: React.FC<UnderConstructionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-lg p-8 text-center animate-fade-in-up border-t-4 border-honra-red">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <Hammer className="w-12 h-12 text-honra-red" />
          </div>
        </div>

        <h2 className="text-2xl font-heading font-bold text-honra-black mb-4">
          SISTEMA DE PAGAMENTO EM CONSTRUÇÃO
        </h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Estamos aprimorando nossa plataforma para oferecer a melhor experiência de compra para você. 
          O módulo de checkout automático estará disponível em breve.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <p className="font-bold text-honra-black mb-2">PARA COMPRAR AGORA:</p>
          <p className="text-sm text-gray-600 mb-4">
            Entre em contato diretamente com nossos vendedores pelo WhatsApp. Informe os produtos desejados e finalizaremos seu pedido manualmente.
          </p>
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Olá, gostaria de finalizar uma compra vista no site!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded font-bold hover:bg-green-700 transition-colors shadow-md"
          >
            <Phone className="w-5 h-5" />
            Finalizar pelo WhatsApp
          </a>
        </div>

        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-honra-black text-sm underline"
        >
          Voltar para a loja
        </button>
      </div>
    </div>
  );
};

export default UnderConstructionModal;