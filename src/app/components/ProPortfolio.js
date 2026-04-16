"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProPortfolio() {

  const projects = [
    {
      image: "/ethical-hacking.webp",
      title: "Clay AI SaaS Website",
      link: "/ethical-hacking",
    },
    {
      image: "/SERVER VAPT.jpg",
      title: "ProBuilder Framer Site",
      link: "/server-vapt",
    },
    {
      image: "/shield key.jpg",
      title: "Pentos Portfolio Site",
      link: "/shield-key",
    },
    {
      image: "/simultaneous.jpg",
      title: "Digiket Marketing Site ",
      link: "/simultaneous-security",
    },
  ];

  return (
    <section className="bg-black text-white py-28 max-lg:py-16">

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10
      max-lg:grid-cols-1 max-lg:gap-6 max-lg:px-4">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <Link
              href={project.link}
              className={`relative group overflow-hidden block 
              ${index % 2 !== 0 ? "mt-13" : ""}
              max-lg:mt-0`}
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt=""
                className="w-full h-[660px] object-cover transition duration-500 group-hover:scale-110
                max-lg:h-[300px]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300
              max-lg:opacity-100"></div>

              {/* BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300
              max-lg:opacity-100">
                <div className="bg-lime-400 text-black text-sm font-semibold px-5 py-3 rounded-full
                max-lg:text-xs max-lg:px-4 max-lg:py-2">
                  VIEW ↗
                </div>
              </div>

              {/* TITLE */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300
              max-lg:opacity-100 max-lg:bottom-4">
                <div className="bg-lime-400 text-black px-6 py-2 text-sm font-semibold
                max-lg:text-xs max-lg:px-4 max-lg:py-1">
                  {project.title}
                </div>
              </div>

            </Link>
          </motion.div>
        ))}

      </div>

    </section>
  );
}