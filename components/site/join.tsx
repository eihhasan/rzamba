"use client";
import { SectionReveal } from "./section-reveal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Join() {
  const [selected, setSelected] = useState<
    "Volunteer" | "Partner" | "Support" | null
  >(null);

  return (
    <SectionReveal className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative circles matching your image style */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-100 rounded-full opacity-60"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-100 rounded-full opacity-50"></div>

      <div id="join" className="mx-auto max-w-4xl px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Join Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Become a volunteer, partner with us, or support our programs in
            Ladakh. Together we can make a difference.
          </p>
        </div>

        {/* Interactive Cards Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: "Volunteer",
              icon: "👥",
              description: "Join hands-on activities and community programs",
            },
            {
              label: "Partner",
              icon: "🤝",
              description: "Collaborate with us as an organization",
            },
            {
              label: "Support",
              icon: "❤️",
              description: "Support our initiatives and programs",
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                selected === item.label
                  ? "border-purple-500 bg-purple-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-purple-300"
              }`}
              onClick={() => setSelected(item.label as any)}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800">
                {item.label}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="bg-white/90 rounded-xl border border-gray-200 shadow-lg p-8 md:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800">
              Let's Get Started
            </h3>
            <p className="text-gray-600 mt-2">
              Fill out the form and we'll reach out to you within 24 hours
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll be in touch soon.");
            }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  required
                  placeholder="Enter your full name"
                  className="w-full h-12 rounded-lg border border-gray-300 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-lg border border-gray-300 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                placeholder="Enter your phone number (optional)"
                className="w-full h-12 rounded-lg border border-gray-300 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How would you like to help? *
              </label>
              <textarea
                required
                placeholder="Tell us about your interests, skills, or how you'd like to contribute..."
                className="w-full min-h-32 rounded-lg border border-gray-300 p-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-4">
              <div className="text-sm text-gray-600 mb-4 sm:mb-0">
                {selected ? (
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Selected:{" "}
                    <strong className="ml-1 text-purple-600">{selected}</strong>
                  </span>
                ) : (
                  "Please select how you want to help above"
                )}
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </SectionReveal>
  );
}
