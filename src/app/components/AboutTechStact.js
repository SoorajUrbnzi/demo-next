"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TechStackSection() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h4 className="text-gray-400 text-xs md:text-sm tracking-widest">
              Professional Skills
            </h4>
            <div className="w-12 md:w-20 h-[1px] bg-gray-700"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-8 md:mb-10">
            Tech Stack
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <p className="flex items-center gap-3 text-base md:text-lg">
              <span className="text-lime-400 text-lg md:text-xl">✔</span>
              Analytics & Strategy
            </p>
            <p className="flex items-center gap-3 text-base md:text-lg">
              <span className="text-lime-400 text-lg md:text-xl">✔</span>
              Branding & Identity
            </p>
            <p className="flex items-center gap-3 text-base md:text-lg">
              <span className="text-lime-400 text-lg md:text-xl">✔</span>
              UX/UI Design
            </p>
            <p className="flex items-center gap-3 text-base md:text-lg">
              <span className="text-lime-400 text-lg md:text-xl">✔</span>
              Web Development
            </p>
          </div>

          {/* CONTACT BUTTON */}
          <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full border border-gray-700 flex items-center justify-center overflow-hidden group cursor-pointer">
            <span className="relative z-10 text-xs md:text-sm tracking-wide transition duration-300 group-hover:text-black">
              CONTACT ↗
            </span>
            <div className="absolute bottom-0 left-0 w-8 h-8 md:w-14 md:h-14 bg-lime-400 rounded-tr-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-full"></div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-10 justify-items-center"
        >

          {[
            { color: "bg-orange-500", label: "Biffco", letter: "U", text: "text-black" },
            { color: "bg-pink-200", label: "Acmeco", letter: "D", text: "text-black" },
            { color: "bg-purple-500", label: "Barone", letter: "B", text: "text-white" },
            { color: "bg-teal-200", label: "Farone", letter: "F", text: "text-black" },
            { color: "bg-lime-300", label: "Kahuna", letter: "K", text: "text-black" },
            { color: "bg-red-900", label: "Kinford", letter: "K", text: "text-white" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-[110px] h-[150px] md:w-[140px] md:h-[180px] rounded-[60px] md:rounded-[80px] bg-[#0a0a0a] flex flex-col items-center justify-center border border-transparent hover:border-lime-400 transition duration-300"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 ${item.color} flex items-center justify-center mb-3 md:mb-4`}>
                <span className={`${item.text} font-bold`}>
                  {item.letter}
                </span>
              </div>
              <p className="text-xs md:text-sm">{item.label}</p>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}