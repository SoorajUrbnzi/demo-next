export default function ProjectTestimonial() {
  return (
    <section className="relative overflow-hidden py-32 px-8 lg:px-24 text-white bg-[#0b0b0b]">

      {/* subtle dark glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.04),transparent_40%)]"></div>

      {/* LIME CORNER GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_8%,rgba(201,243,29,0.28),transparent_32%)]"></div>

      <div className="relative z-10">

        {/* label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-gray-400 text-sm">Testimonials</span>
          <div className="w-20 h-[1px] bg-gray-600"></div>
        </div>

        {/* heading */}
        <h2 className="text-[130px] font-bold leading-none mb-24 tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          What my clients say
        </h2>

        <div className="grid lg:grid-cols-2 items-center gap-20">

          <div>

            <div className="text-[#C9F31D] text-[80px] mb-12 font-bold leading-none">
              “”
            </div>

            <p className="text-gray-300 text-3xl leading-relaxed max-w-5xl mb-10">
              Working with Pentos is a fantastic experience. He truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were beyond my imagination.
            </p>

            <div>
              <p className="font-semibold text-xl">Cameron Williamson</p>
              <p className="text-gray-400 text-sm">CEO, Ishkon</p>
            </div>

          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/SERVER VAPT.jpg"
              alt="client"
              className="w-[420px] h-[420px] object-cover rotate-[12deg] rounded-md shadow-[0_40px_90px_rgba(0,0,0,0.8) mx-[200px]"
            />
          </div>

        </div>

      </div>

    </section>
  );
}