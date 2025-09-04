import React from "react";
import hero1 from "../assets/images/hero1.jpg";
import img1 from "../assets/images/mobile/1.png";
import img2 from "../assets/images/feature/1.png";
import img3 from "../assets/images/mobile/2.png";
import img4 from "../assets/images/hero/4.png";
import img5 from "../assets/images/mobile/3.png";
import img8 from "../assets/images/feature/7.png";

const MobileFeature = () => {
  return (
    <section className="w-full min-h-[781px] bg-[#fff5ea] flex justify-center">
      {/* Centered container wrapper for large screens */}
      <div className="relative w-full max-w-[1440px] h-[781px]">
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

          <h2 className="font-['Darker_Grotesque'] font-bold text-[42px] leading-[90%] tracking-[-3%] text-[#1C1B1F] mb-6">
            Skincare that works While
            <br />
            you live your life
          </h2>

          <p className="absolute top-[150px] font-['Darker_Grotesque'] font-medium text-[22px] leading-[100%] tracking-normal text-[#1C1B1F]">
            From inside-out hydration to visible radiance, Skin Rebel gives you
            the tools your skin needs to stay strong and luminous.
          </p>
        </div>

        {/* Main Image */}
        <div className="absolute w-[489px] h-[680px] top-[61px] right-[65px] rounded-[300px] border overflow-hidden">
          <img
            src={img1}
            alt="Mobile feature visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Star section ....................... */}
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

        {/* Outer flower ........................... */}
        <div className="absolute flex flex-col w-[92px] h-[103px] top-[142px] left-[58px] opacity-100">
          <img
            src={img8}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cloud section .............. */}
        <div className="absolute flex flex-col w-[260px] h-[203px] top-[330px] left-[723px]  opacity-100 overflow-hidden">
          <img
            src={img3}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileFeature;
