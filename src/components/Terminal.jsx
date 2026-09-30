"use client";
import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

export default function Terminal() {
  const [step, setStep] = useState(0);

  const lines = [
    { text: "#include <iostream>", color: "#7F52FF", bold: true },
    { text: "#include <string>", color: "#7F52FF", bold: true },
    { text: "using namespace std;", color: "#FF6D00", bold: true },
    { text: "", color: "#000" },
    { text: "class ProxyKotlin {", color: "#7F52FF", bold: true },
    { text: "  private:", color: "#FF6D00", bold: true },
    { text: "    int jumlah = 11;", color: "#000" },
    { text: "    string motto = \"#KotlinRawrr\";", color: "#00A86B" },
    { text: "    string nama = \"PROXY KOTLIN\";", color: "#00A86B" },
    { text: "", color: "#000" },
    { text: "  public:", color: "#FF6D00", bold: true },
    { text: "    void lihatDaftarAnggota();", color: "#7F52FF" },
    { text: "    void lihatDokumentasi();", color: "#7F52FF" },
    { text: "    void lihatProfil(int nim);", color: "#7F52FF" },
    { text: "    string getNama() {", color: "#000" },
    { text: "      return nama;", color: "#00A86B" },
    { text: "    }", color: "#000" },
    { text: "    int getJumlah() {", color: "#000" },
    { text: "      return jumlah;", color: "#00A86B" },
    { text: "    }", color: "#000" },
    { text: "};", color: "#7F52FF", bold: true },
    { text: "", color: "#000" },
    { text: "int main() {", color: "#7F52FF", bold: true },
    { text: "  ProxyKotlin tim;", color: "#000" },
    { text: "  tim.lihatDaftarAnggota();", color: "#000" },
    { text: "  tim.lihatDokumentasi();", color: "#000" },
    { text: "  cout << tim.getNama();", color: "#00A86B" },
    { text: "  return 0;", color: "#000" },
    { text: "}", color: "#7F52FF", bold: true },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setStep((s) => (s >= lines.length ? 0 : s + 1));
    }, 400);
    return () => clearInterval(t);
  }, [lines.length]);

  return (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(127,82,255,1)] w-full h-full flex flex-col">
      {/* Title bar */}
      <div className="bg-[#FFD700] border-b-4 border-black px-4 py-2 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <Code2 size={20} className="text-black" />
          <p className="font-mono font-black text-black text-sm tracking-wider">proxy_kotlin.cpp</p>
        </div>
        <div className="flex gap-1">
          <span className="w-3 h-3 bg-[#7F52FF] border-2 border-black rounded-full"></span>
          <span className="w-3 h-3 bg-[#FF6D00] border-2 border-black rounded-full"></span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 font-mono font-bold text-xs md:text-[12px] space-y-0.5 bg-white flex-1 overflow-y-auto">
        {lines.map((line, i) => (
          <p
            key={i}
            className="transition-all duration-300 whitespace-pre"
            style={{
              color: i < step ? line.color : "#00000020",
              fontWeight: line.bold ? 900 : 700,
            }}
          >
            {line.text || "\u00A0"}
            {i === step - 1 && <span className="animate-blink text-[#FF6D00] ml-1">▊</span>}
          </p>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-black px-4 py-2 flex justify-between items-center flex-shrink-0">
        <p className="font-mono font-black text-[#00E676] text-[10px]">g++ -o main ✓</p>
        <p className="font-mono font-black text-[#FFD700] text-[10px]">C++17</p>
      </div>
    </div>
  );
}