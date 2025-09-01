import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-rebel-orange">
              SKIN REBEL
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-rebel-orange transition-colors"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-rebel-orange transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-rebel-orange transition-colors"
            >
              Benefits
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-rebel-orange transition-colors"
            >
              Reviews
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-rebel-orange transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-rebel-orange transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:text-rebel-orange transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="p-2 hover:text-rebel-orange transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button className="p-2 hover:text-rebel-orange transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                />
              </svg>
            </button>
            <button className="bg-rebel-orange text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
              Shop Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-2 space-y-2">
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-rebel-orange"
              >
                Shop
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-rebel-orange"
              >
                About
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-rebel-orange"
              >
                Benefits
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-rebel-orange"
              >
                Reviews
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-rebel-orange"
              >
                Blog
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-rebel-orange"
              >
                Contact
              </a>
              <button className="w-full bg-rebel-orange text-white px-6 py-2 rounded-full mt-4 mb-4">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
