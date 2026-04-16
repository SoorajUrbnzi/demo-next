"use client"

import { motion } from "framer-motion";

export default function ServicesSection() {

  const services = [
    {
      title: "Web Development",
      img: "/SERVER VAPT.jpg"
    },
    {
      title: "Branding & Identity",
      img: "/shield key.jpg"
    },
    {
      title: "UX/UI Design",
      img: "/blog2.png"
    },
    {
      title: "Analytics & Strategy",
      img: "/blog4.jpg"
    }
  ];

  return (
    <section className="relative bg-black text-white py-28 px-8 lg:px-20 overflow-hidden max-lg:py-16 max-lg:px-5">

      {/* right glow */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-lime-500 blur-[200px] opacity-20"></div>

      <div className="max-w-6xl mx-auto">

        {/* small label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 mb-6 max-lg:gap-3 max-lg:mb-4"
        >
          <span className="text-gray-400 text-sm uppercase tracking-widest mb-0 max-lg:text-xs">
            Services
          </span>
          <div className="w-16 h-[1px] bg-gray-600 mb-0 max-lg:w-10"></div>
        </motion.div>

        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[72px] font-bold mb-0 max-lg:text-[32px] max-lg:leading-[40px]"
        >
          Expertise Solutions
        </motion.h2>

        {/* services list */}
        <div>

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex items-center justify-between py-10 mt-0 border-b border-gray-800 hover:border-gray-600 transition max-lg:py-6"
            >

              {/* left text */}
              <div className="flex items-center gap-3 text-2xl font-semibold max-lg:text-base">

                <span className="text-gray-400">
                  {String(index + 1).padStart(2, "0")}.
                </span>

                <span className="group-hover:text-lime-400 transition">
                  {service.title}
                </span>

              </div>

              {/* circle arrow */}
              <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center group-hover:border-lime-400 transition max-lg:w-9 max-lg:h-9">
                ↗
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}