"use client";
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { dokumentasiData } from '@/data/dokumentasi';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import LogoKotlin from '@/components/LogoKotlin';
import BackgroundDecor from '@/components/BackgroundDecor';

export default function DetailDokumentasi() {
  const params = useParams();
  const currentIndex = dokumentasiData.findIndex((d) => d.id === params.id);
  const data = dokumentasiData[currentIndex];

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="bg-red-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
          <h1 className="text-2xl font-black mb-4">Dokumentasi tidak ditemukan!</h1>
          <Link href="/" className="bg-white border-2 border-black px-4 py-2 font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            Kembali ke Home
          </Link>
        </div>
      </main>
    );
  }

  const prevData = dokumentasiData[(currentIndex - 1 + dokumentasiData.length) % dokumentasiData.length];
  const nextData = dokumentasiData[(currentIndex + 1) % dokumentasiData.length];

  return (
    <main className="min-h-screen relative">
      {/* DECOR SAMA SEPERTI HALAMAN UTAMA */}
      <BackgroundDecor />

      <div className="relative z-10 p-6 md:p-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#FF6D00] text-white border-4 border-black px-4 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff851a] transition-all"
          >
            <ArrowLeft size={20} /> Kembali
          </Link>
          <LogoKotlin size={40} />
        </motion.div>

        {/* Judul — slide dari kiri */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8"
        >
          <span className="inline-block bg-[#7F52FF] text-white font-black px-3 py-1 border-2 border-black mb-3 text-sm">
            DOKUMENTASI
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-2 uppercase">{data.judul}</h1>
          <p className="font-bold text-base md:text-lg">{data.deskripsi}</p>
        </motion.div>

        {/* Galeri */}
        <div className="mb-10">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-black mb-4 bg-[#FF6D00] text-white border-4 border-black inline-flex items-center gap-2 px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <ImageIcon size={24} /> GALERI
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.media && data.media.length > 0 ? (
              data.media.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.2 }}
                  className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                >
                  {m.type === "video" ? (
                    <video src={m.src} controls className="w-full aspect-video border-b-4 border-black bg-black" />
                  ) : (
                    <img
                      src={m.src}
                      alt={m.caption || data.judul}
                      className="w-full aspect-video object-cover border-b-4 border-black"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {m.caption && (
                    <p className="font-black p-3 text-center bg-[#FFD700]">{m.caption}</p>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="col-span-full w-full h-[300px] flex flex-col items-center justify-center bg-[#F5F0FF] border-2 border-dashed border-black">
                <p className="font-black text-xl">Belum ada media.</p>
              </div>
            )}
          </div>
        </div>

        {/* NAVIGASI PREV/NEXT DOKUMENTASI */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-stretch mb-10"
        >
          <Link href={`/dokumentasi/${prevData.id}`} className="flex-1">
            <div className="group bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer h-full flex items-center gap-4">
              <div className="bg-[#7F52FF] text-white border-4 border-black p-2 flex-shrink-0 group-hover:bg-[#6b3fe6] transition-colors">
                <ChevronLeft size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono font-black text-[10px] md:text-xs tracking-widest text-gray-600">
                  ← PREV
                </p>
                <p className="font-black text-sm md:text-base truncate uppercase">
                  {prevData.judul}
                </p>
              </div>
            </div>
          </Link>

          <Link href={`/dokumentasi/${nextData.id}`} className="flex-1">
            <div className="group bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer h-full flex items-center gap-4 md:flex-row-reverse md:text-right">
              <div className="bg-[#FF6D00] text-white border-4 border-black p-2 flex-shrink-0 group-hover:bg-[#e65a00] transition-colors">
                <ChevronRight size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono font-black text-[10px] md:text-xs tracking-widest text-gray-600">
                  NEXT →
                </p>
                <p className="font-black text-sm md:text-base truncate uppercase">
                  {nextData.judul}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}