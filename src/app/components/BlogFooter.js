"use client"

import { motion } from "framer-motion";

export default function BlogFooter() {
  return (
    <div className="bg-black text-white">

      {/* LET'S TALK SECTION */}
      <section className="text-center py-32 px-6 max-lg:py-16 max-lg:px-4">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[120px] md:text-[160px] font-extrabold text-lime-400 leading-none mb-10
        max-lg:text-[48px] max-lg:mb-6"
        >
          LET’S TALK
        </motion.h1>

        <motion.a
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          href="mailto:hello@pentaclay.com"
          className="block text-[40px] md:text-[60px] font-semibold text-gray-300 hover:text-lime-400 transition-colors duration-300 mb-20
          max-lg:text-[20px] max-lg:mb-10"
        >
          hello@pentaclay.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="/contact"
            className="group relative w-40 h-40 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer overflow-hidden
            max-lg:w-24 max-lg:h-24"
          >
            <div className="absolute inset-0 bg-lime-400 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>

            <span className="relative z-10 font-semibold text-sm group-hover:text-black transition
            max-lg:text-xs">
              CONTACT ↗
            </span>

            <div className="absolute bottom-0 left-0 w-12 h-12 bg-lime-400 rounded-tr-full opacity-80
            max-lg:w-8 max-lg:h-8"></div>
          </a>
        </motion.div>

      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-24 max-lg:py-16 max-lg:px-4">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 max-lg:grid-cols-1 max-lg:gap-10"
        >

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-6">About Us</h3>

            <p className="text-gray-400 leading-relaxed mb-6 max-lg:text-sm">
              At onnat we are a dynamic creative agency dedicated to transforming your vision into captivating digital experiences.
            </p>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#111] rounded-full">f</div>
              <div className="w-10 h-10 flex items-center justify-center bg-[#111] rounded-full">X</div>
              <div className="w-10 h-10 flex items-center justify-center bg-[#111] rounded-full">ig</div>
              <div className="w-10 h-10 flex items-center justify-center bg-[#111] rounded-full">yt</div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>

            <ul className="space-y-4 text-gray-400 max-lg:text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>My Projects</li>
              <li>Blog</li>
              <li>404</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>

            <ul className="space-y-4 text-gray-400 max-lg:text-sm">
              <li>Analytics & Strategy</li>
              <li>UX/UI Design</li>
              <li>Branding & Identity</li>
              <li>Web Development</li>
              <li>Get the Template</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>

            <div className="flex items-center border-b border-gray-700 pb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none flex-1 text-gray-400 placeholder-gray-500 text-sm"
              />

              <button className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black">
                →
              </button>
            </div>
          </div>

        </motion.div>

        {/* bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-20 pt-6 text-gray-400 text-sm max-lg:text-xs"
        >
          © 2024 All rights for Pentaclay
        </motion.div>

        {/* BIG BRAND TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full text-center overflow-hidden mt-10"
        >
          <h1 className="text-[180px] md:text-[260px] font-extrabold text-gray-200 leading-none tracking-tight
          max-lg:text-[60px]">
            PENTOS
          </h1>
        </motion.div>

      </footer>

    </div>
  );
}