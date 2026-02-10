import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-honra-black mb-4">
            ENTRE EM <span className="text-honra-red">CONTATO</span>
          </h2>
          <div className="w-24 h-1 bg-honra-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Info Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-honra-red">
            <h3 className="text-2xl font-bold text-honra-black mb-6">Informações</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-honra-black p-3 rounded-full text-honra-red">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-honra-black">Endereço</h4>
                  <p className="text-gray-600 text-sm mt-1 max-w-xs">{CONTACT_INFO.address}</p>
                  <p className="text-gray-600 text-sm">CEP: {CONTACT_INFO.cep}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-honra-black p-3 rounded-full text-honra-red">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-honra-black">WhatsApp</h4>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`} className="text-gray-600 text-sm mt-1 hover:text-green-600 block">
                    {CONTACT_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-honra-black p-3 rounded-full text-honra-red">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-honra-black">Instagram</h4>
                  <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm mt-1 hover:text-pink-600 block">
                    @kimonoshonra
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 h-[400px] bg-gray-300 rounded-lg overflow-hidden shadow-lg relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.463375836262!2d-54.58550000000001!3d-25.522916699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6906471e36787%3A0x6c6e75148386377e!2sAv.%20P%C3%B4r%20do%20Sol%2C%20527%20-%20Jardim%20Panorama%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR%2C%2085856-430!5e0!3m2!1sen!2sbr!4v1709500000000!5m2!1sen!2sbr" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Localização Kimonos Honra"
             ></iframe>
             <div className="absolute bottom-4 right-4 bg-white p-2 px-4 rounded shadow-lg text-xs font-bold text-honra-black">
               Foz do Iguaçu - PR
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;