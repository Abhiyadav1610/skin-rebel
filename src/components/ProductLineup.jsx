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
      name: "Collagen Glow Elixir",
      description: "Hydrate from within, glow from outside.",
    },
    { name: "Adaptogen Elixir", description: "Find your calm in the chaos." },
    { name: "NAD+ Renewal Serum", description: "Youth meets science." },
    {
      name: "Vitamin C Brightener",
      description: "Brighten your day, brighten your skin.",
    },
  ];

  return (
    <div className="relative w-full min-h-[925px] bg-[#FFAFCD] flex justify-center items-center">
      {/* Centered container wrapper for large screens */}
      <div className="relative w-full max-w-[1440px] h-[925px]">
        {/* Upper content ......... */}
        <div className="absolute flex flex-col w-[898px] h-[76px] top-[74px] left-1/2 transform -translate-x-1/2 opacity-100 gap-6">
          <h1 className="font-folklore uppercase font-normal text-[85px] leading-[90%] tracking-normal text-[#FF4930] text-center">
            The Rebel Line-Up
          </h1>
        </div>

        {/* Inner Content Container */}
        <div className="absolute flex justify-center items-center w-[1300px] h-[580px] top-[217px] left-1/2 transform -translate-x-1/2 opacity-100 rounded-[64px] bg-[#FFF9F2]">
          {/* Inner text upside ....... */}
          <div className="absolute w-[327px] h-[58px] top-[14px] left-1/2 transform -translate-x-1/2">
            <p className="font-ben-brown lowercase font-normal text-[48px] lg:text-[64px] leading-[90%] tracking-[-0.03em] text-[#8A5A07] text-center">
              Your skins new inner circle
            </p>
          </div>

          {/* Images of products ......... */}
          <div className="flex flex-row gap-[40px] h-fit mt-16">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center max-w-[200px]"
              >
                <div className="mb-4">
                  <img
                    src={img7}
                    alt={`${product.name}`}
                    className="w-full h-full object-contain transition-transform hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <h1 className="font-bold text-[18px] leading-[110%] mb-2 text-[#1C1B1F]">
                    {product.name}
                  </h1>
                  <p className="text-[14px] leading-[120%] text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outer cloud ................. */}
        <div className="absolute flex flex-col w-[260px] h-[203px] top-[106px] right-[90px]  opacity-100 overflow-hidden">
          <img
            src={img6}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute flex flex-col top-[145px] right-[120px]  rotate-[6.49deg] overflow-hidden">
          <h2 className="font-folklore uppercase text-[46px] tracking-[-3%] leading-[100%] text-white whitespace-nowrap px-2 py-1">
            SKIN <br /> REBEL
          </h2>
        </div>

        {/* Outer flower ........................... */}
        <div className="absolute flex flex-col w-[92px] h-[103px] top-[160px] left-[75px] opacity-100">
          <img
            src={img8}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductLineup;
