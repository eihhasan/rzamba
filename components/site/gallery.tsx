"use client";
import React from "react";
import { SectionReveal } from "./section-reveal";

const images = [
  "/gallery1.webp",
  "/gallery2.webp",
  "/gallery3.webp",
  "/gallery4.webp",
  "/gallery5.webp",
  "/gallery6.webp",
];

// Create duplicated arrays for seamless infinite scroll
const topRowImages = [...images, ...images, ...images];
const bottomRowImages = [...images.reverse(), ...images, ...images];

export function Gallery() {
  return (
    <SectionReveal className="py-16 md:py-20">
      <div id="gallery" className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Photo{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
        </div>

        {/* Double Carousel Container */}
        <div className="space-y-6 overflow-hidden">
          {/* Top Row - Left to Right */}
          <div className="relative">
            <div className="flex gap-6 animate-scroll-left">
              {topRowImages.map((src, i) => (
                <div
                  key={`top-${i}`}
                  className="flex-shrink-0 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ width: "320px", height: "240px" }}
                >
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Gallery image ${(i % images.length) + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* <div className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Image {(i % images.length) + 1}
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Right to Left */}
          <div className="relative">
            <div className="flex gap-6 animate-scroll-right">
              {bottomRowImages.map((src, i) => (
                <div
                  key={`bottom-${i}`}
                  className="flex-shrink-0 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ width: "300px", height: "200px" }}
                >
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Gallery image ${(i % images.length) + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* <div className="absolute bottom-4 right-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Image {(i % images.length) + 1}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 80s linear infinite;
          width: calc(
            320px * ${topRowImages.length} + 24px * ${topRowImages.length - 1}
          );
        }

        .animate-scroll-right {
          animation: scroll-right 80s linear infinite;
          width: calc(
            320px * ${bottomRowImages.length} + 24px *
              ${bottomRowImages.length - 1}
          );
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </SectionReveal>
  );
}
