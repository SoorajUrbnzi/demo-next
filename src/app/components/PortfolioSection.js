export default function PortfolioSection() {

  const projects = [
    {
      image: "/ethical-hacking.webp",
      title: "Ethical Hacking",
    },
    {
      image: "/SERVER VAPT.jpg",
      title: "Server VAPT",
    },
    {
      image: "/shield key.jpg",
      title: "Shield Key",
    },
    {
      image: "/simultaneous.jpg",
      title: "Simultaneous Security",
    },
  ];

  return (
    <section className="bg-black text-white py-28 max-lg:py-16">

      {/* TITLE */}
      <div className="text-center mb-20 max-lg:mb-10">
        <h2 className="text-[180px] font-bold flex justify-center items-center gap-4 
        max-lg:text-[48px] max-lg:gap-2">
          PORTFOLIO
          <span className="text-lime-400 text-[120px] max-lg:text-[40px]">✦</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 
      max-lg:grid-cols-1 max-lg:gap-6 max-lg:px-4">

        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden ${index % 2 !== 0 ? "mt-13" : ""} 
            max-lg:mt-0`}
          >

            {/* IMAGE */}
            <img
              src={project.image}
              alt=""
              className="w-full h-[660px] object-cover transition duration-500 group-hover:scale-110 
              max-lg:h-[300px]"
            />

            {/* DARK HOVER OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* CENTER BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">

              <div className="bg-lime-400 text-black text-sm font-semibold px-5 py-3 rounded-full 
              max-lg:px-4 max-lg:py-2 max-lg:text-xs">
                VIEW ↗
              </div>

            </div>

            {/* BOTTOM TITLE */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">

              <div className="bg-lime-400 text-black px-6 py-2 text-sm font-semibold 
              max-lg:px-4 max-lg:py-1 max-lg:text-xs">
                {project.title}
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* ALL PROJECTS BUTTON */}
      <div className="flex justify-center mt-32 max-lg:mt-16">

        <div className="relative group w-[130px] h-[130px] rounded-full border border-gray-700 flex items-center justify-center cursor-pointer overflow-hidden
        max-lg:w-[90px] max-lg:h-[90px]">

          {/* lime hover edge */}
          <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-lime-400 rounded-full transition-all duration-500 group-hover:w-[340px] group-hover:h-[340px]"></div>

          <span className="relative z-10 flex items-center gap-2 text-white text-lg font-semibold 
          max-lg:text-sm max-lg:gap-1">
            All Projects ↗
          </span>

        </div>

      </div>

    </section>
  );
}