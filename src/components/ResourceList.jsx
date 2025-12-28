import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Resource1 from "../assets/images/Resource1.webp";
import Resource2 from "../assets/images/Resource2.webp";
import Resource3 from "../assets/images/Resource3.webp";

function ResourceList() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const data = [
    {
      image: `${Resource1}`,
      heading: "Gamified Learning Modules",
      description:
        "Forget boring slide decks. Our interactive modules place you in realistic HR scenarios where your choices matter. Navigate employee conflicts, compliance risks, and recruitment challenges in a risk-free virtual environment.",
    },
    {
      image: `${Resource2}`,
      heading: "Gamified Learning Modules",
      description:
        "Forget boring slide decks. Our interactive modules place you in realistic HR scenarios where your choices matter. Navigate employee conflicts, compliance risks, and recruitment challenges in a risk-free virtual environment.",
    },
    {
      image: `${Resource3}`,
      heading: "Gamified Learning Modules",
      description:
        "Forget boring slide decks. Our interactive modules place you in realistic HR scenarios where your choices matter. Navigate employee conflicts, compliance risks, and recruitment challenges in a risk-free virtual environment.",
    },
  ];

  useEffect(() => {
    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, index]);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
    });
  }, []);

  return (
    <div className="font-family-SatoshiMedium max-w-400 mx-auto px-4 sm:px-6 lg:px-8 m-auto py-8 md:py-12 text-primary-text">
      <p className="font-family-Roobert mb-6 text-3xl text-secondary md:text-6xl">
        Our Resources
      </p>
      <div className="flex flex-col space-y-10">
        {data.map((item, index) => {
          const isVisible = visibleCards.includes(index);

          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`flex flex-col md:flex-row transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full h-54 sm:h-80 md:h-96 lg:h-100 rounded-lg object-cover transition-transform duration-500 hover:scale-101 bg-secondary"
                />
              </div>

              <div className="w-full mt-5 md:mt-0 md:w-1/2 md:pl-6">
                <h2 className="text-xl text-secondary sm:text-2xl font-bold mb-3">
                  {item.heading}
                </h2>
                <p className="mb-4 text-base sm:text-lg">{item.description}</p>
                <Link to="/signup">
                  <button className="px-2.5 lg:px-5 py-1 lg:py-2 border border-secondary rounded-4xl font-family-SatoshiBold text-secondary text-sm lg:text-md cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResourceList;
