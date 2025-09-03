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
  return (
    <div
      className=" relative flex justify-center items-center  h-[925px]"
      style={{
        backgroundColor: "#FFAFCD",
        opacity: 1,
        transform: "rotate(0deg)",
      }}
    >
      {/* upper content ......... */}

      <div
        className="absolute flex flex-col"
        style={{
          width: "898px",
          height: "76px",
          top: "74px",
          left: "261px",
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
          {/* Skincare
          <br />
          with an
          <br />
          Attitude. */}
          The Rebel Line-Up
        </h1>
      </div>

      {/* Inner Content Container */}

      <div
        className="absolute flex flex justify-center items-center"
        style={{
          width: "1300px",
          display: "flex",
          height: "580px",
          top: "217px",
          // left: "64px",
          opacity: 1,
          borderRadius: "64px",
          backgroundColor: "#FFF9F2",
          transform: "rotate(0deg)",
        }}
      >
        {/* inner text upside ....... */}

        <div
          className="absolute"
          style={{
            width: "327px",
            height: "58px",
            top: "14px",
            // left: "429px",
          }}
        >
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
            Your skins new inner circle
          </p>
        </div>

        {/* images of product.........  */}
        <div
          className="flex flex-row "
          style={{
            height: "fit-content",
            gap: "40px",
          }}
        >
          <div>
            <div>
              <img src={img7} alt="" />
            </div>
            <div className=" flex flex-col     items-center">
              <h1 style={{ style: "bold", fontWeight: "700" }}>
                Adaptogen Elixir
              </h1>
              <p>Find your calm in the chaos.</p>
            </div>
          </div>
          <div>
            <div>
              <img src={img7} alt="" />
            </div>
            <div className=" flex flex-col     items-center">
              <h1 style={{ style: "bold", fontWeight: "700" }}>
                Adaptogen Elixir
              </h1>
              <p>Find your calm in the chaos.</p>
            </div>
          </div>
          <div>
            <div>
              <img src={img7} alt="" />
            </div>
            <div className=" flex flex-col     items-center">
              <h1 style={{ style: "bold", fontWeight: "700" }}>
                Adaptogen Elixir
              </h1>
              <p>Find your calm in the chaos.</p>
            </div>
          </div>{" "}
          <div>
            <div>
              <img src={img7} alt="" />
            </div>
            <div className=" flex flex-col     items-center">
              <h1 style={{ style: "bold", fontWeight: "700" }}>
                Adaptogen Elixir
              </h1>
              <p>Find your calm in the chaos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* outer cloud .................  */}
      <div
        className="absolute flex flex-col"
        style={{
          width: "260.2px",
          height: "203.01px",
          top: "86px",
          left: "1128.7px",
          border: "4px",
          // alignmentBaseline:-6.49,
          opacity: 1,
        }}
      >
        <img src={img6} alt="Hero Visual" />
      </div>
      <div
        className="absolute flex flex-col"
        style={{
          width: "146.2px",
          height: "107.01px",
          top: "145px",
          left: "1189.7px",
          border: "4px",
          transform: "rotate(6.49deg)", // Added rotation
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

      {/* outer flower ...........................  */}
      <div
        className="absolute flex flex-col"
        style={{
          width: "91.55px",
          height: "103.01px",
          top: "160.37px",
          left: "75px",
          opacity: 1,
        }}
      >
        <img src={img8} alt="Hero Visual" />
      </div>
    </div>
  );
};

export default ProductLineup;
