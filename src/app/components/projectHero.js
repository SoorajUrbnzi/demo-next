export default function projectHero() {
  return (
    <main className="relative h-screen bg-[#0a0a0a] text-white overflow-hidden">

      {/* RADIAL CURVED LINES */}
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

      {/* LEFT GLOW */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-[800px] h-[800px] left-[-200px]
        max-lg:w-[350px] max-lg:h-[350px] max-lg:left-[-120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200,255,0,0.25) 0%, rgba(200,255,0,0.1) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ROTATING CIRCLE */}
      <div className="absolute right-[120px] top-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center
      max-lg:right-6 max-lg:bottom-24 max-lg:top-auto max-lg:w-[110px] max-lg:h-[110px]">

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

        <div className="absolute w-12 h-12 bg-lime-400 rotate-45 flex items-center justify-center
        max-lg:w-7 max-lg:h-7">
          <div className="w-3 h-3 bg-black"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 pl-[180px] pt-[120px]
      max-lg:px-6 max-lg:pt-20 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:h-full">

        {/* INTRO */}
        <div className="flex items-center gap-6 text-gray-300 text-sm mt-20
        max-lg:mt-0 max-lg:text-xs">
          <span>Case Studies</span>
          <div className="w-[120px] h-[1px] bg-gray-600 max-lg:w-14"></div>
        </div>

        {/* TITLE */}
        <div className="relative h-[220px] mt-4
        max-lg:h-auto max-lg:mt-6">

          <h1 className="text-[160px] font-extrabold leading-[1]
          max-lg:text-[52px]">
            AMAZING
          </h1>

          <h1 className="absolute left-[420px] top-[190px] text-[160px] font-extrabold leading-[0.85]
          max-lg:static max-lg:text-[52px] max-lg:mt-2">
            WORK
          </h1>

        </div>

        {/* CIRCLES */}
        <div className="flex absolute items-center
        max-lg:relative max-lg:mt-6">

          <div className="flex">
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full
            max-lg:w-[36px] max-lg:h-[36px]"></div>
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full -ml-4
            max-lg:w-[36px] max-lg:h-[36px]"></div>
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full -ml-4
            max-lg:w-[36px] max-lg:h-[36px]"></div>
          </div>

          <div className="w-[150px] h-[1px] bg-gray-600 max-lg:w-16"></div>
        </div>

      </div>

    </main>
  );
}