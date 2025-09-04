import React from "react";
import promotion from "../assets/images/promotion.jpg";
import img1 from "../assets/images/promotion/1.png";
import img3 from "../assets/images/mobile/2.png";
import img6 from "../assets/images/hero/6.png";
import img8 from "../assets/images/feature/7.png";

const PromotionalSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#FFE6EF] py-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden xl:min-h-[1078px] xl:flex xl:justify-center">
      {/* Centered container wrapper for large screens */}
      <div className="relative w-full max-w-[1440px] min-h-[900px] sm:min-h-[1000px] xl:h-[1078px]">
        {/* Mobile and Tablet Layout */}
        <div className="block xl:hidden">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 px-4">
            {/* Star icon with tagline */}
            <div className="flex items-center justify-center mb-6">
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 mr-3"
                src={img8}
                alt="Star"
              />
              <p className="font-ben-brown lowercase font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[90%] tracking-[-0.03em] text-[#8A5A07]">
                join the glow revolution
              </p>
            </div>

            {/* Main heading */}
            <div className="mb-6">
              <h1 className="font-folklore uppercase font-normal text-[48px] sm:text-[64px] lg:text-[72px] leading-[90%] tracking-normal text-[#FF4930]">
                BE LUMINOUS.
                <br />
                BE A SKIN
                <br />
                REBEL.
              </h1>
            </div>

            {/* Description text */}
            <div className="max-w-[400px] mx-auto">
              <p className="font-darker-grotesque font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[100%] text-[#1C1B1F]">
                Your glow story starts now — with collagen, NAD+, and creams
                that work together to repair, hydrate, and keep your skin
                looking its best every day.
              </p>
            </div>
          </div>

          {/* Main Image with Overlays */}
          <div className="relative flex justify-center mb-8">
            <div className="relative">
              {/* Main rounded image */}
              <div className="w-[320px] h-[400px] sm:w-[380px] sm:h-[460px] lg:w-[450px] lg:h-[520px] rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] overflow-hidden shadow-lg">
                <img
                  src={img1}
                  alt="Promotional visual"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* "GLOW IN MOTION" badge - top right */}
              

              {/* "SKIN REBEL" cloud badge - bottom left */}
              <div className="absolute bottom-4 left-[-20px] sm:left-[-30px] w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] lg:w-[160px] lg:h-[140px] z-10">
                <img
                  src={img6}
                  alt="Cloud badge"
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[6.49deg]">
                  <h2 className="font-folklore uppercase text-[16px] sm:text-[20px] lg:text-[24px] tracking-[-3%] leading-[100%] text-white whitespace-nowrap text-center">
                    SKIN
                    <br />
                    REBEL
                  </h2>
                </div>
              </div>

              {/* Decorative cloud elements */}
              <div className="absolute top-8 left-[-30px] w-16 h-16 sm:w-20 sm:h-20 opacity-80 rotate-[8deg]">
                <img
                  src={img3}
                  alt="Decorative cloud"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="absolute bottom-16 right-[-25px] w-14 h-14 sm:w-16 sm:h-16 opacity-80">
                <img
                  src={img3}
                  alt="Decorative cloud"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original absolute positioning for XL screens (1280px+) */}
        <div className="hidden xl:block">
          {/* Text Content Section */}
          <div className="absolute w-full h-[361px] top-0">
            <div className="absolute flex flex-col w-[585px] h-[361px] top-[84px] left-[61px]">
              <h1 className="font-folklore uppercase font-normal text-[85px] leading-[90%] tracking-normal text-[#FF4930]">
                be
                <br />
                luminous.
                <br />
                be a skin
                <br />
                rebel.
              </h1>
            </div>

            <div className="absolute w-[728px] h-[134px] top-[233px] right-[61px]">
              <p className="font-darker-grotesque font-normal text-[40px] leading-[100%] text-[#1C1B1F]">
                Your glow story starts now — with collagen, NAD+, and creams
                that work together to repair, hydrate, and keep your skin
                looking its best every day.
              </p>
            </div>
          </div>

          {/* Main Image */}
          <div className="absolute w-[851px] h-[437px] top-[505px] left-1/2 transform -translate-x-1/2 rounded-[200px] overflow-hidden">
            <img
              src={img1}
              alt="Promotional visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cloud section 1 */}
          <div className="absolute flex flex-col w-[151px] h-[140px] top-[54px] left-[401px] opacity-100 rotate-[8.49deg] overflow-hidden">
            <img
              src={img3}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cloud section 2 */}
          <div className="absolute flex flex-col w-[151px] h-[123px] top-[724px] right-[201px] opacity-100 overflow-hidden">
            <img
              src={img3}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Outer other cloud */}
          <div className="absolute flex flex-col w-[281px] h-[230px] top-[760px] left-[165px] opacity-100 overflow-hidden">
            <img
              src={img6}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute flex flex-col top-[819px] left-[226px] rotate-[6.49deg] overflow-hidden">
            <h2 className="font-folklore uppercase text-[46px] tracking-[-3%] leading-[100%] text-white whitespace-nowrap px-2 py-1">
              SKIN <br /> REBEL
            </h2>
          </div>

          {/* Outer flower */}
          <div className="absolute flex flex-col w-[92px] h-[103px] top-[105px] right-[61px] opacity-100 overflow-hidden">
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

export default PromotionalSection;
