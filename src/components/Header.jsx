import React, { useState } from "react";
import search from "../assets/icons/ri_search-line.png";
import profile from "../assets/icons/iconamoon_profile.png";
import cart from "../assets/icons/mdi_cart-outline.png";
import skinrebel from "../assets/icons/skin_rebel.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full h-[90px]"
      style={{ backgroundColor: "#FFF9F2" }}
    >
      {/* Content container */}
      <div className="max-w-[1440px] mx-auto w-full h-full flex justify-between items-center px-4 sm:px-8 lg:px-16">
        {/* Left Side - Text Logo with Real Folklore Font */}
        <div className="flex items-center">
          <span
            className="flex items-center justify-center font-folklore tracking-tight px-2"
            style={{
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "28px",
              letterSpacing: "-0.02em",
              color: "#FF4930",
              height: "28px",
              whiteSpace: "nowrap",
            }}
          >
            SKIN REBEL
          </span>
        </div>

        {/* Center - Desktop Navigation Links */}
        <nav className="hidden lg:flex gap-6 xl:gap-8">
          <a
            href="#shop"
            className="text-[16px] lg:text-[18px] leading-[100%] tracking-[-0.03em] text-gray-900 hover:text-rebel-orange transition-colors"
            style={{ fontWeight: 550 }}
          >
            Shop
          </a>
          <a
            href="#about"
            className="text-[16px] lg:text-[18px] leading-[100%] tracking-[-0.03em] text-gray-900 hover:text-rebel-orange transition-colors"
            style={{ fontWeight: 550 }}
          >
            About
          </a>
          <a
            href="#benefits"
            className="text-[16px] lg:text-[18px] leading-[100%] tracking-[-0.03em] text-gray-900 hover:text-rebel-orange transition-colors"
            style={{ fontWeight: 550 }}
          >
            Benefits
          </a>
          <a
            href="#reviews"
            className="text-[16px] lg:text-[18px] leading-[100%] tracking-[-0.03em] text-gray-900 hover:text-rebel-orange transition-colors"
            style={{ fontWeight: 550 }}
          >
            Reviews
          </a>
          <a
            href="#blog"
            className="text-[16px] lg:text-[18px] leading-[100%] tracking-[-0.03em] text-gray-900 hover:text-rebel-orange transition-colors"
            style={{ fontWeight: 550 }}
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-[16px] lg:text-[18px] leading-[100%] tracking-[-0.03em] text-gray-900 hover:text-rebel-orange transition-colors"
            style={{ fontWeight: 550 }}
          >
            Contact
          </a>
        </nav>

        {/* Right Side - Desktop Icons and Button */}
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
          <button
            className="w-[140px] h-[45px] lg:w-[163px] lg:h-[50px] px-[8px] lg:px-[10px] py-[12px] lg:py-[16px] rounded-[100px] text-white font-semibold text-sm lg:text-base hover:opacity-90 transition-opacity flex items-center justify-center ml-2"
            style={{ backgroundColor: "#FF4930", gap: "8px" }}
          >
            Shop Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Icons */}
          <div className="w-5 h-5 cursor-pointer">
            <img src={search} alt="Search" className="w-full h-full" />
          </div>
          <div className="w-5 h-5 cursor-pointer">
            <img src={cart} alt="Cart" className="w-full h-full" />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="w-6 h-6 flex flex-col justify-center items-center"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-1"
                  : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-1"
                  : "translate-y-0.5"
              }`}
            ></span>
          </button>
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
        <div className="px-4 py-4 space-y-4">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-3">
            <a
              href="#shop"
              className="text-lg font-semibold text-gray-900 hover:text-rebel-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </a>
            <a
              href="#about"
              className="text-lg font-semibold text-gray-900 hover:text-rebel-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#benefits"
              className="text-lg font-semibold text-gray-900 hover:text-rebel-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#reviews"
              className="text-lg font-semibold text-gray-900 hover:text-rebel-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#blog"
              className="text-lg font-semibold text-gray-900 hover:text-rebel-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-lg font-semibold text-gray-900 hover:text-rebel-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Action Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <div className="w-6 h-6 cursor-pointer">
              <img src={profile} alt="Profile" className="w-full h-full" />
            </div>

            {/* Mobile Shop Now Button */}
            <button
              className="flex-1 h-[45px] rounded-full text-white font-semibold text-base hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#FF4930", padding: "12px 16px" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
