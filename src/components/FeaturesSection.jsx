import React from "react";
import hero1 from "../assets/images/hero1.jpg"; // Ensure you have a hero.jpg in the assets folder
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";

const FeaturesSection = () => {
  return (
    <section
      className="bg-[#FFF9F2] py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-6 h-6 text-rebel-yellow mr-2">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-amber-600 font-handwriting text-lg">
              the glow manifesto
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Glow Science, Rebel Energy
          </h2>
        </div>

        <div className="flex flex-col space-y-24 mb-32">
          {/* First Section - Feel It, See It */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side - Text and Decorative Elements */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Decorative sun element */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="w-12 h-12 text-rebel-yellow opacity-70">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <g transform="translate(50,50)">
                      {Array.from({ length: 16 }, (_, i) => (
                        <line
                          key={i}
                          x1="0"
                          y1="-35"
                          x2="0"
                          y2="-45"
                          stroke="currentColor"
                          strokeWidth="2"
                          transform={`rotate(${i * 22.5})`}
                        />
                      ))}
                      <circle cx="0" cy="0" r="8" fill="currentColor" />
                    </g>
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Feel It, See It
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                Smoother texture, brighter tone, stronger confidence – we're
                here for visible wins, not empty promises.
              </p>
            </div>

            {/* Right Side - Woman Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-white rounded-full p-4 shadow-2xl overflow-hidden">
                  <img
                    src={hero1}
                    alt="Woman with glowing skin"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>

                {/* Rays around woman's image */}
                <div className="absolute inset-0 -z-10">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-16 bg-pink-200 opacity-50"
                      style={{
                        top: "50%",
                        left: "50%",
                        transformOrigin: "0 0",
                        transform: `translate(-50%, -50%) rotate(${
                          i * 18
                        }deg) translateY(-200px)`,
                      }}
                    />
                  ))}
                </div>

                {/* Floating star elements */}
                <div className="absolute -top-6 -right-6 w-8 h-8 text-rebel-yellow animate-pulse">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - Skincare with Attitude */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side - Product bottle with rays */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative inline-block">
                <div className="w-56 h-72 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center relative shadow-xl">
                  <img
                    src={feature2}
                    alt="Skin Rebel product bottle"
                    className="w-32 h-48 object-cover rounded-xl"
                    loading="lazy"
                  />

                  {/* Star decoration */}
                  <div className="absolute top-6 right-6">
                    <div className="w-6 h-6 text-gray-800">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative rays around product */}
                <div className="absolute inset-0 -z-10">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-20 bg-rebel-yellow opacity-60"
                      style={{
                        top: "50%",
                        left: "50%",
                        transformOrigin: "0 0",
                        transform: `translate(-50%, -50%) rotate(${
                          i * 22.5
                        }deg) translateY(-140px)`,
                      }}
                    />
                  ))}
                </div>

                {/* SKIN REBEL Badge */}
                <div className="absolute top-4 -right-8">
                  <div className="bg-rebel-pink text-white px-4 py-2 rounded-full transform rotate-12 shadow-lg">
                    <span className="font-bold text-sm">SKIN REBEL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Text and Decorative Elements */}
            <div className="lg:w-1/2 text-center lg:text-right">
              {/* Decorative sun element */}
              <div className="mb-8 flex justify-center lg:justify-end">
                <div className="w-12 h-12 text-rebel-yellow opacity-70">
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

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Skincare with Attitude
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-md mx-auto lg:ml-auto lg:mr-0">
                Bold, statement-making products that vibe with your style while
                working hard behind the scenes.
              </p>

              {/* Decorative flower element */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-12 h-12 text-pink-300">
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
          </div>

          {/* Third Section - Clinically Backed Glow */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side - Text */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Decorative sun element */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="w-12 h-12 text-rebel-yellow opacity-70">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <g transform="translate(50,50)">
                      {Array.from({ length: 12 }, (_, i) => (
                        <line
                          key={i}
                          x1="0"
                          y1="-30"
                          x2="0"
                          y2="-40"
                          stroke="currentColor"
                          strokeWidth="2"
                          transform={`rotate(${i * 30})`}
                        />
                      ))}
                      <circle cx="0" cy="0" r="6" fill="currentColor" />
                    </g>
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Clinically Backed Glow
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                Science-first formulas that actually deliver – Collagen & NAD+
                built for results you can see and feel.
              </p>
            </div>

            {/* Right Side - Product supplement bottle */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative inline-block">
                <div className="w-56 h-72 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center relative shadow-xl">
                  <div className="w-32 h-48 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                    <img
                      src={feature3}
                      alt="Skin Rebel supplement bottle"
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>

                  {/* Star decoration */}
                  <div className="absolute top-6 left-6">
                    <div className="w-6 h-6 text-gray-800">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative rays around supplement */}
                <div className="absolute inset-0 -z-10">
                  {[...Array(14)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-20 bg-rebel-yellow opacity-60"
                      style={{
                        top: "50%",
                        left: "50%",
                        transformOrigin: "0 0",
                        transform: `translate(-50%, -50%) rotate(${
                          i * 25.7
                        }deg) translateY(-140px)`,
                      }}
                    />
                  ))}
                </div>

                {/* Decorative star */}
                <div className="absolute -top-4 -right-4 w-8 h-8 text-rebel-yellow">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
