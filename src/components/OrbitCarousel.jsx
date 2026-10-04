"use client";
import React, { useState, useEffect } from 'react';
import CardAnggota from './CardAnggota';

export default function OrbitCarousel({ dataAnggota }) {
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(300);
  const totalItems = dataAnggota.length;
  const angleStep = 360 / totalItems;

  useEffect(() => {
    setMounted(true);

    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 640) setRadius(115);      // HP
      else if (w < 1024) setRadius(200); // Tablet
      else setRadius(300);               // Desktop (tidak berubah)
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
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
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex justify-center items-center overflow-hidden">
      {/* Titik tengah orbit */}
      <div className="absolute w-5 h-5 md:w-8 md:h-8 bg-[#FF6D00] border-[4px] md:border-[6px] border-black rounded-full z-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>

      {dataAnggota.map((anggota, index) => {
        const angle = angleStep * index + (mounted ? rotation : 0);
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        const normalizedY = (y + radius) / (2 * radius);
        const scale = 0.7 + normalizedY * 0.3;
        const zIndex = Math.round(normalizedY * 100);
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