import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Pigeon Safety Nets",
    description: "Protect your balcony from pigeons and birds with durable nets",
    image: "https://images.pexels.com/photos/16271318/pexels-photo-16271318.jpeg",
  },
  {
    title: "Balcony Safety Nets",
    description: "Child and pet safety for high-rise apartments",
    image: "https://images.pexels.com/photos/9748474/pexels-photo-9748474.jpeg",
  },
  {
    title: "Invisible Grills",
    description: "Modern safety without blocking your view",
    image: "https://images.pexels.com/photos/6642497/pexels-photo-6642497.jpeg",
  },
  {
    title: "Bird Spikes",
    description: "Humane bird control solutions",
    image: "https://images.unsplash.com/photo-1670672119158-867b223bcb2d",
  },
  {
    title: "Sports Nets",
    description: "Premium nets for cricket, football and more",
    image: "https://images.unsplash.com/photo-1566321383084-2ddfb8ce4766",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive safety solutions for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
                <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
