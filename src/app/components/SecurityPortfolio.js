"use client";

import Link from "next/link";

export default function SecurityPortfolio() {

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

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10">

        {projects.map((project, index) => (
          <Link
            href={project.link}   // ✅ simple like navbar
            key={index}
            className={`relative group overflow-hidden block ${index % 2 !== 0 ? "mt-13" : ""}`}
          >

            {/* IMAGE */}
            <img
              src={project.image}
              alt=""
              className="w-full h-[660px] object-cover transition duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-lime-400 text-black text-sm font-semibold px-5 py-3 rounded-full">
                VIEW ↗
              </div>
            </div>

            {/* TITLE */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-lime-400 text-black px-6 py-2 text-sm font-semibold">
                {project.title}
              </div>
            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}