import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Shield, CheckCircle, Phone, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "High-Strength HDPE/Nylon Material",
  "UV Stabilized for Outdoor Use",
  "Custom Sizes Available",
  "Weather & Tear Resistant",
  "Professional Installation",
  "5+ Years Warranty",
];

const sportTypes = [
  {
    title: "Cricket Practice Nets",
    description: "Professional grade cricket practice nets for academies, clubs, and home setups. Protects players and surroundings.",
  },
  {
    title: "Football Goal Nets",
    description: "Durable goal nets for football fields. Available in standard and custom sizes for all levels of play.",
  },
  {
    title: "Badminton Court Nets",
    description: "Regulation size badminton nets with proper mesh size and tensioning for competitive play.",
  },
  {
    title: "Tennis Court Enclosures",
    description: "Complete tennis court enclosure nets to keep balls contained and protect spectators.",
  },
  {
    title: "Golf Practice Nets",
    description: "Heavy-duty golf practice and driving range nets designed to stop high-speed golf balls.",
  },
  {
    title: "Swimming Pool Covers",
    description: "Safety nets for swimming pools to prevent accidental falls and keep debris out.",
  },
];

const applications = [
  "Schools & Colleges",
  "Sports Academies",
  "Residential Complexes",
  "Corporate Facilities",
  "Public Parks",
  "Private Homes",
];

const SportsNets = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Professional Sports Nets
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              High-quality sports nets for cricket, football, badminton, tennis, and more. 
              Designed for professional use with superior durability and performance.
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
                Built for Performance
              </h2>
              <p className="text-muted-foreground mb-8">
                Our sports nets are engineered to withstand intense use and harsh weather conditions. 
                Whether you're setting up a professional academy or a backyard practice area, 
                we have the right solution for you.
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
                Ideal For
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-2 bg-background p-3 rounded-lg">
                    <Target className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sport Types Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Sports Net Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide nets for all types of sports and recreational activities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportTypes.map((sport, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-sm">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{sport.title}</h3>
                <p className="text-sm text-muted-foreground">{sport.description}</p>
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
              Material Options
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-muted p-6 rounded-2xl">
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">HDPE Nets</h3>
              <p className="text-sm text-muted-foreground mb-4">
                High-Density Polyethylene nets offer excellent UV resistance and durability 
                at an affordable price point.
              </p>
              <ul className="text-sm space-y-1">
                <li className="text-muted-foreground">• Lightweight</li>
                <li className="text-muted-foreground">• Cost-effective</li>
                <li className="text-muted-foreground">• UV stabilized</li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-2xl">
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">Nylon Nets</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Premium nylon nets provide superior strength and elasticity, 
                ideal for high-impact sports.
              </p>
              <ul className="text-sm space-y-1">
                <li className="text-muted-foreground">• High tensile strength</li>
                <li className="text-muted-foreground">• Excellent rebound</li>
                <li className="text-muted-foreground">• Long-lasting</li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-2xl">
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">Polyester Nets</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Polyester nets are resistant to moisture and mildew, 
                perfect for outdoor and humid environments.
              </p>
              <ul className="text-sm space-y-1">
                <li className="text-muted-foreground">• Moisture resistant</li>
                <li className="text-muted-foreground">• Quick drying</li>
                <li className="text-muted-foreground">• Mildew proof</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Set Up Your Sports Facility?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get professional sports net installation for your facility. 
            Free site survey and competitive pricing.
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

export default SportsNets;
