"use client";
import { useParams } from 'next/navigation';
import { anggotaData } from '@/data/anggota';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import LogoKotlin from '@/components/LogoKotlin';

export default function DetailAnggota() {
  const params = useParams();
  // Mencari data anggota berdasarkan ID di URL
  const anggota = anggotaData.find((a) => a.id === params.id);

  // Kalau ID tidak ditemukan
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

  return (
    <main className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto">
      {/* Navbar kecil */}
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#FF6D00] text-white border-4 border-black px-4 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff851a] transition-all"
        >
          <ArrowLeft size={20} /> Kembali
        </Link>
        <LogoKotlin size={40} />
      </div>

      {/* Profil Card */}
      <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10 flex flex-col md:flex-row gap-8 items-center">
        <img
          src={anggota.foto}
          alt={anggota.nama}
          className="w-48 h-48 border-4 border-black object-cover bg-[#7F52FF]"
        />
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-[#7F52FF] text-white font-black px-3 py-1 border-2 border-black mb-3">
            ANGGOTA
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-3 uppercase">{anggota.nama}</h1>
          <p className="text-lg font-black bg-[#FFD700] border-2 border-black inline-block px-4 py-1 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            NIM: {anggota.nim}
          </p>
          <p className="font-bold text-base md:text-lg">{anggota.biodata}</p>
        </div>
      </div>

      {/* CV Section (PDF Embed) */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-black mb-4 bg-[#FF6D00] text-white border-4 border-black inline-flex items-center gap-2 px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <FileText size={28} /> CURRICULUM VITAE
        </h2>

        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-2">
          {anggota.cvPdf ? (
            <iframe
              src={`${anggota.cvPdf}#toolbar=0&navpanes=0`}
              className="w-full h-[700px] border-2 border-black"
              title={`CV ${anggota.nama}`}
            />
          ) : (
            <div className="w-full h-[300px] flex flex-col items-center justify-center bg-[#F5F0FF] border-2 border-dashed border-black">
              <p className="font-black text-xl">CV belum tersedia.</p>
              <p className="font-bold text-sm mt-2">File PDF akan tampil di sini.</p>
            </div>
          )}
        </div>
        <p className="text-xs font-bold mt-3 italic">
          *Jika PDF tidak tampil, browser kamu mungkin memblokir preview.{" "}
          <a
            href={anggota.cvPdf}
            target="_blank"
            rel="noreferrer"
            className="underline text-[#7F52FF]"
          >
            Klik di sini untuk membuka PDF.
          </a>
        </p>
      </div>
    </main>
  );
}