export default function ProjectScroll() {
  return (
    <section className="bg-black overflow-hidden py-20 max-lg:py-10">

      <div className="marquee flex whitespace-nowrap font-bold text-white 
      text-[80px] 
      max-lg:text-[28px] max-lg:gap-6">

        <span className="mx-10 max-lg:mx-3">✦ Digital</span>
        <span className="mx-10 max-lg:mx-3">✦ Creative</span>
        <span className="mx-10 max-lg:mx-3">✦ Designer</span>

        {/* duplicate for infinite loop */}
        <span className="mx-10 max-lg:mx-3">✦ Digital</span>
        <span className="mx-10 max-lg:mx-3">✦ Creative</span>
        <span className="mx-10 max-lg:mx-3">✦ Designer</span>

      </div>

    </section>
  );
}