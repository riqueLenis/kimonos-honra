import React, { useEffect, useMemo } from 'react';
import { X } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
}

const formatBRL = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ isOpen, product, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const installmentText = useMemo(() => {
    if (!product) return '';
    const perInstallment = product.price / 6;
    return `Em até 6x de ${formatBRL(perInstallment)} sem juros (Visa e MasterCard).`;
  }, [product]);

  const personalizeLines = useMemo(() => {
    if (!product) return [] as string[];
    if (product.category !== 'faixas') return [] as string[];

    if (product.beltAudience === 'kids') {
      return ['Nome bordado + R$ 20,00', 'Com divisa/listra: + R$ 12,00'];
    }

    return ['Nome bordado + R$ 25,00', 'Graus bordados: R$ 9,00 cada grau bordado'];
  }, [product]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-heading font-bold text-honra-black text-lg">{product.name}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-gray-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="p-6">
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">{product.category}</div>

            <div className="text-3xl font-bold text-honra-black mb-4">{formatBRL(product.price)}</div>

            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

            {personalizeLines.length > 0 && (
              <div className="mb-6">
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Personalize</div>
                <div className="space-y-1 text-sm text-gray-700">
                  {personalizeLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2 text-sm">
              <p className="text-honra-black font-semibold">{installmentText}</p>
              <p className="text-gray-700 font-semibold">Frete grátis para todo o Brasil.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
