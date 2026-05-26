import React, {
  memo,
} from "react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

import {
  useTheme,
} from "../context/ThemeContext";
import ProfileCard from "./ProfileCard";

const Header = () => {

  const location =
    useLocation();

  const navigate =
    useNavigate();

  // Theme Context
  const { darkMode } =
    useTheme();

  // Get User
  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  // Logout
  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");
  };

  // Active Link
  const navLinkStyle = (path) =>

    location.pathname === path

      ? darkMode
        ? "text-cyan-400"
        : "text-cyan-600"

      : darkMode
        ? "text-gray-300 hover:text-white"
        : "text-gray-600 hover:text-black";

  return (

    <header className="sticky top-0 z-50 py-4">

      {/* Navbar */}
      <div
        className={`max-w-7xl mx-auto px-6 py-4 rounded-3xl border backdrop-blur-2xl shadow-2xl transition-all duration-500 ${
          darkMode
            ? "bg-white/10 border-white/10"
            : "bg-white/80 border-gray-200"
        }`}
      >

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* Left */}
          <div className="flex items-center gap-4 min-w-fit">

            {/* Logo */}
            <div
              className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
            >
              T
            </div>

            {/* Logo Text */}
            <div>

              <h1
                className={`text-2xl font-extrabold leading-none ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                Task Manager
              </h1>

              <p
                className={`text-sm mt-1 ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                Productivity Workspace
              </p>

            </div>

          </div>

          {/* Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">

            <Link
              to="/home"
              className={`${navLinkStyle("/home")} font-medium transition duration-300`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`${navLinkStyle("/about")} font-medium transition duration-300`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`${navLinkStyle("/contact")} font-medium transition duration-300`}
            >
              Contact
            </Link>

          </nav>

          {/* Right */}
          <div className="flex flex-wrap items-center gap-4 justify-end">

            {/* Profile Card */}
          

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Logout */}
            <button

              onClick={handleLogout}

              className="hidden md:block px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >

              Logout

            </button>
            <div
            data-aos="fade-up"
            className={`mb-8 ${
              darkMode
                ? "bg-white/10 border-white/10" 
                : "bg-white border-gray-200"
            } rounded-3xl p-4 shadow-lg`}
          >
            <ProfileCard/>
          </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden text-3xl cursor-pointer ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >
              ☰
            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default memo(Header);