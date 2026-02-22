import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "No sabia que necesitaba este libro hasta que lo abri. Es pura revelacion.",
    author: "Lectora verificada",
  },
  {
    quote: "Es sanacion en paginas. Llore, solte, me reconoci.",
    author: "Lectora verificada",
  },
  {
    quote:
      "Senti que alguien por fin ponia palabras a lo que jamas pude explicar.",
    author: "Lectora verificada",
  },
  {
    quote: "Una obra luminosa. Una guia real hacia el renacer.",
    author: "Lectora verificada",
  },
]

export function Testimonials() {
  return (
    <section className="bg-[oklch(0.25_0.04_320)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 text-center mb-16">
          <p className="text-[oklch(0.82_0.08_80)] text-sm tracking-[0.25em] uppercase font-semibold">
            Testimonios
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[oklch(0.95_0.008_330)] leading-tight text-balance">
            Lo que estan diciendo las primeras lectoras
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.quote}
              className="bg-[oklch(0.95_0.008_330/0.08)] backdrop-blur-sm border border-[oklch(0.95_0.008_330/0.10)] rounded-sm p-8 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-[oklch(0.82_0.08_80)] text-[oklch(0.82_0.08_80)]"
                  />
                ))}
              </div>
              <p className="text-[oklch(0.95_0.008_330/0.9)] leading-relaxed italic font-serif text-lg">
                {`"${t.quote}"`}
              </p>
              <p className="text-[oklch(0.95_0.008_330/0.5)] text-sm mt-auto">
                {"-- "}{t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
