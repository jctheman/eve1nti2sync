
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$599",
    period: "per month",
    description: "Perfect for small events and conferences",
    features: [
      "AI Chatbot with basic training",
      "Up to 1,000 attendees",
      "Basic lead scoring",
      "Standard support (email)",
      "1 event per year"
    ],
    highlighted: false,
    ctaText: "Get Started"
  },
  {
    name: "Professional",
    price: "$1,499",
    period: "per month",
    description: "Ideal for medium-sized events and exhibitions",
    features: [
      "Advanced AI Chatbot with custom training",
      "Up to 5,000 attendees",
      "Full lead scoring system",
      "AI content writing assistance",
      "Priority support (email & chat)",
      "5 events per year"
    ],
    highlighted: true,
    ctaText: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored for large events and conference series",
    features: [
      "Enterprise AI Chatbot with deep integration",
      "Unlimited attendees",
      "Advanced lead scoring with CRM integration",
      "Premium AI content writing",
      "Dedicated account manager",
      "Unlimited events"
    ],
    highlighted: false,
    ctaText: "Contact Sales"
  }
];

const Pricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" }
    }
  };

  return (
    <section className="section py-16 bg-gray-50" id="pricing">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that works best for your event needs
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`border h-full flex flex-col ${
                plan.highlighted 
                  ? 'border-brand-purple shadow-lg relative overflow-hidden' 
                  : 'border-gray-200'
              }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-brand-purple text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className={`pb-2 ${plan.highlighted ? 'bg-brand-purple bg-opacity-5' : ''}`}>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-3 mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 pt-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-brand-purple mr-2 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button 
                      className={`w-full ${
                        plan.highlighted 
                          ? 'bg-brand-purple hover:bg-brand-lightPurple' 
                          : 'bg-white border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white'
                      }`}
                    >
                      {plan.ctaText}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">All plans include a 14-day free trial. No credit card required.</p>
          <p className="text-gray-500 text-sm mt-2">Need a custom solution? <Link to="/contact" className="text-brand-purple font-medium">Contact our sales team</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
