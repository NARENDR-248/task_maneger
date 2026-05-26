import React from "react";

import {
  useTheme,
} from "../context/ThemeContext";

const ProfileCard = () => {

  const { darkMode } =
    useTheme();

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (

    <div className="relative group">

      {/* Circle */}
      <div
        className={`relative w-16 h-16 rounded-full overflow-hidden cursor-pointer border-2 transition-all duration-500 hover:scale-110 ${
          darkMode
            ? "border-cyan-400"
            : "border-cyan-500"
        }`}
      >

        {/* Avatar */}
        <div
          className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold"
        >

          {user?.name?.charAt(0) || "U"}

        </div>

      </div>

      {/* Hover Card */}
      <div
        className={`absolute right-0 top-20 w-72 rounded-3xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 shadow-2xl z-50 ${
          darkMode
            ? "bg-slate-900 border border-white/10"
            : "bg-white border border-gray-200"
        }`}
      >

        {/* Top */}
        <div className="flex items-center gap-4">

          <div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold"
          >

            {user?.name?.charAt(0) || "U"}

          </div>

          <div>

            <h2
              className={`text-xl font-bold ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >

              {user?.name || "Guest"}

            </h2>

            <p
              className={`text-sm mt-1 ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >

              {user?.email}

            </p>

          </div>

        </div>

        {/* Divider */}
        <div
          className={`my-5 border-t ${
            darkMode
              ? "border-white/10"
              : "border-gray-200"
          }`}
        ></div>

     

      </div>

    </div>
  );
};

export default ProfileCard;