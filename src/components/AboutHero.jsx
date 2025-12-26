import { useEffect, useState } from "react";
import img from "../assets/images/GroupTest.webp";

function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLargeHeight, setIsLargeHeight] = useState(window.innerHeight > 790);

  useEffect(() => {
    const checkHeight = () => {
      console.log(window.innerHeight);

      setIsLargeHeight(window.innerHeight > 790);
    };

    // Check on mount
    checkHeight();

    // Check on resize
    window.addEventListener("resize", checkHeight);

    // Cleanup
    return () => window.removeEventListener("resize", checkHeight);
  }, [isLargeHeight]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`mx-auto max-w-400 flex justify-center flex-col xl:flex-row gap-8 lg:gap-12 xl:gap-16 items-center px-4 sm:px-6 lg:px-8 perspective-[1500px] overflow-hidden ${
        isLargeHeight
          ? "h-[calc(100vh-3.8rem)] sm:h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] pb-[5rem] md:pb-0"
          : "sm:h-auto my-12 md:my-16 lg:my-20 py-3"
      }`}
    >
      <div className="w-full xl:w-1/2 text-center xl:text-left">
        <p
          className={`font-family-Roobert mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-secondary leading-tight transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          About <br className="hidden 2xl:block" /> The HR Playhouse Hub
        </p>
        <p
          className={`text-primary-text text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto xl:mx-0 transition-all duration-1000 ease-out delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          An ecosystem designed to make learning accessible and engaging,
          bridging the gap between theory and execution.
        </p>
      </div>
      {/* Images Section */}
      <div
        className={`w-full xl:w-1/2 flex items-center justify-center transition-all duration-1000 ease-out delay-400 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <img
          src={img}
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-full hover:scale-105 transition-transform duration-500"
          alt="HR Playhouse team"
        />
      </div>
    </div>
  );
}

export default AboutHero;
