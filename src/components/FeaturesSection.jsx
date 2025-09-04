import React from "react";
import img1 from "../assets/images/feature/1.png";
import img4 from "../assets/images/hero/4.png";
import img3 from "../assets/images/feature/2.png";
import img5 from "../assets/images/feature/3.png";
import img6 from "../assets/images/feature/4.png";
import img7 from "../assets/images/feature/6.png";
import img8 from "../assets/images/feature/7.png";

const FeaturesSection = () => {
  return (
    <section className="relative w-full min-h-[1757px] bg-[#FFF9F2] flex justify-center">
      {/* Centered container wrapper for large screens */}
      <div className="relative w-full max-w-[1440px] h-[1757px]">
        {/* Features content */}
        <div className="flex flex-col items-center w-full h-full p-8">
          {/* first section .......  */}
          <div className="absolute flex flex-col justify-center items-center top-[55px] left-1/2 transform -translate-x-1/2 w-[676px] h-[144px]">
            <div className="flex flex-row justify-center items-center">
              <img className="w-[58px] h-[58px] mr-4" src={img1} alt="" />
              <p className="font-ben-brown lowercase font-normal text-[64px] leading-[90%] tracking-[-0.03em] text-[#8A5A07] lowercase">
                The Glow Manifesto
              </p>
            </div>

            <div className="flex justify-center w-[720px] h-[65px] mt-4">
              <h1 className="font-['Darker_Grotesque'] font-semibold text-[50px] leading-[90%] tracking-[-3%] text-[#1C1B1F] text-center">
                Glow Science, Rebel Energy
              </h1>
            </div>
          </div>

          {/* second section .............  */}
          <div className="absolute flex flex-row w-[659px] h-[178px] top-[465px] left-[90px] opacity-100 gap-[49px]">
            <div className="flex justify-center items-center">
              <img className="w-[59px] h-[59px]" src={img4} alt="" />
            </div>
            <div className="flex flex-col gap-10 w-[545px] h-[58px]">
              <div>
                <h1 className="font-semibold text-[44px] leading-[90%] tracking-[-3%]">
                  Feel It, See It
                </h1>
              </div>
              <div className="w-[383px] h-[96px]">
                <p className="font-medium text-[32px] leading-[100%]">
                  Smoother texture, brighter tone, stronger confidence — we're
                  here for visible wins, not empty promises.
                </p>
              </div>
            </div>
          </div>

          {/* third section ....................... */}
          <div className="absolute w-[456px] h-[460px] top-[326px] right-[90px]">
            <img
              src={img3}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* fourth section .............  */}
          <div className="absolute flex flex-row w-[659px] h-[178px] top-[921px] right-[90px] opacity-100 gap-[49px]">
            <div className="flex justify-center items-center">
              <img className="w-[59px] h-[59px]" src={img4} alt="" />
            </div>
            <div className="flex flex-col gap-10 w-[555px] h-[58px]">
              <div>
                <h1 className="font-semibold text-[44px] leading-[90%] tracking-[-3%]">
                  Skincare with Attitude
                </h1>
              </div>
              <div className="w-fit h-[96px]">
                <p className="font-medium text-[32px] leading-[100%]">
                  Bold, statement-making products that vibe with your style
                  while working hard behind the scenes.
                </p>
              </div>
            </div>
          </div>

          {/* fifth section ....................... */}
          <div className="absolute w-[456px] h-[460px] top-[761px] left-[90px]">
            <img
              src={img5}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* SIXTH SECTION ...... */}
          <div className="absolute flex flex-col w-[260px] h-[203px] top-[669px] left-1/2 transform -translate-x-1/2  opacity-100 overflow-hidden">
            <img
              src={img6}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute flex flex-col top-[729px]  transform -translate-x-1/2 translate-x-[30px] rotate-[6.49deg] overflow-hidden">
            <h2 className="font-folklore uppercase text-[46px] tracking-[-3%] leading-[100%] text-white whitespace-nowrap px-2 py-1">
              SKIN <br /> REBEL
            </h2>
          </div>

          {/* seventh section .............  */}
          <div className="absolute flex flex-row w-[659px] h-[178px] top-[1340px] left-[90px] opacity-100 gap-[49px]">
            <div className="flex justify-center items-center">
              <img className="w-[59px] h-[59px]" src={img4} alt="" />
            </div>
            <div className="flex flex-col gap-10 w-[545px] h-[58px]">
              <div>
                <h1 className="font-semibold text-[44px] leading-[90%] tracking-[-3%]">
                  Clinically Backed Glow
                </h1>
              </div>
              <div className="w-[383px] h-[96px]">
                <p className="font-medium text-[32px] leading-[100%]">
                  Science-first formulas that actually deliver — Collagen & NAD+
                  built for results you can see and feel.
                </p>
              </div>
            </div>
          </div>

          {/* eighth section ....................... */}
          <div className="absolute w-[456px] h-[460px] top-[1194px] right-[90px]">
            <img
              src={img7}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* ninth section ........ */}
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
