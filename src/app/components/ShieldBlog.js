export default function ShieldBlog() {
  return (
    <section
      className="w-full h-screen bg-center bg-cover bg-no-repeat 
      max-lg:h-[60vh] max-sm:h-[50vh]"
      style={{
        backgroundImage: "url('/blog1.webp')",
      }}
    >
      {/* Optional overlay */}
      <div className="w-full h-full bg-black/20 flex items-center justify-center px-4">

        <h1 className="text-white text-5xl font-bold 
        max-lg:text-3xl max-sm:text-2xl text-center">
          
        </h1>

      </div>
    </section>
  );
}