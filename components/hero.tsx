import { CalendarDays, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-8 md:py-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/hero-agents.jpg?v=4" 
          alt="Agentic AI and decentralized network control" 
          fill 
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-primary-foreground">Co-located with IEEE NetSoft 2026</span>
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-balance drop-shadow-lg">
            ADeCoS 2026
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-2 font-medium">
            First International Workshop on
          </p>
          
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground font-semibold mb-6 text-balance">
            Agentic and Decentralized Coordination for Softwarized Networks
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <CalendarDays className="h-5 w-5" />
              <span className="font-medium">June 29, 2026</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary-foreground/50" />
            <Link href="https://netsoft2026.ieee-netsoft.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              <MapPin className="h-5 w-5" />
              <span className="font-medium underline underline-offset-2">NetSoft 2026</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link href="https://edas.info/N34949" target="_blank" rel="noopener noreferrer">Submit a Paper</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link href="https://netsoft2026.ieee-netsoft.org/workshops" target="_blank" rel="noopener noreferrer">NetSoft 2026 Workshops</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
