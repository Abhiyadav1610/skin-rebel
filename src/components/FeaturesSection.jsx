import React from "react";
import img1 from "../assets/images/feature/1.svg";
import img4 from "../assets/images/hero/4.png";
import img3 from "../assets/images/feature/2.png";
import img5 from "../assets/images/feature/3.png";
import img6 from "../assets/images/feature/4.png";
import img7 from "../assets/images/feature/6.png";
import img8 from "../assets/images/feature/7.png";

const FeaturesSection = () => {
  return (
    <section className="relative w-full bg-[#FFF9F2] py-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Centered container wrapper for large screens */}
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[1200px] sm:min-h-[1400px] xl:min-h-[1757px]">
        {/* First section - Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 xl:absolute xl:top-[55px] xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:w-[676px] xl:h-[144px] xl:mb-0">
          <div className="flex flex-row justify-center items-center mb-4">
            <img
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-[58px] xl:h-[58px] mr-3 sm:mr-4"
              src={img1}
              alt=""
            />
            <p className="font-ben-brown lowercase font-normal text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[64px] leading-[90%] tracking-[-0.03em] text-[#8A5A07]">
              The Glow Manifesto
            </p>
          </div>
          <div className="flex justify-center max-w-full xl:w-[720px] xl:h-[65px] mt-4">
            <h1 className="font-darker-grotesque font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[72px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] text-center opacity-100">
              Glow Science, Rebel Energy
            </h1>
          </div>
        </div>

        {/* Mobile and Tablet Layout - Stacked vertically up to 1279px */}
        <div className="block xl:hidden space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Feature 1 - Feel It, See It */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="w-full max-w-[300px] sm:max-w-[350px] mx-auto lg:max-w-[400px] lg:mx-0 lg:flex-1">
              <img
                src={img3}
                alt=""
                className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-lg mb-6 lg:mb-0"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1 px-4">
              <div className="flex items-center mb-4">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mr-3"
                  src={img4}
                  alt=""
                />
              </div>
              <div className="mb-4 max-w-full">
                <h2 className="font-darker-grotesque font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100">
                  Feel It, See It
                </h2>
              </div>
              <div className="max-w-full">
                <p className="font-darker-grotesque font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100">
                  Smoother texture, brighter tone, stronger confidence — we're
                  here for visible wins, not empty promises.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 - Skincare with Attitude */}
          <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-12">
            <div className="w-full max-w-[300px] sm:max-w-[350px] mx-auto lg:max-w-[400px] lg:mx-0 lg:flex-1">
              <img
                src={img5}
                alt=""
                className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-lg mb-6 lg:mb-0"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1 px-4">
              <div className="flex items-center mb-4">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mr-3"
                  src={img4}
                  alt=""
                />
              </div>
              <div className="mb-4 max-w-full">
                <h2 className="font-darker-grotesque font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100">
                  Skincare with Attitude
                </h2>
              </div>
              <div className="max-w-full">
                <p className="font-darker-grotesque font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100">
                  Bold, statement-making products that vibe with your style
                  while working hard behind the scenes.
                </p>
              </div>
            </div>
          </div>

          {/* REMOVED: Central Decorative Element (cloud with SKIN REBEL text) for mobile/tablet */}

          {/* Feature 3 - Clinically Backed Glow */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="w-full max-w-[300px] sm:max-w-[350px] mx-auto lg:max-w-[400px] lg:mx-0 lg:flex-1">
              <img
                src={img7}
                alt=""
                className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-lg mb-6 lg:mb-0"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1 px-4">
              <div className="flex items-center mb-4">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mr-3"
                  src={img4}
                  alt=""
                />
              </div>
              <div className="mb-4 max-w-full">
                <h2 className="font-darker-grotesque font-bold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100">
                  Clinically Backed Glow
                </h2>
              </div>
              <div className="max-w-full">
                <p className="font-darker-grotesque font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100">
                  Science-first formulas that actually deliver — Collagen & NAD+
                  built for results you can see and feel.
                </p>
              </div>
            </div>
          </div>

          {/* Small decorative image */}
          <div className="flex justify-center lg:justify-start lg:ml-12">
            <img
              src={img8}
              alt="Decorative"
              className="w-[70px] h-[80px] sm:w-[80px] sm:h-[90px] lg:w-[91px] lg:h-[103px] object-cover"
            />
          </div>
        </div>

        {/* Desktop Layout - Original absolute positioning for XL screens (1280px+) */}
        <div className="hidden xl:block">
          {/* Second section - Feel It, See It */}
          <div className="absolute flex flex-row w-[659px] h-[178px] top-[465px] left-[90px] opacity-100 gap-[49px]">
            <div className="flex justify-center items-center">
              <img className="w-[59px] h-[59px]" src={img4} alt="" />
            </div>
            <div className="flex flex-col gap-10 w-[545px] h-[58px]">
              <div className="w-[516px] h-[58px]">
                <h1 className="font-darker-grotesque font-bold text-[64px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100">
                  Feel It, See It
                </h1>
              </div>
              <div className="w-[583px] h-[96px]">
                <p className="font-darker-grotesque font-medium text-[32px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100">
                  Smoother texture, brighter tone, stronger confidence — we're
                  here for visible wins, not empty promises.
                </p>
              </div>
            </div>
          </div>

          {/* Third section - Image */}
          <div className="absolute w-[456px] h-[460px] top-[326px] right-[90px]">
            <img
              src={img3}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Fourth section - Skincare with Attitude */}
          <div className="absolute flex flex-row w-[659px] h-[178px] top-[921px] right-[90px] opacity-100 gap-[49px]">
            <div className="flex justify-center items-center">
              <img className="w-[59px] h-[59px]" src={img4} alt="" />
            </div>
            <div className="flex flex-col gap-10 w-[555px] h-[58px]">
              <div className="w-[516px] h-[58px]">
                <h1 className="font-darker-grotesque font-bold text-[64px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100">
                  Skincare with Attitude
                </h1>
              </div>
              <div className="w-[583px] h-[96px]">
                <p className="font-darker-grotesque font-medium text-[32px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100">
                  Bold, statement-making products that vibe with your style
                  while working hard behind the scenes.
                </p>
              </div>
            </div>
          </div>

          {/* Fifth section - Image */}
          <div className="absolute w-[456px] h-[460px] top-[761px] left-[90px]">
            <img
              src={img5}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Sixth section - Central decorative - KEPT for desktop only */}
          <div className="absolute w-[320px] top-[640px] left-1/2 transform -translate-x-1/2 opacity-100">
            <div className="relative w-full p-6">
              <img
                src={img6}
                alt="Hero Visual"
                className="w-full h-auto object-contain"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[6.49deg] z-10">
                <h2 className="font-folklore uppercase text-[46px] tracking-[-3%] leading-[100%] text-white whitespace-nowrap px-2 py-1 text-center">
                  SKIN <br /> REBEL
                </h2>
              </div>
            </div>
          </div>

          {/* Seventh section - Clinically Backed Glow */}
          <div className="absolute flex flex-row w-[659px] h-[178px] top-[1340px] left-[90px] opacity-100 gap-[49px]">
            <div className="flex justify-center items-center">
              <img className="w-[59px] h-[59px]" src={img4} alt="" />
            </div>
            <div className="flex flex-col gap-10 w-[545px] h-[58px]">
              <div className="w-[516px] h-[58px]">
                <h1 className="font-darker-grotesque font-bold text-[64px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100">
                  Clinically Backed Glow
                </h1>
              </div>
              <div className="w-[583px] h-[96px]">
                <p className="font-darker-grotesque font-medium text-[32px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100">
                  Science-first formulas that actually deliver — Collagen & NAD+
                  built for results you can see and feel.
                </p>
              </div>
            </div>
          </div>

          {/* Eighth section - Image */}
          <div className="absolute w-[456px] h-[460px] top-[1194px] right-[90px]">
            <img
              src={img7}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Ninth section - Small decorative image */}
          <div className="absolute flex flex-col w-[91px] h-[103px] top-[1187px] left-1/2 transform -translate-x-1/2 translate-x-[-100px] opacity-100">
            <img
              src={img8}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
