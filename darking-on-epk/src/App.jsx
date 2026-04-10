import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      <main>
        {/* SECCIÓN: Inicio (Hero) */}
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-2 bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
            Darking On
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-widest uppercase mb-12">
            Ecuadorian DJ & Producer
          </p>
          
          {/* Estadísticas Rápidas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-800 py-8 w-full max-w-4xl">
            <div>
              <p className="text-3xl font-bold text-white">+150K</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Monthly Listeners</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">+1M</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Worldwide Streams</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">+9M</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Playlist Reach</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">9.5K</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Social Media</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN: Biografía */}
        <section id="biografia" className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase text-white">About Me</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Darking On is an Ecuadorian DJ and music producer known for his melodic and emotional Progressive House sound.
              </p>
              <p>
                At just 24 years old, he has released music on respected international labels such as Revealed Recordings, Future House Cloud, and Airwave Music. His debut on Revealed Recordings with "In My Heart" marked a key milestone, leading to over 1 million streams and 150,000+ monthly listeners on Spotify.
              </p>
              <p>
                His musical focus lies in Progressive House with strong influences from Melodic, Deep, Bass, and House styles.
              </p>
            </div>
          </div>
          
          {/* Highlights Box */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-6 uppercase border-b border-gray-800 pb-2">Career Highlights</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                Official debut on Revealed Recordings (Hardwell) with "In My Heart" (2022).
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                Supported in official playlists by Tomorrowland, Spinnin' Records, and Protocol Recordings.
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                Performed at major national festivals including Festival San Francisco and Lake Summer.
              </li>
            </ul>
          </div>
        </section>

        {/* SECCIÓN: Música (Releases) */}
        <section id="musica" className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase text-center">Best Releases</h2>
          
          {/* Aquí irán los IFRAMES de Spotify/Soundcloud. Por ahora pongo las tarjetas visuales */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Track 1 */}
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition-colors">
              <h4 className="font-bold text-lg mb-1">In My Heart</h4>
              <p className="text-xs text-purple-400 mb-4">Revealed Recordings</p>
              <div className="h-20 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-500">
                [Spotify Player Here]
              </div>
            </div>

            {/* Track 2 */}
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition-colors">
              <h4 className="font-bold text-lg mb-1">Hold Me Through The Night</h4>
              <p className="text-xs text-purple-400 mb-4">Darking On</p>
              <div className="h-20 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-500">
                [Spotify Player Here]
              </div>
            </div>

            {/* Track 3 */}
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition-colors">
              <h4 className="font-bold text-lg mb-1">All Over Again</h4>
              <p className="text-xs text-purple-400 mb-4">Dare County</p>
              <div className="h-20 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-500">
                [Spotify Player Here]
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN: Contacto */}
        <section id="contacto" className="py-24 px-6 max-w-4xl mx-auto mb-20 text-center border-t border-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Bookings & Management</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            For booking inquiries, collaborations, or press requests, please reach out directly through the channels below.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:DARKINGMUSIC6@GMAIL.COM" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              DARKINGMUSIC6@GMAIL.COM
            </a>
            <a href="https://wa.me/593959172950" target="_blank" rel="noreferrer" className="border border-gray-700 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
              +593 959172950
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;