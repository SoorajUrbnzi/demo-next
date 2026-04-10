import React from "react";

export default function WorkProcessSection() {
  return (
    <section className="w-full text-white py-24 px-6 md:px-16 bg-[#0a0a0a] relative overflow-hidden">

      {/* RIGHT SIDE GREEN GLOW (TIGHT & CONTROLLED) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[35%] h-full bg-[radial-gradient(circle_at_right,_rgba(132,204,22,0.18),_transparent_45%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h4 className="text-gray-400 text-base font-medium">
              My Linear Process
            </h4>
            <div className="w-20 h-[1px] bg-gray-600"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            Work Process
          </h1>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <div className="border border-gray-800 p-10 hover:bg-black transition duration-300">
            <div className="mb-6 text-lime-400">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="6" strokeWidth="1" />
                <circle cx="12" cy="12" r="10" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Discovery & Research
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We start by getting to know your business, your goals, and your
              target audience. Through in-depth research and analysis, we gather
              valuable insights that inform.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="border border-gray-800 p-10 bg-[#070707] hover:bg-black transition duration-300">
            <div className="mb-6 text-lime-400">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="6" width="16" height="3" strokeWidth="1" />
                <rect x="4" y="11" width="16" height="3" strokeWidth="1" />
                <rect x="4" y="16" width="16" height="3" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Strategy & Planning
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Based on our research, we develop a comprehensive strategy and
              detailed project plan. This includes setting clear goals,
              defining key performance indicators,
            </p>
          </div>

          {/* CARD 3 */}
          <div className="border border-gray-800 p-10 hover:bg-black transition duration-300">
            <div className="mb-6 text-lime-400">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polygon
                  points="12,2 15,11 22,11 17,15 19,22 12,18 5,22 7,15 2,11 9,11"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Implementation & Deploy
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We start by delivering the results and taking feedback. Through
              in-depth research and analysis, we gather valuable feedback that
              shapes the output.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}