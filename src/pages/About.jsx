import React, { useEffect } from "react";
import Header from "../components/Header";
import { useTheme } from "../context/ThemeContext";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

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

        {/* About Card */}
        <div
          data-aos="zoom-in"
          className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >

          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-14">

            {/* Badge */}
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 text-sm font-semibold"
            >
              About Project
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-6 text-5xl md:text-6xl font-extrabold text-white tracking-tight"
            >
              About This App
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 text-lg text-gray-300 leading-9 max-w-3xl"
            >
              This is a modern and responsive
              <span className="text-cyan-400 font-semibold">
                {" "}React Task Manager Application
              </span>
              {" "}built using powerful frontend technologies to
              create a smooth and interactive user experience.
            </p>

            {/* Features Grid */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="grid md:grid-cols-2 gap-6 mt-12"
            >

              {/* React */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">

                <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                  ⚛ React JS
                </h2>

                <p className="text-gray-300 leading-7">
                  Component-based architecture for building
                  scalable and reusable UI interfaces.
                </p>

              </div>

              {/* Tailwind */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">

                <h2 className="text-2xl font-bold text-sky-400 mb-3">
                  🎨 Tailwind CSS
                </h2>

                <p className="text-gray-300 leading-7">
                  Utility-first CSS framework used to design
                  modern, responsive, and professional layouts.
                </p>

              </div>

              {/* Router */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">

                <h2 className="text-2xl font-bold text-pink-400 mb-3">
                  🔗 React Router
                </h2>

                <p className="text-gray-300 leading-7">
                  Smooth page navigation with protected routes
                  and better application structure.
                </p>

              </div>

              {/* AOS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">

                <h2 className="text-2xl font-bold text-green-400 mb-3">
                  ✨ AOS Animation
                </h2>

                <p className="text-gray-300 leading-7">
                  Scroll-based animations that improve user
                  interaction and visual experience.
                </p>

              </div>

            </div>

            {/* Footer */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-12 text-center"
            >

              <p className="text-gray-400 text-lg">
                Built with ❤️ using modern frontend technologies
              </p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;