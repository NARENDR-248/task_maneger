import React, {
  useEffect,
  useState,
} from "react";

import {
  useTheme,
} from "../context/ThemeContext";

import {
  auth,
  db,
} from "../firebase/firebaseConfig";

import {
  doc,
  getDoc,
} from "firebase/firestore";

const ProfileCard = () => {

  // Theme Context
  const { darkMode } =
    useTheme();

  // User State
  const [userData,
    setUserData] =
    useState(null);

  // Fetch User
  useEffect(() => {

    const fetchUser =
      async () => {

        // Current User
        const user =
          auth.currentUser;

        console.log(
          "Current User:",
          user
        );

        if (user) {

          // First Set Firebase Auth Data
          setUserData({
            name:
              user.displayName ||
              "Guest",

            email:
              user.email,

            photo:
              user.photoURL,

            uid:
              user.uid,
          });

          try {

            // Firestore Ref
            const docRef =
              doc(
                db,
                "users",
                user.uid
              );

            // Get Firestore Data
            const docSnap =
              await getDoc(docRef);

            if (
              docSnap.exists()
            ) {

              // Update State
              setUserData(
                docSnap.data()
              );
            }

          } catch (error) {

            console.log(error);
          }
        }
      };

    fetchUser();

  }, []);

  return (

    <div className="relative group">

      {/* Circle Avatar */}
      <div
        className={`relative w-16 h-16 rounded-full overflow-hidden cursor-pointer border-2 transition-all duration-500 hover:scale-110 ${
          darkMode
            ? "border-cyan-400"
            : "border-cyan-500"
        }`}
      >

        {/* Profile Image */}
        {
          userData?.photo ? (

            <img
              src={userData.photo}
              alt="profile"
              className="w-full h-full object-cover"
            />

          ) : (

            <div
              className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold"
            >

              {
                userData?.name
                  ?.charAt(0)
                || "U"
              }

            </div>
          )
        }

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

          {/* Avatar */}
          <div
            className="w-16 h-16 rounded-full overflow-hidden"
          >

            {
              userData?.photo ? (

                <img
                  src={userData.photo}
                  alt="profile"
                  className="w-full h-full object-cover rounded-full"
                />

              ) : (

                <div
                  className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold"
                >

                  {
                    userData?.name
                      ?.charAt(0)
                    || "U"
                  }

                </div>
              )
            }

          </div>

          {/* Details */}
          <div>

            <h2
              className={`text-xl font-bold ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >

              {
                userData?.name
                || "Guest"
              }

            </h2>

            <p
              className={`text-sm mt-1 ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >

              {
                userData?.email
              }

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

        {/* Bottom */}
        <div className="space-y-3">

          <div className="flex items-center justify-between">

            <p
              className={`text-sm ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Role
            </p>

            <p className="text-cyan-400 font-medium">
              React Developer
            </p>

          </div>

          <div className="flex items-center justify-between">

            <p
              className={`text-sm ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Status
            </p>

            <p className="text-green-400 font-medium">
              Active
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;