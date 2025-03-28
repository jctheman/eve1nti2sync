
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <Mail className="text-brand-purple mr-4 shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">hello@eventsyncai.com</p>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="text-brand-purple mr-4 shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="text-brand-purple mr-4 shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">
                123 Event Avenue, Suite 200<br />
                San Francisco, CA 94103<br />
                United States
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="text-brand-purple mr-4 shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 5:00 PM PST<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Request a Demo</h2>
        <p className="text-gray-600 mb-4">
          Want to see EventSync AI in action? Schedule a personalized demo with one of our product specialists.
        </p>
        <p className="text-gray-600">
          During the demo, we'll:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
          <li>Walk through our AI-powered features</li>
          <li>Discuss your specific event management needs</li>
          <li>Answer any questions you have</li>
          <li>Explore pricing options for your organization</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
