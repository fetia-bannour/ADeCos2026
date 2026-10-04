import { Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const tpcMembers = [
  { name: "Shu Hong", org: "The George Washington University" },
  { name: "Timothy Wood", org: "The George Washington University" },
  { name: "Tianzhu Zhang", org: "Nokia Bell Labs" },
  { name: "Rania Sahraoui", org: "Telecom SudParis" },
  { name: "Yassine Hadjadj-Aoul", org: "University of Rennes" },
]

const organizers = [
  {
    name: "Fetia Bannour",
    affiliation: "ensIIE, SAMOVAR - Telecom SudParis",
    email: "fetia.bannour@telecom-sudparis.eu",
  },
  {
    name: "Nakjung Choi",
    affiliation: "Nokia Bell Labs",
    email: "nakjung.choi@nokia-bell-labs.com",
  },
  {
    name: "Rituparna Datta",
    affiliation: "Cognizant",
    email: "rituparna.datta@cognizant.com",
  },
  {
    name: "Kurdman Rasol",
    affiliation: "CEIT",
    email: "kurdman.rasol@ceit.es",
  },
  {
    name: "Risto Miikkulainen",
    affiliation: "Cognizant / UT Austin",
    email: "risto@cognizant.com",
  },
  {
    name: "Chrysa Papagianni",
    affiliation: "University of Amsterdam",
    email: "c.papagianni@uva.nl",
  },
]

export function Committee() {
  return (
    <section id="committee" className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Organizing Committee
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizers.map((person) => (
              <Card key={person.email} className="border-border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-1">{person.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{person.affiliation}</p>
                  <a
                    href={`mailto:${person.email}`}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {person.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Technical Program Committee
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tpcMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
              >
                <div className="font-medium text-foreground">{member.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{member.org}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
