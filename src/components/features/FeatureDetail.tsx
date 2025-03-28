
import { 
  MessageCircle, 
  BarChart3, 
  Lightbulb, 
  FileText, 
  Calendar,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    id: "chatbots",
    title: "AI Chatbots",
    description: "Our AI-powered chatbots are trained on your event data to provide instant, accurate responses to common queries, helping you automate customer service and reduce support costs.",
    icon: MessageCircle,
    gradient: "from-blue-500 to-cyan-500",
    benefits: [
      "Handles email and chat queries in real-time",
      "Updates registration and housing information instantly",
      "Reduces customer service costs by up to $200K annually",
      "Provides 24/7 support for attendees, exhibitors, and speakers",
      "Can be used internally for sales and customer service"
    ],
    example: "A user emails a request to change a reservation, and our AI updates it automatically and notifies the user. Attendees can ask about event dates and discounts, receiving accurate responses based on training data."
  },
  {
    id: "leadscoring",
    title: "Lead Scoring",
    description: "Enhance exhibitor experience by optimizing lead conversion with our intelligent lead scoring system. It assigns scores to attendees based on their actions and potential value to exhibitors.",
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500",
    benefits: [
      "Scores attendees from 1 to 10 based on engagement levels",
      "Identifies high-value prospects for exhibitors",
      "Increases conversion rates and exhibitor ROI",
      "Uses registration and behavioral data for accurate scoring",
      "Provides real-time lead quality insights"
    ],
    example: "Exhibitors receive a prioritized list of attendees who visited their booth, with each lead scored based on their profile, interests, session attendance, and engagement level."
  },
  {
    id: "recommendations",
    title: "Personalized Recommendations",
    description: "Create personalized attendee experiences with our AI recommendation engine. It suggests relevant sessions, exhibitors, and connections based on user data and preferences.",
    icon: Lightbulb,
    gradient: "from-orange-500 to-amber-500",
    benefits: [
      "Increases attendee engagement and satisfaction",
      "Suggests relevant sessions and exhibitors to attendees",
      "Makes real-time suggestions during registration",
      "Helps attendees discover content they might otherwise miss",
      "Creates personalized event journeys"
    ],
    example: "During registration, attendees receive personalized session recommendations based on their professional interests, industry, and role. Throughout the event, they receive tailored suggestions for exhibitors to visit and connections to make."
  },
  {
    id: "writing",
    title: "Writing Assistance",
    description: "Streamline content creation with our AI writing assistant. It helps generate session descriptions, email communications, and marketing materials quickly and consistently.",
    icon: FileText,
    gradient: "from-green-500 to-emerald-500",
    benefits: [
      "Generates welcome emails and session descriptions",
      "Ensures consistency in communications",
      "Saves time on content creation",
      "Creates engaging, professional content",
      "Can be used for marketing materials and website content"
    ],
    example: "Event organizers can quickly generate professional welcome emails, session descriptions, and social media posts with consistent tone and messaging. The AI can also help create personalized follow-up emails after the event."
  },
  {
    id: "setup",
    title: "Event Setup Automation",
    description: "Reduce setup time and errors with our AI-powered event setup assistant. It automates the configuration of registration sites and helps with session scheduling based on predefined business rules.",
    icon: Calendar,
    gradient: "from-brand-blue to-brand-purple",
    benefits: [
      "Automates setup of online registration sites",
      "Provides session scheduling options",
      "Reduces setup time and errors",
      "Uses predefined business rules for consistency",
      "Streamlines the planning process"
    ],
    example: "Enter session details and receive intelligent scheduling options that consider room availability, speaker schedules, and topic flow. The system can also automatically configure registration options based on predefined business rules."
  }
];

const FeatureDetail = () => {
  return (
    <section className="py-12">
      <div className="container-custom">
        {features.map((feature, index) => (
          <div 
            key={index} 
            id={feature.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 ${
              index % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={`flex flex-col justify-center ${
              index % 2 === 1 ? 'lg:col-start-2' : ''
            }`}>
              <div className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-gradient-to-r ${feature.gradient}`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-6">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="text-brand-purple mr-2 shrink-0 mt-1" size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h4 className="font-semibold mb-2">Example Use Case</h4>
                <p className="text-gray-600">{feature.example}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md overflow-hidden shadow-xl border-0">
                <div className={`h-3 w-full bg-gradient-to-r ${feature.gradient}`}></div>
                <CardContent className="p-0">
                  <div className="bg-gray-800 p-6 h-[350px] flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                        <feature.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">Feature visualization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureDetail;
