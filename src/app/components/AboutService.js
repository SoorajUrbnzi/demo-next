export default function ServicesSection() {

  const services = [
    {
      title: "Web Development",
      img: "/SERVER VAPT.jpg"
    },
    {
      title: "Branding & Identity",
      img: "/shield key.jpg"
    },
    {
      title: "UX/UI Design",
      img: "/blog2.png"
    },
    {
      title: "Analytics & Strategy",
      img: "/blog4.jpg"
    }
  ];

  return (
    <section className="relative bg-black text-white py-16 lg:py-28 px-4 lg:px-20 overflow-hidden">

      {/* right glow */}
      <div className="absolute right-0 top-0 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-lime-500 blur-[200px] opacity-20"></div>

      <div className="max-w-6xl mx-auto">

        {/* small label */}
        <div className="flex items-center gap-4 lg:gap-5 mb-4 lg:mb-6">
          <span className="text-gray-400 text-xs lg:text-sm uppercase tracking-widest">
            Services
          </span>
          <div className="w-10 lg:w-16 h-[1px] bg-gray-600"></div>
        </div>

        {/* title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[72px] font-bold mb-4 lg:mb-0">
          Expertise Solutions
        </h2>

        {/* services list */}
        <div>
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-between py-6 lg:py-10 border-b border-gray-800 hover:border-gray-600 transition"
            >

              {/* left text */}
              <div className="flex items-center gap-3 lg:gap-5 text-base sm:text-lg lg:text-2xl font-semibold">

                <span className="text-gray-400">
                  {String(index + 1).padStart(2, "0")}.
                </span>

                <span className="group-hover:text-lime-400 transition">
                  {service.title}
                </span>

              </div>

              {/* circle arrow */}
              <div className="w-8 h-8 lg:w-12 lg:h-12 border border-gray-700 rounded-full flex items-center justify-center group-hover:border-lime-400 transition text-sm lg:text-base">
                ↗
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}