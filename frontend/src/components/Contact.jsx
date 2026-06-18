import { ExternalLink, Send, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fade = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Name is required";
    else if (form.name.trim().length < 2) e.name = "Name too short";

    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";

    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message too short";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const mailtoLink = `mailto:akshatd845@gmail.com?subject=${encodeURIComponent(
      `Portfolio message from ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    window.location.href = mailtoLink;

    setForm({ name: "", email: "", message: "" });
    setToast({ type: "success", text: "Opening your email client ✓" });
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-8 mx-auto py-20 max-w-6xl">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(39,203,203,0.08),transparent_40%)]" />

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={fade} initial="hidden" whileInView="show">
          <h2 className="text-5xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-gray-100 to-gray-400">
            Let&apos;s work together
          </h2>

          <p className="mt-6 text-gray-400 max-w-md text-lg">
            Have an opportunity or project in mind? Send a quick message — I
            usually respond within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
            <motion.a
              whileHover={{ x: 6 }}
              href="mailto:akshatd845@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm"
            >
              <Mail className="text-2xl text-[#27CBCB]" />
              <div>
                <p className="font-medium text-gray-200">Email</p>
                <p className="text-sm text-gray-400">akshatd845@gmail.com</p>
              </div>
              <ExternalLink className="ml-auto opacity-60" size={16} />
            </motion.a>

            <motion.a
              whileHover={{ x: 6 }}
              href="https://github.com/akshatd845-maker"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm"
            >
              <FaGithub className="text-2xl" />
              <div>
                <p className="font-medium text-gray-200">GitHub</p>
                <p className="text-sm text-gray-400">Explore my projects</p>
              </div>
              <ExternalLink className="ml-auto opacity-60" size={16} />
            </motion.a>

            <motion.a
              whileHover={{ x: 6 }}
              href="https://linkedin.com/in/akshatdixit001"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm"
            >
              <FaLinkedin className="text-2xl text-blue-400" />
              <div>
                <p className="font-medium text-gray-200">LinkedIn</p>
                <p className="text-sm text-gray-400">Let&apos;s connect professionally</p>
              </div>
              <ExternalLink className="ml-auto opacity-60" size={16} />
            </motion.a>

            <motion.div
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm"
            >
              <MapPin className="text-2xl text-[#26D868]" />
              <div>
                <p className="font-medium text-gray-200">Location</p>
                <p className="text-sm text-gray-400">Lucknow, India</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.form
          variants={fade}
          initial="hidden"
          whileInView="show"
          onSubmit={handleSubmit}
          className="p-8 rounded-3xl border border-gray-800 bg-linear-to-b from-gray-900/60 to-gray-900/30 backdrop-blur-xl space-y-5"
        >
          <h3 className="text-2xl font-semibold text-gray-200">
            Send a Message
          </h3>

          <div>
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-[#27CBCB] outline-none transition-colors text-gray-200 placeholder-gray-500"
            />
            {errors.name && (
              <p className="text-sm text-red-400 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-[#27CBCB] outline-none transition-colors text-gray-200 placeholder-gray-500"
            />
            {errors.email && (
              <p className="text-sm text-red-400 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-[#27CBCB] outline-none transition-colors text-gray-200 placeholder-gray-500 resize-none"
            />
            {errors.message && (
              <p className="text-sm text-red-400 mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#27CBCB] hover:bg-[#1fb3b3] text-gray-900 font-semibold transition-colors"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>

          {toast && (
            <p className={`text-sm text-center ${toast.type === "success" ? "text-[#26D868]" : "text-red-400"}`}>
              {toast.text}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
