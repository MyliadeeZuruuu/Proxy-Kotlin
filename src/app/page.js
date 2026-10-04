import OrbitCarousel from '@/components/OrbitCarousel';
import LogoKotlin from '@/components/LogoKotlin';
import SidebarTentang from '@/components/SidebarTentang';
import Marquee from '@/components/Marquee';
import Terminal from '@/components/Terminal';
import BackgroundDecor from '@/components/BackgroundDecor';
import { infoKelompok, anggotaData } from '@/data/anggota';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="w-full bg-[#7F52FF] border-b-4 border-black p-3 md:p-5 flex justify-between items-center">
          <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-mono font-black text-white bg-black px-2 md:px-4 py-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,109,0,1)] md:shadow-[4px_4px_0px_0px_rgba(255,109,0,1)]">
            {infoKelompok.nama}::main
          </h1>
          <div className="hidden sm:block">
            <LogoKotlin size={48} />
          </div>
          <div className="sm:hidden">
            <LogoKotlin size={32} />
          </div>
        </nav>

        <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-6 p-3 md:p-6 w-full max-w-[1800px] mx-auto lg:items-stretch">
          {/* LEFT: Tentang Kami */}
          <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 flex">
            <SidebarTentang />
          </aside>

          {/* CENTER: Judul + Orbit + Marquee */}
          <section className="flex-1 flex flex-col items-center justify-start min-w-0 order-first lg:order-none">
            <div className="relative mb-3 md:mb-4">
              <span className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 font-mono font-black text-xl md:text-3xl text-[#7F52FF] hidden md:block">{"{"}</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight bg-[#FFD700] border-4 border-black px-4 md:px-8 py-2 md:py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                {infoKelompok.nama}
              </h2>
              <span className="absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 font-mono font-black text-xl md:text-3xl text-[#7F52FF] hidden md:block">{"}"}</span>
            </div>
            <p className="font-mono font-bold text-xs md:text-base mb-3 md:mb-6 text-center bg-white border-4 border-black px-3 md:px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              // klik kartu atau pilih dari daftar di samping
            </p>

            <OrbitCarousel dataAnggota={anggotaData} />
            <Marquee />
          </section>

          {/* RIGHT: C++ Code */}
          <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 flex">
            <Terminal />
          </aside>
        </div>

        {/* Footer */}
        <footer className="w-full bg-black text-white text-center py-4 md:py-8 font-mono font-bold text-xs md:text-sm mt-auto px-3">
          <span className="text-[#00E676]">/* EOF */</span> © 2026 {infoKelompok.nama} — All Rights Reserved <span className="text-[#00E676]">{"// done"}</span>
        </footer>
      </div>
    </main>
  );
}