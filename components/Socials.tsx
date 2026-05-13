import Image from "next/image";

export function Socials() {
  return (
    <section className="py-20 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold">
          Nossas redes
        </h2>

        <div className="flex justify-center gap-6 mt-10">

          <a
            href="https://www.instagram.com/rogger_store"
            rel="noreferrer"
            target="_blank"
            className="bg-white p-4 rounded-2xl hover:bg-zinc-200 hover:scale-105 transition"
          >
            <Image src="/instagram-brands-solid-full.svg" alt="Instagram" width={50} height={50} />
          </a>

          <a
            href="https://www.facebook.com/rogger.store.shop/"
            rel="noreferrer"
            target="_blank"
            className="bg-white p-4 rounded-2xl hover:bg-zinc-200 hover:scale-105 transition"
          >
            <Image src="/facebook-brands-solid-full.svg" alt="Facebook" width={50} height={50} />
          </a>

          <a
            href="https://www.tiktok.com/@rogger_store"
            rel="noreferrer"
            target="_blank"
            className="bg-white p-4 rounded-2xl hover:bg-zinc-200 hover:scale-105 transition"
          >
            <Image src="/tiktok-brands-solid-full.svg" alt="TikTok" width={50} height={50} />
          </a>

          <a
            href="https://twitter.com/rogger_store"
            rel="noreferrer"
            target="_blank"
            className="bg-white p-4 rounded-2xl hover:bg-zinc-200 hover:scale-105 transition"
          >
            <Image src="/x-twitter-brands-solid-full.svg" alt="X" width={50} height={50} />
          </a>

        </div>

      </div>
    </section>
  );
}