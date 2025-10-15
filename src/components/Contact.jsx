import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Your actual keys directly (CRA doesn’t use import.meta.env)
    const serviceID = "service_v461acb";
    const contactTemplate = "template_grjh0tj";
    const autoReplyTemplate = "template_pzotbxi";
    const publicKey = "wm4EDvNOVj59Kzyz0";

    // grab field values
    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    try {
      // 1️⃣ Send the main message to YOU
      await emailjs.sendForm(serviceID, contactTemplate, formRef.current, publicKey);

      // 2️⃣ Send auto-reply to the user — now includes message text
      await emailjs.send(
        serviceID,
        autoReplyTemplate,
        {
          user_name: name,
          user_email: email,
          message: message, // ← include this
        },
        publicKey
      );

      setSent(true);
      setLoading(false);
      e.target.reset();
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("Email failed:", error);
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
        >
          📬 Contact ATL Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 mb-12"
        >
          I’d love to hear from you! Whether it’s a project idea, collaboration,
          or just a hello — drop a message below.
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 max-w-lg mx-auto"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-sky-500"
            />
            <textarea
              name="message"
              placeholder="Your Message..."
              rows="5"
              required
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-sky-500 resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className={`mt-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg font-medium shadow-lg hover:opacity-90 transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 mt-3 font-medium"
              >
                ✅ Message sent successfully!
              </motion.p>
            )}
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-sky-500 transition"
          >
            <FaGithub size={30} />
          </a>
        </motion.div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Amanuel Tafese Ligdi. All rights reserved.
        </p>
      </div>
    </section>
  );
}
