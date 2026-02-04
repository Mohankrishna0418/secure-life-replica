import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Shield, CheckCircle, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Humane Bird Deterrent Solution",
  "Stainless Steel Construction",
  "UV Resistant Polycarbonate Base",
  "Easy Installation on Any Surface",
  "10+ Years Lifespan",
  "Maintenance Free",
];

const applications = [
  {
    title: "Ledges & Parapets",
    description: "Prevent birds from perching on building ledges and parapet walls.",
  },
  {
    title: "AC Units & Ducts",
    description: "Protect air conditioning units and ductwork from bird nesting.",
  },
  {
    title: "Signboards & Awnings",
    description: "Keep signboards and awnings clean and bird-free.",
  },
  {
    title: "Window Sills",
    description: "Stop birds from landing and nesting on window sills.",
  },
  {
    title: "Pipes & Cables",
    description: "Protect utility pipes and cable trays from bird damage.",
  },
  {
    title: "Solar Panels",
    description: "Prevent birds from nesting under solar panel installations.",
  },
];

const BirdSpikes = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Anti-Bird Spikes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Humane and effective bird deterrent spikes that prevent birds from perching and nesting 
              on your property. Durable stainless steel construction for long-lasting protection.
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
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Effective & Humane Bird Control
              </h2>
              <p className="text-muted-foreground mb-8">
                Our bird spikes are designed to deter birds from landing without causing them any harm. 
                The spikes create an uneven surface that birds find uncomfortable, encouraging them 
                to find alternative perching spots.
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
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6 text-center">
                Why Bird Spikes?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-background p-4 rounded-xl">
                  <Zap className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Instant Results</h4>
                    <p className="text-sm text-muted-foreground">
                      Birds stop perching immediately after installation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-background p-4 rounded-xl">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">100% Humane</h4>
                    <p className="text-sm text-muted-foreground">
                      Deters birds without causing any injury
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-background p-4 rounded-xl">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Low Profile</h4>
                    <p className="text-sm text-muted-foreground">
                      Nearly invisible from ground level
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Applications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bird spikes can be installed on virtually any surface to prevent bird perching
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-2">{app.title}</h3>
                <p className="text-sm text-muted-foreground">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Available Options
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-muted p-8 rounded-2xl text-center">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Stainless Steel Spikes
              </h3>
              <p className="text-muted-foreground mb-4">
                Premium 304 grade stainless steel spikes for maximum durability. 
                Ideal for coastal areas and high-humidity environments.
              </p>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Rust-proof</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>15+ years lifespan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>All-weather resistant</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-8 rounded-2xl text-center">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Polycarbonate Spikes
              </h3>
              <p className="text-muted-foreground mb-4">
                Cost-effective UV-stabilized polycarbonate spikes. 
                Lightweight and easy to install on various surfaces.
              </p>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Budget-friendly</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>UV resistant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Easy installation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Stop Bird Problems Today
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get professional bird spike installation for your property. 
            Free site inspection and competitive quotes.
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

export default BirdSpikes;
