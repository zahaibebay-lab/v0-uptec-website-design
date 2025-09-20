import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Megaphone, Brain, Cloud, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom software solutions built with cutting-edge technologies. From web applications to mobile apps, we create scalable, secure, and user-friendly software that drives your business forward.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing & SEO",
      description:
        "Comprehensive digital marketing strategies that increase your online visibility and drive qualified traffic. Our data-driven approach ensures maximum ROI for your marketing investments.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
    },
    {
      icon: Brain,
      title: "Artificial Intelligence Integration",
      description:
        "Harness the power of AI to automate processes, gain insights, and create intelligent solutions. We help businesses integrate AI technologies to stay competitive in the digital landscape.",
      features: ["Machine Learning", "Process Automation", "Data Analytics", "AI Consulting"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & IT Infrastructure",
      description:
        "Scalable cloud infrastructure and IT solutions that grow with your business. From migration to optimization, we ensure your technology infrastructure supports your goals.",
      features: ["Cloud Migration", "Infrastructure Management", "Security Solutions", "24/7 Support"],
    },
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="group/btn bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
