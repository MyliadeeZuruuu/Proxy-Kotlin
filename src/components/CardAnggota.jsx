import Link from 'next/link';

export default function CardAnggota({ data }) {
  return (
    <Link href={`/anggota/${data.id}`}>
      <div className="bg-[#7F52FF] border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer w-64 flex flex-col items-center text-white">
        <img
          src={data.foto}
          alt={data.nama}
          className="border-4 border-black w-40 h-40 object-cover mb-4 bg-white"
        />
        <h3 className="text-xl font-black text-center uppercase">{data.nama}</h3>
        <p className="font-black bg-[#FFD700] text-black border-2 border-black px-3 py-1 mt-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          NIM: {data.nim}
        </p>
      </div>
    </Link>
  );
}