"use client";

import { motion } from "framer-motion";

export default function StratPage() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-10">

      {/* ================= MAIN GRID ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16"
      >

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-400 mb-6 text-sm">
            <span>📁 Design</span>
            <span>📅 Aug 13, 2024</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 md:mb-8">
            Effective Strategies to Boost Your Online
          </h1>

          <div className="w-full h-[1px] bg-gray-800 mb-6 md:mb-8"></div>

          <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 max-w-3xl">
            Choosing Pentos means choosing a partner who is dedicated to your success.
          </p>

          <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-4xl mb-8 md:mb-10">
            Founded on the principles of creativity, integrity, and results.
          </p>

          <img
            src="/SERVER VAPT.jpg"
            alt="Blog Image"
            className="w-full h-[240px] sm:h-[300px] md:h-[420px] object-cover"
          />

        </motion.div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-10"
        >

          {/* SUBSCRIBE */}
          <div className="bg-[#0d0d0d] p-5 md:p-8 border border-gray-800">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              Subscribe
            </h3>

            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent outline-none text-gray-400 w-full text-sm md:text-base"
              />
              <button className="ml-4 w-10 h-10 md:w-12 md:h-12 bg-lime-400 text-black flex items-center justify-center rounded-full">
                →
              </button>
            </div>
          </div>

          {/* SERVICES */}
          <div className="bg-[#0d0d0d] p-5 md:p-8 border border-gray-800">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              Services
            </h3>

            <div className="space-y-4 md:space-y-5">
              {[
                "Web Development",
                "Branding & Identity",
                "UX/UI Design",
                "Analytics & Strategies",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-black p-4 md:p-5 border border-gray-800 hover:border-lime-400 transition cursor-pointer"
                >
                  <span className="text-sm md:text-base">{item}</span>
                  <span>↗</span>
                </div>
              ))}
            </div>
          </div>

          {/* INSTAGRAM */}
          <div className="bg-[#0d0d0d] p-5 md:p-8 border border-gray-800">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              Instagram
            </h3>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <img src="/simultaneous.jpg" className="w-full h-20 md:h-24 object-cover" />
              <img src="/shield key.jpg" className="w-full h-20 md:h-24 object-cover" />
              <img src="/SERVER VAPT.jpg" className="w-full h-20 md:h-24 object-cover" />
              <img src="/ethical-hacking.webp" className="w-full h-20 md:h-24 object-cover" />
              <img src="/simultaneous.jpg" className="w-full h-20 md:h-24 object-cover" />
              <img src="/shield key.jpg" className="w-full h-20 md:h-24 object-cover" />
            </div>
          </div>

        </motion.div>

      </motion.div>

      {/* ================= SUCCESS JOURNEY ================= */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16"
      >

        {/* LEFT */}
        <div className="lg:col-span-2">

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-bold">
              Our Success Journey We can Provide
            </h2>
            <div className="flex-1 h-[1px] bg-gray-800 relative">
              <span className="absolute right-0 w-20 h-[2px] bg-lime-400"></span>
            </div>
          </div>

          <div className="mb-8 md:mb-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              01. Boosted Online Visibility
            </h3>

            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <li>• We ensure your business gets noticed online.</li>
              <li>• We improve user engagement.</li>
            </ul>
          </div>

          <div className="mb-8 md:mb-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              02. Tailored Marketing Strategies
            </h3>

            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <li>• We build digital strategies.</li>
              <li>• We help business growth.</li>
            </ul>
          </div>

          <p className="text-gray-400 max-w-4xl text-sm md:text-base">
            We focus on clear strategy and strong execution.
          </p>

        </div>

        {/* RIGHT CONTACT BOX */}
        <div className="bg-gradient-to-br from-black to-lime-900 p-6 md:p-10 rounded-lg text-center h-auto md:h-80">

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
            Contact with us for any advice
          </h3>

          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-lime-400 text-black flex items-center justify-center rounded-full text-2xl md:text-3xl mb-4 md:mb-6">
            📞
          </div>

          <p className="text-white font-medium">
            09 : 00 AM - 10 : 30 PM
          </p>

          <p className="text-gray-300 text-sm">
            Saturday - Thursday
          </p>

        </div>

      </motion.div>

    </section>
  );
}