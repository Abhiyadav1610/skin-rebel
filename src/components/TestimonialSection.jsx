import React from "react";
import img1 from "../assets/images/testimonials/1.png";
import img2 from "../assets/images/testimonials/2.png";
import img3 from "../assets/images/testimonials/3.png";
import img4 from "../assets/images/testimonials/4.png";
import img5 from "../assets/images/feature/1.png";

const TestimonialSection = () => {
  return (
    <section className="relative h-[988px]">
      <div
        className="absolute flex flex justify-center items-center"
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
        {/* inner text upside ....... */}

        <div
          className="absolute flex flex-row "
          style={{
            width: "327px",
            height: "58px",
            top: "14px",
            // left: "429px",
          }}
        >
          <img style={{ width: "58px", height: "58px" }} src={img5} alt="" />
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
          className="absolute"
          style={{
            width: "676px",
            height: "144px",
            top: "75px",
            justifyContent:"center",
            justifyItems:"center"
          }}
        >
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
            Glow, As Seen By You
          </h2>

          <p
            className="absolute"
            style={{
              fontFamily: "Darker Grotesque, sans-serif",
              fontWeight: "500",
              fontSize: "22px",
              lineHeight: "100%",
              letterSpacing: "0%",
              top:"65px",
              
            }}
          >
            From unboxings to glow-ups, our Skin Rebel creators show what it’s
            like to live (and glow) with products that actually work.
          </p>
        </div>

        {/* images of product.........  */}
        <div
          className="flex flex-row "
          style={{
            // height: "fit-content",
            height: "430px",
            width: "1296px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div>
              <img
                style={{
                  width: "287px",
                  height: "430px",
                  borderRadius: "300px",
                }}
                src={img1}
                alt=""
              />
            </div>
          </div>
          <div>
            <div>
              <img
                style={{
                  width: "287px",
                  height: "430px",
                  borderRadius: "300px",
                }}
                src={img2}
                alt=""
              />
            </div>
          </div>
          <div>
            <div
              style={{
                width: "287px",
                height: "430px",
                borderRadius: "300px",
              }}
            >
              <img
                style={{
                  width: "287px",
                  height: "430px",
                  borderRadius: "300px",
                }}
                src={img3}
                alt=""
              />
            </div>
          </div>{" "}
          <div>
            <div
              style={{
                width: "287px",
                height: "430px",
                borderRadius: "300px",
              }}
            >
              <img
                style={{
                  width: "287px",
                  height: "430px",
                  borderRadius: "300px",
                }}
                src={img4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
