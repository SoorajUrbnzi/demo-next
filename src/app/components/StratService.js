"use client";
import { useState } from "react";
import Link from "next/link";

/* ---------------- BLOG DATA ---------------- */
const blogs = [
  {
    title: "Importance of UX/UI Design in Today’s",
    category: "Design",
    date: "Oct 4, 2024",
    image: "/simultaneous.jpg",
    link: "/importance-of-ux-ui-design",
  },
  {
    title: "10 UI Design Tricks & Marketing Tips",
    category: "Business",
    date: "Sep 6, 2024",
    image: "/shield key.jpg",
    link: "/ui-design-tricks",
  },
  {
    title: "10 UI Improvements & Cool Marketing Hacks",
    category: "Design",
    date: "Aug 13, 2024",
    image: "/SERVER VAPT.jpg",
    link: "/ui-improvements",
  },
  {
    title: "10 UI Interactions & Marketing Tips",
    category: "Business",
    date: "Aug 5, 2024",
    image: "/ethical-hacking.webp",
    link: "/ui-interactions",
  },
  {
    title: "Advanced UX Strategies for Growth",
    category: "Design",
    date: "Jul 20, 2024",
    image: "/blog4.jpg",
    link: "/ux-strategies",
  },
  {
    title: "Boost Your Product with Smart Design",
    category: "Business",
    date: "Jul 10, 2024",
    image: "/simultaneous.jpg",
    link: "/smart-design",
  },
];

/* ---------------- MAIN PAGE ---------------- */
export default function StratService() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#0A0A0A] text-white px-4 md:px-6 py-16 md:py-20 space-y-16 md:space-y-24 min-h-screen">

      {/* ================= FEATURED CARD ================= */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-black">

        {/* Image */}
        <div className="w-full md:w-1/2 md:mx-10 md:my-10">
          <img
            src="/showcase.webp"
            alt="featured"
            className="rounded-lg w-full h-[240px] sm:h-[300px] md:h-[420px] object-contain bg-black"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-5 md:space-y-7">
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>🏷 Business</span>
            <span>📅 Oct 25, 2024</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Effective Strategies to Boost Your Online
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            At Pentos, we specialize in delivering comprehensive UX/UI design
            solutions that enhance user experiences and drive growth.
          </p>

          {/* Button */}
          <button className="group flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-700 transition-all duration-300 hover:bg-lime-400 hover:border-lime-400">
            <span className="text-xs md:text-sm tracking-wide group-hover:text-black">
              VIEW ↗
            </span>
          </button>
        </div>
      </div>

      {/* ================= GRID SECTION ================= */}
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">

        {/* Top 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {blogs.slice(0, 3).map((blog, i) => (
            <Card key={i} blog={blog} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {(showMore ? blogs.slice(3, 6) : blogs.slice(3, 4)).map(
            (blog, i) => (
              <Card key={i} blog={blog} />
            )
          )}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center pt-4 md:pt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-lime-400 text-black px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-medium flex items-center gap-2 hover:scale-105 transition"
          >
            {showMore ? "Show Less" : "Load More"} ↗
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- CARD ---------------- */
function Card({ blog }) {
  return (
    <Link href={blog.link}>
      <div className="group border border-gray-800 p-4 md:p-6 space-y-5 md:space-y-6 transition-all duration-300 hover:bg-lime-400 hover:border-lime-400 cursor-pointer">

        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-400 text-xs md:text-sm group-hover:text-black">
          <span>🏷 {blog.category}</span>
          <span>📅 {blog.date}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-3xl font-semibold leading-snug group-hover:text-black">
          {blog.title}
        </h2>

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={blog.image}
            alt="blog"
            className="w-full h-44 md:h-56 object-cover transition duration-300 group-hover:scale-105"
          />

          {/* VIEW Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-black text-white text-xs md:text-sm group-hover:bg-lime-400 group-hover:text-black transition">
              VIEW ↗
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}