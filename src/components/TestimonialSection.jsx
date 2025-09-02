import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amara L.",
      instagram: "@skinbyamara",
      imageSrc: "",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Leo R.",
      instagram: "@glowwithleo",
      imageSrc: "",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Tina M.",
      instagram: "@tinaskinrebel",
      imageSrc: "",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Jay P",
      instagram: "@jaydoesglow",
      imageSrc: "",
      rating: 4.9,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative star */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-rebel-yellow opacity-70">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          <p className="text-amber-600 font-handwriting text-xl mb-4">
            the glow manifesto
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Glow, As Seen By You
          </h2>

          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            From unboxings to glow-ups, our Skin Rebel creators show what it's
            like to live (and glow) with products that actually work.
          </p>

          {/* Decorative flower - top right */}
          <div className="absolute top-8 right-8 w-12 h-12 text-rebel-yellow opacity-70">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-full h-full"
            >
              <ellipse
                cx="12"
                cy="8"
                rx="2"
                ry="4"
                transform="rotate(0 12 12)"
              />
              <ellipse
                cx="12"
                cy="8"
                rx="2"
                ry="4"
                transform="rotate(60 12 12)"
              />
              <ellipse
                cx="12"
                cy="8"
                rx="2"
                ry="4"
                transform="rotate(120 12 12)"
              />
              <ellipse
                cx="12"
                cy="8"
                rx="2"
                ry="4"
                transform="rotate(180 12 12)"
              />
              <ellipse
                cx="12"
                cy="8"
                rx="2"
                ry="4"
                transform="rotate(240 12 12)"
              />
              <ellipse
                cx="12"
                cy="8"
                rx="2"
                ry="4"
                transform="rotate(300 12 12)"
              />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Bottom Section - Four Testimonial Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center relative"
            >
              {/* Vertical Oval Image Container */}
              <div className="relative">
                <div className="w-44 h-60 rounded-full overflow-hidden shadow-2xl border-4 border-white relative">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-gray-700 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Simple Cloud-like Container - FIXED */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className="bg-gradient-to-br from-orange-100 to-pink-100 border-2 border-amber-200 shadow-lg px-6 py-3 w-40 h-20 flex flex-col items-center justify-center text-center"
                    style={{
                      borderRadius: "50% 80% 60% 70% / 60% 30% 70% 40%",
                      clipPath:
                        "polygon(20% 0%, 80% 0%, 100% 25%, 95% 50%, 100% 75%, 80% 100%, 20% 100%, 0% 75%, 5% 50%, 0% 25%)",
                    }}
                  >
                    {/* Name - Truncated to fit */}
                    <h3 className="text-sm font-bold text-gray-900 truncate w-full mb-0.5 leading-tight">
                      {testimonial.name}
                    </h3>

                    {/* Instagram Handle - Truncated to fit */}
                    <p className="text-xs text-gray-600 truncate w-full mb-1 leading-tight">
                      {testimonial.instagram}
                    </p>

                    {/* Star Rating */}
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 text-rebel-yellow mr-1">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-900 font-semibold text-xs">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
