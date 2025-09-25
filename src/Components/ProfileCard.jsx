import React from "react";
import Divine from "../assets/Images/Divineee.jpg";

export default function ProfileCard() {
  return (
    <div className="relative mr-0 md:mr-10 flex items-center justify-center">
      <div
        className="absolute -right-30 -top-20 w-48 h-64 rounded-3xl blur-3xl transform rotate-12 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,58,237,0.28), rgba(14,165,233,0.12))",
        }}
      />

      <div className="relative z-10 bg-transparent p-6 md:p-10 rounded-2xl flex flex-col-reverse md:flex-row items-center md:items-center gap-8 md:gap-16">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="mb-6 md:mb-20 text-3xl font-extrabold tracking-tight rounded-lg shadow-sm ">
            About Me
          </h1>
          <h1 className="inline-block px-5 py-3 text-3xl font-extrabold tracking-tight rounded-lg backdrop-blur-md bg-purple-700/10 border border-white/20 shadow-sm">
            Divine Dilibe
          </h1>
          <p className="text-purple-300 mt-3">
            Frontend Developer • UI Enthusiast
          </p>

          <p className="mt-6 text-gray-300 leading-relaxed text-left">
            I build modern, responsive front-ends using React and Tailwind CSS.
            I focus on polished interactions, accessibility, and clean code. The
            UI here features a glass-framed profile, animated touches, and a
            clear stack showcase.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="text-sm px-4 py-2 bg-white/6 border border-white rounded-lg hover:bg-white/8 transition"
              href="#"
            >
              View projects
            </a>
            <a
              className="text-sm px-4 py-2 bg-transparent border border-white/8 rounded-lg hover:bg-white/6 transition"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="w-68 h-70 md:w-86 md:h-92 rounded-3xl p-3 md:p-4 border bg-white/6 border-white/10 backdrop-blur-md shadow-inner-soft flex items-center justify-center transform rotate-6">
            <div className="w-full h-full overflow-hidden rounded-2xl">
              <img
                src={Divine}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.6), 0 0 30px rgba(124,58,237,0.06)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
