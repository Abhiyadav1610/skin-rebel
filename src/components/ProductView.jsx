import React from 'react'
import img1 from "../assets/images/productview/1.png";
import img2 from "../assets/images/productview/2.png";
import img3 from "../assets/images/productview/3.png";
import img4 from "../assets/images/productview/4.png";
import img5 from "../assets/images/productview/5.png";

const ProductView = () => {
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
          border: "2px solid red",
        }}
      >
        {/* image section ......  */}
        <div
          style={{
            width: "50%",
            height: "988px",
            border: "2px solid red",
          }}
        >
          <div
            className="absolute"
            style={{
              width: "647px",
              height: "499px",
              border: "2px solid red",
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
              border: "2px solid red",
              top: "648px",
            }}
          >
            <div>
              <img
                style={{
                  width: "145px",
                  height: "145px",
                  //   border: "2px solid red",
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
        {/* text section .......  */}
        <div
          style={{
            width: "50%",
            height: "988px",
            border: "2px solid red",
          }}
        >
          <div
            className="absolute"
            style={{
              width: "553px",
              height: "542px",
              top: "108px",
              left: "820px",
              border: "2px solid red",
            }}
          >
            <div
              style={{
                width: "553px",
                height: "58px",
              }}
            >
              <h2
                style={{
                  fontFamily: "Darker Grotesque, sans-serif",
                  fontWeight: "700",
                  fontSize: "42px",
                  lineHeight: "90%",
                  letterSpacing: "-3%",
                }}
              >
                Collagen Glow Elixir™
              </h2>
            </div>

            <div>
              <p
                className="absolute"
                style={{
                  fontFamily: "Darker Grotesque, sans-serif",
                  fontWeight: "500",
                  fontSize: "22px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  top: "65px",
                }}
              >
                Your new daily ritual for skin that refuses to quit. Collagen
                Glow Elixir™ is a clinically formulated blend of hydrolyzed
                collagen, vitamin C, and antioxidants that work together to
                hydrate from within, improve elasticity.
              </p>
            </div>

            {/* second section - Added proper top positioning */}
            <div
              className="absolute"
              style={{
                width: "553px",
                height: "190px",
                top: "180px", // Added this to position below the paragraph
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "Darker Grotesque, sans-serif",
                  }}
                >
                  Benefits
                </h2>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <div>1</div>
                <div>2</div>
                <div>2</div>
                <div>3</div>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div
            style={{
              width: "100px",
              height: "108px",
              border: "2px solid red",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default ProductView
