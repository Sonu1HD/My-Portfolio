import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"; // Install lucide-react

const Contact = () => {
  const [formData, setFormData] = useState({ username: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://my-portfolio-backend-a77b.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("Success! I'll get back to you soon. ✅");
        setFormData({ username: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. ❌");
      }
    } catch (error) {
      setStatus("Error connecting to server. ❌");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,#1e1b4b,#020617)] py-20 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Let's <span className="text-indigo-400">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Reach out and let's build something amazing together.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: <Mail className="text-indigo-400" />, label: "Email", value: "hello@yourdomain.com" },
              { icon: <Phone className="text-indigo-400" />, label: "Phone", value: "+1 (234) 567-890" },
              { icon: <MapPin className="text-indigo-400" />, label: "Location", value: "Delhi, India" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-indigo-500/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          {/* Decorative Glow Background */}
          <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="text-sm text-indigo-200 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm text-indigo-200 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-indigo-200 ml-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {status && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm mt-4 text-indigo-300">
                  {status}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;