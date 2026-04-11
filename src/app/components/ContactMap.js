export default function MapSection() {
  return (
    <div className="w-full h-[320px] sm:h-[400px] md:h-[500px] relative">

      {/* ✅ OPEN IN MAP BUTTON */}
      <a
        href="https://www.google.com/maps?q=Framer+B.V,+Amsterdam"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 left-3 md:top-4 md:left-4 
                   bg-white text-black 
                   px-3 py-1.5 md:px-4 md:py-2 
                   rounded-md text-xs md:text-sm 
                   font-medium shadow"
      >
        Open in map ↗
      </a>

      {/* MAP */}
      <iframe
        src="https://www.google.com/maps?q=Framer+B.V,+Amsterdam&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
      ></iframe>

    </div>
  );
}