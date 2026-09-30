import OrbitCarousel from '@/components/OrbitCarousel';
import LogoKotlin from '@/components/LogoKotlin';
import SidebarTentang from '@/components/SidebarTentang';
import Marquee from '@/components/Marquee';
import { infoKelompok, anggotaData } from '@/data/anggota';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-[#7F52FF] border-b-4 border-black p-5 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-black text-white bg-black px-4 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,109,0,1)]">
          {infoKelompok.nama}
        </h1>
        <LogoKotlin size={48} />
      </nav>

      {/* Konten Utama (flex-1 bikin footer dorong ke bawah) */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 p-6 w-full max-w-[1600px] mx-auto">
        {/* Sidebar Kiri (lebih besar) */}
        <aside className="w-full lg:w-96 lg:sticky lg:top-4 lg:self-start">
          <SidebarTentang />
        </aside>

        {/* Kanan: Judul + Orbit + Marquee */}
        <section className="flex-1 flex flex-col items-center justify-start overflow-hidden">
          {/* Judul di atas orbit */}
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight bg-[#FFD700] border-4 border-black px-8 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-4 text-center">
            {infoKelompok.nama}
          </h2>
          <p className="font-bold text-base md:text-lg mb-6 text-center">
            ↓ Klik kartu atau pilih dari daftar di samping ↓
          </p>

          {/* Orbit */}
          <OrbitCarousel dataAnggota={anggotaData} />

          {/* Marquee di bawah orbit */}
          <Marquee />
        </section>
      </div>

      {/* Footer dorong ke paling bawah */}
      <footer className="w-full bg-black text-white text-center py-8 font-bold text-lg mt-auto">
        © 2026 {infoKelompok.nama} — All Rights Reserved
      </footer>
    </main>
  );
}