import React from "react";
import PrivacyHero from "../components/PrivacyHero";
import Navbar from "../components/Navbar";
import PolicyNote from "../components/PolicyNote";
import Footer from "../components/Footer";
import ExploreComponent from "../components/ExploreComponent";
import Scenarios from "../components/Scenarios";
import CaseHero from "../components/CaseHero";
function CaseStudies() {
  return (
    <div>
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
      <CaseHero />
      <Scenarios />
      <div className="bg-secondary">
        <ExploreComponent />
      </div>
      <Footer />
    </div>
  );
}

export default CaseStudies;
