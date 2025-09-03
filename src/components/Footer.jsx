import React from 'react'
import img1 from '../assets/images/footer/1.png'
import img6 from "../assets/images/hero/6.png";

const Footer = () => {
  return (
    <div
      className="relative"
      style={{
        height: "1318px",
      }}
    >
      {/* second last section .........  */}

      <div className="absolute flex flex-row h-[461px] w-full rounded-[64px] bg-[#F6E6D5]">
        <div className="absolute flex flex-col w-[602px] h-[300px] top-[90px] left-[106px] opacity-100 gap-8">
          <h1 className="font-folklore uppercase font-normal text-[85px] leading-[90%] tracking-normal text-[#FF4930]">
            Your Best
            <br />
            Skin Awaits
          </h1>

          <p className="font-normal font-['Darker_Grotesque'] text-[32px] leading-[90%] tracking-[-0.03em] text-[#1c1b1f]">
            Every product is packed with skin-loving ingredients and backed by
            science.
          </p>

          <button className="flex items-center justify-center w-[234px] h-[50px] text-[#FF4930] font-semibold text-lg opacity-100 rounded-full border-2 border-[#FF4930] gap-[10px] px-[10px] py-4 transform rotate-0 hover:opacity-90 transition-opacity">
            Shop Now
          </button>
        </div>

        <div className="absolute top-[99px] left-[922px]">
          <img className="rounded-[50px]" src={img1} alt="" />
        </div>

        {/* outer cloud */}
        <div className="absolute flex flex-col w-[280.2px] h-[233.01px] top-2 left-[701.7px]  opacity-100">
          <img src={img6} alt="Hero Visual" />
        </div>

        <div className="absolute flex flex-col w-[146.2px] h-[107.01px] top-[68px] left-[777.7px]  rotate-[6.49deg]">
          <h2 className="font-folklore uppercase w-[400.2px] text-[46px] tracking-[-3%] leading-[100%] text-white">
            SKIN <br /> REBEL
          </h2>
        </div>
      </div>

      {/* bottom sectionnnn ...........  */}
      <div
        className="absolute"
        style={{
          width: "100%",
          height: "857px",
          top: "461px",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFE6EF", // Light pink background
            padding: "80px 0",
            borderTopRightRadius: "64px",
            borderTopLeftRadius: "64px",
          }}
        >
          <div className="max-w-7xl mx-auto px-8">
            {/* Top Section - Logo, Tagline, and Newsletter */}
            <div className="flex justify-between items-start mb-16">
              {/* Left Side - Logo and Tagline */}
              <div
                className="flex flex-col space-y-6"
                style={{ maxWidth: "500px" }}
              >
                <h1
                  className="font-folklore uppercase"
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    color: "#FF4930",
                    letterSpacing: "0%",
                    lineHeight: "90%",
                  }}
                >
                  SKIN REBEL
                </h1>

                <p
                  style={{
                    fontFamily: "Darker Grotesque, sans-serif",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "120%",
                    color: "#1c1b1f",
                  }}
                >
                  Every product is packed with skin-loving ingredients and
                  backed by science.
                </p>
              </div>

              {/* Right Side - Newsletter Signup */}
              <div className="flex flex-col space-y-4">
                <h3
                  style={{
                    fontFamily: "Darker Grotesque, sans-serif",
                    fontSize: "28px",
                    fontWeight: "600",
                    color: "#1c1b1f",
                  }}
                >
                  Signup for our newsletter
                </h3>

                <div className="flex space-x-4">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="px-6 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-[#FF4930]"
                    style={{
                      width: "300px",
                      fontFamily: "Darker Grotesque, sans-serif",
                      fontSize: "16px",
                    }}
                  />

                  <button
                    className="px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: "#FF4930",
                      fontFamily: "Darker Grotesque, sans-serif",
                      fontSize: "16px",
                    }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Links and Image Section */}
            <div className="flex justify-between">
              {/* Footer Navigation Links */}
              <div className="flex space-x-16">
                {/* Why Skin Rebel Column */}
                <div className="flex flex-col space-y-4">
                  <h4
                    style={{
                      fontFamily: "Darker Grotesque, sans-serif",
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#1c1b1f",
                      marginBottom: "8px",
                    }}
                  >
                    Why Skin Rebel
                  </h4>

                  <div className="flex flex-col space-y-2">
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        fontWeight: "600",
                      }}
                    >
                      CUSTOMERS
                    </span>
                    <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                      Shop products
                    </a>
                    <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                      How it works
                    </a>
                    <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                      Ingredients & benefits
                    </a>
                    <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                      Reviews
                    </a>
                  </div>

                  <div className="flex flex-col space-y-2 mt-6">
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        fontWeight: "600",
                      }}
                    >
                      COMMUNITY
                    </span>
                    <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                      Join the Glow Club
                    </a>
                    <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                      Share your glow
                    </a>
                    <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                      Creator partnerships
                    </a>
                  </div>
                </div>

                {/* Learn Column */}
                <div className="flex flex-col space-y-2">
                  <h4
                    style={{
                      fontFamily: "Darker Grotesque, sans-serif",
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#1c1b1f",
                      marginBottom: "16px",
                    }}
                  >
                    Learn
                  </h4>

                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Skincare tips
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Routine builder
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Glow stories
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Ingredient library
                  </a>
                </div>

                {/* Company Column */}
                <div className="flex flex-col space-y-2">
                  <h4
                    style={{
                      fontFamily: "Darker Grotesque, sans-serif",
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#1c1b1f",
                      marginBottom: "16px",
                    }}
                  >
                    Company
                  </h4>

                  <span
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      fontWeight: "600",
                    }}
                  >
                    TEAM
                  </span>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    About us
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Careers
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Sustainability
                  </a>
                </div>

                {/* Support Column */}
                <div className="flex flex-col space-y-2">
                  <h4
                    style={{
                      fontFamily: "Darker Grotesque, sans-serif",
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#1c1b1f",
                      marginBottom: "16px",
                    }}
                  >
                    Support
                  </h4>

                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Contact us
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Shipping info
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Returns & exchanges
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Track your order
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    FAQs
                  </a>
                </div>

                {/* Case Studies Column */}
                <div className="flex flex-col space-y-2">
                  <h4
                    style={{
                      fontFamily: "Darker Grotesque, sans-serif",
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#1c1b1f",
                      marginBottom: "16px",
                    }}
                  >
                    Case Studies
                  </h4>

                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Anti-aging
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Brightening
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Hydration
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Acne care
                  </a>
                </div>

                {/* Socials Column */}
                <div className="flex flex-col space-y-2">
                  <h4
                    style={{
                      fontFamily: "Darker Grotesque, sans-serif",
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#1c1b1f",
                      marginBottom: "16px",
                    }}
                  >
                    SOCIALS
                  </h4>

                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Instagram
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    YouTube
                  </a>
                  <a href="#" style={{ fontSize: "16px", color: "#1c1b1f" }}>
                    Pinterest
                  </a>
                </div>
              </div>

              {/* Right Side Image */}
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  width: "400px",
                  height: "300px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={img1} // Replace with your actual image
                  alt="Skincare application"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Scrolling Banner */}
          <div className="mt-16 overflow-hidden py-4">
            <div className="flex animate-scroll whitespace-nowrap">
              <span className="font-folklore uppercase text-4xl font-bold text-[#FFA200] mx-8">
                GLOW LOUD
              </span>
              <span className="text-2xl text-black mx-4">✦</span>
              <span className="font-folklore uppercase text-4xl font-bold text-[#FFA200] mx-8">
                GOOD SKIN
              </span>
              <span className="text-2xl text-black mx-4">✦</span>
              <span className="font-folklore uppercase text-4xl font-bold text-[#FFA200] mx-8">
                GOOD MOOD
              </span>
              <span className="text-2xl text-black mx-4">✦</span>
              <span className="font-folklore uppercase text-4xl font-bold text-[#FFA200] mx-8">
                IT'S A VIBE
              </span>
              <span className="text-2xl text-black mx-4">✦</span>
              <span className="font-folklore uppercase text-4xl font-bold text-[#FFA200] mx-8">
                SKINCARE FOR REBELS
              </span>
              <span className="text-2xl text-black mx-4">✦</span>
              <span className="font-folklore uppercase text-4xl font-bold text-[#FFA200] mx-8">
                GLOW LOUD
              </span>
              <span className="text-2xl text-black mx-4">✦</span>
              <span className="font-folklore uppercase text-4xl font-bold text-[#FFA200] mx-8">
                REBEL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
