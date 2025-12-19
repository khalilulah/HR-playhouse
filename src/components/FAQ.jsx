import React, { useState } from "react";

const data = [
  {
    heading: `How does the "Gamified Learning" work?`,
    description: `We believe learning shouldn't be boring. As you complete modules and solve challenges, you earn XP (Experience Points) and unlock badges. You can track your "Learner's Ascent" and even compete on the community leaderboard if you choose to.`,
  },
  {
    heading: "Is my data safe when I use the AI Support tool?",
    description:
      "Yes. We take data privacy very seriously. Documents you upload for AI analysis (like CVs or policies) are processed securely and are not shared with third parties. We recommend removing personal identifiers (like names/phone numbers) before uploading, just to be safe.",
  },
  {
    heading: `What is the "Innovation Lab"?`,
    description: `The Lab is our virtual co-working space. It's a community forum where you can collaborate with other members to solve "Live Challenges," share insights, and network with mentors.`,
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-family-SatoshiMedium max-w-400 mx-auto px-4 sm:px-6 lg:px-8 m-auto py-8 md:py-12 text-primary-text">
      <p className="font-family-Roobert mb-6 text-3xl text-secondary md:text-6xl">
        Frequently asked questions
      </p>
      <div className="flex flex-col space-y-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#F7F7F7] p-10 rounded-2xl transition-shadow duration-300"
          >
            <div className="w-full flex justify-between space-x-4">
              <h2 className="text-xl text-secondary sm:text-2xl font-bold mb-3">
                {item.heading}
              </h2>
              <div
                className="hover:cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                {openIndex === index ? (
                  <img
                    src="src/assets/images/Close.svg"
                    alt="Close"
                    className="rounded-lg max-w-10 object-cover"
                  />
                ) : (
                  <img
                    src="src/assets/images/Open.svg"
                    alt="Open"
                    className="rounded-lg max-w-10 object-cover"
                  />
                )}
              </div>
            </div>

            {openIndex === index && (
              <div className="w-full">
                <p className="mb-4 text-primary-text text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
