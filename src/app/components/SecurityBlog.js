export default function SecurityBlog() {
  return (
    <section
      className="w-full min-h-[45vh] sm:min-h-[55vh] md:h-screen 
      bg-top md:bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/blog2.png')",
      }}
    >
      {/* Optional overlay */}
      <div className="w-full h-full bg-black/20 flex items-center justify-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          
        </h1>
      </div>
    </section>
  );
}