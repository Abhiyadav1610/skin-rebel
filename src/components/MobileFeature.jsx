import React from 'react';
import hero1 from "../assets/images/hero1.jpg"; // Ensure you have a hero.jpg in the assets folder
import img1 from '../assets/images/mobile/1.png'
import img2 from "../assets/images/feature/1.png";
import img3 from "../assets/images/mobile/2.png";
import img4 from "../assets/images/hero/4.png";
import img5 from "../assets/images/mobile/3.png";
import img8 from "../assets/images/feature/7.png";

const MobileFeature = () => {
  return (
    <section
      style={{
        height: "781px",
        backgroundColor: "#fff5ea",
      }}
    >
      <div className="relative">
        {/* Text Content */}

        <div
          className="absolute"
          style={{
            width: "678px",
            height: "329.15px",
            top: "257px",
            left: "65px",
          }}
        >
          <div className="flex ">
            <div className=" flex flex-row ">
              <img
                style={{ width: "58px", height: "58px" }}
                src={img2}
                alt=""
              />
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
                Some vibes you just have to see
              </p>
            </div>
          </div>

          <h2
            style={{
              fontFamily: "Darker Grotesque, sans-serif",
              fontWeight: "700",
              style: "bold",
              fontSize: "42px",
              lineHeight: "90%",
              letterSpacing: "-3%",
            }}
          >
            Skincare that works While
            <br />
            you live your life
          </h2>

          <p
            className="absolute"
            style={{
              top: "150px",
              fontFamily: "Darker Grotesque, sans-serif",
              fontWeight: "500",
              fontSize: "22px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            From inside-out hydration to visible radiance, Skin Rebel gives you
            the tools your skin needs to stay strong and luminous.
          </p>
        </div>

        {/* Image */}
        <div
          className="absolute"
          style={{
            width: "489px",
            height: "680px",
            top: "61px",
            left: "888px",
            borderRadius: "300px",
            border: "1px",
          }}
        >
          <img src={img1} alt="" className="w-full h-full object-cover" />
        </div>

        {/* star section .......................  */}

        <div
          className="absolute flex flex-col"
          style={{
            width: "135.2px",
            height: "136.01px",
            top: "189px",
            left: "701px",
            opacity: 1,
          }}
        >
          <img src={img4} alt="Hero Visual" />
        </div>
        <div
          className="absolute flex flex-col"
          style={{
            width: "135.2px",
            height: "136.01px",
            top: "611px",
            left: "377px",
            opacity: 1,
          }}
        >
          <img src={img5} alt="Hero Visual" />
        </div>
{/* outer flower ...........................  */}
      <div
        className="absolute flex flex-col"
        style={{
          width: "91.55px",
          height: "103.01px",
          top: "142.37px",
          left: "58px",
          opacity: 1,
        }}
      >
        <img src={img8} alt="Hero Visual" />
      </div>

        {/* cloud section ..............  */}
        <div
          className="absolute flex flex-col"
          style={{
            width: "260.2px",
            height: "203.01px",
            top: "330px",
            left: "722.7px",
            border: "4px",
            // alignmentBaseline:-6.49,
            opacity: 1,
          }}
        >
          <img src={img3} alt="Hero Visual" />
        </div>
      </div>
    </section>
  );
};

export default MobileFeature;
