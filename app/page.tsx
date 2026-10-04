import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { Topics } from "@/components/topics"
import { CallForPapers } from "@/components/call-for-papers"
import { ImportantDates } from "@/components/important-dates"
import { HowToSubmit } from "@/components/how-to-submit"
import { Program } from "@/components/program"
import { Committee } from "@/components/committee"
import { Presentation } from "@/components/presentation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Topics />
        <CallForPapers />
        <ImportantDates />
        <HowToSubmit />
        <Program />
        <Committee />
        <Presentation />
      </main>
      <Footer />
    </div>
  )
}
