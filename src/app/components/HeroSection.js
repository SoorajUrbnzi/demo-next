export default function Home() {
  return (
    <main className="relative h-screen overflow-visible bg-[#0a0a0a] text-white">

      {/* RIGHT BACKGROUND IMAGE */}
      <div className="absolute right-0 top-0 h-full w-[45%] opacity-80 pointer-events-none mt-3 0">
        <img
          src="/mtr-removebg-preview.png"
          alt="background"
          className="object-cover w-full h-full mix-blend-lighten"
        />
      </div>

      {/* RADIAL CURVED LINES (STOP AT CENTER) */}
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

      {/* CONTENT */}
      <div className="relative z-10 pl-[180px] pt-[120px]">

        {/* INTRO */}
        <div className="flex items-center gap-6 text-gray-300 text-sm flex items-center mt[80]">
          <span>Hey There! Albert Wilson Here</span>
          <div className="w-[100px] h-[1px] bg-gray-600"></div>
        </div>

        {/* TITLE */}
        <div className="relative mt-0 h-[220px]">

          <h1 className="mb-20 text-[160px] font-extrabold leading-[1] tracking-tight">
            DESIGN
          </h1>

          {/* SPINNING STAR */}
          <div className="absolute left-180 top-[40] drop-shadow-[0_0_8px_#c8ff00] star-spin">
            <svg
              width="70"
              height="70"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#c8ff00" strokeWidth="2">
                <line x1="30" y1="0" x2="30" y2="60" />
                <line x1="0" y1="30" x2="60" y2="30" />
                <line x1="8" y1="8" x2="52" y2="52" />
                <line x1="52" y1="8" x2="8" y2="52" />
              </g>
            </svg>
          </div>

          <h1 className="absolute left-[400px] top-[200px] text-[160px] font-extrabold leading-[0.85] tracking-tight">
            PARTNER
          </h1>

        </div>

        <div className="flex absolute items-center circles-move">

          <div className="flex">
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full"></div>
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full -ml-4"></div>
            <div className="w-[74px] h-[74px] border border-lime-400 rounded-full -ml-4"></div>
          </div>

          <div className="ml-0 w-[150px] h-[1px] bg-gray-600"></div>

        </div>

        {/* TEXT */}
        <p className="mt-12 text-gray-300 leading-relaxed max-w-[520px] flex items-center mt-[150px]">
          I believe in the power of innovation and creativity to transform your
          ideas into exceptional digital experiences. Working closely with you,
          I strive to bring your vision to life.
        </p>

        {/* BUTTON */}
        <button className="relative w-27 h-27 rounded-full border border-gray-600 flex items-center justify-center text-sm tracking-wide transition-all duration-300 hover:bg-lime-400 hover:text-black hover:border-lime-400 mt-20">

          ABOUT ME ↗

          <span className="absolute bottom-3 left-4 w-5 h-5 bg-lime-400 rounded-full"></span>

        </button>

      </div>
    </main>
  );
}