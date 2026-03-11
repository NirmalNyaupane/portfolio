'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useActionState } from "react";
import sendMail from "@/app/actions";

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

 

  const [error, submitAction, isPending] = useActionState(async (prevState:_prev, formData:FormData)=>{
    const fname = formData.get("f_name") as string
    const lname = formData.get("l_name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    sendMail({
      fname,
      lname,
      email,
      subject,
      message
    })
  }, null)


  return (
    <section id="contact" className="py-24 px-6 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 animate-fade-in-up ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 animate-slide-in-left ${leftVisible ? 'visible' : ''}`} ref={leftRef}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I&apos;m always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">nirmalneupane@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+977 9821238476</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className={`glass-card border-0 animate-slide-in-right ${rightVisible ? 'visible' : ''}`} ref={rightRef}>
            <CardContent className="p-8">
              <form className="space-y-6" action={submitAction}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      className="bg-background-secondary  focus:border-primary"
                      required
                      name="f_name"
                      maxLength={20}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input
                      placeholder="Doe"
                      className="bg-background-secondary focus:border-primary"
                      required
                      name="l_name"
                      maxLength={20}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background-secondary focus:border-primary"
                    required
                    name="email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    placeholder="Project Discussion"
                    className="bg-background-secondary  focus:border-primary"
                    required
                    name="subject"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background-secondary  focus:border-primary resize-none"
                    required
                    name="message"
                  />
                </div>

                <Button className="btn-hero w-full" type="submit" disabled={isPending}>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;