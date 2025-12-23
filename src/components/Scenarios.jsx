import React, { useEffect, useRef, useState } from "react";
import ScenarioImg from "../assets/images/ScenarioImg.webp";
import ScenarioImg2 from "../assets/images/ScenarioImg2.webp";
import ScenarioImg3 from "../assets/images/ScenarioImg3.webp";
import ScenarioImg4 from "../assets/images/ScenarioImg4.webp";
import ScenarioImg5 from "../assets/images/ScenarioImg5.webp";

export default function DataCards() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const data = [
    {
      image: `${ScenarioImg}`,
      heading: "Gamified Learning Modules",
      description:
        "Forget boring slide decks. Our interactive modules place you in realistic HR scenarios where your choices matter. Navigate employee conflicts, compliance risks, and recruitment challenges in a risk-free virtual environment.",
      items: [
        "XP & Badges: Earn rewards as you master concepts.",
        "Interactive Storylines: Branching narratives where your decisions change the outcome.",
        "Instant Feedback: Understand why an answer was right or wrong immediately.",
      ],
    },
    {
      image: `${ScenarioImg2}`,
      heading: "The Everyday HR Playbook",
      description:
        "Consistency creates mastery. The Playbook is your daily companion, offering bite-sized wisdom and practical tools to keep you sharp. From quick tips to downloadable templates, it ensures you are ready for whatever the workday throws at you",
      items: [
        "Daily Tips: A fresh insight or micro-lesson every morning.",
        "Template Library: Ready-to-use forms, checklists, and letters.",
        "Streak Tracking: Build a habit of continuous learning.",
      ],
    },
    {
      image: `${ScenarioImg3}`,
      heading: "AI-Powered HR Support",
      description:
        "Need a second pair of eyes on that policy draft? Our AI support system analyzes your documents—CVs, memos, compliance forms—and provides instant, actionable feedback to improve clarity, tone, and legal alignment.",
      items: [
        "Document Scanning: Upload files for instant review.",
        "Optimization Suggestions: Get specific edits to improve your writing.",
        "Compliance Checks: Flag potential risks before you hit send.",
      ],
    },
    {
      image: `${ScenarioImg4}`,
      heading: "Virtual Innovation Lab",
      description:
        "HR doesn't happen in a vacuum. The Innovation Lab is a digital co-working space where you can join forces with peers and mentors to tackle live industry challenges. It's where theory meets the messiness of the real world.",
      items: [
        "Group Challenges: Work on teams to solve complex problems.",
        "Mentor Access: Get guidance from seasoned industry pros.",
        "Peer Networking: Build connections while you work.",
      ],
    },
    {
      image: `${ScenarioImg5}`,
      heading: "The Case Study Vault",
      description: `Access a curated library of historical and hypothetical HR cases. Analyze the "Decision Trees" to see how different choices lead to different strategic outcomes, backed by expert commentary and legal precedents.`,
      items: [
        "Root Cause Analysis: Learn to identify the real problem.",
        "Strategic Decision Trees: Visualize the impact of your choices.",
        "Expert Commentary: See how top CHROs would handle the situation.",
      ],
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
        Real-World Scenarios
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
                  className="w-full h-100 rounded-lg object-cover transition-transform duration-500"
                />
              </div>

              <div className="w-full mt-5 md:w-1/2 md:pl-6 md:mt-0">
                <h2 className="text-xl text-secondary sm:text-2xl font-bold mb-3">
                  {item.heading}
                </h2>

                <p className="mb-4 text-base sm:text-lg">{item.description}</p>

                <div>
                  <b className="text-secondary">Features</b>
                  <ul className="space-y-2 ml-3">
                    {item.items.map((listItem, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-base sm:text-lg"
                      >
                        <span className="w-2 h-2 bg-primary-text rounded-full mr-3 flex-shrink-0"></span>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
