"use client";
import { useState } from "react";

export default function SecurityProjectContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black text-white py-12 lg:py-28 px-4 lg:px-10">

      {/* ================= TOP HEADER ================= */}
      <div className="max-w-7xl mx-auto mb-10 lg:mb-20">
        <p className="text-gray-400 mb-3">Technology</p>

        <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-5 lg:mb-6">
          Digiket Marketing Site
        </h1>

        <div className="w-full h-[1px] bg-gray-800 mb-5 lg:mb-6"></div>

        <p className="text-gray-400 max-w-3xl leading-relaxed text-sm lg:text-base">
          It’s the story that you tell the world and the emotions you evoke in your customers.
          Our Branding & Identity services are crafted to help you articulate your brand’s
          unique identity, ensuring it speaks to your audience with authenticity and impact.
          We start by deeply understanding your business’s goals, your ideal customers, and
          the broader market landscape. From there, we work closely with you to define your
          brand’s mission, vision, and values—the core principles that guide your business
          and inspire everything you do.
        </p>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20">

        {/* ===== LEFT IMAGE ===== */}
        <div>
          <img
            src="/shield key.jpg"
            alt="Shield Key"
            className="w-full lg:max-w-md h-[260px] sm:h-[320px] lg:h-[580px] object-cover"
          />
        </div>

        {/* ===== MIDDLE CONTENT ===== */}
        <div>
          <p className="text-gray-400 mb-5 lg:mb-6 leading-relaxed mt-0 lg:mt-40 text-sm lg:text-base">
            Meeting project deadlines is a top priority. We understand the
            importance of timely delivery and have established a comprehensive
            approach to ensure that all projects.
          </p>

          <ul className="space-y-3 lg:space-y-4 text-sm lg:text-base">
            <li className="flex items-center gap-3">
              <span className="text-lime-400">✔</span>
              Analytics & Strategy
            </li>

            <li className="flex items-center gap-3">
              <span className="text-lime-400">✔</span>
              UX/UI Design
            </li>

            <li className="flex items-center gap-3">
              <span className="text-lime-400">✔</span>
              Branding & Identity
            </li>

            <li className="flex items-center gap-3">
              <span className="text-lime-400">✔</span>
              Web Development
            </li>
          </ul>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="space-y-5 lg:space-y-8">

          {/* PROJECT INFO */}
          <div className="bg-[#111] p-5 lg:p-8 rounded-lg border border-gray-800">
            <h3 className="text-base lg:text-xl font-semibold mb-5 lg:mb-6">
              Project Information
            </h3>

            <div className="space-y-3 lg:space-y-4 text-gray-400 text-sm lg:text-base">
              <div>
                <p className="text-xs lg:text-sm">Client:</p>
                <p className="text-white font-medium">Kazi Erfan</p>
              </div>

              <div>
                <p className="text-xs lg:text-sm">Category:</p>
                <p className="text-white font-medium">Technology</p>
              </div>

              <div>
                <p className="text-xs lg:text-sm">Completed on:</p>
                <p className="text-white font-medium">July 30, 2024</p>
              </div>

              <div>
                <p className="text-xs lg:text-sm">Website:</p>
                <p className="text-white font-medium">
                  www.pentaclay.com
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT BOX */}
          <div className="bg-gradient-to-br from-black to-lime-900 p-5 lg:p-8 rounded-lg text-center">
            <h3 className="text-base lg:text-xl font-semibold mb-5 lg:mb-6">
              Contact with us for any advice
            </h3>

            <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto bg-lime-400 text-black flex items-center justify-center rounded-full text-lg lg:text-2xl">
              📞
            </div>

            <p className="mt-3 lg:mt-4 text-gray-300 text-xs lg:text-sm">
              09:00 AM - 10:30 PM
            </p>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM TEXT ================= */}
      <div className="max-w-7xl mx-auto mt-10 lg:mt-20">
        <p className="text-gray-400 max-w-4xl leading-relaxed text-sm lg:text-base">
          A successful brand starts with a clear strategy. We work closely with
          you to understand your business goals, target audience, and market
          positioning. Together, we define your brand's mission, vision, and
          values, creating a solid foundation for all your branding efforts.
        </p>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="max-w-7xl mx-auto mt-12 lg:mt-24 border-t border-gray-800 pt-8 lg:pt-16">

        {[
          {
            q: "What is the typical timeline for a project?",
            a: "Meeting project deadlines is a top priority...",
          },
          {
            q: "How do you handle website maintenance and updates?",
            a: "We provide ongoing maintenance, updates, and support...",
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
                className="bg-[#0d0d0d] p-5 lg:p-8 mb-5 lg:mb-6 relative cursor-pointer hover:bg-[#0a0a0a] transition"
                onClick={() => setActiveIndex(null)}
              >
                <h3 className="text-lime-400 text-base lg:text-xl font-semibold mb-3 lg:mb-4">
                  {item.q}
                </h3>

                <p className="text-gray-400 leading-relaxed max-w-3xl text-sm lg:text-base">
                  {item.a}
                </p>

                <span className="absolute top-4 right-4 lg:top-6 lg:right-6 text-lime-400 text-xl lg:text-2xl">
                  ✕
                </span>
              </div>
            ) : (
              <div
                className="flex justify-between items-center border-b border-gray-800 pb-5 mb-5 lg:pb-6 lg:mb-6 cursor-pointer hover:bg-[#0a0a0a] px-3 lg:px-4 py-3 lg:py-4 transition"
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="text-base lg:text-xl font-semibold">
                  {item.q}
                </h3>

                <span className="text-lime-400 text-xl lg:text-2xl">+</span>
              </div>
            )}
          </div>
        ))}

        {/* NAVIGATION */}
        <div className="flex justify-between items-center mt-8 lg:mt-16 border-t border-gray-800 pt-6 lg:pt-10">
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-xl lg:text-2xl">←</span>
            <span className="text-sm lg:text-lg">Prev</span>
          </div>

          <div className="w-[1px] h-8 lg:h-10 bg-gray-800"></div>

          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-sm lg:text-lg">Next</span>
            <span className="text-xl lg:text-2xl">→</span>
          </div>
        </div>

      </div>

    </section>
  );
}