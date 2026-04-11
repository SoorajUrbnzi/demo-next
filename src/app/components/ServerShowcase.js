export default function ServerShowcase() {
  return (
    <section
      className="w-full h-screen bg-center bg-cover bg-no-repeat
      max-lg:h-[60vh]"
      style={{
        backgroundImage: "url('/showcase.webp')",
      }}
    >
      {/* Optional overlay */}
      <div className="w-full h-full bg-black/20 flex items-center justify-center
      max-lg:px-6 max-lg:text-center">

        <h1 className="text-white text-5xl font-bold
        max-lg:text-2xl">
        
        </h1>

      </div>
    </section>
  );
}