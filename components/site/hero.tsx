"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HandCoins, Home, Star, Stethoscope, Users } from "lucide-react";
import { useRef, useState } from "react";

export function Hero() {
  return (
    <>
      <div className="py-3 relative min-h-screen md:min-h-0 h-[95vh]  flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div className="col-span-1">
              <div className="flex flex-col gap-6 mb-0 md:mb-20 mt-5 md:mt-0 pt-6 sm:pt-6">
                {/* Heading */}
                <h1 className="leading-tight text-3xl xs:text-4xl sm:text-5xl md:text-5xl font-semibold max-[375px]:text-xl max-[375px]:flex max-[375px]:flex-col max-[375px]:gap-1 max-[414px]:text-2xl text-[#f4f1f7]">
                  Welcome to
                  <span className="relative inline-block text-[#a7d2e1] ml-2 md:ml-4">
                    rZamba
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-md text-amber-50 font-poppins leading-relaxed">
                  At rZamba, we believe that lasting change starts with
                  connection between communities, children, and systems. Born in
                  the mountains of Ladakh, our mission is to ensure every child
                  receives an education that's not only equitable but also
                  deeply rooted in compassion and relevance. From building
                  toilets to transforming school systems, our journey reflects a
                  commitment to long-term, community-driven impact.
                </p>

                {/* Stats */}
                <div className="flex flex-col sm:flex-row justify-start items-center gap-3 sm:gap-4 md:gap-6 w-full">
                  {/* Solid Color */}
                  <button className="bg-purple-600 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-4xl transition-all duration-300 hover:bg-purple-700 hover:shadow-lg w-full sm:w-auto text-sm sm:text-base">
                    Donate
                  </button>

                  {/* Outline */}
                  <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-4xl transition-all duration-300 hover:from-green-600 hover:to-blue-700 hover:shadow-lg w-full sm:w-auto text-sm sm:text-base">
                    Volunteer
                  </button>

                  {/* Text Button with Icon */}
                  <button className="border-2 border-purple-500 text-purple-500 font-semibold px-4 sm:px-6 md:px-6 py-2 sm:py-3 rounded-none transition-all duration-300 hover:bg-purple-500 hover:text-white w-full sm:w-auto text-sm flex items-center justify-center gap-2">
                    <span>Partner with us</span>
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-1 relative">
              <div className="relative w-full max-w-[500px] sm:max-w-[600px] mx-auto flex justify-center items-center rounded-[5%] transform rotate-2 bg-gradient-to-r from-green-500 to-blue-600 overflow-visible z-10 h-[300px] sm:h-[35vh] md:h-[55vh] sm:bottom-[70px] md:bottom-auto">
                <div className="transform -rotate-2 w-[90%] sm:w-[80%] md:w-[60vw] h-[280px] sm:h-[32vh] md:h-[50vh] relative rounded-bl-lg overflow-hidden z-10">
                  {/* Loan Image */}
                  <img
                    src="/gallery3.webp"
                    alt="Loans image"
                    className="w-[95%] h-full object-cover block mx-auto rounded-[20px]"
                  />
                </div>
              </div>

              {/* Floating Card - 1 - Positioned absolutely relative to the right section container */}
              <div className="hidden sm:flex absolute top-5 left-2 sm:left-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white shadow-lg justify-center items-center z-55 border-0 animate-[bounce_1.8s_infinite]">
                <img
                  src="/circle1.jpg"
                  alt="about"
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full"
                />
              </div>

              {/* Floating Card - 2 - Positioned hidden sm:flex absolutely relative to the right section container */}
              <div className="hidden sm:flex absolute top-4 sm:top-8 left-[40%] sm:left-[33vw] w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white shadow-lg justify-center items-center z-50 border-0 animate-[bounce_1.6s_infinite]">
                <img
                  src="/circle2.png"
                  alt="about"
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full"
                />
              </div>

              {/* Floating Card - 3 - Positioned absolutely relative to the right section container */}
              <div className="hidden sm:flex absolute top-40 sm:top-52 left-32 sm:left-52 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white shadow-lg justify-center items-center z-50 border-0 animate-[bounce_1.5s_infinite]">
                <img
                  src="/gallery1.webp"
                  alt="about"
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
