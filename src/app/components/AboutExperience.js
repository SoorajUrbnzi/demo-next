import React from "react";

export default function ExperienceSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-16 overflow-hidden">

      {/* 🌟 BACKGROUND GREEN GLOW */}
      <div className="absolute left-0 top-1/3 w-[300px] h-[300px] bg-lime-400 opacity-20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <h4 className="text-gray-400 text-sm tracking-widest">
              Teams I Worked With
            </h4>
            <div className="w-20 h-[1px] bg-gray-700"></div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
            My Professional <br />
            Experiences
          </h1>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* VERTICAL LINE */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gray-700"></div>

          <div className="space-y-10">

            {/* ITEM 1 */}
            <div className="relative flex items-center">
              <div className="absolute left-6 transform -translate-x-1/2">
                <div className="w-6 h-6 border border-lime-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                </div>
              </div>

              <div className="ml-16 w-full bg-black p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-cyan-400 flex items-center justify-center rounded-full">
                    <span className="text-black font-bold">S</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Senior Product Designer
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Kahuna • Full Time
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-gray-400 text-sm">📅 2022 - Present</span>

                  {/* ✅ HOVER BUTTON */}
                  <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center transition duration-300 hover:bg-lime-400 hover:border-lime-400 group cursor-pointer">
                    <span className="transition duration-300 group-hover:text-black">
                      ↗
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="relative flex items-center">
              <div className="absolute left-6 transform -translate-x-1/2">
                <div className="w-6 h-6 border border-lime-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                </div>
              </div>

              <div className="ml-16 w-full bg-black p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-pink-400 flex items-center justify-center rounded-full">
                    <span className="text-white font-bold">U</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Senior UX/UI Designer
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Kahuna • Full Time
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-gray-400 text-sm">📅 2019 - 2022</span>

                  <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center transition duration-300 hover:bg-lime-400 hover:border-lime-400 group cursor-pointer">
                    <span className="transition duration-300 group-hover:text-black">
                      ↗
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="relative flex items-center">
              <div className="absolute left-6 transform -translate-x-1/2">
                <div className="w-6 h-6 border border-lime-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                </div>
              </div>

              <div className="ml-16 w-full bg-black p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-300 flex items-center justify-center rounded-full">
                    <span className="text-black font-bold">X</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Senior UX/UI Designer
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Befikre • Full Time
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-gray-400 text-sm">📅 2017 - 2019</span>

                  <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center transition duration-300 hover:bg-lime-400 hover:border-lime-400 group cursor-pointer">
                    <span className="transition duration-300 group-hover:text-black">
                      ↗
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="relative flex items-center">
              <div className="absolute left-6 transform -translate-x-1/2">
                <div className="w-6 h-6 border border-lime-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                </div>
              </div>

              <div className="ml-16 w-full bg-black p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-purple-500 flex items-center justify-center rounded-full">
                    <span className="text-white font-bold">I</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Intern Designer
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Creativa • Part Time
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-gray-400 text-sm">📅 2016 - 2017</span>

                  <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center transition duration-300 hover:bg-lime-400 hover:border-lime-400 group cursor-pointer">
                    <span className="transition duration-300 group-hover:text-black">
                      ↗
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}