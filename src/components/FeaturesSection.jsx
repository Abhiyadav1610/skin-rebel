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
    <section
      className="relative w-screen  h-[1757px] mx-auto"
      style={{
        backgroundColor: "#FFF9F2",
        opacity: 1,
        transform: "rotate(0deg)",
      }}
    >
      {/* Features content will go here */}
      <div
        className=" flex flex-col  items-center w-full h-full p-8 "
        
      >
        {/* first section .......  */}
        <div
          className="absolute flex flex-col justify-center items-center "
          style={{
            top: "55px",
            // left: "382px",
            width: "676px",
            height: "144.15px",
         
          }}
        >
          <div className=" flex flex-row justify-center">
            <img style={{ width: "58px", height: "58px" }} src={img1} alt="" />
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
              The Glow Manifesto
            </p>
          </div>
          <div
            className=" flex justify-center"
            style={{ width: "720px", height: "65px" }}
          >
            <h1
              style={{
                fontFamily: "Darker Grotesque, sans-serif",
                fontWeight: 600,
                fontSize: "50px",
                lineHeight: "90%",
                letterSpacing: "-3%",
                color: "#1C1B1F",
              }}
            >
              Glow Science, Rebel Energy
            </h1>
          </div>
        </div>

        {/* second section .............  */}
        <div
          className="absolute flex flex-row"
          style={{
            width: "659.001953125px",
            height: "178px",
            top: "465px",
            left: "90px",
            // angle: 0 deg,
            opacity: 1,
            gap: "49px",
           
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "59px", height: "59px" }} src={img4} alt="" />
          </div>
          <div
            className="flex flex-col gap-10"
            style={{
              width: "545px",
              height: "58px",
            }}
          >
            <div>
              <h1
                style={{
                  fontWeight: "600",
                  style: "bold",
                  fontSize: "44px",
                  lineHeight: "90%",
                  letterSpacing: "-3%",
                }}
              >
                Feel It, See It
              </h1>
            </div>
            <div
              style={{
                width: "383px",
                height: "96px",
              }}
            >
              <p
                style={{
                  fontWeight: "500",
                  // style: "medium",
                  size: "32px",
                  lineHeight: "100%",
                }}
              >
                Smoother texture, brighter tone, stronger confidence — we’re
                here for visible wins, not empty promises.
              </p>
            </div>
          </div>
        </div>

        {/* third section ....................... */}
        <div
          className="absolute"
          style={{
            width: "455.77px",
            height: "460.41px",
            top: "326px",
            left: "828.62px",
         
          }}
        >
          <img src={img3} alt="" />
        </div>

        {/* fourth section .............  */}
        <div
          className="absolute flex flex-row"
          style={{
            width: "659.001953125px",
            height: "178px",
            top: "921px",
            left: "690px",
            // angle: 0 deg,
            opacity: 1,
            gap: "49px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "59px", height: "59px" }} src={img4} alt="" />
          </div>
          <div
            className="flex flex-col gap-10"
            style={{
              width: "555px",
              height: "58px",
            }}
          >
            <div >
              <h1
                style={{
                  fontWeight: "600",
                  style: "bold",
                  fontSize: "44px",
                  lineHeight: "90%",
                  letterSpacing: "-3%",
                }}
              >
                Skincare with Attitude
              </h1>
            </div>
            <div
              style={{
                width: "fit-content",
                height: "96px",
              }}
            >
              <p
                style={{
                  fontWeight: "500",
                  // style: "medium",
                  size: "32px",
                  lineHeight: "100%",
                }}
              >
                Bold, statement-making products that vibe with your style while
                working hard behind the scenes.
              </p>
            </div>
          </div>
        </div>

        {/* fivth section ....................... */}
        <div
          className="absolute"
          style={{
            width: "455.77px",
            height: "460.41px",
            top: "761px",
            left: "152.62px",
          }}
        >
          <img src={img5} alt="" />
        </div>
        {/* SIXTH SECTION ...... */}
        <div
          className="absolute flex flex-col"
          style={{
            width: "260.2px",
            height: "203.01px",
            top: "669px",
            left: "575.7px",
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
            top: "728.68px",
            left: "636.99px",
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

        {/* seventh section .............  */}
        <div
          className="absolute flex flex-row"
          style={{
            width: "659.001953125px",
            height: "178px",
            top: "1340px",
            left: "100px",
            // angle: 0 deg,
            opacity: 1,
            gap: "49px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "59px", height: "59px" }} src={img4} alt="" />
          </div>
          <div
            className="flex flex-col gap-10"
            style={{
              width: "545px",
              height: "58px",
            }}
          >
            <div >
              <h1
                style={{
                  fontWeight: "600",
                  style: "bold",
                  fontSize: "44px",
                  lineHeight: "90%",
                  letterSpacing: "-3%",
                }}
              >
                Clinically Backed Glow
              </h1>
            </div>
            <div
              style={{
                width: "383px",
                height: "96px",
              }}
            >
              <p
                style={{
                  fontWeight: "500",
                  // style: "medium",
                  size: "32px",
                  lineHeight: "100%",
                }}
              >
                Science-first formulas that actually deliver — Collagen & NAD+
                built for results you can see and feel.
              </p>
            </div>
          </div>
        </div>

        {/* eight section ....................... */}
        <div
          className="absolute"
          style={{
            width: "455.77px",
            height: "460.41px",
            top: "1194.41px",
            left: "794px",
          }}
        >
          <img src={img7} alt="" />
        </div>

        {/* ninth section ........ */}
         <div
                  className="absolute flex flex-col"
                  style={{
                    width: "91.2px",
                    height: "103.01px",
                    top: "1187px",
                    left: "663px",
                    opacity: 1,
                  }}
                >
                  <img src={img8} alt="Hero Visual" />
                </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
