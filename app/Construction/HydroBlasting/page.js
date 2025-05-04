"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../Footer/page";
import Header from "../Header/page";

export default function HydroBlasting() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1 bg-black py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hydro Blasting
          </h1>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Hydro blasting is a quick and cost-effective method used in wide areas of applications
            in cleaning internal and exterior surfaces, and also for cutting concrete. The process
            uses extremely high-pressure water (and sometimes abrasive) to remove coatings, contaminants,
            or other materials. Pressure can be varied depending on the application and the surface
            to be treated.
          </p>

          {/* Example Image */}
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="/Construction/images/hydro1.jpg"
              alt="Hydro Blasting Example"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow"
            />
          </div>

          {/* Hydro Cutting of Concrete */}
          <h2 className="text-2xl font-semibold text-white mb-4">Hydro Cutting of Concrete</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            A high-pressure water jet can cut through concrete by eroding the cement. An abrasive
            is added to the water jet in more complex applications. This method is particularly
            useful in situations where traditional cutting methods may create excessive dust or
            vibrations.
          </p>

          {/* Water Jet Cutting */}
          <h2 className="text-2xl font-semibold text-white mb-4">Water Jet Cutting</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Using extremely high water pressure, combined with or without added hydrochemical
            equipment, bulk or thickness disappears in a single pass, contingent on the material’s
            properties.
          </p>

          {/* Drill Pipe Cleaning */}
          <h2 className="text-2xl font-semibold text-white mb-4">Drill Pipe Cleaning</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Drill pipes are often reused in drilling projects. Proper cleaning and removal of scale
            buildup is an excellent solution for their reuse. It reduces environmental impact and
            saves cost.
          </p>

          {/* Hydro Demolition */}
          <h2 className="text-2xl font-semibold text-white mb-4">Hydro Demolition</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Hydro demolition is used for partial or full concrete removal, preserving surrounding
            steel and providing an excellent surface for new bonding. It doesn’t damage the
            reinforcement, increases speed of concrete removal, and easily works around rebar.
          </p>

          {/* Pipe and Tube Cleaning */}
          <h2 className="text-2xl font-semibold text-white mb-4">Pipe and Tube Cleaning</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Pipes and tubes can become fouled and clogged with dirt and debris over time. A
            high-pressure water jet can flush them and re-establish mechanical methods for removing
            scale.
          </p>

          {/* Tank De-watering and De-fouling */}
          <h2 className="text-2xl font-semibold text-white mb-4">Tank De-watering and De-fouling</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Higher capacity water pumps can flush and clean tanks or vessels that have become
            partially fouled. This helps in restoring capacity and improving efficiency in
            industrial processes.
          </p>

          {/* Hydro Fracturing */}
          <h2 className="text-2xl font-semibold text-white mb-4">Hydro Fracturing</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Similar to well development, hydro fracturing uses high-pressure water to expand existing
            fractures in rock formations, thereby improving water flow for wells. This is particularly
            useful in low-permeability areas.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
