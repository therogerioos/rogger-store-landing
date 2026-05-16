import Image from "next/image";

// 1. Centralização dos dados para facilitar a manutenção
const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/rogger_store",
    icon: "/instagram-brands-solid-full.svg",
    hoverClass: "hover:bg-gradient-to-tr hover:from-amber-500 hover:to-purple-600 hover:text-white",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/rogger.store.shop/",
    icon: "/facebook-brands-solid-full.svg",
    hoverClass: "hover:bg-blue-600 hover:text-white",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@rogger_store",
    icon: "/tiktok-brands-solid-full.svg",
    hoverClass: "hover:bg-black hover:text-white",
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/rogger_store",
    icon: "/x-twitter-brands-solid-full.svg",
    hoverClass: "hover:bg-zinc-800 hover:text-white",
  },
];

export function Socials() {
  return (
    <section className="py-20 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
          Acompanhe nossas redes
        </h2>
        
        <p className="mt-2 text-sm text-zinc-500">
          Fique por dentro dos bastidores e avisos rápidos
        </p>

        {/* Grid responsivo: 2 colunas no mobile, 4 em telas maiores */}
        <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 md:gap-6 mt-10 max-w-sm sm:max-w-none mx-auto">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              rel="noreferrer"
              target="_blank"
              aria-label={`Visitar nosso perfil no ${social.name}`}
              className={`flex items-center justify-center p-5 rounded-2xl bg-zinc-900 border border-zinc-800/60 text-zinc-400 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 ${social.hoverClass}`}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={32} // Reduzido levemente de 50 para 32 para ficar mais elegante e harmônico
                height={32}
                className="transition-transform duration-350 select-none opacity-80 group-hover:opacity-100" 
                // Nota: Se os seus SVGs forem pretos, a classe 'invert' vai deixá-los brancos para combinarem com o tema escuro. 
                // Se eles já forem brancos ou coloridos, pode remover o 'invert'.
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}