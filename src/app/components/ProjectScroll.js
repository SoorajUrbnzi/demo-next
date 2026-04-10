export default function ProjectScroll() {
  return (
    <section className="bg-black overflow-hidden py-20">

      <div className="marquee flex whitespace-nowrap text-[80px] font-bold text-white">

        <span className="mx-10">✦ Digital</span>
        <span className="mx-10">✦ Creative</span>
        <span className="mx-10">✦ Designer</span>

        {/* duplicate for infinite loop */}
        <span className="mx-10">✦ Digital</span>
        <span className="mx-10">✦ Creative</span>
        <span className="mx-10">✦ Designer</span>

      </div>

    </section>
  );
}