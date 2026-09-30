export default function LogoKotlin({ size = 40 }) {
  return (
    <div
      className="border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      style={{ width: size, height: size, background: "linear-gradient(135deg, #7F52FF 0%, #FF6D00 100%)" }}
    >
      <svg viewBox="0 0 24 24" width={size * 0.6} height={size * 0.6} fill="white">
        <path d="M24 24H0V0h24L12 12z" />
      </svg>
    </div>
  );
}