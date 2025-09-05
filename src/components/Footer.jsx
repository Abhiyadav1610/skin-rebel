import React from "react";
import img1 from "../assets/images/footer/1.png";
import img2 from "../assets/images/footer/2.png";
import img6 from "../assets/images/hero/6.png";
import img10 from "../assets/images/hero/4.png";

const Footer = () => {
  return (
    <div
      className="relative overflow-x-hidden"
      style={{
        height: "1318px",
      }}
    >
      {/* Responsive second last section - FIXED */}
      <div className="absolute w-full h-[461px] bg-[#F6E6D5] rounded-[64px] overflow-hidden">
        {/* Desktop Layout (1280px and above) */}
        <div className="hidden xl:flex xl:flex-row w-full h-full overflow-hidden">
          {/* Left Text Section - Desktop */}
          <div className="absolute flex flex-col opacity-100 w-[602px] h-[300px] top-[90px] left-[106px] gap-[32px] rotate-0">
            <div className="flex flex-col opacity-100 w-[602px] h-[218px] gap-[24px] rotate-0">
              <h1 className="font-folklore uppercase font-normal text-[85px] leading-[90%] tracking-normal text-[#FF4930]">
                Your Best
                <br />
                Skin Awaits
              </h1>

              <p className="font-normal font-['Darker_Grotesque'] text-[32px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f]">
                Every product is packed with skin-loving ingredients and backed
                by science.
              </p>
            </div>

            <button className="flex items-center justify-center text-[#FF4930] font-semibold text-lg border-[#FF4930] hover:opacity-90 transition-opacity w-[234px] h-[50px] opacity-100 gap-[10px] rounded-[100px] pt-4 pr-[10px] pb-4 pl-[10px] border-2 border-solid rotate-0">
              Shop Now
            </button>
          </div>

          {/* Right Image Section - Desktop */}
          <div className="absolute overflow-hidden w-[700px] h-[500px] top-0 right-0 opacity-100 rotate-0 rounded-[50px]">
            <img
              src={img1}
              alt=""
              className="w-full h-full object-contain rounded-[50px]"
            />
          </div>

          {/* Cloud overlay - Desktop */}
          <div className="absolute z-10 w-[281px] h-[231px] top-0 left-[650px] rotate-0 opacity-100 rounded-[18px]">
            <img
              src={img6}
              alt="Hero Visual"
              className="w-full h-full object-contain rounded-[18px]"
            />
          </div>

          {/* SKIN REBEL text - Desktop */}
          <div className="absolute z-20 w-[182px] h-[107px] top-[68px] left-[700px] rotate-[6.49deg] opacity-100">
            <h2 className="text-white m-0 font-[Folklore] font-normal text-[46px] leading-[100%] tracking-[-3%] text-center uppercase">
              CLEAR <br /> SKIN
            </h2>
          </div>

          {/* img10 decoration - Desktop */}
          <div className="absolute z-30 w-[200px] h-[200px] top-[-20px] right-[-20px] opacity-100 rotate-0">
            <img
              src={img10}
              alt="Top right decorative"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Mobile/Tablet Layout (up to 1279px) - FIXED */}
        <div className="flex xl:hidden flex-col items-center justify-center w-full h-full py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="text-center max-w-4xl w-full">
            {/* Mobile Text Section */}
            <div className="mb-8 sm:mb-12">
              {/* Large heading matching reference */}
              <h1 className="font-folklore uppercase font-bold text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] leading-[85%] tracking-normal text-[#FF4930] mb-6 sm:mb-8">
                Your Best
                <br />
                Skin Awaits
              </h1>

              {/* Small paragraph matching reference */}
              <p className="font-['Darker_Grotesque'] font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[110%] tracking-[-0.01em] text-[#1c1b1f] max-w-md mx-auto mb-8 sm:mb-10">
                Every product is packed with skin-loving ingredients and backed
                by science.
              </p>

              {/* Shop Now button matching reference */}
              <button className="inline-flex items-center justify-center text-[#FF4930] font-semibold text-[16px] sm:text-[18px] border-[#FF4930] hover:opacity-90 transition-opacity px-8 sm:px-10 py-3 sm:py-4 rounded-full border-2 border-solid">
                Shop Now
              </button>
            </div>

            {/* Product image at bottom matching reference */}
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
              <img
                src={img1}
                alt="Skin Rebel Products"
                className="w-full h-auto object-contain rounded-[20px] sm:rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Bottom Section - FIXED FOR HORIZONTAL SCROLL */}
      <div className="absolute w-full h-[857px] top-[461px] overflow-x-hidden">
        <div className="bg-[#FFE6EF] rounded-t-[64px] w-full h-full relative overflow-x-hidden">
          {/* Left Text Section - SKIN REBEL - Responsive - FIXED WIDTH */}
          <div className="absolute flex flex-col w-[421px] h-[143px] top-[94px] left-[67px] gap-6 rotate-0 opacity-100 max-lg:relative max-lg:w-full max-lg:left-0 max-lg:top-0 max-lg:px-4 max-lg:pt-8">
            {/* SKIN REBEL heading - FIXED THE HUGE WIDTH */}
            <h1
              className="font-folklore uppercase w-full max-w-[421px] h-[55px] font-normal text-[48px] leading-[100%] tracking-[-0.03em] text-[#FF4930] rotate-0 opacity-100 m-0 max-lg:w-full max-lg:text-3xl max-lg:h-auto overflow-hidden"
              style={{ fontFamily: "Folklore" }}
            >
              SKIN REBEL
            </h1>

            {/* Description text */}
            <p
              className="w-full max-w-[531px] h-[64px] font-semibold text-[32px] leading-[100%] tracking-[0%] text-[#1c1b1f] rotate-0 opacity-100 m-0 max-lg:w-full max-lg:text-lg max-lg:h-auto max-lg:mb-4"
              style={{ fontFamily: "Darker Grotesque" }}
            >
              Every product is packed with skin-loving ingredients and backed by
              science.
            </p>
          </div>

          {/* Right Side - Newsletter Signup Heading - Responsive */}
          <div className="absolute w-[305px] h-[32px] top-[133px] left-[840px] rotate-0 opacity-100 max-lg:relative max-lg:w-full max-lg:left-0 max-lg:top-0 max-lg:px-4 max-lg:mb-4">
            <h3
              className="font-semibold text-[32px] leading-[100%] tracking-[0%] text-[#1c1b1f] m-0 max-lg:text-lg"
              style={{ fontFamily: "Darker Grotesque" }}
            >
              Signup for our newsletter
            </h3>
          </div>

          {/* Right Side - Input Field and Button Container - Responsive */}
          <div className="absolute flex w-[534px] h-[61px] top-[176px] left-[840px] gap-[17px] rotate-0 opacity-100 max-lg:relative max-lg:w-full max-lg:left-0 max-lg:top-0 max-lg:px-4 max-lg:flex-col max-lg:h-auto max-lg:gap-4 max-lg:mb-8">
            {/* Email Input Field */}
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-transparent border-2 focus:outline-none w-[354px] h-[61px] rounded-full border-solid pt-4 pr-[10px] pb-4 pl-5 rotate-0 opacity-100 text-[16px] max-lg:w-full max-lg:h-12"
              style={{
                borderColor: "#FF493080",
                fontFamily: "Darker Grotesque, sans-serif",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#FF493080";
                e.target.style.outline = "none";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#FF493080";
              }}
            />

            <style jsx>{`
              input::placeholder {
                color: #ff493080;
              }
            `}</style>

            {/* Shop Now Button */}
            <button
              className="text-white font-semibold hover:opacity-90 transition-opacity w-[163px] h-[61px] bg-[#FF4930] rounded-full pt-4 pr-[10px] pb-4 pl-[10px] rotate-0 opacity-100 text-[16px] border-none cursor-pointer max-lg:w-full max-lg:h-12"
              style={{ fontFamily: "Darker Grotesque, sans-serif" }}
            >
              Shop Now
            </button>
          </div>

          {/* Second Section - Footer Links and Image - Responsive */}
          <div className="absolute flex w-full max-w-[1307px] h-[353px] top-[337px] left-[67px] justify-between rotate-0 opacity-100 max-lg:relative max-lg:w-full max-lg:left-0 max-lg:top-0 max-lg:flex-col max-lg:h-auto max-lg:px-4">
            {/* Text Columns - Only 4 main columns - Responsive */}
            <div className="flex w-full max-w-[687px] h-[266px] gap-[45px] rotate-0 opacity-100 max-lg:w-full max-lg:h-auto max-lg:grid max-lg:grid-cols-2 max-lg:gap-8 max-lg:mb-8 max-md:grid-cols-1">
              {/* Why Skin Rebel Column */}
              <div className="flex flex-col w-[138px] max-lg:w-full">
                <h4
                  className="w-full max-w-[238px] h-[22px] font-extrabold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] rotate-0 opacity-100 m-0 mb-4 max-lg:w-full max-lg:text-lg max-lg:h-auto"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Why Skin Rebel
                </h4>

                <span
                  className="w-full max-w-[111px] h-[14px] font-extrabold text-[16px] leading-[90%] tracking-[-0.03em] text-[#666] rotate-0 opacity-100 mb-2 max-lg:w-full max-lg:text-sm max-lg:h-auto"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  CUSTOMERS
                </span>

                {/* CUSTOMERS links with added gap */}
                <div className="mb-6">
                  <a
                    href="#"
                    className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline mb-1 block max-lg:text-xs"
                    style={{ fontFamily: "Darker Grotesque" }}
                  >
                    Shop products
                  </a>
                  <a
                    href="#"
                    className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline mb-1 block max-lg:text-xs"
                    style={{ fontFamily: "Darker Grotesque" }}
                  >
                    How it works
                  </a>
                  <a
                    href="#"
                    className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline mb-1 block max-lg:text-xs"
                    style={{ fontFamily: "Darker Grotesque" }}
                  >
                    Ingredients & benefits
                  </a>
                  <a
                    href="#"
                    className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline block max-lg:text-xs"
                    style={{ fontFamily: "Darker Grotesque" }}
                  >
                    Reviews
                  </a>
                </div>

                <span
                  className="w-full max-w-[111px] h-[14px] font-extrabold text-[16px] leading-[90%] tracking-[-0.03em] text-[#666] rotate-0 opacity-100 mb-2 max-lg:w-full max-lg:text-sm max-lg:h-auto"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  COMMUNITY
                </span>

                <a
                  href="#"
                  className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline mb-1 block max-lg:text-xs"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Join the Glow Club
                </a>
                <a
                  href="#"
                  className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline mb-1 block max-lg:text-xs"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Share your glow
                </a>
                <a
                  href="#"
                  className="font-semibulous text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline block max-lg:text-xs"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Creator partnerships
                </a>
              </div>

              {/* Learn Column */}
              <div className="flex flex-col w-[138px] max-lg:w-full">
                <h4
                  className="w-full max-w-[138px] h-[22px] font-extrabold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] rotate-0 opacity-100 m-0 mb-6 max-lg:w-full max-lg:text-lg max-lg:h-auto max-lg:mb-4"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Learn
                </h4>

                {/* Learn links with added gap */}
                <div className="gap-2 flex flex-col">
                  <a
                    href="#"
                    className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline max-lg:text-xs"
                    style={{ fontFamily: "Darker Grotesque" }}
                  >
                    Skincare tips
                  </a>
                  <a
                    href="#"
                    className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline max-lg:text-xs"
                    style={{ fontFamily: "Darker Grotesque" }}
                  >
                    Routine builder
                  </a>
                  <a
                    href="#"
                    className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline max-lg:text-xs"
                    style={{ fontFamily: "Darker Grotesque" }}
                  >
                    Glow stories
                  </a>
                  <a
                    href="#"
                    className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline max-lg:text-xs"
                    style={{ fontFamily: "Darker Grotesque" }}
                  >
                    Ingredient library
                  </a>
                </div>
              </div>

              {/* Company Column */}
              <div className="flex flex-col w-[138px] max-lg:w-full">
                <h4
                  className="w-full max-w-[138px] h-[22px] font-extrabold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] rotate-0 opacity-100 m-0 mb-4 max-lg:w-full max-lg:text-lg max-lg:h-auto"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Company
                </h4>

                <span
                  className="w-full max-w-[111px] h-[14px] font-extrabold text-[16px] leading-[90%] tracking-[-0.03em] text-[#666] rotate-0 opacity-100 mb-2 max-lg:w-full max-lg:text-sm max-lg:h-auto"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  TEAM
                </span>

                <a
                  href="#"
                  className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline mb-1 block max-lg:text-xs"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  About us
                </a>
                <a
                  href="#"
                  className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline mb-1 block max-lg:text-xs"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline block max-lg:text-xs"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Sustainability
                </a>
              </div>

              {/* Support Column */}
              <div className="flex flex-col w-[138px] max-lg:w-full">
                <h4
                  className="w-full max-w-[138px] h-[22px] font-extrabold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] rotate-0 opacity-100 m-0 mb-4 max-lg:w-full max-lg:text-lg max-lg:h-auto"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Support
                </h4>

                <a
                  href="#"
                  className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline mb-1 block max-lg:text-xs"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Contact us
                </a>
                <a
                  href="#"
                  className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline mb-1 block max-lg:text-xs"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Shipping info
                </a>
                <a
                  href="#"
                  className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline mb-1 block max-lg:text-xs"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Returns & exchanges
                </a>
                <a
                  href="#"
                  className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline mb-1 block max-lg:text-xs"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  Track your order
                </a>
                <a
                  href="#"
                  className="font-semibold text-[14px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f] no-underline block max-lg:text-xs"
                  style={{ fontFamily: "Darker Grotesque" }}
                >
                  FAQs
                </a>
              </div>
            </div>

            {/* Right Side Image - Hidden on mobile */}
            <div className="w-[534px] h-[353px] rounded-[32px] rotate-0 opacity-100 overflow-hidden max-lg:hidden flex-shrink-0">
              <img
                src={img2}
                alt="Skincare application"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Scrolling Banner - Fixed overlap issue */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 max-lg:py-2">
            <div className="flex animate-scroll whitespace-nowrap items-center gap-8 max-lg:gap-4">
              <span className="font-folklore uppercase text-[24px] font-normal leading-[100%] tracking-[-0.01em] text-[#FFA200] inline-flex items-center justify-center min-w-[151px] h-[28px] px-4 flex-shrink-0 max-lg:min-w-[80px] max-lg:h-[20px] max-lg:text-base max-lg:px-1">
                GLOW LOUD
              </span>
              <span className="inline-flex items-center justify-center w-[32px] h-[36px] text-[28px] leading-[28px] text-[#26224D] flex-shrink-0 max-lg:w-[16px] max-lg:h-[20px] max-lg:text-base">
                ✦
              </span>
              <span className="font-folklore uppercase text-[24px] font-normal leading-[100%] tracking-[-0.01em] text-[#FFA200] inline-flex items-center justify-center min-w-[151px] h-[28px] px-4 flex-shrink-0 max-lg:min-w-[80px] max-lg:h-[20px] max-lg:text-base max-lg:px-1">
                GOOD SKIN
              </span>
              <span className="inline-flex items-center justify-center w-[32px] h-[36px] text-[28px] leading-[28px] text-[#26224D] flex-shrink-0 max-lg:w-[16px] max-lg:h-[20px] max-lg:text-base">
                ✦
              </span>
              <span className="font-folklore uppercase text-[24px] font-normal leading-[100%] tracking-[-0.01em] text-[#FFA200] inline-flex items-center justify-center min-w-[151px] h-[28px] px-4 flex-shrink-0 max-lg:min-w-[80px] max-lg:h-[20px] max-lg:text-base max-lg:px-1">
                GOOD MOOD
              </span>
              <span className="inline-flex items-center justify-center w-[32px] h-[36px] text-[28px] leading-[28px] text-[#26224D] flex-shrink-0 max-lg:w-[16px] max-lg:h-[20px] max-lg:text-base">
                ✦
              </span>
              <span className="font-folklore uppercase text-[24px] font-normal leading-[100%] tracking-[-0.01em] text-[#FFA200] inline-flex items-center justify-center min-w-[151px] h-[28px] px-4 flex-shrink-0 max-lg:min-w-[80px] max-lg:h-[20px] max-lg:text-base max-lg:px-1">
                ITS A VIBE
              </span>
              <span className="inline-flex items-center justify-center w-[32px] h-[36px] text-[28px] leading-[28px] text-[#26224D] flex-shrink-0 max-lg:w-[16px] max-lg:h-[20px] max-lg:text-base">
                ✦
              </span>
              <span className="font-folklore uppercase text-[24px] font-normal leading-[100%] tracking-[-0.01em] text-[#FFA200] inline-flex items-center justify-center min-w-[220px] h-[28px] px-4 flex-shrink-0 max-lg:min-w-[120px] max-lg:h-[20px] max-lg:text-base max-lg:px-1">
                SKINCARE FOR REBELS
              </span>
              <span className="inline-flex items-center justify-center w-[32px] h-[36px] text-[28px] leading-[28px] text-[#26224D] flex-shrink-0 max-lg:w-[16px] max-lg:h-[20px] max-lg:text-base">
                ✦
              </span>
              <span className="font-folklore uppercase text-[24px] font-normal leading-[100%] tracking-[-0.01em] text-[#FFA200] inline-flex items-center justify-center min-w-[151px] h-[28px] px-4 flex-shrink-0 max-lg:min-w-[80px] max-lg:h-[20px] max-lg:text-base max-lg:px-1">
                GLOW LOUD
              </span>
              <span className="inline-flex items-center justify-center w-[32px] h-[36px] text-[28px] leading-[28px] text-[#26224D] flex-shrink-0 max-lg:w-[16px] max-lg:h-[20px] max-lg:text-base">
                ✦
              </span>
              <span className="font-folklore uppercase text-[24px] font-normal leading-[100%] tracking-[-0.01em] text-[#FFA200] inline-flex items-center justify-center min-w-[151px] h-[28px] px-4 flex-shrink-0 max-lg:min-w-[80px] max-lg:h-[20px] max-lg:text-base max-lg:px-1">
                REBEL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
