import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-supernova.jpg"
          alt="Fondo supernova"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-[oklch(0.08_0.05_330/0.6)]" />

        <div className="relative z-10 text-center px-6 py-24 max-w-3xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-[oklch(0.97_0.006_330)] leading-tight">
            No encontramos esa estrella
          </h1>
          <p className="mt-6 text-lg text-[oklch(0.92_0.01_330)]">
            Lo sentimos — la ruta que buscas no existe en este cielo. Pero hay
            muchas otras constelaciones por descubrir.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 bg-[oklch(0.72_0.10_80)] px-6 py-3 text-[oklch(0.18_0.02_320)] font-semibold rounded-sm">
              Volver al inicio
            </Link>
            <a href="#comprar" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-sm">
              Ver libro
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
