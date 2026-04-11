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
    <section className="relative bg-black text-white py-28 px-8 lg:px-20 overflow-hidden max-lg:py-16 max-lg:px-5">

      {/* right glow */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-lime-500 blur-[200px] opacity-20"></div>

      <div className="max-w-6xl mx-auto">

        {/* small label */}
        <div className="flex items-center gap-5 mb-6 max-lg:gap-3 max-lg:mb-4">
          <span className="text-gray-400 text-sm uppercase tracking-widest mb-0 max-lg:text-xs">
            Services
          </span>
          <div className="w-16 h-[1px] bg-gray-600 mb-0 max-lg:w-10"></div>
        </div>

        {/* title */}
        <h2 className="text-[72px] font-bold mb-0 max-lg:text-[32px] max-lg:leading-[40px]">
          Expertise Solutions
        </h2>

        {/* services list */}
        <div>

          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-between py-10 mt-0 border-b border-gray-800 hover:border-gray-600 transition max-lg:py-6"
            >

              {/* left text */}
              <div className="flex items-center gap-3 text-2xl font-semibold max-lg:text-base">

                <span className="text-gray-400">
                  {String(index + 1).padStart(2, "0")}.
                </span>

                <span className="group-hover:text-lime-400 transition">
                  {service.title}
                </span>

              </div>

              {/* circle arrow */}
              <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center group-hover:border-lime-400 transition max-lg:w-9 max-lg:h-9">
                ↗
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}