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

import toast from "react-hot-toast";

import {
  useTheme,
} from "../context/ThemeContext";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase/firebaseConfig";

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

  // Google Provider
  const provider =
    new GoogleAuthProvider();

  // Dynamic Form Fields
  const formFields = [

    {
      label: "Name",
      type: "text",
      name: "name",
      placeholder:
        "Enter Name",
    },

    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder:
        "Enter Email",
    },

    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder:
        "Enter Password",
    },
  ];

  // Register Function
  const handleRegister =
    async (e) => {

      e.preventDefault();

      // Get Values
      const name =
        nameRef.current.value;

      const email =
        emailRef.current.value;

      const password =
        passwordRef.current.value;

      // Validation
      if (!name) {

        toast.error(
          "Name is required"
        );

        return;
      }

      if (
        name.length < 3
      ) {

        toast.error(
          "Name must be at least 3 characters"
        );

        return;
      }

      if (!email) {

        toast.error(
          "Email is required"
        );

        return;
      }

      // Email Regex
      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailPattern.test(email)
      ) {

        toast.error(
          "Enter valid email"
        );

        return;
      }

      if (!password) {

        toast.error(
          "Password is required"
        );

        return;
      }

      if (
        password.length < 6
      ) {

        toast.error(
          "Password must be at least 6 characters"
        );

        return;
      }

      try {

        // Create Firebase User
        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        // Current User
        const user =
          userCredential.user;

        // User Data
        const userData = {
          name,
          email,
          uid:
            user.uid,

          createdAt:
            new Date(),
        };

        // Store User In Firestore
        await setDoc(
          doc(
            db,
            "users",
            user.uid
          ),
          userData
        );

        // Store User In LocalStorage
        localStorage.setItem(
          "user",
          JSON.stringify(userData)
        );

        // Success Toast
        toast.success(
          "Registration Successful 🚀"
        );

        // Clear Inputs
        nameRef.current.value =
          "";

        emailRef.current.value =
          "";

        passwordRef.current.value =
          "";

        // Navigate
        navigate("/home");

      } catch (error) {

        console.log(error);

        // Firebase Errors
        if (
          error.code ===
          "auth/email-already-in-use"
        ) {

          toast.error(
            "Email already exists"
          );

        } else if (
          error.code ===
          "auth/invalid-email"
        ) {

          toast.error(
            "Invalid email format"
          );

        } else if (
          error.code ===
          "auth/weak-password"
        ) {

          toast.error(
            "Password is too weak"
          );

        } else {

          toast.error(
            "Something went wrong"
          );
        }
      }
    };

  // Google Authentication
  const handleGoogleAuth =
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

        // User Data
        const userData = {
          name:
            user.displayName,

          email:
            user.email,

          uid:
            user.uid,

          photo:
            user.photoURL,

          createdAt:
            new Date(),
        };

        // Store User In Firestore
        await setDoc(
          doc(
            db,
            "users",
            user.uid
          ),
          userData
        );

        // Store User In LocalStorage
        localStorage.setItem(
          "user",
          JSON.stringify(userData)
        );

        toast.success(
          "Google Login Success 🚀"
        );

        // Navigate
        navigate("/home");

      } catch (error) {

        console.log(error);

        toast.error(
          "Google Login Failed"
        );
      }
    };

  return (

   <div
  className={`min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden transition-all duration-500 ${
    darkMode
      ? "bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
      : "bg-gradient-to-br from-cyan-50 via-white to-blue-100"
  }`}
>

      <form
        onSubmit={handleRegister}
        className={`w-full max-w-md rounded-[32px] p-8 md:p-10 space-y-6 border shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-3xl transition-all duration-500 ${
          darkMode
            ? "bg-white/10 border-white/10"
            : "bg-white/80 border-gray-200"
        }`}
      >

        {/* Heading */}
        <div className="text-center space-y-3">

          {/* Logo */}
          <div className="flex justify-center">

            <div
              className="w-20 h-20 rounded-3xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shadow-lg"
            >

              <FcGoogle size={40} />

            </div>

          </div>

          {/* Title */}
          <h1
            className={`text-5xl font-extrabold tracking-tight ${
              darkMode
                ? "text-white"
                : "text-black"
            }`}
          >
            Register
          </h1>

          {/* Subtitle */}
          <p
            className={`text-sm ${
              darkMode
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            Create your account and start your journey
          </p>

        </div>

        {/* Dynamic Inputs */}
        {
          formFields.map(
            (
              field,
              index
            ) => (

              <div
                key={index}
                className="space-y-2"
              >

                {/* Label */}
                <label
                  className={`text-sm font-medium ${
                    darkMode
                      ? "text-gray-200"
                      : "text-gray-700"
                  }`}
                >

                  {field.label}

                </label>

                {/* Input */}
                <input
                  ref={
                    field.name === "name"
                      ? nameRef
                      : field.name === "email"
                      ? emailRef
                      : passwordRef
                  }

                  type={field.type}

                  placeholder={
                    field.placeholder
                  }

                  className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all duration-300 text-lg ${
                    darkMode
                      ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyan-400 focus:bg-white/10"
                      : "bg-gray-100 border-gray-300 text-black placeholder-gray-500 focus:border-cyan-500 focus:bg-white"
                  }`}
                />

              </div>
            )
          )
        }

        {/* Register Button */}
        <button
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
        >
          Register
        </button>

        {/* Divider */}
        <div className="relative flex items-center justify-center">

          <div className="w-full border-t border-white/10"></div>

          <span
            className={`px-4 text-sm absolute ${
              darkMode
                ? "bg-slate-900 text-gray-400"
                : "bg-white text-gray-500"
            }`}
          >
            OR
          </span>

        </div>

        {/* Google Button */}
        <button
          type="button"
          onClick={
            handleGoogleAuth
          }
          className="w-full py-4 rounded-2xl bg-white hover:bg-gray-100 text-black font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-md border border-gray-200"
        >

          <FcGoogle size={26} />

          Continue with Google

        </button>

        {/* Login Link */}
        <p
          className={`text-center text-sm ${
            darkMode
              ? "text-gray-300"
              : "text-gray-600"
          }`}
        >

          Already have an account?

          <Link
            to="/login"
            className="text-cyan-400 font-semibold ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Register;