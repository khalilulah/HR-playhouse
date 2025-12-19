import React from "react";

function Mission() {
  return (
    <div className="max-w-400 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 m-auto px-4 sm:px-6 lg:px-8 my-12 md:my-16 lg:mt-20">
      {/* Images Section */}
      <div className="w-full xl:w-1/2 flex items-center justify-center">
        {/* Large screen image */}
        <img
          src="src/assets/images/AboutGroup.png"
          className="w-full"
          alt="HR Playhouse team"
        />
        {/* Small screen image */}
        {/* <img
          src="src/assets/images/Team.png"
          className="xl:hidden w-full w-sm border sm:max-w-md md:max-w-lg lg:max-w-xl"
          alt="HR Playhouse team"
        /> */}
      </div>

      {/* Text Section */}
      <div className="w-full xl:w-1/2 -mt-10 md:mt-0">
        <p className="font-family-Roobert mb-6 md:mb-6 lg:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl text-secondary leading-tight">
          Why We Exist
        </p>
        <div className="space-y-4 md:space-y-5 lg:spay-7">
          <p className="text-primary-text text-base sm:text-lg md:text-xl leading-relaxed">
            <span className="font-bold text-secondary">Our Mission:</span> To
            successfully bridge the gap between traditional academia and the
            modern workforce. By delivering immersive, simulation-based
            learning, we equip HR professionals with the practical skills needed
            to thrive in real-world scenarios, moving beyond textbook theory to
            actionable mastery.
          </p>

          <p className="text-primary-text text-base sm:text-lg md:text-xl leading-relaxed">
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
