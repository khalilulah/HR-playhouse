import React from "react";
import Brand1 from "../assets/images/Brand1.png";

function Path() {
  return (
    <div className="max-w-400 m-auto px-4 sm:px-6 lg:px-8 my-12 md:my-20 lg:my-32">
      {/* heading */}
      <div className="relative z-10">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <p className="font-family-Roobert mb-1 md:mb-3 text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Your Path to Excellence
          </p>
          <p className="text-primary-text text-base sm:text-lg md:text-xl">
            We exist to bridge the gap between foundational learning and
            executive leading.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Line in the middle */}
        <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 h-full w-auto z-0">
          <img
            src="src/assets/images/Line.png"
            alt=""
            className="h-full w-auto object-cover"
          />
        </div>

        <div className="relative z-10 space-y-12 md:space-y-16 lg:space-y-20">
          {/* Step 1 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 lg:justify-between">
            <div className="w-full lg:w-[45%]">
              <img
                src="src/assets/images/Brand1.png"
                alt="Learn & Play"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-100 xl:h-116 rounded-xl md:rounded-2xl object-cover bg-secondary"
              />
            </div>

            <div className="w-full lg:w-[45%] flex items-center">
              <div className="w-full">
                <p className="font-family-Roobert mb-3 md:mb-4 text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Step 1: Learn & Play
                </p>
                <p className="text-primary-text text-base sm:text-lg md:text-xl leading-relaxed">
                  Start by creating your personalized profile and jumping into
                  immersive, gamified learning modules. Instead of passive
                  watching, you will engage in interactive scenarios—earning XP
                  and Badges for every HR concept you master.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 lg:gap-12 lg:justify-between">
            <div className="w-full lg:w-[45%]">
              <img
                src="src/assets/images/Brand2.png"
                alt="Apply & Optimize"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-100 xl:h-116 rounded-xl md:rounded-2xl object-cover bg-secondary"
              />
            </div>

            <div className="w-full lg:w-[45%] flex items-center">
              <div className="w-full">
                <p className="font-family-Roobert mb-3 md:mb-4 text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Step 2: Apply & Optimize
                </p>
                <p className="text-primary-text text-base sm:text-lg md:text-xl leading-relaxed">
                  Bridge the gap between theory and execution instantly. Access
                  the Everyday Playbook for daily tips and ready-to-use
                  templates, then use our AI-Powered Support to upload your own
                  HR documents for intelligent feedback and optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 lg:justify-between">
            <div className="w-full lg:w-[45%]">
              <img
                src="src/assets/images/Brand3.png"
                alt="Solve & Innovate"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-100 xl:h-116 rounded-xl md:rounded-2xl object-cover bg-secondary"
              />
            </div>

            <div className="w-full lg:w-[45%] flex items-center">
              <div className="w-full">
                <p className="font-family-Roobert mb-3 md:mb-4 text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Step 3: Solve & Innovate
                </p>
                <p className="text-primary-text text-base sm:text-lg md:text-xl leading-relaxed">
                  Step into the Innovation Lab to collaborate on authentic
                  industry challenges with peers and mentors. Sharpen your
                  critical thinking in the Case Study Vault, navigating complex
                  decision-tree scenarios backed by expert commentary.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 - Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 lg:gap-12 lg:justify-between">
            <div className="w-full lg:w-[45%]">
              <img
                src="src/assets/images/Brand4.png"
                alt="Achieve & Ascend"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-100 xl:h-116 rounded-xl md:rounded-2xl object-cover bg-secondary"
              />
            </div>

            <div className="w-full lg:w-[45%] flex items-center">
              <div className="w-full">
                <p className="font-family-Roobert mb-3 md:mb-4 text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Step 4: Achieve & Ascend
                </p>
                <p className="text-primary-text text-base sm:text-lg md:text-xl leading-relaxed">
                  Turn your progress into professional power. Earn
                  industry-recognized certificates upon completion and unlock
                  exclusive internship pathways designed to boost your
                  employability and fast-track your HR career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Path;
