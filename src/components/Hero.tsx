import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading uppercase leading-tight">
              Protecting Your{" "}
              <span className="text-primary">Family</span>
              <br />
              With Safety Nets
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Professional safety net installation for homes, apartments, and
              sports facilities. Quick response within 20-30 minutes!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="tel:7760181757">
                  <Phone className="w-5 h-5" />
                  CALL NOW
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                asChild
              >
                <a
                  href="https://wa.me/917760181757"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WHATSAPP
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4046104/pexels-photo-4046104.jpeg"
                alt="Happy family safe on balcony"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
