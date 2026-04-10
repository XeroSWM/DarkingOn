export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nombre */}
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl tracking-widest uppercase">
              Darking On
            </span>
          </div>
          {/* Enlaces de escritorio (ocultos en móvil por ahora) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Inicio</a>
              <a href="#biografia" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Biografía</a>
              <a href="#musica" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Música</a>
              <a href="#contacto" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}