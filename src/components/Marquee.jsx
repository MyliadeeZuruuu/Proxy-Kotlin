export default function Marquee() {
  const items = Array(20).fill("#KotlinRawrr");

  return (
    <div className="w-full bg-[#7F52FF] border-y-4 border-black overflow-hidden py-4 mt-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-white font-black text-2xl md:text-3xl uppercase">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}