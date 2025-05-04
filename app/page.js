"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserButton } from "@stackframe/stack";
import Footer from "./Construction/Footer/page";

const images = [
  "/Construction/images/slider1.jpg",
  "/Construction/images/a.jpg",
  "/Construction/images/sli.jpg",
];

const image = [
  "/Construction/images/f.jpg",
  "/Construction/images/g.jpg",
  "/Construction/images/h.jpg",
  "/Construction/images/sur 1.jpg",
  "/Construction/images/sur.jpg",
];

export default function ConstructionFrontPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wdCurrentIndex, setWdCurrentIndex] = useState(0); // For "What We Do" slider
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const wdTimer = setInterval(() => {
      setWdCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, 5000);
    return () => clearInterval(wdTimer);
  }, []);

  return (
    <div className="bg-black text-white flex flex-col min-h-screen relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/Construction/images/logo.png"
          alt="Background Pattern"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>


      <header className="py-6 px-8 border-b border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/Construction/client" legacyBehavior>
            <a className="flex items-center space-x-3">
              <img src="/Construction/images/logo.png" alt="Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold uppercase tracking-wider">
                SOILTECH LTD
              </span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">

            <Link href="/" legacyBehavior>
              <a className="hover:text-yellow-400 transition">Home</a>
            </Link>

            <Link href="/Construction/about" legacyBehavior>
              <a className="hover:text-yellow-400 transition">About</a>
            </Link>

            <Link href="/Construction/Projectclient" legacyBehavior>
              <a className="hover:text-yellow-400 transition">Projects</a>
            </Link>

            <Link href="/Construction/contact" legacyBehavior>
              <a className="hover:text-yellow-400 transition">Contact</a>
            </Link>

          </nav>
        
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 bg-yellow-400 text-black font-medium rounded hover:bg-yellow-300 transition">
              Get In Touch
            </button>
            <UserButton />
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Toggle Menu</span>
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {menuOpen && (
          <nav className="md:hidden mt-4 px-4 relative z-10">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/Construction/client" legacyBehavior>
                  <a className="hover:text-yellow-400 transition">Home</a>
                </Link>
              </li>

              <li>
                <Link href="/Construction/about" legacyBehavior>
                  <a className="hover:text-yellow-400 transition">About</a>
                </Link>
              </li>

              <li>
                <Link href="/Construction/Projectclient" legacyBehavior>
                  <a className="hover:text-yellow-400 transition">Projects</a>
                </Link>
              </li>

              <li>
                <Link href="/Construction/contact" legacyBehavior>
                  <a className="hover:text-yellow-400 transition">Contact</a>
                </Link>
              </li>
              
              <li>
                <UserButton />
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images[currentIndex]}
            alt={`Slider ${currentIndex + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className="transition-opacity duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
            Building your Visions.<br />Creating Reality.
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl mb-8 drop-shadow-md text-gray-200">
            We combine expertise, innovative technology, and passion for construction to deliver exceptional projects.
          </p>
        </div>
      </main>

      <section className="bg-black py-20 border-b border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg">
              <Image
                src={image[wdCurrentIndex]}
                alt={`Slide ${wdCurrentIndex + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="transition-opacity duration-1000 ease-in-out"
              />
            </div>
           
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h3>
              <p className="mb-6 text-lg text-gray-400">
                Soiltech Ltd is a premier engineering firm dedicated to delivering innovative and sustainable construction solutions.
                Their expertise spans advanced geotechnical investigations, bio-engineering, and ground water exploration, along with
                state of the art ground improvement and earth retention systems. They specialize in precision driven services such as
                hydro blasting and trenchless technology, ensuring minimal disruption while optimizing project outcomes. Additionally,
                their comprehensive survey and mapping capabilities provide the critical data needed for informed decision making.
                With a strong commitment to quality, safety, and technological innovation, Soiltech Ltd transforms complex engineering
                challenges into efficient, reliable, and forward thinking solutions that drive the success of modern infrastructure projects.
              </p>
              <Link href="/Construction/service" legacyBehavior>
                <a>
                  <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-md shadow-md hover:bg-yellow-300 transition">
                    View All Services →
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 border-b border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-6 text-center">
            Introducing New Innovations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/Construction/images/f.webp"
                alt="Construction Innovation"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl shadow-xl"
              />
            </div>
            
            <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg">
              <video
                src="/Construction/images/spider.mp4"
                className="w-full h-full object-cover rounded-xl"
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p className="mt-4 text-gray-400 italic text-lg text-center">
            Spider Nailing
          </p>
        </div>
      </section>

      <section className="bg-black py-20 border-b border-gray-800 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-xl shadow-xl">
              <p className="text-gray-300 italic mb-6">
                "The team delivered beyond expectations. Their professionalism and dedication made our project a true success."
              </p>
              <p className="text-yellow-400 font-semibold">— John Doe</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl shadow-xl">
              <p className="text-gray-300 italic mb-6">
                "Excellent craftsmanship and attention to detail. Highly recommended for any construction project."
              </p>
              <p className="text-yellow-400 font-semibold">— Jane Smith</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
