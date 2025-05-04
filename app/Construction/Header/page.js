"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ showCta = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/Construction/about" },
    { label: "Projects", href: "/Construction/Projectclient" },
    { label: "Contact", href: "/Construction/contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.4 } }
  };

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-gray-800"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/Construction/client" className="flex items-center gap-3">
          <Image
            src="/Construction/images/logo.png"
            alt="SoilTech Logo"
            width={40}
            height={40}
            className="transform hover:scale-110 transition-transform"
            priority
          />
          <span className="text-2xl font-extrabold uppercase tracking-wide text-white">
            SOILTECH LTD
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link, idx) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-all after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-yellow-400 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {showCta && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
            >
              Get In Touch
            </motion.button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden bg-black/90 backdrop-blur pb-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <ul className="flex flex-col space-y-4 px-6 pt-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-white text-lg transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {showCta && (
                <li>
                  <button className="w-full text-left px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition">
                    Get In Touch
                  </button>
                </li>
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
