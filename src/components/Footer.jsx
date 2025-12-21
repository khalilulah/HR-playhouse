import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
  }, []);

  return (
    <div
      id="contact-us"
      ref={footerRef}
      className="text-secondary text-base sm:text-lg flex flex-col justify-between border-t-amber-50 font-family-SatoshiMedium max-w-400 b px-4 sm:px-6 lg:px-8 m-auto py-8 md:py-12"
    >
      <div className="flex flex-col my-auto lg:flex-row gap-10 lg:gap-0 mb-3">
        {/* Links Section */}
        <div
          className={`w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-5"
            }`}
          >
            <b className="text-lg md:text-xl">Platform</b>
            <div className="mt-3 space-y-2 md:space-y-3 text-sm md:text-base">
              <p className="hover:opacity-70 hover:translate-x-1 cursor-pointer transition-all duration-300">
                Gamified Learning
              </p>
              <p className="hover:opacity-70 hover:translate-x-1 cursor-pointer transition-all duration-300">
                AI Support
              </p>
              <p className="hover:opacity-70 hover:translate-x-1 cursor-pointer transition-all duration-300">
                Innovation Lab
              </p>
              <p className="hover:opacity-70 hover:translate-x-1 cursor-pointer transition-all duration-300">
                Case Study Vault
              </p>
            </div>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-5"
            }`}
          >
            <b className="text-lg md:text-xl">Legal</b>
            <div className="mt-3 space-y-2 md:space-y-3 text-sm md:text-base">
              <div>
                <Link
                  to="/privacy"
                  className="hover:opacity-70 hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link
                  to="/terms"
                  className="hover:opacity-70 hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                  Terms of Service
                </Link>
              </div>
              <div>
                <Link
                  to="/cookie"
                  className="hover:opacity-70 hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`col-span-2 sm:col-span-1 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-5"
            }`}
          >
            <b className="text-lg md:text-xl">Company</b>
            <div className="mt-3 space-y-2 md:space-y-3 text-sm md:text-base">
              <Link
                to="/about"
                className="hover:opacity-70 hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
              >
                About Us
              </Link>
              <div>
                <Link
                  to="/case"
                  className="hover:opacity-70 hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                  Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Company Info Section */}
        <div
          className={`w-full space-y-5 lg:w-1/2 lg:pl-12 xl:pl-20 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h2 className="text-4xl mb-5 md:-mt-5 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            HR <br /> Playhouse <br /> Hub
          </h2>
          <div className="text-sm md:text-base space-y-2">
            <p>
              Africa's #1 HR Innovation Platform. Bridging the gap between
              academic theory and practical execution.
            </p>
            <p className="break-words">
              Contact@thehrplayhousehub.org • +2349064730880
            </p>
            <p>Ota Ogun State, Nigeria</p>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col sm:flex-row justify-between items-start sm:items-center border-t-2 border-secondary pt-6 gap-4 text-sm md:text-base transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-xs sm:text-sm md:text-base">
          © 2025 HR Playhouse Hub. All rights reserved.
        </p>
        <div className="flex flex-wrap pb-2 space-x-4 sm:gap-6 md:space-x-8">
          <a
            href="#"
            className="underline hover:opacity-70 hover:-translate-y-1 transition-all duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="underline hover:opacity-70 hover:-translate-y-1 transition-all duration-300"
          >
            X (Formerly Twitter)
          </a>
          <a
            href="#"
            className="underline hover:opacity-70 hover:-translate-y-1 transition-all duration-300"
          >
            Instagram
          </a>
          <a
            href="#"
            className="underline hover:opacity-70 hover:-translate-y-1 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
