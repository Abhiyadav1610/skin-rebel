import React, { useState } from "react";
import img1 from "../assets/images/testimonials/1.png";
import img2 from "../assets/images/testimonials/2.png";
import img3 from "../assets/images/testimonials/3.png";
import img4 from "../assets/images/testimonials/4.png";
import img5 from "../assets/images/feature/1.svg";
import img6 from "../assets/images/testimonials/5.png";
import img7 from "../assets/images/testimonials/6.png";

const TestimonialSection = () => {
  // State to manage video playback for each testimonial
  const [playingVideo, setPlayingVideo] = useState({});

  // Testimonial images array with user details
  const testimonialImages = [
    {
      src: img1,
      alt: "Skin Rebel testimonial 1",
      name: "Jay P",
      email: "@jaydoesglow",
      rating: "4.8",
      videoSrc: "", // Leave empty as requested
    },
    {
      src: img2,
      alt: "Skin Rebel testimonial 2",
      name: "Tina M.",
      email: "@tinaskinrebel",
      rating: "4.5",
      videoSrc: "", // Leave empty as requested
    },
    {
      src: img3,
      alt: "Skin Rebel testimonial 3",
      name: "Leo R",
      email: "@glowwithleo",
      rating: "4.9",
      videoSrc: "", // Leave empty as requested
    },
    {
      src: img4,
      alt: "Skin Rebel testimonial 4",
      name: "Amara L",
      email: "@skinbyamara",
      rating: "4.7",
      videoSrc: "", // Leave empty as requested
    },
  ];

  // Function to handle video play
  const handlePlayVideo = (index) => {
    setPlayingVideo((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="relative w-screen min-h-screen bg-[#FFF9F2] py-8 px-4 sm:px-6 lg:px-8 xl:min-h-[988px] xl:flex xl:justify-center">
      {/* Centered container wrapper for large screens */}
      <div className="relative w-full max-w-[1440px] min-h-[800px] sm:min-h-[900px] lg:min-h-[950px] xl:h-[988px]">
        <div className="relative w-full h-full xl:absolute xl:flex xl:justify-center xl:items-center xl:rounded-[64px] xl:bg-[#FFF9F2]">
          {/* Mobile and Tablet Layout */}
          <div className="block xl:hidden">
            {/* Inner text header - Mobile/Tablet */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <img
                className="w-8 h-8 sm:w-12 sm:h-12 mr-3"
                src={img5}
                alt="Feature icon"
              />
              <p className="font-ben-brown lowercase font-normal text-[24px] sm:text-[32px] lg:text-[40px] leading-[90%] tracking-[-0.03em] text-[#8A5A07]">
                some vibes you just have to see
              </p>
            </div>

            {/* Title - Mobile/Tablet */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="font-darker-grotesque font-bold text-[48px] sm:text-[56px] lg:text-[64px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F]">
                Glow, As Seen By You
              </h2>
            </div>

            {/* Description - Mobile/Tablet */}
            <div className="text-center mb-8 sm:mb-12 px-4">
              <p className="font-darker-grotesque font-medium text-[18px] sm:text-[22px] lg:text-[26px] leading-[100%] tracking-normal text-[#1C1B1F] max-w-[600px] mx-auto">
                From unboxings to glow-ups, our Skin Rebel creators show what
                it's like to live (and glow) with products that actually work.
              </p>
            </div>

            {/* Testimonial Grid - Mobile/Tablet: 2x2 Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10 justify-items-center max-w-[600px] mx-auto">
              {testimonialImages.map((testimonial, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  {/* Testimonial Image Container with overlap */}
                  <div className="relative w-[140px] h-[180px] sm:w-[160px] sm:h-[200px] lg:w-[180px] lg:h-[220px] rounded-[80px] sm:rounded-[90px] lg:rounded-[100px] overflow-visible mb-4">
                    {/* Main testimonial image */}
                    <div className="w-full h-full rounded-[80px] sm:rounded-[90px] lg:rounded-[100px] overflow-hidden">
                      <img
                        src={testimonial.src}
                        alt={testimonial.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Clickable img6 overlay at center */}
                    <button
                      onClick={() => handlePlayVideo(idx)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-110"
                      aria-label={`Play video for ${testimonial.name}`}
                    >
                      <img
                        src={img6}
                        alt="Play video button"
                        className="w-full h-full object-contain cursor-pointer"
                      />
                    </button>

                    {/* Cloud badge with 10% overlap - FIXED POSITIONING */}
                    <div className="absolute -bottom-[18px] sm:-bottom-[20px] lg:-bottom-[22px] left-1/2 transform -translate-x-1/2 w-[120px] h-[80px] sm:w-[140px] sm:h-[90px] z-10">
                      <img
                        src={img7}
                        alt="Cloud badge"
                        className="w-full h-full object-contain"
                      />
                      {/* Text content overlay on cloud */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2">
                        {/* Name */}
                        <div className="font-darker-grotesque font-semibold text-[14px] sm:text-[16px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] mb-1">
                          {testimonial.name}
                        </div>
                        {/* Email */}
                        <div className="font-darker-grotesque font-bold text-[10px] sm:text-[12px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] mb-1">
                          {testimonial.email}
                        </div>
                        {/* Rating */}
                        <div className="flex items-center justify-center">
                          <span className="text-yellow-400 text-[10px] sm:text-[12px]">
                            ⭐
                          </span>
                          <span className="text-[#1C1B1F] font-darker-grotesque font-bold text-[10px] sm:text-[12px] leading-[100%] tracking-[-0.005em] ml-1">
                            {testimonial.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Video overlay (shown when playing) */}
                    {playingVideo[idx] && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="relative w-full max-w-4xl h-full max-h-96 bg-black rounded-lg overflow-hidden">
                          <video
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            onEnded={() =>
                              setPlayingVideo((prev) => ({
                                ...prev,
                                [idx]: false,
                              }))
                            }
                          >
                            <source
                              src={testimonial.videoSrc}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                          <button
                            onClick={() =>
                              setPlayingVideo((prev) => ({
                                ...prev,
                                [idx]: false,
                              }))
                            }
                            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
                            aria-label="Close video"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Original absolute positioning for XL screens (1280px+) */}
          <div className="hidden xl:block">
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

            {/* Title with exact typography specifications */}
            <div className="absolute w-[676px] h-[144px] top-[75px] left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
              <h2 className="font-darker-grotesque font-bold text-[72px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F]">
                Glow, As Seen By You
              </h2>
            </div>

            {/* Description with exact layout specifications and proper 21.8px gap */}
            <div
              className="absolute w-[836px] h-[64px] top-[217px] left-[302px] opacity-100"
              style={{
                marginTop: "21.8px",
                position: "absolute",
                top: "calc(75px + 72px + 21.8px)", // top of heading + font size + gap
                left: "302px",
              }}
            >
              <p className="font-darker-grotesque font-medium text-[32px] leading-[100%] tracking-normal text-[#1C1B1F] text-center">
                From unboxings to glow-ups, our Skin Rebel creators show what
                it's like to live (and glow) with products that actually work.
              </p>
            </div>

            {/* Testimonial images with both img6 (center) and img7 (bottom) overlays */}
            <div className="absolute flex flex-row justify-between w-[1296px] h-[430px] top-[400px] left-1/2 transform -translate-x-1/2">
              {testimonialImages.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="relative w-[287px] h-[430px] rounded-[300px] overflow-visible"
                >
                  {/* Main testimonial image */}
                  <div className="w-full h-full rounded-[300px] overflow-hidden">
                    <img
                      src={testimonial.src}
                      alt={testimonial.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Clickable img6 overlay at center */}
                  <button
                    onClick={() => handlePlayVideo(idx)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-auto z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-110"
                    aria-label={`Play video for ${testimonial.name}`}
                  >
                    <img
                      src={img6}
                      alt="Play video button"
                      className="w-full h-auto object-contain cursor-pointer"
                    />
                  </button>

                  {/* Video overlay (shown when playing) */}
                  {playingVideo[idx] && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-0">
                      <div className="relative w-full max-w-4xl h-full max-h-96 bg-black rounded-lg overflow-hidden">
                        <video
                          className="w-full h-full object-cover"
                          controls
                          autoPlay
                          onEnded={() =>
                            setPlayingVideo((prev) => ({
                              ...prev,
                              [idx]: false,
                            }))
                          }
                        >
                          <source src={testimonial.videoSrc} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <button
                          onClick={() =>
                            setPlayingVideo((prev) => ({
                              ...prev,
                              [idx]: false,
                            }))
                          }
                          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
                          aria-label="Close video"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}

                  {/* img7 overlay at bottom with 10% overlap and text content */}
                  <div
                    className="absolute z-10"
                    style={{
                      bottom: "-10%",
                      left: "40%",
                      transform: "translateX(-50%) rotate(4.0deg)",
                      width: "259.5892574738989px",
                      height: "167.81557408887318px",
                      opacity: 1,
                      borderRadius: "18px",
                      borderWidth: "4px",
                      borderStyle: "solid",
                      borderColor: "transparent",
                    }}
                  >
                    <img
                      src={img7}
                      alt="Bottom cloud overlay"
                      className="w-full h-full object-contain rounded-[18px]"
                    />

                    {/* Text content overlay on img7 */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                      {/* Name */}
                      <div className="font-darker-grotesque font-semibold text-[32px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] text-center mb-1">
                        {testimonial.name}
                      </div>

                      {/* Email */}
                      <div className="font-darker-grotesque font-bold text-[24px] leading-[90%] tracking-[-0.03em] text-[#1C1B1F] text-center mb-1">
                        {testimonial.email}
                      </div>

                      {/* Rating with single star */}
                      <div className="flex items-center justify-center">
                        <span className="text-yellow-400 text-[12px]">⭐</span>
                        <span className="text-[#1C1B1F] font-darker-grotesque font-bold text-[24px] leading-[100%] tracking-[-0.005em] ml-1">
                          {testimonial.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
