import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Shield, CheckCircle, Baby, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Child & Pet Safety Guaranteed",
  "High Tensile Strength Nylon",
  "Transparent & Nearly Invisible",
  "UV Resistant & Weatherproof",
  "Custom Sizes Available",
  "Quick Installation",
];

const useCases = [
  {
    title: "Child Safety",
    description: "Protect your children from falling accidents. Our nets can hold significant weight and provide a safety barrier.",
    icon: Baby,
  },
  {
    title: "Pet Protection",
    description: "Keep your cats and dogs safe from accidentally jumping or falling from high-rise balconies.",
    icon: Shield,
  },
  {
    title: "Bird Prevention",
    description: "Prevent pigeons and other birds from entering your balcony and creating a mess.",
    icon: Shield,
  },
  {
    title: "Privacy Screen",
    description: "Enjoy your balcony time without worrying about birds or external elements.",
    icon: Shield,
  },
];

const BalconyNets = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Balcony Safety Nets
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ensure complete safety for your family, children, and pets with our premium balcony safety nets. 
              High-strength, durable, and nearly invisible protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="tel:7760181757">
                  <Phone className="w-5 h-5" />
                  Call Now: 7760181757
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get Free Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Safety Statistics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground">Fall Prevention</span>
                    <span className="text-primary font-bold">100%</span>
                  </div>
                  <div className="h-3 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground">Bird Protection</span>
                    <span className="text-primary font-bold">100%</span>
                  </div>
                  <div className="h-3 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground">Customer Satisfaction</span>
                    <span className="text-primary font-bold">98%</span>
                  </div>
                  <div className="h-3 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Complete Balcony Protection
              </h2>
              <p className="text-muted-foreground mb-8">
                Our balcony safety nets are designed to provide maximum security without compromising 
                on aesthetics. Made from high-quality UV-stabilized nylon for long-lasting performance.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Perfect For Every Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our balcony nets serve multiple purposes, providing comprehensive protection for your home
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-sm text-center">
                <useCase.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Don't Wait Until It's Too Late
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Protect your loved ones today. Get a free consultation and quote for your balcony safety needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="tel:7760181757">
                <Phone className="w-5 h-5" />
                Call: 7760181757
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="https://wa.me/917760181757" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default BalconyNets;
