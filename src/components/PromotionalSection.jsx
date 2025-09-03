import React from "react";
import promotion from '../assets/images/promotion.jpg'
import img1 from "../assets/images/promotion/1.png";
import img3 from "../assets/images/mobile/2.png";
import img6 from "../assets/images/hero/6.png";
import img8 from "../assets/images/feature/7.png";

const PromotionalSection = () => {
  return (
    <section
      className="relative w-screen  h-[1078px] mx-auto"
      style={{
        backgroundColor: "#FFE6EF",
        opacity: 1,
        transform: "rotate(0deg)",
      }}
    >
      {/* for trext.............  */}
      <div
        className="absolute"
        style={{
          border: "2px solid red",
          height: "361px",
        }}
      >
        <div
          className="absolute flex flex-col"
          style={{
            width: "585px",
            height: "361px",
            top: "84px",
            left: "61px",
            // opacity: 1,
            // gap: "24px",
            // transform: "rotate(0deg)",
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
            be
            <br />
            luminous.
            <br />
            be a skin
            <br />
            rebel.
          </h1>
        </div>
        <div
          className="absolute"
          style={{
            width: "728px",
            height: "134px",
            top: "233px",
            left: "646px",
          }}
        >
          <p
            style={{
              fontWeight: "400",
              // style: "medium",
              fontSize: "34px",
              lineHeight: "100%",
              color: "#1C1B1F",
            }}
          >
            Your glow story starts now — with collagen, NAD+, and creams that
            work together to repair, hydrate, and keep your skin looking its
            best every day.
          </p>
        </div>
      </div>
      {/* for image...............  */}
      <div
        className="absolute"
        style={{
          width: "851px",
          height: "437px",
          top: "505px",
          left: "300px",
          borderRadius: "200px",
        }}
      >
        <img src={img1} alt="" />
      </div>
      {/* cloud section 1 ..............  */}
      <div
        className="absolute flex flex-col"
        style={{
          width: "151.2px",
          height: "140.01px",
          top: "54px",
          left: "401.7px",
          border: "4px",
          // alignmentBaseline:-6.49,
          transform: "rotate(8.49deg)", // Added rotation

          opacity: 1,
        }}
      >
        <img src={img3} alt="Hero Visual" />
      </div>
      {/* cloud section 2 ..............  */}
      <div
        className="absolute flex flex-col"
        style={{
          width: "151.2px",
          height: "123.01px",
          top: "724px",
          left: "1109.7px",
          border: "4px",
          // alignmentBaseline:-6.49,
          opacity: 1,
        }}
      >
        <img src={img3} alt="Hero Visual" />
      </div>

      {/* outer other cloud .................  */}
      <div
        className="absolute flex flex-col"
        style={{
          width: "281.2px",
          height: "230.01px",
          top: "760px",
          left: "164.7px",
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
          top: "819px",
          left: "225.7px",
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
          top: "105.37px",
          left: "1167px",
          // opacity: 1,
        }}
      >
        <img src={img8} alt="Hero Visual" />
      </div>
    </section>
  );
};

export default PromotionalSection;
