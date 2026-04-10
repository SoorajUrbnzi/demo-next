"use client";
import { useState } from "react";

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

      // ✅ CLEAR FORM AFTER SUBMIT
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
    <section className="bg-black text-white py-28 px-10">

      <div className="max-w-7xl mx-auto">

        {/* SMALL TITLE */}
        <div className="flex items-center gap-6 mb-10">
          <p className="text-gray-400 text-lg font-medium">
            Estimate Your Project
          </p>

          <div className="w-24 h-[1px] bg-gray-700"></div>
        </div>

        {/* MAIN HEADING */}
        <h1 className="text-[90px] md:text-[120px] font-bold leading-none text-gray-200">
          Get in touch
        </h1>

      </div>


      {/* ================= CONTACT FORM SECTION ================= */}
      <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT - COMPANY INFO */}
        <div className="bg-[#0d0d0d] p-12 border border-gray-800">

          <h2 className="text-3xl font-semibold mb-10">
            Company Info
          </h2>

          <div className="space-y-10 text-lg">

            <div>
              <div className="text-lime-400 text-2xl mb-3">📞</div>
              <p className="font-semibold">(704) 555-0127</p>
            </div>

            <div>
              <div className="text-lime-400 text-2xl mb-3">✉️</div>
              <p className="font-semibold">hello@pentaclay.com</p>
            </div>

            <div>
              <div className="text-lime-400 text-2xl mb-3">📍</div>
              <p className="font-semibold leading-relaxed">
                8502 Preston Rd. Inglewood,<br />
                Maine 98380
              </p>
            </div>

          </div>
        </div>


        {/* RIGHT - FORM */}
        <div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

            <div>
              <label className="block mb-3 text-lg">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 outline-none py-2"
              />
            </div>

            <div>
              <label className="block mb-3 text-lg">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 outline-none py-2"
              />
            </div>

            <div>
              <label className="block mb-3 text-lg">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full bg-transparent border-b border-gray-700 outline-none py-2 text-gray-400"
              />
            </div>

            <div>
              <label className="block mb-3 text-lg">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 outline-none py-2"
              />
            </div>

          </div>

          <div className="mb-12">
            <label className="block mb-3 text-lg">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write here...."
              className="w-full bg-transparent border-b border-gray-700 outline-none py-2 h-24 text-gray-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-lime-400 text-black px-10 py-4 font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            {submitted ? "THANK YOU" : "SEND MESSAGE ↗"}
          </button>

        </div>

      </div>

    </section>
  );
}