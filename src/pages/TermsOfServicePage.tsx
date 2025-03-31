
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TermsOfServicePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg">
              <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using AIEventManager's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Use of Services</h2>
              <p>AIEventManager provides AI-powered event management tools and services. You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
              <p>When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Subscription and Payments</h2>
              <p>Some of our services require payment of fees. By subscribing to a paid service, you agree to pay all fees in accordance with the pricing and payment terms presented to you. All subscription fees are non-refundable except as expressly set forth in these Terms.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
              <p>All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are owned by AIEventManager and are protected by copyright, trademark, and other intellectual property laws.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. User Content</h2>
              <p>You retain ownership of any content you submit, post, or display on or through our services. By providing content to our services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Prohibited Activities</h2>
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Violating any laws or regulations</li>
                <li>Infringing on the rights of others</li>
                <li>Using our services to transmit malware or viruses</li>
                <li>Attempting to interfere with or compromise the system integrity or security</li>
                <li>Collecting or harvesting any information from our services</li>
                <li>Impersonating another person or entity</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
              <p>In no event shall AIEventManager be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">10. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AIEventManager is established, without regard to its conflict of law provisions.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">11. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>Email: legal@aieventmanager.com</p>
              <p>Address: 123 AI Boulevard, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
