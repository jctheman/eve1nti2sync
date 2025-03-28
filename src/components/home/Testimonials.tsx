
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "EventSync AI's chatbot reduced our customer service inquiries by 70% and saved us countless hours of manual work.",
    author: "Sarah Johnson",
    title: "Event Director, TechConf Global",
    image: "",
  },
  {
    quote: "The lead scoring feature transformed how our exhibitors connect with attendees. We've seen a 45% increase in meaningful connections.",
    author: "Michael Rodriguez",
    title: "VP of Events, Industry Summit",
    image: "",
  },
  {
    quote: "The AI writing assistant helped us create consistent, engaging content across all our event communications in half the time.",
    author: "Jennifer Lee",
    title: "Marketing Director, Annual Expo",
    image: "",
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Event Leaders
          </h2>
          <p className="text-lg text-gray-600">
            Hear what event professionals have to say about our AI-powered platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Quote className="text-brand-purple mb-4 opacity-20" size={40} />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
