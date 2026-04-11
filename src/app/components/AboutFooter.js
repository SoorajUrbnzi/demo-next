export default function AboutFooter() {
  return (
    <div className="bg-black text-white overflow-hidden w-full">

      {/* LET'S TALK SECTION */}
      <section className="text-center py-20 md:py-32 px-4 md:px-6">

        <h1 className="text-[44px] sm:text-[56px] md:text-[160px] font-extrabold text-lime-400 leading-[1.1] md:leading-none mb-8 md:mb-10">
          LET’S TALK
        </h1>

        <a
          href="mailto:hello@pentaclay.com"
          className="block text-[18px] sm:text-[24px] md:text-[60px] font-semibold text-gray-300 hover:text-lime-400 transition-colors duration-300 mb-10 md:mb-20 break-all"
        >
          hello@pentaclay.com
        </a>

        <div className="flex justify-center">
          <div className="group relative w-24 h-24 md:w-40 md:h-40 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer overflow-hidden">

            <div className="absolute inset-0 bg-lime-400 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>

            <span className="relative z-10 font-semibold text-xs md:text-sm group-hover:text-black transition text-center px-2">
              CONTACT ↗
            </span>

            <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 bg-lime-400 rounded-tr-full opacity-80"></div>

          </div>
        </div>

      </section>


      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-6">About Us</h3>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
              At onnat we are a dynamic creative agency dedicated to transforming your vision into captivating digital experiences.
            </p>

            <div className="flex gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#111] rounded-full text-xs">f</div>
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#111] rounded-full text-xs">X</div>
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#111] rounded-full text-xs">ig</div>
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#111] rounded-full text-xs">yt</div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>

            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
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

            <ul className="space-y-3 text-gray-400 text-sm md:text-base">
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
                className="bg-transparent outline-none flex-1 text-gray-400 placeholder-gray-500 text-sm md:text-base min-w-0"
              />

              <button className="ml-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-lime-400 flex items-center justify-center text-black flex-shrink-0">
                →
              </button>
            </div>
          </div>

        </div>


        {/* bottom line */}
        <div className="border-t border-gray-800 mt-14 md:mt-20 pt-6 text-gray-400 text-xs md:text-sm text-center">
          © 2024 All rights for Pentaclay
        </div>

        {/* BIG BRAND TEXT */}
        <div className="w-full text-center overflow-hidden mt-6 md:mt-10">
          <h1 className="text-[64px] sm:text-[90px] md:text-[260px] font-extrabold text-gray-200 leading-[0.9] tracking-tight break-words">
            PENTOS
          </h1>
        </div>

      </footer>

    </div>
  )
}