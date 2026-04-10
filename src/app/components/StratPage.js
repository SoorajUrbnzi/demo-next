"use client";

export default function StratPage() {
  return (
    <section className="bg-black text-white py-24 px-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-2">

          {/* Top Meta */}
          <div className="flex items-center gap-6 text-gray-400 mb-6 text-sm">
            <span>📁 Design</span>
            <span>📅 Aug 13, 2024</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Effective Strategies to Boost Your Online
          </h1>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-800 mb-8"></div>

          {/* Paragraph 1 */}
          <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
            Choosing Pentos means choosing a partner who is dedicated to your success.
            Our passion for what we do, combined with our expertise and innovative approach,
            sets us apart from the competition. We are not just service providers; we are
            problem solvers, innovators, and collaborators who are deeply invested in helping
            you achieve your vision.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-300 text-xl leading-relaxed max-w-4xl mb-10">
            Founded on the principles of creativity, integrity, and results, Dxtree is
            comprised of a diverse team of expert in digital marketing, web development,
            UX/UI design, branding, and more. Our team brings together a wealth of experience
            and a deep understanding of the latest trends and technologies to deliver
            cutting-edge solutions tailored to your unique needs.
          </p>

          {/* BIG IMAGE */}
          <img
            src="/SERVER VAPT.jpg"
            alt="Blog Image"
            className="w-full h-[420px] object-cover"
          />

        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="space-y-10">

          {/* SUBSCRIBE */}
          <div className="bg-[#0d0d0d] p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6">Subscribe</h3>

            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent outline-none text-gray-400 w-full"
              />
              <button className="ml-4 w-12 h-12 bg-lime-400 text-black flex items-center justify-center rounded-full">
                →
              </button>
            </div>
          </div>

          {/* SERVICES */}
          <div className="bg-[#0d0d0d] p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6">Services</h3>

            <div className="space-y-5">
              {[
                "Web Development",
                "Branding & Identity",
                "UX/UI Design",
                "Analytics & Strategies",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-black p-5 border border-gray-800 hover:border-lime-400 transition cursor-pointer"
                >
                  <span>{item}</span>
                  <span>↗</span>
                </div>
              ))}
            </div>
          </div>

          {/* INSTAGRAM */}
          <div className="bg-[#0d0d0d] p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6">Instagram</h3>

            <div className="grid grid-cols-3 gap-4">
              <img src="/simultaneous.jpg" className="w-full h-24 object-cover" />
              <img src="/shield key.jpg" className="w-full h-24 object-cover" />
              <img src="/SERVER VAPT.jpg" className="w-full h-24 object-cover" />
              <img src="/ethical-hacking.webp" className="w-full h-24 object-cover" />
              <img src="/simultaneous.jpg" className="w-full h-24 object-cover" />
              <img src="/shield key.jpg" className="w-full h-24 object-cover" />
            </div>
          </div>

        </div>

      </div>

      {/* ================= SUCCESS JOURNEY (ADDED) ================= */}
      <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* LEFT */}
        <div className="lg:col-span-2">

          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Success Journey We can Provide
            </h2>
            <div className="flex-1 h-[1px] bg-gray-800 relative">
              <span className="absolute right-0 w-20 h-[2px] bg-lime-400"></span>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">
              01. Boosted Online Visibility
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>• We ensure your business gets noticed by optimizing your presence on search engines and social media.</li>
              <li>• Through engaging digital experiences, we enhance user satisfaction and growth.</li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">
              02. Tailored Marketing Strategies
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>• Our goal is to help you build standout products in the digital space.</li>
              <li>• We craft strategies tailored to your unique business needs.</li>
            </ul>
          </div>

          <p className="text-gray-400 max-w-4xl">
            We believe in the power of clear, strategic thinking. By collaborating closely with you,
            we define your brand’s mission, vision, and values.
          </p>

        </div>

        {/* RIGHT CONTACT BOX */}
        <div className="bg-gradient-to-br from-black to-lime-900 p-10 rounded-lg text-center h-80">

          <h3 className="text-2xl font-semibold mb-6">
            Contact with us for any advice
          </h3>

          <div className="w-20 h-20 mx-auto bg-lime-400 text-black flex items-center justify-center rounded-full text-3xl mb-6">
            📞
          </div>

          <p className="text-white font-medium">
            09 : 00 AM - 10 : 30 PM
          </p>

          <p className="text-gray-300 text-sm">
            Saturday - Thursday
          </p>

        </div>

      </div>

    </section>
  );
}