import { FileText, Users, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CallForPapers() {
  return (
    <section id="cfp" className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Call for Papers
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We invite original and unpublished contributions on agentic AI and decentralized coordination for softwarized networks. Contributions may include theoretical advances, system designs, algorithms, prototypes, and experimental evaluations. We particularly encourage submissions demonstrating practical relevance and real-world applicability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-foreground">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-foreground min-w-20">Format:</span>
                <span>IEEE two-column conference format</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-foreground min-w-20">Length:</span>
                <span>Up to 7 pages (including references)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-foreground min-w-20">Submission:</span>
                <span>Submit via EDAS</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">Publication:</span>
                <span>IEEE NetSoft 2026 Workshop Proceedings (IEEE Xplore, subject to policy)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-foreground">Review Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Each submission will receive at least <em className="text-foreground/80 not-italic font-medium">3 independent reviews</em>.</p>
              <div>
                <p className="font-semibold text-foreground mb-2">Evaluation criteria include:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Originality</li>
                  <li>Technical quality</li>
                  <li>Clarity</li>
                  <li>Relevance to workshop topics</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
