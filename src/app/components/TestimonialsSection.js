"use client"

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-32 px-8 lg:px-24 text-white bg-[#0b0b0b]
    max-lg:py-16 max-lg:px-5">

      {/* subtle dark glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.04),transparent_40%)]"></div>

      {/* LIME CORNER GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_8%,rgba(201,243,29,0.28),transparent_32%)]"></div>

      <div className="relative z-10">

        {/* label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10 max-lg:mb-6"
        >
          <span className="text-gray-400 text-sm max-lg:text-xs">Testimonials</span>
          <div className="w-20 h-[1px] bg-gray-600 max-lg:w-12"></div>
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[130px] font-bold leading-none mb-24 tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]
        max-lg:text-[36px] max-lg:mb-12"
        >
          What my clients say
        </motion.h2>

        <div className="grid lg:grid-cols-2 items-center gap-20 max-lg:gap-10">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="text-[#C9F31D] text-[80px] mb-12 font-bold leading-none
            max-lg:text-[40px] max-lg:mb-6">
              “”
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 text-3xl leading-relaxed max-w-5xl mb-10
            max-lg:text-base max-lg:leading-7 max-lg:mb-6"
            >
              Working with Pentos is a fantastic experience. He truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were beyond my imagination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-xl max-lg:text-base">Cameron Williamson</p>
              <p className="text-gray-400 text-sm max-lg:text-xs">CEO, Ishkon</p>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 6 }}
            whileInView={{ opacity: 1, x: 0, rotate: 12 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >

            <img
              src="/SERVER VAPT.jpg"
              alt="client"
              className="w-[420px] h-[420px] object-cover rotate-[12deg] rounded-md shadow-[0_40px_90px_rgba(0,0,0,0.8) mx-[200px]
              max-lg:w-[260px] max-lg:h-[260px] max-lg:mx-0 max-lg:rotate-6"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}