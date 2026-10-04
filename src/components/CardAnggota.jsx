import Link from 'next/link';

export default function CardAnggota({ data }) {
  return (
    <Link href={`/anggota/${data.id}`}>
      <div className="bg-[#7F52FF] border-[6px] border-black p-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] hover:bg-[#8B63FF] transition-all cursor-pointer w-64 flex flex-col items-center text-white">
        <div className="border-[6px] border-black bg-white w-40 h-40 mb-4 overflow-hidden">
          <img
            src={data.foto}
            alt={data.nama}
            className="w-full h-full object-cover contrast-110 saturate-125"
            referrerPolicy="no-referrer"
          />
        </div>
        <h3 className="text-base font-black text-center uppercase leading-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          {data.nama}
        </h3>
        <p className="font-black bg-[#FFD700] text-black border-[4px] border-black px-4 py-1 mt-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg">
          {data.id}
        </p>
      </div>
    </Link>
  );
}