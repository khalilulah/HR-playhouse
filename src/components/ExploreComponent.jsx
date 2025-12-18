import React from "react";

function ExploreComponent() {
  return (
    <div className="max-w-400 px-4 sm:px-6 lg:px-8 m-auto py-12 md:py-32">
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-6 md:gap-8 mb-9">
        <div className="flex-1">
          <p className="font-family-Roobert mb-2 md:mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-seconday-text">
            Which tool will you use first?
          </p>
          <p className="text-seconday-text text-base sm:text-lg md:text-xl">
            Join the platform today and get immediate access to every solution
            in the suite.
          </p>
        </div>
        <button className="px-4 sm:px-5 lg:px-6 py-2 lg:py-3 whitespace-nowrap bg-primary rounded-4xl font-family-SatoshiBold text-secondary text-sm sm:text-base lg:text-md cursor-pointer hover:opacity-90 transition-opacity">
          Explore the Ecosystem
        </button>
      </div>
    </div>
  );
}

export default ExploreComponent;
