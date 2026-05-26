import React, {
  useRef,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
  useTheme,
} from "../context/ThemeContext";

const Register = () => {

  const navigate =
    useNavigate();

  // Theme Context
  const { darkMode } =
    useTheme();

  // Refs
  const nameRef =
    useRef();

  const emailRef =
    useRef();

  const passwordRef =
    useRef();

  // Register
  const handleRegister = (e) => {

    e.preventDefault();

    const name =
      nameRef.current.value;

    const email =
      emailRef.current.value;

    const password =
      passwordRef.current.value;

    // Validation
    if (
      !name ||
      !email ||
      !password
    ) {

      toast.error(
        "Please fill all fields"
      );

      return;
    }

    // Store User
    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    toast.success(
      "Registration Successful 🚀"
    );

    navigate("/login");
  };

  return (

    <div className="flex items-center justify-center min-h-screen px-4">

      <form
        onSubmit={handleRegister}
        className={`w-full max-w-md rounded-3xl p-8 space-y-5 border shadow-2xl backdrop-blur-2xl transition-all duration-500 ${
          darkMode
            ? "bg-white/10 border-white/10"
            : "bg-white border-gray-300"
        }`}
      >

        {/* Heading */}
        <div className="text-center">

          <h1
            className={`text-4xl font-bold ${
              darkMode
                ? "text-white"
                : "text-black"
            }`}
          >
            Register
          </h1>

          <p
            className={`mt-2 ${
              darkMode
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            Create your account
          </p>

        </div>

        {/* Name */}
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter Name"
          className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all duration-300 ${
            darkMode
              ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyan-400"
              : "bg-gray-100 border-gray-300 text-black placeholder-gray-500 focus:border-cyan-500"
          }`}
        />

        {/* Email */}
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter Email"
          className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all duration-300 ${
            darkMode
              ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyan-400"
              : "bg-gray-100 border-gray-300 text-black placeholder-gray-500 focus:border-cyan-500"
          }`}
        />

        {/* Password */}
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter Password"
          className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all duration-300 ${
            darkMode
              ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyan-400"
              : "bg-gray-100 border-gray-300 text-black placeholder-gray-500 focus:border-cyan-500"
          }`}
        />

        {/* Button */}
        <button
          className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
        >
          Register
        </button>

        {/* Login Link */}
        <p
          className={`text-center ${
            darkMode
              ? "text-gray-300"
              : "text-gray-600"
          }`}
        >

          Already have account?

          <Link
            to="/login"
            className="text-cyan-500 font-semibold ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Register;