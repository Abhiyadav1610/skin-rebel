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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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

                {/* Cloud-shaped Overlapping Container */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                  {/* Cloud SVG Background */}
                  <div className="relative">
                    <svg
                      width="180"
                      height="100"
                      viewBox="0 0 180 100"
                      className="fill-gradient-to-br from-orange-100 to-pink-100 drop-shadow-lg"
                    >
                      <path
                        d="M25,60 C15,45 25,35 35,40 C40,20 60,20 65,40 C75,35 85,45 85,50 C95,45 105,55 95,65 C110,70 105,85 90,80 L35,80 C20,85 10,70 25,60 Z"
                        fill="#FFF4E6"
                        stroke="#F59E0B"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* Content inside cloud */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                      {/* Name */}
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {testimonial.name}
                      </h3>

                      {/* Instagram Handle */}
                      <p className="text-gray-600 text-sm mb-2">
                        {testimonial.instagram}
                      </p>

                      {/* Star Rating */}
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 text-rebel-yellow mr-1">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-900 font-semibold text-sm">
                          {testimonial.rating}
                        </span>
                      </div>
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
