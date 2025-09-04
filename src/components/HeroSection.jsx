import React from "react";
import img1 from "../assets/images/hero/1.png";
import img2 from "../assets/images/hero/2.png";
import img3 from "../assets/images/hero/3.png";
import img4 from "../assets/images/hero/4.png";
import img5 from "../assets/images/hero/5.png";
import img6 from "../assets/images/hero/6.png";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center h-[925px] bg-[#FFAFCD] opacity-100">
      {/* Inner Content Container */}
      <div className="absolute flex w-[1300px] h-[698px] top-[50px] opacity-100 rounded-[64px] bg-[#FFF9F2]">
        {/* Left Side - Text Content with exact positioning */}
        <div className="absolute flex flex-col w-[659px] h-[384px] top-[192px] left-[53px] opacity-100 gap-6">
          <h1 className="font-folklore uppercase font-normal text-[85px] leading-[90%] tracking-normal text-[#FF4930]">
            Skincare
            <br />
            with an
            <br />
            Attitude.
          </h1>

          <p className="font-ben-brown lowercase font-normal text-[64px] leading-[90%] tracking-[-0.03em] text-[#8A5A07] lowercase">
            where good skin meets bold energy
          </p>

          <button className="text-white font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center w-[234px] h-[50px] text-[#FF4930] opacity-100 rounded-full border-2 border-[#FF4930] gap-2 pt-4 pr-2 pb-4 pl-2">
            Shop Now
          </button>
        </div>

        {/* Image 1 - Behind */}
        <div className="absolute flex flex-col w-[453px] h-[330px] top-[319px] left-[710px] rounded-tl-[300px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] overflow-hidden">
          <img
            src={img1}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 - Overlapping on top */}
        <div className="absolute flex flex-col w-[323px] h-[484px] top-[62px] left-[724px] rounded-[300px] overflow-hidden">
          <img
            src={img2}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 - Overlapping on top */}
        <div className="absolute flex flex-col w-[275px] h-[381px] top-[258px] left-[1005px] rounded-[300px] opacity-100 overflow-hidden">
          <img
            src={img3}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4 - Overlapping on top */}
        <div className="absolute flex flex-col w-[135px] h-[136px] top-[43px] left-[656px] opacity-100 overflow-hidden">
          <img
            src={img4}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 5 - Overlapping on top */}
        <div className="absolute flex flex-col w-[91px] h-[103px] top-[159px] left-[1148px] opacity-100 overflow-hidden">
          <img
            src={img5}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 6 - Overlapping on top */}
        <div className="absolute flex flex-col w-[260px] h-[203px] top-[465px] left-[765px] opacity-100 overflow-hidden">
          <img
            src={img6}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 7 - Overlapping on top */}
        <div className="absolute flex flex-col w-[146px] h-[107px] top-[525px] left-[827px]  rotate-[-6.49deg]">
          <h2 className="font-folklore uppercase w-[400px] text-[46px] tracking-[-3%] leading-[100%] text-white">
            SKIN <br /> REBEL
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
