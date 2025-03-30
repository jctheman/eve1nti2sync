
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, BarChart3, FileText, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import ChatbotDemo from "@/components/demos/ChatbotDemo";
import LeadScoringDemo from "@/components/demos/LeadScoringDemo";
import WritingAssistantDemo from "@/components/demos/WritingAssistantDemo";
import EventSetupDemo from "@/components/demos/EventSetupDemo";

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState("chatbot");

  return (
    <section className="section py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Explore Our AI Solution Previews <span className="text-brand-purple">Live</span>
          </h2>
          <p className="text-lg text-gray-600">
            Experience the power of our AI tools with these interactive previews. See how AIEventManager can transform your event management.
          </p>
        </motion.div>

        <Tabs defaultValue="chatbot" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="chatbot" className="flex items-center gap-2">
              <MessageCircle size={18} />
              <span className="hidden sm:inline">AI Chatbot</span>
            </TabsTrigger>
            <TabsTrigger value="leadscoring" className="flex items-center gap-2">
              <BarChart3 size={18} />
              <span className="hidden sm:inline">Lead Scoring</span>
            </TabsTrigger>
            <TabsTrigger value="writing" className="flex items-center gap-2">
              <FileText size={18} />
              <span className="hidden sm:inline">Writing Assistant</span>
            </TabsTrigger>
            <TabsTrigger value="eventsetup" className="flex items-center gap-2">
              <Calendar size={18} />
              <span className="hidden sm:inline">Event Setup</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chatbot" className="mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ChatbotDemo />
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-3">About AI Chatbot</h3>
                <p className="text-gray-700 mb-4">
                  Our AI chatbot can be trained on your event data to provide instant, accurate responses to common attendee queries. Try asking about event dates, registration deadlines, discounts, speakers, schedule, or hotels.
                </p>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="leadscoring" className="mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LeadScoringDemo />
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-3">About Lead Scoring</h3>
                <p className="text-gray-700 mb-4">
                  Our AI-powered lead scoring system helps exhibitors identify high-value prospects. The system analyzes attendee data, behavior, and engagement to assign scores and prioritize follow-up efforts.
                </p>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="writing" className="mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WritingAssistantDemo />
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-3">About Writing Assistant</h3>
                <p className="text-gray-700 mb-4">
                  Our AI writing assistant helps you create professional, consistent content for your event communications. From welcome emails to session descriptions and social media posts.
                </p>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="eventsetup" className="mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <EventSetupDemo />
              <div className="mt-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-3">About Event Setup Automation</h3>
                <p className="text-gray-700 mb-4">
                  Our AI-powered setup assistant helps you configure your event quickly and efficiently. From registration pages to session scheduling, the assistant guides you through the entire process.
                </p>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InteractiveDemo;
