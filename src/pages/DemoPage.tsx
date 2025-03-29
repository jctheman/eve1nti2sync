
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, BarChart3, FileText, Calendar } from "lucide-react";
import ChatbotDemo from "@/components/demos/ChatbotDemo";
import LeadScoringDemo from "@/components/demos/LeadScoringDemo";
import WritingAssistantDemo from "@/components/demos/WritingAssistantDemo";
import { motion } from "framer-motion";

const DemoPage = () => {
  const [activeTab, setActiveTab] = useState("chatbot");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-purple-50 py-16">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Try Our AI Solutions <span className="gradient-text">Live</span>
              </h1>
              <p className="text-lg text-gray-600">
                Experience the power of our AI tools with these interactive demos. See how EventSync AI can transform your event management.
              </p>
            </motion.div>

            <Tabs defaultValue="chatbot" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
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
                      Our AI chatbot can be trained on your event data to provide instant, accurate responses to common attendee queries. This demo showcases how the chatbot can handle questions about event dates, registration, speakers, and more.
                    </p>
                    <p className="text-gray-700">
                      Try asking about <span className="font-medium">event dates</span>, <span className="font-medium">registration deadlines</span>, <span className="font-medium">discounts</span>, <span className="font-medium">speakers</span>, <span className="font-medium">schedule</span>, or <span className="font-medium">hotels</span>.
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
                      Our AI-powered lead scoring system helps exhibitors identify high-value prospects. The system analyzes attendee data, behavior, and engagement to assign scores and help exhibitors prioritize their follow-up efforts.
                    </p>
                    <p className="text-gray-700">
                      In this demo, you can see how leads are scored and categorized based on various factors. Click on each lead to view detailed information and insights.
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
                      Our AI writing assistant helps you create professional, consistent content for your event communications. From welcome emails to session descriptions and social media posts, the assistant saves you time and ensures quality.
                    </p>
                    <p className="text-gray-700">
                      This demo showcases three types of content our AI can generate. In the full version, you can customize the content based on your specific event details and brand voice.
                    </p>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DemoPage;
