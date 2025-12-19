import React from "react";
import Solutions1 from "../assets/images/Wall-Street1.png";
import Solutions2 from "../assets/images/Wall-Street2.png";
import Solutions3 from "../assets/images/Wall-Street3.png";
import Solutions4 from "../assets/images/Wall-Street4.png";
import Solutions5 from "../assets/images/Wall-Street5.png";

function Solutions() {
  return (
    <div className="font-family-SatoshiMedium max-w-400 px-4 sm:px-6 lg:px-8 m-auto">
      <div className=" flex justify-between md:items-center flex-col md:flex-row mb-9">
        <div className="sm:mr-10">
          <p className="font-family-Roobert mb-1 text-3xl text-secondary md:text-6xl">
            Our Core Solutions
          </p>
          <p className="text-primary-text text-base md:text-xl">
            A comprehensive, interactive ecosystem containing everything you
            need to master modern HR.
          </p>
        </div>
        <button className="px-2.5 lg:px-5 py-1 lg:py-2 h-10 w-30 mt-5 md:mt-0 bg-secondary rounded-4xl font-family-SatoshiBold text-primary text-sm lg:text-md cursor-pointer">
          Learn more
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div
          className="bg-secondary bg-cover h-96 rounded-[10px] flex flex-col justify-end text-xl text-primary p-5"
          style={{
            backgroundImage: `url(${Solutions1})`,
          }}
        >
          <p className="font-family-SatoshiBold text-base sm:text-lg md:text-xl">
            Innovation Lab
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Collaborate on real-world HR challenges. Join project rooms, find
            mentors, and solve actual industry problems with peers.
          </p>
        </div>
        <div
          className="bg-secondary text-xl bg-cover h-96 rounded-[10px] flex flex-col justify-end text-primary p-5"
          style={{
            backgroundImage: `url(${Solutions2})`,
          }}
        >
          <p className="font-family-SatoshiBold text-base sm:text-lg md:text-xl">
            Gamified Learning
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Engage in interactive, scenario-based learning. Earn XP, badges, and
            track your progress as you master HR skills.
          </p>
        </div>
        <div
          className="bg-secondary text-xl bg-cover h-96 rounded-[10px] flex flex-col justify-end text-primary p-5"
          style={{
            backgroundImage: `url(${Solutions3})`,
          }}
        >
          <p className="font-family-SatoshiBold text-base sm:text-lg md:text-xl">
            AI-Powered HR Support
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Your smart assistant. Upload HR documents for instant AI-driven
            feedback, insights, and compliance checks.
          </p>
        </div>
        <div
          className="bg-secondary text-xl bg-cover h-96 rounded-[10px] flex flex-col justify-end text-primary p-5"
          style={{
            backgroundImage: `url(${Solutions4})`,
          }}
        >
          <p className="font-family-SatoshiBold text-base sm:text-lg md:text-xl">
            Case Study Vault
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Sharpen your decision-making. Explore a library of real-world HR
            cases with decision-tree scenarios and expert solutions.
          </p>
        </div>
        <div
          className="bg-secondary text-xl bg-cover bg-center h-96 rounded-[10px] col-span-1 md:col-span-2 flex flex-col justify-end text-primary p-5"
          style={{
            backgroundImage: `url(${Solutions5})`,
          }}
        >
          <div className="md:w-150">
            <p className="font-family-SatoshiBold text-base sm:text-lg md:text-xl mb-2">
              Everyday HR Playbook
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              Your daily toolkit. Access daily tips, micro-learning streaks, and
              ready-to-use templates for your immediate work needs.
            </p>
          </div>
        </div>
        <div class=""></div>
      </div>
    </div>
  );
}

export default Solutions;
