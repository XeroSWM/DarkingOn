import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { FaFacebook, FaInstagram, FaTiktok, FaSoundcloud, FaSpotify } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,    
      mirror: true,   
      offset: 120,    
      easing: 'ease-out-cubic', 
    });
  }, []);

  return (
    <div className="relative text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden z-0">
      
      {/* ================= NUEVO FONDO: STUDIO DOT GRID ================= */}
      {/* 1. Fondo base: Un degradado ultra sutil de negro puro a un morado abismal */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#11051f] -z-20"></div>
      
      {/* 2. Textura: Patrón de puntos (Dot Grid) al estilo equipo de DJ */}
      <div 
        className="fixed inset-0 opacity-[0.04] -z-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      ></div>
      {/* ================================================================ */}

      <Navbar />

      {/* --- BARRA LATERAL FLOTANTE --- */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-gray-500/10 backdrop-blur-md rounded-l-2xl p-3 py-6 flex flex-col gap-6 z-50 border-y border-l border-gray-400/10 shadow-2xl">
        <a href="https://www.facebook.com/Darking.23444444444" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-125 text-xl md:text-2xl">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/darking_on_official/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-125 text-xl md:text-2xl">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@darking_on_official" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-125 text-xl md:text-2xl">
          <FaTiktok />
        </a>
        <a href="https://soundcloud.com/darking_on_music" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-125 text-xl md:text-2xl">
          <FaSoundcloud />
        </a>
        <a href="https://open.spotify.com/intl-es/artist/6e2ZvwSvsd7TY2fr8wPE7C" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-all hover:scale-125 text-xl md:text-2xl">
          <FaSpotify />
        </a>
      </div>

      <main>
        {/* SECCIÓN: Inicio (Hero) */}
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 md:pt-20">
          
          <div data-aos="zoom-in" className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-8 rounded-full overflow-hidden border-2 border-gray-800 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative group">
            <img 
              src="/perfil.jpg" 
              alt="Darking On Portrait" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>

          <h1 data-aos="fade-down" data-aos-delay="100" className="text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter uppercase mb-2 bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
            Darking On
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-2xl text-gray-400 font-light tracking-widest uppercase mb-10 md:mb-12">
            Ecuadorian DJ & Producer
          </p>
          
          {/* Estadísticas */}
          <div data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-b border-gray-800/50 py-6 md:py-8 w-full max-w-4xl bg-black/20 backdrop-blur-sm rounded-2xl">
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
        </section>

        {/* SECCIÓN: Biografía */}
        <section id="biografia" className="py-16 md:py-24 px-4 md:px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 uppercase text-white drop-shadow-lg">About Me</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
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
          
          <div data-aos="fade-left" className="bg-gray-900/30 backdrop-blur-md p-6 md:p-8 rounded-xl border border-gray-700/50 shadow-xl">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 uppercase border-b border-gray-700/50 pb-2">Career Highlights</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                Debut oficial en Revealed Recordings (Hardwell) con "In My Heart".
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                Support oficial de Tomorrowland, Spinnin' Records y Protocol Recordings.
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                Presentaciones en Festival San Francisco y Lake Summer Festival.
              </li>
            </ul>
          </div>
        </section>

        {/* SECCIÓN: Música */}
        <section id="musica" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 uppercase text-center tracking-widest drop-shadow-lg">Best Releases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 p-5 md:p-6 rounded-2xl hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all group">
              <h4 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">In My Heart</h4>
              <p className="text-xs text-gray-400 mb-4 uppercase tracking-tighter">+300,000 views</p>
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/0woscZisOw9EfJiQxAgY7A?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 p-5 md:p-6 rounded-2xl hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all group">
              <h4 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">Hold Me Through The Night</h4>
              <p className="text-xs text-gray-400 mb-4 uppercase tracking-tighter">+270,000 views</p>
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/1GqWtvwVcD2Y5kP9s5cOWT?utm_source=generator&theme=05" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 p-5 md:p-6 rounded-2xl hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all group">
              <h4 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">All Over Again</h4>
              <p className="text-xs text-gray-400 mb-4 uppercase tracking-tighter">+95,000 views</p>
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/3ZuhMYrbaBy9or4LJIq6MS?utm_source=generator&theme=06" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </section>

        {/* GALERÍA MINIMALISTA */}
        <section id="galeria" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 uppercase text-center tracking-widest drop-shadow-lg">Live Moments</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div data-aos="zoom-in" data-aos-delay="100" className="aspect-square bg-gray-900 overflow-hidden rounded-xl border border-gray-800/50 group">
              <img src="/evento1.jpg" alt="Live Event 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            
            <div data-aos="zoom-in" data-aos-delay="200" className="aspect-square bg-gray-900 overflow-hidden rounded-xl border border-gray-800/50 group">
              <video src="/evento2.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            
            <div data-aos="zoom-in" data-aos-delay="300" className="aspect-square bg-gray-900 overflow-hidden rounded-xl border border-gray-800/50 group">
              <video src="/evento3.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            
            <div data-aos="zoom-in" data-aos-delay="400" className="aspect-square bg-gray-900 overflow-hidden rounded-xl border border-gray-800/50 group">
              <img src="/evento4.jpg" alt="Live Event 4" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
          </div>
        </section>

        {/* SECCIÓN: Contacto */}
        <section id="contacto" className="py-16 md:py-24 px-4 md:px-6 max-w-4xl mx-auto mb-10 md:mb-20 text-center border-t border-gray-900/50 relative">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 uppercase">Bookings & Management</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-gray-400 mb-8 md:mb-12 max-w-xl mx-auto italic text-sm md:text-base">
            Para consultas de booking, colaboraciones o prensa, contactar directamente:
          </p>
          
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a href="mailto:DARKINGMUSIC6@GMAIL.COM" className="w-full sm:w-auto bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-black hover:bg-gray-200 hover:scale-105 transition-all uppercase tracking-widest text-xs md:text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Email Me
            </a>
            <a href="https://wa.me/593959172950" target="_blank" rel="noreferrer" className="w-full sm:w-auto border border-gray-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-black hover:bg-white hover:text-black hover:scale-105 transition-all uppercase tracking-widest text-xs md:text-sm">
              WhatsApp
            </a>
          </div>
        </section>
      </main>
      
      <footer className="py-8 md:py-10 text-center border-t border-gray-900 text-gray-600 text-[10px] md:text-xs uppercase tracking-[0.2em] bg-transparent z-10 relative">
        © {new Date().getFullYear()} Darking On. All rights reserved.
      </footer>
    </div>
  );
}

export default App;