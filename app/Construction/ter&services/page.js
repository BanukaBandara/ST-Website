import Link from "next/link";
import Header from "../Header/page";
import Footer from "../Footer/page";

export const metadata = {
  title: "Terms of Service | SOILTECH LTD",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header/>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">Terms of Service</h1>
        <p className="text-gray-300 mb-4">
          These Terms of Service govern your use of our website. By accessing or using the site,
          you agree to be bound by these terms. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Use of Our Services</h2>
        <p className="text-gray-300 mb-4">
          You agree to use our site for lawful purposes only. You must not use it in any way that
          may damage the site or impair anyone else's use of it.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Intellectual Property</h2>
        <p className="text-gray-300 mb-4">
          All content, trademarks, and data on this site, including software, databases, text,
          graphics, icons, and hyperlinks, are the property of or licensed to SOILTECH LTD.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Limitation of Liability</h2>
        <p className="text-gray-300 mb-4">
          We are not liable for any direct, indirect, or consequential loss or damage incurred
          by users in connection with the use of our website.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. External Links</h2>
        <p className="text-gray-300 mb-4">
          Our website may contain links to external websites. We are not responsible for the
          content or practices of these third-party sites.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">5. Changes to Terms</h2>
        <p className="text-gray-300 mb-4">
          We reserve the right to update these terms at any time. Continued use of the site
          following any changes indicates your acceptance of the new terms.
        </p>

        <p className="text-gray-500 text-sm mt-12">
          Last updated: April 2, 2025
        </p>
      </main>
      <Footer/>
    </div>
  );
}
