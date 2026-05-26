// TaskList.jsx

import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  completeTask,
  deleteTask,
}) => {

  // Empty State
  if (tasks.length === 0) {

    return (

      <div
        data-aos="fade-up"
        className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-dashed border-white/20 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] p-12 text-center"
      >

        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-52 h-52 bg-cyan-500/10 blur-3xl rounded-full"></div>

        {/* Content */}
        <div className="relative z-10">

          {/* Icon */}
          <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-5xl mb-6 shadow-lg">
            📋
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-white mb-4">
            No Tasks Available
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-8 max-w-md mx-auto">
            Add your first task using the form above and
            start organizing your daily workflow efficiently.
          </p>

        </div>

      </div>
    );
  }

  return (

    <div className="space-y-6">

      {/* Section Header */}
      <div
        data-aos="fade-right"
        className="flex items-center justify-between"
      >

        <div>

          <p className="text-sm uppercase tracking-widest text-cyan-300 font-semibold">
            Task Management
          </p>

          <h2 className="text-3xl font-extrabold text-white mt-2">
            Your Task List
          </h2>

        </div>

        {/* Task Count */}
        <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 shadow-lg">

          <p className="text-sm text-gray-400">
            Total Tasks
          </p>

          <h3 className="text-2xl font-bold text-cyan-400">
            {tasks.length}
          </h3>

        </div>

      </div>

      {/* Task Cards */}
      <div className="grid gap-5">

        {tasks.map((task, index) => (

          <div
            key={task.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >

            <TaskCard
              task={task}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />

          </div>

        ))}

      </div>

    </div>
  );
};

export default TaskList;