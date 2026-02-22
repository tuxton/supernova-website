import Image from "next/image"

const reasons = [
  "Sentis que tu alma esta pidiendo direccion",
  "Atravesaste vinculos que te apagaron",
  "Buscas sanar tu historia sin negarla",
  "Queres ordenar tu luz y tu sombra",
  "Necesitas redescubrir tu proposito",
  "Sabes que hay una version tuya esperando nacer",
]

export function AboutBook() {
  return (
    <section
      id="sobre-el-libro"
      className="bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[oklch(0.82_0.06_330/0.15)] rounded-sm -rotate-3" />
              <Image
                src="/images/book-cover.png"
                alt="Portada del libro Ser Supernova"
                width={400}
                height={560}
                className="relative rounded-sm shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:w-7/12 flex flex-col gap-8">
            <p className="text-primary text-sm tracking-[0.25em] uppercase font-semibold">
              Sobre el libro
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              {"Que es Ser Supernova?"}
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Ser Supernova es un viaje. Un renacer. Un relato intimo donde
                cuento como mi propia explosion interna me devolvio a la vida,
                a la conciencia y al amor mas grande: el propio.
              </p>
              <p className="font-semibold text-foreground">
                Este libro es para vos si:
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground font-serif italic text-lg">
              Cada capitulo es una linterna. Cada palabra, un rito. Cada
              imagen, una brujula.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
