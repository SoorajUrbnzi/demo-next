"use client";
import { useState } from "react";

export default function EthicalProjectContent() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black text-white py-28 px-10 max-lg:py-16 max-lg:px-4">

      {/* ================= TOP HEADER ================= */}
      <div className="max-w-7xl mx-auto mb-20 max-lg:mb-10">

        <p className="text-gray-400 mb-3">Technology</p>

        <h1 className="text-6xl font-bold mb-6 max-lg:text-3xl">
          Clay AI SaaS Website
        </h1>

        <div className="w-full h-[1px] bg-gray-800 mb-6"></div>

        <p className="text-gray-400 max-w-3xl leading-relaxed max-lg:text-sm">
          We believe a brand goes beyond a logo or tagline—it's the core of your business.
          Our Branding & Identity services help you build and express your unique brand personality,
          ensuring it connects with your audience and makes an impact in your market.
        </p>

      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 max-lg:gap-10">

        {/* ===== LEFT IMAGE ===== */}
        <div>
          <img
            src="/shield key.jpg"
            alt="Shield Key"
            className="w-full max-w-md h-[580px] object-cover
            max-lg:h-[320px] max-lg:max-w-full"
          />
        </div>

        {/* ===== MIDDLE CONTENT ===== */}
        <div>
          <p className="text-gray-400 mb-6 leading-relaxed mt-40
          max-lg:mt-4 max-lg:text-sm">
            Meeting project deadlines is a top priority. We understand the importance
            of timely delivery and have established a comprehensive approach to ensure
            that all projects.
          </p>

          <ul className="space-y-4">
            {[
              "Analytics & Strategy",
              "UX/UI Design",
              "Branding & Identity",
              "Web Development",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm max-lg:text-sm">
                <span className="text-lime-400">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="space-y-8">

          {/* PROJECT INFO */}
          <div className="bg-[#111] p-8 rounded-lg border border-gray-800 max-lg:p-5">
            <h3 className="text-xl font-semibold mb-6 max-lg:text-lg">
              Project Information
            </h3>

            <div className="space-y-4 text-gray-400 text-sm">

              <div>
                <p className="text-sm">Client:</p>
                <p className="text-white font-medium">Kazi Erfan</p>
              </div>

              <div>
                <p className="text-sm">Category:</p>
                <p className="text-white font-medium">Technology</p>
              </div>

              <div>
                <p className="text-sm">Completed on:</p>
                <p className="text-white font-medium">July 30, 2024</p>
              </div>

              <div>
                <p className="text-sm">Website:</p>
                <p className="text-white font-medium">www.pentaclay.com</p>
              </div>

            </div>
          </div>

          {/* CONTACT BOX */}
          <div className="bg-gradient-to-br from-black to-lime-900 p-8 rounded-lg text-center max-lg:p-5">
            <h3 className="text-xl font-semibold mb-6 max-lg:text-lg">
              Contact with us for any advice
            </h3>

            <div className="w-16 h-16 mx-auto bg-lime-400 text-black flex items-center justify-center rounded-full text-2xl
            max-lg:w-12 max-lg:h-12">
              📞
            </div>

            <p className="mt-4 text-gray-300 text-sm">
              09:00 AM - 10:30 PM
            </p>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM TEXT ================= */}
      <div className="max-w-7xl mx-auto mt-20 max-lg:mt-10">

        <p className="text-gray-400 max-w-4xl leading-relaxed max-lg:text-sm">
          A successful brand starts with a clear strategy. We work closely with you to understand
          your business goals, target audience, and market positioning. Together, we define your
          brand's mission, vision, and values, creating a solid foundation for all your branding efforts.
        </p>

      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="max-w-7xl mx-auto mt-24 border-t border-gray-800 pt-16 max-lg:mt-14 max-lg:pt-10">

        {[
          {
            q: "What is the typical timeline for a project?",
            a: "Meeting project deadlines is a top priority...",
          },
          {
            q: "How do you handle website maintenance and updates?",
            a: "We provide ongoing maintenance...",
          },
          {
            q: "How do you handle website maintenance and updates?",
            a: "Our team ensures regular updates...",
          },
          {
            q: "What strategies do you use for digital marketing?",
            a: "We use SEO, social media...",
          },
          {
            q: "What payment methods do you accept?!",
            a: "We accept multiple payment methods...",
          },
        ].map((item, index) => (

          <div key={index}>

            {activeIndex === index ? (
              <div
                className="bg-[#0d0d0d] p-8 mb-6 relative cursor-pointer hover:bg-[#0a0a0a] transition max-lg:p-5"
                onClick={() => setActiveIndex(null)}
              >

                <h3 className="text-lime-400 text-xl font-semibold mb-4 max-lg:text-lg">
                  {item.q}
                </h3>

                <p className="text-gray-400 leading-relaxed max-w-3xl text-sm">
                  {item.a}
                </p>

                <span className="absolute top-4 right-4 text-lime-400 text-xl">
                  ✕
                </span>
              </div>
            ) : (
              <div
                className="flex justify-between items-center border-b border-gray-800 pb-6 mb-6 cursor-pointer hover:bg-[#0a0a0a] px-4 py-4 transition"
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="text-xl font-semibold max-lg:text-lg">
                  {item.q}
                </h3>

                <span className="text-lime-400 text-2xl">+</span>
              </div>
            )}

          </div>
        ))}

        {/* NAVIGATION */}
        <div className="flex justify-between items-center mt-16 border-t border-gray-800 pt-10 max-lg:mt-10">

          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-xl">←</span>
            <span className="text-base">Prev</span>
          </div>

          <div className="w-[1px] h-10 bg-gray-800"></div>

          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-base">Next</span>
            <span className="text-xl">→</span>
          </div>

        </div>

      </div>

    </section>
  );
}