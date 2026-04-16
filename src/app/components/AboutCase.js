"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutCase() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Small Heading */}
          <div className="flex items-center gap-4 mb-6">
            <h4 className="text-gray-400 text-sm md:text-base uppercase tracking-widest">
              About Me
            </h4>
            <div className="w-12 md:w-16 h-[1px] bg-gray-600"></div>
          </div>

          {/* Big Title */}
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight mb-6">
            Professional <br />
            Problem- <br />
            Solving Skills
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-xl mb-8 md:mb-10 max-w-lg">
            My journey started with a simple yet powerful vision: to transform
            the digital landscape through innovation and creativity.
          </p>

          {/* Contact Info */}
          <div className="space-y-5 md:space-y-6">
            
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-lime-400 p-3 rounded-full text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeWidth="2" d="M3 8l9 6 9-6M4 6h16v12H4z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm md:text-base">Email me</p>
                <p className="font-semibold text-base md:text-lg break-all">
                  hello@pentaclay.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-lime-400 p-3 rounded-full text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2h-1C8 20 4 16 4 11V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm md:text-base">Make a call</p>
                <p className="font-semibold text-base md:text-lg">
                  (+990) 683 58325
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-[320px] sm:h-[420px] md:w-[500px] md:h-[700px]"
        >
          <img
            src="/shield key.jpg"
            alt="About"
            className="w-full h-full object-center object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}