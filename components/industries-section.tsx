import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Building2, Factory } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    {
      icon: Rocket,
      title: "Startups",
      description:
        "Helping innovative startups build their technology foundation and scale rapidly with agile development practices.",
    },
    {
      icon: Building2,
      title: "Small & Medium Enterprises",
      description:
        "Empowering SMEs with cost-effective technology solutions that drive efficiency and competitive advantage.",
    },
    {
      icon: Factory,
      title: "Enterprises",
      description:
        "Supporting large organizations with enterprise-grade solutions, digital transformation, and system integration.",
    },
  ]

  return (
    <section id="industries" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From innovative startups to established enterprises, we provide tailored technology solutions for businesses
            of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="pt-6">
                <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <industry.icon className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{industry.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
