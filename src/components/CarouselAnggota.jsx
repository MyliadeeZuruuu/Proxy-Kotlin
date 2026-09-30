"use client";
import React from 'react';
import CardAnggota from './CardAnggota';

export default function OrbitCarousel({ dataAnggota }) {
  const radius = 280;
  const totalItems = dataAnggota.length;
  const angleStep = 360 / totalItems;

  return (
    <div className="relative w-full h-[700px] flex justify-center items-center overflow-hidden">
      {/* Titik tengah orbit */}
      <div className="absolute w-8 h-8 bg-[#FF6D00] border-4 border-black rounded-full z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>

      {/* Container yang berputar */}
      <div className="absolute w-full h-full flex justify-center items-center animate-orbit-spin">
        {dataAnggota.map((anggota, index) => {
          const angle = angleStep * index;
          const radian = (angle * Math.PI) / 180;
          
          // Perhitungan posisi
          const x = radius * Math.cos(radian);
          const y = radius * Math.sin(radian);

          // Perhitungan skala dan z-index berdasarkan posisi Y
          const normalizedY = (y + radius) / (2 * radius);
          const scale = 0.4 + normalizedY * 0.6;
          const zIndex = Math.round(normalizedY * 100);
          const opacity = 0.3 + normalizedY * 0.7;
          const pointerEvents = normalizedY < 0.5 ? "none" : "auto";

          return (
            <div
              key={anggota.id}
              style={{
                transform: `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) scale(${scale.toFixed(3)})`,
                zIndex: zIndex,
                opacity: opacity.toFixed(2),
                pointerEvents: pointerEvents,
              }}
              // Tambahkan animate-orbit-counter agar kartu tidak ikut miring saat container berputar
              className="absolute animate-orbit-counter"
            >
              <CardAnggota data={anggota} />
            </div>
          );
        })}
      </div>
    </div>
  );
}