import React from "react";
import Solutions1 from "../assets/images/AboutStudio.png";
import Solutions2 from "../assets/images/AboutStudents.png";

import Solutions5 from "../assets/images/AboutMarketing.png";

function Different() {
  return (
    <div className="font-family-SatoshiMedium max-w-400 px-4 sm:px-6 lg:px-8 m-auto">
      <div className=" flex justify-between md:items-center flex-col md:flex-row mb-9">
        <p className="font-family-Roobert mb-1 text-3xl text-secondary md:text-6xl">
          How We Are Different
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full">
        <div
          className="bg-secondary bg-cover bg-center h-86 rounded-[10px] flex flex-col justify-end text-xl text-primary p-5"
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
          className="bg-secondary text-xl bg-cover h-86 rounded-[10px] flex flex-col justify-end text-primary p-5"
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
          className="bg-secondary text-xl bg-cover h-86 rounded-[10px] col-span-1 md:col-span-2 flex flex-col justify-end text-primary p-5"
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

export default Different;
