import Navbar from './components/Navbar';
// Importamos los íconos de react-icons
import { FaFacebook, FaInstagram, FaTiktok, FaSoundcloud, FaSpotify } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* SECCIÓN: Inicio (Hero) */}
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 md:pt-20">
          
          {/* --- FOTO DE PERFIL MINIMALISTA --- */}
          <div className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-8 rounded-full overflow-hidden border-2 border-gray-800 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <img 
              src="/perfil.jpg" 
              alt="Darking On Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter uppercase mb-2 bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
            Darking On
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-light tracking-widest uppercase mb-10 md:mb-12">
            Ecuadorian DJ & Producer
          </p>
          
          {/* Estadísticas (Responsivas) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-b border-gray-800 py-6 md:py-8 w-full max-w-4xl">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">+150K</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Monthly Listeners</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">+1M</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Worldwide Streams</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">+9M</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Playlist Reach</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">9.5K</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Social Media</p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8 md:mt-10">
            <a href="https://www.facebook.com/Darking.23444444444" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-all hover:scale-110 text-2xl md:text-3xl">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/darking_on_official/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-all hover:scale-110 text-2xl md:text-3xl">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@darking_on_official" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110 text-2xl md:text-3xl">
              <FaTiktok />
            </a>
            <a href="https://soundcloud.com/darking_on_music" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FF3300] transition-all hover:scale-110 text-2xl md:text-3xl">
              <FaSoundcloud />
            </a>
            <a href="https://open.spotify.com/embed/track/TRACK_ID?utm_source=generator&theme=03" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-all hover:scale-110 text-2xl md:text-3xl">
              <FaSpotify />
            </a>
          </div>
        </section>

        {/* SECCIÓN: Biografía */}
        <section id="biografia" className="py-16 md:py-24 px-4 md:px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 uppercase text-white">About Me</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
              <p>
                Darking On is an Ecuadorian DJ and music producer known for his melodic and emotional Progressive House sound.
              </p>
              <p>
                At just 24 years old, he has released music on respected international labels such as Revealed Recordings, Future House Cloud, and Airwave Music.
              </p>
              <p>
                His debut on Revealed Recordings with "In My Heart" marked a key milestone, leading to over 1 million streams and 150,000+ monthly listeners on Spotify.
              </p>
            </div>
          </div>
          
          {/* Cuadro de Highlights */}
          <div className="bg-gray-900/50 p-6 md:p-8 rounded-xl border border-gray-800">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 uppercase border-b border-gray-800 pb-2">Career Highlights</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                Debut oficial en Revealed Recordings (Hardwell) con "In My Heart".
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                Support oficial de Tomorrowland, Spinnin' Records y Protocol Recordings.
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                Presentaciones en Festival San Francisco y Lake Summer Festival.
              </li>
            </ul>
          </div>
        </section>

        {/* SECCIÓN: Música (Mejores Lanzamientos) */}
        <section id="musica" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 uppercase text-center tracking-widest">Best Releases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Track 1: In My Heart */}
            <div className="bg-gray-900/40 border border-gray-800 p-5 md:p-6 rounded-2xl hover:border-purple-500/50 transition-all group">
              <h4 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">In My Heart</h4>
              <p className="text-xs text-gray-500 mb-4 uppercase tracking-tighter">+300,000 views</p>
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/track/0woscZisOw9EfJiQxAgY7A?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>

            {/* Track 2: Hold Me Through The Night */}
            <div className="bg-gray-900/40 border border-gray-800 p-5 md:p-6 rounded-2xl hover:border-purple-500/50 transition-all group">
              <h4 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">Hold Me Through The Night</h4>
              <p className="text-xs text-gray-500 mb-4 uppercase tracking-tighter">+270,000 views</p>
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/track/1GqWtvwVcD2Y5kP9s5cOWT?utm_source=generator&theme=05" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>

            {/* Track 3: All Over Again */}
            <div className="bg-gray-900/40 border border-gray-800 p-5 md:p-6 rounded-2xl hover:border-purple-500/50 transition-all group">
              <h4 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">All Over Again</h4>
              <p className="text-xs text-gray-500 mb-4 uppercase tracking-tighter">+95,000 views</p>
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/track/3ZuhMYrbaBy9or4LJIq6MS?utm_source=generator&theme=06" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>

          </div>
        </section>

        {/* --- NUEVA SECCIÓN: GALERÍA MINIMALISTA --- */}
        <section id="galeria" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 uppercase text-center tracking-widest">Live Moments</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Foto 1 (Imagen estática) */}
            <div className="aspect-square bg-gray-900 overflow-hidden rounded-xl border border-gray-800/50 group">
              <img src="/evento1.jpg" alt="Live Event 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            
            {/* Foto 2 (Ahora es un VIDEO) */}
            <div className="aspect-square bg-gray-900 overflow-hidden rounded-xl border border-gray-800/50 group">
              <video 
                src="/evento2.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
              />
            </div>
            
            {/* Foto 3 (Ahora es un VIDEO) */}
            <div className="aspect-square bg-gray-900 overflow-hidden rounded-xl border border-gray-800/50 group">
              <video 
                src="/evento3.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
              />
            </div>
            
            {/* Foto 4 (Imagen estática) */}
            <div className="aspect-square bg-gray-900 overflow-hidden rounded-xl border border-gray-800/50 group">
              <img src="/evento4.jpg" alt="Live Event 4" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
          </div>
        </section>

        {/* SECCIÓN: Contacto & Booking */}
        <section id="contacto" className="py-16 md:py-24 px-4 md:px-6 max-w-4xl mx-auto mb-10 md:mb-20 text-center border-t border-gray-900/50">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 uppercase">Bookings & Management</h2>
          <p className="text-gray-400 mb-8 md:mb-12 max-w-xl mx-auto italic text-sm md:text-base">
            Para consultas de booking, colaboraciones o prensa, contactar directamente:
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a href="mailto:DARKINGMUSIC6@GMAIL.COM" className="w-full sm:w-auto bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-black hover:bg-gray-200 transition-all uppercase tracking-widest text-xs md:text-sm">
              Email Me
            </a>
            <a href="https://wa.me/593959172950" target="_blank" rel="noreferrer" className="w-full sm:w-auto border border-gray-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-black hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs md:text-sm">
              WhatsApp
            </a>
          </div>
        </section>
      </main>
      
      <footer className="py-8 md:py-10 text-center border-t border-gray-900 text-gray-600 text-[10px] md:text-xs uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Darking On. All rights reserved.
      </footer>
    </div>
  );
}

export default App;