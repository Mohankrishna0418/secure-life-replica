import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Excellent service! They installed balcony nets for our 12th floor apartment. Now I feel safe letting my kids play.",
    author: "Priya Sharma",
  },
  {
    quote:
      "Very professional team. The pigeon nets have completely solved our problem. Highly recommended!",
    author: "Rajesh Kumar",
  },
  {
    quote:
      "Quick response and quality installation. The invisible grills look amazing and provide peace of mind.",
    author: "Anita Reddy",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-card-foreground text-lg mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <span className="font-semibold text-foreground">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
