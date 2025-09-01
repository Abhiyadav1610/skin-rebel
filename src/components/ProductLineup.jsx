import React from "react";
import productlineup from "../assets/images/productlineup.jpg"; // Ensure you have product1.png in the assets folder
const ProductLineup = () => {
  const products = [
    {
      name: "Power Collagen",
      description: "Inner radiance, outer glow.",
      bgColor: "from-pink-200 to-pink-300",
      borderColor: "border-amber-600",
      image: {productlineup},
    },
    {
      name: "Vitality Greens",
      description: "Fuel your body, ignite your day.",
      bgColor: "from-purple-200 to-purple-300",
      borderColor: "border-amber-600",
      image: {productlineup},
    },
    {
      name: "Omega Boost",
      description: "Love your heart, drop by drop.",
      bgColor: "from-orange-200 to-orange-300",
      borderColor: "border-amber-600",
      image: {productlineup},
    },
    {
      name: "Adaptogen Elixir",
      description: "Find your calm in the chaos.",
      bgColor: "from-lime-300 to-lime-400",
      borderColor: "border-amber-600",
      image: {productlineup},
    },
  ];

  return (
    <section
      style={{
        height: "958px",
        position: "relative",
        opacity: 1,
        transform: "rotate(0deg)",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className="bg-gradient-to-br from-rebel-pink to-pink-400 py-16"
    >
      <div className="max-w-7xl mx-auto px-8 h-full">
        {/* Inner white container */}
        <div className="relative bg-gradient-to-br from-orange-50 to-pink-50 rounded-[4rem] p-12 shadow-lg h-full flex flex-col justify-center">
          {/* Decorative flower - top left */}
          <div className="absolute top-8 left-8 w-12 h-12 text-rebel-yellow opacity-70">
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

          {/* SKIN REBEL Badge - top right */}
          <div className="absolute top-8 right-8 bg-rebel-yellow text-white px-6 py-3 rounded-full transform rotate-12 shadow-lg">
            <span className="font-bold text-sm">SKIN REBEL</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-rebel-orange mb-6">
              THE REBEL LINE-UP
            </h2>
            <p className="text-amber-600 font-handwriting text-xl">
              your skin's new inner circle
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                {/* Product Container - Oval shaped */}
                <div
                  className={`relative bg-gradient-to-b ${product.bgColor} ${product.borderColor} border-4 rounded-[5rem] p-8 mb-6 h-72 flex flex-col items-center justify-center shadow-lg overflow-hidden`}
                >
                  {/* Product Bottle */}
                  <div className="relative z-10 mb-4">
                    <div className="w-20 h-28 bg-amber-700 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                      <img
                        src={productlineup}
                        alt={`${product.name} supplement bottle`}
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-amber-700 bg-opacity-20 rounded-2xl flex items-center justify-center">
                        <span className="text-white text-xs font-bold transform -rotate-12 leading-tight text-center">
                          SKIN
                          <br />
                          REBEL
                        </span>
                      </div>
                      {/* Bottle cap */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-amber-900 rounded-t-lg"></div>
                    </div>
                  </div>

                  {/* Orange platform/base */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-rebel-orange rounded-full shadow-md"></div>

                  {/* Cloud-like decorative element */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-white bg-opacity-60 rounded-full"></div>
                </div>

                {/* Product Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-sm font-handwriting">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLineup;
