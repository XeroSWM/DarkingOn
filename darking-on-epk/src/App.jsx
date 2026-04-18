import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { FaFacebook, FaInstagram, FaTiktok, FaSoundcloud, FaSpotify } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // Estado para saber en qué sección estamos actualmente
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    // 1. Inicializamos las animaciones de los elementos (textos, cajas)
    AOS.init({
      duration: 800, 
      once: false,    
      mirror: true,   
      offset: 120,    
      easing: 'ease-out-cubic', 
    });

    // 2. Creamos el "Vigilante" para cambiar el fondo según el scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el usuario ve más del 30% de una sección, actualizamos el estado
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } 
    );

    // Le decimos al vigilante que mire todas las secciones
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden z-0">
      
      {/* ================= FONDO DINÁMICO CON IMÁGENES ================= */}
      <div className="fixed inset-0 -z-20 bg-black">
        {/* Fondo 1: Inicio */}
        <img
          src="/bg-inicio.jpg"
          alt="Fondo Inicio"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            activeSection === 'inicio' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Fondo 2: Biografía */}
        <img
          src="/bg-bio.jpg"
          alt="Fondo Biografía"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            activeSection === 'biografia' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Fondo 3: Música */}
        <img
          src="/bg-musica.jpg"
          alt="Fondo Música"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            activeSection === 'musica' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Fondo 4: Galería y Contacto */}
        <img
          src="/bg-live.jpg"
          alt="Fondo Live"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            ['galeria', 'contacto'].includes(activeSection) ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Capa de sombra (Overlay) para que el texto blanco siempre se lea perfecto */}
        <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-[2px]"></div>
      </div>
      {/* =============================================================== */}

      <Navbar />

      {/* --- BARRA LATERAL FLOTANTE --- */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-md rounded-l-xl p-2 py-4 flex flex-col gap-5 z-50 border-y border-l border-white/10 shadow-2xl">
        <a href="https://www.facebook.com/Darking.23444444444" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-all hover:scale-125 text-xl">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/darking_on_official/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-all hover:scale-125 text-xl">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@darking_on_official" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-all hover:scale-125 text-xl">
          <FaTiktok />
        </a>
        <a href="https://soundcloud.com/darking_on_music" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-all hover:scale-125 text-xl">
          <FaSoundcloud />
        </a>
        <a href="https://open.spotify.com/embed/track/TRACK_ID?utm_source=generator&theme=03" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-all hover:scale-125 text-xl">
          <FaSpotify />
        </a>
      </div>

      <main>
        {/* SECCIÓN: Inicio (Hero) */}
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 md:pt-20">
          
          <div data-aos="zoom-in" className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-8 rounded-full overflow-hidden border-2 border-gray-500/50 shadow-2xl relative group">
            <img 
              src="/perfil.jpg" 
              alt="Darking On Portrait" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>

          <h1 data-aos="fade-down" data-aos-delay="100" className="text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter uppercase mb-2 bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">
            Darking On
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-2xl text-gray-300 font-light tracking-widest uppercase mb-10 md:mb-12">
            Ecuadorian DJ & Producer
          </p>
          
          {/* Estadísticas */}
          <div data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-b border-gray-500/30 py-6 md:py-8 w-full max-w-4xl bg-black/30 backdrop-blur-sm rounded-2xl">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">+150K</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Monthly Listeners</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">+1M</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Worldwide Streams</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">+9M</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Playlist Reach</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">9.5K</p>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Social Media</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN: Biografía */}
        <section id="biografia" className="py-16 md:py-32 px-4 md:px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 uppercase text-white drop-shadow-xl">About Me</h2>
            <div className="space-y-4 text-gray-200 leading-relaxed text-sm md:text-base font-medium">
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
          
          <div data-aos="fade-left" className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10 shadow-2xl">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 uppercase border-b border-white/20 pb-2">Career Highlights</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">✓</span>
                Debut oficial en Revealed Recordings (Hardwell) con "In My Heart".
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">✓</span>
                Support oficial de Tomorrowland, Spinnin' Records y Protocol Recordings.
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">✓</span>
                Presentaciones en Festival San Francisco y Lake Summer Festival.
              </li>
            </ul>
          </div>
        </section>

        {/* SECCIÓN: Música */}
        <section id="musica" className="py-16 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 uppercase text-center tracking-widest drop-shadow-xl">Best Releases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all group shadow-xl">
              <h4 className="font-bold text-lg mb-1 group-hover:text-purple-300 transition-colors">In My Heart</h4>
              <p className="text-xs text-gray-300 mb-4 uppercase tracking-tighter">+300,000 views</p>
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/0woscZisOw9EfJiQxAgY7A?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all group shadow-xl">
              <h4 className="font-bold text-lg mb-1 group-hover:text-purple-300 transition-colors">Hold Me Through The Night</h4>
              <p className="text-xs text-gray-300 mb-4 uppercase tracking-tighter">+270,000 views</p>
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/1GqWtvwVcD2Y5kP9s5cOWT?utm_source=generator&theme=05" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all group shadow-xl">
              <h4 className="font-bold text-lg mb-1 group-hover:text-purple-300 transition-colors">All Over Again</h4>
              <p className="text-xs text-gray-300 mb-4 uppercase tracking-tighter">+95,000 views</p>
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/3ZuhMYrbaBy9or4LJIq6MS?utm_source=generator&theme=06" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </section>

        {/* GALERÍA MINIMALISTA */}
        <section id="galeria" className="py-16 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 uppercase text-center tracking-widest drop-shadow-xl">Live Moments</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div data-aos="zoom-in" data-aos-delay="100" className="aspect-square bg-black/40 overflow-hidden rounded-xl border border-white/10 group shadow-xl">
              <img src="/evento1.jpg" alt="Live Event 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            
            <div data-aos="zoom-in" data-aos-delay="200" className="aspect-square bg-black/40 overflow-hidden rounded-xl border border-white/10 group shadow-xl">
              <video src="/evento2.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            
            <div data-aos="zoom-in" data-aos-delay="300" className="aspect-square bg-black/40 overflow-hidden rounded-xl border border-white/10 group shadow-xl">
              <video src="/evento3.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            
            <div data-aos="zoom-in" data-aos-delay="400" className="aspect-square bg-black/40 overflow-hidden rounded-xl border border-white/10 group shadow-xl">
              <img src="/evento4.jpg" alt="Live Event 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
          </div>
        </section>

        {/* SECCIÓN: Contacto */}
        <section id="contacto" className="py-16 md:py-32 px-4 md:px-6 max-w-4xl mx-auto mb-10 md:mb-20 text-center relative">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 uppercase drop-shadow-xl">Bookings & Management</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-gray-200 mb-8 md:mb-12 max-w-xl mx-auto italic text-sm md:text-base">
            Para consultas de booking, colaboraciones o prensa, contactar directamente:
          </p>
          
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a href="mailto:DARKINGMUSIC6@GMAIL.COM" className="w-full sm:w-auto bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-black hover:bg-gray-200 hover:scale-105 transition-all uppercase tracking-widest text-xs md:text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Email Me
            </a>
            <a href="https://wa.me/593959172950" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-black/40 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-black hover:bg-white hover:text-black hover:scale-105 transition-all uppercase tracking-widest text-xs md:text-sm shadow-xl">
              WhatsApp
            </a>
          </div>
        </section>
      </main>
      
      <footer className="py-8 md:py-10 text-center border-t border-white/10 text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md z-10 relative">
        © {new Date().getFullYear()} Darking On. All rights reserved.
      </footer>
    </div>
  );
}

export default App;