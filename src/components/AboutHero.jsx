import React from "react";
import HomeHero1 from "../assets/images/Aundre.png";
import HomeHero2 from "../assets/images/Van.png";
import HomeHero3 from "../assets/images/Curly.png";
import HomeHero4 from "../assets/images/Proesc.png";

function AboutHero() {
  return (
    <div className="mx-auto max-w-400 flex flex-col-reverse xl:flex-row gap-8 lg:gap-12 xl:gap-16 items-center px-4 sm:px-6 lg:px-8 perspective-[1500px] relative my-10 xl:my-20">
      {/* Text Section */}
      <div className="w-full xl:w-1/2 text-center xl:text-left">
        <p className="font-family-Roobert mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-secondary leading-tight">
          About <br className="hidden 2xl:block" /> HR Playhouse
        </p>
        <p className="text-primary-text text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto xl:mx-0">
          An ecosystem designed to make learning accessible and engaging,
          bridging the gap between theory and execution.
        </p>
      </div>

      {/* Images Section */}
      <div className="w-full xl:w-1/2 flex items-center justify-center">
        <img
          src="src/assets/images/GroupTest.png"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-full"
          alt="HR Playhouse team"
        />
      </div>
    </div>
  );
}

export default AboutHero;
