import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { AboutBook } from "@/components/sections/about-book"
import { Benefits } from "@/components/sections/benefits"
import { Author } from "@/components/sections/author"
import { Testimonials } from "@/components/sections/testimonials"
import { Bonuses } from "@/components/sections/bonuses"
import { CallToAction } from "@/components/sections/cta"
import { IndexPreview } from "@/components/sections/index-preview"
import { FAQ } from "@/components/sections/faq"
import { Closing } from "@/components/sections/closing"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutBook />
        <Benefits />
        <Author />
        <Testimonials />
        <Bonuses />
        <CallToAction />
        <IndexPreview />
        <FAQ />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
