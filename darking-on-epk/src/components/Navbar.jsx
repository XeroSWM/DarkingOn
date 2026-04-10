import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir/cerrar el menú
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl tracking-widest uppercase">
              Darking On
            </span>
          </div>
          
          {/* Menú de Escritorio (Oculto en móvil) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Inicio</a>
              <a href="#biografia" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Biografía</a>
              <a href="#musica" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Música</a>
              <a href="#contacto" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Contacto</a>
            </div>
          </div>

          {/* Botón Hamburguesa (Solo visible en móvil) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-300 hover:text-white focus:outline-none text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable para Móvil */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-b border-gray-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col text-center">
            {/* Agregamos onClick a cada enlace para que el menú se cierre al hacer clic */}
            <a href="#inicio" onClick={toggleMenu} className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium border-b border-gray-800/50">Inicio</a>
            <a href="#biografia" onClick={toggleMenu} className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium border-b border-gray-800/50">Biografía</a>
            <a href="#musica" onClick={toggleMenu} className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium border-b border-gray-800/50">Música</a>
            <a href="#contacto" onClick={toggleMenu} className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}