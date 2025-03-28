
import { 
  MessageCircle, 
  BarChart3, 
  Lightbulb, 
  FileText, 
  Calendar 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI Chatbots",
    description: "Custom chatbots trained on your event data to handle queries, update registrations, and provide real-time assistance.",
    icon: MessageCircle,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Lead Scoring",
    description: "Advanced algorithms to score attendees based on engagement and value to exhibitors, optimizing lead conversion.",
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Personalized Recommendations",
    description: "Real-time suggestions for attendees based on preferences, enhancing engagement and satisfaction.",
    icon: Lightbulb,
    gradient: "from-orange-500 to-amber-500", 
  },
  {
    title: "Writing Assistance",
    description: "AI-powered content generation for session descriptions, emails, and marketing materials.",
    icon: FileText,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Event Setup Automation",
    description: "Streamlined setup process with AI assistance for registration site configuration and session scheduling.",
    icon: Calendar,
    gradient: "from-brand-blue to-brand-purple",
  },
];

const Features = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful AI Features for Every Stage of Your Event
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive suite of AI-powered tools streamlines planning, enhances engagement, and delivers exceptional experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className={`h-2 w-full bg-gradient-to-r ${feature.gradient}`}></div>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-r ${feature.gradient}`}>
                    <feature.icon className="text-white" size={20} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
