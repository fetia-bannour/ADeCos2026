import { Clock, Coffee, Mic, FileText, MessageSquare } from "lucide-react"

const programItems = [
  {
    time: "9:00 - 9:05",
    title: "Workshop Opening",
    icon: Mic,
    type: "opening",
  },
  {
    time: "9:05 - 9:40",
    title: "Keynote Session",
    subtitle: "Agentic AI for Networks: Architectures, Challenges, and Research Frontiers",
    speaker: "Professor Badii Jouaber (Télécom SudParis, Institut Polytechnique de Paris, France)",
    icon: Mic,
    type: "keynote",
  },
  {
    time: "9:40 - 10:30",
    title: "Technical Session 1",
    subtitle: "Decentralized Control and Agentic Orchestration of Softwarized Infrastructures",
    icon: FileText,
    type: "session",
    paperStartNum: 1,
    papers: [
      { title: "Blockchain for SDN Control: Exploring the Trade-off Between Security and Performance", authors: "Andrei Danila (Universite de Lorraine, France); Loic Desgeorges (Universite Claude Bernard Lyon 1, France); Guilain Leduc (University of Luxembourg, Luxembourg); Dongyu Zhang (ENS de Lyon, France); Jean-Philippe Georges (University of Lorraine, France)" },
      { title: "Edgent: Towards an Agentic AI Framework for eBPF-based Service Deployment and Orchestration at the Edge", authors: "Raffaele Di Tommaso (University of Bologna, Italy); Gianluca Davoli (University of Bologna, Italy); Pietro Spadaccino (La Sapienza Universita di Roma, Italy); Walter Cerroni (University of Bologna, Italy)" },
    ],
  },
  {
    time: "10:30 - 11:00",
    title: "Coffee Break",
    icon: Coffee,
    type: "break",
  },
  {
    time: "11:00 - 12:15",
    title: "Technical Session 2",
    subtitle: "Intent-driven Agentic Coordination for Network Management",
    icon: FileText,
    type: "session",
    paperStartNum: 3,
    papers: [
      { title: "A GenAI-Driven Multi-Agent Framework for Explainable Intent-Based Slice Recommendation", authors: "Rui Ferreira (University of Minho & Capgemini Engineering, Portugal); Raul F. D. Barbosa (Universidade de Aveiro, Portugal); Marco Araujo (Portucalense University, Portugal); Petia Georgieva (University of Aveiro, DETI/IEETA, Portugal); Susana Sargento (Universidade de Aveiro, Portugal); Anabela Pereira Tereso (University of Minho, Portugal); Paulo Novais (University of Minho, Portugal); Pedro Rito (University of Aveiro & Instituto de Telecomunicacoes, Portugal); Bruno Miguel Fonseca Mendes (University of Aveiro, Portugal)" },
      { title: "LLM-Assisted Design and Analytics of Next-Generation Optical Transport Networks", authors: "Imran Chowdhury Dipto (Politecnico di Torino, Italy); Sanwal Zeb (Politecnico di Torino, Italy); Muhammad Umar Masood (Politecnico di Torino, Italy); Ihtesham Khan (Nokia Bell Labs, USA); Nelson Costa (Nokia, Germany); Joao Pedro (Nokia Portugal & Instituto de Telecomunicacoes, Portugal); Antonio Napoli (Nokia, Germany); Vittorio Curri (Politecnico di Torino, Italy)" },
      { title: "IntentNEF: LLM-Driven Natural Language Automation of 5G Network Exposure", authors: "Haoyu You (University of Sussex, UK); Chathura Galkandage (University of Sussex, UK); Naercio Magaia (University of Sussex, UK); Maziar Nekovee (University of Sussex & Samsung, UK); Simon Davies (Honda, UK)" },
    ],
  },
  {
    time: "12:15 - 12:30",
    title: "General Discussion and Closing",
    icon: MessageSquare,
    type: "closing",
  },
]

export function Program() {
  return (
    <section id="program" className="py-10 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-[54rem] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Program
          </h2>
          
          <div className="space-y-4">
            {programItems.map((item, index) => (
              <div 
                key={index}
                className={`bg-card border border-border rounded-lg p-4 md:p-6 ${
                  item.type === "keynote" ? "border-primary/50 bg-primary/5" : ""
                } ${item.type === "break" ? "bg-muted/50" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    item.type === "keynote" ? "bg-primary/20" : "bg-primary/10"
                  }`}>
                    <item.icon className={`h-5 w-5 ${
                      item.type === "keynote" ? "text-primary" : "text-primary"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {item.time}
                      </span>
                    </div>
                    {item.subtitle && (
                      <p className="text-sm text-primary/80 mt-1 italic">{item.subtitle}</p>
                    )}
                    {item.speaker && (
                      <p className="text-sm text-primary mt-1">{item.speaker}</p>
                    )}
                    {item.papers && (
                      <ul className="mt-3 space-y-3">
                        {item.papers.map((paper, pIndex) => (
                          <li key={pIndex} className="text-sm pl-4 border-l-2 border-primary/30">
                            <div className="whitespace-nowrap">
                              <span className="font-medium text-foreground/70">{(item.paperStartNum || 1) + pIndex}.</span>{" "}
                              <span className="text-foreground">{paper.title}</span>
                            </div>
                            <div className="text-muted-foreground text-xs mt-1 italic text-justify">{paper.authors}</div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
