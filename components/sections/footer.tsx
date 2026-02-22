export function Footer() {
  return (
    <footer className="bg-[oklch(0.20_0.04_320)] py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-serif text-lg font-bold text-[oklch(0.95_0.008_330)]">
            Ser Supernova
          </p>
          <p className="text-[oklch(0.85_0.01_330/0.4)] text-xs">
            Por Fedra Duarte
          </p>
        </div>
        <p className="text-[oklch(0.85_0.01_330/0.3)] text-xs">
          {`\u00A9 ${new Date().getFullYear()} Fedra Duarte. Todos los derechos reservados.`}
        </p>
      </div>
    </footer>
  )
}
