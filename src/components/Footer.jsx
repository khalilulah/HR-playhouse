import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-secondary border-t-amber-50 font-family-SatoshiMedium max-w-400 px-4 sm:px-6 lg:px-8 m-auto py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
        {/* Links Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <b className="text-lg md:text-xl">Platform</b>
            <div className="mt-3 space-y-2 md:space-y-3 text-sm md:text-base">
              <p className="hover:opacity-70 cursor-pointer transition-opacity">
                Gamified Learning
              </p>
              <p className="hover:opacity-70 cursor-pointer transition-opacity">
                AI Support
              </p>
              <p className="hover:opacity-70 cursor-pointer transition-opacity">
                Innovation Lab
              </p>
              <p className="hover:opacity-70 cursor-pointer transition-opacity">
                Case Study Vault
              </p>
            </div>
          </div>
          <div>
            <b className="text-lg md:text-xl">Legal</b>
            <div className="mt-3 space-y-2 md:space-y-3 text-sm md:text-base">
              <div>
                <Link
                  to="/privacy"
                  className="hover:opacity-70 cursor-pointer transition-opacity"
                >
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link
                  to="/terms"
                  className="hover:opacity-70 cursor-pointer transition-opacity"
                >
                  Terms of Service
                </Link>
              </div>
              <div>
                <Link
                  to="/cookie"
                  className="hover:opacity-70 cursor-pointer transition-opacity"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <b className="text-lg md:text-xl">Company</b>
            <div className="mt-3 space-y-2 md:space-y-3 text-sm md:text-base">
              <Link
                to="/about"
                className="hover:opacity-70 cursor-pointer transition-opacity"
              >
                About Us
              </Link>
              <p className="hover:opacity-70 cursor-pointer transition-opacity">
                Case Studies
              </p>
            </div>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="w-full lg:w-1/2 lg:pl-12 xl:pl-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4">
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

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t-2 border-secondary pt-6 mt-8 gap-4 text-sm md:text-base">
        <p className="text-xs sm:text-sm md:text-base">
          © 2025 HR Playhouse Hub. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
          <a href="#" className="underline hover:opacity-70 transition-opacity">
            Facebook
          </a>
          <a href="#" className="underline hover:opacity-70 transition-opacity">
            X (Formerly Twitter)
          </a>
          <a href="#" className="underline hover:opacity-70 transition-opacity">
            Instagram
          </a>
          <a href="#" className="underline hover:opacity-70 transition-opacity">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
