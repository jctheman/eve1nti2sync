
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CookiePolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg">
              <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
              <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
              <p>AIEventManager uses cookies for the following purposes:</p>
              <ul className="list-disc ml-6 mb-4">
                <li><strong>Essential cookies:</strong> These are necessary for the website to function properly.</li>
                <li><strong>Preference cookies:</strong> These remember your settings and preferences.</li>
                <li><strong>Analytics cookies:</strong> These help us understand how visitors interact with our website.</li>
                <li><strong>Marketing cookies:</strong> These are used to track visitors across websites to display relevant advertisements.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
              <h3 className="text-lg font-medium mt-6 mb-2">Session Cookies</h3>
              <p>Session cookies are temporary and are deleted when you close your browser. They are used to keep track of your activities during a browsing session.</p>
              
              <h3 className="text-lg font-medium mt-6 mb-2">Persistent Cookies</h3>
              <p>Persistent cookies remain on your device for a specified period or until you delete them. They help us recognize you when you return to our website.</p>
              
              <h3 className="text-lg font-medium mt-6 mb-2">First-Party Cookies</h3>
              <p>First-party cookies are set by our website directly.</p>
              
              <h3 className="text-lg font-medium mt-6 mb-2">Third-Party Cookies</h3>
              <p>Third-party cookies are set by our partners and service providers, such as Google Analytics, to provide us with usage statistics and enhance your experience.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Cookie Management</h2>
              <p>Most web browsers allow you to control cookies through their settings preferences. You can usually find these settings in the "Options" or "Preferences" menu of your browser. You can also configure your browser to reject all cookies or to indicate when a cookie is being sent.</p>
              
              <p>Please note that blocking or deleting cookies may impact your experience on our website and some features may not function properly.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Changes to This Cookie Policy</h2>
              <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Contact Us</h2>
              <p>If you have any questions about our Cookie Policy, please contact us at:</p>
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

export default CookiePolicyPage;
