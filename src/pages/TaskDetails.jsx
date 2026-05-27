import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import {
  useTheme,
} from "../context/ThemeContext";

import {
  FaTasks,
  FaArrowLeft,
  FaCalendarAlt,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  db,
} from "../firebase/firebaseConfig";

const TaskDetails = () => {

  // URL Param
  const { id } =
    useParams();

  // Theme Context
  const { darkMode } =
    useTheme();

  // Navigation
  const navigate =
    useNavigate();

  // Task State
  const [task,
    setTask] =
    useState(null);

  // Loading State
  const [loading,
    setLoading] =
    useState(true);

  // Error State
  const [error,
    setError] =
    useState("");

  // Location state (task may be passed from list)
  const location = useLocation();

  // Fetch Task
  useEffect(() => {

    // If navigated with task in state, use it (local tasks not in Firestore)
    if (location?.state?.task) {
      setTask(location.state.task);
      setLoading(false);
      return;
    }

    const fetchTask =
      async () => {

        try {

          // Firestore Ref
          const docRef =
            doc(
              db,
              "tasks",
              id
            );

          // Get Document
          const docSnap =
            await getDoc(
              docRef
            );

          if (
            docSnap.exists()
          ) {

            // Store Data
            setTask({

              id:
                docSnap.id,

              ...docSnap.data(),
            });

          } else {

            setError(
              "Task Not Found"
            );
          }

        } catch (error) {

          console.log(error);

          setError(
            "Failed to load task"
          );

        } finally {

          setLoading(false);
        }
      };

    fetchTask();

  }, [id, location]);

  // Helpers to format values from Firestore
  const formatDate = (value) => {
    if (!value) return null;
    // Firestore Timestamp
    if (typeof value === "object" && typeof value.toDate === "function") {
      value = value.toDate();
    }
    if (typeof value === "number") {
      value = new Date(value);
    }
    if (value instanceof Date) {
      return value.toLocaleString();
    }
    // already a string
    return String(value);
  };

  const formatValue = (value) => {
    if (value == null) return "-";
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "object") {
      // Firestore Timestamp
      if (typeof value.toDate === "function") return formatDate(value);
      try {
        return JSON.stringify(value);
      } catch (e) {
        return String(value);
      }
    }
    return String(value);
  };

  // Loading UI
  if (loading) {

    return (

      <div
        className={`min-h-screen flex items-center justify-center text-3xl font-bold ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-gray-100 text-black"
        }`}
      >

        Loading...

      </div>
    );
  }

  // Error UI
  if (error) {

    return (

      <div
        className={`min-h-screen flex flex-col items-center justify-center gap-5 ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-gray-100 text-black"
        }`}
      >

        <h1 className="text-4xl font-bold">
          {error}
        </h1>

        <button
          onClick={() =>
            navigate("/home")
          }
          className="px-6 py-3 rounded-2xl bg-cyan-500 text-white font-semibold"
        >
          Go Back
        </button>

      </div>
    );
  }

  return (

    <div
      className={`min-h-screen py-10 px-4 transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-black"
          : "bg-gradient-to-br from-slate-100 via-white to-slate-200"
      }`}
    >

      {/* Container */}
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <button

          onClick={() =>
            navigate("/home")
          }

          className={`mb-6 flex items-center gap-2 px-5 py-3 rounded-2xl transition duration-300 shadow-lg ${
            darkMode
              ? "bg-white/10 border border-white/10 text-white hover:bg-cyan-500"
              : "bg-white border border-gray-300 text-black hover:bg-cyan-500 hover:text-white"
          }`}
        >

          <FaArrowLeft />

          Back to Home

        </button>

        {/* Card */}
        <div
          className={`relative overflow-hidden backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8 md:p-12 ${
            darkMode
              ? "bg-white/10 border border-white/10"
              : "bg-white border border-gray-200"
          }`}
        >

          {/* Glow Effects */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

          {/* Content */}
          <div className="relative z-10">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

              <div>

                <p className="text-sm uppercase tracking-[3px] text-cyan-300 font-semibold">
                  Task Details
                </p>

                <h1
                  className={`text-4xl md:text-5xl font-extrabold mt-3 ${
                    darkMode
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {task?.task || task?.title || "Untitled Task"}
                </h1>

              </div>

              {/* Icon */}
              <div
                className="w-20 h-20 rounded-3xl bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center shadow-2xl"
              >

                <FaTasks className="text-4xl text-cyan-300" />

              </div>

            </div>

            {/* Task ID */}
            <div className="mb-8">

              <p
                className={`text-lg ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >

                Task ID:

                <span className="text-cyan-400 font-bold ml-2">
                  #{task?.id}
                </span>

                {task?.createdAt && (
                  <span className="ml-4 text-sm text-gray-400">
                    • Created: {formatDate(task.createdAt)}
                  </span>
                )}

              </p>

            </div>

            {/* Description */}
            <div
              className={`rounded-3xl p-6 mb-8 ${
                darkMode
                  ? "bg-white/5 border border-white/10"
                  : "bg-gray-100 border border-gray-200"
              }`}
            >

              <h2
                className={`text-2xl font-bold mb-4 ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                Description
              </h2>

              <p
                className={`leading-8 text-lg ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                {task?.description || task?.details || "No description provided."}
              </p>

            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Category */}
              <div
                className={`rounded-3xl p-6 ${
                  darkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-gray-100 border border-gray-200"
                }`}
              >

                <div className="flex items-center gap-3 mb-4">

                  <FaLayerGroup className="text-cyan-400 text-2xl" />

                  <h3
                    className={`text-xl font-bold ${
                      darkMode
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    Category
                  </h3>

                </div>

                <p
                  className={`text-lg ${
                    darkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  {task?.category || "-"}
                </p>

              </div>

              {/* Due Date */}
              <div
                className={`rounded-3xl p-6 ${
                  darkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-gray-100 border border-gray-200"
                }`}
              >

                <div className="flex items-center gap-3 mb-4">

                  <FaCalendarAlt className="text-cyan-400 text-2xl" />

                  <h3
                    className={`text-xl font-bold ${
                      darkMode
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    Due Date
                  </h3>

                </div>

                <p
                  className={`text-lg ${
                    darkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  {formatDate(task?.dueDate) || "-"}
                </p>

              </div>

              {/* Status */}
              <div
                className={`rounded-3xl p-6 ${
                  darkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-gray-100 border border-gray-200"
                }`}
              >

                <div className="flex items-center gap-3 mb-4">

                  <FaCheckCircle className="text-green-400 text-2xl" />

                  <h3
                    className={`text-xl font-bold ${
                      darkMode
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    Status
                  </h3>

                </div>

                <p className="text-green-400 text-lg font-semibold">
                  {task?.completed ? "Completed" : "In Progress"}
                </p>

              </div>

              {/* Priority */}
              <div
                className={`rounded-3xl p-6 ${
                  darkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-gray-100 border border-gray-200"
                }`}
              >

                <h3
                  className={`text-xl font-bold mb-4 ${
                    darkMode
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  Priority
                </h3>

                <div className="flex flex-wrap gap-3">

                  {task?.important && (

                    <span className="px-4 py-2 rounded-full bg-red-500/20 border border-red-400/20 text-red-300 font-semibold">
                      🔥 Important
                    </span>

                  )}

                  {task?.urgent && (

                    <span className="px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/20 text-yellow-300 font-semibold">
                      ⚡ Urgent
                    </span>

                  )}

                </div>

              </div>

            </div>

            {/* Extra Fields */}
            {task && (
              <div className="mt-8">
                <h3 className={`text-lg font-semibold mb-3 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                  Other Details
                </h3>

                <div className="grid gap-3">
                  {Object.entries(task)
                    .filter(([key]) => key !== "id" && key !== "description" && key !== "task" && key !== "title")
                    .map(([key, value]) => (
                      <div key={key} className={`p-4 rounded-xl border ${darkMode ? "bg-white/5 border-white/10" : "bg-gray-100 border-gray-200"}`}>
                        <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">{key}</p>
                        <p className="font-medium">{formatValue(value)}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default TaskDetails;