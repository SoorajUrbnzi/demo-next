export default function AwardsSection() {
  return (
    <section className="relative bg-black text-white py-36 overflow-hidden">

      {/* Animated Star */}
      <div className="absolute left-[20px] top-[340px] w-[90px] h-[90px] flex items-center justify-center">

        <svg
          viewBox="0 0 100 100"
          className="w-full h-full star-spin"
          stroke="#C9F31D"
          strokeWidth="1.5"
          fill="none"
        >
          <line x1="50" y1="0" x2="50" y2="100"/>
          <line x1="0" y1="50" x2="100" y2="50"/>
          <line x1="12" y1="12" x2="88" y2="88"/>
          <line x1="88" y1="12" x2="12" y2="88"/>
        </svg>

      </div>

      <div className="absolute right-24 top-220">
        <div className="w-10 h-4 bg-lime-400 rotate-45 mb-3"></div>
        <div className="w-10 h-4 bg-lime-400 rotate-45"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10">

        {/* Small label aligned with heading */}
        <div className="flex items-center gap-4 text-gray-400 mb-6">
          <span>Excellency Awards</span>
          <div className="w-20 h-[1px] bg-gray-600"></div>
        </div>

        {/* Main Heading */}
        <h2 className="text-[110px] font-bold leading-none mb-24 whitespace-nowrap">
          Awards & Recognitions
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-x-24 gap-y-24">

          {/* LEFT COLUMN */}
          <div className="space-y-24">

            {/* 2024 */}
            <div className="group flex items-start gap-10 border-r border-gray-800 pr-16">
              <div className="text-[80px] font-bold text-gray-700 rotate-[-90deg] group-hover:text-[#C9F31D] transition">
                2024
              </div>

              <div>
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-16 h-16 bg-[#111] rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 border border-gray-400 rounded-full"></div>
                  </div>

                  <h3 className="text-2xl font-semibold">
                    Excellency Award
                  </h3>
                </div>

                <p className="text-gray-400 max-w-md">
                  Awarded for excellence in web design, showcasing my talent
                  in creating engaging user interactions.
                </p>
              </div>
            </div>

            {/* 2022 */}
            <div className="group flex items-start gap-10 border-r border-gray-800 pr-16">
              <div className="text-[80px] font-bold text-gray-700 rotate-[-90deg] group-hover:text-[#C9F31D] transition">
                2022
              </div>

              <div>
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-16 h-16 bg-[#111] rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 border border-gray-400 rounded-full"></div>
                  </div>

                  <h3 className="text-2xl font-semibold">
                    Best in Town
                  </h3>
                </div>

                <p className="text-gray-400 max-w-md">
                  Honored as a rising talent in a local web design competition,
                  recognized for creativity and skill.
                </p>
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN */}
          <div className="space-y-24">

            {/* 2023 */}
            <div className="group flex items-start gap-10">
              <div className="text-[80px] font-bold text-gray-700 rotate-[-90deg] group-hover:text-[#C9F31D] transition">
                2023
              </div>

              <div className="border-r border-gray-800 pr-16">
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-16 h-16 bg-[#111] rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 border border-gray-400 rounded-full"></div>
                  </div>

                  <h3 className="text-2xl font-semibold">
                    Web Design Award
                  </h3>
                </div>

                <p className="text-gray-400 max-w-md">
                  Recognized for outstanding work in a community web design
                  competition, highlighting innovation.
                </p>
              </div>
            </div>

            {/* 2021 */}
            <div className="group flex items-start gap-10">
              <div className="text-[80px] font-bold text-gray-700 rotate-[-90deg] group-hover:text-[#C9F31D] transition">
                2021
              </div>

              <div className="border-r border-gray-800 pr-16">
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-16 h-16 bg-[#111] rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 border border-gray-400 rounded-full"></div>
                  </div>

                  <h3 className="text-2xl font-semibold">
                    Featured in Dehance
                  </h3>
                </div>

                <p className="text-gray-400 max-w-md">
                  Featured on Dehance for web design excellence, showcasing
                  dynamic and engaging interactions.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}