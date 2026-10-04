import { CheckCircle2 } from "lucide-react"

const topics = [
  "Agentic architectures for SDN/NFV control",
  "Intent-to-action and goal decomposition",
  "Planning and decision-making under uncertainty",
  "Multi-agent coordination, negotiation, and communication",
  "Decentralized and federated control planes",
  "Network slicing and multi-domain orchestration",
  "LLM-assisted reasoning and decision-making",
  "Policy compliance, verification, and safety",
  "Trust, governance, and security",
  "Deterministic networking (TSN / DetNet)",
  "Energy-aware and sustainable orchestration",
  "Benchmarks, datasets, and experimental testbeds",
]

export function Topics() {
  return (
    <section id="topics" className="py-10 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Topics of Interest
          </h2>
          <p className="text-muted-foreground">Non-exhaustive list</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic) => (
              <div
                key={topic}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
