import React from 'react';

export default function ProfilePhoto({ src, alt }) {
  return (
    <div className="max-w-md mx-auto aspect-[3/4] overflow-hidden rounded-3xl border border-gray-800 shadow-2xl">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}