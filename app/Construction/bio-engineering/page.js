"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Header/page";
import Footer from "../Footer/page";

export default function BioEngineeringPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header/>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bio Engineering
          </h1>

          {/* Top Intro Section */}
          <p className="text-gray-300 mb-4 leading-relaxed">
            Landscape is one of the most cost effective means for improving and sustaining the quality
            of life, whether in the city, the suburbs, or the country.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Soil bioengineering is an interdisciplinary approach to environmental restoration which
            involves the incorporation of biological systems with engineering principles in order to
            restore soil and thereby water resources. It is the application of living plant materials
            to provide stability and habitat, while restoring or protecting soil from erosion.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Our aim is to build an environment where nature, people, and design blend seamlessly and
            respond to each client's dreams, expectations, and attributes.
          </p>

          {/* Image */}
          <div className="relative w-full h-64 md:h-96 my-8">
            {/* Make sure this image exists in /public/Construction/images/bio-engineering.jpg */}
            <Image
              src="/Construction/images/bio-engineering.jpg"
              alt="Bio Engineering Example"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow"
            />
          </div>

          {/* Sub-Section */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Bio - Designing of Outdoor Spaces to Achieve:
          </h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Socio-Behavioural</li>
            <li>Environmental</li>
            <li>Aesthetic outcomes</li>
          </ul>

          {/* Why Choose Us */}
          <h2 className="text-2xl font-semibold text-white mb-4">WHY CHOOSE US?</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            We design and engineer tailor-made landscaping concepts that align with architectural
            language. Our landscaping and bioengineering concepts are interpretations and activations
            of the space.
          </p>

          {/* Services */}
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Slope Furnishing</li>
            {/* Add more services if needed */}
          </ul>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
