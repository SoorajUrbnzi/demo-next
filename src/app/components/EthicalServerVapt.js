export default function EthicalServerVapt() {
  return (
    <section
      className="
        w-full h-screen bg-center bg-cover bg-no-repeat

        /* ✅ MOBILE FIX */
        max-lg:h-[80vh]
      "
      style={{
        backgroundImage: "url('/SERVER VAPT.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="
        w-full h-full bg-black/20 flex items-center justify-center

        /* ✅ MOBILE FIX */
        max-lg:px-4
        max-lg:text-center
      ">
        <h1 className="
          text-white text-5xl font-bold

          /* ✅ MOBILE FIX */
          max-lg:text-2xl
        ">
          
        </h1>
      </div>
    </section>
  );
}