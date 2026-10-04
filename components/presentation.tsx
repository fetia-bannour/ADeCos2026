import { Presentation as PresentationIcon, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Full slide deck from the first ADeCoS 2026 edition
const SLIDES_URL = "/adecos-2026-slides.pdf"

export function Presentation() {
  return (
    <section id="presentation" className="py-10 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
            <PresentationIcon className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Workshop Presentation
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty mb-8">
            The slides from this first edition of ADeCoS, covering the workshop vision, technical program, and
            open research challenges, are available below.
          </p>

          <Button asChild size="lg" className="font-semibold">
            <Link href={SLIDES_URL} target="_blank" rel="noopener noreferrer">
              View Slides
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
