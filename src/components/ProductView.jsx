import React from "react";
import img1 from "../assets/images/productview/1.png";
import img2 from "../assets/images/productview/2.png";
import img3 from "../assets/images/productview/3.png";
import img4 from "../assets/images/productview/4.png";
import img5 from "../assets/images/productview/5.png";
import img6 from "../assets/images/hero/4.png";
import img9 from "../assets/images/hero/4.png";
import img10 from "../assets/images/feature/7.png";
import { useState } from "react";

const ProductView = () => {
  const [quantity, setQuantity] = useState(1);

  // Quantity handlers
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <section className="relative min-h-screen">
      {/* Desktop Layout (1280px and above) - Keep existing desktop code */}
      <div className="hidden xl:block">
        <div className="flex flex-row w-full h-[988px] opacity-100 rounded-[64px] bg-[#FFF9F2] rotate-0">
          {/* Desktop overlays */}
          <div className="absolute w-[135.2214813232422px] h-[136.0153350830078px] top-[40px] left-[44px] opacity-100 rotate-0 border-2 border-transparent z-10">
            <img
              src={img9}
              alt="Overlay decoration"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="absolute w-[91.55268859863281px] h-[91.13616943359375px] top-[8px] left-[741px] opacity-100 rotate-0 z-10">
            <img
              src={img10}
              alt="Feature decoration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Desktop image section */}
          <div className="w-1/2 h-[988px]">
            <div className="absolute w-[647px] h-[499px] top-[119px] left-[63px] opacity-100 rotate-0 rounded-[64px] overflow-hidden">
              <img
                className="w-[647px] h-[499px] object-cover"
                src={img1}
                alt=""
              />
            </div>

            <div className="absolute w-[145px] h-[145px] top-[648px] left-[63px] opacity-100 rotate-0 rounded-[32px] overflow-hidden">
              <img
                className="w-[145px] h-[145px] object-cover"
                src={img2}
                alt=""
              />
            </div>

            <div className="absolute w-[145px] h-[145px] top-[648px] left-[230px] opacity-100 rotate-0 rounded-[32px] overflow-hidden">
              <img
                className="w-[145px] h-[145px] object-cover"
                src={img3}
                alt=""
              />
            </div>

            <div className="absolute w-[145px] h-[145px] top-[648px] left-[401px] opacity-100 rotate-0 rounded-[32px] overflow-hidden">
              <img
                className="w-[145px] h-[145px] object-cover"
                src={img4}
                alt=""
              />
            </div>

            <div className="absolute w-[145px] h-[145px] top-[648px] left-[568px] opacity-100 rotate-0 rounded-[32px] overflow-hidden">
              <img
                className="w-[145px] h-[145px] object-cover"
                src={img5}
                alt=""
              />
            </div>
          </div>

          {/* Desktop Text Section */}
          <div className="w-1/2 h-[988px]">
            <div className="absolute w-[553px] h-[542px] top-[108px] left-[820px] gap-[24px] opacity-100 rotate-0">
              <div className="absolute w-[545px] h-[58px] top-0 opacity-100 rotate-0">
                <h2 className="font-['Darker_Grotesque'] font-bold text-[64px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] m-0">
                  Collagen Glow Elixir™
                </h2>
              </div>

              <div className="absolute w-[531px] h-[96px] top-[82px] gap-[24px] opacity-100 rotate-0">
                <p className="font-['Darker_Grotesque'] font-medium text-[24px] leading-[100%] tracking-normal text-[#1C1B1F] m-0">
                  Your new daily ritual for skin that refuses to quit. Collagen
                  Glow Elixir™ is a clinically formulated blend of hydrolyzed
                  collagen, vitamin C, and antioxidants that work together to
                  hydrate from within, improve elasticity.
                </p>
              </div>

              <div className="absolute w-[553px] h-[190px] top-[202px] gap-[16px] opacity-100 rotate-0">
                <div className="w-[235px] h-[22px] opacity-100 rotate-0 mb-4">
                  <h3 className="font-['Darker_Grotesque'] font-semibold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100 rotate-0 m-0">
                    Benefits
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-4">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <img src={img6} alt="star" className="w-5 h-5 mr-2" />
                      <h4 className="w-[198px] h-[22px] font-['Darker_Grotesque'] font-bold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1C1B1FE5] opacity-100 rotate-0 m-0">
                        Plump & Hydrate
                      </h4>
                    </div>
                    <div className="ml-[28px]">
                      <p className="w-[195px] h-[36px] font-['Darker_Grotesque'] font-medium text-[18px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100 rotate-0 m-0">
                        Restores moisture, leaving skin soft and supple.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <img src={img6} alt="star" className="w-5 h-5 mr-2" />
                      <h4 className="w-[198px] h-[22px] font-['Darker_Grotesque'] font-bold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1C1B1FE5] opacity-100 rotate-0 m-0">
                        Boost Elasticity
                      </h4>
                    </div>
                    <div className="ml-[28px]">
                      <p className="w-[195px] h-[36px] font-['Darker_Grotesque'] font-medium text-[18px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100 rotate-0 m-0">
                        Improves firmness and bounce over time.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <img src={img6} alt="star" className="w-5 h-5 mr-2" />
                      <h4 className="w-[198px] h-[22px] font-['Darker_Grotesque'] font-bold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1C1B1FE5] opacity-100 rotate-0 m-0">
                        Defend & Protect
                      </h4>
                    </div>
                    <div className="ml-[28px]">
                      <p className="w-[195px] h-[36px] font-['Darker_Grotesque'] font-medium text-[18px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100 rotate-0 m-0">
                        Antioxidants help fight daily environmental stressors.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <img src={img6} alt="star" className="w-5 h-5 mr-2" />
                      <h4 className="w-[198px] h-[22px] font-['Darker_Grotesque'] font-bold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1C1B1FE5] opacity-100 rotate-0 m-0">
                        Glow From Within
                      </h4>
                    </div>
                    <div className="ml-[28px]">
                      <p className="w-[195px] h-[36px] font-['Darker_Grotesque'] font-medium text-[18px] leading-[100%] tracking-normal text-[#1C1B1F] opacity-100 rotate-0 m-0">
                        Supports a naturally radiant complexion without filters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-[463px] h-[56px] top-[408px] gap-[16px] opacity-100 rotate-0">
                <div className="w-[235px] h-[22px] opacity-100 rotate-0 mb-4">
                  <h3 className="font-['Darker_Grotesque'] font-semibold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100 rotate-0 m-0">
                    What's inside?
                  </h3>
                </div>
                <div className="w-[463px] h-[18px] opacity-100 rotate-0">
                  <p className="font-['Darker_Grotesque'] font-semibold text-[20px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100 rotate-0 m-0">
                    Collagen Peptides, Vitamin C, Hyaluronic Acid, Natural Berry
                    Flavor
                  </p>
                </div>
              </div>

              <div className="absolute w-[553px] h-[46px] top-[480px] opacity-100 rotate-0 flex justify-between items-baseline">
                <div className="w-[111px] h-[36px] opacity-100 rotate-0">
                  <span className="font-['Darker_Grotesque'] font-bold text-[40px] tracking-[-0.03em] text-[#1C1B1F] opacity-100 rotate-0 m-0">
                    $50.99
                  </span>
                </div>

                <div className="flex items-baseline">
                  <div className="w-[72px] h-[22px] opacity-100 rotate-0 mr-4">
                    <span className="font-['Darker_Grotesque'] font-semibold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] opacity-100 rotate-0">
                      Quantity
                    </span>
                  </div>

                  <div className="flex items-center w-[120px] h-[46px] gap-[10px] opacity-100 rotate-0">
                    <button
                      onClick={decreaseQuantity}
                      className="w-[46px] h-[46px] pt-4 pr-3 pb-4 pl-3 gap-[10px] rounded-full opacity-100 rotate-0 bg-[#E5E5E5] border-none cursor-pointer flex items-center justify-center"
                      aria-label="Decrease quantity"
                    >
                      <div className="w-3 h-[2px] bg-[#1C1B1F] opacity-100 rotate-0"></div>
                    </button>

                    <span className="w-2 h-[19px] font-['Inter'] font-semibold text-base leading-[100%] tracking-normal opacity-100 rotate-0 text-center text-[#1C1B1F]">
                      {quantity}
                    </span>

                    <button
                      onClick={increaseQuantity}
                      className="w-[46px] h-[46px] pt-4 pr-3 pb-4 pl-3 gap-[10px] rounded-full opacity-100 rotate-0 bg-[#E5E5E5] border-none cursor-pointer flex items-center justify-center relative"
                      aria-label="Increase quantity"
                    >
                      <div className="w-[14px] h-[14px] opacity-100 rotate-0 relative">
                        <div className="absolute top-[6px] left-0 w-[14px] h-[2px] bg-[#1C1B1F]"></div>
                        <div className="absolute top-0 left-[6px] w-[2px] h-[14px] bg-[#1C1B1F]"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-[547px] h-[127px] top-[664px] left-[821px] gap-[15px] opacity-100 rotate-0 flex flex-col">
              <button
                className="transition-all duration-200 hover:shadow-lg w-[547px] h-[56px] opacity-100 rotate-0 bg-[#FF4444] rounded-full border-none cursor-pointer flex justify-center items-center"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#E63939";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF4444";
                }}
              >
                <span className="font-['Darker_Grotesque'] font-semibold text-[18px] text-white tracking-[-0.5px]">
                  Buy Now
                </span>
              </button>

              <button
                className="transition-all duration-200 hover:bg-red-50 w-[547px] h-[56px] pt-4 pr-[10px] pb-4 pl-[10px] gap-[10px] rounded-full border-2 border-solid border-[#FF4444] bg-transparent opacity-100 rotate-0 cursor-pointer flex justify-center items-center"
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#E63939";
                  e.target.querySelector("span").style.color = "#E63939";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "#FF4444";
                  e.target.querySelector("span").style.color = "#FF4444";
                }}
              >
                <span className="font-['Darker_Grotesque'] font-semibold text-[18px] text-[#FF4444] tracking-[-0.5px]">
                  Add to cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* UPDATED Mobile Layout - img10 at top, img9 removed, price/quantity horizontal */}
      <div className="block xl:hidden bg-[#FFF9F2] min-h-screen">
        <div className="pt-8 px-4 pb-8">
          {/* Main Image with img10 positioned at top */}
          <div className="mb-6 relative">
            {/* img10 positioned at the top of large image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
              <img
                src={img10}
                alt="Feature decoration"
                className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain"
              />
            </div>

            <div className="w-full max-w-sm mx-auto rounded-[32px] sm:rounded-[40px] overflow-hidden">
              <img
                src={img1}
                alt="Collagen Glow Elixir"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* 4 Thumbnail Images - Horizontal Row */}
          <div className="mb-8">
            <div className="flex justify-center space-x-3 sm:space-x-4">
              <div className="rounded-[16px] sm:rounded-[20px] overflow-hidden">
                <img
                  src={img2}
                  alt="Thumbnail 1"
                  className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-cover cursor-pointer"
                />
              </div>
              <div className="rounded-[16px] sm:rounded-[20px] overflow-hidden">
                <img
                  src={img3}
                  alt="Thumbnail 2"
                  className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-cover cursor-pointer"
                />
              </div>
              <div className="rounded-[16px] sm:rounded-[20px] overflow-hidden">
                <img
                  src={img4}
                  alt="Thumbnail 3"
                  className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-cover cursor-pointer"
                />
              </div>
              <div className="rounded-[16px] sm:rounded-[20px] overflow-hidden">
                <img
                  src={img5}
                  alt="Thumbnail 4"
                  className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="max-w-md mx-auto text-center">
            {/* Product Title */}
            <h1 className="font-['Darker_Grotesque'] font-bold text-[28px] sm:text-[32px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] mb-4">
              Collagen Glow Elixir™
            </h1>

            {/* Product Description */}
            <p className="font-['Darker_Grotesque'] font-medium text-[16px] sm:text-[18px] leading-[100%] tracking-normal text-[#1C1B1F] mb-8">
              Your new daily ritual for skin that refuses to quit. Collagen Glow
              Elixir™ is a clinically formulated blend of hydrolyzed collagen,
              vitamin C, and antioxidants that work together to hydrate from
              within, improve elasticity.
            </p>

            {/* Benefits Section */}
            <div className="mb-8">
              <h2 className="font-['Darker_Grotesque'] font-semibold text-[20px] sm:text-[22px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] mb-6">
                Benefits
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-start text-left">
                  <img
                    src={img6}
                    alt="star"
                    className="w-4 h-4 mr-3 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-['Darker_Grotesque'] font-bold text-[16px] sm:text-[18px] leading-[90%] tracking-[-0.03em] text-[#1C1B1FE5] mb-1">
                      Plump & Hydrate
                    </h3>
                    <p className="font-['Darker_Grotesque'] font-medium text-[14px] sm:text-[15px] leading-[100%] tracking-normal text-[#1C1B1F]">
                      Restores moisture, leaving skin soft and supple.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-start text-left">
                  <img
                    src={img6}
                    alt="star"
                    className="w-4 h-4 mr-3 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-['Darker_Grotesque'] font-bold text-[16px] sm:text-[18px] leading-[90%] tracking-[-0.03em] text-[#1C1B1FE5] mb-1">
                      Boost Elasticity
                    </h3>
                    <p className="font-['Darker_Grotesque'] font-medium text-[14px] sm:text-[15px] leading-[100%] tracking-normal text-[#1C1B1F]">
                      Improves firmness and bounce over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Inside Section */}
            <div className="mb-8">
              <h2 className="font-['Darker_Grotesque'] font-semibold text-[18px] sm:text-[20px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] mb-3">
                What's inside?
              </h2>
              <p className="font-['Darker_Grotesque'] font-semibold text-[14px] sm:text-[16px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F]">
                Collagen Peptides, Vitamin C, Hyaluronic Acid, Natural Berry
                Flavor
              </p>
            </div>

            {/* Price and Quantity Section - FIXED: Now aligned horizontally */}
            <div className="mb-8">
              <div className="flex justify-between items-center">
                {/* Price on the left */}
                <span className="font-['Darker_Grotesque'] font-bold text-[32px] sm:text-[36px] tracking-[-0.03em] text-[#1C1B1F]">
                  $50.99
                </span>

                {/* Quantity section on the right */}
                <div className="flex items-center space-x-3">
                  <span className="font-['Darker_Grotesque'] font-semibold text-[18px] sm:text-[20px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F]">
                    Quantity
                  </span>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={decreaseQuantity}
                      className="w-10 h-10 rounded-full bg-[#E5E5E5] border-none cursor-pointer flex items-center justify-center"
                      aria-label="Decrease quantity"
                    >
                      <div className="w-3 h-[2px] bg-[#1C1B1F]"></div>
                    </button>

                    <span className="font-['Inter'] font-semibold text-[16px] text-center text-[#1C1B1F] px-4">
                      {quantity}
                    </span>

                    <button
                      onClick={increaseQuantity}
                      className="w-10 h-10 rounded-full bg-[#E5E5E5] border-none cursor-pointer flex items-center justify-center relative"
                      aria-label="Increase quantity"
                    >
                      <div className="w-[14px] h-[14px] relative">
                        <div className="absolute top-[6px] left-0 w-[14px] h-[2px] bg-[#1C1B1F]"></div>
                        <div className="absolute top-0 left-[6px] w-[2px] h-[14px] bg-[#1C1B1F]"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons - Stacked vertically */}
            <div className="space-y-4">
              <button className="w-full py-4 bg-[#FF4444] text-white rounded-full font-['Darker_Grotesque'] font-semibold text-[16px] sm:text-[18px] tracking-[-0.5px] transition-all duration-200 hover:bg-[#E63939]">
                Buy Now
              </button>

              <button className="w-full py-4 border-2 border-[#FF4444] text-[#FF4444] bg-transparent rounded-full font-['Darker_Grotesque'] font-semibold text-[16px] sm:text-[18px] tracking-[-0.5px] transition-all duration-200 hover:bg-red-50">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
