export function Closing() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center flex flex-col items-center gap-8">
        <div className="w-16 h-px bg-primary/40" />
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
          Tu historia no te define.
          <br />
          <span className="text-primary">Tu luz si.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
          Este libro es una puerta. Cruzala. La vida que queres ya esta
          vibrando adentro tuyo.
        </p>
        <a
          href="#comprar"
          className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-primary-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          {"Descargar \"Ser Supernova\""}
        </a>
        <p className="font-serif text-muted-foreground italic">
          Tu viaje de regreso a vos empieza hoy
        </p>
        <div className="w-16 h-px bg-primary/40 mt-8" />
      </div>
    </section>
  )
}
