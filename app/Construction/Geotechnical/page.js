"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function GeoTechnicalInvestigations() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-black shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo / Title */}
          <Link href="/Construction/client" legacyBehavior>
            <a className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">SOILTECH.</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center text-gray-200">
            <Link href="/Construction/client" legacyBehavior>
              <li className="hover:text-white cursor-pointer transition list-none">
                Home
              </li>
            </Link>
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <span className="hover:text-white transition">Projects</span>
              {projectsOpen && (
                <div className="absolute top-full mt-2 w-40 bg-gray-800 shadow-lg rounded-md py-2 z-20">
                  <a
                    href="#past-projects"
                    className="block px-4 py-2 hover:bg-gray-700 transition"
                  >
                    Past Projects
                  </a>
                  <a
                    href="#ongoing-projects"
                    className="block px-4 py-2 hover:bg-gray-700 transition"
                  >
                    Ongoing Projects
                  </a>
                </div>
              )}
            </div>
            <Link href="/Construction/contact" legacyBehavior>
              <li className="hover:text-white cursor-pointer transition list-none">
                Contact
              </li>
            </Link>
            <Link href="/Construction/Cfront" legacyBehavior>
              <li className="hover:text-white cursor-pointer transition list-none">
                Admin
              </li>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Toggle Menu</span>
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-3 text-gray-200 text-center">
              <Link href="/Construction/client" legacyBehavior>
                <li className="hover:text-white cursor-pointer transition">
                  Home
                </li>
              </Link>
              <div className="relative">
                <li
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="hover:text-white cursor-pointer transition"
                >
                  Projects
                </li>
                {projectsOpen && (
                  <div className="mt-2">
                    <a
                      href="#past-projects"
                      className="block px-4 py-2 hover:bg-gray-700 transition"
                    >
                      Past Projects
                    </a>
                    <a
                      href="#ongoing-projects"
                      className="block px-4 py-2 hover:bg-gray-700 transition"
                    >
                      Ongoing Projects
                    </a>
                  </div>
                )}
              </div>
              <Link href="/Construction/contact" legacyBehavior>
                <li className="hover:text-white cursor-pointer transition">
                  Contact
                </li>
              </Link>
              <Link href="/Construction/Cfront" legacyBehavior>
                <li className="hover:text-white cursor-pointer transition">
                  Admin
                </li>
              </Link>
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-black py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Geo Technical Investigations
          </h1>

          {/* Intro Paragraph */}
          <p className="text-gray-200 mb-4 leading-relaxed">
            SOILTECH, being the foremost Geotechnical Engineering expertise firm in Sri Lanka, has
            excelled at new frontiers in the entirety of our specialized discipline. We continue to
            keep up with emerging technologies and are recognized as a pioneer in many aspects. Our
            synergy of world-class talent and state-of-the-art equipment ensures top-tier
            geotechnical exploration solutions.
          </p>
          <p className="text-gray-200 mb-4 leading-relaxed">
            Geotechnical investigations are an essential step in building and infrastructure
            development. Drilling is often the first step. Our smart rigs handle many geological
            challenges and deliver accurate soil sampling and analysis. Our solutions are recognized
            across multiple industrial sectors. We also conduct offshore geotechnical investigations,
            bridging from onshore to nearshore or offshore. For deeper analysis, we coordinate with
            Standard Penetration Test (SPT) to interpret sub-surface conditions.
          </p>

          {/* Example Image */}
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="/Construction/images/geo1.jpg" // Replace with your actual image
              alt="Geo Technical Investigations Example"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow"
            />
          </div>

          {/* Geotechnical Investigations */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Geotechnical Investigations
          </h2>
          <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
            <li>Borehole drilling and sampling</li>
            <li>Standard Penetration Test (SPT)</li>
            <li>Laboratory testing</li>
            <li>Analysis and design</li>
            <li>Foundation and embankment designs</li>
            <li>Ground improvement methods</li>
            <li>Piling</li>
            <li>Geophysics</li>
            <li>Bridges and Tunnels</li>
          </ul>

          {/* Laboratory Facilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Laboratory Facilities
              </h2>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Our advanced in-house laboratory is operated by experienced geotechnical engineers,
                offering specialized tests such as soil classification, triaxial tests, consolidation,
                direct shear, and more. We maintain recognized accreditation standards, ensuring
                reliable data for both internal and external clients.
              </p>
            </div>
            <div className="relative w-full h-64 md:h-72">
              <Image
                src="/Construction/images/geo2.jpg" // Replace with your actual image
                alt="Laboratory Testing"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow"
              />
            </div>
          </div>

          {/* Off Shore Explorations */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Off Shore Explorations
          </h2>
          <p className="text-gray-200 mb-4 leading-relaxed">
            Offshore geotechnical engineering is a vital area of business for us. Sri Lanka is
            encompassed with deep and near-shore offshore drilling areas. We use marine rigs and
            specialized training to handle harsh conditions. Sub-bottom profiling, sample retrieval,
            and deeper marine investigations are among our expertise.
          </p>

          {/* Off Shore Services Offered */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Off Shore Services Offered
          </h2>
          <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
            <li>Floating barges</li>
            <li>Mooring systems</li>
            <li>Marine drilling</li>
            <li>Soil sampling</li>
            <li>SPT at sea</li>
          </ul>

          {/* Off Shore Construction Works */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Off Shore Construction Works
          </h2>
          <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
            <li>Jetties</li>
            <li>Marine Piling</li>
            <li>Dolphins</li>
            <li>Dredging</li>
          </ul>
        </div>
      </main>

 {/* Footer */}
 <footer className="bg-black py-8 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SOILTECH. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <p className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer">
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
