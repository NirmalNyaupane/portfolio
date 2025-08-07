'use client'
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Github, Linkedin, Mail, Download } from "lucide-react";


const Hero = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div
          className={`space-y-8 animate-slide-in-left ${
            leftVisible ? "visible" : ""
          }`}
          ref={leftRef}
        >
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium">Hey there!, I&apos;m</p>
            <h1 className="text-5xl lg:text-7xl font-bold gradient-text">
              Nirmal Neupane.
            </h1>
            <p className="text-2xl lg:text-3xl text-muted-foreground font-light">
              Software Engineer.
            </p>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Passionate about building scalable web applications and optimizing
              API performance. Dedicated to producing high-quality work and
              staying current with market trends.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="btn-hero px-8 py-3 text-base font-medium">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" className="btn-ghost px-8 py-3 text-base">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            <a
              href="https://github.com/nirmalneupane"
              className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/nirmalneupane"
              className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className={`flex justify-center lg:justify-end animate-slide-in-right ${
            rightVisible ? "visible" : ""
          }`}
          ref={rightRef}
        >
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card p-2">
              <img
                src="https://avatars.githubusercontent.com/u/101554702?s=400&u=acab19f0ecc2a4a147b8fde5739b3c88bb7294ce&v=4"
                alt="Nirmal Neupane - Software Engineer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-glow" />
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-glow"
              style={{ animationDelay: "-1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
