import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Shield, CheckCircle, Eye, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "316 Grade Stainless Steel Cables",
  "Invisible from a Distance",
  "10+ Years Warranty",
  "Withstands High Pressure",
  "Zero Maintenance Required",
  "Premium Aesthetic Appeal",
];

const specifications = [
  { label: "Material", value: "316 Marine Grade Stainless Steel" },
  { label: "Cable Thickness", value: "2.5mm to 3mm" },
  { label: "Gap Between Cables", value: "25mm to 50mm" },
  { label: "Breaking Strength", value: "200+ kg per cable" },
  { label: "Corrosion Resistance", value: "High (Marine Grade)" },
  { label: "Warranty", value: "10+ Years" },
];

const InvisibleGrills = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Invisible Safety Grills
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Modern, sleek, and virtually invisible grills that provide maximum security without 
              blocking your view. Premium stainless steel construction for lasting protection.
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

      {/* Why Choose Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                The Modern Alternative to Traditional Grills
              </h2>
              <p className="text-muted-foreground mb-8">
                Say goodbye to ugly iron grills that block your view and make your home look like a prison. 
                Our invisible grills provide the same level of security with a fraction of the visual impact.
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
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-6 rounded-xl text-center">
                <Eye className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Unobstructed View</h3>
                <p className="text-sm text-muted-foreground">Enjoy panoramic views</p>
              </div>
              <div className="bg-muted p-6 rounded-xl text-center">
                <Lock className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Maximum Security</h3>
                <p className="text-sm text-muted-foreground">High tensile strength</p>
              </div>
              <div className="bg-muted p-6 rounded-xl text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Child Safe</h3>
                <p className="text-sm text-muted-foreground">Prevent fall accidents</p>
              </div>
              <div className="bg-muted p-6 rounded-xl text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Pet Friendly</h3>
                <p className="text-sm text-muted-foreground">Keep pets secure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Technical Specifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our invisible grills are engineered for maximum safety and durability
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-2xl overflow-hidden shadow-sm">
              {specifications.map((spec, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center p-4 ${
                    index !== specifications.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <span className="font-medium text-foreground">{spec.label}</span>
                  <span className="text-muted-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Invisible Grills vs Traditional Grills
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary/10 p-8 rounded-2xl">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4 text-center">
                Invisible Grills ✓
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Clear, unobstructed views
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Modern aesthetic appeal
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  No rusting or corrosion
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Easy maintenance
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Allows natural light
                </li>
              </ul>
            </div>
            <div className="bg-muted p-8 rounded-2xl">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4 text-center">
                Traditional Grills ✗
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 text-center">✗</span>
                  Blocks views completely
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 text-center">✗</span>
                  Outdated, prison-like look
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 text-center">✗</span>
                  Rusts over time
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 text-center">✗</span>
                  Requires regular painting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 text-center">✗</span>
                  Reduces natural light
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
            Upgrade to Invisible Grills Today
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Transform your home's security with our modern invisible grill solutions. 
            Free consultation and competitive pricing guaranteed.
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

export default InvisibleGrills;
