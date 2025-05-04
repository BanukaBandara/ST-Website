"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "../Header/page";
import Footer from "../Footer/page";

export default function SurveyMapping() {
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
            Survey &amp; Mapping
          </h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            With our sophisticated survey equipment, highly skilled experienced and professional
            survey teams, Soil Tech provides services for a wide range of surveying and mapping needs.
            We have served projects all over Sri Lanka with both ground and aerial survey solutions
            that ensure accuracy and efficiency.
          </p>

          {/* Slideshow (Swiper) */}
   <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="rounded-lg shadow mb-12"
    >
      <SwiperSlide>
        <div className="relative w-full h-96 md:h-[700px]">
          <Image
            src="/Construction/images/aaaa.jpg"
            alt="Survey Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-96 md:h-[700px]">
          <Image
            src="/Construction/images/bbb.jpg"
            alt="Survey Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-96 md:h-[700px]">
          <Image
            src="/Construction/images/cc.jpg"
            alt="Survey Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </SwiperSlide>
    </Swiper>

          {/* Aerial Survey */}
          <h2 className="text-2xl font-semibold text-white mb-4">Aerial Survey</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            With the technology of remote sensing and unmanned vehicles (UAVs), plus LiDAR where applicable,
            it is possible to capture precise and detailed images for mapping large areas quickly.
          </p>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
            <li>Digital terrain modeling</li>
            <li>Contour and elevation data</li>
            <li>Orthophoto generation</li>
          </ul>

          {/* Underground Utility Location */}
          <h2 className="text-2xl font-semibold text-white mb-4">Underground Utility Location</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Knowing where underground utilities run is essential whenever any underground utilities
            are located. Soil Tech offers services to locate pipes, cables, conduits, and other utilities accurately.
            This technique helps prevent accidental damage and ensures safer construction sites.
          </p>

          {/* Crack Survey */}
          <h2 className="text-2xl font-semibold text-white mb-4">Crack Survey</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Crack surveying involves monitoring the progress of cracks that may appear on buildings
            or excavation projects. Using precise instruments and data logging, we track crack propagation
            and alert clients about potential structural risks.
          </p>

          {/* Key Expertise Survey Areas */}
          <h2 className="text-2xl font-semibold text-white mb-4">Key Expertise Surveying Areas</h2>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
            <li>Soil Surveys</li>
            <li>Topographical Surveys</li>
            <li>Road Alignment Surveys</li>
            <li>Hydrographic Surveys</li>
            <li>Mineral Surveys</li>
            <li>Utility Surveys</li>
            <li>Drone / UAV Surveys</li>
          </ul>

          {/* Marine Survey Capability */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            SOILTECH Marine Survey Capability Extends for...
          </h2>
          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
            <li>Bathymetric surveys</li>
            <li>Coastal mapping</li>
            <li>Marine structure analysis</li>
            <li>Channel and harbor dredging assessments</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
