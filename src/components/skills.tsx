'use client'
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/use-scroll-animation";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["JavaScript", "TypeScript", "TailwindCSS", "React", "Next.js", "Redux"]
  },
  {
    title: "Backend", 
    icon: "⚙️",
    skills: ["Node.js", "TypeScript", "Express.js", "NestJs", "GraphQL"]
  },
  {
    title: "DevOps",
    icon: "☁️", 
    skills: ["Docker", "AWS"]
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB", "PostgreSQL"]
  }
];

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, visibleItems } = useStaggeredScrollAnimation(skillCategories.length, 150);

  return (
    <section className="py-24 px-6" ref={skillsRef}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 animate-fade-in-up ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across the full stack development spectrum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`glass-card skill-card border-0 animate-scale-in ${visibleItems[index] ? 'visible' : ''}`}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-3 py-2 rounded-lg bg-background-secondary text-sm font-medium text-center border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;