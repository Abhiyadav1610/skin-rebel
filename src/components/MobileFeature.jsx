import React from "react";
import hero1 from "../assets/images/hero1.jpg";
import img1 from "../assets/images/mobile/1.png";
import img2 from "../assets/images/feature/1.svg";
import img3 from "../assets/images/mobile/2.png";
import img4 from "../assets/images/hero/4.png";
import img5 from "../assets/images/mobile/3.png";
import img8 from "../assets/images/feature/7.png";

const MobileFeature = () => {
  return (
    <section className="w-full min-h-screen bg-[#fff5ea] py-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden xl:min-h-[781px] xl:flex xl:justify-center">
      {/* Centered container wrapper for large screens */}
      <div className="relative w-full max-w-[1440px] min-h-[700px] sm:min-h-[800px] xl:h-[781px]">
        {/* Mobile and Tablet Layout */}
        <div className="block xl:hidden">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 px-4">
            <div className="flex items-center justify-center mb-6">
              <img className="w-8 h-8 sm:w-10 sm:h-10 mr-3" src={img2} alt="" />
              <p className="font-ben-brown lowercase font-normal text-[18px] sm:text-[24px] lg:text-[32px] leading-[90%] tracking-[-0.03em] text-[#8A5A07]">
                some vibes you just have to see
              </p>
            </div>

            {/* Updated heading with exact specifications */}
            <div className="w-full max-w-[678px] mx-auto mb-6">
              <h1 className="font-darker-grotesque font-bold text-[40px] sm:text-[56px] lg:text-[72px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100">
                Skincare that works While
                <br />
                you live your life
              </h1>
            </div>

            {/* Updated description with exact specifications and proper spacing */}
            <div className="w-full max-w-[678px] mx-auto">
              <p className="font-darker-grotesque font-medium text-[20px] sm:text-[26px] lg:text-[32px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100">
                From inside-out hydration to visible radiance, Skin Rebel gives
                you the tools your skin needs to stay strong and luminous.
              </p>
            </div>
          </div>

          {/* Main Image with Overlay */}
          <div className="relative flex justify-center mb-8">
            <div className="relative">
              {/* Main rounded image */}
              <div className="w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] lg:w-[400px] lg:h-[500px] rounded-[200px] overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={img1}
                  alt="Mobile feature visual"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Cloud badge overlay - replaced orange badge */}
              <div className="absolute bottom-4 left-4 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]">
                <img
                  src={img3}
                  alt="Decorative cloud"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-[-20px] w-12 h-12 sm:w-16 sm:h-16 opacity-80">
                <img
                  src={img8}
                  alt="Decorative flower"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="absolute top-8 right-[-30px] w-16 h-16 sm:w-20 sm:h-20 opacity-80">
                <img
                  src={img4}
                  alt="Decorative star"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="absolute bottom-12 right-[-20px] w-20 h-20 sm:w-24 sm:h-24 opacity-80">
                <img
                  src={img5}
                  alt="Decorative element"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original absolute positioning for XL screens (1280px+) */}
        <div className="hidden xl:block">
          {/* Text Content */}
          <div className="absolute w-[678px] h-[329px] top-[257px] left-[65px]">
            <div className="flex">
              <div className="flex flex-row items-center mb-6">
                <img className="w-[58px] h-[58px] mr-4" src={img2} alt="" />
                <p className="font-ben-brown lowercase font-normal text-[48px] lg:text-[64px] leading-[90%] tracking-[-0.03em] text-[#8A5A07] lowercase">
                  Some vibes you just have to see
                </p>
              </div>
            </div>

            {/* Updated heading with exact specifications and proper spacing */}
            <div className="w-[678px] h-[130px] mb-6">
              <h2 className="font-darker-grotesque font-bold text-[72px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100">
                Skincare that works While
                <br />
                you live your life
              </h2>
            </div>

            {/* Updated description with exact specifications and 24px gap from heading */}
            <div className="w-[678px] h-[96px] mt-6">
              <p className="font-darker-grotesque font-medium text-[32px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100">
                From inside-out hydration to visible radiance, Skin Rebel gives
                you the tools your skin needs to stay strong and luminous.
              </p>
            </div>
          </div>

          {/* Main Image */}
          <div className="absolute w-[489px] h-[680px] top-[61px] right-[65px] rounded-[300px] border overflow-hidden">
            <img
              src={img1}
              alt="Mobile feature visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Star section */}
          <div className="absolute flex flex-col w-[135px] h-[136px] top-[189px] left-[701px] opacity-100">
            <img
              src={img4}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute flex flex-col w-[135px] h-[136px] top-[611px] left-[377px] opacity-100">
            <img
              src={img5}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Outer flower */}
          <div className="absolute flex flex-col w-[92px] h-[103px] top-[142px] left-[58px] opacity-100">
            <img
              src={img8}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cloud section */}
          <div className="absolute flex flex-col w-[260px] h-[203px] top-[330px] left-[723px] opacity-100 overflow-hidden">
            <img
              src={img3}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFeature;
