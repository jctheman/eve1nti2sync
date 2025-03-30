
import { Award, Users, Lightbulb, Rocket } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description: "We push the boundaries of what's possible with AI in event management.",
    icon: Lightbulb,
  },
  {
    title: "Customer Success",
    description: "Your success is our success. We're committed to helping you deliver exceptional events.",
    icon: Users,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from product development to customer support.",
    icon: Award,
  },
  {
    title: "Continuous Improvement",
    description: "We're constantly learning, adapting, and improving our solutions to meet evolving needs.",
    icon: Rocket,
  },
];

const AboutContent = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                AIEventManager was founded by a team of event industry veterans who recognized the transformative potential of AI in solving the complex challenges of event management.
              </p>
              <p>
                With decades of combined experience in planning and executing events of all sizes, our founders experienced firsthand the time-consuming, repetitive tasks that dominate event management. They envisioned a future where AI could handle these tasks, freeing event professionals to focus on creating exceptional experiences.
              </p>
              <p>
                Today, AIEventManager is at the forefront of the event technology revolution, providing innovative AI-powered solutions that streamline operations, enhance attendee experiences, and deliver measurable ROI for event organizers.
              </p>
              <p>
                Our platform is trusted by over 500 event organizers worldwide, from corporate event teams to professional conference organizers, all of whom are experiencing the benefits of AI-assisted event management.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              Our mission is to revolutionize the event industry by harnessing the power of artificial intelligence to automate routine tasks, enhance decision-making, and create personalized experiences that delight attendees and deliver value to all stakeholders.
            </p>
            
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-purple bg-opacity-10 flex items-center justify-center mb-4">
                    <value.icon className="text-brand-purple" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
