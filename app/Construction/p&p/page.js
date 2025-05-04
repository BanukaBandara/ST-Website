import Link from "next/link";
import Footer from "../Footer/page";
import Header from "../Header/page";

export const metadata = {
  title: "Privacy Policy | SOILTECH LTD",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black text-white min-h-screen">
        <Header/>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">
          At SOILTECH LTD, we value your privacy. This Privacy Policy outlines how we collect,
          use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Information We Collect</h2>
        <p className="text-gray-300 mb-4">
          We may collect personal information such as your name, email address, phone number,
          and project details when you submit forms or contact us through the site.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">
          The information we collect is used to respond to inquiries, provide services,
          and improve our website and customer experience.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Sharing of Information</h2>
        <p className="text-gray-300 mb-4">
          We do not sell or rent your personal information to third parties. Your information
          may be shared with service providers who assist us in operating our website and
          conducting our business.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. Cookies</h2>
        <p className="text-gray-300 mb-4">
          Our website may use cookies to enhance your browsing experience. You can choose to
          disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">5. Data Security</h2>
        <p className="text-gray-300 mb-4">
          We implement a variety of security measures to maintain the safety of your personal
          information. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">6. Your Consent</h2>
        <p className="text-gray-300 mb-4">
          By using our site, you consent to our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">7. Changes to This Policy</h2>
        <p className="text-gray-300 mb-4">
          We may update this policy from time to time. Any changes will be posted on this page.
        </p>

        <p className="text-gray-500 text-sm mt-12">
          Last updated: April 2, 2025
        </p>
      </main>
      <Footer/>
    </div>
  );
}
