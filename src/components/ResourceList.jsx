import React from "react";

function ResourceList() {
  const data = [
    {
      image: "src/assets/images/Resource1.png",
      heading: "Gamified Learning Modules",
      description:
        "Forget boring slide decks. Our interactive modules place you in realistic HR scenarios where your choices matter. Navigate employee conflicts, compliance risks, and recruitment challenges in a risk-free virtual environment.",
    },
    {
      image: "src/assets/images/Resource2.png",
      heading: "Gamified Learning Modules",
      description:
        "Forget boring slide decks. Our interactive modules place you in realistic HR scenarios where your choices matter. Navigate employee conflicts, compliance risks, and recruitment challenges in a risk-free virtual environment.",
    },
    {
      image: "src/assets/images/Resource3.png",
      heading: "Gamified Learning Modules",
      description:
        "Forget boring slide decks. Our interactive modules place you in realistic HR scenarios where your choices matter. Navigate employee conflicts, compliance risks, and recruitment challenges in a risk-free virtual environment.",
    },
  ];
  return (
    <div className="font-family-SatoshiMedium max-w-400 mx-auto px-4 sm:px-6 lg:px-8 m-auto py-8 md:py-12 text-primary-text">
      <p className="font-family-Roobert mb-6 text-3xl text-secondary md:text-6xl">
        Real-World Scenarios
      </p>
      <div className="flex flex-col space-y-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row transition-shadow duration-300"
          >
            <div className="w-full md:w-1/2">
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-100 rounded-lg object-cover "
              />
            </div>

            <div className="w-full md:w-1/2 pl-6 -700">
              <h2 className="text-xl text-secondary sm:text-2xl font-bold  mb-3">
                {item.heading}
              </h2>
              <p className="mb-4 text-sm sm:text-base">{item.description}</p>
              <button className="px-2.5 lg:px-5 py-1 lg:py-2 border border-secondary rounded-4xl font-family-SatoshiBold text-secondary text-sm lg:text-md cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourceList;
