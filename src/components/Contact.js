import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_exc4y7v",
        "template_jmqiqdp",
        e.target,
        "pMY4Ak4bOaLXfF7ja"
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        e.target.reset();

        setTimeout(() => setSent(false), 3000);
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong ❌");
      });
  };

  return (
    <section id="contact" className="py-24 flex justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

      <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-10 w-full max-w-lg text-white">

        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

        <form onSubmit={sendEmail} className="space-y-6">

          {/* Name */}
          <div className="relative">
            <input
              name="name"
              required
              className="peer w-full bg-transparent border-b-2 border-white focus:outline-none"
            />
            <label className="absolute left-0 top-0 text-white/70 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full bg-transparent border-b-2 border-white focus:outline-none"
            />
            <label className="absolute left-0 top-0 text-white/70 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs">
              Email Address
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              required
              rows="3"
              className="peer w-full bg-transparent border-b-2 border-white focus:outline-none"
            />
            <label className="absolute left-0 top-0 text-white/70 text-sm transition-all peer-focus:-top-5 peer-focus:text-xs">
              Your Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-indigo-700 font-semibold py-3 rounded-lg transition transform hover:scale-105 active:scale-95"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success Popup */}
        {sent && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow animate-bounce">
            Message Sent Successfully ✅
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

