import React, { useEffect, useState } from "react";
import TermsImg from "../assets/images/TermsImg.png";
import TermsImg2 from "../assets/images/TermsImg2.png";

function TermsHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-400 flex justify-center flex-col xl:flex-row gap-8 lg:gap-12 xl:gap-16 items-center px-4 sm:px-6 lg:px-8 perspective-[1500px] h-screen -mt-15 md:mt-0 overflow-hidden">
      {/* Text Section */}
      <div className="w-full xl:w-1/2 text-center xl:text-left">
        <p
          className={`font-family-Roobert mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-secondary leading-tight transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Terms and Conditions
        </p>
        <p
          className={`text-primary-text text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto xl:mx-0 transition-all duration-1000 ease-out delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Last Updated: 17th, December 2025
        </p>
      </div>

      {/* Images Section */}
      <div
        className={`w-full xl:w-1/2 flex justify-center transition-all duration-1000 ease-out delay-300 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-50"
        }`}
      >
        {/* Container with responsive sizing */}
        <div className="relative w-full max-w-[280px] h-[280px] sm:max-w-[320px] sm:h-[320px] md:max-w-[380px] md:h-[380px] lg:max-w-[440px] lg:h-[440px] xl:max-w-[480px] xl:h-[480px]">
          {/* Top Left Image */}
          <div
            className={`absolute top-0 left-0 w-[63%] sm:w-[58%] md:w-[60%] transition-all duration-1300 ease-out ${
              isLoaded
                ? "translate-x-0 translate-y-0 rotate-0"
                : "-translate-x-40 -translate-y-40 rotate-90"
            }`}
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-secondary/20 rounded-lg blur-xl transition-all duration-500 ${
                  hoveredImage === 1
                    ? "opacity-100 scale-110"
                    : "opacity-0 scale-100"
                }`}
              ></div>

              <img
                src={TermsImg}
                className={`relative w-full h-auto object-cover rounded-lg shadow-2xl transition-all duration-1500 ease-out ${
                  hoveredImage === 1
                    ? "scale-110 rotate-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                    : "scale-100 rotate-0"
                } ${hoveredImage === 2 ? "scale-95 brightness-90" : ""}`}
                alt="HR Playhouse terms"
              />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div
            className={`absolute bottom-0 right-0 w-[63%] sm:w-[58%] md:w-[60%] transition-all duration-1300 ease-out delay-150 ${
              isLoaded
                ? "translate-x-0 translate-y-0 rotate-0"
                : "translate-x-40 translate-y-40 rotate-90"
            }`}
            onMouseEnter={() => setHoveredImage(2)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-secondary/20 rounded-lg blur-xl transition-all duration-500 ${
                  hoveredImage === 2
                    ? "opacity-100 scale-110"
                    : "opacity-0 scale-100"
                }`}
              ></div>

              <img
                src={TermsImg2}
                className={`relative w-full h-auto object-cover shadow-2xl rounded-lg transition-all duration-700 ease-out ${
                  hoveredImage === 2
                    ? "scale-110 -rotate-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                    : "scale-100 rotate-0"
                } ${hoveredImage === 1 ? "scale-95 brightness-90" : ""}`}
                alt="HR Playhouse terms"
              />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsHero;
