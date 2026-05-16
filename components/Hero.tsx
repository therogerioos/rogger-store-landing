"use client";

import { MessageSquare, Send, ShieldCheck, Zap } from "lucide-react"; // Opcional: ícones trazem muita conversão

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-zinc-950 text-zinc-50">
      <div className="max-w-3xl text-center flex flex-col items-center">
        
        {/* Badge de Confiança/Urgência */}
        <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-green-500/20">
          <Zap className="w-4 h-4" />
          Acesso 100% Gratuito
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Receba ofertas exclusivas <br />
          <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            todos os dias
          </span>
        </h1>

        <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-2xl">
          Economize tempo e dinheiro. Promoções validadas, cupons e bugs das melhores plataformas de e-commerce direto no seu celular.
        </p>

        {/* Container de Botões Otimizado */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-md sm:max-w-none">
          
          {/* Botão Principal: WhatsApp (Foco total) */}
          <a
            href="https://whatsapp.com/channel/0029VbDBVAdChq6GPqScRp3K"
            rel="noreferrer"
            target="_blank"
            onClick={() => {
              if (window.fbq) {
                window.fbq("track", "Lead", { value: 10, currency: "BRL" });
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-zinc-950 font-bold px-8 py-4 rounded-2xl text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-500/20 animate-pulse-subtle"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            Entrar no Canal do WhatsApp
          </a>

          {/* Botão Secundário: Telegram (Visualmente mais leve) */}
          <a
            href="https://t.me/rogger_store"
            rel="noreferrer"
            target="_blank"
            onClick={() => {
              if (window.fbq) {
                window.fbq("track", "Lead", { value: 5, currency: "BRL" });
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 font-semibold px-8 py-4 rounded-2xl text-lg transition-all"
          >
            <Send className="w-5 h-5" />
            Pelo Telegram
          </a>
        </div>

        {/* Micro-copy de segurança abaixo dos botões */}
        <p className="mt-6 text-xs text-zinc-500 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-zinc-400" />
          Seus dados estão seguros. Sem spam, saia quando quiser.
        </p>

      </div>
    </section>
  );
}