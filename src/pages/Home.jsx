import React, {
  useEffect,
  useState,
  useCallback,
} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Counter from "../components/Counter";
import ProductivityTip from "../components/ProductivityTip";
import ProfileCard from "../components/ProfileCard";

import {
  useTheme,
} from "../context/ThemeContext";

const Home = () => {

  const { darkMode } = useTheme();

  // Task State
  const [tasks, setTasks] =
    useState([]);

  // AOS Animation
  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

  }, []);

  // Refresh AOS
  useEffect(() => {

    AOS.refresh();

  }, [tasks]);

  // Add Task
  const addTask = useCallback(

    (taskData) => {

      const newTask = {

        id: Date.now(),

        text: taskData.text,

        description:
          taskData.description,

        category:
          taskData.category,

        dueDate:
          taskData.dueDate,

        important:
          taskData.important,

        urgent:
          taskData.urgent,

        completed: false,
      };

      setTasks((prevTasks) => [
        ...prevTasks,
        newTask,
      ]);

    },

    []
  );

  // Complete Task
  const completeTask =
    useCallback(

      (id) => {

        setTasks((prevTasks) =>

          prevTasks.map((task) =>

            task.id === id

              ? {
                ...task,
                completed: true,
              }

              : task
          )
        );

      },

      []
    );

  // Delete Task
  const deleteTask =
    useCallback(

      (id) => {

        setTasks((prevTasks) =>

          prevTasks.filter(
            (task) =>
              task.id !== id
          )
        );

      },

      []
    );

  return (

    <div
      className={`min-h-screen py-10 px-4 overflow-hidden transition-all duration-500 ${darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-black"
          : "bg-gradient-to-br from-slate-100 via-white to-slate-200"
        }`}
    >

      {/* Main Container */}
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          data-aos="fade-down"
          className="mb-8"
        >
          <Header />
        </div>
       

        {/* Dashboard */}
        <div
          data-aos="zoom-in"
          className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
        >

          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>

          {/* Hero Section */}
          <div className="relative z-10 px-8 md:px-14 py-16 border-b border-white/10">

            <div className="text-center max-w-4xl mx-auto">

              {/* Badge */}
              <div
                data-aos="fade-up"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-semibold shadow-lg"
              >
                🚀 Productivity Dashboard
              </div>

              {/* Heading */}
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className={`mt-8 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight ${darkMode
                    ? "text-white"
                    : "text-slate-900"
                  }`}
              >
                Smart Task

                <span className="text-cyan-400">
                  {" "}Manager
                </span>

              </h1>

              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className={`mt-6 text-lg md:text-xl leading-9 max-w-3xl mx-auto ${darkMode
                    ? "text-gray-300"
                    : "text-slate-600"
                  }`}
              >
                Organize your tasks,
                manage priorities,
                and improve workflow
                efficiency with a modern
                React dashboard experience.
              </p>

            </div>

          </div>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-10 space-y-8">

            {/* Productivity Tip */}
            <div
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <ProductivityTip />
            </div>

            {/* Task Form */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl"
            >

              <TaskForm
                addTask={addTask}
              />

            </div>

            {/* Counter */}
            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl"
            >

              <Counter tasks={tasks} />

            </div>

            {/* Task List */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-xl"
            >

              <TaskList
                tasks={tasks}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;