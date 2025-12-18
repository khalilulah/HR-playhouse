import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeHero1 from "../assets/images/Aundre.png";
import HomeHero2 from "../assets/images/Van.png";
import HomeHero3 from "../assets/images/Curly.png";
import HomeHero4 from "../assets/images/Proesc.png";

function HomeHero() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the card is from the top
      const distanceFromTop = rect.top;

      // Check if card is in viewport (with some threshold)
      const isInViewport = distanceFromTop < windowHeight * 0.8;

      // Trigger animation when entering viewport
      if (isInViewport && !isVisible) {
        setIsVisible(true);
      }

      // Reset animation when leaving viewport
      if (!isInViewport && isVisible) {
        setIsVisible(false);
      }

      // Calculate scale based on position
      if (distanceFromTop < windowHeight && distanceFromTop > 0) {
        const progress = 1 - distanceFromTop / windowHeight;
        const newScale = 0.9 + progress * 0.1;
        // setScale(Math.min(newScale, 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  // Track scroll progress of THIS section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "start end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Map scroll to rotation (0 → 90deg)
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={ref}
      className="mx-auto sm:h-auto max-w-400 flex flex-col space-y-6 md:space-y-8 items-center px-4 sm:px-6 lg:px-8 perspective-[1500px] relative my-12 md:my-16 lg:my-20"
    >
      {/* Heading */}
      <h1 className="font-family-Roobert text-secondary text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl self-center leading-tight">
        Redefining HR: Gamified,
        <br /> AI-Driven, Practical
      </h1>

      {/* Desktop Cards - Hidden on mobile/tablet */}
      <motion.div className="w-full hidden md:flex justify-center my-5">
        <div
          ref={cardRef}
          className="w-60 h-60 xl:w-70 xl:h-70 bg-cover hover:z-10 mt-10 bg-[#6C4FFF] rounded-3xl shadow-2xl transition duration-700 ease-out hover:scale-105"
          style={{
            backgroundImage: `url(${HomeHero1})`,
            transform: isVisible
              ? "perspective(1000px) translateX(0)"
              : "perspective(1000px) translateX(-100px)",
            opacity: isVisible ? 1 : 0,
          }}
        ></div>
        <div
          className="w-60 h-60 xl:w-70 xl:h-70 -ml-16 xl:-ml-20 bg-cover hover:z-10 bg-[#6C4FFF] rounded-3xl shadow-2xl transition duration-700 ease-out hover:scale-105"
          style={{
            backgroundImage: `url(${HomeHero2})`,
            transform: isVisible
              ? "perspective(1000px) translateY(0)"
              : "perspective(1000px) translateY(-200px)",
            opacity: isVisible ? 1 : 0,
          }}
        ></div>
        <div
          className="w-60 h-60 xl:w-70 xl:h-70 mt-10 -ml-16 xl:-ml-20 bg-cover hover:z-10 bg-[#6C4FFF] rounded-3xl shadow-2xl transition duration-700 ease-out hover:scale-105"
          style={{
            backgroundImage: `url(${HomeHero3})`,
            transform: isVisible
              ? "perspective(1000px) translateX(0)"
              : "perspective(1000px) translateX(100px)",
            opacity: isVisible ? 1 : 0,
          }}
        ></div>
        <div
          className="w-60 h-60 xl:w-70 xl:h-70 -ml-16 xl:-ml-20 bg-cover hover:z-10 bg-[#6C4FFF] rounded-3xl shadow-2xl transition duration-700 ease-out hover:scale-105"
          style={{
            backgroundImage: `url(${HomeHero4})`,
            transform: isVisible
              ? "perspective(1000px) translateY(0)"
              : "perspective(1000px) translateY(100px)",
            opacity: isVisible ? 1 : 0,
          }}
        ></div>
      </motion.div>

      {/* Mobile/Tablet Grid - Shown on smaller screens */}
      <div className="w-full grid grid-cols-2 gap-4 md:gap-6 md:hidden my-6 ">
        <div
          className="aspect-square bg-cover bg-center rounded-2xl shadow-xl duration-700 ease-out hover:scale-105"
          style={{ backgroundImage: `url(${HomeHero1})` }}
        ></div>
        <div
          className="aspect-square bg-cover bg-center rounded-2xl shadow-xl duration-700 ease-out hover:scale-105"
          style={{ backgroundImage: `url(${HomeHero2})` }}
        ></div>
        <div
          className="aspect-square bg-cover bg-center rounded-2xl shadow-xl duration-700 ease-out hover:scale-105"
          style={{ backgroundImage: `url(${HomeHero3})` }}
        ></div>
        <div
          className="aspect-square bg-cover bg-center rounded-2xl shadow-xl duration-700 ease-out hover:scale-105"
          style={{ backgroundImage: `url(${HomeHero4})` }}
        ></div>
      </div>

      {/* Text and Buttons */}
      <div className="max-w-120 flex space-y-4 md:space-y-5 flex-col items-center">
        <p className="font-family-SatoshiMedium text-center text-base sm:text-lg md:text-xl text-primary-text px-4">
          Empower your HR career with gamified learning and AI insights, where
          practical experience meets innovation
        </p>
        <div className="flex sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <button className="w-full sm:w-auto px-5 py-2.5 md:py-3 bg-secondary-50 rounded-4xl font-family-SatoshiBold text-secondary text-sm md:text-base cursor-pointer hover:opacity-90 transition-opacity">
            Login
          </button>
          <button className="w-full sm:w-auto px-5 py-2.5 md:py-3 bg-secondary rounded-4xl font-family-SatoshiBold text-primary text-sm md:text-base cursor-pointer hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
