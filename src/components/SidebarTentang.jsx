"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight, Users, Image as ImageIcon } from 'lucide-react';
import { anggotaData } from '@/data/anggota';
import { dokumentasiData } from '@/data/dokumentasi';

// Helper: shuffle array dengan algoritma Fisher-Yates
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Helper: susun daftar anggota — pin 091 di atas, sisanya random
function buildDaftarAnggota() {
  const PINNED_ID = "091";
  const pinned = anggotaData.find((a) => a.id === PINNED_ID);
  const others = anggotaData.filter((a) => a.id !== PINNED_ID);
  const shuffledOthers = shuffleArray(others);
  return pinned ? [pinned, ...shuffledOthers] : shuffledOthers;
}

// Helper: urutan default tanpa shuffle (untuk render pertama / SSR)
function buildDefaultAnggota() {
  const PINNED_ID = "091";
  const pinned = anggotaData.find((a) => a.id === PINNED_ID);
  const others = anggotaData.filter((a) => a.id !== PINNED_ID);
  return pinned ? [pinned, ...others] : others;
}

export default function SidebarTentang() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [anggotaOpen, setAnggotaOpen] = useState(true);
  const [dokumentasiOpen, setDokumentasiOpen] = useState(true);

  // Pakai urutan default dulu (sama di server & client)
  const [daftarAnggota, setDaftarAnggota] = useState(buildDefaultAnggota);

  // Setelah mounted di browser, baru shuffle
  useEffect(() => {
    setDaftarAnggota(buildDaftarAnggota());
  }, []);

  return (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full h-full flex flex-col">
      {/* Header */}
      <div className="bg-[#FF6D00] text-white border-b-4 border-black p-5 flex items-center justify-between flex-shrink-0">
        <h2 className="font-black text-2xl tracking-wider">TENTANG KAMI</h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-black border-2 border-white p-2 hover:bg-[#7F52FF] transition-colors"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 border-b-4 border-black flex-shrink-0">
        <div className="p-3 border-r-4 border-black bg-[#FFD700]">
          <p className="text-3xl font-black">{anggotaData.length}</p>
          <p className="font-bold text-xs tracking-wider">ANGGOTA</p>
        </div>
        <div className="p-3 bg-[#7F52FF] text-white">
          <p className="text-3xl font-black">{dokumentasiData.length}</p>
          <p className="font-bold text-xs tracking-wider">DOKUMENTASI</p>
        </div>
      </div>

      {menuOpen && (
        <div className="p-3 space-y-3 flex-1 overflow-y-auto">
          {/* Menu Anggota */}
          <div className="border-4 border-black">
            <button
              onClick={() => setAnggotaOpen(!anggotaOpen)}
              className="w-full bg-[#7F52FF] text-white p-2.5 flex items-center justify-between font-black text-sm border-b-4 border-black hover:bg-[#6b3fe6] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Users size={18} /> DAFTAR ANGGOTA
              </span>
              {anggotaOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>

            {anggotaOpen && (
              <div className="flex flex-col max-h-[220px] overflow-y-auto bg-white">
                {daftarAnggota.map((a) => (
                  <Link
                    key={a.id}
                    href={`/anggota/${a.id}`}
                    className="p-2 pl-4 font-bold border-b-2 border-black hover:bg-[#FFD700] transition-colors text-sm flex justify-between"
                  >
                    <span>{a.nama}</span>
                    <span className="font-black text-[#7F52FF]">→</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Menu Dokumentasi */}
          <div className="border-4 border-black">
            <button
              onClick={() => setDokumentasiOpen(!dokumentasiOpen)}
              className="w-full bg-[#FF6D00] text-white p-2.5 flex items-center justify-between font-black text-sm border-b-4 border-black hover:bg-[#e65a00] transition-colors"
            >
              <span className="flex items-center gap-2">
                <ImageIcon size={18} /> DOKUMENTASI
              </span>
              {dokumentasiOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>

            {dokumentasiOpen && (
              <div className="flex flex-col bg-white">
                {dokumentasiData.map((d) => (
                  <Link
                    key={d.id}
                    href={`/dokumentasi/${d.id}`}
                    className="p-2 pl-4 font-bold border-b-2 border-black hover:bg-[#FFD700] transition-colors text-sm flex justify-between"
                  >
                    <span>{d.judul}</span>
                    <span className="font-black text-[#FF6D00]">→</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}