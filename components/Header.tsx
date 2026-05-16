import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-900/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Link envolvendo a Logo para melhorar a experiência do usuário */}
        <a 
          href="#" 
          className="relative flex items-center h-full hover:opacity-90 transition-opacity"
          aria-label="Voltar ao topo da Rogger Store"
        >
          <div className="relative w-32 h-10 flex items-center justify-center">
            <Image 
              src="/roggerstore-ezgif.com-gif-maker.gif" 
              alt="Logo Rogger Store" 
              fill // Permite que a imagem preencha o container mantendo a proporção
              sizes="128px"
              priority // Carrega o GIF instantaneamente por estar no topo da página (LCP)
              className="object-contain"
            />
          </div>
        </a>

        {/* Espaço reservado caso você queira colocar um botão discreto no futuro (ex: "Contato" ou "Canais") */}
        <div className="hidden sm:flex items-center gap-4 text-xs text-zinc-500 font-medium">
          <span>• Ofertas 24h</span>
        </div>

      </div>
    </header>
  );
}