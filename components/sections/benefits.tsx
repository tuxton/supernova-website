import { Check } from "lucide-react"

const benefits = [
  "Recuperar tu voz interior",
  "Reescribir tu historia desde el poder",
  "Integrar tu sombra con amor",
  "Comprender tus heridas como maestras",
  "Activar tu proposito esencial",
  "Manifestar una nueva realidad desde la coherencia",
  "Honrar tu energia femenina y creadora",
  "Entender la alquimia emocional: convertir dolor en sabiduria",
  "Reconectar con tu alma, tu instinto y tu luz",
  "Aprender a sostenerte en amor propio",
  "Renacer como la mujer que siempre fuiste",
]

export function Benefits() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center gap-6 text-center mb-16">
          <p className="text-primary text-sm tracking-[0.25em] uppercase font-semibold">
            Tu transformacion
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Lo que te vas a llevar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-4 bg-background/70 rounded-sm px-5 py-4"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
                <Check className="size-3.5 text-primary" />
              </span>
              <span className="text-foreground text-sm leading-relaxed">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground font-serif italic text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {
              "Este libro no es teoria. Es proceso. Es carne. Es conciencia hecha palabra."
            }
          </p>
        </div>
      </div>
    </section>
  )
}
