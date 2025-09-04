import React from "react";
import img1 from "../assets/images/hero/1.png";
import img2 from "../assets/images/hero/2.png";
import img3 from "../assets/images/hero/3.png";
import img4 from "../assets/images/hero/4.png";
import img5 from "../assets/images/hero/5.png";
import img6 from "../assets/images/hero/6.png";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#FFAFCD] opacity-100 p-4 sm:p-6">
      {/* Inner Content Container */}
      <div className="relative w-full max-w-[1400px] min-h-[700px] sm:min-h-[800px] lg:min-h-[690px] rounded-[32px] sm:rounded-[48px] lg:rounded-[64px] bg-[#FFF9F2] overflow-hidden">
        {/* Mobile Layout (iPhone 16 Plus and smaller) */}
        <div className="block lg:hidden">
          {/* Mobile Content */}
          <div className="flex flex-col items-center text-center px-6 sm:px-8 pt-8 sm:pt-12">
            {/* Main Heading - Updated with consistent styling */}
            <h1 className="font-folklore uppercase font-normal text-[40px] sm:text-[52px] leading-[90%] tracking-normal text-[#FF4930] mb-4 sm:mb-6">
              Skincare
              <br />
              with an
              <br />
              Attitude.
            </h1>

            {/* Subheading */}
            <p className="font-ben-brown lowercase font-normal text-[22px] sm:text-[28px] leading-[90%] tracking-[-0.03em] text-[#8A5A07] mb-6 sm:mb-8">
              where good skin meets bold energy
            </p>

            {/* Button */}
            <button className="text-[#FF4930] font-semibold text-lg rounded-full border-2 border-[#FF4930] w-[200px] h-[50px] hover:opacity-90 transition-opacity flex items-center justify-center px-4 gap-2 mb-8 sm:mb-12">
              Shop Now
            </button>
          </div>

          {/* Mobile Images Container */}
          <div className="relative h-[400px] sm:h-[500px] mx-4 sm:mx-6">
            {/* Image 2 - Main central image */}
            <div className="absolute rounded-[200px] overflow-hidden w-[180px] sm:w-[220px] h-[270px] sm:h-[320px] top-[20px] sm:top-[30px] left-1/2 transform -translate-x-1/2 z-10">
              <img
                src={img2}
                alt="Hero Visual"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 4 - Top left (on top of main image) */}
            <div className="absolute overflow-hidden w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] top-[10px] sm:top-[20px] left-[20px] sm:left-[30px] z-20">
              <img
                src={img4}
                alt="Hero Visual"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Image 5 - Top right (on top of main image) */}
            <div className="absolute overflow-hidden w-[60px] sm:w-[70px] h-[70px] sm:h-[80px] top-[0px] sm:top-[100px] right-[30px] sm:right-[40px] z-20">
              <img
                src={img5}
                alt="Hero Visual"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Image 6 - Bottom */}
            <div className="absolute overflow-hidden w-[160px] sm:w-[180px] h-[120px] sm:h-[140px] bottom-[20px] sm:bottom-[30px] left-1/2 transform -translate-x-1/2 z-20">
              <img
                src={img6}
                alt="Hero Visual"
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>

            {/* Text Overlay - "SKIN REBEL" (on top of Image 6) */}
            <div className="absolute bottom-[60px] sm:bottom-[80px] left-1/2 transform -translate-x-1/2 rotate-[-6.49deg] z-20">
              <h2 className="font-folklore uppercase text-[24px] sm:text-[32px] tracking-[-3%] leading-[100%] text-white text-center">
                SKIN
                <br />
                REBEL
              </h2>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Large screens and up) */}
        <div className="hidden lg:block">
          {/* Left Side - Text Content */}
          <div className="absolute flex flex-col w-[659px] h-[384px] top-[192px] left-[53px] opacity-100 gap-6">
            {/* Main Heading - Already correct */}
            <h1 className="font-folklore uppercase font-normal text-[85px] leading-[90%] tracking-normal text-[#FF4930]">
              Skincare
              <br />
              with an
              <br />
              Attitude.
            </h1>

            <p className="font-ben-brown lowercase font-normal text-[64px] leading-[90%] tracking-[-0.03em] text-[#8A5A07]">
              where good skin meets bold energy
            </p>

            <button className="text-[#FF4930] font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center w-[234px] h-[50px] px-[10px] py-4 gap-[10px] rounded-[100px] border-2 border-[#FF4930]">
              Shop Now
            </button>
          </div>

          {/* Desktop Images - Exact positioning maintained */}
          <div className="absolute flex flex-col w-[453px] h-[330px] top-[319px] left-[710px] rounded-tl-[300px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] overflow-hidden">
            <img
              src={img1}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute flex flex-col w-[323px] h-[484px] top-[62px] left-[724px] rounded-[300px] overflow-hidden">
            <img
              src={img2}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute flex flex-col w-[275px] h-[381px] top-[258px] left-[1005px] rounded-[300px] opacity-100 overflow-hidden">
            <img
              src={img3}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute flex flex-col w-[135px] h-[136px] top-[43px] left-[656px] opacity-100 overflow-hidden">
            <img
              src={img4}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute flex flex-col w-[91px] h-[103px] top-[159px] left-[1148px] opacity-100 overflow-hidden">
            <img
              src={img5}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute flex flex-col w-[260px] h-[203px] top-[465px] left-[765px] opacity-100 overflow-hidden">
            <img
              src={img6}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute flex flex-col w-[146px] h-[107px] top-[525px] left-[827px] rotate-[-6.49deg]">
            <h2 className="font-folklore uppercase w-[400px] text-[46px] tracking-[-3%] leading-[100%] text-white">
              SKIN
              <br />
              REBEL
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
