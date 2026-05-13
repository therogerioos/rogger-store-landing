import Image from "next/image";

export function Header() {
  return (
    <header className="py-2 border-b border-zinc-800 fixed w-full z-50 bg-zinc-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <Image src="/roggerstore-ezgif.com-gif-maker.gif" alt="Rogger Store" width={150} height={150} />
      </div>
    </header>
  );
}