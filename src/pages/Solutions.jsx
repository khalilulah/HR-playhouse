import React from "react";
import TermsHero from "../components/TermsHero";
import Footer from "../components/Footer";
import ExploreComponent from "../components/ExploreComponent";
import PolicyNote from "../components/PolicyNote";
import Navbar from "../components/Navbar";
import SolutionHero from "../components/SolutionHero";
import Toolkit from "../components/Toolkit";
function Solutions() {
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
      <SolutionHero />
      <Toolkit />
      <div className="bg-secondary">
        <ExploreComponent />
      </div>
      <Footer />
    </div>
  );
}

export default Solutions;
