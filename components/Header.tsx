import React, { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { CONTACT_INFO } from "../constants";

import logo from "../assets/logo.jpg";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Categorias", href: "#categories" },
    { name: "Produtos", href: "#products" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-honra-black/95 backdrop-blur-sm text-white shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-honra-red relative overflow-hidden">
            <img
              src={logo}
              alt="Kimonos Honra"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-2xl tracking-wider leading-none text-white">
              <span className="text-honra-red">HONRA</span>
            </span>
            <span className="text-[10px] tracking-[0.2em] font-light text-gray-400 uppercase">
              Em toda arte marcial lute com honra!
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-honra-red transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            className="relative p-2 hover:bg-white/10 rounded-full transition-colors group"
            onClick={onOpenCart}
          >
            <ShoppingBag className="w-6 h-6 text-white group-hover:text-honra-red transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-honra-red text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border border-honra-black">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-honra-black border-t border-gray-800 absolute w-full left-0 top-full shadow-2xl animate-fade-in-down">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-center hover:text-honra-red py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white py-3 rounded text-center font-bold mt-4"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
