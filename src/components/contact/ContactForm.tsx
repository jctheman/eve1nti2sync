
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interestType: "demo",
    message: "",
    subscribe: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interestType: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      subscribe: checked,
    }));
  };

  const sendEmail = async (data: typeof formData) => {
    // Using EmailJS service for email sending without backend
    const emailServiceId = "service_id"; // Replace with your EmailJS service ID
    const emailTemplateId = "template_id"; // Replace with your EmailJS template ID
    const emailUserId = "user_id"; // Replace with your EmailJS user ID
    
    const templateParams = {
      to_email: "sales@sarcontech.com",
      from_name: data.name,
      from_email: data.email,
      company: data.company,
      phone: data.phone,
      interest_type: data.interestType,
      message: data.message,
      subscribe: data.subscribe ? "Yes" : "No"
    };
    
    try {
      // Use the emailjs-com library (would need to be added as a dependency)
      // EmailJS CDN (loaded in index.html): <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
      const response = await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: emailServiceId,
          template_id: emailTemplateId,
          user_id: emailUserId,
          template_params: templateParams
        })
      });
      
      if (response.ok) {
        return true;
      } else {
        console.error("Failed to send email:", await response.text());
        return false;
      }
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate email sending (real implementation would use EmailJS or a similar service)
      const emailSent = await sendEmail(formData);
      
      if (emailSent) {
        toast.success("Thank you for your message! We'll get back to you soon.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          interestType: "demo",
          message: "",
          subscribe: true,
        });
      } else {
        toast.error("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>I'm interested in:</Label>
            <RadioGroup
              value={formData.interestType}
              onValueChange={handleRadioChange}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="demo" id="demo" />
                <Label htmlFor="demo" className="cursor-pointer">Scheduling a product demo</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pricing" id="pricing" />
                <Label htmlFor="pricing" className="cursor-pointer">Learning about pricing</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="question" id="question" />
                <Label htmlFor="question" className="cursor-pointer">Asking a question</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your event and requirements"
              rows={5}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="subscribe"
              checked={formData.subscribe}
              onCheckedChange={handleCheckboxChange}
            />
            <label
              htmlFor="subscribe"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Subscribe to our newsletter for event management tips and product updates
            </label>
          </div>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-brand-purple hover:bg-brand-lightPurple text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
