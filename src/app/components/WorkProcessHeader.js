"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WorkProcessSection() {
  return (
    <section className="w-full text-white py-16 md:py-24 px-4 md:px-16 bg-[#0a0a0a] relative overflow-hidden">

      {/* RIGHT SIDE GREEN GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] md:w-[35%] h-full bg-[radial-gradient(circle_at_right,_rgba(132,204,22,0.18),_transparent_45%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-5 md:mb-6">
            <h4 className="text-gray-400 text-sm md:text-base font-medium">
              My Linear Process
            </h4>
            <div className="w-12 md:w-20 h-[1px] bg-gray-600"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold">
            Work Process
          </h1>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border border-gray-800 p-6 md:p-10 hover:bg-black transition duration-300"
          >
            <div className="mb-5 md:mb-6 text-lime-400">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="6" strokeWidth="1" />
                <circle cx="12" cy="12" r="10" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Discovery & Research
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              We start by getting to know your business, your goals, and your
              target audience. Through in-depth research and analysis, we gather
              valuable insights that inform.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-800 p-6 md:p-10 bg-[#070707] hover:bg-black transition duration-300"
          >
            <div className="mb-5 md:mb-6 text-lime-400">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="6" width="16" height="3" strokeWidth="1" />
                <rect x="4" y="11" width="16" height="3" strokeWidth="1" />
                <rect x="4" y="16" width="16" height="3" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Strategy & Planning
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Based on our research, we develop a comprehensive strategy and
              detailed project plan. This includes setting clear goals,
              defining key performance indicators,
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="border border-gray-800 p-6 md:p-10 hover:bg-black transition duration-300"
          >
            <div className="mb-5 md:mb-6 text-lime-400">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polygon
                  points="12,2 15,11 22,11 17,15 19,22 12,18 5,22 7,15 2,11 9,11"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Implementation & Deploy
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              We start by delivering the results and taking feedback. Through
              in-depth research and analysis, we gather valuable feedback that
              shapes the output.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}