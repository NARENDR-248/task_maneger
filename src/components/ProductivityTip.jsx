import React, {
  useEffect,
  useState,
} from "react";

import {
  FaLightbulb,
  FaQuoteLeft,
} from "react-icons/fa";

import useFetchQuote
  from "../hooks/useFetchQuote";

import {
  useTheme,
} from "../context/ThemeContext";

const ProductivityTip = () => {

  // Theme Context
  const { darkMode } = useTheme();

  // Custom Hook
  const {
    tip,
    author,
    loading,
    fetchQuote,
  } = useFetchQuote();

  // Countdown State
  const [countdown, setCountdown] =
    useState(30);

  // Countdown + Auto API Call
  useEffect(() => {

    const timer = setInterval(() => {

      setCountdown((prev) => {

        // Auto Refresh Every 30 Seconds
        if (prev === 1) {

          fetchQuote();

          return 30;
        }

        return prev - 1;
      });

    }, 1000);

    // Cleanup
    return () => clearInterval(timer);

  }, [fetchQuote]);

  // Manual Refresh
  const handleNewTip = () => {

    fetchQuote();

    setCountdown(30);
  };

  return (

    <div
      data-aos="fade-up"
      className={`relative overflow-hidden backdrop-blur-2xl border rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] p-6 md:p-8 transition-all duration-500 hover:scale-[1.01] ${
        darkMode
          ? "bg-white/10 border-white/10 hover:shadow-cyan-500/20"
          : "bg-white border-gray-300 hover:shadow-cyan-300/20"
      }`}
    >

      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-52 h-52 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <div>

            <p className="text-sm uppercase tracking-[3px] text-cyan-400 font-semibold">
              Daily Motivation
            </p>

            <h2
              className={`text-3xl md:text-4xl font-extrabold mt-3 flex items-center gap-3 ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              Productivity Tip

              <span className="text-cyan-400 animate-bounce">
                🚀
              </span>

            </h2>

          </div>

          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center shadow-lg hover:rotate-12 hover:scale-110 transition duration-500"
          >

            <FaLightbulb className="text-3xl text-yellow-400" />

          </div>

        </div>

        {/* Loading */}
        {
          loading ? (

            <div className="space-y-4 animate-pulse">

              <div
                className={`h-4 rounded-full w-full ${
                  darkMode
                    ? "bg-white/10"
                    : "bg-gray-300"
                }`}
              ></div>

              <div
                className={`h-4 rounded-full w-5/6 ${
                  darkMode
                    ? "bg-white/10"
                    : "bg-gray-300"
                }`}
              ></div>

              <div
                className={`h-4 rounded-full w-4/6 ${
                  darkMode
                    ? "bg-white/10"
                    : "bg-gray-300"
                }`}
              ></div>

            </div>

          ) : (

            <div
              className={`relative border rounded-3xl p-6 shadow-lg transition duration-500 ${
                darkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-gray-50 border-gray-300 hover:bg-gray-100"
              }`}
            >

              {/* Quote Icon */}
              <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />

              {/* Quote */}
              <p
                className={`text-lg md:text-xl leading-9 italic ${
                  darkMode
                    ? "text-gray-200"
                    : "text-gray-700"
                }`}
              >

                “{tip}”

              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between flex-wrap gap-4">

                {/* Author */}
                <p className="text-cyan-400 font-semibold">

                  — {author}

                </p>

                {/* Button */}
                <button

                  onClick={handleNewTip}

                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                >

                  New Tip ({countdown}s)

                </button>

              </div>

            </div>

          )
        }

      </div>

    </div>
  );
};

export default ProductivityTip;