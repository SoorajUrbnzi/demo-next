"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen lg:h-screen overflow-hidden lg:overflow-visible bg-[#0a0a0a] text-white">

      {/* RIGHT BACKGROUND IMAGE */}
      <div className="absolute right-0 top-0 h-full w-[85%] sm:w-[55%] lg:w-[45%] opacity-40 sm:opacity-70 lg:opacity-80 pointer-events-none">
        <img
          src="/mtr-removebg-preview.png"
          alt="background"
          className="object-cover w-full h-full mix-blend-lighten"
        />
      </div>

      {/* RADIAL CURVED LINES */}
      <div
        className="absolute inset-0 opacity-[0.06] sm:opacity-[0.1] lg:opacity-[0.12]"
        style={{
          background: `repeating-radial-gradient(
            circle at -15% 50%,
            rgba(255,255,255,0.08) 0px,
            rgba(255,255,255,0.08) 2px,
            transparent 2px,
            transparent 40px
          )`,
          maskImage:
            "linear-gradient(to right, black 0%, black 55%, transparent 55%)"
        }}
      />

      {/* LEFT GREEN GLOW */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-[260px] sm:w-[600px] lg:w-[800px] h-[260px] sm:h-[600px] lg:h-[800px] left-[-80px] sm:left-[-160px] lg:left-[-200px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200,255,0,0.25) 0%, rgba(200,255,0,0.1) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-10 lg:pl-[180px] pt-16 sm:pt-24 lg:pt-[120px]">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-6 text-gray-300 text-[11px] sm:text-sm"
        >
          <span>Hey There! Albert Wilson Here</span>
          <div className="w-[40px] sm:w-[100px] h-[1px] bg-gray-600"></div>
        </motion.div>

        {/* TITLE */}
        <div className="relative mt-4 lg:mt-0 lg:h-[220px]">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-10 lg:mb-20 text-[42px] sm:text-[100px] lg:text-[160px] font-extrabold leading-[1] tracking-tight"
          >
            DESIGN
          </motion.h1>

          {/* SPINNING STAR */}
          <div className="absolute left-[75%] sm:left-[60%] lg:left-[700px] top-2 sm:top-6 lg:top-[40px] drop-shadow-[0_0_8px_#c8ff00] star-spin">
            <svg
              width="40"
              height="40"
              className="sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px]"
              viewBox="0 0 60 60"
              fill="none"
            >
              <g stroke="#c8ff00" strokeWidth="2">
                <line x1="30" y1="0" x2="30" y2="60" />
                <line x1="0" y1="30" x2="60" y2="30" />
                <line x1="8" y1="8" x2="52" y2="52" />
                <line x1="52" y1="8" x2="8" y2="52" />
              </g>
            </svg>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:absolute lg:left-[400px] lg:top-[200px] text-[42px] sm:text-[100px] lg:text-[160px] font-extrabold leading-[0.9] lg:leading-[0.85] tracking-tight"
          >
            PARTNER
          </motion.h1>

        </div>

        {/* CIRCLES */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center mt-4 sm:mt-8 lg:absolute circles-move"
        >
          <div className="flex">
            <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[74px] lg:h-[74px] border border-lime-400 rounded-full"></div>
            <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[74px] lg:h-[74px] border border-lime-400 rounded-full -ml-2 sm:-ml-4"></div>
            <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[74px] lg:h-[74px] border border-lime-400 rounded-full -ml-2 sm:-ml-4"></div>
          </div>

          <div className="ml-2 sm:ml-4 w-[60px] sm:w-[120px] lg:w-[150px] h-[1px] bg-gray-600"></div>
        </motion.div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-12 lg:mt-[150px] text-gray-300 leading-relaxed max-w-full sm:max-w-[520px] text-[13px] sm:text-base"
        >
          I believe in the power of innovation and creativity to transform your
          ideas into exceptional digital experiences. Working closely with you,
          I strive to bring your vision to life.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-[70px] h-[70px] sm:w-[110px] sm:h-[110px] lg:w-[120px] lg:h-[120px] rounded-full border border-gray-600 flex items-center justify-center text-[10px] sm:text-sm tracking-wide transition-all duration-300 hover:bg-lime-400 hover:text-black hover:border-lime-400 mt-6 sm:mt-14 lg:mt-20"
        >
          ABOUT ME ↗
          <span className="absolute bottom-1.5 left-2.5 sm:bottom-3 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 bg-lime-400 rounded-full"></span>
        </motion.button>

      </div>
    </main>
  );
}