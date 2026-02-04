import { Phone, Clock, ClipboardCheck, Wrench } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Reach out via Phone or WhatsApp",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Providers react within 20-30 mins",
  },
  {
    icon: ClipboardCheck,
    title: "Expert Visit",
    description: "Measurement and Quote",
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Fast and Secure Setup",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="section-subtitle">
            Get expert service within 20-30 minutes!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center space-y-4"
            >
              {/* Step Number */}
              <div className="relative inline-flex">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
