
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg">
              <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>AIEventManager ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered event management platform.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Personal information (name, email address, phone number)</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Event details and preferences</li>
                <li>Communications with our chatbots and AI tools</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Personalize your experience and deliver content relevant to your interests</li>
                <li>Train and improve our AI systems</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners (with your consent)</li>
                <li>In response to legal process or to comply with applicable law</li>
                <li>To protect our rights, privacy, safety, or property</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Security</h2>
              <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Request portability of your information</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>Email: privacy@aieventmanager.com</p>
              <p>Address: 123 AI Boulevard, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
