import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Shield, CheckCircle, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "100% Bird Protection Guaranteed",
  "UV Stabilized Nylon Material",
  "Invisible & Aesthetically Pleasing",
  "Weather Resistant & Long Lasting",
  "5+ Years Warranty",
  "Professional Installation",
];

const benefits = [
  {
    title: "Health Protection",
    description: "Prevent diseases carried by pigeons like histoplasmosis, cryptococcosis, and psittacosis from affecting your family.",
  },
  {
    title: "Property Safety",
    description: "Protect your balconies, windows, and AC units from bird droppings, nests, and damage.",
  },
  {
    title: "Clean Environment",
    description: "Keep your home clean and hygienic without the constant need for cleaning bird mess.",
  },
  {
    title: "Peace of Mind",
    description: "Enjoy your balcony and open spaces without worrying about birds entering your home.",
  },
];

const PigeonNets = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Premium Pigeon Safety Nets
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Protect your home from pigeons with our high-quality, durable, and nearly invisible pigeon nets. 
              Professional installation with guaranteed results.
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
                Why Choose Our Pigeon Nets?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our pigeon safety nets are manufactured with premium quality materials that ensure 
                long-lasting protection against birds while maintaining the aesthetic appeal of your home.
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
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-background rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Warranty</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Benefits of Pigeon Nets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover why thousands of homeowners trust our pigeon net solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-sm">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Protect Your Home?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote today. Our experts will assess your requirements 
            and provide the best solution for your needs.
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

export default PigeonNets;
