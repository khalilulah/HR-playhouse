import React, { useEffect, useRef, useState } from "react";
import img from "../assets/images/AboutGroup.png";

function Mission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-400 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 m-auto px-4 sm:px-6 lg:px-8 my-12 md:my-16 lg:mt-20"
    >
      {/* Images Section */}
      <div
        className={`w-full xl:w-1/2 flex items-center justify-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <img
          src={img}
          className="w-full hover:scale-105 transition-transform duration-500"
          alt="HR Playhouse team"
        />
      </div>

      {/* Text Section */}
      <div className="w-full xl:w-1/2 -mt-10 md:mt-0">
        <p
          className={`font-family-Roobert mb-6 md:mb-6 lg:mb-8 text-3xl md:text-6xl text-secondary leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Why We Exist
        </p>
        <div className="space-y-4 md:space-y-5 lg:spay-7">
          <p
            className={`text-primary-text text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="font-bold text-secondary">Our Mission:</span> To
            successfully bridge the gap between traditional academia and the
            modern workforce. By delivering immersive, simulation-based
            learning, we equip HR professionals with the practical skills needed
            to thrive in real-world scenarios, moving beyond textbook theory to
            actionable mastery.
          </p>

          <p
            className={`text-primary-text text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="font-bold text-secondary">Our Vision:</span> To
            successfully bridge the gap between traditional academia and the
            modern workforce. By delivering immersive, simulation-based
            learning, we equip HR professionals with the practical skills needed
            to thrive in real-world scenarios, moving beyond textbook theory to
            actionable mastery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
