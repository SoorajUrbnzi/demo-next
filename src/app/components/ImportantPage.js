"use client";

import { motion } from "framer-motion";

export default function ImportantPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white py-16 lg:py-24 px-5 lg:px-10"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >

          <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-gray-400 mb-6 text-xs lg:text-sm">
            <span>📁 Design</span>
            <span>📅 Aug 13, 2024</span>
          </div>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6 lg:mb-8">
            Effective Strategies to Boost Your Online
          </h1>

          <div className="w-full h-[1px] bg-gray-800 mb-6 lg:mb-8"></div>

          <p className="text-gray-400 leading-relaxed mb-6 lg:mb-8 max-w-3xl text-sm lg:text-base">
            Choosing Pentos means choosing a partner who is dedicated to your success.
            Our passion for what we do, combined with our expertise and innovative approach,
            sets us apart from the competition.
          </p>

          <p className="text-gray-300 text-base lg:text-xl leading-relaxed max-w-4xl mb-8 lg:mb-10">
            Founded on the principles of creativity, integrity, and results...
          </p>

          <img
            src="/SERVER VAPT.jpg"
            alt="Blog Image"
            className="w-full h-[260px] lg:h-[420px] object-cover"
          />

        </motion.div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8 lg:space-y-10"
        >

          <div className="bg-[#0d0d0d] p-5 lg:p-8 border border-gray-800">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6">
              Subscribe
            </h3>

            <div className="flex items-center justify-between border-b border-gray-700 pb-3 gap-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent outline-none text-gray-400 w-full text-sm lg:text-base min-w-0"
              />
              <button className="w-9 h-9 lg:w-12 lg:h-12 bg-lime-400 text-black flex items-center justify-center rounded-full flex-shrink-0">
                →
              </button>
            </div>
          </div>

        </motion.div>

      </div>

      {/* ================= SUCCESS JOURNEY ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16"
      >

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >

          <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8 lg:mb-10">
            <h2 className="text-2xl md:text-4xl font-bold">
              Our Success Journey We can Provide
            </h2>
          </div>

          <div className="mb-8 lg:mb-10">
            <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4">
              01. Boosted Online Visibility
            </h3>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-black to-lime-900 p-6 lg:p-10 rounded-lg text-center lg:h-80"
        >

          <h3 className="text-xl lg:text-2xl font-semibold mb-5 lg:mb-6">
            Contact with us for any advice
          </h3>

        </motion.div>

      </motion.div>

    </motion.section>
  );
}