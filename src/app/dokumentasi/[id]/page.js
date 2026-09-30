import OrbitCarousel from '@/components/OrbitCarousel';
import LogoKotlin from '@/components/LogoKotlin';
import SidebarTentang from '@/components/SidebarTentang';
import Marquee from '@/components/Marquee';
import Terminal from '@/components/Terminal';
import { infoKelompok, anggotaData } from '@/data/anggota';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-[#7F52FF] border-b-4 border-black p-5 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-mono font-black text-white bg-black px-4 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,109,0,1)]">
          ./{infoKelompok.nama}
        </h1>
        <LogoKotlin size={48} />
      </nav>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 p-6 w-full max-w-[1600px] mx-auto">
        {/* Sidebar Kiri */}
        <aside className="w-full lg:w-96 lg:sticky lg:top-4 lg:self-start">
          <SidebarTentang />
          <Terminal />
        </aside>

        {/* Kanan */}
        <section className="flex-1 flex flex-col items-center justify-start overflow-hidden">
          {/* Judul di atas orbit dengan efek bracket */}
          <div className="relative mb-4">
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 font-mono font-black text-4xl text-[#7F52FF] hidden md:block">&lt;/&gt;</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight bg-[#FFD700] border-4 border-black px-8 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
              {infoKelompok.nama}
            </h2>
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 font-mono font-black text-4xl text-[#7F52FF] hidden md:block">&lt;/&gt;</span>
          </div>
          <p className="font-mono font-bold text-sm md:text-base mb-6 text-center bg-black text-[#00E676] px-4 py-2 border-2 border-black">
            $ klik kartu atau pilih dari daftar di samping <span className="animate-blink">▊</span>
          </p>

          {/* Orbit */}
          <OrbitCarousel dataAnggota={anggotaData} />

          {/* Marquee */}
          <Marquee />
        </section>
      </div>

      <footer className="w-full bg-black text-white text-center py-8 font-mono font-bold text-sm mt-auto">
        <span className="text-[#00E676]">[SYS]</span> © 2026 {infoKelompok.nama} — All Rights Reserved <span className="text-[#00E676]">[OK]</span>
      </footer>
    </main>
  );
}