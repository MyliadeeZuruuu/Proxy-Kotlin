export default function BackgroundDecor() {
  const stickers = [
    // Keywords
    { text: "class", top: "6%", left: "3%", bg: "#7F52FF", color: "#FFF", rotate: "-12deg" },
    { text: "public:", top: "14%", right: "5%", bg: "#FF6D00", color: "#FFF", rotate: "8deg" },
    { text: "private:", top: "70%", left: "2%", bg: "#FFD700", color: "#000", rotate: "5deg" },
    { text: "protected:", top: "84%", right: "8%", bg: "#7F52FF", color: "#FFF", rotate: "-8deg" },
    { text: "virtual", top: "30%", left: "12%", bg: "#FF6D00", color: "#FFF", rotate: "-6deg" },
    { text: "static", top: "56%", right: "6%", bg: "#FFD700", color: "#000", rotate: "12deg" },
    { text: "const", top: "36%", left: "30%", bg: "#7F52FF", color: "#FFF", rotate: "-5deg" },
    { text: "template<T>", top: "62%", right: "3%", bg: "#FF6D00", color: "#FFF", rotate: "7deg" },

    // Types & symbols
    { text: "int", top: "25%", right: "22%", bg: "#FFD700", color: "#000", rotate: "-15deg" },
    { text: "string", top: "48%", left: "3%", bg: "#7F52FF", color: "#FFF", rotate: "10deg" },
    { text: "void", top: "8%", left: "48%", bg: "#FF6D00", color: "#FFF", rotate: "0deg" },
    { text: "bool", top: "80%", left: "42%", bg: "#FFD700", color: "#000", rotate: "-10deg" },
    { text: "vector<int>", top: "20%", left: "24%", bg: "#7F52FF", color: "#FFF", rotate: "-18deg" },

    // Snippets
    { text: "#include", top: "88%", left: "55%", bg: "#FF6D00", color: "#FFF", rotate: "-4deg" },
    { text: "namespace std;", top: "50%", right: "16%", bg: "#7F52FF", color: "#FFF", rotate: "9deg" },
    { text: "cout <<", top: "8%", right: "24%", bg: "#FFD700", color: "#000", rotate: "-11deg" },
    { text: "cin >>", top: "42%", left: "44%", bg: "#FF6D00", color: "#FFF", rotate: "15deg" },
    { text: "return 0;", top: "66%", left: "10%", bg: "#7F52FF", color: "#FFF", rotate: "-7deg" },
    { text: "new / delete", bottom: "5%", left: "6%", bg: "#FFD700", color: "#000", rotate: "3deg" },
    { text: "->", top: "28%", left: "56%", bg: "#7F52FF", color: "#FFF", rotate: "-9deg" },
    { text: "::", top: "74%", right: "3%", bg: "#FF6D00", color: "#FFF", rotate: "7deg" },
    { text: "/* comment */", bottom: "12%", left: "18%", bg: "#7F52FF", color: "#FFF", rotate: "4deg" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Watermark dengan kurung kurawal class */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="font-mono font-black text-[11vw] leading-none text-black/[0.04] whitespace-nowrap select-none">
          {"class ProxyKotlin { };"}
        </h1>
      </div>

      {/* Sticker C++ */}
      {stickers.map((s, i) => (
        <div
          key={i}
          className="absolute font-mono font-black text-base md:text-xl px-3 py-1 md:px-4 md:py-2 border-4 border-black select-none"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            background: s.bg,
            color: s.color,
            transform: `rotate(${s.rotate})`,
            opacity: 0.16,
            boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.85)",
          }}
        >
          {s.text}
        </div>
      ))}

      {/* Blob gradient */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#7F52FF] opacity-[0.08] rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#FF6D00] opacity-[0.08] rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-[#FFD700] opacity-[0.10] rounded-full blur-3xl"></div>
    </div>
  );
}