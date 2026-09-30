"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight, Users, Image as ImageIcon } from 'lucide-react';
import { anggotaData } from '@/data/anggota';
import { dokumentasiData } from '@/data/dokumentasi';

export default function SidebarTentang() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [anggotaOpen, setAnggotaOpen] = useState(true); // default terbuka
  const [dokumentasiOpen, setDokumentasiOpen] = useState(true); // default terbuka

  return (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full">
      {/* Header: TENTANG KAMI */}
      <div className="bg-[#FF6D00] text-white border-b-4 border-black p-6 flex items-center justify-between">
        <h2 className="font-black text-2xl md:text-3xl tracking-wider">TENTANG KAMI</h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-black border-2 border-white p-2 hover:bg-[#7F52FF] transition-colors"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 border-b-4 border-black">
        <div className="p-4 border-r-4 border-black bg-[#FFD700]">
          <p className="text-4xl font-black">{anggotaData.length}</p>
          <p className="font-bold text-xs tracking-wider">ANGGOTA</p>
        </div>
        <div className="p-4 bg-[#7F52FF] text-white">
          <p className="text-4xl font-black">{dokumentasiData.length}</p>
          <p className="font-bold text-xs tracking-wider">DOKUMENTASI</p>
        </div>
      </div>

      {menuOpen && (
        <div className="p-4 space-y-4">
          {/* Menu Anggota */}
          <div className="border-4 border-black">
            <button
              onClick={() => setAnggotaOpen(!anggotaOpen)}
              className="w-full bg-[#7F52FF] text-white p-3 flex items-center justify-between font-black border-b-4 border-black hover:bg-[#6b3fe6] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Users size={20} /> DAFTAR ANGGOTA
              </span>
              {anggotaOpen ? <ChevronDown size={22} /> : <ChevronRight size={22} />}
            </button>

            {anggotaOpen && (
              <div className="flex flex-col max-h-[300px] overflow-y-auto bg-white">
                {anggotaData.map((a) => (
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
              className="w-full bg-[#FF6D00] text-white p-3 flex items-center justify-between font-black border-b-4 border-black hover:bg-[#e65a00] transition-colors"
            >
              <span className="flex items-center gap-2">
                <ImageIcon size={20} /> DOKUMENTASI
              </span>
              {dokumentasiOpen ? <ChevronDown size={22} /> : <ChevronRight size={22} />}
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