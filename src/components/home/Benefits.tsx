
import { 
  DollarSign, 
  Clock, 
  TrendingUp,
  Users,
  Shield
} from "lucide-react";

const benefits = [
  {
    title: "Reduce Costs",
    description: "Save up to $200K annually on customer service with our AI chatbots handling routine inquiries.",
    icon: DollarSign,
  },
  {
    title: "Save Time",
    description: "Automate event setup and registration processes, reducing setup time by up to 80%.",
    icon: Clock,
  },
  {
    title: "Increase Conversions",
    description: "Boost exhibitor ROI with intelligent lead scoring and personalized attendee recommendations.",
    icon: TrendingUp,
  },
  {
    title: "Enhance Experiences",
    description: "Create personalized journeys for attendees with AI-powered recommendations and assistance.",
    icon: Users,
  },
  {
    title: "Reliable Support",
    description: "Provide 24/7 support for attendees, exhibitors, and speakers with AI chatbots.",
    icon: Shield,
  },
];

const Benefits = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose EventSync AI?
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform delivers measurable benefits for event organizers, exhibitors, and attendees alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-brand-purple bg-opacity-10 flex items-center justify-center mb-4">
                <benefit.icon className="text-brand-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
