"use client";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Receba ofertas exclusivas todos os dias
        </h1>

        <p className="mt-6 text-zinc-400 text-lg">
          Promoções, cupons e novidades das melhores plataformas de e-commerce direto no seu WhatsApp ou Telegram.
        </p>


        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="https://whatsapp.com/channel/0029VbDBVAdChq6GPqScRp3K"
            rel="noreferrer"
            target="_blank"
            onClick={() => {if (window.fbq) {window.fbq("track", "Lead");}}}
            className="inline-flex bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-2xl text-lg font-semibold">
            Entrar no canal do WhatsApp
          </a>
          <a
            href="https://t.me/rogger_store"
            rel="noreferrer"
            target="_blank"
            onClick={() => {if (window.fbq) {window.fbq("track", "Lead");}}}
            className="inline-flex bg-blue-500 hover:bg-blue-400 transition px-8 py-4 rounded-2xl text-lg font-semibold">
            Entrar no canal do Telegram
          </a>
        </div>
      </div>
    </section>
  );
}