export default function DesignShowcase() {
  return (
    <section
      className="w-full h-[60vh] sm:h-[70vh] md:h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/showcase.webp')",
      }}
    >
      {/* Optional overlay */}
      <div className="w-full h-full bg-black/20 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          
        </h1>
      </div>
    </section>
  );
}