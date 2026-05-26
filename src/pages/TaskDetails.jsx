import React from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import {
  FaTasks,
  FaArrowLeft,
  FaCalendarAlt,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";

const TaskDetails = () => {

  // URL Param
  const { id } = useParams();

  const { darkMode } = useTheme();

  // Navigation
  const navigate = useNavigate();

  // Dummy Task Data
  const task = {
    id: id,
    title: "Complete React Project",
    description:
      "Build a professional Task Manager application using React JS, Tailwind CSS, React Router DOM, Axios API integration, React Hot Toast, and modern UI components.",

    category: "Work",

    dueDate: "2026-05-30",

    status: "In Progress",

    important: true,

    urgent: true,
  };

  return (

    <div className={`min-h-screen py-10 px-4 transition-all duration-500 ${darkMode ? "bg-gradient-to-br from-slate-950 via-slate-900 to-black" : "bg-gradient-to-br from-slate-100 via-white to-slate-200"}`}>

      {/* Container */}
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <button

          onClick={() => navigate("/home")}

          className="mb-6 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 border border-white/10 text-white hover:bg-cyan-500 transition duration-300 shadow-lg"
        >

          <FaArrowLeft />

          Back to Home

        </button>

        {/* Card */}
        <div className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8 md:p-12">

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

                <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
                  {task.title}
                </h1>

              </div>

              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center shadow-2xl">

                <FaTasks className="text-4xl text-cyan-300" />

              </div>

            </div>

            {/* Task ID */}
            <div className="mb-8">

              <p className="text-lg text-gray-300">

                Task ID:

                <span className="text-cyan-400 font-bold ml-2">
                  #{task.id}
                </span>

              </p>

            </div>

            {/* Description */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">

              <h2 className="text-2xl font-bold text-white mb-4">
                Description
              </h2>

              <p className="text-gray-300 leading-8 text-lg">
                {task.description}
              </p>

            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Category */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <div className="flex items-center gap-3 mb-4">

                  <FaLayerGroup className="text-cyan-400 text-2xl" />

                  <h3 className="text-xl font-bold text-white">
                    Category
                  </h3>

                </div>

                <p className="text-gray-300 text-lg">
                  {task.category}
                </p>

              </div>

              {/* Due Date */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <div className="flex items-center gap-3 mb-4">

                  <FaCalendarAlt className="text-cyan-400 text-2xl" />

                  <h3 className="text-xl font-bold text-white">
                    Due Date
                  </h3>

                </div>

                <p className="text-gray-300 text-lg">
                  {task.dueDate}
                </p>

              </div>

              {/* Status */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <div className="flex items-center gap-3 mb-4">

                  <FaCheckCircle className="text-green-400 text-2xl" />

                  <h3 className="text-xl font-bold text-white">
                    Status
                  </h3>

                </div>

                <p className="text-green-300 text-lg font-semibold">
                  {task.status}
                </p>

              </div>

              {/* Priority */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h3 className="text-xl font-bold text-white mb-4">
                  Priority
                </h3>

                <div className="flex flex-wrap gap-3">

                  {
                    task.important && (

                      <span className="px-4 py-2 rounded-full bg-red-500/20 border border-red-400/20 text-red-300 font-semibold">
                        🔥 Important
                      </span>

                    )
                  }

                  {
                    task.urgent && (

                      <span className="px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/20 text-yellow-300 font-semibold">
                        ⚡ Urgent
                      </span>

                    )
                  }

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TaskDetails;