export default function Marquee() {
  const items = Array(20).fill("#KotlinRawrr");

  return (
    <div className="w-full bg-[#7F52FF] border-y-4 border-black overflow-hidden py-4 mt-8 relative">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-white font-mono font-black text-2xl md:text-3xl uppercase">
            {item} <span className="text-[#FFD700]">▊</span>
          </span>
        ))}
      </div>
    </div>
  );
}