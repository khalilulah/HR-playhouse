import React from "react";
import Map from "../assets/images/map.png";
import Bot from "../assets/images/robot.png";
import Book from "../assets/images/book1.png";
import Folder from "../assets/images/folderr.png";
import GamePad from "../assets/images/gamepad.png";
import Lab from "../assets/images/beaker.png";
import { Link } from "react-router-dom";

function GetStartedMap() {
  const mapData = [
    {
      id: 1,
      image: `${GamePad}`,
      level: "Level 1: FOUNDATION",
      heading: "Gamified Learning Modules",
      description: "Engage in interactive, scenario-based learning",
      linkText: "Start Playing",
      href: "/signup",
    },
    {
      id: 2,
      image: `${Bot}`,
      level: "Level 2: ASSISTANCE",
      heading: "AI-Powered Support",
      description:
        "Upload your HR documents for AI-powered feedback and insights",
      linkText: "Try Tool",
      href: "/signup",
    },
    {
      id: 3,
      image: `${Lab}`,
      level: "Level 3: COLLABORATION",
      heading: "Innovation Lab",
      description: "Collaborate on real-world HR challenges.",
      linkText: "Enter Lab",
      href: "/signup",
    },
    {
      id: 4,
      image: `${Folder}`,
      level: "Level 4: STRATEGY",
      heading: "Case Study Vault",
      description:
        "Explore real-world HR cases and sharpen your decision-making skills.",
      linkText: "Open Vault",
      href: "/signup",
    },
    {
      id: 5,
      image: `${Book}`,
      level: "Level 5: DAILY QUESTS",
      heading: "Everyday HR Playbook",
      description:
        "Access daily tips and practical templates for your HR practices",
      linkText: "Access Playbook",
      href: "/signup",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br font-family-SatoshiMedium  py-12 px-4">
      <div className="flex flex-col items-center">
        {/* Header Section */}
        <div
          className="flex
       flex-col items-center mb-10"
        >
          <button className="bg-secondary-50 flex py-1 px-4 rounded-3xl text-secondary font-bold space-x-1 ">
            <img src={Map} alt="" />
            <p>ADVENTURE MAP</p>
          </button>
          <div className="my-2">
            <p className="font-family-Roobert text-2xl text-secondary md:text-4xl text-center">
              Your HR Quest Begins
            </p>
            <p className="text-primary-text text-center">
              Follow the path to unlock powerful tools and level up your
              professional capabilities
            </p>
          </div>
          <Link to="/signup">
            <button
              className="w-full sm:w-auto mt-4 px-5 py-2 bg-secondary rounded-4xl font-family-SatoshiBold text-primary text-sm md:text-base cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              SignUp
            </button>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="relative flex flex-col items-center w-full max-w-4xl gap-20 mt-12 px-4">
          {/* SVG Path Container */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
          >
            {mapData.map((_, index) => {
              if (index === mapData.length - 1) return null;

              const startY = 100 + index * 200;
              const endY = 100 + (index + 1) * 200;

              const startX = index % 2 === 0 ? 20 : 80;
              const endX = index % 2 === 0 ? 80 : 20;

              return (
                <path
                  key={index}
                  d={`M ${startX} ${startY} Q 50 ${
                    (startY + endY) / 2
                  } ${endX} ${endY}`}
                  stroke="#F48D7F"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                  fill="none"
                  opacity="0.6"
                />
              );
            })}
          </svg>

          {mapData.map((item) => (
            <div
              className={`
    relative pt-12
    w-full max-w-md
    ${item.id % 2 === 1 ? "md:self-start" : "md:self-end"}
    self-center
    scale-95 sm:scale-100
  `}
            >
              {/* Round Image - positioned outside container */}
              <div
                className={`absolute flex items-center justify-center
    w-12 h-12 md:w-14 md:h-14
    rounded-full border-4 border-white shadow-lg
    ${item.id % 2 === 1 ? "lg:-left-16" : "lg:-right-16"}
    top-0 lg:top-10 ${
      item.id === 1
        ? "bg-secondary"
        : item.id === 2
        ? "bg-[#B9D5E7]"
        : item.id === 3 || item.id === 5
        ? "bg-[#F48D7F]"
        : "bg-[#F8F8F8]"
    }`}
              >
                <img
                  src={item.image}
                  alt={item.heading}
                  className={`top-15 className="w-5 h-5 md:w-6 md:h-6" rounded-full object-cover shadow-lg   z-10 ${
                    item.id % 2 === 1 ? "-left-16" : "-right-16"
                  }`}
                />
              </div>

              {/* Elevated Card */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow p-6 pt-12">
                <div className="mb-3">
                  <span
                    className={`text-xs font-bold uppercase tracking-wide ${
                      item.id % 2 === 1 ? "text-[#F48D7F] " : "text-[#B9D5E7] "
                    }`}
                  >
                    {item.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.heading}
                </h3>

                <p className="text-gray-600 mb-6 min-h-[3rem]">
                  {item.description}
                </p>

                <Link
                  to={item.href}
                  className="inline-flex items-center text-secondary font-semibold transition-colors group"
                >
                  {item.linkText}
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetStartedMap;
