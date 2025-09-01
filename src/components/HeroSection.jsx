import React from "react";
import hero1 from "../assets/images/hero1.jpg"; // Ensure you have a hero.jpg in the assets folder
import hero2 from "../assets/images/hero2.jpg"; // Ensure you have a hero.png in the assets folder
import flowerIcon from "../assets/images/flowerIcon.png"; // Ensure you have a flower-icon.svg in the assets folder
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-rebel-pink to-pink-300 min-h-screen flex items-center overflow-hidden py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Inner cream/beige rounded container - much larger now */}
        <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl lg:rounded-[3rem] w-lg p-12  lg:p-40 shadow-lg mx-2">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-rebel-orange mb-6 leading-tight">
                  SKINCARE
                  <br />
                  WITH AN
                  <br />
                  ATTITUDE.
                </h1>
                <p className="text-lg sm:text-xl text-gray-800 mb-8 font-handwriting">
                  where good skin meets bold energy
                </p>
                <button className="bg-transparent text-rebel-orange px-8 py-3 rounded-full font-semibold border-2 border-rebel-orange hover:bg-rebel-orange hover:text-white transition-all">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Right Content - Image Composition */}
            <div className="lg:w-1/2 relative">
              <div
                className="relative mx-auto"
                style={{ width: "400px", height: "400px" }}
              >
                {/* Main large vertical oval image */}
                <div className="absolute top-0 left-0 w-64 h-96 lg:w-72 lg:h-[400px] bg-white rounded-full p-3 shadow-2xl overflow-hidden">
                  <img
                    src={hero1}
                    alt="Woman with Skin Rebel product"
                    className="w-full h-full object-cover rounded-full"
                  />

                  {/* "it's a vibe" text bubble */}
                  <div className="absolute bottom-16 left-8 bg-white px-3 py-1 rounded-full shadow-md border">
                    <span className="text-gray-700 font-handwriting text-sm">
                      it's a vibe
                    </span>
                  </div>
                </div>

                {/* Smaller vertical oval image - bottom right overlap */}
                <div className="absolute bottom-0 right-0 w-32 h-48 lg:w-36 lg:h-52 bg-white rounded-full p-2 shadow-xl overflow-hidden">
                  <img
                    src={hero2}
                    alt="Woman applying skincare"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* SKIN REBEL Badge - Star shaped */}
                <div className="absolute bottom-6 right-18 z-10">
                  <div className="relative">
                    {/* Star/burst background */}
                    <div className="w-20 h-20 bg-rebel-yellow rounded-full relative flex items-center justify-center shadow-lg transform rotate-12">
                      {/* Star points */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-rebel-yellow rotate-0"></div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-rebel-yellow rotate-0"></div>
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-6 h-3 bg-rebel-yellow rotate-0"></div>
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-6 h-3 bg-rebel-yellow rotate-0"></div>

                      {/* Center text */}
                      <div className="text-center">
                        <span className="text-white font-bold text-xs leading-tight">
                          SKIN
                          <br />
                          REBEL
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}

                {/* Top right decorative burst/sun */}
                <div className="absolute -top-4 right-8 w-12 h-12 text-rebel-yellow opacity-70">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <g transform="translate(50,50)">
                      {/* Sun rays */}
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
                      {/* Center circle */}
                      <circle cx="0" cy="0" r="8" fill="currentColor" />
                    </g>
                  </svg>
                </div>

                {/* Top right flower decoration */}
                <div className="absolute top-8 -right-4 w-10 h-10 animate-pulse">
                  <img
                    src={flowerIcon}
                    alt="Decorative flower"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Bottom left small circle */}
                <div className="absolute bottom-4 -left-6 w-4 h-4 bg-pink-300 rounded-full animate-bounce"></div>

                {/* Additional small decorative elements */}
                <div className="absolute top-32 left-4 w-2 h-2 bg-rebel-orange rounded-full opacity-60"></div>
                <div className="absolute bottom-24 right-2 w-3 h-3 bg-rebel-pink rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
