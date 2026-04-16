"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const posts = [
  {
    title: "Effective Strategies to Boost Your Online",
    category: "Business",
    date: "Oct 25, 2024",
    image: "/blog1.webp",
  },
  {
    title: "Importance of UX/UI Design in Today's",
    category: "Business",
    date: "Oct 4, 2024",
    image: "/blog2.png",
  },
  {
    title: "10 UI Design Tricks & Marketing Tips",
    category: "Business",
    date: "Sep 6, 2024",
    image: "/blog4.jpg",
  },
]

export default function ArticleSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 max-lg:py-16">
      <div className="max-w-7xl mx-auto px-6 max-lg:px-4">

        {/* top label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <p className="text-gray-400 text-sm tracking-wide max-lg:text-xs">
            Blog & Articles
          </p>
          <div className="h-[1px] bg-gray-700 w-24 max-lg:w-14"></div>
        </motion.div>

        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-16 
        max-lg:text-3xl max-lg:mb-10"
        >
          Latest Articles
        </motion.h2>

        {/* grid */}
        <div className="grid md:grid-cols-3 gap-8 
        max-lg:grid-cols-1 max-lg:gap-6">

          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group border border-gray-800 p-6 hover:border-gray-600 hover:bg-lime-400 hover:text-black transition-all duration-300
              max-lg:p-4"
            >

              {/* meta */}
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-6 group-hover:text-black
              max-lg:text-xs max-lg:mb-4">
                <span>🏷 {post.category}</span>
                <span>📅 {post.date}</span>
              </div>

              {/* title */}
              <h3 className="text-2xl font-semibold leading-snug mb-6
              max-lg:text-lg max-lg:mb-4">
                {post.title}
              </h3>

              {/* image */}
              <div className="relative w-full h-[200px] overflow-hidden
              max-lg:h-[180px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />

                {/* hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-24 h-24 rounded-full bg-lime-400 flex items-center justify-center font-semibold text-black
                  max-lg:w-16 max-lg:h-16 max-lg:text-xs">
                    VIEW ↗
                  </div>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* VIEW ALL BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 max-lg:mt-10"
        >
          <div className="group relative w-36 h-36 flex items-center justify-center rounded-full border border-gray-600 cursor-pointer overflow-hidden
          max-lg:w-24 max-lg:h-24">

            <div className="absolute inset-0 bg-lime-400 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>

            <span className="relative z-10 text-sm font-semibold group-hover:text-black transition
            max-lg:text-xs">
              VIEW ALL ↗
            </span>

            <div className="absolute bottom-0 left-0 w-12 h-12 bg-lime-400 rounded-tr-full opacity-70
            max-lg:w-8 max-lg:h-8"></div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}