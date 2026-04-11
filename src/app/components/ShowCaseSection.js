import React from "react";

export default function ShowcaseSection() {
  return (
    <section className="w-full">
      <div className="w-full h-[260px] sm:h-[360px] md:h-[600px] lg:h-[700px]">
        <img
          src="/showcase.webp"
          alt="Showcase"
          className="w-full h-full object-cover object-center sm:object-top md:object-cover"
        />
      </div>
    </section>
  );
}