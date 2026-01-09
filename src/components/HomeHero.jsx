import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeHero1 from "../assets/images/Aundre.png";
import HomeHero2 from "../assets/images/Van.png";
import HomeHero3 from "../assets/images/Curly.png";
import HomeHero4 from "../assets/images/Proesc.png";
import { Link } from "react-router-dom";

function HomeHero() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Track scroll progress of THIS section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "start end"],
  });

  // Sponsor logos data (replace with your actual sponsor names/logos)
  const sponsors = [
    "Microsoft",
    "Google",
    "Amazon",
    "Meta",
    "Apple",
    "Netflix",
    "Tesla",
    "Oracle",
    "Salesforce",
    "Adobe",
  ];

  return (
    <section
      ref={ref}
      className="mx-auto sm:h-auto max-w-400 flex flex-col space-y-6 md:space-y-8 items-center px-4 sm:px-6 lg:px-8 perspective-[1500px] relative my-12 md:my-16 lg:my-20"
    >
      {/* Heading */}
      <motion.h1
        className="font-family-Roobert text-secondary text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl self-center leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Redefining HR: Gamified,
        <br /> AI-Driven, Practical
      </motion.h1>

      {/* Desktop Cards - Hidden on mobile/tablet */}
      <div className="w-full hidden md:flex justify-center my-5">
        <motion.div
          ref={cardRef}
          className="w-60 h-60 xl:w-70 xl:h-70 bg-cover hover:z-10 mt-10 rounded-3xl shadow-2xl hover:shadow-3xl"
          style={{ backgroundImage: `url(${HomeHero1})` }}
          initial={{ opacity: 0, x: -100, rotateY: -20 }}
          animate={
            isVisible
              ? { opacity: 1, x: 0, rotateY: 0 }
              : { opacity: 0, x: -100, rotateY: -20 }
          }
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
        ></motion.div>
        <motion.div
          className="w-60 h-60 xl:w-70 xl:h-70 -ml-16 xl:-ml-20 bg-cover hover:z-10 rounded-3xl shadow-2xl hover:shadow-3xl"
          style={{ backgroundImage: `url(${HomeHero2})` }}
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={
            isVisible
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: -100, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -10 }}
        ></motion.div>
        <motion.div
          className="w-60 h-60 xl:w-70 xl:h-70 mt-10 -ml-16 xl:-ml-20 bg-cover hover:z-10 rounded-3xl shadow-2xl hover:shadow-3xl"
          style={{ backgroundImage: `url(${HomeHero3})` }}
          initial={{ opacity: 0, x: 100, rotateY: 20 }}
          animate={
            isVisible
              ? { opacity: 1, x: 0, rotateY: 0 }
              : { opacity: 0, x: 100, rotateY: 20 }
          }
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotateY: -5 }}
        ></motion.div>
        <motion.div
          className="w-60 h-60 xl:w-70 xl:h-70 -ml-16 xl:-ml-20 bg-cover hover:z-10 rounded-3xl shadow-2xl hover:shadow-3xl"
          style={{ backgroundImage: `url(${HomeHero4})` }}
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={
            isVisible
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 100, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: 10 }}
        ></motion.div>
      </div>

      {/* Mobile/Tablet Grid - Shown on smaller screens with animations */}
      <div className="w-full grid grid-cols-2 gap-4 md:gap-6 md:hidden my-6">
        <motion.div
          className="aspect-square bg-cover bg-center rounded-2xl shadow-xl"
          style={{ backgroundImage: `url(${HomeHero1})` }}
          initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
          animate={
            isVisible
              ? { opacity: 1, scale: 1, rotateZ: 0 }
              : { opacity: 0, scale: 0.8, rotateZ: -10 }
          }
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        ></motion.div>
        <motion.div
          className="aspect-square bg-cover bg-center rounded-2xl shadow-xl"
          style={{ backgroundImage: `url(${HomeHero2})` }}
          initial={{ opacity: 0, scale: 0.8, rotateZ: 10 }}
          animate={
            isVisible
              ? { opacity: 1, scale: 1, rotateZ: 0 }
              : { opacity: 0, scale: 0.8, rotateZ: 10 }
          }
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        ></motion.div>
        <motion.div
          className="aspect-square bg-cover bg-center rounded-2xl shadow-xl"
          style={{ backgroundImage: `url(${HomeHero3})` }}
          initial={{ opacity: 0, scale: 0.8, rotateZ: 10 }}
          animate={
            isVisible
              ? { opacity: 1, scale: 1, rotateZ: 0 }
              : { opacity: 0, scale: 0.8, rotateZ: 10 }
          }
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        ></motion.div>
        <motion.div
          className="aspect-square bg-cover bg-center rounded-2xl shadow-xl"
          style={{ backgroundImage: `url(${HomeHero4})` }}
          initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
          animate={
            isVisible
              ? { opacity: 1, scale: 1, rotateZ: 0 }
              : { opacity: 0, scale: 0.8, rotateZ: -10 }
          }
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        ></motion.div>
      </div>

      {/* Text and Buttons */}
      <div className="max-w-120 flex space-y-4 md:space-y-5 flex-col items-center">
        <motion.p
          className="font-family-SatoshiMedium text-center text-base sm:text-lg lg:text-xl text-primary-text px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          Empower your HR career with gamified learning and AI insights, where
          practical experience meets innovation
        </motion.p>
        <motion.div
          className="flex sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <Link
            to="https://learn.thehrplayhousehub.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="w-full sm:w-auto px-5 py-2.5 md:py-3 bg-secondary rounded-4xl font-family-SatoshiBold text-primary text-sm md:text-base cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
          <Link
            to="https://learn.thehrplayhousehub.org/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="w-full sm:w-auto px-7 py-2.5 md:py-3 bg-secondary-50 rounded-3xl font-family-SatoshiBold text-secondary text-sm md:text-base cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Sponsors Marquee */}
      <motion.div
        className="w-full overflow-hidden mt-12 md:mt-16"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
      >
        <div className="text-center mb-6">
          <p className="text-primary-text/60 font-family-SatoshiMedium text-sm md:text-base uppercase tracking-wider">
            Trusted by Leading Organizations
          </p>
        </div>
        <div className="relative flex overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

          {/* First set of sponsors */}
          <motion.div
            className="flex gap-12 md:gap-16 lg:gap-20 pr-12 md:pr-16 lg:pr-20"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {sponsors.concat(sponsors).map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-fit"
              >
                <span className="text-secondary/40 hover:text-secondary transition-colors duration-300 font-family-SatoshiBold text-xl md:text-2xl lg:text-3xl whitespace-nowrap cursor-pointer">
                  {sponsor}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second set of sponsors for seamless loop */}
          <motion.div
            className="flex gap-12 md:gap-16 lg:gap-20 pr-12 md:pr-16 lg:pr-20"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {sponsors.concat(sponsors).map((sponsor, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center justify-center min-w-fit"
              >
                <span className="text-secondary/40 hover:text-secondary transition-colors duration-300 font-family-SatoshiBold text-xl md:text-2xl lg:text-3xl whitespace-nowrap cursor-pointer">
                  {sponsor}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HomeHero;
