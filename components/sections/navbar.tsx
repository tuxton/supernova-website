"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Sobre el libro", href: "#sobre-el-libro" },
  { label: "Autora", href: "#sobre-la-autora" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className={`font-serif text-xl font-bold transition-colors ${
            scrolled ? "text-foreground" : "text-[oklch(0.97_0.006_330)]"
          }`}
        >
          Ser Supernova
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? "text-foreground" : "text-[oklch(0.92_0.01_330/0.8)]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#comprar"
            className="bg-primary text-primary-foreground text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
          >
            Comprar
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors ${
            scrolled ? "text-foreground" : "text-[oklch(0.97_0.006_330)]"
          }`}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-foreground text-sm font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#comprar"
            onClick={() => setMobileOpen(false)}
            className="bg-primary text-primary-foreground text-xs font-semibold tracking-wider uppercase px-5 py-3 rounded-sm text-center hover:opacity-90 transition-opacity"
          >
            Comprar
          </a>
        </div>
      )}
    </header>
  )
}
