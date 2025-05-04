"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../Footer/page";
import Header from "../Header/page";

export default function TrenchlessTechnology() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1 bg-black py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trenchless Technology
          </h1>

          {/* Intro Paragraph */}
          <p className="text-gray-400 mb-4 leading-relaxed">
            Trenchless Technology is an innovative technique used by Soil Tech in the past two decades
            in carrying out installation/rehabilitation of underground infrastructure with minimal
            damage to traffic, businesses, and residences. It has many advantages over the open-cut
            method as it causes less pollution, does not create hazardous conditions on roads, and
            reduces noise and vibration significantly.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            The many advantages over the open-cut method include minimal disruption to normal life
            activities, significantly less environmental impact, and safer working conditions. It
            also eliminates the need for major road closures and extensive rework on surfaces
            afterward.
          </p>

          {/* Example Image */}
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="/Construction/images/trenchless1.jpg"
              alt="Trenchless Technology Example"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow"
            />
          </div>

          {/* Sub-Section: Existing Problems with Open-Cut Method */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Existing Problems with the Open Method
          </h2>
          <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
            <li>Constant traffic jams</li>
            <li>Road surface breaks after excavation</li>
            <li>Resurfacing hazards once the road reopens</li>
            <li>Noise and pollution in residential/commercial areas</li>
          </ul>

          {/* Pipe Jacking Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Pipe Jacking</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Pipe Jacking is a process for introducing underground pipelines, channels, and ducts.
                Robust hydraulic jacks are used to push specially designed pipes through the ground
                behind a shield at the same time as excavation is taking place within the shield.
                Once a specified length is reached, the structure—complete with pipes—is formed and
                ready for use.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This method significantly reduces surface disruption and is ideal in congested
                urban environments where open-cut excavation is impractical or unsafe.
              </p>
            </div>
            <div className="relative w-full h-64 md:h-72">
              <Image
                src="/Construction/images/trenchless2.jpg"
                alt="Pipe Jacking"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow"
              />
            </div>
          </div>

          {/* Horizontal Directional Drilling Section */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Horizontal Directional Drilling (HDD)
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Horizontal directional drilling (HDD) is a favored method for laying pipelines or
            electrical lines up to a few 10’s of km with minimal environmental and surface damage.
            It is primarily a drilling technique that can bore horizontally, under roads and
            buildings, to install pipes or conduits.
          </p>

          <div className="relative w-full h-64 md:h-72 mb-8">
            <Image
              src="/Construction/images/trenchless3.jpg"
              alt="Horizontal Directional Drilling"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow"
            />
          </div>

          <p className="text-gray-400 leading-relaxed">
            HDD is extremely useful in environmentally sensitive areas, as it minimizes excavation
            and avoids damage to existing structures or utilities. It also reduces the risk of soil
            contamination, shortens project timelines, and decreases costs related to surface
            restoration.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
