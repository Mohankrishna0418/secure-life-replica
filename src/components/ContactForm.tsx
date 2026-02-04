import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const services = [
  "Pigeon Safety Nets",
  "Balcony Safety Nets",
  "Invisible Grills",
  "Bird Spikes",
  "Sports Nets",
];

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("inquiries").insert({
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        address: formData.address,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        message: formData.message || null,
      });

      if (error) throw error;

      toast({
        title: "Inquiry Submitted!",
        description: "We'll contact you within 20-30 minutes.",
      });

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        address: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Get A Free Quote</h2>
          <p className="section-subtitle">
            Fill in your details and we'll contact you within 20-30 minutes
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Full Name *
              </label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Phone Number *
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your phone number"
                required
                className="bg-background"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Email *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                required
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Service Required *
              </label>
              <Select value={formData.service} onValueChange={handleServiceChange} required>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Address *
            </label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Your address"
              required
              className="bg-background"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Preferred Date *
              </label>
              <Input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                required
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Preferred Time *
              </label>
              <Input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                required
                className="bg-background"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Additional Message (Optional)
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Any additional details..."
              rows={4}
              className="bg-background"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT INQUIRY"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
