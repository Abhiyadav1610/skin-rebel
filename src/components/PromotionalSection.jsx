import React from "react";
import promotion from '../assets/images/promotion.jpg'
const PromotionalSection = () => {
  return (
    <section className="bg-gradient-to-br from-pink-100 to-pink-200 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Text Content in Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-16 mb-16">
          {/* Left Side - Main Heading and Badge */}
          <div className="text-left relative">
            {/* Decorative flower - top left */}
            <div className="absolute -top-4 -left-4 w-10 h-10 text-rebel-yellow opacity-70">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-full h-full"
              >
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(0 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(60 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(120 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(180 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(240 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(300 12 12)"
                />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-rebel-orange leading-tight mb-6">
              BE
              <br />
              LUMINOUS.
              <br />
              BE A SKIN
              <br />
              REBEL.
            </h1>

            <p className="text-amber-600 font-handwriting text-xl mb-8">
              join the glow revolution
            </p>

            {/* GLOW IN MOTION Badge */}
            <div className="inline-block bg-rebel-yellow text-white px-8 py-4 rounded-full shadow-lg transform -rotate-3">
              <span className="font-bold text-lg">GLOW IN MOTION</span>
            </div>
          </div>

          {/* Right Side - Description Text */}
          <div className="text-left lg:pt-16">
            <p className="text-gray-800 text-lg leading-relaxed max-w-lg">
              Your glow story starts now – with collagen, NAD+, and creams that
              work together to repair, hydrate, and keep your skin looking its
              best every day.
            </p>

            {/* Decorative flower - top right */}
            <div className="absolute top-8 right-8 w-10 h-10 text-rebel-yellow opacity-70">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-full h-full"
              >
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(0 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(60 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(120 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(180 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(240 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="8"
                  rx="2"
                  ry="4"
                  transform="rotate(300 12 12)"
                />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section - Large Product Image Container */}
        <div className="flex justify-center">
          <div className="relative max-w-4xl w-full">
            {/* Main oval product container */}
            <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-orange-100 to-pink-100 rounded-[6rem] border-4 border-amber-600 shadow-2xl overflow-hidden p-8 flex items-center justify-center">
              <img
                src={promotion}
                alt="Skin Rebel Product Collection"
                className="w-full h-full object-cover rounded-[4rem]"
                loading="lazy"
              />
            </div>

            {/* Decorative sun burst - top right */}
            <div className="absolute -top-6 -right-6 w-16 h-16 text-rebel-yellow opacity-60">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <g transform="translate(50,50)">
                  {Array.from({ length: 12 }, (_, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1="-35"
                      x2="0"
                      y2="-45"
                      stroke="currentColor"
                      strokeWidth="3"
                      transform={`rotate(${i * 30})`}
                    />
                  ))}
                  <circle cx="0" cy="0" r="10" fill="currentColor" />
                </g>
              </svg>
            </div>

            {/* SKIN REBEL Badge - bottom left */}
            <div className="absolute -bottom-6 -left-8 bg-rebel-yellow text-white px-8 py-4 rounded-full shadow-lg transform -rotate-12">
              <span className="font-bold text-xl">SKIN REBEL</span>
            </div>

            {/* GLOW IN MOTION Badge - right side */}
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-rebel-yellow text-white px-6 py-3 rounded-full shadow-lg rotate-12">
              <span className="font-bold text-sm">GLOW IN MOTION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
