import Link from 'next/link';

export default function CardAnggota({ data }) {
  return (
    <Link href={`/anggota/${data.id}`}>
      <div className="bg-[#7F52FF] border-[4px] md:border-[6px] border-black p-2 md:p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] hover:bg-[#8B63FF] transition-all cursor-pointer w-28 sm:w-40 md:w-52 lg:w-64 flex flex-col items-center text-white">
        <div className="border-[4px] md:border-[6px] border-black bg-white w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-2 md:mb-4 overflow-hidden">
          <img
            src={data.foto}
            alt={data.nama}
            className="w-full h-full object-cover contrast-110 saturate-125"
            referrerPolicy="no-referrer"
          />
        </div>
        <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-black text-center uppercase leading-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] line-clamp-2">
          {data.nama}
        </h3>
        <p className="font-black bg-[#FFD700] text-black border-[3px] md:border-[4px] border-black px-2 md:px-4 py-0.5 md:py-1 mt-1.5 md:mt-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs sm:text-sm md:text-lg">
          {data.id}
        </p>
      </div>
    </Link>
  );
}