import React, { useMemo, useState } from 'react';
import { ShoppingCart, Star, MessageCircle } from 'lucide-react';
import { PRODUCTS, CONTACT_INFO } from '../constants';
import { Product } from '../types';
import ProductDetailsModal from './ProductDetailsModal';

interface ProductShowcaseProps {
  onAddToCart: (product: Product) => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProducts = useMemo(() => PRODUCTS.filter((p) => p.isFeatured), []);
  
  const getWhatsAppLink = (productName: string) => {
    const text = `Olá, gostei do produto *${productName}* no site e gostaria de mais informações para comprar.`;
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-heading font-bold text-honra-black mb-2">
              DESTAQUES <span className="text-honra-red">HONRA</span>
            </h2>
            <p className="text-gray-600">A escolha dos campeões da CheckMat.</p>
          </div>
          <button className="mt-4 md:mt-0 text-honra-black font-bold uppercase tracking-widest hover:text-honra-red transition-colors">
            Ver Todos os Produtos &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => {
                setSelectedProduct(product);
                setIsModalOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }
              }}
            >
              <div className="relative h-80 overflow-hidden bg-gray-100">
                 <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                   <span className="bg-honra-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                     Novo
                   </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{product.category}</div>
                <h3 className="text-lg font-bold text-honra-black mb-2 leading-tight">{product.name}</h3>
                <div className="flex items-center mb-4">
                   {[1,2,3,4,5].map(i => (
                     <Star key={i} className="w-4 h-4 text-honra-red fill-current" />
                   ))}
                   <span className="text-xs text-gray-400 ml-2">(12)</span>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-4">
                     <span className="text-2xl font-bold text-honra-black">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="col-span-1 p-3 border border-gray-300 text-gray-600 rounded hover:bg-gray-100 transition-all flex items-center justify-center"
                      title="Adicionar ao Carrinho"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    
                    <a 
                      onClick={(e) => e.stopPropagation()}
                      href={getWhatsAppLink(product.name)}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="col-span-4 py-3 bg-green-600 text-white font-bold text-sm uppercase tracking-wide rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Comprar no Zap
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductDetailsModal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ProductShowcase;