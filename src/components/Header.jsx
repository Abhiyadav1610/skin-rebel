import React, { useState } from "react";
import search from "../assets/icons/ri_search-line.svg";
import profile from "../assets/icons/iconamoon_profile.svg";
import cart from "../assets/icons/mdi_cart-outline.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className=" top-0 z-50 w-full min-w-full bg-[#FFF9F2] pb-10">
      {/* Full width background container */}
      <div className="w-screen bg-[#FFF9F2] h-[60px] sm:h-[70px] lg:h-[90px]">
        <div className="max-w-[1440px] mx-auto w-full h-full flex items-center justify-between xl:justify-start px-4 sm:px-6 lg:px-16 xl:gap-[359px]">
          {/* Combined Left Side (Logo) and Center (Desktop Navigation) */}
          <div className="flex items-center gap-6 xl:gap-8">
            {/* Left Side - Text Logo with Real Folklore Font */}
            <div className="flex items-center">
              <span className="font-folklore font-normal text-[24px] leading-[100%] tracking-[-0.03em] text-[#FF4930] min-w-[137px] h-[28px] flex items-center justify-center whitespace-nowrap">
                SKIN REBEL
              </span>
            </div>

            {/* Center - Desktop Navigation Links */}
            <nav className="hidden lg:flex gap-6 xl:gap-8">
              <a
                href="#shop"
                className="font-darker-grotesque font-bold text-[18px] leading-[100%] tracking-[-0.03em] text-[#353535] hover:text-[#FF4930] transition-colors"
              >
                Shop
              </a>
              <a
                href="#about"
                className="font-darker-grotesque font-bold text-[18px] leading-[100%] tracking-[-0.03em] text-[#353535] hover:text-[#FF4930] transition-colors"
              >
                About
              </a>
              <a
                href="#benefits"
                className="font-darker-grotesque font-bold text-[18px] leading-[100%] tracking-[-0.03em] text-[#353535] hover:text-[#FF4930] transition-colors"
              >
                Benefits
              </a>
              <a
                href="#reviews"
                className="font-darker-grotesque font-bold text-[18px] leading-[100%] tracking-[-0.03em] text-[#353535] hover:text-[#FF4930] transition-colors"
              >
                Reviews
              </a>
              <a
                href="#blog"
                className="font-darker-grotesque font-bold text-[18px] leading-[100%] tracking-[-0.03em] text-[#353535] hover:text-[#FF4930] transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="font-darker-grotesque font-bold text-[18px] leading-[100%] tracking-[-0.03em] text-[#353535] hover:text-[#FF4930] transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Combined Right Side (Desktop Icons and Shop Now Button) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Search Icon */}
            <div className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:opacity-70 transition-opacity">
              <img src={search} alt="Search" className="w-full h-full" />
            </div>

            {/* Profile Icon */}
            <div className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:opacity-70 transition-opacity">
              <img src={profile} alt="Profile" className="w-full h-full" />
            </div>

            {/* Cart Icon */}
            <div className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:opacity-70 transition-opacity">
              <img src={cart} alt="Cart" className="w-full h-full" />
            </div>

            {/* Shop Now Button */}
            <button className="w-[163px] h-[50px] px-[10px] py-4 gap-[10px] bg-[#FF4930] rounded-[100px] flex items-center justify-center hover:opacity-90 transition-opacity ml-2">
              <span className="font-inter font-semibold text-[16px] leading-[18px] tracking-[-0.03em] text-white">
                Shop Now
              </span>
            </button>
          </div>

          {/* Mobile Menu Section (matches the provided image) */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Icons */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:opacity-70 transition-opacity">
              <img src={search} alt="Search" className="w-full h-full" />
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:opacity-70 transition-opacity">
              <img src={cart} alt="Cart" className="w-full h-full" />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="w-6 h-6 sm:w-7 sm:h-7 flex flex-col justify-center items-center ml-1"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`bg-[#353535] block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-[#353535] block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm my-0.5 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-[#353535] block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-0.5"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-[#FFF9F2] border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-4">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-3">
            <a
              href="#shop"
              className="font-darker-grotesque text-lg font-medium text-[#353535] hover:text-[#FF4930] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </a>
            <a
              href="#about"
              className="font-darker-grotesque text-lg font-medium text-[#353535] hover:text-[#FF4930] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#benefits"
              className="font-darker-grotesque text-lg font-medium text-[#353535] hover:text-[#FF4930] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#reviews"
              className="font-darker-grotesque text-lg font-medium text-[#353535] hover:text-[#FF4930] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#blog"
              className="font-darker-grotesque text-lg font-medium text-[#353535] hover:text-[#FF4930] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="font-darker-grotesque text-lg font-medium text-[#353535] hover:text-[#FF4930] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Action Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <div className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity">
              <img src={profile} alt="Profile" className="w-full h-full" />
            </div>

            {/* Mobile Shop Now Button */}
            <button
              className="flex-1 h-[45px] rounded-full hover:opacity-90 transition-opacity bg-[#FF4930] px-4 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-inter font-semibold text-base text-white">
                Shop Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
