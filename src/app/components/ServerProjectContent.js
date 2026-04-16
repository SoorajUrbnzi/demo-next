"use client";
import { useState, useEffect, useRef } from "react";

export default function ServerProjectContent() {

  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      refs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="bg-black text-white py-28 px-10 max-lg:px-6 max-lg:py-16">

      {/* ================= TOP HEADER ================= */}
      <div
        ref={(el) => (refs.current[0] = el)}
        className="scroll-reveal max-w-7xl mx-auto mb-20 max-lg:mb-12"
      >

        <p className="text-gray-400 mb-3">Technology</p>

        <h1 className="text-6xl font-bold mb-6 max-lg:text-3xl">
          ProBuilder Framer Site
        </h1>

        <div className="w-full h-[1px] bg-gray-800 mb-6"></div>

        <p className="text-gray-400 max-w-3xl leading-relaxed max-lg:text-sm">
          At Pentos, we understand that a strong brand is more than just a logo or a tagline—it's the essence of who you are as a business. Our Branding & Identity services are designed to help you define, develop, and communicate your brand’s unique personality, ensuring it resonates with your target audience and stands out in the marketplace. A successful brand starts with a clear strategy. We work closely with you to understand your business goals, target audience, and market positioning. Together, we define your brand's mission, vision, and values, creating a solid foundation for all your branding efforts.
        </p>

      </div>

      {/* ================= MAIN GRID ================= */}
      <div
        ref={(el) => (refs.current[1] = el)}
        className="scroll-reveal max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 max-lg:gap-10"
      >

        {/* ===== LEFT IMAGE ===== */}
        <div className="max-lg:flex max-lg:justify-center">
          <img
            src="/shield key.jpg"
            alt="Shield Key"
            className="w-full max-w-md h-[580px] object-cover max-lg:h-[320px]"
          />
        </div>

        {/* ===== MIDDLE CONTENT ===== */}
        <div>
          <p className="text-gray-400 mb-6 leading-relaxed mt-40 max-lg:mt-6 max-lg:text-sm">
            Our Branding & Identity services are crafted to help you articulate your brand’s unique identity, ensuring it speaks to your audience with authenticity and impact. We start by deeply understanding your business’s goals, your ideal customers, and the broader market landscape.
          </p>

          <ul className="space-y-4 max-lg:text-sm">
            <li className="flex items-center gap-3">
              <span className="text-lime-400">✔</span>
              Analytics & Strategy
            </li>

            <li className="flex items-center gap-3">
              <span className="text-lime-400">✔</span>
              UX/UI Design
            </li>

            <li className="flex items-center gap-3">
              <span className="text-lime-400">✔</span>
              Branding & Identity
            </li>

            <li className="flex items-center gap-3">
              <span className="text-lime-400">✔</span>
              Web Development
            </li>
          </ul>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="space-y-8">

          <div className="bg-[#111] p-8 rounded-lg border border-gray-800 max-lg:p-6">
            <h3 className="text-xl font-semibold mb-6 max-lg:text-lg">
              Project Information
            </h3>

            <div className="space-y-4 text-gray-400 max-lg:text-sm">

              <div>
                <p className="text-sm">Client:</p>
                <p className="text-white font-medium">Kazi Erfan</p>
              </div>

              <div>
                <p className="text-sm">Category:</p>
                <p className="text-white font-medium">Technology</p>
              </div>

              <div>
                <p className="text-sm">Completed on:</p>
                <p className="text-white font-medium">July 30, 2024</p>
              </div>

              <div>
                <p className="text-sm">Website:</p>
                <p className="text-white font-medium break-all">
                  www.pentaclay.com
                </p>
              </div>

            </div>
          </div>

          <div className="bg-gradient-to-br from-black to-lime-900 p-8 rounded-lg text-center max-lg:p-6">
            <h3 className="text-xl font-semibold mb-6 max-lg:text-lg">
              Contact with us for any advice
            </h3>

            <div className="w-16 h-16 mx-auto bg-lime-400 text-black flex items-center justify-center rounded-full text-2xl max-lg:w-12 max-lg:h-12">
              📞
            </div>

            <p className="mt-4 text-gray-300 text-sm">
              09:00 AM - 10:30 PM
            </p>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM TEXT ================= */}
      <div
        ref={(el) => (refs.current[2] = el)}
        className="scroll-reveal max-w-7xl mx-auto mt-20 max-lg:mt-12"
      >

        <p className="text-gray-400 max-w-4xl leading-relaxed max-lg:text-sm">
          A successful brand starts with a clear strategy. We work closely with you to understand
          your business goals, target audience, and market positioning. Together, we define your
          brand's mission, vision, and values, creating a solid foundation for all your branding efforts.
        </p>

      </div>

      <style jsx>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-reveal.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </section>
  );
}