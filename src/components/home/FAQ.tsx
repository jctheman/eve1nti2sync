
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does the AI chatbot integrate with our existing systems?",
    answer: "Our AI chatbot can be integrated with your CRM, registration platforms, and content management systems through our API or using pre-built connectors for popular platforms like Salesforce, Cvent, and Marketo. The setup process typically takes 2-3 weeks, including training the AI on your specific event data."
  },
  {
    question: "Can we customize the AI recommendations for different attendee segments?",
    answer: "Yes, the recommendation engine can be customized for different attendee segments based on factors like industry, job role, past behavior, and expressed interests. You can create personalized journeys for VIPs, first-time attendees, exhibitors, and other segments."
  },
  {
    question: "How accurate is the lead scoring system?",
    answer: "Our lead scoring system has demonstrated an 85% accuracy rate in identifying high-quality leads. The system uses machine learning that improves over time as it processes more data from your events, reaching peak performance after 2-3 events."
  },
  {
    question: "Is our event data secure with your AI solutions?",
    answer: "Absolutely. We employ industry-leading security practices including end-to-end encryption, regular security audits, and compliance with GDPR and CCPA. Your data is stored in SOC 2 compliant data centers, and we offer data processing agreements to ensure compliance with your organization's requirements."
  },
  {
    question: "Can we white-label the AI tools for our events?",
    answer: "Yes, all of our AI tools can be fully white-labeled with your branding, including logos, colors, and custom domains. This is available on our Professional and Enterprise plans at no additional cost."
  },
  {
    question: "How much technical expertise do we need to implement your solutions?",
    answer: "Our platform is designed to be user-friendly for non-technical users. For basic implementation, no coding knowledge is required. For advanced customizations, our team provides comprehensive support, or your developers can use our well-documented API."
  }
];

const FAQ = () => {
  return (
    <section className="section py-16 bg-white" id="faq">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our AI event management platform
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-all">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-700">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
