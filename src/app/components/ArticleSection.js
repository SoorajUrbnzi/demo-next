import Image from "next/image"

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
    <section className="bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* top label */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-gray-400 text-sm tracking-wide">
            Blog & Articles
          </p>
          <div className="h-[1px] bg-gray-700 w-24"></div>
        </div>

        {/* title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          Latest Articles
        </h2>

        {/* grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {posts.map((post, index) => (
            <div
              key={index}
              className="group border border-gray-800 p-6 hover:border-gray-600 hover:bg-lime-400 hover:text-black transition-all duration-300"
            >

              {/* meta */}
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-6 group-hover:text-black">
                <span>🏷 {post.category}</span>
                <span>📅 {post.date}</span>
              </div>

              {/* title */}
              <h3 className="text-2xl font-semibold leading-snug mb-6">
                {post.title}
              </h3>

              {/* image */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />

                {/* hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-24 h-24 rounded-full bg-lime-400 flex items-center justify-center font-semibold text-black">
                    VIEW ↗
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mt-16">
          <div className="group relative w-36 h-36 flex items-center justify-center rounded-full border border-gray-600 cursor-pointer overflow-hidden">

            <div className="absolute inset-0 bg-lime-400 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>

            <span className="relative z-10 text-sm font-semibold group-hover:text-black transition">
              VIEW ALL ↗
            </span>

            <div className="absolute bottom-0 left-0 w-12 h-12 bg-lime-400 rounded-tr-full opacity-70"></div>

          </div>
        </div>

      </div>
    </section>
  )
}