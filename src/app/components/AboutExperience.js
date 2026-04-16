"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-16 md:py-24 px-4 md:px-16 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-1/3 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-lime-400 opacity-20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-5 md:mb-6">
            <h4 className="text-gray-400 text-xs md:text-sm tracking-widest">
              Teams I Worked With
            </h4>
            <div className="w-12 md:w-20 h-[1px] bg-gray-700"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
            My Professional <br />
            Experiences
          </h1>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* VERTICAL LINE */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[1px] bg-gray-700"></div>

          <div className="space-y-6 md:space-y-10">

            {[
              {
                title: "Senior Product Designer",
                company: "Kahuna • Full Time",
                year: "2022 - Present",
                color: "bg-cyan-400",
                letter: "S",
                text: "text-black"
              },
              {
                title: "Senior UX/UI Designer",
                company: "Kahuna • Full Time",
                year: "2019 - 2022",
                color: "bg-pink-400",
                letter: "U",
                text: "text-white"
              },
              {
                title: "Senior UX/UI Designer",
                company: "Befikre • Full Time",
                year: "2017 - 2019",
                color: "bg-gray-300",
                letter: "X",
                text: "text-black"
              },
              {
                title: "Intern Designer",
                company: "Creativa • Part Time",
                year: "2016 - 2017",
                color: "bg-purple-500",
                letter: "I",
                text: "text-white"
              }
            ].map((item, i) => (
              
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start md:items-center"
              >

                {/* DOT */}
                <div className="absolute left-4 md:left-6 transform -translate-x-1/2">
                  <div className="w-5 h-5 md:w-6 md:h-6 border border-lime-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  </div>
                </div>

                {/* CARD */}
                <div className="ml-10 md:ml-16 w-full bg-black p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                  {/* LEFT */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`w-10 h-10 md:w-14 md:h-14 ${item.color} flex items-center justify-center rounded-full`}>
                      <span className={`${item.text} font-bold`}>
                        {item.letter}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base md:text-lg font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6">
                    <span className="text-gray-400 text-xs md:text-sm">
                      📅 {item.year}
                    </span>

                    <div className="w-8 h-8 md:w-10 md:h-10 border border-gray-700 rounded-full flex items-center justify-center transition duration-300 hover:bg-lime-400 hover:border-lime-400 group cursor-pointer">
                      <span className="transition duration-300 group-hover:text-black">
                        ↗
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}