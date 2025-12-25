import React, { useEffect, useRef, useState } from "react";
import Office from "../assets/images/Office.png";
import Office2 from "../assets/images/Office2.png";
import Office3 from "../assets/images/Office3.png";
import { Link } from "react-router-dom";

function Playbook() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

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

    // Cards observer
    const cardObservers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current);
      }
      cardObservers.forEach((observer, index) => {
        if (cardRefs.current[index]) {
          observer.unobserve(cardRefs.current[index]);
        }
      });
    };
  }, []);

  return (
    <div className="max-w-400 m-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8 mb-0.5 sm:mb-1">
      <div>
        {/* heading */}
        <div className="relative z-10">
          <div
            ref={headerRef}
            className={`mb-8 md:mb-10 transition-all duration-700 ${
              isHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="font-family-Roobert mb-1 text-seconday-text text-3xl md:text-5xl lg:text-6xl">
              Fresh from the Playbook
            </p>
            <p className="text-seconday-text text-base md:text-lg lg:text-xl">
              Daily doses of HR wisdom to keep you sharp.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="text-seconday-text font-family-RoobertMedium grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className={`flex flex-col transition-all duration-700 delay-100 ${
              visibleCards.includes(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={Office}
              alt="image"
              className="rounded-xl w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
            />
            <div className="my-5 flex-grow">
              <p className="font-family-Roobert text-2xl md:text-3xl mb-2">
                How to handle a difficult exit interview.
              </p>
              <p className="text-base sm:text-lg">
                3 key questions to ask that preserve the relationship...
              </p>
            </div>
            <Link
              to="/resources"
              className="px-5 py-2 border hover:cursor-pointer rounded-4xl border-seconday-text hover:bg-seconday-text hover:text-secondary transition-colors w-fit"
            >
              Learn more
            </Link>
          </div>

          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className={`flex flex-col transition-all duration-700 delay-200 ${
              visibleCards.includes(1)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={Office2}
              alt="image"
              className="rounded-xl w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
            />
            <div className="my-5 flex-grow">
              <p className="font-family-Roobert text-2xl md:text-3xl mb-2">
                Free Onboarding Checklist Template.
              </p>
              <p className="text-base sm:text-lg">
                Discover how automation is freeing up time for human
                connection...
              </p>
            </div>
            <Link
              to="/resources"
              className="px-5 py-2 border hover:cursor-pointer rounded-4xl border-seconday-text hover:bg-seconday-text hover:text-secondary transition-colors w-fit"
            >
              Learn more
            </Link>
          </div>

          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className={`flex flex-col transition-all duration-700 delay-300 ${
              visibleCards.includes(2)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={Office3}
              alt="image"
              className="rounded-xl w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
            />
            <div className="my-5 flex-grow">
              <p className="font-family-Roobert text-2xl md:text-3xl mb-2">
                Why AI is the new HR Assistant.
              </p>
              <p className="text-base sm:text-lg">
                Discover how automation is freeing up time for human
                connection...
              </p>
            </div>
            <Link
              to="/resources"
              className="px-5 py-2 border hover:cursor-pointer rounded-4xl border-seconday-text hover:bg-seconday-text hover:text-secondary transition-colors w-fit"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playbook;
