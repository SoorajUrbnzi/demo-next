"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServerPortFolio() {

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
      title: "Digiket Marketing Site",
      link: "/simultaneous-security",
    },
  ];

  return (
    <section className="bg-black text-white py-28">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">

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
              className={`relative group overflow-hidden block ${index % 2 !== 0 ? "mt-13 md:mt-13 mt-0" : ""}`}
            >

              <img
                src={project.image}
                alt=""
                className="w-full h-[300px] md:h-[660px] object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-lime-400 text-black text-sm font-semibold px-5 py-3 rounded-full">
                  VIEW ↗
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-lime-400 text-black px-6 py-2 text-sm font-semibold text-center">
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