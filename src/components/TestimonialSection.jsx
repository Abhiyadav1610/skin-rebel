import React from "react";
import img1 from "../assets/images/testimonials/1.png";
import img2 from "../assets/images/testimonials/2.png";
import img3 from "../assets/images/testimonials/3.png";
import img4 from "../assets/images/testimonials/4.png";
import img5 from "../assets/images/feature/1.svg";

const TestimonialSection = () => {
  // Testimonial images array to avoid repetition
  const testimonialImages = [
    { src: img1, alt: "Skin Rebel testimonial 1" },
    { src: img2, alt: "Skin Rebel testimonial 2" },
    { src: img3, alt: "Skin Rebel testimonial 3" },
    { src: img4, alt: "Skin Rebel testimonial 4" },
  ];

  return (
    <section className="relative w-full min-h-[988px] flex justify-center">
      {/* Centered container wrapper for large screens */}
      <div className="relative w-full max-w-[1440px] h-[988px]">
        <div className="absolute flex justify-center items-center w-full h-[988px] rounded-[64px] bg-[#FFF9F2]">
          {/* Inner text header */}
          <div className="absolute flex flex-row items-center w-[400px] h-[58px] top-[14px] left-1/2 transform -translate-x-1/2">
            <img
              className="w-[58px] h-[58px] mr-4"
              src={img5}
              alt="Feature icon"
            />
            <p className="font-ben-brown lowercase font-normal text-[48px] lg:text-[64px] leading-[90%] tracking-[-0.03em] text-[#8A5A07]">
              The Glow Manifesto
            </p>
          </div>

          {/* Title and description */}
          <div className="absolute w-[676px] h-[144px] top-[75px] left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
            <h2 className="font-['Darker_Grotesque'] font-bold text-[42px] leading-[90%] tracking-[-3%] text-[#1C1B1F] mb-4">
              Glow, As Seen By You
            </h2>

            <p className="font-['Darker_Grotesque'] font-medium text-[22px] leading-[100%] tracking-normal text-[#1C1B1F] max-w-[600px]">
              From unboxings to glow-ups, our Skin Rebel creators show what it's
              like to live (and glow) with products that actually work.
            </p>
          </div>

          {/* Testimonial images */}
             <div
   className="flex flex-row "
   style={{
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
 </div>;

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

{
  /* images of product.........  */
}
