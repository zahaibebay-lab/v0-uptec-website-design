import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About UPTEC</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A technology company empowering businesses with innovative digital solutions. We combine cutting-edge
            technology with strategic thinking to drive your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between technology and business success, UPTEC has been at the
              forefront of digital transformation. We believe that innovation isn't just about technology—it's about
              creating meaningful solutions that drive real business value.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experts combines deep technical knowledge with industry insights to deliver solutions that not
              only meet today's challenges but anticipate tomorrow's opportunities.
            </p>
          </div>
          <div className="relative">
            <img
              src="/modern-tech-office.png"
              alt="UPTEC team working on innovative solutions"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <Target className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and
                competitive advantage in the digital age.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <Eye className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading technology partner for businesses seeking to transform and thrive in an increasingly
                connected world.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, integrity, and excellence guide everything we do. We believe in building lasting
                partnerships through trust and exceptional results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
