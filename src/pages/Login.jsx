import React, {
  useRef,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";
import {
  FcGoogle,
} from "react-icons/fc";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import {
  auth,
} from "../firebase/firebaseConfig";

import toast from "react-hot-toast";

import {
  useTheme,
} from "../context/ThemeContext";

const Login = ({
  setIsAuthenticated,
}) => {

  const navigate =
    useNavigate();

  // Theme Context
  const { darkMode } =
    useTheme();

  // Refs
  const emailRef =
    useRef();

  const passwordRef =
    useRef();

  // Google Provider
  const provider =
    new GoogleAuthProvider();

  // Email Password Login
  const handleLogin =
    async (e) => {

      e.preventDefault();

      const email =
        emailRef.current.value;

      const password =
        passwordRef.current.value;

      // Validation
      if (
        !email ||
        !password
      ) {

        toast.error(
          "Please fill all fields"
        );

        return;
      }

      try {

        // Firebase Login
        const userCredential =
          await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

        // Current User
        const user =
          userCredential.user;

        console.log(user);

        // Store User
        localStorage.setItem(
          "user",
          JSON.stringify(user)
        );

        // Authentication
        setIsAuthenticated(true);

        // Success Toast
        toast.success(
          "Login Successful 🚀"
        );

        // Navigate Home
        navigate("/home");

      } catch (error) {

        console.log(error);

        toast.error(
          "Invalid Email or Password"
        );
      }
    };

  // Google Login
  const handleGoogleLogin =
    async () => {

      try {

        // Google Popup
        const result =
          await signInWithPopup(
            auth,
            provider
          );

        // Current User
        const user =
          result.user;

        console.log(
          "Google User:",
          user
        );

        // Store User
        localStorage.setItem(
          "user",
          JSON.stringify(user)
        );

        // Authentication
        setIsAuthenticated(true);

        // Success Toast
        toast.success(
          "Google Login Successful 🚀"
        );

        // Navigate Home
        navigate("/home");

      } catch (error) {

        console.log(error);

        toast.error(
          "Google Login Failed"
        );
      }
    };

  return (

    <div className="flex items-start md:items-center justify-center min-h-screen px-4 py-10">

      <form
        onSubmit={handleLogin}
        className={`w-full max-w-md rounded-3xl p-8 space-y-5 border shadow-2xl backdrop-blur-2xl transition-all duration-500 ${darkMode
            ? "bg-white/10 border-white/10"
            : "bg-white border-gray-300"
          }`}
      >

        {/* Heading */}
        <div className="text-center">

          <h1
            className={`text-4xl font-bold ${darkMode
                ? "text-white"
                : "text-black"
              }`}
          >
            Login
          </h1>

          <p
            className={`mt-2 ${darkMode
                ? "text-gray-300"
                : "text-gray-600"
              }`}
          >
            Welcome back
          </p>

        </div>

        {/* Email */}
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter Email"
          className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all duration-300 ${darkMode
              ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyan-400"
              : "bg-gray-100 border-gray-300 text-black placeholder-gray-500 focus:border-cyan-500"
            }`}
        />

        {/* Password */}
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter Password"
          className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all duration-300 ${darkMode
              ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyan-400"
              : "bg-gray-100 border-gray-300 text-black placeholder-gray-500 focus:border-cyan-500"
            }`}
        />

        {/* Login Button */}
        <button
          className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
        >
          Login
        </button>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={
            handleGoogleLogin
          }
          className="w-full py-4 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 text-black font-semibold transition-all duration-300 flex items-center justify-center gap-3"
        >

          {/* Google Icon */}
          <FcGoogle size={24} />

          Continue with Google

        </button>

        {/* Register Link */}
        <p
          className={`text-center ${darkMode
              ? "text-gray-300"
              : "text-gray-600"
            }`}
        >

          Don't have account?

          <Link
            to="/"
            className="text-cyan-500 font-semibold ml-2 hover:underline"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Login;