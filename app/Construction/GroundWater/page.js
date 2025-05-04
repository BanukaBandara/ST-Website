"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function GroundWaterExploration() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo / Title */}
          <Link href="/Construction/client" legacyBehavior>
            <a className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-800">SOILTECH.</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center text-gray-600">
            <Link href="/Construction/client" legacyBehavior>
              <li className="hover:text-gray-800 cursor-pointer transition list-none">Home</li>
            </Link>
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <span className="hover:text-gray-800 transition">Projects</span>
              {projectsOpen && (
                <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-20">
                  <a
                    href="#past-projects"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Past Projects
                  </a>
                  <a
                    href="#ongoing-projects"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Ongoing Projects
                  </a>
                </div>
              )}
            </div>
            <Link href="/Construction/contact" legacyBehavior>
              <li className="hover:text-gray-800 cursor-pointer transition list-none">Contact</li>
            </Link>
            <Link href="/Construction/Cfront" legacyBehavior>
              <li className="hover:text-gray-800 cursor-pointer transition list-none">Admin</li>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <span className="sr-only">Toggle Menu</span>
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <ul className="flex flex-col space-y-3 text-gray-600 text-center">
              <Link href="/Construction/client" legacyBehavior>
                <li className="hover:text-gray-800 cursor-pointer transition">Home</li>
              </Link>
              <div className="relative">
                <li
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="hover:text-gray-800 cursor-pointer transition"
                >
                  Projects
                </li>
                {projectsOpen && (
                  <div className="mt-2">
                    <a
                      href="#past-projects"
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Past Projects
                    </a>
                    <a
                      href="#ongoing-projects"
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Ongoing Projects
                    </a>
                  </div>
                )}
              </div>
              <Link href="/Construction/contact" legacyBehavior>
                <li className="hover:text-gray-800 cursor-pointer transition">Contact</li>
              </Link>
              <Link href="/Construction/Cfront" legacyBehavior>
                <li className="hover:text-gray-800 cursor-pointer transition">Admin</li>
              </Link>
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ground Water Explorations
          </h1>

          {/* Intro Paragraph */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            SOILTECH is a preeminent engineering firm in Sri Lanka for ground water explorations. This
            is one of the core services the company has chosen as its business initiative decades ago.
            We have acquired technology to probe and locate groundwater with higher accuracy, design
            wells, and consistently monitor water quality as assured by SOILTECH control systems and
            further water well development methods.
          </p>

          {/* Example Image (replace with your actual image path) */}
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="/Construction/images/groundwater1.jpg" // Replace with your real path
              alt="Ground Water Exploration Drilling"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow"
            />
          </div>

          {/* Sub-Section: SOILTECH Services */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">SOILTECH Services</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Groundwater exploration and water resource assessments</li>
            <li>Drilling boreholes for domestic, agricultural, and industrial use</li>
            <li>Well design and construction</li>
            <li>Groundwater exploration, development, and monitoring</li>
            <li>Dewatering and troubleshooting</li>
          </ul>

          {/* Sub-Section: Drilling Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Drilling Management for Groundwater Exploration
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Aquifer characteristics analysis</li>
                <li>Proper site selection</li>
                <li>Drilling procedures and management</li>
                <li>Groundwater management and development programs</li>
              </ul>
            </div>
            <div className="relative w-full h-64 md:h-72">
              <Image
                src="/Construction/images/groundwater2.jpg" // Replace with your real path
                alt="Drilling Management"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow"
              />
            </div>
          </div>

          {/* Sub-Section: Hydro Fracturing */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hydro Fracturing</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This is the process of well development that involves injecting high-pressure water into the
            well via the bedrock formations intersecting it. Hydro fracturing can significantly improve
            the yield of wells, especially those drilled in low permeability rock formations. Our
            experienced team ensures that this method is applied safely and effectively to achieve the
            best results.
          </p>

          {/* Sub-Section: Benefits of Hydro Fracturing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Hydro Fracturing</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Increased well yield during dry seasons and drought</li>
                <li>Improvement of overall pumping efficiency</li>
                <li>Extends the lifespan of the well</li>
                <li>Relatively quick procedure</li>
              </ul>
            </div>
            <div className="relative w-full h-64 md:h-72">
              <Image
                src="/Construction/images/groundwater3.jpg" // Replace with your real path
                alt="Hydro Fracturing Process"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 px-6 text-center">
        © {new Date().getFullYear()} SOILTECH. All rights reserved.
      </footer>
    </div>
  );
}
