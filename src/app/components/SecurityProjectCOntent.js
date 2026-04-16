"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SecurityProjectContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black text-white py-16 lg:py-28 px-5 lg:px-10">

      {/* ================= TOP HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-12 lg:mb-20"
      >
        <p className="text-gray-400 mb-3">Technology</p>

        <h1 className="text-3xl lg:text-6xl font-bold mb-6">
          Digiket Marketing Site
        </h1>

        <div className="w-full h-[1px] bg-gray-800 mb-6"></div>

        <p className="text-gray-400 max-w-3xl leading-relaxed text-sm lg:text-base">
          It’s the story that you tell the world and the emotions you evoke in your customers.
          Our Branding & Identity services are crafted to help you articulate your brand’s
          unique identity, ensuring it speaks to your audience with authenticity and impact.
          We start by deeply understanding your business’s goals, your ideal customers, and
          the broader market landscape. From there, we work closely with you to define your
          brand’s mission, vision, and values—the core principles that guide your business
          and inspire everything you do.
        </p>
      </motion.div>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">

        {/* ===== LEFT IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/shield key.jpg"
            alt="Shield Key"
            className="w-full lg:max-w-md h-[320px] lg:h-[580px] object-cover"
          />
        </motion.div>

        {/* ===== MIDDLE CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6 leading-relaxed mt-0 lg:mt-40 text-sm lg:text-base">
            Meeting project deadlines is a top priority. We understand the
            importance of timely delivery and have established a comprehensive
            approach to ensure that all projects.
          </p>

          <ul className="space-y-4">
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
        </motion.div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 lg:space-y-8"
        >

          {/* PROJECT INFO */}
          <div className="bg-[#111] p-6 lg:p-8 rounded-lg border border-gray-800">
            <h3 className="text-lg lg:text-xl font-semibold mb-6">
              Project Information
            </h3>

            <div className="space-y-4 text-gray-400">
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
                <p className="text-white font-medium">
                  www.pentaclay.com
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT BOX */}
          <div className="bg-gradient-to-br from-black to-lime-900 p-6 lg:p-8 rounded-lg text-center">
            <h3 className="text-lg lg:text-xl font-semibold mb-6">
              Contact with us for any advice
            </h3>

            <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto bg-lime-400 text-black flex items-center justify-center rounded-full text-xl lg:text-2xl">
              📞
            </div>

            <p className="mt-4 text-gray-300 text-sm">
              09:00 AM - 10:30 PM
            </p>
          </div>

        </motion.div>
      </div>

      {/* ================= BOTTOM TEXT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-12 lg:mt-20"
      >
        <p className="text-gray-400 max-w-4xl leading-relaxed text-sm lg:text-base">
          A successful brand starts with a clear strategy. We work closely with
          you to understand your business goals, target audience, and market
          positioning. Together, we define your brand's mission, vision, and
          values, creating a solid foundation for all your branding efforts.
        </p>
      </motion.div>

      {/* ================= FAQ SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-16 lg:mt-24 border-t border-gray-800 pt-10 lg:pt-16"
      >
        {[
          {
            q: "What is the typical timeline for a project?",
            a: "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects.",
          },
          {
            q: "How do you handle website maintenance and updates?",
            a: "We provide ongoing maintenance, updates, and support to ensure your website runs smoothly and stays secure.",
          },
          {
            q: "How do you handle website maintenance and updates?",
            a: "Our team ensures regular updates, backups, and performance monitoring for your website.",
          },
          {
            q: "What strategies do you use for digital marketing?",
            a: "We use SEO, social media, and targeted campaigns to grow your business online.",
          },
          {
            q: "What payment methods do you accept?!",
            a: "We accept multiple payment methods including cards and bank transfers.",
          },
        ].map((item, index) => (
          <div key={index}>
            {activeIndex === index ? (
              <div
                className="bg-[#0d0d0d] p-6 lg:p-8 mb-6 relative cursor-pointer hover:bg-[#0a0a0a] transition"
                onClick={() => setActiveIndex(null)}
              >
                <h3 className="text-lime-400 text-lg lg:text-xl font-semibold mb-4">
                  {item.q}
                </h3>

                <p className="text-gray-400 leading-relaxed max-w-3xl text-sm lg:text-base">
                  {item.a}
                </p>

                <span className="absolute top-6 right-6 text-lime-400 text-2xl">
                  ✕
                </span>
              </div>
            ) : (
              <div
                className="flex justify-between items-center border-b border-gray-800 pb-6 mb-6 cursor-pointer hover:bg-[#0a0a0a] px-4 py-4 transition"
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="text-lg lg:text-xl font-semibold">
                  {item.q}
                </h3>

                <span className="text-lime-400 text-2xl">+</span>
              </div>
            )}
          </div>
        ))}

        {/* NAVIGATION */}
        <div className="flex justify-between items-center mt-12 lg:mt-16 border-t border-gray-800 pt-8 lg:pt-10">
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-2xl">←</span>
            <span className="text-lg">Prev</span>
          </div>

          <div className="w-[1px] h-10 bg-gray-800"></div>

          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-lg">Next</span>
            <span className="text-2xl">→</span>
          </div>
        </div>

      </motion.div>

    </section>
  );
}