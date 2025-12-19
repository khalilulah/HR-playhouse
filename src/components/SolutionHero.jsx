import React from "react";

function SolutionHero() {
  return (
    <div className="mx-auto  max-w-400 flex justify-center flex-col xl:flex-row gap-8 lg:gap-12 xl:gap-16 items-center px-4 sm:px-6 lg:px-8 perspective-[1500px] h-screen  -mt-15 md:mt-0">
      {/* Text Section */}
      <div className="w-full xl:w-1/2 text-center xl:text-left">
        <p className="font-family-Roobert mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-secondary leading-tight">
          The Complete HR Ecosystem
        </p>
        <p className="text-primary-text text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto xl:mx-0">
          A unified platform combining immersive learning, daily tools, and AI
          support. From skill-building to problem-solving, we have you covered.
        </p>
      </div>

      {/* Images Section */}
      <div className="w-full xl:w-1/2 flex justify-center">
        {/* Container with responsive sizing */}
        <div className="relative w-full max-w-[280px] h-[280px] sm:max-w-[320px] sm:h-[320px] md:max-w-[380px] md:h-[380px] lg:max-w-[440px] lg:h-[440px] xl:max-w-[480px] xl:h-[480px]">
          {/* Top Right Image */}
          <div className="absolute top-0 left-0 w-[63%] sm:w-[58%] md:w-[60%]">
            <img
              src="src/assets/images/Femme1.png"
              className="w-full h-auto object-cover rounded-lg shadow-2xl transition duration-700 ease-out hover:scale-105 "
              alt="HR Playhouse team member"
            />
          </div>
          {/* Bottom Left Image */}
          <div className="absolute bottom-0 right-0 w-[63%] sm:w-[58%] md:w-[60%]">
            <img
              src="src/assets/images/Femme2.png"
              className="w-full h-auto object-cover shadow-2xl rounded-lg transition duration-700 ease-out hover:scale-105 "
              alt="HR Playhouse team member"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionHero;
