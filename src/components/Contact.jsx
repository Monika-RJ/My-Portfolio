import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import backgroundVideo from "../assets/7234993-uhd_3840_2160_30fps.mp4";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative min-h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="relative z-10 bg-[#FFFFFF] bg-opacity-80 max-w-[95%] md:max-w-[80%] mx-auto font-inter space-y-10 py-10 rounded-lg px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#ca03fc]">
            Get in touch
          </h2>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-[150px] justify-center">
          <div className="flex flex-col space-y-5 text-lg md:text-xl font-semibold">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#ca03fc]" size={20} />
              <span>Salem</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#ca03fc]" size={20} />
              <span>9788583223</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#ca03fc]" size={20} />
              <span>monikajothi07@gmail.com</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-xl font-bold">Follow on</h2>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Monika-RJ"
                  className="hover:text-[#d48dfc]"
                >
                  <FaGithub size={29} />
                </a>
                <a
                  href="https://www.linkedin.com/in/monika-r-j/"
                  className="hover:text-[#d48dfc]"
                >
                  <FaLinkedin size={29} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-[#ca03fc] text-center">
              Send a Message
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-3 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-[#ca03fc] text-white py-3 rounded-md font-semibold hover:bg-[#d44810] disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {success === true && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
            {success === false && (
              <p className="text-red-500 text-center">
                Failed to send the message. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
