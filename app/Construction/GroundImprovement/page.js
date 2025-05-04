"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../Footer/page";
import Header from "../Header/page";

export default function GroundImprovement() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1 bg-black py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ground Improvement
          </h1>

          {/* Intro Paragraph */}
          <p className="text-gray-400 mb-4 leading-relaxed">
            Ground Improvement techniques aim to enhance soil properties or modify existing ground
            conditions to achieve a more stable foundation. By improving subsoil layers, these
            techniques can help reduce costs, minimize risks, and extend the longevity of structures.
          </p>

          {/* Example Image */}
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="/Construction/images/groundimprove1.jpg"
              alt="Ground Improvement Example"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow"
            />
          </div>

          {/* Why & When */}
          <h2 className="text-2xl font-semibold text-white mb-4">Why & When?</h2>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
            <li>Improve poor ground conditions</li>
            <li>Soil improvement or flexible foundations can meet project performance</li>
            <li>Cost optimization over traditional excavation or replacement methods</li>
          </ul>

          {/* Ground Improvement Techniques */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Ground Improvement Techniques
          </h2>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
            <li>Jet Piling</li>
            <li>Soil Mixing</li>
            <li>Vibro-compaction / Vibro Replacement Stone Columns</li>
            <li>Ground Freezing</li>
            <li>Electro Osmosis</li>
          </ul>

          {/* Injection System */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Injection System for Expansive Soils
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            SOILTECH has been a pioneer in the practice of ground improvement/modification in
            expansive soils using chemical additives to reduce swelling. Our injection system
            introduces stabilizing compounds into the soil, reducing heave and settlement issues.
            This approach is more economical than full-scale replacement and is often quicker to
            implement. Typical injection materials include chemical grouts and potassium lignosulfonate
            for improved stability.
          </p>

          {/* Another Example Image */}
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="/Construction/images/groundimprove2.jpg"
              alt="Injection System Example"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow"
            />
          </div>

          {/* Grouting Section */}
          <h2 className="text-2xl font-semibold text-white mb-4">Grouting</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Grouting involves injecting a fluid-like material into voids or fissures in soil or rock
            to strengthen and reduce permeability. Various grouting techniques are applied depending
            on soil type, project demands, and environmental constraints.
          </p>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
            <li>Chemical Grouting</li>
            <li>Compaction Grouting</li>
            <li>Fracture Grouting</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
