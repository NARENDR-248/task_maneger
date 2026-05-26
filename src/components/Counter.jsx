import React from "react";

const Counter = ({ tasks }) => {

  // Completed Tasks Count
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  // Total Tasks Count
  const totalTasks = tasks.length;

  // Pending Tasks Count
  const pendingTasks = totalTasks - completedTasks;

  return (

    <div
      data-aos="zoom-in"
      className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] p-6"
    >

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Heading */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              Task Overview
            </p>

            <h2 className="text-3xl font-bold text-white mt-1">
              Productivity Stats
            </h2>
          </div>

          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-green-500/20 border border-green-400/20 flex items-center justify-center text-3xl">
            📊
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

          {/* Total Tasks */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:scale-105 transition duration-300">

            <p className="text-gray-400 text-sm mb-2">
              Total Tasks
            </p>

            <h3 className="text-4xl font-extrabold text-cyan-400">
              {totalTasks}
            </h3>

          </div>

          {/* Completed Tasks */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:scale-105 transition duration-300">

            <p className="text-gray-400 text-sm mb-2">
              Completed
            </p>

            <h3 className="text-4xl font-extrabold text-green-400">
              {completedTasks}
            </h3>

          </div>

          {/* Pending Tasks */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:scale-105 transition duration-300">

            <p className="text-gray-400 text-sm mb-2">
              Pending
            </p>

            <h3 className="text-4xl font-extrabold text-pink-400">
              {pendingTasks}
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Counter;