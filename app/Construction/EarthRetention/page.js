"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../Footer/page";
import Header from "../Header/page";

export default function EarthRetentionSystems() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header/>
      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-black px-6 py-4">
          <ul className="flex flex-col space-y-3 text-gray-200">
            <Link href="/Construction/client" legacyBehavior>
              <li className="hover:text-white cursor-pointer transition">Home</li>
            </Link>
            <Link href="/Construction/about" legacyBehavior>
              <li className="hover:text-white cursor-pointer transition">About</li>
            </Link>
            <div>
              <li
                onClick={() => setProjectsOpen(!projectsOpen)}
                className="hover:text-white cursor-pointer transition"
              >
                Projects
              </li>
              {projectsOpen && (
                <div className="mt-2 bg-gray-800 rounded">
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
            {/* "Get a Quote" Button for Mobile */}
            <Link href="/Construction/quote" legacyBehavior>
              <li>
                <button className="mt-4 w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition">
                  Get a Quote
                </button>
              </li>
            </Link>
          </ul>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Earth Retention Systems
          </h1>
          <p className="text-gray-200 mb-4 leading-relaxed">
            Earth retention systems are vital structures erected to uphold soil
            and prevent it from descending or causing undue disasters. Traditional
            types include gravity walls, anchored walls, soldier pile walls, sheet
            pile walls, and more. SOILTECH introduces newer and more environment-friendly
            methods of retention within the Expanded Polystyrene (EPS) system, AEROX, and EREOX system.
          </p>

          {/* Example Image 1 */}
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="/Construction/images/ers1.jpg"
              alt="Earth Retention System Example"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow"
            />
          </div>

          <h2 className="text-2xl font-semibold text-white mb-4">EPS Geofoam</h2>
          <p className="text-gray-200 mb-4 leading-relaxed">
            EPS (Expanded Polystyrene) is a closed-cell, lightweight plastic foam used for
            over 50 years in construction. It can be used to construct embankments or fill areas
            where load must be minimized. Soil Tech has refined EPS in these new retention systems as an
            alternative to normal fill or backfill. EPS is strong, stable, and resistant to water
            infiltration, making it ideal for a wide range of applications.
          </p>

          {/* Example Image 2 */}
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="/Construction/images/ers2.jpg"
              alt="EPS Installation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow"
            />
          </div>

          <p className="text-gray-200 mb-4 leading-relaxed">
            EPS has been used extensively in countries like France and Austria, especially for highway
            and rail embankments. It can be used as a full block to stack, or be cut to fit. AEROX and
            EREOX frames are installed on top, forming a robust, efficient, and cost-effective retention
            system that avoids thousands of tons of heavy fill. Once installed, these blocks and frames
            provide excellent structural stability.
          </p>

          {/* Example Image 3 */}
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="/Construction/images/ers3.jpg"
              alt="EPS-based Earth Retention"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow"
            />
          </div>

          <h2 className="text-2xl font-semibold text-white mb-4">
            Advantages of EPS, AEROX, and EREOX over Conventional Earth Retaining Structures
          </h2>
          <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
            <li>Negligible or no excavation required</li>
            <li>Considerably faster installation</li>
            <li>Reduced material and labor costs</li>
            <li>Lighter fill to reduce load on existing soil or slope</li>
            <li>Can be contoured for aesthetic or environmental requirements</li>
            <li>Environment friendly</li>
          </ul>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
