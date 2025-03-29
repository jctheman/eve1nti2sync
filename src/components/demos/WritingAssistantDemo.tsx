
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Copy, CheckCircle, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WritingAssistantDemo = () => {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedTab, setSelectedTab] = useState("welcome");
  
  const contentTemplates = {
    welcome: {
      title: "Event Welcome Email",
      content: `Dear [Attendee Name],

Thank you for registering for TechConf Global 2023! We're excited to welcome you to San Francisco for three days of innovation, networking, and learning.

Event Details:
• Dates: October 15-17, 2023
• Venue: San Francisco Convention Center
• Address: 747 Howard Street, San Francisco, CA 94103

Your registration includes access to all keynote sessions, breakout tracks, networking events, and our exclusive evening reception on October 16th. You'll also receive complimentary breakfast and lunch on all event days.

To prepare for the event:
1. Download our event app to customize your agenda
2. Book your hotel accommodation using our special attendee rates
3. Join our LinkedIn group to connect with other attendees before the event

For any questions, please contact our support team at support@techconfglobal.com.

We look forward to seeing you in October!

Best regards,
The TechConf Global Team`
    },
    session: {
      title: "AI Workshop Session Description",
      content: `# AI-Powered Event Management: Transforming Attendee Experiences

**Workshop Duration:** 90 minutes
**Track:** Advanced Technology
**Difficulty Level:** Intermediate

## Overview:
This hands-on workshop explores how artificial intelligence is revolutionizing event management. Participants will learn practical applications of AI chatbots, personalized recommendation engines, and lead scoring systems that can dramatically improve attendee satisfaction and exhibitor ROI.

## What You'll Learn:
• How to implement AI chatbots that reduce customer service inquiries by up to 70%
• Techniques for building personalized recommendations that increase session attendance
• Methods for deploying lead scoring systems that help exhibitors identify high-value prospects
• Best practices for maintaining data privacy while leveraging AI capabilities

## Who Should Attend:
Event planners, marketing directors, and technology officers who want to stay ahead of the curve in event technology. Basic familiarity with digital event platforms is recommended.

## About the Instructor:
Dr. James Wilson is the Chief AI Officer at EventSync. With over 15 years of experience in machine learning and event technology, James has helped transform the digital experience for events ranging from small corporate gatherings to major international conferences.

*Attendees should bring their laptops for the interactive demonstration portion of the workshop.*`
    },
    marketing: {
      title: "Social Media Promotional Post",
      content: `🚀 Ready to transform your events with the power of AI? 

Join us at #TechConfGlobal2023 to discover how EventSync AI is revolutionizing event management through intelligent automation.

✅ Reduce customer service costs by up to $200K annually
✅ Increase exhibitor ROI with smart lead scoring
✅ Create personalized attendee journeys that boost satisfaction

Our CEO @MichaelChen will be presenting "The Future of AI in Events" on Oct 16th at 2PM.

🔗 Register now and use code AIPOWER for 15% off: techconfglobal.com/register

#EventTech #ArtificialIntelligence #EventPlanning #InnovationInEvents #ConferenceTech`
    },
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleGenerateClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(contentTemplates[selectedTab as keyof typeof contentTemplates].content);
    setCopied(true);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6">
        <CardTitle className="flex items-center text-xl">
          <Sparkles className="mr-2" size={24} />
          AI Writing Assistant
        </CardTitle>
        <p className="text-white text-opacity-90 mt-2">
          Generate professional content for your events in seconds
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs 
          defaultValue="welcome" 
          className="w-full"
          onValueChange={(value) => setSelectedTab(value)}
        >
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="welcome">Welcome Email</TabsTrigger>
            <TabsTrigger value="session">Session Description</TabsTrigger>
            <TabsTrigger value="marketing">Social Media</TabsTrigger>
          </TabsList>
          
          {Object.entries(contentTemplates).map(([key, template]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">{template.title}</h3>
              </div>
              
              <div className="relative">
                <pre className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm whitespace-pre-wrap font-sans text-gray-700 max-h-[400px] overflow-y-auto">
                  {template.content}
                </pre>
                
                <div className="absolute top-2 right-2 flex space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleCopyClick}
                    className="bg-white bg-opacity-80 hover:bg-opacity-100"
                  >
                    {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-500">
                  AI-generated content based on your event data
                </div>
                <Button 
                  onClick={handleGenerateClick}
                  disabled={loading}
                  className="bg-green-500 hover:bg-green-600"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Regenerate
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <motion.div 
          className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="font-semibold text-green-800 mb-2">Pro Tips:</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Personalize content by adding custom event data</li>
            <li>• Use the regenerate button to get alternative versions</li>
            <li>• AI writing works best when given specific context</li>
            <li>• Edit generated content to match your brand voice</li>
          </ul>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default WritingAssistantDemo;
