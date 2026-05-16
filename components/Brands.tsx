import Image from "next/image";

// Centralização dos dados com nomes reais para melhorar o SEO
const BRANDS = [
  { name: "Mercado Livre", logo: "/mercado-livre-logo-vertical-2.svg" },
  { name: "Shopee", logo: "/shopee-logo.svg" },
  { name: "Magazine Luiza", logo: "/magalu-logo.svg" },
  { name: "Amazon", logo: "/logo-amazon.svg" },
  { name: "AliExpress", logo: "/aliexpress-logo.svg" },
];

export function Brands() {
  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center tracking-tight text-zinc-100">
          Grandes marcas que você encontra no canal
        </h2>
        
        <p className="mt-2 text-sm text-zinc-500 text-center">
          Monitoramos os maiores e-commerces do país em tempo real
        </p>

        {/* Grid inteligente: se adapta perfeitamente do mobile ao desktop */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="
                group
                bg-zinc-900/40 
                border border-zinc-800/40
                rounded-2xl 
                p-6 
                flex 
                items-center 
                justify-center 
                aspect-video md:aspect-square
                w-full 
                transition-all 
                duration-300 
                hover:bg-zinc-900
                hover:border-zinc-700
                hover:scale-105
                active:scale-98
              "
            >
              <div className="relative w-full h-full max-w-25 max-h-12.5] md:max-h-17.5">
                <Image
                  src={brand.logo}
                  alt={`Logo da marca ${brand.name}`}
                  fill // Usar 'fill' com container relativo é a melhor prática no Next.js para imagens responsivas
                  sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 20vw"
                  className="
                    object-contain 
                    transition-all 
                    duration-300
                    brightness-0 invert opacity-40 
                    group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100
                  "
                  // O truque acima deixa os logos brancos e discretos por padrão. 
                  // Quando passa o mouse, eles ganham as cores originais da marca!
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}