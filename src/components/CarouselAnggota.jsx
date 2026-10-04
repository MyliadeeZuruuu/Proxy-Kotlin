"use client";
import React, { useState, useEffect } from 'react';
import CardAnggota from './CardAnggota';

export default function OrbitCarousel({ dataAnggota }) {
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const radius = 300; // sedikit diperbesar biar kartu tidak tumpuk
  const totalItems = dataAnggota.length;
  const angleStep = 360 / totalItems;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let animationFrameId;
    const animate = () => {
      setRotation((prev) => +(prev + 0.3).toFixed(2) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mounted]);

  return (
    <div className="relative w-full h-[700px] flex justify-center items-center overflow-hidden">
      {/* Titik tengah orbit */}
      <div className="absolute w-8 h-8 bg-[#FF6D00] border-[6px] border-black rounded-full z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>

      {dataAnggota.map((anggota, index) => {
        const angle = angleStep * index + (mounted ? rotation : 0);
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        const normalizedY = (y + radius) / (2 * radius);
        // Skala: 0.7x (belakang) sampai 1.0x (depan) — tidak terlalu mengecil
        const scale = 0.7 + normalizedY * 0.3;
        const zIndex = Math.round(normalizedY * 100);
        // Opacity: 0.75 (belakang) sampai 1.0 (depan) — kartu tetap tegas
        const opacity = 0.75 + normalizedY * 0.25;
        const pointerEvents = normalizedY < 0.5 ? "none" : "auto";

        return (
          <div
            key={anggota.id}
            suppressHydrationWarning
            style={{
              transform: `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) scale(${scale.toFixed(3)})`,
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