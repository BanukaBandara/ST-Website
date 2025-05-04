"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* copyright */}
        <p className="text-gray-500">
          © {new Date().getFullYear()} SOILTECH. All rights reserved.
        </p>

        {/* legal links */}
        <div className="flex gap-6">
          <Link href="/Construction/p&p" className="text-gray-500 hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/Construction/ter&services" className="text-gray-500 hover:text-gray-300">
            Terms of Service
          </Link>
        </div>

        {/* socials */}
        <div className="flex gap-4 text-gray-400">
          <a
            href="https://www.facebook.com/SoilTechLtd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
