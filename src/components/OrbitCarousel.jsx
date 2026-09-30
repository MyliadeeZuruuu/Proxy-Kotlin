"use client";
import React, { useState, useEffect } from 'react';
import CardAnggota from './CardAnggota';

export default function OrbitCarousel({ dataAnggota }) {
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);
  const radius = 280;
  const totalItems = dataAnggota.length;
  const angleStep = 360 / totalItems;

  useEffect(() => {
    setMounted(true);
    let animationFrameId;
    
    const animate = () => {
      setRotation((prev) => (prev + 0.2) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full h-[700px] flex justify-center items-center overflow-hidden">
      <div className="absolute w-8 h-8 bg-[#FF6D00] border-4 border-black rounded-full z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>

      {dataAnggota.map((anggota, index) => {
        const angle = angleStep * index + rotation;
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        const normalizedY = (y + radius) / (2 * radius);
        const scale = 0.4 + normalizedY * 0.6;
        const zIndex = Math.round(normalizedY * 100);
        const opacity = 0.3 + normalizedY * 0.7;
        const pointerEvents = normalizedY < 0.5 ? "none" : "auto";

        if (!mounted) return null;

        return (
          <div
            key={anggota.id}
            style={{
              // PERHATIKAN BARIS INI:
              // translate = memindahkan posisi
              // scale = mengubah ukuran
              // rotate(-rotation) = MEMUTAR BALIK AGAR KARTU TETAP TEGAK
              transform: `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) scale(${scale.toFixed(3)}) rotate(${-rotation}deg)`,
              zIndex: zIndex,
              opacity: opacity.toFixed(2),
              pointerEvents: pointerEvents,
            }}
            className="absolute"
          >
            <CardAnggota data={anggota} />
          </div>
        );
      })}
    </div>
  );
}