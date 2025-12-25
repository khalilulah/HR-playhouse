import React, { useEffect, useRef, useState } from "react";
import Solutions1 from "../assets/images/Wall-Street1.png";
import Solutions2 from "../assets/images/Wall-Street2.png";
import Solutions3 from "../assets/images/Wall-Street3.png";
import Solutions4 from "../assets/images/Wall-Street4.png";
import Solutions5 from "../assets/images/Wall-Street5.png";
import { Link } from "react-router-dom";

function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const cardData = [
    {
      id: 1,
      title: "Innovation Lab",
      description:
        "Collaborate on real-world HR challenges. Join project rooms, find mentors, and solve actual industry problems with peers.",
      image: Solutions1,
      delay: "delay-100",
    },
    {
      id: 2,
      title: "Gamified Learning",
      description:
        "Engage in interactive, scenario-based learning. Earn XP, badges, and track your progress as you master HR skills.",
      image: Solutions2,
      delay: "delay-200",
    },
    {
      id: 3,
      title: "AI-Powered HR Support",
      description:
        "Your smart assistant. Upload HR documents for instant AI-driven feedback, insights, and compliance checks.",
      image: Solutions3,
      delay: "delay-300",
    },
    {
      id: 4,
      title: "Case Study Vault",
      description:
        "Sharpen your decision-making. Explore a library of real-world HR cases with decision-tree scenarios and expert solutions.",
      image: Solutions4,
      delay: "delay-400",
    },
    {
      id: 5,
      title: "Everyday HR Playbook",
      description:
        "Your daily toolkit. Access daily tips, micro-learning streaks, and ready-to-use templates for your immediate work needs.",
      image: Solutions5,
      delay: "delay-500",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="font-family-SatoshiMedium max-w-400 px-4 sm:px-6 lg:px-8 m-auto"
    >
      <div
        className={`flex justify-between md:items-center flex-col md:flex-row mb-9 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="sm:mr-10">
          <p
            className={`font-family-Roobert mb-1 text-3xl text-secondary md:text-6xl transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            Our Core Solutions
          </p>
          <p
            className={`text-primary-text text-base md:text-xl transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            A comprehensive, interactive ecosystem containing everything you
            need to master modern HR.
          </p>
        </div>
        <Link
          to="/solutions"
          className={`px-1.5 lg:px-5 py-3 lg:py-3.5 w-32 mt-5 md:mt-0 bg-secondary rounded-4xl text-center font-family-SatoshiBold text-primary text-sm lg:text-md cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
          style={{
            transitionDelay: isVisible ? "300ms" : "0ms",
          }}
        >
          Learn more
        </Link>
      </div>

      {/* SMALL SCREEN */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden lg:grid-cols-3 gap-4 w-full">
        {cardData.slice(0, 4).map((card) => (
          <div
            key={card.id}
            className={`bg-secondary bg-cover h-96 rounded-[10px] flex flex-col justify-end text-xl text-primary p-5 transition-all duration-700 ${
              card.delay
            } relative overflow-hidden group ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }`}
            style={{
              backgroundImage: `url(${card.image})`,
            }}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated overlay gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-500 ${
                hoveredCard === card.id ? "from-black/70 via-black/30" : ""
              }`}
            ></div>

            {/* Animated shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Content */}
            <div
              className={`relative z-10 transform transition-all duration-500 ${
                hoveredCard === card.id ? "translate-y-[-8px]" : ""
              }`}
            >
              <p
                className={`font-family-SatoshiBold text-base sm:text-lg md:text-xl mb-2 transition-all duration-300 ${
                  hoveredCard === card.id ? "text-white" : ""
                }`}
              >
                {card.title}
              </p>
              <p
                className={`text-base sm:text-lg transition-all duration-500 ${
                  hoveredCard === card.id
                    ? "opacity-100 max-h-40"
                    : "opacity-90 max-h-32"
                }`}
              >
                {card.description}
              </p>
            </div>

            {/* Hover border effect */}
            <div
              className={`absolute inset-0 rounded-[10px] border-2 border-white/0 transition-all duration-300 ${
                hoveredCard === card.id ? "border-white/20" : ""
              }`}
            ></div>
          </div>
        ))}

        {/* Large card with special animation */}
        <div
          className={`bg-secondary text-xl bg-cover bg-center h-96 rounded-[10px] col-span-1 md:col-span-2 flex flex-col justify-end text-primary p-5 transition-all duration-700 delay-500 cursor-pointer relative overflow-hidden group ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
          style={{
            backgroundImage: `url(${cardData[4].image})`,
          }}
          onMouseEnter={() => setHoveredCard(5)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Animated overlay gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-500 ${
              hoveredCard === 5 ? "from-black/70 via-black/30" : ""
            }`}
          ></div>

          {/* Animated shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>

          {/* Content */}
          <div
            className={`md:w-150 relative z-10 transform transition-all duration-500 ${
              hoveredCard === 5 ? "translate-y-[-8px]" : ""
            }`}
          >
            <p
              className={`font-family-SatoshiBold text-base sm:text-lg md:text-xl mb-2 transition-all duration-300 ${
                hoveredCard === 5 ? "text-white" : ""
              }`}
            >
              {cardData[4].title}
            </p>
            <p
              className={`text-base sm:text-lg transition-all duration-500 ${
                hoveredCard === 5 ? "opacity-100" : "opacity-90"
              }`}
            >
              {cardData[4].description}
            </p>
          </div>

          {/* Hover border effect */}
          <div
            className={`absolute inset-0 rounded-[10px] border-2 border-white/0 transition-all duration-300 ${
              hoveredCard === 5 ? "border-white/20" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* LARGE SCREEN */}

      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-4">
        {cardData.slice(0, 3).map((card) => (
          <div
            key={card.id}
            className={`bg-secondary bg-cover h-96 rounded-[10px] flex flex-col justify-end text-white p-5 transition-all duration-700 ${
              card.delay
            } relative overflow-hidden group ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }`}
            style={{
              backgroundImage: `url(${card.image})`,
            }}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated overlay gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-500 ${
                hoveredCard === card.id ? "from-black/70 via-black/30" : ""
              }`}
            ></div>

            {/* Animated shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Content */}
            <div
              className={`relative z-10 transform transition-all duration-500 ${
                hoveredCard === card.id ? "translate-y-[-8px]" : ""
              }`}
            >
              <p
                className={`font-bold text-base sm:text-lg md:text-xl mb-2 transition-all duration-300 ${
                  hoveredCard === card.id ? "text-white" : ""
                }`}
              >
                {card.title}
              </p>
              <p
                className={`text-base sm:text-lg transition-all duration-500 ${
                  hoveredCard === card.id
                    ? "opacity-100 max-h-40"
                    : "opacity-90 max-h-32"
                }`}
              >
                {card.description}
              </p>
            </div>

            {/* Hover border effect */}
            <div
              className={`absolute inset-0 rounded-[10px] border-2 border-white/0 transition-all duration-300 ${
                hoveredCard === card.id ? "border-white/20" : ""
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Bottom 2 cards - each taking half width on lg+ */}
      <div className="hidden lg:grid  grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {cardData.slice(3, 5).map((card) => (
          <div
            key={card.id}
            className={`bg-secondary text-xl bg-cover bg-center h-96 rounded-[10px] flex flex-col justify-end text-white p-5 transition-all duration-700 ${
              card.delay
            } cursor-pointer relative overflow-hidden group ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }`}
            style={{
              backgroundImage: `url(${card.image})`,
            }}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated overlay gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-500 ${
                hoveredCard === card.id ? "from-black/70 via-black/30" : ""
              }`}
            ></div>

            {/* Animated shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Content */}
            <div
              className={`relative z-10 transform transition-all duration-500 ${
                hoveredCard === card.id ? "translate-y-[-8px]" : ""
              }`}
            >
              <p
                className={`font-bold text-base sm:text-lg md:text-xl mb-2 transition-all duration-300 ${
                  hoveredCard === card.id ? "text-white" : ""
                }`}
              >
                {card.title}
              </p>
              <p
                className={`text-base sm:text-lg transition-all duration-500 ${
                  hoveredCard === card.id ? "opacity-100" : "opacity-90"
                }`}
              >
                {card.description}
              </p>
            </div>

            {/* Hover border effect */}
            <div
              className={`absolute inset-0 rounded-[10px] border-2 border-white/0 transition-all duration-300 ${
                hoveredCard === card.id ? "border-white/20" : ""
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
