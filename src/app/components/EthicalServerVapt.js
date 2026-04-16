"use client";

import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
        w-full h-full bg-black/20 flex items-center justify-center

        /* ✅ MOBILE FIX */
        max-lg:px-4
        max-lg:text-center
      "
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          text-white text-5xl font-bold

          /* ✅ MOBILE FIX */
          max-lg:text-2xl
        "
        >
          
        </motion.h1>
      </motion.div>
    </section>
  );
}