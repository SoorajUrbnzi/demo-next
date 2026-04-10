import React from "react";

export default function TechStackSection() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h4 className="text-gray-400 text-sm tracking-widest">
              Professional Skills
            </h4>
            <div className="w-20 h-[1px] bg-gray-700"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-10">
            Tech Stack
          </h1>

          <div className="grid grid-cols-2 gap-6 mb-12">
            <p className="flex items-center gap-3 text-lg">
              <span className="text-lime-400 text-xl">✔</span>
              Analytics & Strategy
            </p>
            <p className="flex items-center gap-3 text-lg">
              <span className="text-lime-400 text-xl">✔</span>
              Branding & Identity
            </p>
            <p className="flex items-center gap-3 text-lg">
              <span className="text-lime-400 text-xl">✔</span>
              UX/UI Design
            </p>
            <p className="flex items-center gap-3 text-lg">
              <span className="text-lime-400 text-xl">✔</span>
              Web Development
            </p>
          </div>

          {/* CONTACT BUTTON */}
          <div className="relative w-40 h-40 rounded-full border border-gray-700 flex items-center justify-center overflow-hidden group cursor-pointer">
            <span className="relative z-10 text-sm tracking-wide transition duration-300 group-hover:text-black">
              CONTACT ↗
            </span>
            <div className="absolute bottom-0 left-0 w-14 h-14 bg-lime-400 rounded-tr-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-full"></div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-3 gap-10 justify-items-center">

          {/* CARD 1 */}
          <div className="w-[140px] h-[180px] rounded-[80px] bg-[#0a0a0a] flex flex-col items-center justify-center border border-transparent hover:border-lime-400 transition duration-300">
            <div className="w-14 h-14 bg-orange-500 flex items-center justify-center mb-4">
              <span className="text-black font-bold">U</span>
            </div>
            <p className="text-sm">Biffco</p>
          </div>

          {/* CARD 2 */}
          <div className="w-[140px] h-[180px] rounded-[80px] bg-[#0a0a0a] flex flex-col items-center justify-center border border-transparent hover:border-lime-400 transition duration-300">
            <div className="w-14 h-14 bg-pink-200 flex items-center justify-center mb-4">
              <span className="text-black font-bold">D</span>
            </div>
            <p className="text-sm">Acmeco</p>
          </div>

          {/* CARD 3 */}
          <div className="w-[140px] h-[180px] rounded-[80px] bg-[#0a0a0a] flex flex-col items-center justify-center border border-transparent hover:border-lime-400 transition duration-300">
            <div className="w-14 h-14 bg-purple-500 flex items-center justify-center mb-4">
              <span className="text-white font-bold">B</span>
            </div>
            <p className="text-sm">Barone</p>
          </div>

          {/* CARD 4 */}
          <div className="w-[140px] h-[180px] rounded-[80px] bg-[#0a0a0a] flex flex-col items-center justify-center border border-transparent hover:border-lime-400 transition duration-300">
            <div className="w-14 h-14 bg-teal-200 flex items-center justify-center mb-4">
              <span className="text-black font-bold">F</span>
            </div>
            <p className="text-sm">Farone</p>
          </div>

          {/* CARD 5 */}
          <div className="w-[140px] h-[180px] rounded-[80px] bg-[#0a0a0a] flex flex-col items-center justify-center border border-transparent hover:border-lime-400 transition duration-300">
            <div className="w-14 h-14 bg-lime-300 flex items-center justify-center mb-4">
              <span className="text-black font-bold">K</span>
            </div>
            <p className="text-sm">Kahuna</p>
          </div>

          {/* CARD 6 */}
          <div className="w-[140px] h-[180px] rounded-[80px] bg-[#0a0a0a] flex flex-col items-center justify-center border border-transparent hover:border-lime-400 transition duration-300">
            <div className="w-14 h-14 bg-red-900 flex items-center justify-center mb-4">
              <span className="text-white font-bold">K</span>
            </div>
            <p className="text-sm">Kinford</p>
          </div>

        </div>
      </div>
    </section>
  );
}