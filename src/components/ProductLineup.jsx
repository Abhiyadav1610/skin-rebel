import React from "react";
import img1 from "../assets/images/hero/1.png";
import img2 from "../assets/images/hero/2.png";
import img3 from "../assets/images/hero/3.png";
import img4 from "../assets/images/hero/4.png";
import img5 from "../assets/images/hero/5.png";
import img6 from "../assets/images/hero/6.png";
import img7 from "../assets/images/productlineup/1.png";
import img8 from "../assets/images/feature/7.png";

const ProductLineup = () => {
  // Product data array to avoid repetition
  const products = [
    {
      name: "Power Collagen",
      description: "Inner radiance, outer glow.",
    },
    {
      name: "Vitality Greens",
      description: "Fuel your body, ignite your day.",
    },
    { name: "Omega Boost", description: "Love your heart, drop by drop." },
    {
      name: "Adaptogen Elixir",
      description: "Find your calm in the chaos.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#FFAFCD] py-8 px-4 sm:px-6 lg:px-8 overflow-hidden xl:min-h-[958px] xl:flex xl:justify-center xl:items-center">
      {/* Centered container wrapper for large screens */}
      <div className="relative w-full max-w-[1440px] min-h-[800px] sm:min-h-[900px] xl:min-h-[900px]">
        {/* Header Section - Responsive */}
        <div className="flex flex-col w-full text-center mb-8 sm:mb-12 xl:mb-0 xl:absolute xl:top-[74px] xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:w-[898px] xl:h-[76px]">
          <h1 className="font-folklore uppercase font-normal text-[48px] sm:text-[64px] xl:text-[85px] leading-[90%] tracking-normal text-[#FF4930] text-center">
            The Rebel Line-Up
          </h1>
        </div>

        {/* Main Content Container - Responsive */}
        <div className="relative w-full max-w-[95vw] mx-auto rounded-[32px] xl:rounded-[64px] bg-[#FFF9F2] p-6 sm:p-8 lg:p-10 xl:p-12 xl:absolute xl:w-[1312px] xl:h-[580px] xl:top-[217px] xl:left-[64px] xl:flex xl:justify-center xl:items-center">
          {/* Inner text section - Responsive */}
          <div className="text-center mb-8 sm:mb-12 xl:mb-0 xl:absolute xl:w-[327px] xl:h-[58px] xl:top-[14px] xl:left-1/2 xl:transform xl:-translate-x-1/2">
            <p className="font-ben-brown lowercase font-normal text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[64px] leading-[90%] tracking-[-0.03em] text-[#8A5A07] text-center">
              Your skins new inner circle
            </p>
          </div>

          {/* Products Section - Mobile/Tablet: 2x2 Grid, Desktop: Row */}
          <div className="w-full xl:mt-16">
            {/* Mobile, Tablet and 1024px Layout - Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10 justify-items-center xl:hidden">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center max-w-[160px] sm:max-w-[180px] lg:max-w-[220px] rounded-[24px] lg:rounded-[32px] p-4 lg:p-6"
                >
                  <div className="mb-4 w-full flex items-center justify-center">
                    <img
                      src={img7}
                      alt={`${product.name}`}
                      className="w-[120px] h-[140px] sm:w-[140px] sm:h-[160px] lg:w-[180px] lg:h-[200px] object-contain transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <h2 className="font-darker-grotesque font-bold text-[18px] sm:text-[22px] lg:text-[28px] leading-[90%] tracking-[-0.03em] mb-2 text-[#1C1B1F] text-center">
                      {product.name}
                    </h2>
                    <p className="font-darker-grotesque font-semibold text-[12px] sm:text-[14px] lg:text-[16px] leading-[100%] tracking-normal text-gray-600 text-center">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Layout - Original Row (XL breakpoint and above) */}
            <div className="hidden xl:flex xl:flex-row gap-[40px] h-fit justify-center items-center">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center max-w-[240px] h-[330px] rounded-[100px] opacity-100 p-6 justify-center"
                >
                  <div className="mb-4 flex-1 flex items-center justify-center">
                    <img
                      src={img7}
                      alt={`${product.name}`}
                      className="w-[200px] h-[280px] object-contain transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <h1 className="font-darker-grotesque font-bold text-[40px] leading-[90%] tracking-[-0.03em] mb-2 text-[#1C1B1F] opacity-100 text-center whitespace-nowrap">
                      {product.name}
                    </h1>
                    <p className="font-darker-grotesque font-semibold text-[20px] leading-[100%] tracking-normal text-gray-600 opacity-100 text-center whitespace-nowrap">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements - Desktop Only */}
        <div className="hidden xl:block">
          {/* Outer cloud */}
          <div className="absolute flex flex-col w-[260px] h-[203px] top-[106px] right-[90px] opacity-100 overflow-hidden">
            <img
              src={img6}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute flex flex-col top-[145px] right-[120px] rotate-[6.49deg] overflow-hidden">
            <h2 className="font-folklore uppercase text-[46px] tracking-[-3%] leading-[100%] text-white whitespace-nowrap px-2 py-1">
              SKIN <br /> REBEL
            </h2>
          </div>

          {/* Outer flower */}
          <div className="absolute flex flex-col w-[92px] h-[103px] top-[160px] left-[75px] opacity-100">
            <img
              src={img8}
              alt="Hero Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLineup;
