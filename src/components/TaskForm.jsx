import React, { useState } from "react";
import toast from "react-hot-toast";

import {
  useTheme,
} from "../context/ThemeContext";

const TaskForm = ({ addTask }) => {

  // Theme Context
  const { darkMode } = useTheme();

  // States
  const [task, setTask] = useState("");

  const [description, setDescription] =
    useState("");

  const [category, setCategory] =
    useState("Work");

  const [dueDate, setDueDate] =
    useState("");

  const [important, setImportant] =
    useState(false);

  const [urgent, setUrgent] =
    useState(false);

  // Handle Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    // Validation
    if (
      task.trim() === "" ||
      description.trim() === ""
    ) {

      toast.error(
        "Please fill all fields!",
        {
          duration: 2000,

          style: {
            background: "#0F172A",
            color: "#fff",
            border: "1px solid #EF4444",
            padding: "16px",
            borderRadius: "16px",
          },
        }
      );

      return;
    }

    // Create Task Object
    const newTask = {

      text: task,

      description: description,

      category: category,

      dueDate: dueDate,

      important: important,

      urgent: urgent,
    };

    // Send Data to Parent
    addTask(newTask);

    // Success Toast
    toast.success(
      "Task added successfully 🚀",
      {
        duration: 2000,

        style: {
          background: "#0F172A",
          color: "#fff",
          border: "1px solid #06B6D4",
          padding: "16px",
          borderRadius: "16px",
        },
      }
    );

    // Reset
    setTask("");

    setDescription("");

    setCategory("Work");

    setDueDate("");

    setImportant(false);

    setUrgent(false);
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {/* Task Name */}
      <div>

        <label
          className={`block text-sm mb-2 ${
            darkMode
              ? "text-gray-300"
              : "text-gray-700"
          }`}
        >
          Task Name
        </label>

        <input
          type="text"
          placeholder="Enter task name"
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
          className={`w-full px-5 py-4 rounded-2xl border outline-none transition duration-300 ${
            darkMode
              ? "bg-white/5 border-white/10 text-white placeholder-gray-400"
              : "bg-white border-gray-300 text-black placeholder-gray-500"
          } focus:ring-2 focus:ring-cyan-500`}
        />

      </div>

      {/* Description */}
      <div>

        <label
          className={`block text-sm mb-2 ${
            darkMode
              ? "text-gray-300"
              : "text-gray-700"
          }`}
        >
          Task Description
        </label>

        <textarea
          rows="4"
          placeholder="Enter task details..."
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className={`w-full px-5 py-4 rounded-2xl border outline-none resize-none transition duration-300 ${
            darkMode
              ? "bg-white/5 border-white/10 text-white placeholder-gray-400"
              : "bg-white border-gray-300 text-black placeholder-gray-500"
          } focus:ring-2 focus:ring-cyan-500`}
        ></textarea>

      </div>

      {/* Category + Due Date */}
      <div className="grid md:grid-cols-2 gap-5">

        {/* Category */}
        <div>

          <label
            className={`block text-sm mb-2 ${
              darkMode
                ? "text-gray-300"
                : "text-gray-700"
            }`}
          >
            Category
          </label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className={`w-full px-5 py-4 rounded-2xl border outline-none ${
              darkMode
                ? "bg-slate-900 border-white/10 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          >

            <option>Work</option>

            <option>Personal</option>

            <option>Study</option>

            <option>Health</option>

          </select>

        </div>

        {/* Due Date */}
        <div>

          <label
            className={`block text-sm mb-2 ${
              darkMode
                ? "text-gray-300"
                : "text-gray-700"
            }`}
          >
            Due Date
          </label>

          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(e.target.value)
            }
            className={`w-full px-5 py-4 rounded-2xl border outline-none ${
              darkMode
                ? "bg-white/5 border-white/10 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          />

        </div>

      </div>

      {/* Checkboxes */}
      <div className="flex flex-wrap gap-5">

        {/* Important */}
        <label
          className={`flex items-center gap-3 px-5 py-3 rounded-2xl border ${
            darkMode
              ? "bg-white/5 border-white/10 text-white"
              : "bg-white border-gray-300 text-black"
          }`}
        >

          <input
            type="checkbox"
            checked={important}
            onChange={(e) =>
              setImportant(e.target.checked)
            }
            className="w-5 h-5 accent-red-500"
          />

          <span>
            🔥 Important
          </span>

        </label>

        {/* Urgent */}
        <label
          className={`flex items-center gap-3 px-5 py-3 rounded-2xl border ${
            darkMode
              ? "bg-white/5 border-white/10 text-white"
              : "bg-white border-gray-300 text-black"
          }`}
        >

          <input
            type="checkbox"
            checked={urgent}
            onChange={(e) =>
              setUrgent(e.target.checked)
            }
            className="w-5 h-5 accent-yellow-500"
          />

          <span>
            ⚡ Urgent
          </span>

        </label>

      </div>

      {/* Button */}
      <button
        className="w-full md:w-auto px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105"
      >
        Add Task
      </button>

    </form>
  );
};

export default TaskForm;