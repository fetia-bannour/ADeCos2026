import { Calendar } from "lucide-react"

const dates = [
  { event: "Paper Submission Deadline", date: "April 8, 2026" },
  { event: "Notification of Acceptance", date: "April 24, 2026" },
  { event: "Camera-Ready Deadline", date: "May 4, 2026" },
  { event: "Workshop Date", date: "June 29, 2026" },
]

export function ImportantDates() {
  return (
    <section id="dates" className="py-10 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Important Dates
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-6">
              {dates.map((item, index) => (
                <div key={item.event} className="flex items-center gap-6">
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-primary/10 border-4 border-background items-center justify-center shrink-0 relative z-10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-lg p-4 md:p-6 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="font-semibold text-foreground">{item.event}</h3>
                      <span className="text-primary font-bold">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
