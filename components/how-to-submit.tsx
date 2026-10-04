import { FileEdit, Upload, CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    icon: FileEdit,
    step: "1",
    title: "Prepare Your Manuscript",
    description: "Format your paper using the IEEE two-column conference format (maximum 7 pages including references)",
  },
  {
    icon: Upload,
    step: "2",
    title: "Submit via EDAS",
    description: "Upload your manuscript through the EDAS submission system",
    link: "https://edas.info/N34949",
  },
  {
    icon: CheckSquare,
    step: "3",
    title: "Select the Workshop",
    description: "Choose ADeCoS 2026 from the workshop list during submission",
  },
]

export function HowToSubmit() {
  return (
    <section id="submit" className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How to Submit
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-semibold">
              <Link href="https://edas.info/N34949" target="_blank" rel="noopener noreferrer">
                Submit Your Paper via EDAS
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
