import React, { useEffect } from "react";
import Header from "../components/Header";
import { useTheme } from "../context/ThemeContext";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  const { darkMode } = useTheme();

  // AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (

    <div className={`min-h-screen px-4 py-10 transition-all duration-500 ${darkMode ? "bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950" : "bg-gradient-to-br from-slate-100 via-white to-slate-200"}`}>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          data-aos="fade-down"
          className="mb-8"
        >
          <Header />
        </div>

        {/* Contact Card */}
        <div
          data-aos="zoom-in"
          className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >

          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-14">

            {/* Heading */}
            <div className="text-center mb-12">

              <div
                data-aos="fade-up"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-semibold"
              >
                Get In Touch
              </div>

              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="mt-6 text-5xl md:text-6xl font-extrabold text-white tracking-tight"
              >
                Contact Me
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-8"
              >
                Feel free to connect with me for React JS,
                Frontend Development, MERN Stack, and
                modern web application projects 🚀
              </p>

            </div>

            {/* Contact Information */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="grid md:grid-cols-3 gap-6"
            >

              {/* Email Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">

                <div className="text-4xl mb-4">
                  📧
                </div>

                <h2 className="text-xl font-bold text-white mb-2">
                  Email
                </h2>

                <p className="text-gray-300 break-all">
                  naninarendra2000@gmail.com
                </p>

              </div>

              {/* Phone Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">

                <div className="text-4xl mb-4">
                  📱
                </div>

                <h2 className="text-xl font-bold text-white mb-2">
                  Phone
                </h2>

                <p className="text-gray-300">
                  6300044926
                </p>

              </div>

              {/* Location Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">

                <div className="text-4xl mb-4">
                  📍
                </div>

                <h2 className="text-xl font-bold text-white mb-2">
                  Location
                </h2>

                <p className="text-gray-300">
                  Andhra Pradesh, India
                </p>

              </div>

            </div>

            {/* Bottom Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-12 text-center"
            >

              <button className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                Let's Connect
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;