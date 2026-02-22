import { BookOpen } from "lucide-react"

const parts = [
  {
    number: "I",
    title: "El Estallido",
    chapters: "Capitulos 1 a 3",
  },
  {
    number: "II",
    title: "Entre Sombras y Fragmentos",
    chapters: "Capitulos 4 y 5",
  },
  {
    number: "III",
    title: "El Renacer",
    chapters: "Capitulos 6 a 9",
  },
  {
    number: "IV",
    title: "Convertir el Estallido en Luz",
    chapters: "Capitulos 10 a 12 + Epilogo",
  },
]

export function IndexPreview() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-center gap-6 text-center mb-16">
          <span className="flex items-center gap-2 text-primary text-sm tracking-[0.25em] uppercase font-semibold">
            <BookOpen className="size-4" />
            Adelanto
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            {"Que vas a encontrar adentro"}
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {parts.map((part, index) => (
            <div
              key={part.number}
              className={`flex items-center gap-6 py-8 ${
                index !== parts.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 font-serif text-xl font-bold text-primary">
                {part.number}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {part.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {part.chapters}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
