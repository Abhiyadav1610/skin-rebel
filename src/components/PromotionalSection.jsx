import React from "react";
import promotion from "../assets/images/promotion.jpg";
import img1 from "../assets/images/promotion/1.png";
import img3 from "../assets/images/mobile/2.png";
import img6 from "../assets/images/hero/6.png";
import img8 from "../assets/images/feature/7.png";

const PromotionalSection = () => {
  return (
    <section className="relative w-full min-h-[1078px] bg-[#FFE6EF] flex justify-center">
      {/* Centered container wrapper for large screens */}
      <div className="relative w-full max-w-[1440px] h-[1078px]">
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
            <p className="font-normal text-[34px] leading-[100%] text-[#1C1B1F]">
              Your glow story starts now — with collagen, NAD+, and creams that
              work together to repair, hydrate, and keep your skin looking its
              best every day.
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
        <div className="absolute flex flex-col w-[151px] h-[123px] top-[724px] right-[201px]  opacity-100 overflow-hidden">
          <img
            src={img3}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Outer other cloud */}
        <div className="absolute flex flex-col w-[281px] h-[230px] top-[760px] left-[165px]  opacity-100 overflow-hidden">
          <img
            src={img6}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute flex flex-col top-[819px] left-[226px]  rotate-[6.49deg] overflow-hidden">
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
    </section>
  );
};

export default PromotionalSection;
