import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform Transformation",
      description:
        "Complete digital transformation of a retail business, including custom e-commerce platform, inventory management, and AI-powered recommendations.",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["E-Commerce", "AI", "Cloud"],
      results: "300% increase in online sales",
    },
    {
      title: "Healthcare Management System",
      description:
        "Comprehensive healthcare management solution with patient portals, appointment scheduling, and secure data management compliance.",
      image: "/healthcare-management-system.png",
      tags: ["Healthcare", "Security", "Compliance"],
      results: "50% reduction in administrative time",
    },
    {
      title: "FinTech Mobile Application",
      description:
        "Secure mobile banking application with biometric authentication, real-time transactions, and advanced analytics dashboard.",
      image: "/fintech-mobile-app.png",
      tags: ["FinTech", "Mobile", "Security"],
      results: "1M+ active users",
    },
    {
      title: "AI-Powered Analytics Platform",
      description:
        "Business intelligence platform leveraging machine learning for predictive analytics and automated reporting for enterprise clients.",
      image: "/ai-analytics-dashboard.png",
      tags: ["AI", "Analytics", "Enterprise"],
      results: "40% improvement in decision-making speed",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover how we've helped businesses transform their operations and achieve remarkable results through
            innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-accent">{project.results}</div>
                  <Button variant="ghost" size="sm" className="group/btn">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
