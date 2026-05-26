// TaskCard.jsx

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import React, { memo } from "react";
const TaskCard = ({
  task,
  completeTask,
}) => {

  // Navigation
  const navigate = useNavigate();

  // Complete Task
  const handleComplete = (e) => {

    // Stop Navigation
    e.stopPropagation();

    completeTask(task.id);

    // Success Toast
    toast.success(
      "Task completed successfully 🚀",
      {
        duration: 2000,

        style: {
          background: "#0F172A",
          color: "#fff",
          border: "1px solid #06B6D4",
          padding: "16px",
          borderRadius: "16px",
        },

        iconTheme: {
          primary: "#06B6D4",
          secondary: "#fff",
        },
      }
    );
  };

  return (

    <div

      // Navigate to Details Page
      onClick={() => navigate(`/task/${task.id}`)}

      data-aos="fade-up"

      data-aos-duration="1000"

      className={`group relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-5 rounded-3xl border p-6 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${
        task.completed
          ? "bg-green-500/10 border-green-400/20"
          : "bg-white/10 backdrop-blur-xl border-white/10"
      }`}
    >

      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>

      {/* Left Section */}
      <div className="relative z-10 flex-1">

        {/* Task Status */}
        <div className="flex items-center gap-3 mb-3">

          <div
            className={`w-4 h-4 rounded-full ${
              task.completed
                ? "bg-green-400"
                : "bg-yellow-400 animate-pulse"
            }`}
          ></div>

          <p className="text-sm uppercase tracking-widest text-gray-400">

            {
              task.completed
                ? "Completed Task"
                : "Pending Task"
            }

          </p>

        </div>

        {/* Task Title */}
        <h2
          className={`text-2xl font-bold transition duration-300 ${
            task.completed
              ? "line-through text-gray-400"
              : "text-white"
          }`}
        >
          {task.text}
        </h2>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-5">

          {/* Important Badge */}
          {
            task.important && (

              <span
                className="px-4 py-1.5 rounded-full bg-red-500/20 border border-red-400/20 text-red-300 text-sm font-semibold shadow-md"
              >
                🔥 Important
              </span>

            )
          }

          {/* Urgent Badge */}
          {
            task.urgent && (

              <span
                className="px-4 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-400/20 text-yellow-300 text-sm font-semibold shadow-md"
              >
                ⚡ Urgent
              </span>

            )
          }

        </div>

      </div>

      {/* Right Section */}
      <div className="relative z-10">

        <button

          onClick={handleComplete}

          disabled={task.completed}

          className={`px-7 py-3 rounded-2xl font-semibold text-white shadow-lg transition-all duration-300 ${
            task.completed
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-cyan-600 hover:scale-105 active:scale-95"
          }`}
        >

          {
            task.completed
              ? "Completed"
              : "Complete Task"
          }

        </button>

      </div>

    </div>
  );
};

export default memo(TaskCard);