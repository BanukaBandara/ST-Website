import Link from "next/link";
import Header from "../Header/page";
import Footer from "../Footer/page";

export const metadata = {
  title: "About Us | BUILD X",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header/>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get to know the talented team
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      {/* Split Section: Video + Text */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-xl uppercase text-yellow-400 font-semibold mb-2">
            SOILTECH Since 2003
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Turning imagination into reality
          </h3>
          <p className="text-gray-300 mb-6">
          SOILTECH (PVT) LTD has been a pioneer in soil engineering and environmental solutions since its establishment in 2003. With over 20 years of industry experience, we are dedicated to delivering excellence by consistently using high-quality materials and adopting innovative technologies.
          Our commitment extends beyond providing technical expertise; we actively pursue sustainable practices designed to protect and preserve the environment. At SOILTECH, we combine extensive knowledge, skilled personnel, and advanced techniques to ensure that each project meets the highest standards of quality, reliability, and environmental responsibility.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
              Over 20 years experience
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
              High-quality materials
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
              Environmental Protection
            </li>
          </ul>
        </div>

        {/* Right Video */}
        <div className="relative w-full h-64 md:h-96 bg-gray-800">
          {/* Replace with your actual video file */}
          <video
            src="/Construction/images/soiltech.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Features / Icons */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                {/* Icon can be replaced with your own */}
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L6 10l3.75-7h4.5L18 10l-3.75 7h-4.5z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Health and Safety</h3>
            <p className="text-gray-400">
            We maintain the highest safety standards on every site, protecting our team and clients with proactive, zero compromise practices.
            </p>
          </div>
          {/* Feature 2 */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                {/* Icon can be replaced with your own */}
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Ethics</h3>
            <p className="text-gray-400">
            We operate with integrity, transparency, and accountability. Every decision and action at SOILTECH LTD is guided by ethical practices and a strong sense of responsibility toward our clients and the environment.
            </p>
          </div>
          {/* Feature 3 */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                {/* Icon can be replaced with your own */}
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c1.104.001 2 .896 2 2v1c0 1.104-.895 2-2 2s-2-.896-2-2v-1c0-1.104.896-2 2-2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Experience and Quality
            </h3>
            <p className="text-gray-400">
            With over two decades of industry experience, SOILTECH LTD is known for delivering exceptional quality through skilled professionals, cutting edge technology, and a commitment to continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">The team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">CJ Gamage, CEO & Founder</h3>
              <p className="text-yellow-400">contact@liam.com</p>
              <p className="text-gray-400">+1 345-678-00</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                Virajini, Senior quntity surveyor
              </h3>
              <p className="text-yellow-400">QS</p>
              <p className="text-gray-400">+1 345-678-00</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                Chami Rathnayake, Senior Civil Engineer
              </h3>
              <p className="text-yellow-400">BSc(Hons)Civil Engineering</p>
              <p className="text-gray-400">+1 345-678-00</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                Nathasha Nandasiri, Civil Engineer
              </h3>
              <p className="text-yellow-400">BSc(Hons)Civil Engineering</p>
              <p className="text-gray-400">+1 345-678-00</p>
            </div>
            {/* Team Member 4 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                Banuka Bandara, Intern Civil & Software Engineer
              </h3>
              <p className="text-yellow-400">BSc(Hons)Software Engineering</p>
              <p className="text-yellow-400">BSc(Hons)Civil Engineering</p>
              <p className="text-gray-400">+94 703202452</p>
            </div>
            {/* Team Member 5 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                Charith Belpage, Intern Geotechnical Engineer
              </h3>
              <p className="text-yellow-400">BSc(Hons)Geotechnical Engineering</p>
              <p className="text-gray-400">+1 345-678-00</p>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
      
    </div>
  );
}
