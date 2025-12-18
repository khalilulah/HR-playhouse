import React from "react";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Solutions from "../components/Solutions";
import Path from "../components/Path";
import Playbook from "../components/Playbook";
import ExploreComponene from "../components/ExploreComponent";
import ExploreComponent from "../components/ExploreComponent";
import ConnectComponent from "../components/ConnectComponent";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(71, 85, 105, 0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71, 85, 105, 0.09) 1px, transparent 1px)
      `,
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, rgba(1, 1, 1, 1) 0%, rgba(0, 0, 0, 0.3) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(1  , 1, 1, 1) 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />
      <Navbar />
      <HomeHero />
      <Solutions />
      <Path />
      <div className="bg-secondary">
        <Playbook />
      </div>
      <div className="bg-secondary">
        <ExploreComponent />
      </div>
      <ConnectComponent />
      <Footer />
    </div>
  );
}

export default Home;
