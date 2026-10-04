"use client";
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { anggotaData } from '@/data/anggota';
import Link from 'next/link';
import { ArrowLeft, FileText, MapPin, Cake, Gamepad2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import LogoKotlin from '@/components/LogoKotlin';
import BackgroundDecor from '@/components/BackgroundDecor';

export default function DetailAnggota() {
  const params = useParams();
  const currentIndex = anggotaData.findIndex((a) => a.id === params.id);
  const anggota = anggotaData[currentIndex];

  if (!anggota) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="bg-red-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
          <h1 className="text-2xl font-black mb-4">Anggota tidak ditemukan!</h1>
          <Link href="/" className="bg-white border-2 border-black px-4 py-2 font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            Kembali ke Home
          </Link>
        </div>
      </main>
    );
  }

  const prevAnggota = anggotaData[(currentIndex - 1 + anggotaData.length) % anggotaData.length];
  const nextAnggota = anggotaData[(currentIndex + 1) % anggotaData.length];

  return (
    <main className="min-h-screen relative">
      {/* DECOR SAMA SEPERTI HALAMAN UTAMA */}
      <BackgroundDecor />

      {/* KONTEN UTAMA */}
      <div className="relative z-10 p-6 md:p-10 max-w-5xl mx-auto">
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

        {/* Profil Card */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden">
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            src={anggota.foto}
            alt={anggota.nama}
            className="w-48 h-48 border-4 border-black object-cover bg-[#7F52FF] flex-shrink-0"
            referrerPolicy="no-referrer"
          />
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="inline-block bg-[#7F52FF] text-white font-black px-3 py-1 border-2 border-black mb-3">
              ANGGOTA
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-3 uppercase">{anggota.nama}</h1>
            <p className="text-lg font-black bg-[#FFD700] border-2 border-black inline-block px-4 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              NIM: {anggota.nim}
            </p>
          </motion.div>
        </div>

        {/* Info Pribadi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {anggota.tempatLahir && (
            <InfoCard delay={0.6} label="TTL" icon={<Cake size={18} />} bg="#FFD700" color="#000" text={anggota.tempatLahir} />
          )}
          {anggota.daerahAsal && (
            <InfoCard delay={0.75} label="DAERAH ASAL" icon={<MapPin size={18} />} bg="#7F52FF" color="#FFF" text={anggota.daerahAsal} />
          )}
          {anggota.hobi && (
            <InfoCard delay={0.9} label="HOBI" icon={<Gamepad2 size={18} />} bg="#FF6D00" color="#FFF" text={anggota.hobi} />
          )}
          {anggota.funFact && (
            <InfoCard delay={1.05} label="FUN FACT" icon={<Sparkles size={18} />} bg="#000" color="#00E676" text={anggota.funFact} />
          )}
        </div>

        {/* CV Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-black mb-4 bg-[#FF6D00] text-white border-4 border-black inline-flex items-center gap-2 px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <FileText size={28} /> CURRICULUM VITAE
          </h2>

          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-2">
            <iframe
              src={anggota.cvPdf}
              className="w-full h-[700px] border-2 border-black"
              title={`CV ${anggota.nama}`}
              allow="autoplay"
            />
          </div>
        </motion.div>

        {/* NAVIGASI PREV/NEXT */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-stretch mb-10"
        >
          <Link href={`/anggota/${prevAnggota.id}`} className="flex-1">
            <div className="group bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer h-full flex items-center gap-4">
              <div className="bg-[#7F52FF] text-white border-4 border-black p-2 flex-shrink-0 group-hover:bg-[#6b3fe6] transition-colors">
                <ChevronLeft size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono font-black text-[10px] md:text-xs tracking-widest text-gray-600">
                  ← PREV · {prevAnggota.id}
                </p>
                <p className="font-black text-sm md:text-base truncate uppercase">
                  {prevAnggota.nama}
                </p>
              </div>
            </div>
          </Link>

          <Link href={`/anggota/${nextAnggota.id}`} className="flex-1">
            <div className="group bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer h-full flex items-center gap-4 md:flex-row-reverse md:text-right">
              <div className="bg-[#FF6D00] text-white border-4 border-black p-2 flex-shrink-0 group-hover:bg-[#e65a00] transition-colors">
                <ChevronRight size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono font-black text-[10px] md:text-xs tracking-widest text-gray-600">
                  NEXT · {nextAnggota.id} →
                </p>
                <p className="font-black text-sm md:text-base truncate uppercase">
                  {nextAnggota.nama}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

function InfoCard({ delay, label, icon, bg, color, text }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white border-4 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
    >
      <div
        className="flex items-center gap-2 mb-2 border-2 border-black px-3 py-1 inline-flex"
        style={{ background: bg, color: color }}
      >
        {icon}
        <span className="font-black text-xs tracking-wider">{label}</span>
      </div>
      <p className="font-bold text-lg">{text}</p>
    </motion.div>
  );
}