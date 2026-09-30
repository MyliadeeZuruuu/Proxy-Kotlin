"use client";
import React, { useState, useEffect } from 'react';
import CardAnggota from './CardAnggota';

export default function OrbitCarousel({ dataAnggota }) {
  const [rotation, setRotation] = useState(0);
  const radius = 350; // Jarak kartu dari titik tengah
  const totalItems = dataAnggota.length;
  const angleStep = 360 / totalItems;

  // Efek animasi berputar terus menerus
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      // Ubah angka 0.3 untuk mengatur kecepatan putaran (semakin besar semakin cepat)
      setRotation((prev) => (prev + 0.3) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full h-[700px] flex justify-center items-center overflow-hidden">
      {/* Titik tengah orbit (bisa diganti logo) */}
      <div className="absolute w-8 h-8 bg-[#FF6D00] border-4 border-black rounded-full z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>

      {dataAnggota.map((anggota, index) => {
        // Hitung sudut + rotasi animasi
        const angle = angleStep * index + rotation;
        const radian = (angle * Math.PI) / 180;

        // Hitung posisi X dan Y
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        // Hitung efek kedalaman (Depth)
        // y bernilai dari -radius (belakang) sampai +radius (depan)
        const normalizedY = (y + radius) / (2 * radius); // Hasil 0 sampai 1
        
        // Semakin ke depan (nilai y besar), semakin besar skalanya
        const scale = 0.4 + normalizedY * 0.6; // Skala 0.4x (belakang) sampai 1.0x (depan)
        const zIndex = Math.round(normalizedY * 100);
        const opacity = 0.3 + normalizedY * 0.7; // Transparan di belakang

        // Matikan interaksi klik jika kartu berada di belakang
        const pointerEvents = normalizedY < 0.5 ? "none" : "auto";

        return (
          <div
            key={anggota.id}
            style={{
              transform: `translate(${x}px, ${y}px) scale(${scale})`,
              zIndex: zIndex,
              opacity: opacity,
              pointerEvents: pointerEvents,
            }}
            className="absolute transition-transform duration-75 ease-linear"
          >
            <CardAnggota data={anggota} />
          </div>
        );
      })}
    </div>
  );
}