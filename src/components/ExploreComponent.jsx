import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function ExploreComponent() {
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-400 px-4 sm:px-6 lg:px-8 m-auto py-12 md:py-32"
    >
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-6 md:gap-8 mb-9">
        <div
          className={`flex-1 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <p className="font-family-Roobert mb-2 md:mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-seconday-text">
            Which tool will you use first?
          </p>
          <p
            className={`text-seconday-text text-base sm:text-lg md:text-xl transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Join the platform today and get immediate access to every solution
            in the suite.
          </p>
        </div>
        <Link
          to="/solutions"
          className={`px-4 sm:px-5 lg:px-6 py-2 lg:py-3 whitespace-nowrap bg-primary rounded-4xl font-family-SatoshiBold text-secondary text-base sm:text-lg cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } ${isVisible ? "delay-300" : ""}`}
        >
          Explore the Ecosystem
        </Link>
      </div>
    </div>
  );
}

export default ExploreComponent;
