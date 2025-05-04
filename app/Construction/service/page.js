"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "../Header/page";
import Footer from "../Footer/page";

export default function ServicesPage() {
  const services = [
    {
      title: "Bio Engineering",
      link: "/Construction/bio-engineering",
      description:
        "Innovative solutions for erosion control, slope stabilization, and habitat restoration. Our bio-engineering techniques utilize natural processes to deliver sustainable outcomes.",
      icon: (index) => (
        <svg className="w-16 h-16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`grad-bio-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <filter id={`shadow-bio-${index}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#000"
                floodOpacity="0.3"
              />
            </filter>
          </defs>
          <path
            filter={`url(#shadow-bio-${index})`}
            fill={`url(#grad-bio-${index})`}
            d="M12 2C9 2 7 4 7 6c0 1.657 1.343 3 3 3s3-1.343 3-3c0-2-2-4-4-4zm0 5a2 2 0 100-4 2 2 0 000 4zm-5 5c0-2 2-4 4-4s4 2 4 4v6H7v-6z"
          />
        </svg>
      ),
    },
    {
      title: "Ground Water Exploration",
      link: "/Construction/GroundWater",
      description:
        "State-of-the-art drilling and testing techniques to accurately locate and assess groundwater resources, ensuring efficient extraction while maintaining environmental sustainability.",
      icon: (index) => (
        <svg className="w-16 h-16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`grad-water-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id={`shadow-water-${index}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#000"
                floodOpacity="0.3"
              />
            </filter>
          </defs>
          <path
            filter={`url(#shadow-water-${index})`}
            fill={`url(#grad-water-${index})`}
            d="M12 2C8 8 6 11 6 14a6 6 0 0012 0c0-3-2-6-6-12z"
          />
        </svg>
      ),
    },
    {
      title: "Geo Technical Investigations",
      link: "/Construction/Geotechnical",
      description:
        "Comprehensive site investigations and geotechnical analysis to determine soil strength and stability, ensuring safe and reliable foundations for your projects.",
      icon: (index) => (
        <svg className="w-16 h-16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`grad-geo-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <filter id={`shadow-geo-${index}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#000"
                floodOpacity="0.3"
              />
            </filter>
          </defs>
          <path
            filter={`url(#shadow-geo-${index})`}
            fill={`url(#grad-geo-${index})`}
            d="M3 7h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"
          />
        </svg>
      ),
    },
    {
      title: "Ground Improvement",
      link: "/Construction/GroundImprovement",
      description:
        "Enhance soil properties and stability with advanced techniques that optimize load-bearing capacity and reduce settlement, ensuring longevity and durability.",
      icon: (index) => (
        <svg className="w-16 h-16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`grad-improve-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <filter id={`shadow-improve-${index}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#000"
                floodOpacity="0.3"
              />
            </filter>
          </defs>
          <path
            filter={`url(#shadow-improve-${index})`}
            fill={`url(#grad-improve-${index})`}
            d="M12 2l4 8h-8l4-8zm0 10a4 4 0 110 8 4 4 0 010-8z"
          />
        </svg>
      ),
    },
    {
      title: "Earth Retention Systems",
      link: "/Construction/EarthRetention",
      description:
        "Engineered solutions to support soil masses, including retaining walls and shoring systems that safeguard structures against soil movement and collapse.",
      icon: (index) => (
        <svg className="w-16 h-16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`grad-retain-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <filter id={`shadow-retain-${index}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#000"
                floodOpacity="0.3"
              />
            </filter>
          </defs>
          <rect
            filter={`url(#shadow-retain-${index})`}
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill={`url(#grad-retain-${index})`}
          />
          <rect x="5" y="8" width="14" height="10" fill="white" opacity="0.6" />
        </svg>
      ),
    },
    {
      title: "Hydro Blasting",
      link: "/Construction/HydroBlasting",
      description:
        "Utilizing high-pressure water jets to effectively clean, remove coatings, and prepare surfaces for repair, ensuring minimal environmental impact and maximum efficiency.",
      icon: (index) => (
        <svg className="w-16 h-16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`grad-hydro-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id={`shadow-hydro-${index}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#000"
                floodOpacity="0.3"
              />
            </filter>
          </defs>
          <path
            filter={`url(#shadow-hydro-${index})`}
            fill={`url(#grad-hydro-${index})`}
            d="M12 2c-1 2-1 4 0 6s2 4 2 6-1 4-2 6c-1-2-1-4 0-6s2-4 2-6-1-4-2-6z"
          />
        </svg>
      ),
    },
    {
      title: "Trenchless Technology",
      link: "/Construction/TrenchlessTechnology",
      description:
        "Advanced, non-invasive construction methods that minimize surface disruption while delivering robust underground infrastructure solutions.",
      icon: (index) => (
        <svg className="w-16 h-16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`grad-trench-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <filter id={`shadow-trench-${index}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#000"
                floodOpacity="0.3"
              />
            </filter>
          </defs>
          <rect
            filter={`url(#shadow-trench-${index})`}
            x="3"
            y="8"
            width="18"
            height="8"
            rx="2"
            fill={`url(#grad-trench-${index})`}
          />
          <circle cx="12" cy="12" r="3" fill="white" opacity="0.6" />
        </svg>
      ),
    },
    {
      title: "Survey & Mapping",
      link: "/Construction/SurveyMapping",
      description:
        "Comprehensive mapping and surveying services using advanced GPS and remote sensing technologies to provide accurate site data and detailed analyses.",
      icon: (index) => (
        <svg className="w-16 h-16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`grad-survey-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <filter id={`shadow-survey-${index}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#000"
                floodOpacity="0.3"
              />
            </filter>
          </defs>
          <path
            filter={`url(#shadow-survey-${index})`}
            fill={`url(#grad-survey-${index})`}
            d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9a2 2 0 110-4 2 2 0 010 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header/>

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-gray-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get to know Our Services
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <Link href={service.link} key={index} legacyBehavior>
                <a className="flex flex-col bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    {service.icon(index)}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    {service.description}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
