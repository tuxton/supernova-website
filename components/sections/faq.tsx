"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "En que formato viene el libro?",
    answer:
      "En PDF profesional. Se puede leer en celular, tablet, computadora o Kindle.",
  },
  {
    question: "Como recibo mi compra?",
    answer:
      "Apenas realizas el pago, te llega un email con el link de descarga inmediata.",
  },
  {
    question:
      "Puedo leerlo aunque no tenga experiencia en espiritualidad?",
    answer:
      "Si. El libro esta escrito desde lo humano, lo visceral y lo simple. No necesitas ningun conocimiento previo.",
  },
  {
    question: "Que pasa si no me llega el archivo?",
    answer:
      "Me escribis y te lo enviamos en el momento. Estamos siempre disponibles para ayudarte.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-center gap-6 text-center mb-16">
          <p className="text-primary text-sm tracking-[0.25em] uppercase font-semibold">
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="text-base font-serif font-semibold text-foreground py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
