import React, {
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  useTheme,
} from "../context/ThemeContext";

const TaskForm = ({
  addTask,
}) => {

  // Theme Context
  const { darkMode } =
    useTheme();

  // Dynamic Form JSON
  const formFields = [

    {
      label: "Task Name",
      type: "text",
      name: "task",
      placeholder:
        "Enter task name",
    },

    {
      label:
        "Task Description",

      type: "text",

      name:
        "description",

      placeholder:
        "Enter task description",
    },

    {
      label: "Category",
      type: "dropdown",
      name: "category",

      options: [
        "Work",
        "Personal",
        "Study",
        "Health",
      ],
    },

    {
      label: "Due Date",
      type: "date",
      name: "dueDate",
    },

    {
      label: "Important",
      type: "checkbox",
      name: "important",
    },

    {
      label: "Urgent",
      type: "checkbox",
      name: "urgent",
    },
  ];

  // Form State
  const [formData,
    setFormData] =
    useState({

      category: "Work",

      important: false,

      urgent: false,
    });

  // Error State
  const [errors,
    setErrors] =
    useState({});

  // Handle Change
  const handleChange =
    (e, field) => {

      const value =
        field.type ===
        "checkbox"
          ? e.target.checked
          : e.target.value;

      setFormData({
        ...formData,

        [field.name]:
          value,
      });
    };

  // Validation
  const validateForm =
    () => {

      let newErrors = {};

      formFields.forEach(
        (field) => {

          if (
            field.type !==
              "checkbox" &&

            !formData[
              field.name
            ]
          ) {

            newErrors[
              field.name
            ] =
              `${field.label} is required`;
          }
        }
      );

      setErrors(
        newErrors
      );

      return Object.keys(
        newErrors
      ).length === 0;
    };

  // Submit
  const handleSubmit =
    (e) => {

      e.preventDefault();

      // Validation
      if (
        !validateForm()
      ) {

        toast.error(
          "Please fill all fields!"
        );

        return;
      }

      // Send To Parent
      addTask(formData);

      // Success
      toast.success(
        "Task added successfully 🚀"
      );

      // Reset
      setFormData({

        category:
          "Work",

        important:
          false,

        urgent:
          false,
      });

      setErrors({});
    };

  return (

    <form
      onSubmit={
        handleSubmit
      }
      className="space-y-6"
    >

      {/* Dynamic Fields */}
      {
        formFields.map(
          (
            field,
            index
          ) => (

            <div
              key={index}
            >

              {/* Label */}
              <label
                className={`block text-sm mb-2 ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >

                {
                  field.label
                }

              </label>

              {/* Text */}
              {
                (
                  field.type ===
                    "text" ||

                  field.type ===
                    "date"
                ) && (

                  <input
                    type={
                      field.type
                    }

                    placeholder={
                      field.placeholder
                    }

                    value={
                      formData[
                        field.name
                      ] || ""
                    }

                    onChange={(
                      e
                    ) =>
                      handleChange(
                        e,
                        field
                      )
                    }

                    className={`w-full px-5 py-4 rounded-2xl border outline-none transition duration-300 ${
                      darkMode
                        ? "bg-white/5 border-white/10 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-black placeholder-gray-500"
                    } focus:ring-2 focus:ring-cyan-500`}
                  />
                )
              }

              {/* Dropdown */}
              {
                field.type ===
                  "dropdown" && (

                  <select
                    value={
                      formData[
                        field.name
                      ] || ""
                    }

                    onChange={(
                      e
                    ) =>
                      handleChange(
                        e,
                        field
                      )
                    }

                    className={`w-full px-5 py-4 rounded-2xl border outline-none ${
                      darkMode
                        ? "bg-slate-900 border-white/10 text-white"
                        : "bg-white border-gray-300 text-black"
                    }`}
                  >

                    {
                      field.options.map(
                        (
                          option,
                          i
                        ) => (

                          <option
                            key={i}
                            value={
                              option
                            }
                          >

                            {
                              option
                            }

                          </option>
                        )
                      )
                    }

                  </select>
                )
              }

              {/* Checkbox */}
              {
                field.type ===
                  "checkbox" && (

                  <label
                    className={`flex items-center gap-3 px-5 py-4 rounded-2xl border ${
                      darkMode
                        ? "bg-white/5 border-white/10 text-white"
                        : "bg-white border-gray-300 text-black"
                    }`}
                  >

                    <input
                      type="checkbox"

                      checked={
                        formData[
                          field.name
                        ] || false
                      }

                      onChange={(
                        e
                      ) =>
                        handleChange(
                          e,
                          field
                        )
                      }

                      className="w-5 h-5 accent-cyan-500"
                    />

                    {
                      field.label
                    }

                  </label>
                )
              }

              {/* Error */}
              {
                errors[
                  field.name
                ] && (

                  <p className="text-red-400 text-sm mt-1">

                    {
                      errors[
                        field.name
                      ]
                    }

                  </p>
                )
              }

            </div>
          )
        )
      }

      {/* Submit Button */}
      <button
        className="w-full md:w-auto px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105"
      >
        Add Task
      </button>

      {/* Result */}
      <div
        className={`p-5 rounded-2xl ${
          darkMode
            ? "bg-white/5 text-white"
            : "bg-gray-100 text-black"
        }`}
      >

        <h2 className="font-bold mb-3">
          Live Form Data
        </h2>

        <pre className="text-sm overflow-auto">
          {
            JSON.stringify(
              formData,
              null,
              2
            )
          }
        </pre>

      </div>

    </form>
  );
};

export default TaskForm;