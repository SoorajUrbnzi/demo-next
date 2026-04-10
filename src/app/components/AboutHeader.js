import React from "react";

export default function AboutHeader() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-16 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <h4 className="text-gray-400 text-sm tracking-widest">
              Testimonial
            </h4>
            <div className="w-20 h-[1px] bg-gray-700"></div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
            What my clients say
          </h1>
        </div>

      </div>

      {/* 🔁 SLIDER */}
      <div className="relative overflow-hidden">

        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

        <div className="flex gap-16 animate-scroll w-max">

          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">

              {/* ITEM 1 */}
              <div className="w-[500px] text-center">
                
                <div className="flex justify-center mb-8">
                  <span className="text-lime-400 text-7xl leading-none">“</span>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Teaming up with Pentos has been an amazing experience. He clearly understood our vision and brought our dream home to life. The attention to detail and dedication went beyond my expectations.
                </p>

                <h4 className="font-semibold">OliverTaylor_UK</h4>
                <p className="text-gray-500 text-sm">Interior Designer</p>
              </div>

              {/* ITEM 2 */}
              <div className="w-[500px] text-center">
                
                <div className="flex justify-center mb-8">
                  <span className="text-lime-400 text-7xl leading-none">“</span>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Working with Pentos is a fantastic experience. He truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were beyond my imagination.
                </p>

                <h4 className="font-semibold">Cameron Williamson</h4>
                <p className="text-gray-500 text-sm">CEO, ISHKON</p>
              </div>

              {/* ITEM 3 */}
              <div className="w-[500px] text-center">
                
                <div className="flex justify-center mb-8">
                  <span className="text-lime-400 text-7xl leading-none">“</span>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Collaborating with Pentos has been a wonderful experience. He fully captured our vision and transformed our dream home into a reality. The level of precision and commitment exceeded my expectations.
                </p>

                <h4 className="font-semibold">JamesHarper_87</h4>
                <p className="text-gray-500 text-sm">Senior Architect</p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}