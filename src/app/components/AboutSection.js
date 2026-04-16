"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-28 px-8 lg:px-20 relative overflow-hidden max-lg:py-16 max-lg:px-5">

      {/* neon accent */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute right-24 top-100 max-lg:right-4 max-lg:top-6"
      >
        <div className="w-10 h-4 bg-lime-400 rotate-45 mb-3"></div>
        <div className="w-10 h-4 bg-lime-400 rotate-45"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto">

        {/* label */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 mb-6"
        >

          <span className="text-gray-400 text-sm tracking-widest uppercase mt-50 absolute left-50 
          max-lg:relative max-lg:left-0 max-lg:mt-0 max-lg:text-xs">
            About Me
          </span>

          <div className="h-[1px] w-20 bg-gray-600 mt-50 absolute left-75
          max-lg:relative max-lg:left-0 max-lg:mt-0 max-lg:w-16"></div>

        </motion.div>

        {/* heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-[72px] leading-[80px] font-bold mb-20 max-w-4xl mt-40 absolute left-50
        max-lg:relative max-lg:left-0 max-lg:mt-6 max-lg:text-[32px] max-lg:leading-[40px] max-lg:mb-10"
        >
          Passion for <br /> Digital Innovation
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-lg:gap-8">

          {/* IMAGE */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative w-[420px] h-[520px] flex items-center absolute left-20 mt-120
          max-lg:relative max-lg:left-0 max-lg:mt-0 max-lg:w-full max-lg:h-[260px]"
          >

            <Image
              src="/SERVER%20VAPT.jpg"
              alt="about"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.6)_1px,_transparent_1px)] bg-[size:6px_6px] opacity-40"></div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mt-[550px] absolute left-[720px]
          max-lg:relative max-lg:left-0 max-lg:mt-6"
          >

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-8 leading-7 max-w-xl max-lg:text-sm max-lg:leading-6"
            >
              My journey began with a simple yet powerful idea: to
              revolutionise the digital landscape through innovative
              solutions and exceptional creativity.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-12 leading-7 max-w-xl max-lg:text-sm max-lg:leading-6 max-lg:mb-8"
            >
              Driven by a passion for design and technology, I set out to
              create unique digital experiences that make an impact online.
            </motion.p>

            {/* stats */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-10 mb-16 
            max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:mb-10"
            >

              <div>
                <h3 className="text-2xl font-bold text-lime-400 max-lg:text-xl">17K</h3>
                <p className="text-gray-400 text-sm mt-1 max-lg:text-xs">
                  Projects Completed
                </p>
              </div>

              <div className="w-px h-10 bg-gray-700 max-lg:hidden"></div>

              <div>
                <h3 className="text-2xl font-bold text-lime-400 max-lg:text-xl">145+</h3>
                <p className="text-gray-400 text-sm mt-1 max-lg:text-xs">
                  Happy Clients
                </p>
              </div>

              <div className="w-px h-10 bg-gray-700 max-lg:hidden"></div>

              <div>
                <h3 className="text-2xl font-bold text-lime-400 max-lg:text-xl">
                  10,459
                </h3>
                <p className="text-gray-400 text-sm mt-1 max-lg:text-xs">
                  Cups of Coffee
                </p>
              </div>

            </motion.div>

            {/* button */}
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-27 h-27 rounded-full border border-gray-600 flex items-center justify-center text-sm tracking-wide transition-all duration-300 hover:bg-lime-400 hover:text-black hover:border-lime-400
            max-lg:w-[90px] max-lg:h-[90px] max-lg:text-xs"
            >

              ABOUT ME ↗

              <span className="absolute bottom-3 left-4 w-5 h-5 bg-lime-400 rounded-full
              max-lg:w-4 max-lg:h-4 max-lg:bottom-2 max-lg:left-3"></span>

            </motion.button>

          </motion.div>
        </div>
      </div>
    </section>
  )
}