import { Brain, Network, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Brain,
    title: "Agentic AI",
    description: "Goal-driven systems with adaptive communication and context-aware decision-making",
  },
  {
    icon: Network,
    title: "Decentralized Control",
    description: "Multi-domain coordination without centralized orchestration bottlenecks",
  },
  {
    icon: Zap,
    title: "Autonomous Networks",
    description: "Self-managing infrastructure with real-time adaptation capabilities",
  },
  {
    icon: Shield,
    title: "Trustworthy Systems",
    description: "Policy-aware control with built-in safety and verification mechanisms",
  },
]

export function Overview() {
  return (
    <section id="overview" className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Overview
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-muted-foreground leading-relaxed text-justify space-y-2">
          <p>
            Future softwarized networks are evolving toward highly decentralized and multi-domain operation. While Software-Defined Networking (SDN), Network Functions Virtualization (NFV), and cloud-native platforms enabled programmability, centralized orchestration is increasingly limited in terms of scalability, responsiveness, resilience, and trust.
          </p>
          <p>
            <em className="text-foreground/80 not-italic font-medium">ADeCoS 2026</em> aims to shape the next generation of <em className="text-foreground/80 not-italic font-medium">AI-native</em> and <em className="text-foreground/80 not-italic font-medium">decentralized network control</em>, where <em className="text-foreground/80 not-italic font-medium">agentic AI systems</em> autonomously coordinate decisions across domains, stakeholders, and layers of the network. These systems go beyond traditional automation by incorporating <em className="text-foreground/80 not-italic font-medium">goal-driven behavior</em>, <em className="text-foreground/80 not-italic font-medium">adaptive communication</em>, and <em className="text-foreground/80 not-italic font-medium">context-aware decision-making</em>.
          </p>
          <p>
            The workshop focuses on fundamental and practical challenges in enabling such systems, including <em className="text-foreground/80 not-italic font-medium">multi-agent coordination</em>, <em className="text-foreground/80 not-italic font-medium">intent-to-action translation</em>, <em className="text-foreground/80 not-italic font-medium">learning and planning under uncertainty</em>, and <em className="text-foreground/80 not-italic font-medium">policy-aware control</em> with built-in safety and verification mechanisms.
          </p>
          <p>
            Despite recent advances in AI-driven network management, <em className="text-foreground/80 not-italic font-medium">scalable and trustworthy decentralized coordination</em> across domains remains largely unresolved. <em className="text-foreground/80 not-italic font-medium">ADeCoS 2026</em> aims to address this gap by bringing together researchers and practitioners from <em className="text-foreground/80 not-italic font-medium">networking</em>, <em className="text-foreground/80 not-italic font-medium">distributed systems</em>, and <em className="text-foreground/80 not-italic font-medium">AI</em>.
          </p>
          <p>
            The workshop emphasizes <em className="text-foreground/80 not-italic font-medium">realistic deployments</em>, <em className="text-foreground/80 not-italic font-medium">experimental validation</em>, and <em className="text-foreground/80 not-italic font-medium">reproducibility</em>, fostering new directions toward trustworthy, scalable, and autonomous network infrastructures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {highlights.map((item) => (
            <Card key={item.title} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
