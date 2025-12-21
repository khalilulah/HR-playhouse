import React, { useEffect, useRef, useState } from "react";
import Open from "../assets/images/Open.svg";
import Close from "../assets/images/Close.svg";

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
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Header observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    // Items observer
    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index]);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
    });
  }, []);

  return (
    <div className="font-family-SatoshiMedium max-w-400 mx-auto px-4 sm:px-6 lg:px-8 m-auto py-8 md:py-12 text-primary-text">
      <p
        ref={headerRef}
        className={`font-family-Roobert mb-6 text-3xl text-secondary md:text-6xl transition-all duration-700 ${
          isHeaderVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        Frequently asked questions
      </p>
      <div className="flex flex-col space-y-10">
        {data.map((item, index) => {
          const isVisible = visibleItems.includes(index);
          const delays = ["delay-100", "delay-200", "delay-300"];

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`flex flex-col bg-[#F7F7F7] p-10 rounded-2xl transition-all duration-700 hover:shadow-lg ${
                delays[index]
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-full flex justify-between space-x-4">
                <h2 className="text-md text-secondary sm:text-xl font-bold mb-3">
                  {item.heading}
                </h2>
                <div
                  className="hover:cursor-pointer transition-transform duration-300 hover:scale-110"
                  onClick={() => toggleItem(index)}
                >
                  {openIndex === index ? (
                    <img
                      src={Close}
                      alt="Close"
                      className="rounded-lg max-w-8 sm:max-w-10 object-cover transition-transform duration-300 rotate-90"
                    />
                  ) : (
                    <img
                      src={Open}
                      alt="Open"
                      className="rounded-lg max-w-8 sm:max-w-10 object-cover"
                    />
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="w-full pt-2">
                  <p className="mb-4 text-primary-text text-base sm:text- md:text-lg lg:text-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
