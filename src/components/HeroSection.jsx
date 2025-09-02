import React from "react";
import img1 from '../assets/images/hero/1.png'
import img2 from "../assets/images/hero/2.png";
import img3 from "../assets/images/hero/3.png";
import img4 from "../assets/images/hero/4.png";
import img5 from "../assets/images/hero/5.png";
import img6 from "../assets/images/hero/6.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-screen h-[925px]"
      style={{
        backgroundColor: "#FFAFCD",
        opacity: 1,
        transform: "rotate(0deg)",
      }}
    >
      {/* Inner Content Container */}
      <div
        className="absolute"
        style={{
          width: "1412px",
          height: "698px",
          top: "53px",
          left: "64px",
          opacity: 1,
          borderRadius: "64px",
          backgroundColor: "#FFF9F2",
          transform: "rotate(0deg)",
        }}
      >
        {/* Left Side - Text Content with exact positioning */}
        <div
          className="absolute flex flex-col"
          style={{
            width: "659px",
            height: "384px",
            top: "192px",
            left: "53px",
            opacity: 1,
            gap: "24px",
            transform: "rotate(0deg)",
          }}
        >
          <h1
            className="font-folklore uppercase"
            style={{
              fontWeight: 400,
              fontSize: "85px",
              lineHeight: "90%",
              letterSpacing: "0%",
              color: "#FF4930",
            }}
          >
            Skincare
            <br />
            with an
            <br />
            Attitude.
          </h1>

          <p
            className="font-ben-brown lowercase"
            style={{
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "64px",
              lineHeight: "90%",
              letterSpacing: "-0.03em",
              color: "#8A5A07",
              textTransform: "lowercase",
            }}
          >
            where good skin meets bold energy
          </p>

          <button
            className="text-white font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center"
            style={{
              width: "234px",
              height: "50px",
              color: "#FF4930",
              opacity: 1,
              borderRadius: "100px",
              border: "2px solid #FF4930",
              gap: "10px",
              paddingTop: "16px",
              paddingRight: "10px",
              paddingBottom: "16px",
              paddingLeft: "10px",
              transform: "rotate(0deg)",
            }}
          >
            Shop Now
          </button>
        </div>

        {/* Image 1 - Behind */}
        <div
          className="absolute flex flex-col"
          style={{
            width: "453px",
            height: "330px",
            top: "319px",
            left: "710px",
            borderTopLeftRadius: "300px",
            borderTopRightRadius: "32px",
            borderBottomRightRadius: "32px",
            borderBottomLeftRadius: "32px",
          }}
        >
          <img
            src={img1}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 - Overlapping on top */}
        <div
          className="absolute flex flex-col"
          style={{
            width: "323px",
            height: "484px",
            top: "62px",
            left: "724px",
            borderRadius: "300px",
          }}
        >
          <img
            src={img2}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Image 3 - Overlapping on top */}
        <div
          className="absolute flex flex-col"
          style={{
            width: "275px",
            height: "381px",
            top: "258px",
            left: "1005px",
            borderRadius: "300px",
            opacity: 1,
          }}
        >
          <img src={img3} alt="Hero Visual" />
        </div>
        {/* Image 4 - Overlapping on top */}
        <div
          className="absolute flex flex-col"
          style={{
            width: "135.2px",
            height: "136.01px",
            top: "43px",
            left: "656px",
            opacity: 1,
          }}
        >
          <img src={img4} alt="Hero Visual" />
        </div>
        {/* Image 5 - Overlapping on top */}
        <div
          className="absolute flex flex-col"
          style={{
            width: "91.2px",
            height: "103.01px",
            top: "159px",
            left: "1148px",
            opacity: 1,
          }}
        >
          <img src={img5} alt="Hero Visual" />
        </div>
        {/* Image 6 - Overlapping on top */}
        <div
          className="absolute flex flex-col"
          style={{
            width: "260.2px",
            height: "203.01px",
            top: "465px",
            left: "764.7px",
            border: "4px",
            // alignmentBaseline:-6.49,
            opacity: 1,
          }}
        >
          <img src={img6} alt="Hero Visual" />
        </div>
        {/* Image 7 - Overlapping on top */}
        <div
          className="absolute flex flex-col"
          style={{
            width: "146.2px",
            height: "107.01px",
            top: "525px",
            left: "826.7px",
            border: "4px",
            transform: "rotate(-6.49deg)", // Added rotation
          }}
        >
          <h2
            className="font-folklore uppercase"
            style={{
              width: "400.2px",
              fontSize: "46px",
              letterSpacing: "-3%",
              lineHeight: "100%",
              color: "white",
            }}
          >
            SKIN <br /> REBEL
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
