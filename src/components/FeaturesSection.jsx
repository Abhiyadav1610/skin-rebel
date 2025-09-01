import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-rebel-peach py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-6 h-6 text-rebel-yellow mr-2">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-gray-600 font-handwriting text-lg">
              the skin manifesto
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Glow Science, Rebel Energy
          </h2>
        </div>

        {/* Main Features Layout */}
        <div className="grid lg:grid-cols-3 gap-16 items-center mb-20">
          {/* Left Column - Feel It, See It */}
          <div className="text-center lg:text-left">
            <div className="mb-8 flex justify-center lg:justify-start">
              {/* Product bottle with rays */}
              <div className="relative">
                <div className="w-32 h-40 bg-gradient-to-br from-orange-100 to-pink-100 border-4 border-rebel-orange rounded-3xl flex items-center justify-center relative overflow-hidden shadow-lg">
                  {/* Product bottle image */}
                  <img
                    src=""
                    alt="Skin Rebel product bottle"
                    className="w-20 h-28 object-cover rounded-xl"
                    loading="lazy"
                  />

                  {/* Star decoration */}
                  <div className="absolute top-3 right-3">
                    <div className="w-5 h-5 text-gray-700">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative rays - more prominent */}
                <div className="absolute inset-0 -z-10">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-12 bg-rebel-yellow opacity-70"
                      style={{
                        top: "50%",
                        left: "50%",
                        transformOrigin: "0 0",
                        transform: `translate(-50%, -50%) rotate(${
                          i * 30
                        }deg) translateY(-80px)`,
                      }}
                    />
                  ))}
                </div>

                {/* Decorative sun burst */}
                <div className="absolute -bottom-4 -left-4 w-8 h-8 text-rebel-yellow opacity-50">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <g transform="translate(50,50)">
                      {Array.from({ length: 8 }, (_, i) => (
                        <line
                          key={i}
                          x1="0"
                          y1="-25"
                          x2="0"
                          y2="-35"
                          stroke="currentColor"
                          strokeWidth="2"
                          transform={`rotate(${i * 45})`}
                        />
                      ))}
                      <circle cx="0" cy="0" r="6" fill="currentColor" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Feel It, See It
            </h3>
            <p className="text-gray-600 mb-6">
              Smoother texture, brighter tone, stronger confidence – we're here
              for visible wins, not empty promises.
            </p>

            <div className="bg-rebel-pink text-white px-6 py-3 rounded-full inline-block shadow-md">
              <span className="font-semibold">SKIN REBEL</span>
            </div>
          </div>

          {/* Center Column - Woman Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="w-56 h-56 bg-white rounded-full p-3 shadow-xl overflow-hidden">
                <img
                  src=""
                  alt="Woman with glowing skin"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>

              {/* Floating star elements */}
              <div className="absolute -top-6 -right-6 w-8 h-8 text-rebel-yellow animate-pulse">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-6 w-6 h-6 text-pink-300 animate-bounce">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Skincare with Attitude */}
          <div className="text-center lg:text-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Skincare with Attitude
            </h3>
            <p className="text-gray-600 mb-6">
              Bold, statement-making products that vibe with your style while
              working hard behind the scenes.
            </p>

            {/* Decorative flower element */}
            <div className="flex justify-center lg:justify-end mb-4">
              <div className="w-8 h-8 text-pink-300">
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

            {/* Decorative sun element */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-10 h-10 text-rebel-yellow opacity-60">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <g transform="translate(50,50)">
                    {Array.from({ length: 8 }, (_, i) => (
                      <line
                        key={i}
                        x1="0"
                        y1="-30"
                        x2="0"
                        y2="-40"
                        stroke="currentColor"
                        strokeWidth="2"
                        transform={`rotate(${i * 45})`}
                      />
                    ))}
                    <circle cx="0" cy="0" r="8" fill="currentColor" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Clinically Backed Glow */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-2/3 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Clinically Backed Glow
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Science-first formulas that actually deliver – Collagen & NAD+
              built for results you can see and feel.
            </p>

            {/* Decorative sun element */}
            <div className="w-8 h-8 text-rebel-yellow opacity-60 mx-auto lg:mx-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <g transform="translate(50,50)">
                  {Array.from({ length: 8 }, (_, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1="-25"
                      x2="0"
                      y2="-35"
                      stroke="currentColor"
                      strokeWidth="2"
                      transform={`rotate(${i * 45})`}
                    />
                  ))}
                  <circle cx="0" cy="0" r="6" fill="currentColor" />
                </g>
              </svg>
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Product container with gradient background */}
              <div className="w-32 h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center shadow-xl relative overflow-hidden">
                <div className="w-20 h-28 bg-amber-700 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src=""
                    alt="Skin Rebel supplement bottle"
                    className="w-full h-full object-cover rounded-2xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-amber-700 bg-opacity-30 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xs transform -rotate-12 text-center leading-tight">
                      SKIN
                      <br />
                      REBEL
                      <br />
                      <span className="text-[8px]">NAD+ TABLETS</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative rays - more prominent */}
              <div className="absolute inset-0 -z-10">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-10 bg-rebel-yellow opacity-70"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: "0 0",
                      transform: `translate(-50%, -50%) rotate(${
                        i * 36
                      }deg) translateY(-70px)`,
                    }}
                  />
                ))}
              </div>

              {/* Decorative star */}
              <div className="absolute -top-3 -right-3 w-8 h-8 text-rebel-yellow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
