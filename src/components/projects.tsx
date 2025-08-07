'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    title: "Multivendor E-commerce Platform",
    description: "Comprehensive e-commerce solution with multiple payment gateways, real-time chat, and vendor management system.",
    image: "/api/placeholder/600/400",
    tech: ["Node.js", "PostgreSQL", "WebSocket", "Redis", "Stripe", "Esewa"],
    features: [
      "Multi-vendor marketplace architecture",
      "Integrated payment gateways (Stripe, Esewa, Khalti)",
      "Real-time chat system with Redis",
      "Performance optimized APIs"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "Scalable Chat Application",
    description: "Real-time messaging platform built with WebSocket technology, Redis adapter, and RabbitMQ for message queuing.",
    image: "/api/placeholder/600/400", 
    tech: ["WebSocket", "Redis", "RabbitMQ", "Node.js", "React"],
    features: [
      "Real-time messaging with WebSocket",
      "Message queuing with RabbitMQ",
      "Redis for session management",
      "Scalable architecture"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "API Performance Optimizer",
    description: "High-performance API suite with advanced caching strategies and PostgreSQL optimization techniques.",
    image: "/api/placeholder/600/400",
    tech: ["PostgreSQL", "Node.js", "Redis", "Express.js"],
    features: [
      "Advanced PostgreSQL optimization",
      "Intelligent caching layer",
      "Performance monitoring",
      "Auto-scaling capabilities"
    ],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, visibleItems } = useStaggeredScrollAnimation(projects.length, 250);

  return (
    <section id="projects" className="py-24 px-6" ref={projectsRef}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 animate-fade-in-up ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`glass-card border-0 group hover:scale-105 transition-all duration-500 animate-rotate-in ${visibleItems[index] ? 'visible' : ''}`}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-4xl opacity-50">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="sm" 
                      className="btn-hero flex-1 text-xs"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="btn-ghost flex-1 text-xs"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-ghost px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;