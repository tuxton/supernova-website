import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-supernova.jpg"
        alt="Supernova luminosa dorada"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[oklch(0.30_0.04_320/0.55)]" />
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-24 text-center max-w-3xl mx-auto">
        <p className="text-[oklch(0.82_0.08_80)] text-sm tracking-[0.35em] uppercase font-sans font-medium">
          Fedra Duarte presenta
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[oklch(0.97_0.006_330)] leading-tight text-balance">
          Ser Supernova
        </h1>
        <p className="font-serif text-xl md:text-2xl text-[oklch(0.82_0.08_80)] italic">
          El estallido que te convierte en luz
        </p>
        <p className="text-[oklch(0.92_0.01_330)] text-base md:text-lg leading-relaxed max-w-xl">
          Una guia intima, visceral y luminosa para transformar tu historia en
          conciencia, y tu dolor en expansion.
        </p>
        <a
          href="#comprar"
          className="mt-4 inline-flex items-center gap-2 bg-[oklch(0.72_0.10_80)] px-8 py-4 text-[oklch(0.18_0.02_320)] font-sans font-semibold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          Quiero mi libro digital
        </a>
        <p className="text-[oklch(0.85_0.01_330/0.6)] text-xs max-w-md">
          {
            "Escribi este libro para las almas que caminaron entre sombras, que se rompieron y se reconstruyeron, que sienten que adentro suyo algo quiere estallar... pero hacia la luz."
          }
        </p>
        <a
          href="#sobre-el-libro"
          className="absolute bottom-10 animate-bounce text-[oklch(0.92_0.01_330/0.6)] hover:text-[oklch(0.97_0.006_330)] transition-colors"
          aria-label="Desplazarse hacia abajo"
        >
          <ArrowDown className="size-6" />
        </a>
      </div>
    </section>
  )
}
