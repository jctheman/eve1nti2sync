
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "EventSync AI's chatbot reduced our customer service inquiries by 70% and saved us countless hours of manual work.",
    author: "Sarah Johnson",
    title: "Event Director, TechConf Global",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "The lead scoring feature transformed how our exhibitors connect with attendees. We've seen a 45% increase in meaningful connections.",
    author: "Michael Rodriguez",
    title: "VP of Events, Industry Summit",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "The AI writing assistant helped us create consistent, engaging content across all our event communications in half the time.",
    author: "Jennifer Lee",
    title: "Marketing Director, Annual Expo",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Event Leaders
          </h2>
          <p className="text-lg text-gray-600">
            Hear what event professionals have to say about our AI-powered platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 relative h-full flex flex-col">
                  <Quote className="text-brand-purple mb-4 opacity-20 absolute top-4 right-4" size={40} />
                  <p className="text-gray-700 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-brand-purple">
                      <AvatarImage 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover" 
                      />
                      <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
