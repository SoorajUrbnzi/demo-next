export default function ShieldHero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background: `repeating-radial-gradient(
            circle at -15% 50%,
            rgba(255,255,255,0.08) 0px,
            rgba(255,255,255,0.08) 2px,
            transparent 2px,
            transparent 40px
          )`,
          maskImage:
            "linear-gradient(to right, black 0%, black 55%, transparent 55%)"
        }}
      />

      {/* GLOW */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-[800px] h-[800px] left-[-200px]
        max-lg:w-[400px] max-lg:h-[400px] max-lg:left-[-100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200,255,0,0.25) 0%, rgba(200,255,0,0.1) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 pl-[180px] pt-[120px]
      max-lg:pl-6 max-lg:pt-20 max-lg:pr-6">

        {/* INTRO */}
        <div className="flex items-center gap-6 text-gray-300 text-sm mt-20 max-lg:mt-6">
          <span>Detail Presentation</span>
          <div className="w-[120px] h-[1px] bg-gray-600"></div>
        </div>

        {/* TITLE */}
        <div className="relative h-[220px] max-lg:h-auto max-lg:mt-6">

          <h1 className="mb-20 text-[160px] font-extrabold leading-[1]
          max-lg:text-[48px] max-lg:mb-2">
            Project
          </h1>

          <h1 className="absolute left-[380px] top-[190px] text-[160px] font-extrabold leading-[0.85]
          max-lg:static max-lg:text-[48px]">
            Details
          </h1>

        </div>

        {/* CIRCLES */}
        <div className="flex absolute items-center circles-move
        max-lg:relative max-lg:mt-6">

          <div className="flex">
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full max-lg:w-[40px] max-lg:h-[40px]"></div>
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full -ml-4 max-lg:w-[40px] max-lg:h-[40px]"></div>
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full -ml-4 max-lg:w-[40px] max-lg:h-[40px]"></div>
          </div>

          <div className="ml-0 w-[150px] h-[1px] bg-gray-600 max-lg:w-[80px]"></div>

        </div>

      </div>

      {/* ================= ROTATING CIRCLE ================= */}

      {/* DESKTOP (unchanged) */}
      <div className="hidden max-lg:hidden lg:flex absolute right-[120px] top-1/2 -translate-y-1/2 w-[200px] h-[200px] items-center justify-center">

        <div className="absolute w-full h-full bg-black rounded-full"></div>

        <svg className="circle-rotate w-full h-full relative z-10" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
            />
          </defs>

          <text fill="#ffffff" fontSize="16" letterSpacing="4">
            <textPath href="#circlePath">
              DIGITAL • AGENCY • CREATIVE • DIGITAL • AGENCY • CREATIVE •
            </textPath>
          </text>
        </svg>

        <div className="absolute w-12 h-12 bg-lime-400 flex items-center justify-center rotate-45">
          <div className="w-3 h-3 bg-black"></div>
        </div>

      </div>

      {/* MOBILE (after content) */}
      <div className="lg:hidden flex justify-center mt-10 mb-10">

        <div className="relative w-[140px] h-[140px] flex items-center justify-center">

          <div className="absolute w-full h-full bg-black rounded-full"></div>

          <svg className="circle-rotate w-full h-full relative z-10" viewBox="0 0 200 200">
            <defs>
              <path
                id="circlePathMobile"
                d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
              />
            </defs>

            <text fill="#ffffff" fontSize="14" letterSpacing="3">
              <textPath href="#circlePathMobile">
                DIGITAL • AGENCY • CREATIVE •
              </textPath>
            </text>
          </svg>

          <div className="absolute w-10 h-10 bg-lime-400 flex items-center justify-center rotate-45">
            <div className="w-2 h-2 bg-black"></div>
          </div>

        </div>

      </div>

    </main>
  );
}