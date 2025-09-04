import React from 'react'
import img1 from "../assets/images/productview/1.png";
import img2 from "../assets/images/productview/2.png";
import img3 from "../assets/images/productview/3.png";
import img4 from "../assets/images/productview/4.png";
import img5 from "../assets/images/productview/5.png";
import img6 from "../assets/images/hero/4.png";
import img7 from "../assets/images/productview/7.png";
import img8 from "../assets/images/productview/8.png";
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
    <section className="relative h-[988px]">
      <div
        className=" flex flex-row"
        style={{
          width: "100%",
          display: "flex",
          height: "988px",
          // left: "64px",
          opacity: 1,
          borderRadius: "64px",
          backgroundColor: "#FFF9F2",
          transform: "rotate(0deg)",
        }}
      >
        {/* image section ......  */}
        <div
          style={{
            width: "50%",
            height: "988px",
          }}
        >
          <div
            className="absolute"
            style={{
              width: "647px",
              height: "499px",
              top: "119px",
              left: "63px",
            }}
          >
            <img
              style={{
                width: "647px",
                height: "499px",
              }}
              src={img1}
              alt=""
            />
          </div>

          <div
            className="absolute flex flex-row gap-20"
            style={{
              width: "50%",
              height: "188px",
              top: "648px",
            }}
          >
            <div>
              <img
                style={{
                  width: "145px",
                  height: "145px",
                }}
                src={img2}
                alt=""
              />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <img src={img4} alt="" />
            </div>
            <div>
              <img src={img5} alt="" />
            </div>
          </div>
        </div>

        {/* Text Section with exact specifications */}
        <div
          style={{
            width: "50%",
            height: "988px",
          }}
        >
          {/* Main container with exact dimensions */}
          <div
            className="absolute"
            style={{
              width: "553px",
              height: "542px",
              top: "108px",
              left: "820px",
              gap: "24px",
              opacity: 1,
              transform: "rotate(0deg)",
            }}
          >
            {/* Section 1: Product Title */}
            <div
              className="absolute"
              style={{
                width: "545px",
                height: "58px",
                top: "0px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              <h2
                style={{
                  fontFamily: "Darker Grotesque, sans-serif",
                  fontWeight: "700",
                  fontStyle: "normal",
                  fontSize: "64px",
                  lineHeight: "90%",
                  letterSpacing: "-3%",
                  color: "#1C1B1F",
                  margin: 0,
                }}
              >
                Collagen Glow Elixir™
              </h2>
            </div>
            {/* Section 2: Product Description */}
            <div
              className="absolute"
              style={{
                width: "531px",
                height: "96px",
                top: "82px", // 58 + 24 gap
                gap: "24px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              <p
                style={{
                  fontFamily: "Darker Grotesque, sans-serif",
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#1C1B1F",
                  margin: 0,
                }}
              >
                Your new daily ritual for skin that refuses to quit. Collagen
                Glow Elixir™ is a clinically formulated blend of hydrolyzed
                collagen, vitamin C, and antioxidants that work together to
                hydrate from within, improve elasticity.
              </p>
            </div>
            {/* Section 3: Benefits Section */}
            <div
              className="absolute"
              style={{
                width: "553px",
                height: "190px",
                top: "202px",
                gap: "16px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              {/* Benefits Header */}
              <div
                style={{
                  width: "235px",
                  height: "22px",
                  opacity: 1,
                  transform: "rotate(0deg)",
                  marginBottom: "16px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Darker Grotesque, sans-serif",
                    fontWeight: "600",
                    fontStyle: "normal",
                    fontSize: "24px",
                    lineHeight: "90%",
                    letterSpacing: "-3%",
                    color: "#1C1B1F",
                    margin: 0,
                  }}
                >
                  Benefits
                </h3>
              </div>

              {/* Benefits Grid - Fixed alignment */}
              <div
                className="grid grid-cols-2 gap-x-8 gap-y-6"
                style={{ marginTop: "16px" }}
              >
                {/* Plump & Hydrate */}
                <div className="flex flex-col">
                  {/* Heading with image */}
                  <div className="flex items-center mb-2">
                    <img src={img6} alt="star" className="w-5 h-5 mr-2" />
                    <h4
                      style={{
                        width: "198px",
                        height: "22px",
                        fontFamily: "Darker Grotesque, sans-serif",
                        fontWeight: "700",
                        fontStyle: "normal",
                        fontSize: "24px",
                        lineHeight: "90%",
                        letterSpacing: "-3%",
                        color: "#1C1B1FE5",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        margin: 0,
                      }}
                    >
                      Plump & Hydrate
                    </h4>
                  </div>
                  {/* Description aligned under heading text */}
                  <div style={{ marginLeft: "28px" }}>
                    <p
                      style={{
                        width: "195px",
                        height: "36px",
                        fontFamily: "Darker Grotesque, sans-serif",
                        fontWeight: "500",
                        fontStyle: "normal",
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#1C1B1F",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        margin: 0,
                      }}
                    >
                      Restores moisture, leaving skin soft and supple.
                    </p>
                  </div>
                </div>

                {/* Boost Elasticity */}
                <div className="flex flex-col">
                  {/* Heading with image */}
                  <div className="flex items-center mb-2">
                    <img src={img6} alt="star" className="w-5 h-5 mr-2" />
                    <h4
                      style={{
                        width: "198px",
                        height: "22px",
                        fontFamily: "Darker Grotesque, sans-serif",
                        fontWeight: "700",
                        fontStyle: "normal",
                        fontSize: "24px",
                        lineHeight: "90%",
                        letterSpacing: "-3%",
                        color: "#1C1B1FE5",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        margin: 0,
                      }}
                    >
                      Boost Elasticity
                    </h4>
                  </div>
                  {/* Description aligned under heading text */}
                  <div style={{ marginLeft: "28px" }}>
                    <p
                      style={{
                        width: "195px",
                        height: "36px",
                        fontFamily: "Darker Grotesque, sans-serif",
                        fontWeight: "500",
                        fontStyle: "normal",
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#1C1B1F",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        margin: 0,
                      }}
                    >
                      Improves firmness and bounce over time.
                    </p>
                  </div>
                </div>

                {/* Defend & Protect */}
                <div className="flex flex-col">
                  {/* Heading with image */}
                  <div className="flex items-center mb-2">
                    <img src={img6} alt="star" className="w-5 h-5 mr-2" />
                    <h4
                      style={{
                        width: "198px",
                        height: "22px",
                        fontFamily: "Darker Grotesque, sans-serif",
                        fontWeight: "700",
                        fontStyle: "normal",
                        fontSize: "24px",
                        lineHeight: "90%",
                        letterSpacing: "-3%",
                        color: "#1C1B1FE5",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        margin: 0,
                      }}
                    >
                      Defend & Protect
                    </h4>
                  </div>
                  {/* Description aligned under heading text */}
                  <div style={{ marginLeft: "28px" }}>
                    <p
                      style={{
                        width: "195px",
                        height: "36px",
                        fontFamily: "Darker Grotesque, sans-serif",
                        fontWeight: "500",
                        fontStyle: "normal",
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#1C1B1F",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        margin: 0,
                      }}
                    >
                      Antioxidants help fight daily environmental stressors.
                    </p>
                  </div>
                </div>

                {/* Glow From Within */}
                <div className="flex flex-col">
                  {/* Heading with image */}
                  <div className="flex items-center mb-2">
                    <img src={img6} alt="star" className="w-5 h-5 mr-2" />
                    <h4
                      style={{
                        width: "198px",
                        height: "22px",
                        fontFamily: "Darker Grotesque, sans-serif",
                        fontWeight: "700",
                        fontStyle: "normal",
                        fontSize: "24px",
                        lineHeight: "90%",
                        letterSpacing: "-3%",
                        color: "#1C1B1FE5",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        margin: 0,
                      }}
                    >
                      Glow From Within
                    </h4>
                  </div>
                  {/* Description aligned under heading text */}
                  <div style={{ marginLeft: "28px" }}>
                    <p
                      style={{
                        width: "195px",
                        height: "36px",
                        fontFamily: "Darker Grotesque, sans-serif",
                        fontWeight: "500",
                        fontStyle: "normal",
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#1C1B1F",
                        opacity: 1,
                        transform: "rotate(0deg)",
                        margin: 0,
                      }}
                    >
                      Supports a naturally radiant complexion without filters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Section 4: What's Inside */}
            <div
              className="absolute"
              style={{
                width: "463px",
                height: "56px",
                top: "408px", // 202 + 190 + 16 gap
                gap: "16px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              {/* What's inside heading */}
              <div
                style={{
                  width: "235px",
                  height: "22px",
                  opacity: 1,
                  transform: "rotate(0deg)",
                  marginBottom: "16px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Darker Grotesque, sans-serif",
                    fontWeight: "600",
                    fontStyle: "normal",
                    fontSize: "24px",
                    lineHeight: "90%",
                    letterSpacing: "-3%",
                    color: "#1C1B1F",
                    opacity: 1,
                    transform: "rotate(0deg)",
                    margin: 0,
                  }}
                >
                  What's inside?
                </h3>
              </div>

              {/* Ingredients list */}
              <div
                style={{
                  width: "463px",
                  height: "18px",
                  opacity: 1,
                  transform: "rotate(0deg)",
                }}
              >
                <p
                  style={{
                    fontFamily: "Darker Grotesque, sans-serif",
                    fontWeight: "600",
                    fontStyle: "normal",
                    fontSize: "20px",
                    lineHeight: "90%",
                    letterSpacing: "-3%",
                    color: "#1C1B1F",
                    opacity: 1,
                    transform: "rotate(0deg)",
                    margin: 0,
                  }}
                >
                  Collagen Peptides, Vitamin C, Hyaluronic Acid, Natural Berry
                  Flavor
                </p>
              </div>
            </div>
            {/* Section 5: Price and Quantity - Updated with image buttons */}
            <div
              className="absolute"
              style={{
                width: "553px",
                height: "46px",
                top: "480px",
                opacity: 1,
                transform: "rotate(0deg)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              {/* Price with exact specifications */}
              <div
                style={{
                  width: "111px",
                  height: "36px",
                  opacity: 1,
                  transform: "rotate(0deg)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Darker Grotesque, sans-serif",
                    fontWeight: "700",
                    fontStyle: "normal",
                    fontSize: "40px",
                    letterSpacing: "-3%",
                    color: "#1C1B1F",
                    opacity: 1,
                    transform: "rotate(0deg)",
                    margin: 0,
                  }}
                >
                  $50.99
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-baseline">
                {/* Quantity label */}
                <div
                  style={{
                    width: "72px",
                    height: "22px",
                    opacity: 1,
                    transform: "rotate(0deg)",
                    marginRight: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Darker Grotesque, sans-serif",
                      fontWeight: "600",
                      fontStyle: "normal",
                      fontSize: "24px",
                      lineHeight: "90%",
                      letterSpacing: "-3%",
                      color: "#1C1B1F",
                      opacity: 1,
                      transform: "rotate(0deg)",
                    }}
                  >
                    Quantity
                  </span>
                </div>

                {/* Quantity selector buttons with images */}
                <div
                  className="flex items-center  rounded-full"
                  style={{ marginTop: "2px" }}
                >
                  {/* Minus button with img7 */}
                  <button
                    onClick={decreaseQuantity}
                    className="w-10 h-10 rounded-full bg-[#E0E0E0] flex items-center justify-center hover:bg-[#D0D0D0] transition-colors"
                    style={{
                      border: "none",
                      margin: "4px",
                      cursor: "pointer",
                    }}
                    aria-label="Decrease quantity"
                  >
                    <img
                      src={img7}
                      alt="Decrease quantity"
                      className="w-6 h-6 object-contain"
                    />
                  </button>

                  {/* Quantity display */}
                  <span
                    className="px-4"
                    style={{
                      fontFamily: "Darker Grotesque, sans-serif",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#1C1B1F",
                      minWidth: "32px",
                      textAlign: "center",
                    }}
                  >
                    {quantity}
                  </span>

                  {/* Plus button with img8 */}
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 rounded-full bg-[#E0E0E0] flex items-center justify-center hover:bg-[#D0D0D0] transition-colors"
                    style={{
                      border: "none",
                      margin: "4px",
                      cursor: "pointer",
                    }}
                    aria-label="Increase quantity"
                  >
                    <img
                      src={img8}
                      alt="Increase quantity"
                      className="w-6 h-6 object-contain"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductView
