'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/use-scroll-animation";


const experiences = [
  {
    title: "Node JS Developer",
    company: "E – Signature Pvt. Ltd.",
    period: "May 2024 – Present",
    location: "Nepal",
    achievements: [
      "Develop multivendor ecommerce platforms with advanced features",
      "Integrated multiple payment gateways (Esewa, Khalti, Stripe)",
      "Optimized API performance using PostgreSQL advanced features",
      "Built scalable chat applications using WebSocket, Redis Adapter, and RabbitMQ",
      "Deployed NodeJS applications on cloud platforms"
    ],
    tech: ["Node.js", "PostgreSQL", "WebSocket", "Redis", "RabbitMQ", "AWS"]
  },
  {
    title: "Full Stack Developer",
    company: "28softwares",
    period: "November 2023 – April 2024",
    location: "Nepal",
    achievements: [
      "Collaborated with senior developers on full stack applications", 
      "Developed robust and scalable APIs using Nest.js framework",
      "Built responsive web applications using React, TypeScript, Next.js",
      "Implemented caching techniques to improve API performance",
      "Deployed production-ready applications"
    ],
    tech: ["React", "Next.js", "TypeScript", "Nest.js", "Tailwind CSS"]
  },
  {
    title: "Frontend Developer Intern",
    company: "LancemeUp",
    period: "June 2023 – October 2023", 
    location: "Nepal",
    achievements: [
      "Mastered Next.js and TypeScript development",
      "Built responsive UIs using Tailwind CSS and component libraries",
      "Integrated REST and GraphQL APIs effectively",
      "Worked with modern development tools and workflows"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "MUI", "ChakraUI"]
  }
];

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: experienceRef, visibleItems } = useStaggeredScrollAnimation(experiences.length, 200);

  return (
    <section className="py-24 px-6 bg-background-secondary/30" ref={experienceRef}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 animate-fade-in-up ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey building innovative solutions and growing technical expertise
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={`${exp.company}-${exp.period}`}
              className={`glass-card border-0 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'} ${visibleItems[index] ? 'visible' : ''}`}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl font-semibold text-foreground mb-4">
                      {exp.company}
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements & Tech */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;