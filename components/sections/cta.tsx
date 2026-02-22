import { Sparkles } from "lucide-react"

export function CallToAction() {
  return (
    <section
      id="comprar"
      className="relative bg-[oklch(0.25_0.04_320)] py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 size-64 bg-[oklch(0.82_0.06_330)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-48 bg-[oklch(0.72_0.10_80)] rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center flex flex-col items-center gap-8">
        <Sparkles className="size-10 text-[oklch(0.82_0.08_80)]" />
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-[oklch(0.95_0.008_330)] leading-tight text-balance">
          {"Lista para tu transformacion?"}
        </h2>
        <p className="text-[oklch(0.85_0.01_330/0.7)] text-lg leading-relaxed max-w-xl">
          Si estas frente a este libro, es porque una parte tuya esta lista para
          expandirse. Para estallar hacia la luz. Para volverse supernova.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 bg-[oklch(0.72_0.10_80)] px-10 py-5 text-[oklch(0.18_0.02_320)] font-sans font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity shadow-lg shadow-[oklch(0.72_0.10_80/0.30)]"
        >
          Quiero mi libro — Descarga digital
        </a>
        <p className="text-[oklch(0.85_0.01_330/0.4)] text-sm">
          Incluye: PDF profesional + acceso inmediato + bonos
        </p>
      </div>
    </section>
  )
}
