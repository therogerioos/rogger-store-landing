import { CheckCircle2, ShieldAlert, Zap } from "lucide-react";

export function About() {
  return (
    <section className="py-24 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100">
            Como funcionam os nossos canais?
          </h2>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            Nossa equipe (e nossos robôs) monitora a internet 24 horas por dia para que você não precise perder tempo procurando descontos.
          </p>
        </div>

        {/* Grid de Benefícios / Pilares */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pilar 1 */}
          <div className="bg-zinc-900/40 border border-zinc-800/60 p-6 rounded-2xl flex flex-col items-start text-left">
            <div className="p-3 bg-green-500/10 text-green-400 rounded-xl mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-100 mb-2">Promoções Reais</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Chega de &quot;metade do dobro&quot;. Só postamos produtos que realmente estão no menor preço histórico ou com cupons agressivos.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="bg-zinc-900/40 border border-zinc-800/60 p-6 rounded-2xl flex flex-col items-start text-left">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-100 mb-2">Filtro Anti-Spam</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Nada de links falsos ou grupos poluídos com conversas fiadas. O canal é silencioso e focado apenas no que interessa: economizar.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="bg-zinc-900/40 border border-zinc-800/60 p-6 rounded-2xl flex flex-col items-start text-left">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-100 mb-2">Aviso Imediato</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Bugs de preço e estoques limitados duram poucos minutos. No WhatsApp ou Telegram, você recebe a notificação no segundo em que ela sai.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}