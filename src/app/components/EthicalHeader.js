export default function EthicalHeader() {
  return (
    <main className="relative h-screen overflow-visible bg-[#0a0a0a] text-white">

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

      {/* LEFT GREEN GLOW */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-[800px] h-[800px] left-[-200px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200,255,0,0.25) 0%, rgba(200,255,0,0.1) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* RIGHT ROTATING CIRCLE WITH TEXT */}
      <div className="absolute right-[120px] top-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center">

        {/* BLACK BACKGROUND */}
        <div className="absolute w-full h-full bg-black rounded-full"></div>

        {/* ROTATING TEXT */}
        <svg
          className="circle-rotate w-full h-full relative z-10"
          viewBox="0 0 200 200"
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 100,100
                m -85,0
                a 85,85 0 1,1 170,0
                a 85,85 0 1,1 -170,0
              "
            />
          </defs>

          <text
            fill="#ffffff"
            fontSize="16"
            letterSpacing="4"
            fontWeight="500"
          >
            <textPath href="#circlePath">
              DIGITAL • AGENCY • CREATIVE • DIGITAL • AGENCY • CREATIVE •
            </textPath>
          </text>
        </svg>

        {/* CENTER ICON */}
        <div className="absolute w-12 h-12 bg-lime-400 flex items-center justify-center rotate-45 z-20">
          <div className="w-3 h-3 bg-black"></div>
        </div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 pl-[180px] pt-[120px] ">

        {/* INTRO */}
        <div className="flex items-center gap-6 text-gray-300 text-sm mt-20">
          <span>Detail Presentation</span>
          <div className="w-[120px] h-[1px] bg-gray-600"></div>
        </div>

        {/* TITLE */}
        <div className="relative mt-0 h-[220px]">

          <h1 className="mb-20 text-[160px] font-extrabold leading-[1] tracking-tight">
            Project
          </h1>

          <h1 className="absolute left-[380px] top-[190px] text-[160px] font-extrabold leading-[0.85] tracking-tight">
           Details

          </h1>

        </div>

        {/* CIRCLES */}
        <div className="flex absolute items-center circles-move">

          <div className="flex">
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full"></div>
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full -ml-4"></div>
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full -ml-4"></div>
          </div>

          <div className="ml-0 w-[150px] h-[1px] bg-gray-600"></div>

        </div>

      </div>

    </main>
  );
}