import React from 'react';

const MobileFeature = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-6 h-6 text-rebel-yellow mr-2">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-gray-700 font-handwriting text-lg">some vibes you just have to see.</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Skincare that works While<br />you live your life
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              From inside-out hydration to visible radiance, Skin Rebel gives you the tools your skin needs to stay strong and luminous.
            </p>

            {/* Badge */}
            <div className="inline-block">
              <div className="bg-rebel-orange text-white px-8 py-4 rounded-full transform -rotate-2 shadow-lg hover:rotate-0 transition-transform duration-300">
                <span className="font-bold text-lg">GLOW IN MOTION</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="w-56 h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full flex items-center justify-center relative">
                  {/* Product bottle */}
                  <div className="w-16 h-20 bg-rebel-orange rounded-lg flex items-center justify-center relative z-10">
                    <span className="text-white font-bold text-xs transform -rotate-12">SKIN<br/>REBEL</span>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-8 right-8 w-4 h-4 text-rebel-yellow animate-pulse">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 w-3 h-3 text-pink-400 animate-bounce">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-8 h-8 text-rebel-yellow animate-spin">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-6 h-6 text-pink-300 animate-pulse">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFeature;
