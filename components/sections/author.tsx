import Image from "next/image"

export function Author() {
  return (
    <section id="sobre-la-autora" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[oklch(0.82_0.06_330/0.25)] rounded-full" />
              <Image
                src="/images/author-portrait.jpg"
                alt="Fedra Duarte, autora de Ser Supernova"
                width={400}
                height={500}
                className="relative rounded-full object-cover shadow-xl aspect-[4/5]"
              />
            </div>
          </div>
          <div className="lg:w-7/12 flex flex-col gap-6">
            <p className="text-primary text-sm tracking-[0.25em] uppercase font-semibold">
              Sobre la autora
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Quien soy cuando me saco todas las capas
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Soy <strong className="text-foreground">Fedra Duarte</strong>,
                mama, mujer, alma buscadora, caminante de mis sombras y
                guardiana de mi propia luz.
              </p>
              <p>
                Vivi renacimientos, perdidas, despertares y revelaciones que me
                obligaron a mirar adentro sin filtros.
              </p>
              <p className="font-serif text-foreground italic text-lg">
                Mi hijo fue mi fractura y mi faro. Mi historia, mi medicina. Y
                este libro... mi servicio.
              </p>
              <p>
                Hoy acompa&ntilde;o procesos de conciencia emocional y
                espiritual. Creo en la alquimia interna. Creo en el amor como
                energia universal. Creo en el poder de sanar para sanar a
                otros.
              </p>
            </div>
            <p className="text-primary font-serif italic text-base mt-2">
              Si estas aca, nuestras almas se reconocieron.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
