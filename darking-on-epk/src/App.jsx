import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      <main>
        {/* SECCIÓN: Inicio (Hero) */}
        <section id="inicio" className="h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4">
            Darking On
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
            Electronic Press Kit
          </p>
        </section>

        {/* SECCIÓN: Biografía */}
        <section id="biografia" className="py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase border-b border-gray-800 pb-4">Biografía</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            Aquí redactaremos la historia del artista, sus influencias y su trayectoria en la escena electrónica...
          </p>
        </section>

        {/* SECCIÓN: Música */}
        <section id="musica" className="py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase border-b border-gray-800 pb-4">Música</h2>
          <div className="bg-gray-900 rounded-lg h-64 flex items-center justify-center border border-gray-800">
            <span className="text-gray-500 text-sm">Espacio reservado para los reproductores de SoundCloud/Spotify (Fase 3)</span>
          </div>
        </section>

        {/* SECCIÓN: Contacto */}
        <section id="contacto" className="py-24 px-6 max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase border-b border-gray-800 pb-4">Contacto & Booking</h2>
          <p className="text-gray-400">
            Aquí pondremos los enlaces directos a sus redes sociales y el correo de management.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;