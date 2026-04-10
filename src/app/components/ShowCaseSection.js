import React from "react";

export default function ShowcaseSection() {
  return (
    <section className="w-full">
      <div className="w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <img
          src="/showcase.webp"
          alt="Showcase"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}