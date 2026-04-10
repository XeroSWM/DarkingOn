import React from 'react';

// Ejemplo de datos de imagen
const eventImages = [
  { id: 1, src: 'ruta/a/foto-evento1.jpg', alt: 'Darking On en el Festival San Francisco' },
  { id: 2, src: 'ruta/a/foto-evento2.jpg', alt: 'Presentación en Lake Summer' },
  { id: 3, src: 'ruta/a/foto-evento3.jpg', alt: 'Set energético en vivo' },
  { id: 4, src: 'ruta/a/foto-evento4.jpg', alt: 'Darking On detrás de los decks' },
  // ... más fotos de eventos
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
      {eventImages.map((image) => (
        <div key={image.id} className="aspect-square bg-gray-900 overflow-hidden rounded-xl border border-gray-800 group transition-all hover:border-purple-500/50">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}