
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, BarChart3, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AIProductShowcase = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  return (
    <section className="section py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our AI Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Try interactive demos of our key AI products and see how they can transform your event management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
          >
            <Card className="relative overflow-hidden shadow-lg border-0 h-full flex flex-col group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-80 z-0"></div>
              <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="AI Chatbot" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col relative z-10">
                <div className="p-3 bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-md">
                  <MessageCircle className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Chatbot</h3>
                <p className="text-white text-opacity-90 mb-6 flex-grow">
                  Experience our intelligent chatbot trained to handle event queries, update registrations, and provide real-time assistance.
                </p>
                <Link to="/demo">
                  <Button className="w-full bg-white hover:bg-gray-100 text-blue-600">
                    Try Demo
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
          >
            <Card className="relative overflow-hidden shadow-lg border-0 h-full flex flex-col group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-80 z-0"></div>
              <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Lead Scoring" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col relative z-10">
                <div className="p-3 bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-md">
                  <BarChart3 className="text-purple-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lead Scoring</h3>
                <p className="text-white text-opacity-90 mb-6 flex-grow">
                  See how our AI analyzes attendee behavior to identify high-value prospects for exhibitors, optimizing lead conversion.
                </p>
                <Link to="/demo">
                  <Button className="w-full bg-white hover:bg-gray-100 text-purple-600">
                    Try Demo
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
          >
            <Card className="relative overflow-hidden shadow-lg border-0 h-full flex flex-col group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-400 opacity-80 z-0"></div>
              <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Writing Assistant" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col relative z-10">
                <div className="p-3 bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-md">
                  <FileText className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Writing Assistant</h3>
                <p className="text-white text-opacity-90 mb-6 flex-grow">
                  Try our AI content generator that creates professional event emails, session descriptions, and marketing materials.
                </p>
                <Link to="/demo">
                  <Button className="w-full bg-white hover:bg-gray-100 text-green-600">
                    Try Demo
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="text-center">
          <Link to="/demo">
            <Button size="lg" className="bg-brand-purple hover:bg-brand-lightPurple">
              View All Interactive Demos
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIProductShowcase;
