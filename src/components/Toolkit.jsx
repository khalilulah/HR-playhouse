import React from "react";

export default function DataCards() {
  const data = [
    {
      image: "src/assets/images/Solutions1.png",
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
      image: "src/assets/images/Solutions2.png",
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
      image: "src/assets/images/Solutions3.png",
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
      image: "src/assets/images/Solutions4.png",
      heading: "Virtual Innovation Lab",
      description:
        "HR doesn't happen in a vacuum. The Innovation Lab is a digital co-working space where you can join forces with peers and mentors to tackle live industry challenges. It’s where theory meets the messiness of the real world.",
      items: [
        "Group Challenges: Work on teams to solve complex problems.",
        "Mentor Access: Get guidance from seasoned industry pros.",
        "Peer Networking: Build connections while you work.",
      ],
    },
    {
      image: "src/assets/images/Solutions5.png",
      heading: "The Case Study Vault",
      description: `Access a curated library of historical and hypothetical HR cases. Analyze the "Decision Trees" to see how different choices lead to different strategic outcomes, backed by expert commentary and legal precedents.`,
      items: [
        "Root Cause Analysis: Learn to identify the real problem.",
        "Strategic Decision Trees: Visualize the impact of your choices.",
        "Expert Commentary: See how top CHROs would handle the situation.",
      ],
    },
  ];

  return (
    <div className="font-family-SatoshiMedium max-w-400 mx-auto px-4 sm:px-6 lg:px-8 m-auto py-8 md:py-12 text-primary-text">
      <p className="font-family-Roobert mb-6 text-3xl text-secondary md:text-6xl">
        This isn't just a course; it's a toolkit.
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

              <div>
                <b className="text-secondary">Freatures</b>
                <ul className="space-y-2 ml-3">
                  {item.items.map((listItem, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm sm:text-base"
                    >
                      <span className="w-2 h-2 bg-primary-text rounded-full mr-3 flex-shrink-0"></span>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
