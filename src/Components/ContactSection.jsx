import React, { useState } from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_f36kguk",       // replace with your Service ID
        "template_9keybmv",      // replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "prabeshb655@gmail.com",
        },
        "UQfu7PphcSsJPNYmC"        // replace with your Public Key
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-4 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Let's <span className="text-primary">Connect.</span>
          </h2>
          <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Info side */}
          <div className="space-y-8 pr-0 md:pr-8">
            <p className="text-gray-400 text-lg leading-relaxed">
              Have any Project or you need help with development, feel free to contact me.😊
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-bold text-white text-base">Email</h4>
                  <a href="mailto:prabeshb635@gmail.com" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    prabeshb635@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-bold text-white text-base">Phone</h4>
                  <a href="tel:+9779763721815" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    +977-9763721815
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-bold text-white text-base">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/prabesh-bhandari-766a10361" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    linkedin.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-bold text-white text-base">Location</h4>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Kerabari-8+Morang,+Nepal" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    Kerabari-8 Morang, Nepal
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form side */}
          <div className="bg-[#1b223c] rounded-2xl p-8 border border-gray-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-800 bg-[#252c48] text-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-800 bg-[#252c48] text-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-800 bg-[#252c48] text-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 resize-none"
                  placeholder="Your Message ...."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {/* Success / Error Messages */}
              {status === "sent" && (
                <p className="text-green-400 text-sm text-center font-medium mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center font-medium mt-2">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;