import React, {
  useState,
} from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TaskDetails from "./pages/TaskDetails";

import {
  useTheme,
} from "./context/ThemeContext";

const App = () => {

  // Theme Context
  const { darkMode } =
    useTheme();

  // Auth State
  const [
    isAuthenticated,
    setIsAuthenticated,
  ] = useState(false);

  return (

    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white"
          : "bg-gradient-to-r from-gray-100 via-white to-gray-200 text-black"
      }`}
    >

      {/* Header */}
      <div
        className={`shadow-lg border-b backdrop-blur-md ${
          darkMode
            ? "border-gray-700 bg-black/30"
            : "border-gray-300 bg-white/70"
        }`}
      >

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Left */}
          <div>

            <h1
              className={`text-3xl font-bold tracking-wide ${
                darkMode
                  ? "text-cyan-400"
                  : "text-cyan-600"
              }`}
            >
              React Task Manager
            </h1>

            <p
              className={`text-sm mt-1 ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              Authentication + Protected Routes
            </p>

          </div>

        </div>

      </div>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">

        <div
          className={`backdrop-blur-lg rounded-3xl shadow-2xl p-6 border transition-all duration-500 ${
            darkMode
              ? "bg-white/10 border-gray-700"
              : "bg-white border-gray-300"
          }`}
        >

          <Routes>

            {/* Register */}
            <Route
              path="/"
              element={
                <Register />
              }
            />

            {/* Login */}
            <Route
              path="/login"
              element={
                <Login
                  setIsAuthenticated={
                    setIsAuthenticated
                  }
                />
              }
            />

            {/* Home */}
            <Route
              path="/home"
              element={
                isAuthenticated
                  ? <Home />
                  : <Navigate to="/login" />
              }
            />

            {/* About */}
            <Route
              path="/about"
              element={
                isAuthenticated
                  ? <About />
                  : <Navigate to="/login" />
              }
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={
                isAuthenticated
                  ? <Contact />
                  : <Navigate to="/login" />
              }
            />

            {/* Task Details */}
            <Route
              path="/task/:id"
              element={
                isAuthenticated
                  ? <TaskDetails />
                  : <Navigate to="/login" />
              }
            />

          </Routes>

        </div>

      </div>

    </div>
  );
};

export default App;