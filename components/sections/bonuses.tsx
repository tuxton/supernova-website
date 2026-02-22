import { Gift, FileText, Headphones, Users } from "lucide-react"

const bonuses = [
  {
    icon: FileText,
    title: "Mini cuaderno de integracion (PDF)",
    description:
      "Ejercicios simples para expandir lo que el libro despierta.",
  },
  {
    icon: Headphones,
    title: 'Audio de meditacion "Encender tu propia luz"',
    description: "Activacion breve para sostener tu energia.",
  },
  {
    icon: Users,
    title: "Acceso anticipado a mis proximos circulos y talleres",
    description:
      "Ser de las primeras en participar de mi espacio de acompanamiento.",
  },
]

export function Bonuses() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center gap-6 text-center mb-16">
          <span className="flex items-center gap-2 text-primary text-sm tracking-[0.25em] uppercase font-semibold">
            <Gift className="size-4" />
            Bonos especiales
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            {"Para acompanar tu viaje"}
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon
            return (
              <div
                key={bonus.title}
                className="flex items-start gap-6 bg-background rounded-sm p-8 shadow-sm"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Icon className="size-5 text-primary" />
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                    Bono {index + 1}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {bonus.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
