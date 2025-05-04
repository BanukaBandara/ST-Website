"use client";

import { useState } from "react";
import Header from "../Header/page";       // ← adjust if your alias differs
import Footer from "../Footer/page";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  /* ──────────────  state  ────────────── */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up backend / email
    alert("Message sent! (stub)");
  };

  /* ──────────────  UI  ────────────── */
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          Get In Touch
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have questions about our services? Contact us today and let us know
          how we can help with your construction needs.
        </p>
      </section>

      {/* Form + Info */}
      <section className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* form */}
        <div className="bg-gray-900 rounded-lg p-8 shadow">
          <h3 className="text-xl font-semibold mb-6">Send us a message</h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            {[
              ["Your Name", "name", "text"],
              ["Email Address", "email", "email"],
              ["Subject", "subject", "text"],
            ].map(([label, name, type]) => (
              <div key={name}>
                <label htmlFor={name} className="block mb-1 text-gray-400">
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={name !== "subject"}
                  className="w-full rounded bg-gray-800 border border-gray-700 px-3 py-2 focus:outline-none focus:border-yellow-400"
                />
              </div>
            ))}

            {/* message */}
            <div>
              <label htmlFor="message" className="block mb-1 text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded bg-gray-800 border border-gray-700 px-3 py-2 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* contact info */}
        <div className="space-y-8 text-sm">
          {/* office */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Office Location</h4>
            <p className="text-gray-400 flex items-start gap-2">
              <FaMapMarkerAlt className="mt-0.5 shrink-0" />
              352 Rajagiriya Rd,<br />Colombo, Sri Lanka
            </p>
          </div>

          {/* details */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Details</h4>
            <p className="text-gray-400 flex items-center gap-2">
              <FaPhoneAlt /> +94 11 123 4567
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <FaEnvelope /> soiltechpvteng@gmail.com
            </p>
          </div>

          {/* hours */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
            <p className="text-gray-400">
              Monday – Friday: 9 AM – 5 PM<br />
              Saturday: 9 AM – 1 PM<br />
              Sunday: Closed
            </p>
          </div>

          {/* socials */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4 text-gray-400">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
                <a key={idx} href="#" className="hover:text-white">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-xl font-semibold mb-6">Our Location</h3>
          <div className="w-full h-72 rounded-lg overflow-hidden">
            <iframe
              title="SoilTech Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63306.28189603241!2d79.89350486562501!3d6.910618599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a1ca3b7f675%3A0x3e1df9a594562fea!2sRajagiriya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1682897426963!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
