"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function ContactHeader() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, phone, message } = form;

    if (firstName && lastName && email && phone && message) {
      setSubmitted(true);

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section className="bg-black text-white py-16 md:py-28 px-4 md:px-10">

      {/* HEADER */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="max-w-7xl mx-auto"
      >

        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10"
        >
          <p className="text-gray-400 text-sm md:text-lg font-medium">
            Estimate Your Project
          </p>

          <div className="w-16 md:w-24 h-[1px] bg-gray-700"></div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-[42px] sm:text-[60px] md:text-[120px] font-bold leading-none text-gray-200"
        >
          Get in touch
        </motion.h1>

      </motion.div>


      {/* FORM SECTION */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        className="max-w-7xl mx-auto mt-12 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16"
      >

        {/* LEFT - COMPANY INFO */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="bg-[#0d0d0d] p-6 md:p-12 border border-gray-800"
        >

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-10">
            Company Info
          </h2>

          <div className="space-y-6 md:space-y-10 text-base md:text-lg">

            <div>
              <div className="text-lime-400 text-xl md:text-2xl mb-2 md:mb-3">📞</div>
              <p className="font-semibold">(704) 555-0127</p>
            </div>

            <div>
              <div className="text-lime-400 text-xl md:text-2xl mb-2 md:mb-3">✉️</div>
              <p className="font-semibold">hello@pentaclay.com</p>
            </div>

            <div>
              <div className="text-lime-400 text-xl md:text-2xl mb-2 md:mb-3">📍</div>
              <p className="font-semibold leading-relaxed">
                8502 Preston Rd. Inglewood,<br />
                Maine 98380
              </p>
            </div>

          </div>
        </motion.div>


        {/* RIGHT - FORM */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-10">

            {["firstName", "lastName", "email", "phone"].map((field, i) => (
              <motion.div key={i} variants={fadeUp}>
                <label className="block mb-2 md:mb-3 text-base md:text-lg capitalize">
                  {field === "firstName"
                    ? "First Name"
                    : field === "lastName"
                    ? "Last Name"
                    : field === "email"
                    ? "Email"
                    : "Phone Number"}
                </label>

                <input
                  type="text"
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 outline-none py-2"
                />
              </motion.div>
            ))}

          </div>

          <motion.div variants={fadeUp} className="mb-8 md:mb-12">
            <label className="block mb-2 md:mb-3 text-base md:text-lg">Message</label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write here...."
              className="w-full bg-transparent border-b border-gray-700 outline-none py-2 h-24 text-gray-400"
            />
          </motion.div>

          <motion.button
            variants={fadeUp}
            onClick={handleSubmit}
            className="bg-lime-400 text-black px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            {submitted ? "THANK YOU" : "SEND MESSAGE ↗"}
          </motion.button>

        </motion.div>

      </motion.div>

    </section>
  );
}